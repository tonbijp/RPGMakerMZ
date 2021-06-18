//========================================
// TF_Shadow.js
// Version :0.4.0.0
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
 *
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 *
 * @================================================
 * @command visible @text 表示指定
 * @desc 指定キャラの影のON・OFF
 *
 * @arg target @text 対象キャラ
 * @desc 0はこのイベント
 * @type string @default this
 * 
 * @arg vertical @text 表示位置
 * @desc タイル中央からの距離
 * @type boolean @default 
 */
( () => {
    "use strict";
    const PLUGIN_NAME = "TF_Shadow";
    const TYPE_STRING = "string";

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );
    const shadowRadius = stringToPoint( pluginParams.radius );

    const COM_TEST = "testCommand";
    PluginManagerEx.registerCommand( document.currentScript, COM_TEST, function( args ) {
        const argNote = args.note;//JSON.parse( args.note );
        argNote;
        paramNote;
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

    // 注釈のコマンド番号 TODO:ページの注釈でも設定できるといいんじゃないかな
    const REMARK = 108;
    /**
     * TF_SHADOWタグの内容を返す。
     * @param {Game_Character} tc 
     * @returns {String} TF_SHADOWタグの内容(なければundefined)
     */
    function getMetaTag( tc ) {
        if( tc instanceof Game_Event ) {
            return tc.event().meta.TF_SHADOW;
        } else if( tc instanceof Game_Player ) {
            return $gameParty.leader().actor().meta.TF_SHADOW;
        } else if( tc instanceof Game_Follower ) {
            const actor = tc.actor();
            if( actor ) return actor.actor().meta.TF_SHADOW;
        } else if( tc instanceof Game_Vehicle ) {
            return false;
        }
    }

    /**
     * 指定キャラクターが影を持つか。
     * @param {Game_Character} tc
     * @returns {Boolean} 影を持つか
     */
    function hasShadow( tc ) {
        if( tc.hasShadow !== undefined ) return tc.hasShadow;
        const shadowTag = getMetaTag( tc );
        if( shadowTag !== undefined ) return !!shadowTag;    //タグ指定があれば、その指定に従う
        return !tc.isTile() && !tc.isObjectCharacter();
    }

    /**
     * ステージに影を追加。
     * @param {Sprite_Character} ts
     */
    function addShadow( ts ) {
        ts.shadow = new Sprite_Shadow( ts );
        ts.parent.addChild( ts.shadow );
    }


    /*--- Game_Event ---*/
    /**
     * 影のON/OFF
     * @param {Boolean} hasShadow 影を持つか
     */
    Game_CharacterBase.prototype.TF_hasShadow = function( hasShadow ) {
        this.refreshShadow = true;
        this.hasShadow = hasShadow;
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
            this.initMembers();
            this.create();
        }

        refresh() {
            this.bitmap.clear();
            this.initMembers();
            this.create();
        }

        initMembers() {
            this.radius = this.getRadius();
            this.color = pluginParams.color;
            this.blurStrength = pluginParams.strength;
            this.z = 2;
            this.shiftY = pluginParams.shiftY + this._sprite._character.shiftY() - 8;
        }

        getRadius() {
            const radius = stringToPoint( getMetaTag( this._sprite._character ) );
            return ( radius ) ? radius : shadowRadius;
        }

        create() {
            const rX = this.radius.x;
            const rY = this.radius.y;
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