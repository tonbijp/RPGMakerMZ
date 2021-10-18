//========================================
// TF_ForThis.js
// Version :0.0.0.0
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
 * @plugindesc このゲーム「」専用のプラグイン。
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url http://tonbi.jp/
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * 
 * @help
 * このゲーム「」専用のプラグイン。
 */

( () => {
	"use strict";

	/*--- Scene_Title ---*/
	const _Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame;
	Scene_Title.prototype.commandNewGame = function() {
		_Scene_Title_commandNewGame.call( this );

		// 初期設定を行う
		// $gameSwitches.setValueByName( 'episode2', true );
		// $gameVariables.setValueByName( 'cut', 40 );
		// $gameSwitches.setValueByName( 'openSharaDoor', true );
		// $gameSwitches.setValueByName( 'unlokImelda', true );
		// $gameSwitches.setValueByName( 'testBarrier', true );

	};
	/* 〜 シナリオ カット番号 〜
	cut
		00 : episode1 開始
		10 : 宿屋の悪漢退治
	*/

} )();
