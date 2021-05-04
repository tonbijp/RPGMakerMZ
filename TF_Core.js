//========================================
// TF_Core.js
// Version :0.0.0.2
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
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @============ この長さに合わせるとヘルプではみ出ない =============
 * @help
 * プラグインで共通して使っている処理をメモ的にまとめたもの。
 * これをライブラリとして必要とするプラグインなどを作る予定はない。
 * 
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
    "use strict";
    const PLUGIN_NAME = "TF_Core";

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );


    /**
     * 
     */
    const COM_NAME = "name";
    PluginManager.registerCommand( PLUGIN_NAME, COM_NAME, args => {
        textPictureText = String( args.text );
    } );

    const _Game_Picture_show = Game_Picture.prototype.show;
    Game_Picture.prototype.show = function() {
        _Game_Picture_show.apply( this, arguments );
        // do something
    };


    /*--- ユーティリティ関数 ---*/
    /**
     * 文字列をPointオブジェクトに変換して返す。
     * @param {String} pointStr "x, y" 形式の文字列
     * @returns {Point} 
     */
    function stringToPoint( pointStr ) {
        const args = pointStr.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
        if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${pointStr}"`;
        return new Point( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
    }
} )();