//========================================
// TF_Billboard.js
// Version :0.0.2.0
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
 * @plugindesc Tile like billboard.
 * @author Tonbi﹫Tobishima-Factory(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Billboard.js
 * 
 * @help
 * If tileset setting to [☆]+[4 direction pass] the set area will be impassable,
 * and tile changes like a billboard.
 * 
 * set [☆] to BCDE tile, and set 4 direction pass setting.
 * For example,[☆]+[↑→←・] billboard and block south pass.
 * Other settings will also become billboards and make the designated path impassable.
 *  [☆]+[↑→←↓] same as no plugin.
 *
 * TF_Billboard.js is tiny version of TF_LayeredMap.js.
 * Released under the MIT License.
 */
/*:ja
 * @target MZ
 * @plugindesc 書き割り風のタイル
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Billboard.js
 *
 * @help 
 * [☆]+[通行設定(4方向)]のうちいずれかを通行不可に設定すると
 * イベントと同様に上下位置で重ね合わせが変わる「書き割り」に
 * 表示方法が変更されます。
 * 
 * 例えば、[☆]+[↑→←・] の場合、書き割りかつ南側通行不可です。
 * 他も通行不可にした場合、書き割りかつ指定方向通行不可です。
 * 
 * TF_Billboard.js は TF_LayeredMap.js の機能抜粋版です。
 * 利用規約 : MITライセンス
 */
( () => {
    "use strict";
    const MASK_ALL_DIR = 0xF; // 通行設定用マスク
    const LAYER_MIDDLE = 3; // キャラ配置レイヤーのz番号


    /*---- Tilemap ----*/
    /**
     * 書き割りレイヤーの生成と追加。
     */
    const _Tilemap_createLayers = Tilemap.prototype._createLayers;
    Tilemap.prototype._createLayers = function() {
        _Tilemap_createLayers.call( this );
        const maxBillboard = Math.ceil( this._height / this._tileHeight ) + 2;  // 縦タイル数とスクロール時に必要になる+2
        if( !this.hasOwnProperty( "_billboards" ) ) {
            this._billboards = [];
        }
        for( let i = 0; i < maxBillboard; i++ ) {
            const billboard = new Tilemap.Layer();
            billboard.z = LAYER_MIDDLE;
            billboard.spriteId = Infinity;
            this.addChild( billboard );
            this._billboards.push( billboard );
        }
    };

    /**
     * 描画前に書き割りの中を空にしておく。
     */
    const _Tilemap__addAllSpots = Tilemap.prototype._addAllSpots;
    Tilemap.prototype._addAllSpots = function( startX, startY ) {
        for( const curItem of this._billboards ) {
            curItem.clear();
        }
        _Tilemap__addAllSpots.apply( this, arguments );
    };

    /**
     * タイルを描画
     * @param {Number} tileId タイルID
     * @param {Number} dx レイヤー内描画 x座標(ピクセル)
     * @param {Number} dy レイヤー内描画 y座標(ピクセル)
     */
    const _Tilemap__addSpotTile = Tilemap.prototype._addSpotTile;
    Tilemap.prototype._addSpotTile = function( tileId, dx, dy ) {
        if( this._isHigherTile( tileId ) && this.flags[ tileId ] & MASK_ALL_DIR ) {
            // [☆]かつ、4方向いずれかが通行不可設定だと書き割り
            const y = dy / this._tileHeight;
            this._addTile( this._billboards[ y ], tileId, dx, -this._tileHeight );
        } else {
            _Tilemap__addSpotTile.apply( this, arguments );
        }
    };

    /**
     * スクロールに合わせて書き割りの表示位置を変更。
     */
    const _Tilemap_updateTransform = Tilemap.prototype.updateTransform;
    Tilemap.prototype.updateTransform = function() {
        const ox = Math.ceil( this.origin.x );
        const oy = Math.ceil( this.origin.y );
        const startX = Math.floor( ( ox - this._margin ) / this._tileWidth );
        const startY = Math.floor( ( oy - this._margin ) / this._tileHeight );
        const posX = startX * this._tileWidth - ox;
        const posY = startY * this._tileHeight - oy;
        const l = this._billboards.length;
        for( let i = 0; i < l; i++ ) {
            const curItem = this._billboards[ i ];
            curItem.x = posX;
            curItem.y = posY + this._tileHeight * ( i + 1 );
        };

        _Tilemap_updateTransform.apply( this, arguments );
    };


    /*---- Game_Map ----*/
    /**
     * [☆]指定の場合も通行設定を適用する。
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} bit {@link RPG.Tileset}の flagsチェック用ビット
     * @returns {Boolean} 通行できるか
     */
    const _Game_Map_checkPassage = Game_Map.prototype.checkPassage;
    Game_Map.prototype.checkPassage = function( x, y, bit ) {
        const flags = this.tilesetFlags();
        const tiles = this.allTiles( x, y );
        for( const tile of tiles ) {
            const flag = flags[ tile ];
            if( ( flag & 0x10 ) !== 0 && ( flag & 0xF ) == 0 ) continue;
            if( ( flag & bit ) === 0 ) return true;
            if( ( flag & bit ) === bit ) return false;
        }
        return _Game_Map_checkPassage.apply( this, arguments );
    };
} )();