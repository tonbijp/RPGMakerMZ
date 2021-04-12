//========================================
// TF_Template.js
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
 * @plugindesc テンプレートなので、これ自体は使いません。
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url 
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @help
 * テンプレート的なやつ。
 *
 * @command testCommand
 * @text テストコマンド
 * @desc 引数のテストconsoleに出力するよ。
 *
 * @arg arg1
 * @text 引数1
 * @desc consoleに出力するよ
 * @type string
 */
( () => {
    "use strict";

    const TEST_COMMAND = "testCommand";
    const param = PluginManagerEx.createParameter( document.currentScript );


    PluginManagerEx.registerCommand( document.currentScript, TEST_COMMAND, args => {
        console.log( `arg : ${args[ "arg1" ]}` );

    } );
} )();