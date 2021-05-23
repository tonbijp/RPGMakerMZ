//========================================
// TF_Shadow.js
// Version :0.0.0.1
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
 * プレイヤーと隊列メンバーの下に丸い影をつける。
 * 影はベクター描画するので、画像ファイル不要。
 * 
 * イベントはメモ欄に次のタグを書くと影がつく。
 * <TF_SHADOW>
 *
 * データベースの[アクター]のメモ欄に以下の形式で書くと
 * 影の半径を指定できる。イベントも同様。
 * <TF_SHADOW:x,y>
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
    let preCharacterIndex;  // タイルマップのchildrenに影を挿入する位置

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
        preCharacterIndex = this._tilemap.children.length;
        _Spriteset_Map_createCharacters.call( this );

        this._characterSprites.forEach( e => {
            if( e._character.event && !e._character.event().meta.TF_SHADOW ) return;

            const shadow = new Sprite_Shadow( e );
            this._tilemap.addChildAt( shadow, preCharacterIndex ); // updateが遅れないように、キャラの前に追加
            e._character.shadow = shadow;
        } );
    };

    /*--- Game_Event ---*/
    const _Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
    Game_Event.prototype.setupPageSettings = function() {
        _Game_Event_setupPageSettings.call( this );

        if( this.shadow ) {
            this.shadow.refresh();
        }
    };

    /*--- Game_Player ---*/
    const _Game_Player_refresh = Game_Player.prototype.refresh;
    Game_Player.prototype.refresh = function() {
        _Game_Player_refresh.apply( this, arguments );

        this.shadow.refresh();
    };

    /*--- Game_Follower ---*/
    var _Game_Follower_refresh = Game_Follower.prototype.refresh;
    Game_Follower.prototype.refresh = function() {
        _Game_Follower_refresh.apply( this, arguments );

        this.shadow.refresh();
    };


    /*--- Sprite_Shadow ---*/
    class Sprite_Shadow extends Sprite {
        /**
         * @param {Sprite_Character} sprite 影の設定対象
         */
        initialize( sprite ) {
            super.initialize( new Bitmap( 1, 1 ) );
            this._sprite = sprite;
            this.anchor.x = this.anchor.y = 0.5;
            this.initMembers();
            this.create();
        }

        refresh() {
            this.bitmap.clear();
            this.initMembers();
            this.create();
        }

        initMembers() {
            const radius = this.getRadius();
            this.rX = radius.x;
            this.rY = radius.y;
            this.color = pluginParams.color;
            this.blurStrength = pluginParams.strength;
            this.shiftY = - 8;
        }

        getRadius() {
            const tc = this._sprite._character;
            if( tc instanceof Game_Event ) {
                const radius = stringToPoint( tc.event().meta.TF_SHADOW );
                if( radius ) return radius;
            } else if( tc instanceof Game_Player ) {
                const radius = stringToPoint( $gameParty.leader().actor().meta.TF_SHADOW );
                if( radius ) return radius;
            } else if( tc instanceof Game_Follower ) {
                const actor = tc.actor();
                if( !actor ) return shadowRadius;
                const radius = stringToPoint( actor.actor().meta.TF_SHADOW );
                if( radius ) return radius;
            }// viecleも考える、船に影はつけない、飛行船に影はつけない。
            return shadowRadius;
        }

        create() {
            const rX = this.rX;
            const rY = this.rY;
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
            this.opacity = this.getOpacity();
            if( this.opacity === 0 ) return;

            const tc = this._sprite._character;
            const objDY = tc.shiftY() + tc.jumpHeight() - 8;  // !付きファイル・ジャンプ対応
            this.x = this._sprite.x;
            this.y = this._sprite.y + objDY;
            this.z = this._sprite.z - 1;
        }

        getOpacity() {
            const ts = this._sprite;
            const tc = ts._character;
            if( !ts.visible || !ts.bitmap || !tc || tc._transparent || tc._opacity === 0 ) return 0;
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