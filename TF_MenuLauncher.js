//========================================
// TF_MenuLauncher.js
// Version :0.1.1.0
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
 * @param sceneTitle @text タイトルシーン識別子
 * @desc SceneCustomMenu.js のシーン識別子
 * 空だと通常のメニュー。
 * @type string @default
 *
 * @param sceneMenu @text メニューシーン識別子
 * @desc SceneCustomMenu.js のシーン識別子
 * 空だと通常のメニュー。
 * @type string @default
 * 
 *
 * @help
 * 実装予定!
 * ・メニューの項目を設定できるようにする。
 * ・エディタでは消せないメニューの項目を消す。
 * ・規定のシーンも選べるようにする。
 * ・任意のキーでシーンを呼び出す。
 * 
 * SceneCustomMenu.js で作ったシーンを通常のメニューの代わりに開く。
 * など、SceneCustomMenu.js の補助的な機能として使えます。
 *
 * 使い方はパラメータの[対象シーン識別子]に
 * SceneCustomMenu.js で作ったシーンのシーン識別子を書くだけ。
 *
 * 
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


    // Scene_Bootからのルートの乗っ取り
    const _Scene_Boot_startNormalGame = Scene_Boot.prototype.startNormalGame;
    Scene_Boot.prototype.startNormalGame = function() {
        if( !pluginParams.sceneTitle ) return _Scene_Boot_startNormalGame.call( this );

        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
        removeButton();
    };

    // Scene_GameEndからのルートの乗っ取り
    const _Scene_GameEnd_commandToTitle = Scene_GameEnd.prototype.commandToTitle;
    Scene_GameEnd.prototype.commandToTitle = function() {
        if( !pluginParams.sceneTitle ) return _Scene_GameEnd_commandToTitle.call( this );
        this.fadeOutAll();
        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
        removeButton();
    };

    // Scene_GameEndからのルートの乗っ取り
    const _Scene_Gameover_gotoTitle = Scene_Gameover.prototype.gotoTitle;
    Scene_Gameover.prototype.gotoTitle = function() {
        if( !pluginParams.sceneTitle ) return _Scene_Gameover_gotoTitle.call( this );

        SceneManager.callCustomMenu( pluginParams.sceneTitle );
        startTitleSound();
        removeButton();
    };

    function startTitleSound() {
        AudioManager.playBgm( $dataSystem.titleBgm );
        AudioManager.stopBgs();
        AudioManager.stopMe();
    }
    function removeButton() {
        SceneManager._nextScene.needsCancelButton = () => false;
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