//=================================================
// TF_LayeredMap.js
// Version :1.0.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// ----------------------------------------------
// Copyright : Tobishima-Factory 2018-2025
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//=================================================
// #region annotation
/*:
 * @target MZ
 * @plugindesc Extended map tile layer.
 * @author Tonbi﹫Tobishima-Factory(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_LayeredMap.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * 
 * @param Autotile
 * 
 * @param UseLayeredCounter
 * @type boolean
 * @on Layered counter
 * @off Normal(default)
 * @desc Counter becomes layered.
 * A2 counter tile can layered like billboard.
 *  (HalfMove.js is needed)
 * @default false
 * @parent Autotile
 * 
 * @param IsA2FullCollision
 * @type boolean
 * @on Full collision(default)
 * @off Closed and inside is accessible
 * @desc Entire tile on the ground(A2) collision to activate.
 * @default true
 * @parent Autotile
 * 
 * @param IsA3UpperOpen
 * @type boolean
 * @on Open south
 * @off Close(default)
 * @desc Remove the south collision of the roof(A3)?
 * @default false
 * @parent Autotile
 * 
 * @param IsA4UpperOpen
 * @type boolean
 * @on Open south(default)
 * @off Close
 * @desc Remove the south collision of the wall top(A4)?
 * @default true
 * @parent Autotile
 * 
 * 
 * @help
 * This plug-in provides the following functions.
 * 　1. [☆]+[4 direction pass] Billboard function for B〜E tile is added.
 * 　2. [Counter] Billboard function for auto tile is added.
 * 　3. <TF_zDef:Number> Put this tag in the note in event and adjust the overlap.
 *      4. A2[Counter]North tile become to billboard.(See:plugin parameter)
 *      5. Change of collision detection pattern for auto tile.(See:plugin parameter)
 * 
 * 1. set [☆] to BCDE tile, and set 4 direction setting.
 *      0x0 ↑→←↓ : [☆]  Same as no plugin.
 *      0x1 ↑→←・ : billboard, ↑　←→ pass, ground (for fence)
 *      0x2 ↑→・↓ : billboard, ↑↓　→ pass, ground (left side of fence)┃
 *      0x3 ↑→・・ : billboard, ↑　　→ pass, ground (bottom left)┗
 *      0x4 ↑・←↓ : billboard, ↑↓←　 pass, ground (right)   ┃
 *      0x5 ↑・←・ : billboard, ↑　←　 pass, ground (bottom right)   ┛
 *      0x6 ↑・・↓ : billboard, ↑↓　　 pass, ground (both side)┃┃
 *      0x7 ↑・・・ : billboard, ↑　　　 pass, ground (like bartizan)┗┛
 *      0x8 ・→←↓ : billboard,  all directtion , ground (for bush)
 *      0x9 ・→←・ : billboard,  all directtion , 2nd floor
 *      0xA ・→・↓ : billboard,  all directtion , 3rd floor
 *      0xB ・→・・ : ignore(for decoration)
 *      0xC ・・←↓ : Same as 0x1 and south half blocked (for Barrel) (HalfMove.js is needed)
 *      0xD ・・←・ : Collision is north center (for lower tree) (HalfMove.js is needed)
 *      0xE ・・・↓ : Same as 0xC and collision is half  (for chair) (HalfMove.js is needed)
 *      0xF ・・・・ : Same as 0x1 and collision is half (for peg)(HalfMove.js is needed)
 * 
 * 2. For the clif.
 * 　First, set [counter].
 *      A3・A4 even line(wallside)
 *      　[○] All = billboard, South=can't pass.(floor height set automaticaly)
 *      Common to A3 and A4 
 *      　[×] North = billboard, Perimeter = can't pass.
 *  
 * 3. adjust the overlap
 * 　<TF_zDef:Number> Put this tag in the note in event.
 *      Add a number to the y position and set a virtual y position.
 * 　Enter a number greater than 6 (default) to bring the character to the front.
 * 
 * Released under the MIT License.
 */
