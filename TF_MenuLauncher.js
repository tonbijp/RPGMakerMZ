//========================================
// TF_MenuLauncher.js
// Version :0.2.0.0
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
 * @plugindesc 通常のメニューの代わりにカスタムメニューを開く。
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_MenuLauncher.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @base SceneCustomMenu
 *
 *
 * @param rem1 @text ＿＿＿＿ タイトル ＿＿＿＿
 * @desc タイトルシーンに関する機能。
 * (なお、これは区切り線なので値を入力しても何も起きません)
 *
 * @param sceneTitle @text タイトルシーン識別子
 * @desc SceneCustomMenu.js のシーン識別子
 * 空だと通常のタイトルシーンを表示。
 * @type string @default
 * 
 * @param commonEvIdTitle @text タイトルコモンイベント名
 * @desc タイトルシーンの代わりにコモンイベントを呼びます。
 * 必要ならコモンイベント中にタイトルシーンを呼んでください。
 * @type string @default
 *
 * @param emptyTitle @text タイトル標準コマンド削除
 * @desc [タイトルシーン識別子]とは共存できません。
 * 必ず[タイトル追加コマンド]を設定してください。
 * @type boolean @default false
 * @on 標準コマンド削除 @off 追記(規定)
 * 
 * @param commandTitle @text タイトル追加コマンド
 * @desc [タイトルシーン識別子]とは共存できません。
 * @type struct<CommandParam>[] @default
 *
 *
 * @param rem2 @text ＿＿＿＿ メニュー ＿＿＿＿
 * @desc メニューシーンに関する機能。
 * (なお、これは区切り線なので値を入力しても何も起きません)
 * 
 * @param sceneMenu @text メニューシーン識別子
 * @desc SceneCustomMenu.js のシーン識別子
 * 空だと通常のメニューシーンを表示。
 * @type string @default
 *
 * @param commonEvIdMenu @text メニューコモンイベント名
 * @desc メニューシーンの代わりにコモンイベントを呼びます。
 * 必要ならコモンイベント中にメニューシーンを呼んでください。
 * @type string @default
 *
 * @param emptyMenu @text メニュー標準コマンド削除
 * @desc [メニューシーン識別子]とは共存できません。
 * 必ず[メニュー追加コマンド]を設定してください。
 * @type boolean @default false
 * @on 標準コマンド削除 @off 追記(規定)
 *
 * @param commandMenu @text メニュー追加コマンド
 * @desc [メニューシーン識別子]とは共存できません。
 * @type struct<CommandParam>[] @default
 * 
 *
 * @help
 * カスタムメニュー作成プラグイン(SceneCustomMenu.js)で作ったシーンを
 * 通常のタイトルやメニューと入れ替えることができます。
 * 
 * 実装予定!
 * ・メニューの項目を設定できるようにする。
 * ・エディタでは消せないメニューの項目を消す。
 * ・規定のシーンも選べるようにする。
 * ・任意のキーでシーンを呼び出す。
 * ・シーンの代わりにコモンイベントを呼ぶ。
 *
 * 
 */
/*~struct~CommandParam:ja
 * @param label @text コマンドラベル
 * @desc メニューに表示されるコマンド名。
 * @type string @default コマンド
 *
 * @param sceneId @text シーン識別子
 * @desc SceneCustomMenu.js のシーン識別子
 * カスタムメニューを呼びます。
 * @type string @default
 *
 * @param sceneClass @text シーンクラス名
 * @desc Scene_Base の子孫クラス名
 * 標準の JavaScriptクラスを呼びます。
 * @type string @default
 * 
 * @param commonEvId @text コモンイベント名
 * @desc コモンイベントを呼びます。
 * @type string @default
 */
