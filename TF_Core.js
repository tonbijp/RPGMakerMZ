//========================================
// TF_Core.js
// Version :0.0.0.1
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:
 * @target MZ
 * @plugindesc	TF_Core
 * @author	とんび@鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Core.js
 * @help
 * プラグインで共通して使っている処理をメモ的にまとめたもの。
 * これをライブラリとして必要とするプラグインなどを作る予定はない。
 * 
 * ============= この長さに合わせるとヘルプではみ出ない ==============
 * 利用規約 : MITライセンス
 *
 * @command commandName
 * @text コマンド名称
 * @desc コマンド説明
 *
 * @arg arg1
 * @text 引数の名称
 * @desc 引数の説明
 * 
 */

( () => {
    'use strict';
    const PLUGIN_NAME = 'TF_Core';

    /**
     * パラメータを受け取る
     */
    const TF_COMMAND = 'TF_COMMAND';
    PluginManager.registerCommand( PLUGIN_NAME, TF_COMMAND, args => {
        textPictureText = String( args.text );
    } );

    const _Game_Picture_show = Game_Picture.prototype.show;
    Game_Picture.prototype.show = function() {
        _Game_Picture_show.apply( this, arguments );
        // do something
    };
} )();