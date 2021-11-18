//========================================
// TF_Shadow.js
// Version :0.7.2.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2021
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:ja
 * @target MZ
 * @plugindesc キャラに影をつける
 * @author とんび@鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Shadow.js
 *
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @param radius @text 大きさ(半径)
 * @desc 横, 縦
 * 規定値: 18,9
 * @type string @default 18,9
 *
 * @param shiftY @text 上下位置調整
 * @desc ファイル頭 ! による調整には自動対応する
 * ので、ここでの調整の必要はない。
 * @type number @default -2
 * @min -9999
 *
 * @param color @text 影色
 * @desc CSS Color形式
 * 規定値:#0006
 * @type string @default #0006
 *
 * @param strength @text ぼかし強度
 * @desc 大きいほどボケて薄くなる。
 * 規定値:4
 * @type number @default 4
 * 
 * @================================================
 * @help
 * イベントなどに丸い影をつける。
 * 影はベクター描画するので、画像ファイル不要。
 * 
 * プレイヤー、隊列メンバー、イベントは img/character/ の画像で
 * ! が頭についていないものには自動でつく。
 * 
 * 自動とは別の設定にしたい場合は、
 * プレイヤーと隊列メンバーはデータベースの[アクター]のメモ欄、
 * また[イベント]のメモ欄に次のタグを書ける。
 * 
 * <TF_SHADOW>
 * または、<TF_SHADOW:true>
 * 
 * 逆に影を消したい場合は以下のタグ。
 * <TF_SHADOW:false>
 * 
 * 以下で影の半径を指定できる。
 * <TF_SHADOW:x,y>
 *
 * [移動ルートの指定]の[スクリプト]
 * this.TF_hasShadow( true );   // 影をつける
 * this.TF_hasShadow( false );   // 影を消す
 * this.TF_shadowRadius( 20, 9 );   // 影の半径設定(横, 縦)
 *
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 *
 * @================================================
 * @command hasShadow @text 影の表示
 * @desc 指定キャラの影のON・OFF
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 *
 * @arg hasShadow @text 影を持つか
 * @desc
 * @type boolean @default true
 *
 * @================================================
 * @command shadowRadius @text 影の大きさ変更
 * @desc 指定キャラの影の大きさ変更
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 *
 * @arg radius @text 影の大きさ(半径)
 * @desc 横, 縦
 * 規定値: 18,9
 * @type string @default 18,9
 *
 * @================================================
 * @command shadowY @text 影の上下位置調整
 * @desc 指定キャラの影の上下位置調整
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 *
 * @arg shiftY @text 上下位置調整
 * @desc 
 * @type number @default -2
 * @min -9999
 */
