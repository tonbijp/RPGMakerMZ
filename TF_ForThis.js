//========================================
// TF_ForThis.js
// Version :0.0.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020-2021
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:ja
 * @target MZ
 * @plugindesc このゲーム「TCT」専用のプラグイン。
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url http://tonbi.jp/
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * 
 * @help
 * このゲーム「TCT」専用のプラグイン。
 */

( function() {
	'use strict';


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

		/* 〜 TCT 〜
		 05 episode2 : エピソード2をプレイ中
		cut
			00 : episode1 開始
			10 : 宿屋の悪漢退治
			20 : ニナ加入
			30 : 夜
			40 : 朝
			50 :「プリン」捜索。
			60 :
		
		06 openSharaDoor : サーラの部屋のドアをアンロック
		07 checkBarrier : 結界を普通に歩いて突破しようとした
		08 talkImelda : イメルダと話した
		09 talkAnna : アンナと話した
		10 unlokImelda : イメルダの首輪をアンロック
		11 testBarrier : 結界にアンロックを試した
		*/
	};


} )();
