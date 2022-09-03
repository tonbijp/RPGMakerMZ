//========================================
// TF_TransferEx.js
// Version :0.0.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2022
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:ja
 * @target MZ
 * @plugindesc [場所移動]イベントコマンド関連コマンド
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_TransferEx.js
 * 
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * 
 * @param preX @text 移動前のx座標を保持する変数
 * @type variable @default 11
 * 
 * @param preY @text 移動前のy座標を保持する変数
 * @type variable @default 12
 *
 * @================================================
 * @help
 * 移動の前後の処理をカプセル化。
 *
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 * 
 * @================================================
 * @command halfTransfer @text 移動に半歩座標を指定
 * @desc [場所移動]イベントコマンドの半分座標対応版。
 * 移動時の座標を指定変数に保持する。
 * 
 * @arg mapId @text マップID
 * @desc マップID(数値)かマップの名前(現在のマップ: this)
 * @type string @default this
 * 
 * @arg pointStr @text 移動先位置(タイル数)
 * @desc 移動先座標(小数点以下可)
 * @type string @default 0,0
 *
 * @arg d @text 移動後のキャラの向き
 * @desc (規定値: 0 そのまま)
 * @type select @default 0
 * @option そのまま @value 0
 * @option ↑ @value 8
 * @option ← @value 4
 * @option → @value 6
 * @option ↓ @value 2
 * 
 * @arg fadeType @text フェード
 * @desc 
 * @type select @default 2
 * @option 黒 @value 0
 * @option 白 @value 1
 * @option なし @value 2
 * 
 * 
 */

( () => {
	"use strict";
	const PLUGIN_NAME = "TF_TransferEx";

	// プラグインコマンド
	const COM_HALF_TRANSFER = "halfTransfer";

	// イベント指定用の識別子
	const EVENT_THIS = "this";

	// イベントコマンドの番号
	const COMMAND_END = 0;
	const TRANSFER_PLAYER = 201;
	const SET_MOVEMENT_ROUTE = 205;
	const CHANGE_PLAYER_FOLLOWERS = 216;
	const FADEOUT_SCREEN = 221;
	const FADEIN_SCREEN = 222;
	const WAIT_FOR = 230;
	const PLAY_SE = 250;
	const REMOVE_EVENT = 214;

	// イベントコマンドのパラメータ
	const FLAG_ON = 1;
	const FLAG_OFF = 0;
	const PAN_CENTER = 0;
	const LOCATE_DILECT = 0;
	const FADE_TO_BLACK = 0;
	const FADE_TO_WHITE = 1;
	const FADE_NONE = 2;

	const PLAYER_CHARACTER = -1;
	const gc = Game_Character;

	/**
	 * パラメータを受け取る
	 */
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );

	const preXvariableID = pluginParams.preX;
	const preYvariableID = pluginParams.preY;

	/**
	 * プラグインコマンドの登録
	 */
	/**
	 * halfTransfer
	 * マップ移動前の処理。
	 * @param {String} mapId マップID | マップ名 | this
	 * @param {String} pointStr 座標(タイル数)
	 * @param {Number} d 向き(テンキー対応 | 方向文字列) (規定値: 現在の向き( 0 ))
	 * @param {String} fadeType 黒:  0, 白: 1, なし: 2
	 * 
	 */
	PluginManagerEx.registerCommand( document.currentScript, COM_HALF_TRANSFER,
		function( args ) {
			// 移動前の座標を変数に保持
			$gameVariables._data[ preXvariableID ] = $gamePlayer.x;
			$gameVariables._data[ preYvariableID ] = $gamePlayer.y;

			const mapId = stringToMapId( args.mapId );
			const pos = stringToPoint( args.pointStr );
			const eventCommands = [
				{ code: TRANSFER_PLAYER, parameters: [ LOCATE_DILECT, mapId, pos.x, pos.y, args.d, args.fadeType ] },
				{ code: COMMAND_END }
			];
			this.setupChild( eventCommands, this._eventId );
		}
	);

	/*--- ユーティリティ関数 ---*/
	const TYPE_BOOLEAN = "boolean";
	const TYPE_NUMBER = "number";
	const TYPE_STRING = "string";
	/**
	 * 文字列をマップIDへ変換
	 * @param {String} value マップIDの番号か識別子
	 * @returns {Number} マップID
	 */
	function stringToMapId( value ) {
		if( typeof value === TYPE_STRING ) {
			const label = value.toLowerCase();
			if( label === EVENT_THIS ) return $gameMap.mapId();
		}

		const mapObj = DataManager.searchDataItem( $dataMapInfos, "name", value );
		if( mapObj !== 0 ) return mapObj.id;

		const result = parseInt( value, 10 );
		if( isNaN( result ) ) throw Error( `${PLUGIN_NAME}: I can't found the map '${value}'` );
		return result;
	}
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
} )();