( () => {
    "use strict";
    const PLUGIN_NAME = "TF_Shadow";
    const TF_SHADOW = "TF_SHADOW";  // タグ名
    const COM_HAS_SHADOW = "hasShadow";
    const COM_SHADOW_RADIUS = "shadowRadius";
    const COM_SHADOW_Y = "shadowY";

    /*---- パラメータパース関数 ----*/
    const TYPE_NUMBER = "number";
    const TYPE_STRING = "string";
    /**
     * 与えられた文字列に変数が指定されていたら、変数の内容に変換して返す。
     * @param {String} value 変換元の文字列( \V[n]形式を含む )
     * @return {String} 変換後の文字列
     */
    function treatValue( value ) {
        if( typeof value === TYPE_NUMBER ) return value;
        if( value === undefined || value === "" ) return "0";
        const result = value.match( /\x1bV\[(.+)\]/i );
        if( result === null ) return value;
        const id = parseInt( result[ 1 ], 10 );
        if( isNaN( id ) ) {
            return $gameVariables.valueByName( result[ 1 ] );
        } else {
            return $gameVariables.value( id );
        }
    }

    /*---- イベントIDの配置オフセット ----*/
    const FOLLOWER_OFFSET = -2;
    const VEHICLE_OFFSET = -100;

    /*---- イベントID変換用文字列 ----*/
    const EVENT_THIS = "this";
    const EVENT_PLAYER = "player";
    const EVENT_FOLLOWER0 = "follower0";
    const EVENT_FOLLOWER1 = "follower1";
    const EVENT_FOLLOWER2 = "follower2";
    const VEHICLE_BOAT = "boat";
    const VEHICLE_SHIP = "ship";
    const VEHICLE_AIRSHIP = "airship";

    /**
     * character を拡張して隊列メンバーも指定できるようにしたもの。
     * @param {Game_Interpreter} interpreter インタプリタ
     * @param {Number} id 拡張イベントID
     * @returns {Game_CharacterBase}
     */
    function getEventById( interpreter, id ) {
        if( id <= VEHICLE_OFFSET ) {
            return $gameMap._vehicles[ VEHICLE_OFFSET - id ];			// 乗り物(0〜2)
        } else if( id <= FOLLOWER_OFFSET ) {
            return $gamePlayer.followers().follower( FOLLOWER_OFFSET - id );			// 隊列メンバー(0〜2)
        } else {
            return interpreter.character( id );			// プレイヤーキャラおよびイベント
        }
    }

    /**
     * 文字列をイベントIDへ変換
     * @param {String} value イベントIDの番号か識別子
     * @returns {Number} 拡張イベントID
     */
    function stringToEventId( value ) {
        value = treatValue( value );
        const result = parseInt( value, 10 );
        if( !isNaN( result ) ) return result;

        const lowValue = value.toLowerCase();
        switch( lowValue ) {
            case EVENT_THIS: return 0;
            case EVENT_PLAYER: return -1;
            case EVENT_FOLLOWER0: return FOLLOWER_OFFSET;
            case EVENT_FOLLOWER1: return FOLLOWER_OFFSET - 1;
            case EVENT_FOLLOWER2: return FOLLOWER_OFFSET - 2;
            case VEHICLE_BOAT: return VEHICLE_OFFSET;
            case VEHICLE_SHIP: return VEHICLE_OFFSET - 1;
            case VEHICLE_AIRSHIP: return VEHICLE_OFFSET - 2;
        }

        const e = $dataMap.events.find( e => e && e.name === value );
        if( e === undefined ) throw Error( `${PLUGIN_NAME}: I can't find the event '${value}'` );
        return e.id;
    }


    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );
    const shadowRadius = stringToPoint( pluginParams.radius );


    PluginManagerEx.registerCommand( document.currentScript, COM_HAS_SHADOW, function( args ) {
        const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
        targetEvent.TF_hasShadow( args.hasShadow );
    } );

    PluginManagerEx.registerCommand( document.currentScript, COM_SHADOW_RADIUS, function( args ) {
        const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
        const radius = stringToPoint( args.radius );
        targetEvent.TF_shadowRadius( radius.x, radius.y );
    } );

    PluginManagerEx.registerCommand( document.currentScript, COM_SHADOW_Y, function( args ) {
        const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
        targetEvent.TF_shadowY( args.shiftY );
    } );

    /*--- Spriteset_Map ---*/
    const _Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
    Spriteset_Map.prototype.createCharacters = function() {
        _Spriteset_Map_createCharacters.call( this );
        this._characterSprites.forEach( e => {
            e._character.hasShadow = hasShadow( e._character );
            if( e._character.hasShadow ) addShadow( e );
        } );
    };


    /**
     * TF_SHADOWタグの内容を返す。
     * @param {Game_Character} tc キャラクタオブジェクト
     * @returns {String|Boolean|Number} TF_SHADOWタグの内容(なければundefined)
     */
    function getMetaTag( tc ) {
        const jsonData = getCharacterJson( tc );
        if( jsonData ) {
            return PluginManagerEx.findMetaValue( jsonData, TF_SHADOW );
        } else if( tc instanceof Game_Follower ) {
            return undefined;   // Actor未設定のGame_Follower
        } else {
            return false;   // メモ欄を持たないデータ(Game_Vehicle)
        }
    };

    /**
     * 指定キャラに対応するJSONデータを返す。
     * @param {Game_Character} tc 指定キャラクタオブジェクト
     * @returns {RPG.MetaData} JSONデータ(なければundefined)
     */
    function getCharacterJson( tc ) {
        if( tc instanceof Game_Event ) {
            return tc.event();
        } else if( tc instanceof Game_Player ) {
            return $gameParty.leader().actor();
        } else if( tc instanceof Game_Follower ) {
            const actor = tc.actor();
            if( actor ) return actor.actor();
        }
        return;   // メモ欄を持たないデータ
    }

    /**
     * 指定キャラが影を持つか。
     * @param {Game_Character} tc 指定キャラクタオブジェクト
     * @returns {Boolean} 影を持つか
     */
    function hasShadow( tc ) {
        if( tc.hasShadow !== undefined ) return tc.hasShadow;
        const shadowTag = getMetaTag( tc );
        if( shadowTag === undefined ) return !tc.isTile() && !tc.isObjectCharacter();
        return !!shadowTag;    //タグ指定があれば、その指定に従う
    }

    /**
     * ステージに影を追加。
     * @param {Sprite_Character} ts
     */
    function addShadow( ts ) {
        ts.shadow = new Sprite_Shadow( ts );
        ts.parent.addChild( ts.shadow );
    }



    /*--- Game_Interpreter ---*/
    const _Game_Interpreter_command129 = Game_Interpreter.prototype.command129;
    Game_Interpreter.prototype.command129 = function( params ) {
        const followers = $gamePlayer.followers().data();
        followers.forEach( e => e.refreshShadow = true );
        return _Game_Interpreter_command129.apply( this, arguments );
    };

    /*--- Game_CharacterBase ---*/
    /**
     * 影のON/OFF
     * @param {Boolean} hasShadow 影を持つか
     */
    Game_CharacterBase.prototype.TF_hasShadow = function( hasShadow ) {
        this.refreshShadow = true;
        this.hasShadow = hasShadow;
    };
    /**
     * 影のサイズ変更
     * @param {Number} width 影の横半径
     * @param {Number} height 影の縦半径
     */
    Game_CharacterBase.prototype.TF_shadowRadius = function( width, height ) {
        this.refreshShadow = true;
        this.shadowRadius = new Point( width, height );
    };
    /**
     * 影の高さ変更
     * @param {Number} shiftY 影の縦位置
     */
    Game_CharacterBase.prototype.TF_shadowY = function( shiftY ) {
        this.refreshShadow = true;
        this.shadowY = shiftY;
    };


    /*--- Game_Event ---*/
    const _Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
    Game_Event.prototype.setupPageSettings = function() {
        _Game_Event_setupPageSettings.call( this );
        this.refreshShadow = true;
        this.hasShadow = hasShadow( this );
    };

    /*--- Game_Player ---*/
    const _Game_Player_refresh = Game_Player.prototype.refresh;
    Game_Player.prototype.refresh = function() {
        _Game_Player_refresh.apply( this, arguments );
        this.refreshShadow = true;
        this.hasShadow = hasShadow( this );
    };

    /*--- Game_Follower ---*/
    var _Game_Follower_refresh = Game_Follower.prototype.refresh;
    Game_Follower.prototype.refresh = function() {
        _Game_Follower_refresh.apply( this, arguments );
        this.refreshShadow = true;
        this.hasShadow = hasShadow( this );
    };

    /*--- Sprite_Character ---*/
    const _Sprite_Character_update = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function() {
        _Sprite_Character_update.call( this );

        if( !this._character.refreshShadow ) return;
        this._character.refreshShadow = false;
        if( this._character.hasShadow ) {
            if( this.shadow ) {
                this.shadow.refresh();
            } else {
                addShadow( this );
            }
        } else if( this.shadow ) {
            this.parent.removeChild( this.shadow );
            this.shadow = null;
        }
    };

    /*--- Sprite_Shadow ---*/
    /**
     * @class Sprite_Shadow
     * @property {Point} radius 楕円の半径{x:横, y:縦}
     * @property {String} color 影の色
     * @property {Number} blurStrength 影のぼかし強度
     * @property {Sprite_Character} _sprite 影の設定対象
     * 
     */
    class Sprite_Shadow extends Sprite {
        /**
         * @param {Sprite_Character} sprite 影の設定対象
         */
        initialize( sprite ) {
            super.initialize( new Bitmap( 1, 1 ) );
            this._sprite = sprite;
            this.anchor.set( 0.5 );
            this.initRadius();
            this.initMembers();
            this.create();
        }

        refresh() {
            this.bitmap.clear();
            this.initRadius();
            this.initMembers();
            this.create();
        }

        initMembers() {
            this.color = pluginParams.color;
            this.blurStrength = pluginParams.strength;
            this.z = 2;
            const shiftY = ( this._sprite._character.shadowY ) ? this._sprite._character.shadowY : pluginParams.shiftY;
            this.shiftY = shiftY + this._sprite._character.shiftY() - 8;
        }

        initRadius() {
            if( this._sprite._character.shadowRadius ) return;
            const radius = stringToPoint( getMetaTag( this._sprite._character ) );
            this._sprite._character.shadowRadius = ( radius ) ? radius : shadowRadius;
        }

        create() {
            const radius = this._sprite._character.shadowRadius;
            const rX = radius.x;
            const rY = radius.y;
            this.bitmap.resize( rX * 2, rY * 2 );
            this.setFrame( 0, 0, rX * 2, rY * 2 );
            const ctx = this.bitmap.context;
            this.filters = [ new PIXI.filters.BlurFilter( this.blurStrength ) ];
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.ellipse( rX, rY, rX, rY, 0, 0, 2 * Math.PI );
            ctx.fill();
        }

        update() {
            super.update();
            this.opacity = this.getOpacity();
            if( this.opacity === 0 ) return;

            this.x = this._sprite.x;
            this.y = this._sprite.y + this.shiftY + this._sprite._character.jumpHeight();  // ジャンプ対応
            this.z = this._sprite.z - 1;
        }

        getOpacity() {
            const ts = this._sprite;
            const tc = ts._character;
            if( !tc || tc._characterName === "" || tc._transparent || tc._opacity === 0 || !ts.visible || !ts.bitmap ) return 0;
            return tc._opacity;
        };
    }
    /*--- ユーティリティ関数 ---*/
    /**
     * 文字列をPointオブジェクトに変換して返す。
     * @param {String} pointStr "x, y" 形式の文字列
     * @returns {Point} 
     */
    function stringToPoint( pointStr ) {
        if( typeof pointStr !== TYPE_STRING ) return;
        const args = pointStr.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
        if( args === null ) return;
        return new Point( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
    }
} )();