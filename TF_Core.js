//========================================
// TF_Core.js
// Version :0.1.2.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020-2021
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

    /*---- パラメータパース関数 ----*/
    const PARAM_TRUE = "true";
    const PARAM_FALSE = "false";
    const PARAM_ON = "on";
    const TYPE_BOOLEAN = "boolean";
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

    /*--- Game_Variables ---*/
    /**
     * 変数を文字列で指定し、値を返す。
     * @param {String} name 変数(ID, 名前, \V[n]による指定が可能)
     */
    Game_Variables.prototype.valueByName = function( name ) {
        return this.value( stringToVariableId( name ) );
    };
    /**
     * 指定された変数のIDを返す。
     * @param {String} name 変数(ID, 名前, \V[n]による指定が可能)
     */
    function stringToVariableId( name ) {
        name = treatValue( name );
        let i = $dataSystem.variables.indexOf( name );
        if( 0 <= i ) return i;
        i = parseInt( name, 10 );
        if( isNaN( i ) ) throw Error( `${PLUGIN_NAME}: I can't find the variable '${name}'` );
        return i;
    }

    /**
     * 文字列を整数に変換して返す。
     * @param {String|Number} value
     * @return {Number} 数値に変換した結果
     */
    function parseIntStrict( value ) {
        if( typeof value === TYPE_NUMBER ) return Math.floor( value );
        const result = parseInt( treatValue( value ), 10 );
        if( isNaN( result ) ) throw Error( `${PLUGIN_NAME}: [${value}] is not a number.` );
        return result;
    }

    /**
     * 文字列を実数に変換して返す。
     * @param {String|Number} value
     * @return {Number} 数値に変換した結果
     */
    function parseFloatStrict( value ) {
        if( typeof value === TYPE_NUMBER ) return value;
        const result = parseFloat( treatValue( value ) );
        if( isNaN( result ) ) throw Error( `${PLUGIN_NAME}: [${value}] is not a number.` );
        return result;
    }

    /**
     * 文字列を真偽値に変換して返す。
     * @param {String|Boolean} value 変換元文字列
     * @returns {Boolean} 
     */
    function parseBooleanStrict( value ) {
        if( typeof value === TYPE_BOOLEAN ) return value;
        value = treatValue( value );
        const result = value.toLowerCase();
        return ( result === PARAM_TRUE || result === PARAM_ON );
    }


    /*--- ユーティリティ関数 ---*/
    /**
     * 文字列をPointオブジェクトに変換して返す。
     * @param {String} pointStr "x, y" 形式の文字列
     * @returns {Point} 
     */
    function stringToPoint( pointStr ) {
        const args = pointStr.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
        if( args === null ) throw `${PLUGIN_NAME}: wrong parameter '${pointStr}'`;
        return new Point( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
    }


    /*--- イベントID・オブジェクト取得関数 ---*/
    /*---- イベントIDの配置オフセット ----*/
    const FOLLOWER_OFFSET = -2;
    const VEHICLE_OFFSET = -100;

    /*---- イベントID変換用文字列 ----*/
    const EVENT_THIS = "this";
    const EVENT_PLAYER = "player";
    const EVENT_FOLLOWER0 = "follower0";
    const EVENT_FOLLOWER1 = "follower1";
    const EVENT_FOLLOWER2 = "follower2";
    const EVENT_FOLLOWER_ALL = "all";
    const VEHICLE_BOAT = "boat";
    const VEHICLE_SHIP = "ship";
    const VEHICLE_AIRSHIP = "airship";
    const VEHICLE_WALK = "walk";

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

    /**
     * 指定された文字列に対応するイベントを返す
     * @param {Game_Interpreter} interpreter インタプリタ
     * @param {String} eventId イベントIDの番号か識別子
     * @returns {Game_CharacterBase}
     */
    function stringToEvent( interpreter, eventId ) {
        return getEventById( interpreter, stringToEventId( eventId ) );
    }
} )();
