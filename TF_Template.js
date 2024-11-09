//=================================================
// TF_Template.js
// Version :0.0.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// ----------------------------------------------
// Copyright : Tobishima-Factory 2024
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//=================================================
/*:ja
 * @target MZ
 * @plugindesc テンプレートなので、これ自体は使いません。
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Template.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @================= parameter ====================
 * @param testParam @text テストパラメータ
 * @desc パラメータのテスト
 * @type number @default 1
 * @================================================
 * 
 * @================== command =====================
 * @command testCommand @text テストコマンド
 * @desc 引数のテストconsoleに出力するよ。
 *
 * @arg arg1 @text 引数1
 * @desc consoleに出力するよ
 * @type string @default 規定値
 * @================================================
 * 
 * @============ この長さに合わせるとヘルプではみ出ない =============
 * @help
 * これはテンプレートなので、このままではなんの機能も持ちません。
 */
( () => {
    "use strict";

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );
    const testParam = pluginParams.testParam;
    console.log( `testParam = ${testParam}` );

    // プラグインコマンドの定義
    const COM_TEST = "testCommand";
    PluginManagerEx.registerCommand( document.currentScript, COM_TEST, function( args ) {
        const arg1 = args[ "arg1" ];
        console.log( `arg1 = ${arg1}` );
    } );
} )();
