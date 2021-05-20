//========================================
// TF_SharpFont.js
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
 * @plugindesc フォントのスムージング機能を調整
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_SharpFont.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @param baseFontSize @text 基本フォントサイズ
 * @desc このサイズと倍数を基本フォントとする
 * 0 だと基本フォント用の処理はしない
 * @type number @default 16
 *
 * @param baseThreshold @text 基本フォントの閾値
 * @desc α値がこの値以下なら透明にする
 * 低い値ほど薄い部分も不透明に変換される
 * @type number @default 250
 * @max 255
 *
 * @param isApplyAll @text 全てシャープネス
 * @desc 全てのサイズのフォントに処理を加えるか
 * @type boolean @default true
 * @on 全てに適用(規定) @off 基本フォントのみ
 *
 * @param threshold @text フォントの閾値
 * @desc α値がこの値以下なら透明にする
 * 低い値ほど薄い部分も不透明に変換される
 * @type number @default 200
 * @max 255
 * 
 * @param sharpness @text シャープ度(%)
 * @desc 値が大きいほどくっきりする
 * 規定値:50
 * @type number @default 50
 * @min 0 @max 100
 *
 * @================================================
 * @help
 * 特にドット系のフォントがスムージング機能によりボケてしまうのを防ぎます。
 * 
 * [基本フォントサイズ]はフォントが想定しているサイズを入力します。
 * そのサイズのフォントはスムージング(アンチエイリアス)がかかりません。
 * 
 * フォントのスムージングはブラウザやOSの機能に依存するので、
 * あまり神経質に値を調整しても意味がありませんので、ご注意ください。
 * たぶん[基本フォントサイズ]以外は規定値で問題ないと思います。
 * 
 * テスト用のフォントには、マルモニカ(© 2018-2021 hicc 患者長ひっく)を使用。
 * https://00ff.booth.pm/items/2958237
 *
 * 利用規約: MITライセンス
 */
( () => {
    "use strict";
    const PLUGIN_NAME = "TF_SharpFont";
    const workBitmap = new Bitmap( 1, 1 );
    const wCtx = workBitmap.context;

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );

    const baseFontSize = pluginParams.baseFontSize;
    const baseThreshold = pluginParams.baseThreshold;
    const isApplyAll = pluginParams.isApplyAll;
    const threshold = pluginParams.threshold;
    const sharpness = ( 100 - pluginParams.sharpness ) / 100;

    const COM_TEST = "testCommand";
    PluginManagerEx.registerCommand( document.currentScript, COM_TEST, function( args ) {
        const argNote = args.note;//JSON.parse( args.note );
        argNote;
        paramNote;
    } );

    const ALIGN_LEFT = "left";
    const ALIGN_CENTER = "center";
    const ALIGN_RIGHT = "right";

    /*--- Bitmap ---*/
    const _Bitmap__drawTextBody = Bitmap.prototype._drawTextBody;
    Bitmap.prototype._drawTextBody = function( text, tx, ty, maxWidth ) {
        const isBaseSize = ( baseFontSize !== 0 ) && this.fontSize % baseFontSize === 0;
        if( !isApplyAll && !isBaseSize ) return _Bitmap__drawTextBody.apply( this, arguments );
        if( 1024 < maxWidth ) return;// やたらでかい数字で呼び出すやつがいるので無視

        //textBaseline = "alphabetic"だとラインの下に出る部分があるのでそのぶん増やす
        const size = Math.floor( this.fontSize * 1.2 );

        workBitmap.clear();
        workBitmap.resize( maxWidth, size );
        const tCtx = this.context;

        // 描画先の設定を作業場にコピー
        wCtx.font = tCtx.font;
        wCtx.textAlign = tCtx.textAlign;
        wCtx.textBaseline = wCtx.textBaseline;// "alphabetic"決め打ちで処理してるけど一応コピー
        wCtx.globalAlpha = tCtx.globalAlpha;
        wCtx.fillStyle = this.textColor;

        // textAlignで、描画位置が変わるのでズレを設定
        let alignX = 0;
        if( wCtx.textAlign === ALIGN_RIGHT ) {
            alignX = maxWidth;
        } else if( wCtx.textAlign === ALIGN_CENTER ) {
            alignX = Math.round( maxWidth / 2 );
        }
        wCtx.fillText( text, alignX, this.fontSize, maxWidth );
        const data = wCtx.getImageData( 0, 0, maxWidth, size ).data;

        // 半透明を含んでいるピクセルを透明に変換
        const l = data.length;
        if( isBaseSize ) {  // 基本サイズ
            for( let i = 0; i < l; i += 4 ) {
                const alpha = data[ i + 3 ];
                data[ i + 3 ] = ( alpha < baseThreshold ) ? 0 : 255;
            }

        } else {    // 基本サイズ以外
            for( let i = 0; i < l; i += 4 ) {
                const alpha = data[ i + 3 ];
                data[ i + 3 ] = ( alpha < threshold ) ? alpha * sharpness : 255;
            }
        }
        wCtx.putImageData( new ImageData( data, maxWidth ), 0, 0 );
        // 直接 this.context.putImageData() すると、輪郭部分を消してしまう
        // ので、一旦 workBitmap に戻してから blt() でコピーしている
        this.blt( workBitmap, 0, 0, maxWidth, size, tx - alignX, ty - this.fontSize );
    };
} )();