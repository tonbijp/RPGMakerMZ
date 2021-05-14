//========================================
// TF_TextWindowMenu.js
// Version :0.3.0.1
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
 * @plugindesc タイトルにテキストウィンドウ表示メニューを追加。
 * @author とんび@鳶嶋工房
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_TextWindowMenu.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @param windowParams
 * @desc メニューとウィンドウの設定。
 * @type struct<WindowParam>[]
 * @default ["{\"menuLabel\":\"著作・製作\",\"contents\":\"©\\n\\n\\\\}©Gotcha Gotcha Games Inc./YOJI OJIMA 2020\\\\{\"}"]
 * 
 * @help
 * タイトル画面への著作権情報や操作説明の追加を想定したプラグインです。
 * 
 * windowParams パラメータ1行につき1メニューがタイトル画面に追加されます。
 * そのメニューを選択すると、ウィンドウが1枚開きます。
 * 
 * ウィンドウの行数は lines パラメータで指定します。
 * 
 * contents パラメータを入力する際はコンテクストメニュー(右クリック)の
 * [アイコンセットビューア]を利用して \I[n] の n の数値を入力できます。
 * その他、メッセージと同じ制御文字が使えますので、ご活用ください。
 *
 * 利用規約 : MITライセンス
 */
/*~struct~WindowParam:ja
 *
 * @param menuLabel
 * @desc タイトル画面でのメニュー名。
 * @type string
 * @default 著作・製作
 *
 * @param contents
 * @desc ウィンドウに表示する内容(制御文字が使えます)
 * @type multiline_string
 * @default
 * ©
 * 
 * \}©Gotcha Gotcha Games Inc./YOJI OJIMA 2020\{
 */
( () => {
	"use strict";
	const HANDLER_OPEN_WINDOW = "handlerOpenWindow";

	// プラグインパラメータを受け取る
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );
	let dafaultRows = 0;
	const windowParams = pluginParams.windowParams;

	/*---- Window_TitleCommand ----*/
	/**
	 * タイトルのメニューにコマンドを追加。
	 */
	const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
	Window_TitleCommand.prototype.makeCommandList = function() {
		_Window_TitleCommand_makeCommandList.call( this );

		dafaultRows = this.maxItems();
		windowParams.forEach( e => this.addCommand( e.menuLabel, HANDLER_OPEN_WINDOW ) );
	};


	/*---- Scene_Title ----*/
	// コマンド数に合わせて、高さを増やす。
	const _Scene_Title_commandWindowRect = Scene_Title.prototype.commandWindowRect;
	Scene_Title.prototype.commandWindowRect = function() {
		const rect = _Scene_Title_commandWindowRect.call( this );
		const itemHeight = Window_TitleCommand.prototype.itemHeight();
		rect.height += windowParams.length * itemHeight;
		return rect;
	};

	// コマンドハンドラを追加。
	const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
	Scene_Title.prototype.createCommandWindow = function() {
		_Scene_Title_createCommandWindow.call( this );

		this._commandWindow.setHandler( HANDLER_OPEN_WINDOW, () => {
			this._commandWindow.close();

			Scene_SingleInfo.contentsId = this._commandWindow.index() - dafaultRows;
			SceneManager.push( Scene_SingleInfo );
		} );
	};

	// シーン
	class Scene_SingleInfo extends Scene_MenuBase {
		create() {
			super.create();

			const wh = this.mainAreaHeight();
			const rect = new Rectangle( 0, this.mainAreaTop(), Graphics.boxWidth, wh );
			const infoWindow = new Window_SingleInfo( rect );
			infoWindow.setHandler( "ok", this.popScene.bind( this ) );
			infoWindow.setHandler( "cancel", this.popScene.bind( this ) );

			if( Scene_SingleInfo.contentsId !== null ) {
				infoWindow.setContents( windowParams[ Scene_SingleInfo.contentsId ].contents );
			}

			this.addWindow( infoWindow );
		}

		helpAreaHeight() { return 0; };	//ヘルプの高さを0にすることでメインの高さを広げる
	}
	window.Scene_SingleInfo = Scene_SingleInfo;//公開
	Scene_SingleInfo.contentsId = null;

	// 情報ウィンドウ
	class Window_SingleInfo extends Window_Selectable {
		initialize( rect ) {
			super.initialize( rect );
			this.activate();
		}

		// 画面どこをタップしても反応するように
		isOkTriggered() {
			return super.isOkTriggered() || TouchInput.isTriggered();
		};

		setContents( text ) {
			this.contents.clear();
			const rect = this.baseTextRect();
			this.drawTextEx( text, rect.x, rect.y, rect.width );
		}
	}
} )();
