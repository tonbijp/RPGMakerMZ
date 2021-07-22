//========================================
// TF_Core.js
// Version :0.0.0.2
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:
 * @target MZ
 * @plugindesc	TF_Core
 * @author	とんび@鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Core.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @============ この長さに合わせるとヘルプではみ出ない =============
 * @help
 * プラグインで共通して使っている処理をメモ的にまとめたもの。
 * これをライブラリとして必要とするプラグインなどを作る予定はない。
 * 
 * 利用規約 : MITライセンス
 *
 * @command commandName
 * @text コマンド名称
 * @desc コマンド説明
 *
 * @arg arg1
 * @text 引数の名称
 * @desc 引数の説明
 * 
 */

( () => {
    "use strict";
    const PLUGIN_NAME = "TF_Core";
    const PARAM_TRUE = "true";
    const PARAM_FALSE = "false";

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );


    /**
     * 
     */
    const COM_NAME = "name";
    PluginManager.registerCommand( PLUGIN_NAME, COM_NAME, args => {
        textPictureText = String( args.text );
    } );

    const _Game_Picture_show = Game_Picture.prototype.show;
    Game_Picture.prototype.show = function() {
        _Game_Picture_show.apply( this, arguments );
        // do something
    };


    /*--- ユーティリティ関数 ---*/
    /**
     * 文字列をPointオブジェクトに変換して返す。
     * @param {String} pointStr "x, y" 形式の文字列
     * @returns {Point} 
     */
    function stringToPoint( pointStr ) {
        const args = pointStr.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
        if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${pointStr}"`;
        return new Point( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
    }


    /**
     * character を拡張して隊列メンバーも指定できるようにしたもの。
     * @param {Game_Interpreter} interpreter インタプリタ
     * @param {Number} id 拡張イベントID
     * @returns {Game_CharacterBase}
     */
    function getEventById( interpreter, id ) {
        if( id < -1 ) {
            return $gamePlayer.followers().follower( -2 - id );			// 隊列メンバー(0〜2)
        } else {
            return interpreter.character( id );			// プレイヤーキャラおよびイベント
        }
    }


    const EVENT_THIS = "this";
    const EVENT_SELF = "self";
    const EVENT_PLAYER = "player";
    const EVENT_FOLLOWER0 = "follower0";
    const EVENT_FOLLOWER1 = "follower1";
    const EVENT_FOLLOWER2 = "follower2";
    /**
     * 文字列をイベントIDへ変換
     * @param {String} value イベントIDの番号か識別子
     * @returns {Number} 拡張イベントID
     */
    function stringToEventId( value ) {
        // value = treatValue( value );
        const result = parseInt( value, 10 );
        if( !isNaN( result ) ) return result;

        const lowValue = value.toLowerCase();
        switch( lowValue ) {
            case EVENT_THIS:
            case EVENT_SELF: return 0;
            case EVENT_PLAYER: return -1;
            case EVENT_FOLLOWER0: return -2;
            case EVENT_FOLLOWER1: return -3;
            case EVENT_FOLLOWER2: return -4;
        }

        // イベント名で指定できるようにする
        const i = $gameMap._events.findIndex( event => {
            if( event === undefined ) return false;	// _events[0] が undefined なので無視

            const eventId = event._eventId;
            return $dataMap.events[ eventId ].name === value;
        } );
        if( i === -1 ) throw Error( `I can't find the event '${name}'` );
        return i;
    }
} )();