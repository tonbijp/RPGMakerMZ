# Class: Tilemap

## Extends: [PIXI.Container](PIXI.Container.md)

### new Tilemap ()
2Dベースのタイルマップを表示するためのコンテナクラス。 

静的メソッドを多く持つユーティリティクラスでもある。

描画モード(F2キーを押して確かめられる)が Canvas Mode の場合に使われる。<br />
なお、Canvas Mode は古いブラウザなどの一部環境でしか使われない。

関連クラス: [RPG.Map](RPG.Map.md), [RPG.Tileset](RPG.Tileset.md), [Game_Map](Game_Map.md), [Spriteset_Map](Spriteset_Map.md)


### Sub Classes

*  [ShaderTilemap](ShaderTilemap.md) 


### Properties:
TILE_ から始まる定数はタイルブロックのタイルIDの開始番号。

| Name | Type | Description |
| --- | --- | --- |
| `TILE_ID_A1` | [Number](Number.md) | [static] A1(アニメーション)タイルIDの開始番号(2048) |
| `TILE_ID_A2` | [Number](Number.md) | [static] A2(地面)タイルIDの開始番号(2816) |
| `TILE_ID_A3` | [Number](Number.md) | [static] A3(建物)タイルIDの開始番号(4352) |
| `TILE_ID_A4` | [Number](Number.md) | [static] A4(壁)タイルIDの開始番号(5888) |
| `TILE_ID_A5` | [Number](Number.md) | [static] A5(通常)タイルIDの開始番号(1536) |
| `TILE_ID_B` | [Number](Number.md) | [static] BタイルIDの開始番号(0) |
| `TILE_ID_C` | [Number](Number.md) | [static] CタイルIDの開始番号(256) |
| `TILE_ID_D` | [Number](Number.md) | [static] DタイルIDの開始番号(512) |
| `TILE_ID_E` | [Number](Number.md) | [static] EタイルIDの開始番号(768) |
| `TILE_ID_MAX` | [Number](Number.md) | [static] タイルIDの終端番号(8192) |
| `FLOOR_AUTOTILE_TABLE` | [Array](Array.md).&lt;[Array](Array.md).&lt;[Array](Array.md).&lt;[Number](Number.md)&gt;&gt;&gt; | [static] 床オートタイル組み立てテーブル |
| `WALL_AUTOTILE_TABLE` | [Array](Array.md).&lt;[Array](Array.md).&lt;[Array](Array.md).&lt;[Number](Number.md)&gt;&gt;&gt; | [static] 壁オートタイル組み立てテーブル |
| `WATERFALL_AUTOTILE_TABLE` | [Array](Array.md).&lt;[Array](Array.md).&lt;[Array](Array.md).&lt;[Number](Number.md)&gt;&gt;&gt; | [static] 滝オートタイル組み立てテーブル |
| `parent` | Object | [read-only][super] 親オブジェクト(タイルマップを保持している[Spriteset_Map](Spriteset_Map.md)) |
| `children` | [Array](Array.md).&lt;[Sprite](Sprite.md)&gt; | [read-only][super] 子オブジェクト([Sprite](Sprite.md) 、[Sprite_Character](Sprite_Character.md) 、[Sprite_Destination](Sprite_Destination.md) を含む配列) |
| `animationCount` | [Number](Number.md) |  オートタイルアニメーションのカウント |
| `bitmaps` | [Array](Array.md).&lt;[Bitmap](Bitmap.md)&gt; | タイルセット画像の配列(0〜9)<br />(0:A1, 1:A2, 2:A3, 3:A4, 4:A5, 5:B, 6:C, 7:D, 8:E) |
| `origin` | [Point](Point.md) |  スクロールに対する基準点 |
| `flags` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  フラグ(See:[RPG.Tileset](RPG.Tileset.md)) |
| `tileHeight` | [Number](Number.md) | タイル高さ(規定値:48 ピクセル) |
| `tileWidth` | [Number](Number.md) | タイル幅(規定値:48 ピクセル) |
| `height` | [Number](Number.md) | 画面高さ(規定値:816 ピクセル) |
| `width` | [Number](Number.md) | 画面幅(規定値:624 ピクセル) |
| `horizontalWrap` | Boolean | 横方向にループするか |
| `verticalWrap` | Boolean | 縦方向にループするか |
| `_lowerBitmap ` | [Bitmap](Bitmap.md) | 下層ビットマップ |
| `_upperBitmap ` | [Bitmap](Bitmap.md) | 上層ビットマップ |
| `_layerWidth ` | [Number](Number.md) | レイヤーの幅 |
| `_layerHeight ` | [Number](Number.md) | レイヤーの高さ |
| `_lowerLayer ` | [Sprite](Sprite.md) | 下層レイヤー( z = 0 ) |
| `_upperLayer ` | [Sprite](Sprite.md) | 上層レイヤー( z = 4 ) |
| `_lastTiles ` | [Array](Array.md) | 最新のタイル情報 |