( () => {
    "use strict";
    const PLUGIN_NAME = "TF_MenuLauncher";

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );


    const COM_TEST = "test";
    PluginManagerEx.registerCommand( document.currentScript, COM_TEST, function( args ) {
        console.log( `${PLUGIN_NAME}: args = ${args[ "arg1" ]}` );
    } );

    /*---- Scene_Title ----*/
    // コマンド数に合わせて、高さを増やす。
    const _Scene_Title_commandWindowRect = Scene_Title.prototype.commandWindowRect;
    Scene_Title.prototype.commandWindowRect = function() {
        const rect = _Scene_Title_commandWindowRect.call( this );
        // コマンド数に合わせて、高さを再設定
        const itemLength = ( pluginParams.emptyTitle ? 0 : 3 ) + pluginParams.commandTitle.length;
        const itemHeight = this.calcWindowHeight( itemLength, true );
        rect.height = itemHeight;
        return rect;
    };

    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        if( pluginParams.emptyTitle ) {
            const background = $dataSystem.titleCommandWindow.background;
            const rect = this.commandWindowRect();
            this._commandWindow = new Window_TitleCommand( rect );
            this._commandWindow.setBackgroundType( background );
            this.addWindow( this._commandWindow );
        } else {
            _Scene_Title_createCommandWindow.call( this );
        }

        // 設定されたコマンドを追加
        pluginParams.commandTitle.forEach( e => {
            this._commandWindow.setHandler( HANDLER_CUSTOM_COMMAND, customCommandTitle.bind( this ) );
        } );
    };
    function customCommandTitle() {
        const i = this._commandWindow.index() - ( pluginParams.emptyTitle ? 0 : 3 );
        const command = pluginParams.commandTitle[ i ];

        // indexに沿ってコマンドを処理
        if( command.sceneId ) {
            this._windowLayer.destroy();
            SceneManager.callCustomMenu( command.sceneId );
        } else if( command.sceneClass ) {
            this._windowLayer.destroy();
            SceneManager.push( new Function( `return ${command.sceneClass}` )() );
        } else if( command.commonEvId ) {
            // コモンイベントの実行
            console.log( `コモンイベント : ${command.commonEvId}` );

        }
    }

    /*---- Window_TitleCommand ----*/
    const HANDLER_CUSTOM_COMMAND = "handlerCustomCommand";
    /**
     * タイトルのメニューにコマンドを追加。
     */
    const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        if( !pluginParams.emptyTitle ) _Window_TitleCommand_makeCommandList.call( this );

        // 設定されたコマンドを追加
        pluginParams.commandTitle.forEach(
            e => this.addCommand( e.label, HANDLER_CUSTOM_COMMAND )
        );
    };




    // Scene_Bootからのルートの乗っ取り
    const _Scene_Boot_startNormalGame = Scene_Boot.prototype.startNormalGame;
    Scene_Boot.prototype.startNormalGame = function() {
        if( !pluginParams.sceneTitle ) return _Scene_Boot_startNormalGame.call( this );

        this.checkPlayerLocation();
        DataManager.setupNewGame();
        setTitleImage();
        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
    };

    // Scene_GameEndからのルートの乗っ取り
    const _Scene_GameEnd_commandToTitle = Scene_GameEnd.prototype.commandToTitle;
    Scene_GameEnd.prototype.commandToTitle = function() {
        if( !pluginParams.sceneTitle ) return _Scene_GameEnd_commandToTitle.call( this );
        this.fadeOutAll();
        setTitleImage();
        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
    };

    // Scene_GameEndからのルートの乗っ取り
    const _Scene_Gameover_gotoTitle = Scene_Gameover.prototype.gotoTitle;
    Scene_Gameover.prototype.gotoTitle = function() {
        if( !pluginParams.sceneTitle ) return _Scene_Gameover_gotoTitle.call( this );

        setTitleImage();
        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
    };

    function startTitleSound() {
        AudioManager.playBgm( $dataSystem.titleBgm );
        AudioManager.stopBgs();
        AudioManager.stopMe();
    }
    function setTitleImage() {
        // ここでタイトルイメージを表示できないものか。
        // _nextScene を改造する方法だと、オプションなどから戻ってきたときにタイトルが再現できないなぁ
        // SceneManager._backgroundBitmap = ImageManager.loadTitle1( $dataSystem.title1Name );
    }

    // 直接メニューから呼び出す
    const _Scene_Map_callMenu = Scene_Map.prototype.callMenu;
    Scene_Map.prototype.callMenu = function() {
        if( !pluginParams.sceneMenu ) return _Scene_Map_callMenu.call( this );

        SoundManager.playOk();
        SceneManager.callCustomMenu( pluginParams.sceneMenu );
        Window_MenuCommand.initCommandPosition();
        $gameTemp.clearDestination();
        this._mapNameWindow.hide();
        this._waitCount = 2;
    };
} )();