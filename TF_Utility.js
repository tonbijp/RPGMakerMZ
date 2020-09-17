//========================================
// TF_Utility.js
// Version :0.0.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:ja
 * @target MZ
 * @plugindesc [スクリプト]から使いやすいコマンド集
 * @author とんび@鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Utility.js
 * 
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @base TF_CharEx
 * @orderAfter TF_CharEx
 * 
 * @help
 * 移動の前後の処理をカプセル化。
 *
 * @command beforeMove
 * @text 移動と前処理
 * @desc 一歩前進してフェードアウトを行い、マップを移動する。
 *
 * @arg mapId
 * @text マップID
 * @desc
 * マップID(数値)かマップの名前
 *  現在のマップ: self, this, here
 * @type string
 * @default this
 * 
 * @arg x
 * @text x位置(タイル数)
 * @desc 移動先座標(小数点以下可)
 * @type number
 * @default 0
 *
 * @arg y
 * @text y位置(タイル数)
 * @desc 移動先座標(小数点以下可)
 * @type number
 * @default 0
 *
 * @arg isMove
 * @text 移動前に前進
 * @desc ON: 一歩前進 | OFF:前進なし
 * @type boolean
 * @default true
 *
 * @arg pitch
 * @text 移動音の音程
 * @desc 数が小さいほど低い音(規定値: 100)
 * @default 100
 *
 * @arg d
 * @text 移動後のキャラの向き
 * @desc (規定値: 0 そのまま)
 * @type select
 * @default 0
 * @option そのまま
 * @value 0
 * @option ↑
 * @value 8
 * @option ←
 * @value 4
 * @option →
 * @value 6
 * @option ↓
 * @value 2
 * 
 * @command afterMove
 * @text 移動後の処理
 * @desc フェードインして一歩前進、イベントの一時消去。
 * 
 */