// #endregion
// #region annotation ja
/*:ja
 * @target MZ
 * @plugindesc マップタイル重ね合わせ強化
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_LayeredMap.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @orderAfter HalfMove
 *
 * @================= parameter ====================
 * @param Autotile
 * @text オートタイル
 * 
 * @================================================
 * @param UseLayeredCounter
 * @text カウンター回り込み
 * @type boolean
 * @on 回り込み
 * @off 通常(規定値)
 * @desc A2のカウンターの後ろに回り込めるか
 * (HalfMove.js が必要)
 * @default false
 * @parent Autotile
 * 
 * @================================================
 * @param IsA2FullCollision
 * @text タイル全体を通行不可
 * @type boolean
 * @on 通行止め(規定値)
 * @off 閉じて内側は通行可
 * @desc A2(地面)のタイル全体を通行不可にするか
 * @default true
 * @parent Autotile
 * 
 * @================================================
 * @param IsA3UpperOpen
 * @type boolean
 * @on 南を開く
 * @off 閉じて内側は通行可(規定値)
 * @text 屋根南を開くか
 * @desc A3(屋根)[周囲=通行不可]の場合に、南の衝突判定をなくすか
 * @default false
 * @parent Autotile
 * 
 * @================================================
 * @param IsA4UpperOpen
 * @type boolean
 * @on 南を開く(規定値)
 * @off 閉じて内側は通行可
 * @text 壁上面南を開くか
 * @desc A4(壁上上面)[周囲=通行不可]の場合に、南の衝突判定をなくすか
 * @default true
 * @parent Autotile
 * 
 * @============ この長さに合わせるとヘルプではみ出ない =============
 * @help 
 * このプラグインは以下の機能を提供します。
 * 　1. [☆]+[通行設定(4方向)]で、B〜Eタイルの重なり機能を追加。
 * 　2. [♢]カウンター設定を行ったオートタイルの挙動を、カウンター以外の機能に変更。
 * 　3. <TF_zDef:数値> をイベントのメモに記入して重なりの調整。
 * 　4. A2[カウンター]の北側に回り込み機能を追加(プラグインパラメータを参照)
 * 　5. オートタイルの通行判定の仕様変更(プラグインパラメータを参照)
 * 
 * 1. B〜Eタイルに[☆]を指定したあと、[通行設定(4方向)]
 *      0x0 ↑→←↓ : [☆] 設定、全方向に 通行可(プラグインなしと同じ)
 *      0x1 ↑→←・ : 書割り、北　西東 通行可、1階 【基本、柵とか】━━━
 *      0x2 ↑→・↓ : 書割り、北南　東 通行可、1階 （柵の西側とか）┃
 *      0x3 ↑→・・ : 書割り、北　　東 通行可、1階 （柵の西南とか）┗
 *      0x4 ↑・←↓ : 書割り、北南西　 通行可、1階 （柵の東側とか）  　┃
 *      0x5 ↑・←・ : 書割り、北　西　 通行可、1階 （柵の東南とか）  　┛
 *      0x6 ↑・・↓ : 書割り、北南　　 通行可、1階 （両脇に木とか）┃　┃
 *      0x7 ↑・・・ : 書割り、北　　　 通行可、1階 （張り出し的な）┗━┛
 *      0x8 ・→←↓ : 書割り、全方向に 通行可、1階 （草むらなどに）
 *      0x9 ・→←・ : 書割り、全方向に 通行可、2階
 *      0xA ・→・↓ : 書割り、全方向に 通行可、3階
 *      0xB ・→・・ : 通行判定に影響を与えない(見た目だけの装飾)
 *      0xC ・・←↓ : 0x1 と同じだが南半分が通行不可 （机などに）(HalfMove.js が必要)
 *      0xD ・・←・ : 北の中心だけ通行不可 （根元とか）(HalfMove.js が必要)
 *      0xE ・・・↓ : 0xC と同じだが南の両脇が通行可 （椅子とか）(HalfMove.js が必要)
 *      0xF ・・・・ : 0x1 と同じだが南の両脇が通行可 （杭などに）(HalfMove.js が必要)
 *  
 * 2. [♢]カウンター設定を行ったオートタイルの挙動を、カウンター以外の機能に変更。
 *  A2の[×]以外の設定は[レイヤー1]に配置しても意味がないので、
 *  [自動]ではなく[レイヤー2]以降を選択して配置します。
 *    A1
 *      [○] 通行判定に影響を与えない(見た目だけの装飾)
 *      [×] ----
 *      [☆] ----
 *    A2
 *      [○] 通行判定に影響を与えない(見た目だけの装飾)
 *      [×] -- 通常のカウンターの挙動 --
 *      [☆] ----
 *    A3
 *      [○]
 *        奇数列(屋根)「矩形面全体で」南北通行不可、東西通行可(・→←・)
 *        偶数列(壁)  「矩形面全体で」南北通行可、東西通行不可(↑・・↓)
 *      [×] 北=書割り、周囲=通行不可
 *      [☆] 全体=書割り、南方向は通行不可(壁の高さは自動調整)
 *    A4
 *      [○]
 *        奇数列(上面) 通行判定に影響を与えない(見た目だけの装飾)
 *        偶数列(壁)  「矩形面全体で」南北通行可、東西通行不可(↑・・↓)
 *      [×] 北=書割り、周囲=通行不可
 *      [☆]
 *        奇数列(上面) 北=上層[☆]、他=通行不可
 *        全体=書割り、南方向は通行不可(壁の高さは自動調整)
 * 
 * 3. 重ね合わせのソート順を調整するメタタグ
 *      <TF_zDef:数値>の形でイベントのメモに入力します。
 *      数値は負の値も含む整数でピクセルに相当します。
 *      -48と入れれば1タイル上のイベントとみなして重ね合わせされます。
 * 
 * 利用規約 : MITライセンス
 */
