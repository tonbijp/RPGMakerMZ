//========================================
// TF_MenuLauncher.js
// Version :0.6.0.1
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
 * @param emptyTitle @text タイトル標準コマンド削除
 * @desc [タイトルシーン識別子]とは共存できません。
 * 必ず[タイトル追加コマンド]を設定してください。
 * @type boolean @default false
 * @on 標準コマンド削除 @off 追記(規定)
 * 
 * @param commandTitle @text タイトル追加コマンド
 * @desc [タイトルシーン識別子]とは共存できません。
 * @type struct<titleCommandParam>[] @default
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
 * @param commonEvMenu @text メニューコモンイベント
 * @desc メニュー代わりに呼ぶコモンイベント
 * コモンイベントで下準備してメニューシーンを呼ぶ想定。
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
 * @type struct<menuCommandParam>[] @default
 *
 * 
 * @param rem3 @text ＿＿＿＿ 部品位置 ＿＿＿＿
 * @desc UI部品配置に関する機能。
 * (なお、これは区切り線なので値を入力しても何も起きません)
 *
 * @param isTopHelpMode @text ヘルプ上下位置
 * @desc
 * @type boolean @default false
 * @on 上配置 @off 下配置(規定)
 *
 * @param helpX @text ヘルプX位置
 * @desc 規定値: 0
 * @type number @default 0
 * @min -99999
 *
 * @param helpWidth @text ヘルプ幅
 * @desc -1 だと「[UIエリア幅] -8 」になります。
 * 規定値: -1
 * @type number @default -1
 * @min -1
 * 
 * @param isTopButtonMode @text ボタン上下位置
 * @desc
 * @type boolean @default true
 * @on 上配置(規定) @off 下配置
 * 
 * @param isLeftInputMode @text 入力項目横位置
 * @desc
 * @type boolean @default false
 * @on 左配置 @off 右配置(規定)
 *
 *
 * @help
 * カスタムメニュー作成プラグイン(SceneCustomMenu.js)で作ったシーンを
 * 通常のタイトルやメニューと入れ替えることができます。
 * 
 * [タイトル追加コマンド]と[メニュー追加コマンド]
 * 　[シーン識別子]設定されていれば実行し、
 * 　空なら[シーンクラス名]を実行します。
 */
/*~struct~titleCommandParam:ja
 * @param label @text コマンドラベル
 * @desc メニューに表示されるコマンド名。
 * @type string @default コマンド
 *
 * @param sceneId @text シーン識別子
 * @desc SceneCustomMenu.js のシーン識別子
 * 又は従来のイベント識別子。
 * @type combo @default
 * @option newGame
 * @option continue
 * @option options
 *
 * @param sceneClass @text シーンクラス名
 * @desc Scene_Base の子孫クラス名
 * 標準の JavaScriptクラスを呼びます。
 * @type string @default
 */
/*~struct~menuCommandParam:ja
 * @param label @text コマンドラベル
 * @desc メニューに表示されるコマンド名。
 * @type string @default コマンド
 *
 * @param sceneId @text シーン識別子
 * @desc SceneCustomMenu.js のシーン識別子
 * 又は従来のイベント識別子。
 * @type combo @default
 * @option item
 * @option skill
 * @option equip
 * @option status
 * @option formation
 * @option options
 * @option save
 * @option gameEnd
 *
 * @param sceneClass @text シーンクラス名
 * @desc Scene_Base の子孫クラス名
 * 標準の JavaScriptクラスを呼びます。
 * @type string @default
 */