### Inherited From

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
* [getLocalBounds (rect)](PIXI.DisplayObject.md#getlocalbounds-rect--pixirectangle)
* [setParent (container)](PIXI.DisplayObject.md#setparent-container--pixicontainer)
* [setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)](PIXI.DisplayObject.md#settransform-x-y-scalex-scaley-rotation-skewx-skewy-pivotx-pivoty--pixidisplayobject)
* [toGlobal (position, point, skipUpdate)](PIXI.DisplayObject.md#toglobal-position-point-skipupdate--pixipoint)
* [toLocal (position, from, point, skipUpdate)](PIXI.DisplayObject.md#tolocal-position-from-point-skipupdate--pixipoint)

#### [PIXI.Container](PIXI.Container.md)

* [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
* [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
* [calculateBounds ()](PIXI.Container.md#calculatebounds-)
* [destroy ()](PIXI.Container.md#destroy-)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)


### Methods

#### (static) getAutotileKind (tileId) → {[Number](Number.md)}
 オートタイルの種類を返す。<br />
 返り値から以下の表にしたがって判断が必要だが、各種isXXXメソッドを使えば種類が確定できる。

| Set | Description |
| --- | --- |
| A1 | 海:0、深海:1、浅瀬障害:2,3、水面:4,6,8,10,12,14、滝:5,7,9,11,13,15 |
| A2 | 地面:16〜19,24〜27,32〜35,40〜43、重ねて配置用:20〜23,28〜31,36〜39,44〜47 |
| A3 | 屋根:48〜55,64〜71、壁:56〜63,72〜79 |
| A4 | 壁上：80〜87,96〜103,112〜119、壁:88〜95,104〜111,120〜127 |

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) getAutotileShape (tileId) → {[Number](Number.md)}
 オートタイルのシェイプを返す。
地面・床・壁上面:0〜47、屋根・壁:0〜15、滝:0〜3 の値

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isAutotile (tileId) → {Boolean}
 オートタイル(A1〜A4)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isFloorTypeAutotile (tileId) → {Boolean}
 (48シェイプを持つ)地表面タイプのオートタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isGroundTile (tileId) → {Boolean}
 地表(A1,A2,A5)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isRoofTile (tileId) → {Boolean}
 屋根(A3奇数行)タイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isSameKindTile (tileID1, tileID2) → {Boolean}
 指定したタイルが(オートタイルのシェイプは問わないで)同じ種類か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileID1` | [Number](Number.md) | タイルID |
| `tileID2` | [Number](Number.md) | タイルID |


#### (static) isShadowingTile (tileId) → {Boolean}
 設置した時に影が自動でつけられるタイル(A3 と A4)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isTileA1 (tileId) → {Boolean}
A1(アニメーション)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isTileA2 (tileId) → {Boolean}
A2(地面)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isTileA3 (tileId) → {Boolean}
A3(建物)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isTileA4 (tileId) → {Boolean}
A4(壁)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isTileA5 (tileId) → {Boolean}
A5(通常)のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isVisibleTile (tileId) → {Boolean}
 表示されるタイル(0〜TILE_ID_MAXに含まれる)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isWallSideTile (tileId) → {Boolean}
 壁面タイル(A3偶数行 と A4偶数行)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isWallTile (tileId) → {Boolean}
 壁タイル(A3偶数行 と A4)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isWallTopTile (tileId) → {Boolean}
 壁上面タイル(A4奇数行)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isWallTypeAutotile (tileId) → {Boolean}
 (16シェイプを持つ)壁タイプのタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isWaterfallTile (tileId) → {Boolean}
 滝のタイル(A1で偶数列2番目以降)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isWaterfallTypeAutotile (tileId) → {Boolean}
 (4シェイプを持つ)滝タイプのオートタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) isWaterTile (tileId) → {Boolean}
 水面のタイル(浅瀬障害を除くA1)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### (static) makeAutotileId (kind, shape) → {[Number](Number.md)}
 指定したオートタイルの種類とシェイプからタイルIDを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `kind` | [Number](Number.md) | 種類(See: [getAutotileKind](#static-getautotilekind-tileid--number)) |
| `shape` | [Number](Number.md) | シェイプ(See: [getAutotileShape](#static-getautotileshape-tileid--number)) |


#### _compareChildOrder (a, b)
[\_sortChildren](#_sortchildren-)用ソート条件のコールバック関数。<br />
childrenプロパティに含まれる子オブジェクトが、a, b に渡される。<br />
順番は渡されたオブジェクトの z, y, spriteIdプロパティによって評価される。<br />
z の内容は、[重なりの優先度](Sprite.md#重なりの優先度)を参照。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `a` | Object | z, y, spriteIdプロパティを持つオブジェクト |
| `b` | Object | z, y, spriteIdプロパティを持つオブジェクト |


#### _createLayers ()
 低層×4 + 高層×4 レイヤー(z: 0 〜 7)を生成。


#### _drawAutotile (bitmap, tileId, dx, dy)
 渡されたBitmapにオートタイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `tileId` | [Number](Number.md) | タイルID |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |


#### _drawNormalTile (bitmap, tileId, dx, dy)
 渡されたBitmapに(オートタイルでない通常の)タイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `tileId` | [Number](Number.md) | タイルID |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |


#### _drawShadow (bitmap, shadowBits, dx, dy)
 渡されたBitmapに影ペンの影を描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `shadowBits` | [Number](Number.md) |  タイルを4分割したうちで描く位置を指定するビット（下位から左上/右上/左下/右下） |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |


#### _drawTableEdge (bitmap, tileId, dx, dy)
 渡されたBitmapにテーブル端の画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `tileId` | [Number](Number.md) | タイルID |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |


#### _drawTile (bitmap, tileId, dx, dy)
 渡されたBitmapにタイル画像を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | 書き込み対象画像 |
| `tileId` | [Number](Number.md) | タイルID |
| `dx` | [Number](Number.md) | 書き込む x座標(ピクセル) |
| `dy` | [Number](Number.md) | 書き込む y座標(ピクセル) |


#### _isHigherTile (tileId) → {Boolean}
 高層[☆]のタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


####  _isOverpassPosition (mx, my) → {Boolean}
立体交差か。<br />
標準では何の動作もしない空メソッドでプラグインによって機能を追加する。<br />
OverpassTile.js プラグインで使われている。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mx` | [Number](Number.md) | マップ x座標(タイル数) |
| `my` | [Number](Number.md) | マップ y座標(タイル数) |


####  _isTableTile (tileId) → {Boolean}
 テーブルタイルか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### _paintAllTiles (startX, startY)
 全タイルを描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) | 画面の左上 マップ x座標(タイル数) |
| `startY` | [Number](Number.md) | 画面の左上 マップ y座標(タイル数) |


#### _paintTiles (startX, startY, x, y)
 指定位置のタイルを描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) | 画面の左上 マップ x座標(タイル数) |
| `startY` | [Number](Number.md) | 画面の左上 マップ y座標(タイル数) |
| `x` | [Number](Number.md) | 画面上の x座標(タイル数) |
| `y` | [Number](Number.md) | 画面上の y座標(タイル数) |


#### _readLastTiles (i, x, y) → {[Array](Array.md).<[Number](Number.md)>}
指定位置の最新タイル配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `i` | [Number](Number.md) | レイヤー階層(0: 低層, 1: 高層) |
| `x` | [Number](Number.md) | x座標(タイル数) |
| `y` | [Number](Number.md) | y座標(タイル数) |


#### _readMapData (x, y, z) → {[Number](Number.md)}
指定位置のタイルIDを返す。<br />
ただし z が 4 の場合、返り値は [\_drawShadow](Tilemap.md#_drawshadow-bitmap-shadowbits-dx-dy) の引数 shadowBits にあたる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | マップ x座標(タイル数) |
| `y` | [Number](Number.md) | マップ y座標(タイル数) |
| `z` | [Number](Number.md) |  0:Aタイル, 1:A2タイル右, 2〜3:B〜Eタイル, 4:影ペン, 5:リージョン |


#### _sortChildren ()
 子オブジェクトのソート。
 ソート条件は[\_compareChildOrder](#_comparechildorder-a-b)に記述。


####  _updateLayerPositions (startX, startY)
 レイヤーの位置をアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `startX` | [Number](Number.md) | 画面の左上 マップ x座標(タイル数) |
| `startY` | [Number](Number.md) | 画面の左上 マップ y座標(タイル数) |


####  _writeLastTiles (i, x, y, tiles)
 指定位置に最新のタイル情報を書き込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `i` | [Number](Number.md) |  レイヤー階層(0: 低層, 1: 高層) |
| `x` | [Number](Number.md) | マップ x座標(タイル数) |
| `y` | [Number](Number.md) | マップ y座標(タイル数) |
| `tiles` | [Array](Array.md).&lt;[Number](Number.md)&gt; | タイルIDの配列 |


#### initialize ()
 オブジェクト生成時の初期化。

#### isReady () → {Boolean}
 描画準備ができているか。
 

#### refresh ()
 タイルマップを更新。


#### refreshTileset ()
 タイルセットを更新。


#### setData (width, height, data)
 タイルマップのデータを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.md) |  マップの幅(タイル数) |
| `height` | [Number](Number.md) |  マップの高さ(タイル数) |
| `data` | [Array](Array.md) | 一次元配列によるマップのデータ(See: [Game_Map.data](Game_Map.md#data---arraynumber)) |


#### update ()
 フレーム毎のタイルマップのアップデート。


#### updateTransform ()
Overrides: [PIXI.Container](PIXI.Container.md#updatetransform-)


