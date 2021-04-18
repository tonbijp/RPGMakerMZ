//========================================
// TF_Template.js
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
 * @plugindesc テンプレートなので、これ自体は使いません。
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Template.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @help
 * テンプレート的なやつ。
 *
 * @command testCommand @text テストコマンド
 * @desc 引数のテストconsoleに出力するよ。
 *
 * @arg arg1 @text 引数1
 * @desc consoleに出力するよ
 * @type string @default 規定値
 */
( () => {
    "use strict";
    const PLUGIN_NAME = "TF_Template";

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );


    const COM_TEST = "test";
    PluginManagerEx.registerCommand( document.currentScript, COM_TEST, function( args ) {
        console.log( `${PLUGIN_NAME}: args = ${args[ "arg1" ]}` );
    } );
} )();