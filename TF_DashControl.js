//========================================
// TF_DashControl.js
// Version :0.0.0.1
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2021
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:
 * @target MZ
 * @plugindesc	ダッシュ状態をコマンドで切り替え
 * @author	とんび@鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_DashControl.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * ============= この長さに合わせるとヘルプではみ出ない ==============
 * @help
 * 標準ではダッシュの可・不可はマップごとでしか設定できません。
 * このプラグインはコマンドでのダッシュ設定が可能です。
 * 設定した状態はセーブされます。
 * 
 * [スクリプト]コマンドから使う場合は
 * 
 * $GameSystem.TF_isDdashEnabled = true;    // ダッシュ可
 * $GameSystem.TF_isDdashEnabled = false;   // ダッシュ不可
 * 
 * [変数の操作]コマンドで[代入][スクリプト]を選び、以下のコードを入力
 * 
 * $gameSystem.TF_dashEnabled?1:0
 * 
 * これで、ダッシュ可:1, ダッシュ不可: 0 の値が受け取れます。
 * 
 * PluginCommonBase は本体付属の 
 * dlc/BasicResources/plugins/official/PluginCommonBase.js
 * を使ってください。
 * 
 * 利用規約 : MITライセンス
 * 
 * @param SHOW_MENU
 * @text [オプション]に[常時ダッシュ]を表示するか
 * @type boolean
 *
 * 
 * @command DASH_ENABLED
 * @text ダッシュの許可
 * @desc ここで許可した場合も、
 * マップで不可になっているとダッシュできません。
 * 
 * @arg isDashEnabled
 * @text ダッシュの許可
 * @type boolean
 * @default true
 * @on ダッシュ可
 * @off ダッシュ不可
 * 
 */

( () => {
    "use strict";
    const PLUGIN_NAME = "TF_DashControl";
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );

    // [常時ダッシュ]メニューの表示・非表示の設定
    if( !pluginParams.SHOW_MENU ) {
        const _Window_Command_addCommand = Window_Command.prototype.addCommand;
        Window_Options.prototype.addCommand = function( name, symbol, enabled, ext ) {
            if( symbol === "alwaysDash" ) return;
            _Window_Command_addCommand.apply( this, arguments );
        };
    }

    /**
     * Game_System初期化時にセーブ用変数を用意
     */
    const _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.call( this );
        this.TF_isDdashEnabled = true;
    };

    /**
     * プラグインコマンドの実行
     */
    const COM_DASH_ENABLED = "DASH_ENABLED";
    PluginManagerEx.registerCommand( document.currentScript, COM_DASH_ENABLED,
        args => $gameSystem.TF_isDdashEnabled = args.isDashEnabled
    );

    /**
     * @returns {Boolean} ダッシュ不可か
     */
    const _Game_Map_isDashDisabled = Game_Map.prototype.isDashDisabled;
    Game_Map.prototype.isDashDisabled = function() {
        return !$gameSystem.TF_isDdashEnabled || _Game_Map_isDashDisabled.call( this );
    };
} )();