( () => {
	"use strict";

	// プラグインコマンド
	const COM_BEFORE_MOVE = "beforeMove";
	const COM_AFTER_MOVE = "afterMove";

	const VOLUME_OFFSET = 5;	//オプション: 音量の最小変更数を5に。

	// イベント指定用の識別子
	const EVENT_THIS = "this";
	const EVENT_SELF = "self";
	const EVENT_HERE = "here";

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

	const PLAYER_CHARACTER = -1;
	const gc = Game_Character;

	/*---- パラメータパース関数 ----*/
	/**
	 * 文字列をマップIDへ変換
	 * @param {String} value マップIDの番号か識別子
	 * @returns {Number} マップID
	 */
	function stringToMapId( value ) {
		const label = value.toLowerCase();
		if( label === EVENT_THIS || label === EVENT_SELF || label === EVENT_HERE ) return $gameMap.mapId();

		const mapObj = DataManager.searchDataItem( $dataMapInfos, "name", value );
		if( mapObj !== 0 ) return mapObj.id;

		const result = parseInt( value, 10 );
		if( isNaN( result ) ) throw Error( `指定したマップ[${value}]がありません。` );
		return result;
	}


	/*--- Game_Variables ---*/
	/**
	 * 変数を文字列で指定し、値を返す。
	 * @param {String} name 変数(ID, 名前, V[n]による指定が可能)
	 */
	Game_Variables.prototype.valueByName = function( name ) {
		return this.value( stringToVariableId( name ) );
	};
	/**
	 * 変数を文字列で指定し、値を設定。
	 * @param {String} name 変数(ID, 名前, V[n]による指定が可能)
	 * @param {String} value 設定する値
	 */
	Game_Variables.prototype.setValueByName = function( name, value ) {
		this.setValue( stringToVariableId( name ), value );
	};

	/**
	 * 指定された変数のIDを返す。
	 * @param {String} name 変数(ID, 名前, V[n]による指定が可能)
	 */
	function stringToVariableId( name ) {
		let i = $dataSystem.variables.findIndex( e => e === name );
		if( 0 <= i ) return i;
		i = parseInt( name, 10 );
		if( isNaN( i ) ) throw Error( `I can't find the variable '${name}'` );
		return i;
	}

	/**
	 * プラグインコマンドの登録
	 */
	/**
	 * beforeMove
	 * マップ移動前の処理。
	 * @param {String} mapId マップID | マップ名 | self | this
	 * @param {Number} x x座標(タイル数)
	 * @param {Number} y y座標(タイル数)
	 * @param {Boolean} isMove 一歩前進するか
	 * @param {Number} pitch 音程
	 * @param {Number} d 向き(テンキー対応 | 方向文字列) (規定値: 現在の向き( 0 ))
	 * 
	 */
	PluginManagerEx.registerCommand( document.currentScript, COM_BEFORE_MOVE,
		function( args ) {
			const eventCommands = getMoveMapCommands( args.mapId, args.x, args.y, args.d, args.pitch );

			if( args.isMove ) {
				eventCommands.unshift( {
					code: SET_MOVEMENT_ROUTE, parameters: [ PLAYER_CHARACTER,
						{
							repeat: false, skippable: true, wait: true, list: [
								{ code: gc.ROUTE_THROUGH_ON },
								{ code: gc.ROUTE_MOVE_FORWARD },
								{ code: gc.ROUTE_END }
							]
						}
					]
				} );
			}
			this.setupChild( eventCommands, this._eventId );
		}
	);

	/**
	 * マップ移動前の処理のコマンド配列を返す。
	 * @param {String} mapId マップID | マップ名 | self | this
	 * @param {String} x x座標(タイル数)
	 * @param {String} y y座標(タイル数)
	 * @param {String} d 向き(テンキー対応 | 方向文字列) (規定値: 現在の向き( 0 ))
	 * @param {Number} pitch ピッチ
	 * @returns {Array} イベントコマンドの配列
	 */
	const MOVE_SE = "Move1";
	const MOVE_VOLUME = 30;
	function getMoveMapCommands( mapId, x, y, d, pitch ) {
		mapId = stringToMapId( mapId );

		return [
			{ code: CHANGE_PLAYER_FOLLOWERS, parameters: [ FLAG_ON ] },
			// { code: FADEOUT_SCREEN },
			{ code: PLAY_SE, parameters: [ { name: MOVE_SE, volume: MOVE_VOLUME, pitch: pitch, pan: PAN_CENTER } ] },
			{ code: TRANSFER_PLAYER, parameters: [ LOCATE_DILECT, mapId, x, y, d, FADE_TO_BLACK ] },
			{ code: COMMAND_END }
		];
	}

	/**
	 * afterMove
	 * 移動後のフェードインおよび一歩前進処理を行う
	 */
	PluginManagerEx.registerCommand( document.currentScript, COM_AFTER_MOVE,
		function() {
			console.log( "COM_AFTER_MOVE" );
			this.setupChild( [
				{ code: CHANGE_PLAYER_FOLLOWERS, parameters: [ FLAG_OFF ] },
				{ code: FADEIN_SCREEN },
				{
					code: SET_MOVEMENT_ROUTE, parameters: [ PLAYER_CHARACTER,
						{
							repeat: false, skippable: true, wait: true, list: [
								{ code: gc.ROUTE_THROUGH_OFF },
								{ code: gc.ROUTE_DIR_FIX_OFF },
								{ code: gc.ROUTE_MOVE_FORWARD },
								{ code: gc.ROUTE_END }
							]
						}
					]
				},
				{ code: REMOVE_EVENT },
				{ code: COMMAND_END }
			], this._eventId );
		}
	);


	/*==== 音設定 ====*/
	/*--- Window_Options ---*/
	Window_Options.prototype.volumeOffset = () => VOLUME_OFFSET;


	/*---- Scene_Battle ----*/
	/**
	 * パーティコマンドを飛ばす。
	 */
	const _Scene_Battle_changeInputWindow = Scene_Battle.prototype.changeInputWindow;
	Scene_Battle.prototype.changeInputWindow = function() {
		if( BattleManager.isInputting() && !BattleManager.actor() ) {
			this.selectNextCommand();
		}
		_Scene_Battle_changeInputWindow.call( this );
	};


	// 追加キー設定
	const KEY_BS = 8;
	const KEY_DEL = 46;
	const KEY_M = 77;
	const ACTION_MENU = "menu";
	const ACTION_CANCEL = "cancel";
	Input.keyMapper[ KEY_M ] = ACTION_MENU;
	Input.keyMapper[ KEY_BS ] = ACTION_CANCEL;
	Input.keyMapper[ KEY_DEL ] = ACTION_CANCEL;
} )();