// #endregion
( () => {
    "use strict";
    const LAYER_MIDDLE = 3; // キャラ配置レイヤーのz番号

    // flagのマスク
    const MASK_WITHOUT_DIR_UPPER = 0xFF60; // 通行設定と高層[☆]とカウンターを除いたもの
    const MASK_WITHOUT_TAG_DIR_UPPER = 0xF60; // 通行設定と高層[☆]と地形タグとカウンターを除いたもの
    const MASK_ALL_DIR = 0xF; // 通行設定
    const MASK_UPPER_DIR = 0x1F; // 高層[☆]と通行設定

    // flag用定数
    const FLAG_NORTH_DIR = 0x8; // 北の通行設定
    const FLAG_UPPER = 0x10; // 高層[☆]
    const FLAG_COUNTER = 0x80; // カウンター


    const FLOOR1_BOARD = 0x18;
    const FLOOR2_BOARD = 0x19;
    const FLOOR3_BOARD = 0x1A;
    const IGNORE_TILE = 0x1B;
    const FLOOR1_S_FULL = 0x1C; // 12 机
    const FLOOR1_N_HALF = 0x1D; // 13 椅子(北)
    const FLOOR1_S_HALF = 0x1E; // 14 椅子(南)
    const FLOOR1_S_FLAT = 0x1F; // 15 杭

    const AUTOTILE_BLOCK = 48; // オートタイル1ブロック分のパターン数

    /**
     * パラメータを受け取る
     */
    // HalfMove.js の確認
    const hasHalfMove = PluginManager._scripts.contains( "HalfMove" );

    // プラグインパラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );
    const TF_useLayeredCounter = pluginParams.UseLayeredCounter;    // カウンターの後ろに回り込めるか
    const TF_isA2FullCollision = pluginParams.IsA2FullCollision;    // A2の全体を通行不可にするか
    const TF_isA3UpperOpen = pluginParams.IsA3UpperOpen;    // A3の南を開くか
    const TF_isA4UpperOpen = pluginParams.IsA4UpperOpen;    // A4の南を開くか

    // #region Tilemap
    /**
     * 書割りレイヤーの生成と追加。
     */
    const _Tilemap_createLayers = Tilemap.prototype._createLayers;
    Tilemap.prototype._createLayers = function() {
        _Tilemap_createLayers.call( this );
        const maxBillboard = Math.ceil( this._height / $gameMap.tileHeight() ) + 4;  // 縦タイル数とスクロール時に必要になる+4
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
     * 描画前に書割りの中を空にしておく。
     */
    const _Tilemap_addAllSpots = Tilemap.prototype._addAllSpots;
    Tilemap.prototype._addAllSpots = function( startX, startY ) {
        this._billboards.forEach( e => e.clear() );
        _Tilemap_addAllSpots.apply( this, arguments );
    };

    /**
     * タイル描画の振り分けを行う。
     * @param {Number} startX 基点 x座標(タイル数)
     * @param {Number} startY 基点 y座標(タイル数)
     * @param {Number} x 相対 x座標(タイル数)
     * @param {Number} y 相対 y座標(タイル数)
     */
    Tilemap.prototype._addSpot = function( startX, startY, x, y ) {
        const mx = startX + x; //  描画対象のマップ x座標(タイル数)
        const my = startY + y; //  描画対象のマップ y座標(タイル数)
        const dx = x * $gameMap.tileWidth(); //  描画位置の x座標(ピクセル)
        const dy = y * $gameMap.tileHeight(); //  描画位置の y座標(ピクセル)
        const tileId0 = this._readMapData( mx, my, 0 ); // 低層タイルA
        const tileId1 = this._readMapData( mx, my, 1 ); // 低層タイルA2右側など
        const tileId2 = this._readMapData( mx, my, 2 ); // B 〜 E タイル
        const tileId3 = this._readMapData( mx, my, 3 ); // B 〜 E タイル
        const shadowBits = this._readMapData( mx, my, 4 ); // 影ペン
        const upperTileId1 = this._readMapData( mx, my - 1, 1 ); // 北位置の低層タイルA

        this.TF_addSpotTile( tileId0, dx, dy, mx, my );
        this.TF_addSpotTile( tileId1, dx, dy, mx, my );
        this._addShadow( this._lowerLayer, shadowBits, dx, dy );
        if( this._isTableTile( upperTileId1 ) && !this._isTableTile( tileId1 ) ) {
            if( !Tilemap.isShadowingTile( tileId0 ) ) {
                this._addTableEdge( this._lowerLayer, upperTileId1, dx, dy );
            }
        }

        if( this._isOverpassPosition( mx, my ) ) {
            this._addTile( this._upperLayer, tileId2, dx, dy );
            this._addTile( this._upperLayer, tileId3, dx, dy );
        } else {
            this.TF_addSpotTile( tileId2, dx, dy, mx, my );
            this.TF_addSpotTile( tileId3, dx, dy, mx, my );
        }
    };

    /**
     * タイルを描画
     * @param {Number} tileId タイルID
     * @param {Number} dx レイヤー内描画 x座標(ピクセル)
     * @param {Number} dy レイヤー内描画 y座標(ピクセル)
     * @param {Number} mx 目標 x座標(タイル数)
     * @param {Number} my 目標 x座標(タイル数)
     */
    Tilemap.prototype.TF_addSpotTile = function( tileId, dx, dy, mx, my ) {
        const floorType = this.flags[ tileId ] & MASK_UPPER_DIR;
        if( !this._isHigherTile( tileId ) || floorType === FLOOR1_N_HALF || floorType === IGNORE_TILE ) {
            // 高層タイルではない
            this._addTile( this._lowerLayer, tileId, dx, dy );
            return;
        }
        const y = dy / $gameMap.tileHeight();

        /**
         * 指定位置の壁の状態を調べる。
         * @param {Number} tileId タイルID
         * @returns {Number}  0:壁ではない, 1:下端, 2:上下に接続した壁, 3:上端
         */
        const getWallSideType = ( tileId ) => {
            if( !Tilemap.isWallSideTile( tileId ) ) return 0; // 壁タイルではない

            // autotileShape のビットは 下右上左 に対応しているので、それで判定
            const autotileShape = Tilemap.getAutotileShape( tileId );
            if( autotileShape & 2 ) return 3;
            if( autotileShape & 8 ) return 1;
            return 2;
        };

        /**
         * 優先階(priorityFloor)を得る。
         * @param {Number} tileId タイルID
         */
        const getPriorityFloor = ( tileId ) => {
            if( floorType === FLOOR2_BOARD ) return 2;
            if( floorType === FLOOR3_BOARD ) return 3;
            return 1;
        };

        /**
         * 表示階(floorNumber)を得る。
         * @param {Number} priorityFloor 優先階
         */
        const getFloorNumber = ( priorityFloor ) => {
            if( priorityFloor === 2 || priorityFloor === 3 ) {
                const wallSideType = getWallSideType( this._readMapData( mx, my + 1, 1 ) );

                if( wallSideType === 1 ) return 2;
                if( wallSideType === 2 ) return 3;
                if( wallSideType === 3 ) return priorityFloor;

                // 壁ではない場合
                return priorityFloor;
            }
            return 1;
        };

        const floorNumber = getFloorNumber( getPriorityFloor( tileId ) );

        if( floorNumber === 2 ) {
            // 2階設定は、ひとつ下の書割りに書き込む
            this._addTile( this._billboards[ y + 1 ], tileId, dx, -$gameMap.tileHeight() * 2 );
        } else if( floorNumber === 3 ) {
            // 3階設定は、ふたつ下の書割りに書き込む
            this._addTile( this._billboards[ y + 2 ], tileId, dx, -$gameMap.tileHeight() * 3 );
        } else if( this.flags[ tileId ] & MASK_ALL_DIR ) {
            // 通行不可設定のどれかがONだと書割り
            this._addTile( this._billboards[ y ], tileId, dx, -$gameMap.tileHeight() );
        } else {
            // 全方向通行可の場合は通常の高層[☆]表示
            this._addSpotTile( tileId, dx, dy );
        }
    };

    /**
     * スクロールに合わせて書割りの表示位置を変更。
     */
    const _Tilemap_updateTransform = Tilemap.prototype.updateTransform;
    Tilemap.prototype.updateTransform = function() {
        const ox = Math.ceil( this.origin.x );
        const oy = Math.ceil( this.origin.y );
        const startX = Math.floor( ( ox - this._margin ) / $gameMap.tileWidth() );
        const startY = Math.floor( ( oy - this._margin ) / $gameMap.tileHeight() );
        const posX = startX * $gameMap.tileWidth() - ox;
        const posY = startY * $gameMap.tileHeight() - oy;
        const l = this._billboards.length;
        for( let i = 0; i < l; i++ ) {
            const curItem = this._billboards[ i ];
            curItem.x = posX;
            curItem.y = posY + $gameMap.tileHeight() * ( i + 1 );
        };

        _Tilemap_updateTransform.apply( this, arguments );
    };

    /**
     * イベントの重なりのソート用関数。
     */
    Tilemap.prototype._compareChildOrder = function( a, b ) {
        if( a.z !== b.z ) return a.z - b.z;
        const zDefA = a._character ? a._character._TF_zDef : 0;
        const zDefB = b._character ? b._character._TF_zDef : 0;
        const ay = a.y + ( zDefA ? zDefA : 0 );
        const by = b.y + ( zDefB ? zDefB : 0 );
        if( ay !== by ) {
            return ay - by;
        }
        return a.spriteId - b.spriteId;
    };
    // #endregion


    // #region DataManager
    /**
     * 読み込み直後に、タイルセットデータを書き換える。
     * @param {Object} object 読み込んだデータ
     */
    const _DataManager_onLoad = DataManager.onLoad;
    DataManager.onLoad = function( object ) {
        _DataManager_onLoad.apply( this, arguments );
        if( object !== $dataTilesets ) return;

        // 全タイルセットに対してflagの走査・変更
        for( const curTileset of $dataTilesets ) {
            if( !curTileset ) continue;
            treatA1Tilesets( curTileset.flags );
            treatA2Tilesets( curTileset.flags );
            treatA3Tilesets( curTileset.flags );
            treatA4Tilesets( curTileset.flags );
        }
    };
    /* ---- DataManager.onLoad 用ユーティリティ ---- */
    // $gameMap が無い段階なので、必要な関数を代わりに定義したり、flags をまる渡ししたりしてる

    /**
     * カウンター設定か。
     * @param {Number} tileFlag タイルのフラグ情報
     */
    function isCounterTile( tileFlag ) {
        return ( tileFlag & FLAG_COUNTER ) === FLAG_COUNTER;
    }

    /**
     * 指定タイルが衝突判定[×]を持っているか。
     * @param {Number} tileFlag タイルのフラグ情報
     */
    function isCollisionTile( tileFlag ) {
        return 0 < ( tileFlag & MASK_ALL_DIR );
    }

    /**
     * 指定タイルが高層判定[☆]を持っているか。
     * @param {Number} tileFlag タイルのフラグ情報
     */
    function isUpperTile( tileFlag ) {
        return 0 < ( tileFlag & FLAG_UPPER );
    }

    /**
     * 地形フラグを得る。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId 
     * @returns {Number} [♢]:2, [☆]:4 の合算値を返す。
     */
    function getAutotileFlags( flags, tileId ) {
        return ( isUpperTile( flags[ tileId ] ) ? 4 : 0 ) + // [☆]
            ( isCounterTile( flags[ tileId ] ) ? 2 : 0 );   // [♢]
    }

    /**
     * A1タイルの走査・変更。
     *      [○] 通行判定に影響を与えない(見た目だけの装飾)
     *      [×] ----
     *      [☆] ----
     * @param {Array<Number>} flags 地形フラグの配列
     */
    function treatA1Tilesets( flags ) {
        for( let tileId = Tilemap.TILE_ID_A1; tileId < Tilemap.TILE_ID_A2; tileId++ ) {
            const shift = Tilemap.isWaterfallTile( tileId ) ? 1 : 16;
            const autotileFlags = getAutotileFlags( flags, tileId ) +
                // [×]でもオートタイルの0番は通行判定が空なので、tileId をずらす
                ( isCollisionTile( flags[ tileId + shift ] ) ? 1 : 0 ); // [×]
            switch( autotileFlags ) {
                case 2: setIgnorePass( flags, tileId ); break;   // [○][♢]
            }
        }
    }
    /**
     * A2タイルの走査・変更。
     *      [○] 通行判定に影響を与えない(見た目だけの装飾)
     *      [×] -- 通常のカウンターの挙動 --
     *      [☆] ----
     * @param {Array<Number>} flags 地形フラグの配列
     */
    function treatA2Tilesets( flags ) {
        for( let tileId = Tilemap.TILE_ID_A2; tileId < Tilemap.TILE_ID_A3; tileId += AUTOTILE_BLOCK ) {
            const autotileFlags = getAutotileFlags( flags, tileId ) +
                // [×]でもオートタイルの0番は通行判定が空なので、tileId をひとつずらす
                ( isCollisionTile( flags[ tileId + 1 ] ) ? 1 : 0 ); // [×]
            switch( autotileFlags ) {
                case 1: if( !TF_isA2FullCollision ) { setEmptyLinePass( flags, tileId ); }; break;   // [×]
                case 2: setIgnorePass( flags, tileId ); break;   // [○][♢]
                case 3: if( TF_useLayeredCounter ) { setCounterPass( flags, tileId ); }; break;   // [×][♢]
            }
        }
    }

    /**
     * A3タイルの走査・変更。
     *      [○]
     *        奇数列(屋根)「矩形面全体で」南北通行不可、東西通行可(・→←・)
     *        偶数列(壁)  「矩形面全体で」南北通行可、東西通行不可(↑・・↓)
     *      [×] 北=書割り、周囲=通行不可
     *      [☆] 全体=書割り、南方向は通行不可(壁の高さは自動調整)
     * @param {Array<Number>} flags 地形フラグの配列
     */
    function treatA3Tilesets( flags ) {
        for( let tileId = Tilemap.TILE_ID_A3; tileId < Tilemap.TILE_ID_A4; tileId += AUTOTILE_BLOCK ) {
            const autotileFlags =
                ( Tilemap.isRoofTile( tileId ) ? 8 : 0 ) +              // 屋根
                getAutotileFlags( flags, tileId ) +
                // [×]でもオートタイルの0番は通行判定が空なので、tileId をひとつずらす
                ( isCollisionTile( flags[ tileId + 1 ] ) ? 1 : 0 ); // [×]
            switch( autotileFlags ) {
                // 壁
                case 2: setVerticalPass( flags, tileId ); break;    // [○][♢]
                case 3: setWallSidePass( flags, tileId ); break;    // [×][♢]
                case 6: setBillboardPass( flags, tileId ); break;   // [☆][♢]
                // 屋根
                case 10: setHorizontalPass( flags, tileId ); break; // [○][♢]
                case 11: setRoofUpperPass( flags, tileId ); break;  // [×][♢]
                case 14: setBillboardPass( flags, tileId ); break;  // [☆][♢]
            }
        }
    }

    /**
     * A4タイルの走査・変更。
     *      [○] 
     *        奇数列(上面) 通行判定に影響を与えない(見た目だけの装飾)
     *        偶数列(壁)  「矩形面全体で」南北通行可、東西通行不可(↑・・↓)
     *      [×] 北=書割り、周囲=通行不可
     *      [☆]
     *        奇数列(上面) 北=上層[☆]、他=通行不可
     *        全体=書割り、南方向は通行不可(壁の高さは自動調整)
     * @param {Array<Number>} flags 地形フラグの配列
     */
    function treatA4Tilesets( flags ) {
        for( let tileId = Tilemap.TILE_ID_A4; tileId < Tilemap.TILE_ID_MAX; tileId += AUTOTILE_BLOCK ) {
            const isWallTopTile = Tilemap.isWallTopTile( tileId );
            const shift = isWallTopTile ? 16 : 1;
            const autotileFlags =
                ( isWallTopTile ? 8 : 0 ) +           // 壁(上面)
                getAutotileFlags( flags, tileId ) +
                // [×]でもオートタイルの0番は通行判定が空なので、tileId をずらす
                ( isCollisionTile( flags[ tileId + shift ] ) ? 1 : 0 ); // [×]
            switch( autotileFlags ) {
                // 壁(側面)
                case 2: setVerticalPass( flags, tileId ); break;        // [○][♢]
                case 3: setWallSidePass( flags, tileId ); break;        // [×][♢]
                case 6: setBillboardPass( flags, tileId ); break;    // [☆][♢]
                // 壁(上面)
                case 9: if( !TF_isA4UpperOpen ) { setEmptyLinePass( flags, tileId ); } break;   // [×]
                case 10: setIgnorePass( flags, tileId ); break;         // [○][♢]
                case 11: setA4UpperPass( flags, tileId ); break;        // [×][♢]
                case 14: setA4UpperEdgePass( flags, tileId ); break;    // [☆][♢]
            }
        }
    }

    /**
     * 衝突判定を指定した設定に変換。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     * @param {Number} mask flagのマスク
     * @param {Array} collisionSetting 適用するflag設定 
     */
    function replaceCollision( flags, tileId, mask, collisionSetting ) {
        const maxNum = collisionSetting.length;
        for( let i = 0; i < maxNum; i++ ) {
            flags[ tileId + i ] = flags[ tileId + i ] & mask | collisionSetting[ i ];
        }
    }
    /**
     * 通行判定に影響を与えない(見た目だけの装飾)に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setIgnorePass( flags, tileId ) {
        // フルオートか滝かによって変更範囲を変える
        const maxNum = Tilemap.isWaterfallTile( tileId ) ? 4 : 48;
        for( let i = 0; i < maxNum; i++ ) {
            flags[ tileId + i ] = flags[ tileId + i ] & MASK_WITHOUT_DIR_UPPER | IGNORE_TILE;
        }
    }
    /**
     * カウンター用に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setCounterPass( flags, tileId ) {
        const COUNTER_PASS = [
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 28, 28, 28, 28,
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 28, 28, 28, 28, 28, 15, 15,
            15, 15, 28, 28, 15, 28, 28, 28,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER | FLAG_COUNTER, COUNTER_PASS );
    }
    /**
     * 中空の地形に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setEmptyLinePass( flags, tileId ) {
        const EMPTY_PASS = [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            2, 2, 2, 2, 8, 8, 8, 8,
            4, 4, 4, 4, 1, 1, 1, 1,
            6, 9, 10, 10, 12, 12, 5, 5,
            3, 3, 14, 11, 7, 13, 15, 15
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, EMPTY_PASS );
    }
    /**
     * 屋根 : 北=書割り、周囲=通行不可に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setRoofUpperPass( flags, tileId ) {
        const A3_UPPER_PASS = TF_isA3UpperOpen ? [
            0x00, 0x02, 0x11, 0x11,
            0x04, 0x06, 0x11, 0x11,
            0x00, 0x02, 0x11, 0x11,
            0x04, 0x06, 0x11, 0x11,
        ] : [
            0x00, 0x02, 0x11, 0x11,
            0x04, 0x06, 0x11, 0x11,
            0x01, 0x03, 0x11, 0x11,
            0x05, 0x07, 0x11, 0x11,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, A3_UPPER_PASS );
    }
    /**
     * 壁(上面) : 北=書割り、周囲=通行不可に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setA4UpperPass( flags, tileId ) {
        const A4_UPPER_PASS = TF_isA4UpperOpen ? [
            0, 2, 4, 6, 0, 2, 4, 6,
            0, 2, 4, 6, 0, 2, 4, 6,
            2, 6, 2, 6, 17, 17, 17, 17,
            4, 4, 6, 6, 0, 2, 4, 6,
            6, 17, 17, 17, 17, 17, 4, 6,
            2, 6, 17, 17, 6, 17, 17, 17,
        ] : [
            0, 2, 4, 6, 0, 2, 4, 6,
            0, 2, 4, 6, 0, 2, 4, 6,
            2, 6, 2, 6, 17, 17, 17, 17,
            4, 4, 6, 6, 1, 3, 5, 7,
            6, 17, 17, 17, 17, 17, 5, 7,
            3, 7, 17, 17, 7, 17, 17, 17,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, A4_UPPER_PASS );
    }
    /**
     * 壁(上面) : 北=上層[☆]、他=通行不可に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setA4UpperEdgePass( flags, tileId ) {
        const A4_UPPER_PASS = [
            0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F,
            0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F,
            0x0F, 0x0F, 0x0F, 0x0F, 0x10, 0x10, 0x10, 0x10,
            0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F,
            0x0F, 0x10, 0x10, 0x10, 0x10, 0x10, 0x0F, 0x0F,
            0x0F, 0x0F, 0x10, 0x10, 0x0F, 0x10, 0x10, 0x10,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, A4_UPPER_PASS );
    }
    /**
     * 「矩形面全体で」南北通行不可、東西通行可(・→←・)に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setHorizontalPass( flags, tileId ) {
        const HORIZONTAL_PASS = [
            0, 0, 8, 8,
            0, 0, 8, 8,
            1, 1, 9, 9,
            1, 1, 9, 9,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_TAG_DIR_UPPER, HORIZONTAL_PASS );
    }
    /**
     * 「矩形面全体で」南北通行可、東西通行不可(↑・・↓)に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setVerticalPass( flags, tileId ) {
        const VERTICAL_PASS = [
            0, 2, 0, 2,
            4, 6, 4, 6,
            0, 2, 0, 2,
            4, 6, 4, 6,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_TAG_DIR_UPPER, VERTICAL_PASS );
    }


    /**
     * 壁(側面): 全体=書割り、南方向は通行不可(壁の高さは自動調整)に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setBillboardPass( flags, tileId ) {
        const WALL_SIDE_PASS_EDGE = [
            0x19, 0x19, 0x1A, 0x1A,
            0x19, 0x19, 0x1A, 0x1A,
            0x11, 0x11, 0x11, 0x11,
            0x11, 0x11, 0x11, 0x11,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, WALL_SIDE_PASS_EDGE );
    }
    /**
     * 壁(側面): 北=書割り、周囲=通行不可に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setWallSidePass( flags, tileId ) {
        const WALL_SIDE_PASS = [
            0x00, 0x02, 0x11, 0x11,
            0x04, 0x06, 0x11, 0x11,
            0x01, 0x03, 0x11, 0x11,
            0x05, 0x07, 0x11, 0x11,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, WALL_SIDE_PASS );
    }
    // #endregion


    // #region Game_CharacterBase
    /**
     * 指定方向への移動が可能か
     * キャラクタ半分の位置が関係するものは、ここで判定。
     * @param {Number} halfX タイル数(0.5刻み)
     * @param {Number} halfY タイル数(0.5刻み)
     * @param {Number} d 向き(テンキー対応)
     * @returns {Boolean} 移動可能か
     */
    const _Game_CharacterBase_isMapPassable = Game_CharacterBase.prototype.isMapPassable;
    Game_CharacterBase.prototype.isMapPassable = function( halfX, halfY, d ) {
        if( !hasHalfMove ) return _Game_CharacterBase_isMapPassable.apply( this, arguments );

        // 以下 HalfMove.js がある場合み処理
        const x = Math.floor( halfX + 0.5 );
        const y = Math.floor( halfY + 0.5 );
        const halfPos = getHalfPos( halfX, halfY );
        const flags = $gameMap.tilesetFlags();

        /**
         * 指定位置に指定flagがあるか
         * 衝突判定番号は以下の通り
         * 上面縦:0 1 2
         * 上水平:3 4 5
         * 中面縦:6 7 8
         * 下水平:9 10 11
         * 下面縦:12 13 14
         * @param {Number} x タイル数
         * @param {Number} y タイル数
         * @param {Number} wallNumber 衝突判定番号
         * @returns {Boolean} 
         */
        const checkCollision = ( x, y, wallNumber ) => {
            const CLILISION_TABLE = {
                28: [//  0x1C 机・・←↓
                    false, false, false,
                    false, false, false,
                    true, true, true,
                    true, true, true,
                    true, true, true,
                ],
                29: [ // 0x1D 椅子(北) ・・←・
                    false, true, false,
                    false, true, false,
                    false, true, false,
                    false, false, false,
                    false, false, false,
                ],
                30: [ // 0x1E 椅子(南)・・・↓
                    false, false, false,
                    false, false, false,
                    false, true, false,
                    false, true, false,
                    false, true, false,
                ],
                31: [ // 0x1F 杭・・・・
                    false, false, false,
                    false, false, false,
                    false, false, false,
                    false, false, false,
                    false, true, false,
                ]
            };
            const tiles = $gameMap.allTiles( Math.floor( x ), Math.floor( y ) );

            for( let i = 0; i < tiles.length; i++ ) {
                const collisionType = flags[ tiles[ i ] ] & MASK_UPPER_DIR;
                if( FLOOR1_BOARD <= collisionType && collisionType <= FLOOR3_BOARD ) continue;
                const hitResult = CLILISION_TABLE[ collisionType ];
                if( hitResult ) {
                    return hitResult[ wallNumber ];
                }
            }
            return false;
        };

        const checkHalfCollision = () => {
            // x方向はタイルとタイルの間にキャラが位置するので、両側のタイルをチェックする必要がある

            switch( d ) {
                case 2:
                    if( halfPos === 0 ) {
                        if( checkCollision( x, y, 6 ) ) return true;
                        if( checkCollision( x - 1, y, 6 ) ) return true;
                    }
                    if( halfPos === 1 && checkCollision( x, y, 7 ) ) return true;
                    if( halfPos === 2 ) {
                        if( checkCollision( x, y, 12 ) ) return true;
                        if( checkCollision( x - 1, y + 1, 14 ) ) return true;
                        if( checkCollision( x, y + 1, 0 ) ) return true;
                        if( checkCollision( x - 1, y + 1, 2 ) ) return true;
                    }
                    if( halfPos === 3 ) {
                        if( checkCollision( x, y, 13 ) ) return true;
                        if( checkCollision( x, y + 1, 1 ) ) return true;
                    }
                    break;
                case 8:
                    if( halfPos === 0 ) {
                        if( checkCollision( x, y, 0 ) ) return true;
                        if( checkCollision( x - 1, y - 1, 2 ) ) return true;
                        if( checkCollision( x, y - 1, 12 ) ) return true;
                        if( checkCollision( x - 1, y - 1, 14 ) ) return true;
                    }
                    if( halfPos === 1 ) {
                        if( checkCollision( x, y, 1 ) ) return true;
                        if( checkCollision( x, y - 1, 13 ) ) return true;
                    }
                    if( halfPos === 2 ) {
                        if( checkCollision( x, y, 6 ) ) return true;
                        if( checkCollision( x - 1, y, 8 ) ) return true;
                    }
                    if( halfPos === 3 && checkCollision( x, y, 10 ) ) return true;
                    break;
                case 4:
                    if( halfPos === 0 && checkCollision( x - 1, y, 4 ) ) return true;
                    if( halfPos === 1 ) {
                        if( checkCollision( x, y, 3 ) ) return true;
                        if( checkCollision( x - 1, y, 5 ) ) return true;
                    }
                    if( halfPos === 2 && checkCollision( x - 1, y, 10 ) ) return true;
                    if( halfPos === 3 ) {
                        if( checkCollision( x, y, 9 ) ) return true;
                        if( checkCollision( x - 1, y, 11 ) ) return true;
                    }
                    break;
                case 6:
                    if( halfPos === 0 && checkCollision( x, y, 4 ) ) return true;
                    if( halfPos === 1 ) {
                        if( checkCollision( x, y, 5 ) ) return true;
                        if( checkCollision( x + 1, y, 3 ) ) return true;
                    }
                    if( halfPos === 2 && checkCollision( x, y, 10 ) ) return true;
                    if( halfPos === 3 ) {
                        if( checkCollision( x, y, 11 ) ) return true;
                        if( checkCollision( x + 1, y, 9 ) ) return true;
                    }
                    break;
            }
            return false;
        };

        if( checkHalfCollision() ) return false;

        return _Game_CharacterBase_isMapPassable.apply( this, arguments );
    };
    // #endregion


    // #region Game_Event
    const _Game_Event_initialize = Game_Event.prototype.initialize;
    Game_Event.prototype.initialize = function( mapId, eventId ) {
        _Game_Event_initialize.apply( this, arguments );

        const getMetaValue = ( object, name ) => {
            const metaTagName = "TF_" + name;
            return object.meta.hasOwnProperty( metaTagName ) ? object.meta[ metaTagName ] : undefined;
        };

        const zDef = getMetaValue( this.event(), "zDef" );
        if( zDef !== undefined ) this._TF_zDef = parseFloat( zDef );

        const higherLevel = getMetaValue( this.event(), "higherLevel" );
        if( higherLevel !== undefined ) this._higherLevel = ( higherLevel.toLowerCase() === PARAM_TRUE );
    };
    // #endregion


    // #region Game_Map
    /**
     * 指定位置の指定フラグビットが通行可か。
     * 高層表示[☆]の4方向の通行設定については@helpを参照
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} bit {@link RPG.Tileset}の flagsチェック用ビット
     * @returns {Boolean} 通行できるか(true:通行可, false:不可)
     */
    // const _Game_Map_checkPassage = Game_Map.prototype.checkPassage;
    Game_Map.prototype.checkPassage = function( x, y, bit ) {
        const flags = this.tilesetFlags();
        const tiles = this.allTiles( x, y );
        const lastIndex = tiles.length;
        for( let i = 0; i < lastIndex; i++ ) {
            const tileId = tiles[ i ];
            const flag = flags[ tileId ];

            // HalfMove.js がある場合、[☆]かつ北通行不可タイルは無視
            if( ( flag & FLAG_UPPER ) && hasHalfMove && ( flag & FLAG_NORTH_DIR ) ) continue;
            if( tileId === 0 ) continue;    // Bタイルの左上は無視
            const collisionType = flag & MASK_UPPER_DIR;
            if( FLOOR1_BOARD <= collisionType && collisionType <= FLOOR3_BOARD ) continue;// 看板全通行可タイプは無視
            if( collisionType === IGNORE_TILE ) continue;

            if( !( flag & FLAG_UPPER ) && ( flag & bit ) === 0 ) return true;// [☆]以外は通れるタイルが上にある時点で通れる
            if( ( flag & bit ) === bit ) return false;
        }
        return false;
    };

    /*---- ユーティリティ ----*/
    /**
     * タイル内の位置を返す( 0:左上, 1:上, 2:左下, 3:下 )
     * @param {Number} x x座標(タイル数)
     * @param {Number} y y座標(タイル数)
     */
    function getHalfPos( x, y ) {
        return ( ( ( x % 1 ) === 0 ) ? 1 : 0 ) + ( ( ( y % 1 ) === 0 ) ? 2 : 0 );
    }
    // #endregion
} )();