( () => {
    "use strict";
    const PLUGIN_NAME = "TF_MenuLauncher";
    const HANDLER_CUSTOM_COMMAND = "handlerCustomCommand";

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );

    let baseMenuCommandsNum;


    /*---- Scene_Base ----*/
    Scene_Base.prototype.isBottomHelpMode = function() {
        return !pluginParams.isTopHelpMode;
    };

    Scene_Base.prototype.isBottomButtonMode = function() {
        return !pluginParams.isTopButtonMode;
    };

    Scene_Base.prototype.isRightInputMode = function() {
        return !pluginParams.isLeftInputMode;
    };

    /*---- Scene_MenuBase ----*/
    const _Scene_MenuBase_helpWindowRect = Scene_MenuBase.prototype.helpWindowRect;
    Scene_MenuBase.prototype.helpWindowRect = function() {
        const rect = _Scene_MenuBase_helpWindowRect.call( this );
        rect.x = pluginParams.helpX;
        if( pluginParams.helpWidth !== -1 ) rect.width = pluginParams.helpWidth;
        return rect;
    };

    /*---- Scene_Menu ----*/
    const _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        if( !pluginParams.emptyMenu ) return _Scene_Menu_createCommandWindow.call( this );
        const rect = this.commandWindowRect();
        this._commandWindow = new Window_MenuCommand( rect );
        const basicCommand = id => {
            switch( id ) {
                case "item": return this.commandItem;
                case "skill": return this.commandPersonal;
                case "equip": return this.commandPersonal;
                case "status": return this.commandPersonal;
                case "formation": return this.commandFormation;
                case "options": return this.commandOptions;
                case "save": return this.commandGameEnd;
                case "gameEnd": return this.commandItem;
                default: return null;
            }
        };
        this._commandWindow.setHandler( "cancel", this.popScene.bind( this ) );

        pluginParams.commandMenu.forEach( e => {
            const handler = basicCommand( e.sceneId );
            if( handler === null ) {// 設定されたコマンドのハンドラを追加
                this._commandWindow.setHandler( HANDLER_CUSTOM_COMMAND, customCommandMenu.bind( this ) );

            } else {// 規定コマンドのハンドラを追加
                this._commandWindow.setHandler( e.sceneId, handler.bind( this ) );
            }
        } );
        this.addWindow( this._commandWindow );
    };
    // メニューのコマンドを実行
    function customCommandMenu() {
        const i = this._commandWindow.index() - ( pluginParams.emptyMenu ? 0 : baseMenuCommandsNum );
        const command = pluginParams.commandMenu[ i ];

        if( command.sceneId ) { // カスタムシーンの呼び出し
            this._windowLayer.destroy();
            SceneManager.callCustomMenu( command.sceneId );

        } else if( command.sceneClass ) { // シーンクラスの呼び出し
            this._windowLayer.destroy();
            SceneManager.push( new Function( `return ${command.sceneClass}` )() );
        }
    }

    /*---- Window_MenuCommand ----*/
    const _Window_MenuCommand_makeCommandList = Window_MenuCommand.prototype.makeCommandList;
    Window_MenuCommand.prototype.makeCommandList = function() {
        if( !pluginParams.emptyMenu ) return _Window_MenuCommand_makeCommandList.call( this );
        baseMenuCommandsNum = this.maxItems();

        const defaultCommands = [ "item", "skill", "equip", "status", "formation", "options", "save", "gameEnd" ];
        pluginParams.commandMenu.forEach( e => {
            if( defaultCommands.includes( e.sceneId ) ) {// 規定コマンド項目を追加
                this.addCommand( e.label, e.sceneId );

            } else {// 設定されたコマンド項目を追加
                this.addCommand( e.label, HANDLER_CUSTOM_COMMAND );
            }
        } );
    };


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

        const basicCommand = id => {
            switch( id ) {
                case "newGame": return this.commandNewGame;
                case "continue": return this.commandContinue;
                case "options": return this.commandOptions;
                default: return null;
            }
        };
        pluginParams.commandTitle.forEach( e => {
            const handler = basicCommand( e.sceneId );
            if( handler === null ) {// 設定されたコマンドハンドラを追加
                this._commandWindow.setHandler( HANDLER_CUSTOM_COMMAND, customCommandTitle.bind( this ) );

            } else {// 規定コマンドハンドラを追加
                this._commandWindow.setHandler( e.sceneId, handler.bind( this ) );
            }
        } );
    };
    //タイトルのコマンドを実行
    function customCommandTitle() {
        const i = this._commandWindow.index() - ( pluginParams.emptyTitle ? 0 : 3 );
        const command = pluginParams.commandTitle[ i ];

        if( command.sceneId ) { // カスタムシーンの呼び出し
            this._windowLayer.destroy();
            SceneManager.callCustomMenu( command.sceneId );

        } else if( command.sceneClass ) { // シーンクラスの呼び出し
            this._windowLayer.destroy();
            SceneManager.push( new Function( `return ${command.sceneClass}` )() );
        }
    }

    /*---- Window_TitleCommand ----*/
    const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        if( !pluginParams.emptyTitle ) _Window_TitleCommand_makeCommandList.call( this );

        const defaultCommands = [ "newGame", "continue", "options" ];
        pluginParams.commandTitle.forEach( e => {
            if( defaultCommands.includes( e.sceneId ) ) {// 規定コマンド項目を追加
                this.addCommand( e.label, e.sceneId );

            } else {// 設定されたコマンド項目を追加
                this.addCommand( e.label, HANDLER_CUSTOM_COMMAND );
            }
        } );
    };




    // Scene_Bootからのルートの乗っ取り
    const _Scene_Boot_startNormalGame = Scene_Boot.prototype.startNormalGame;
    Scene_Boot.prototype.startNormalGame = function() {
        if( !pluginParams.sceneTitle ) return _Scene_Boot_startNormalGame.call( this );

        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
    };

    // Scene_GameEndからのルートの乗っ取り
    const _Scene_GameEnd_commandToTitle = Scene_GameEnd.prototype.commandToTitle;
    Scene_GameEnd.prototype.commandToTitle = function() {
        if( !pluginParams.sceneTitle ) return _Scene_GameEnd_commandToTitle.call( this );

        this.fadeOutAll();
        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
    };

    // Scene_Gameoverからのルートの乗っ取り
    const _Scene_Gameover_gotoTitle = Scene_Gameover.prototype.gotoTitle;
    Scene_Gameover.prototype.gotoTitle = function() {
        if( !pluginParams.sceneTitle ) return _Scene_Gameover_gotoTitle.call( this );

        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
    };

    function startTitleSound() {
        AudioManager.playBgm( $dataSystem.titleBgm );
        AudioManager.stopBgs();
        AudioManager.stopMe();
    }

    // 直接メニューから呼び出す
    const _Scene_Map_callMenu = Scene_Map.prototype.callMenu;
    Scene_Map.prototype.callMenu = function() {// カスタムメニューを呼びます
        if( pluginParams.sceneMenu ) {
            beforOpenMenu( this );
            SceneManager.callCustomMenu( pluginParams.sceneMenu );

        } else if( pluginParams.commonEvMenu ) {// コモンイベントを呼びます
            const commonEvId = getCommonEvId( pluginParams.commonEvMenu );
            beforOpenMenu( this );
            $gameMap.setupDynamicCommon( commonEvId );

        } else {// 通常のメニューを呼びます。
            _Scene_Map_callMenu.call( this );
        }
    };
    // メニューを開く前処理
    function beforOpenMenu( ts ) {
        SoundManager.playOk();
        Window_MenuCommand.initCommandPosition();
        $gameTemp.clearDestination();
        ts._mapNameWindow.hide();
        ts._waitCount = 2;
    }
    // 文字列からコモンイベントIDを返す
    function getCommonEvId( evStr ) {
        const evNum = parseInt( evStr, 10 );
        if( !isNaN( evNum ) ) return evNum;

        const commonEvId = $dataCommonEvents.findIndex( e => {
            if( !e ) return false;
            return e.name === evStr;
        } );
        if( commonEvId === -1 ) {
            throw `${PLUGIN_NAME} : No such common event "${evStr}"`;
        }
        return commonEvId;
    }
} )();