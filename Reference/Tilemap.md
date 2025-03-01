[クラスツリー](index.md)

# クラス: Tilemap

## スーパークラス: [PIXI.Container](PIXI.Container.md)

2Dベースのタイルマップを表示するためのコンテナクラス。 <br />
また、フキダシなどのエフェクト系のスプライトを管理するのにも使われる。

静的メソッドを多く持つユーティリティクラスでもある。

MZで新規にインナークラス [Tilemap.Layer](Tilemap.Layer.md) が導入されたのに伴い、draw系のメソッドは add系に書き換えられている。<br />
v1.5.0 ではタイルサイズの変更機能がついたため、大幅な変更が行われている。特に `tileWidth` `tileHeight` については注意が必要。

主なパス
```js
SceneManager._scene._spriteset._tilemap
SceneManager._scene._spriteset._effectsContainer
```

v1.5.0、v1.7.0 で変更あり。

関連クラス: [RPG.Map](RPG.Map.md), [RPG.Tileset](RPG.Tileset.md), [Game_Map](Game_Map.md), [Spriteset_Map](Spriteset_Map.md)

### new Tilemap ()

### インナークラス

* [Tilemap.Layer](Tilemap.Layer.md) **@MZ**
* [Tilemap.Renderer](Tilemap.Renderer.md) **@MZ**
* [Tilemap.CombinedLayer](Tilemap.CombinedLayer.md) **@MZ1.7.0**

### サブクラス
『RPGツクールMV』では描画モードが別れていたので以下のWebGL用クラスがあったが、『RPGツクールMZ』ではWebGLに一本化されたので廃止された。

* `ShaderTilemap` (廃止)


### プロパティ
TILE_ から始まる定数はタイルブロックの[タイルID](#タイルID)の開始番号。

| 識別子 | 型 | 説明 |
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
| `animationFrame` | [Number](Number.md) |  30 animationCount = 1 とした値 |
| `bitmaps` | [Array](Array.md).&lt;[Bitmap](Bitmap.md)&gt; | タイルセット画像の配列(0〜8)<br />(0:A1, 1:A2, 2:A3, 3:A4, 4:A5, 5:B, 6:C, 7:D, 8:E) |
| `origin` | [Point](Point.md) |  スクロールに対する基準点 |
| `flags` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  フラグ(参照:[RPG.Tileset](RPG.Tileset.md)) |
| `tileWidth` | [Number](Number.md) | **@MZ1.5.0** タイル幅(規定値:48 ピクセル) |
| `tileHeight` | [Number](Number.md) | **@MZ1.5.0** タイル高さ(規定値:48 ピクセル) |
| `width` | [Number](Number.md) | 画面幅(規定値:624 ピクセル) (参照:[Graphics.width](Graphics.md)) |
| `height` | [Number](Number.md) | 画面高さ(規定値:816 ピクセル) (参照:[Graphics.height](Graphics.md)) |
| `horizontalWrap` | Boolean | 横方向にループするか |
| `verticalWrap` | Boolean | 縦方向にループするか |
| `_tileWidth` | [Number](Number.md) | **@MZ1.5.0** で廃止  |
| `_tileHeight` | [Number](Number.md) | **@MZ1.5.0** で廃止  |
| `_width` | [Number](Number.md) | |
| `_height` | [Number](Number.md) | |
| `_margin` | [Number](Number.md) | マージン(規定値:20) |
| `_mapWidth` | [Number](Number.md) | マップ幅(タイル数) |
| `_mapHeight` | [Number](Number.md) | マップ高さ(タイル数) |
| `_mapData` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 1次元配列によるマップのデータ(参照: [RPG.Map.data](RPG.Map.md#マップデータ)) |
| `_bitmaps` | [Array](Array.md).&lt;[Bitmap](Bitmap.md)&gt; | タイルセット画像の配列 |
| `_upperLayer` | [Tilemap.CombinedLayer](Tilemap.CombinedLayer.md) | 高層[☆]タイル( z = 4 ) **@MZ1.6.0** までは[Tilemap.Layer](Tilemap.Layer.md) |
| `_lowerLayer` | [Tilemap.CombinedLayer](Tilemap.CombinedLayer.md) | 低層レイヤー( z = 0 ) **@MZ1.6.0** までは[Tilemap.Layer](Tilemap.Layer.md) |
| `_lastStartX` | [Number](Number.md) | 前回の開始 x座標 |
| `_lastStartY` | [Number](Number.md) | 前回の開始 y座標 |
| `_lastAnimationFrame` | [Number](Number.md) | 前回のアニメフレーム位置 |
| `_needsRepaint` | Boolean | 描画の必要があるか |

#### レイヤーの配置
children に含まれるレイヤーの種類と位置。<br />
エディタで指定する[レイヤー]は、0:低層タイルに描画されます。<br />
通行設定が[☆]の場合は、4:高層[☆]タイルです。

| z番号 | 型 | 説明 |
| --- | --- | --- |
| 9 | [Sprite_Destination](Sprite_Destination.md) | タッチ位置表示 |
| 8 | [Sprite_Animation](Sprite_Animation.md) | アニメーション |
| 7 | [Sprite_Balloon](Sprite_Balloon.md) | フキダシ |
| 6 | [Sprite_Character](Sprite_Character.md) | 飛行船の影 |
| 5 | [Sprite_Character](Sprite_Character.md) | 高層キャラ(立体交差用) |
| 4 | [Tilemap.CombinedLayer](Tilemap.CombinedLayer.md) | 高層[☆]タイル |
| 3 | [Sprite_Character](Sprite_Character.md) | 通常キャラ |
| 2 |  | 未使用 |
| 1 | [Sprite_Character](Sprite_Character.md) | 低層キャラ |
| 0 | [Tilemap.CombinedLayer](Tilemap.CombinedLayer.md) | 低層タイル |

#### タイルID
タイルの種類を表す値。<br />
以下の表のような割り当てで、isAutotile() などの各種 isXXX()メソッドを使って種類を判定できる。

| セット | 説明 |
| --- | --- |
| A1 | 海:0、深海:1、浅瀬障害:2,3、水面:4,6,8,10,12,14、滝:5,7,9,11,13,15 |
| A2 | 地面:16〜19,24〜27,32〜35,40〜43、重ねて配置用:20〜23,28〜31,36〜39,44〜47 |
| A3 | 屋根:48〜55,64〜71、壁:56〜63,72〜79 |
| A4 | 壁上：80〜87,96〜103,112〜119、壁:88〜95,104〜111,120〜127 |

### 廃止MVプロパティ
`upperZLayer`, `lowerZLayer`, `_upperBitmap`, `_lowerBitmap `, `_layerWidth `, `_layerHeight `,`_lastTiles `


### スーパークラスから継承されたメソッド

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


### メソッド

#### (static) getAutotileKind (tileId) → {[Number](Number.md)}
 オートタイルの種類を返す。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) getAutotileShape (tileId) → {[Number](Number.md)}
 オートタイルのシェイプを返す。
地面・床・壁上面:0〜47、屋根・壁:0〜15、滝:0〜3 の値

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isAutotile (tileId) → {Boolean}
 オートタイル(A1〜A4)か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isFloorTypeAutotile (tileId) → {Boolean}
 (48シェイプを持つ)地表面タイプのオートタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isGroundTile (tileId) → {Boolean}
 地表(A1,A2,A5)のタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isRoofTile (tileId) → {Boolean}
 屋根(A3奇数行)タイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isSameKindTile (tileID1, tileID2) → {Boolean}
 指定したタイルが(オートタイルのシェイプは問わないで)同じ種類か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileID1` | [Number](Number.md) | [タイルID](#タイルID) |
| `tileID2` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isShadowingTile (tileId) → {Boolean}
 設置した時に影が自動でつけられるタイル(A3 と A4)か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isTileA1 (tileId) → {Boolean}
A1(アニメーション)のタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isTileA2 (tileId) → {Boolean}
A2(地面)のタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isTileA3 (tileId) → {Boolean}
A3(建物)のタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isTileA4 (tileId) → {Boolean}
A4(壁)のタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isTileA5 (tileId) → {Boolean}
A5(通常)のタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isVisibleTile (tileId) → {Boolean}
 表示されるタイル(0〜TILE_ID_MAXに含まれる)か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isWallSideTile (tileId) → {Boolean}
 壁面タイル(A3偶数行 と A4偶数行)か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isWallTile (tileId) → {Boolean}
 壁タイル(A3偶数行 と A4)か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isWallTopTile (tileId) → {Boolean}
 壁上面タイル(A4奇数行)か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isWallTypeAutotile (tileId) → {Boolean}
 (16シェイプを持つ)壁タイプのタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isWaterfallTile (tileId) → {Boolean}
 滝のタイル(A1で偶数列2番目以降)か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isWaterfallTypeAutotile (tileId) → {Boolean}
 (4シェイプを持つ)滝タイプのオートタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) isWaterTile (tileId) → {Boolean}
 水面のタイル(浅瀬障害を除くA1)か。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### (static) makeAutotileId (kind, shape) → {[Number](Number.md)}
 指定したオートタイルの種類とシェイプからタイルIDを返す。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `kind` | [Number](Number.md) | 種類(参照: [getAutotileKind](#static-getautotilekind-tileid--number)) |
| `shape` | [Number](Number.md) | シェイプ(参照: [getAutotileShape](#static-getautotileshape-tileid--number)) |


#### _compareChildOrder (a, b)
[\_sortChildren](#_sortchildren-)用ソート条件のコールバック関数。<br />
childrenプロパティに含まれる子オブジェクトが、a, b に渡される。<br />
順番は渡されたオブジェクトの z, y, spriteIdプロパティによって評価される。<br />
z の内容は、[重なりの優先度](Sprite.md#重なりの優先度)を参照。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `a` | Object | z, y, spriteIdプロパティを持つオブジェクト |
| `b` | Object | z, y, spriteIdプロパティを持つオブジェクト |


#### _addAllSpots (startX, startY) 
**@MZ** 全スポットを追加。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `startX` | [Number](Number.md) | 開始 x座標(タイル数) |
| `startY` | [Number](Number.md) | 開始 y座標(タイル数) |


#### _addSpot (startX, startY, x, y) 
**@MZ** スポットを追加。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `startX` | [Number](Number.md) | 開始 x座標(タイル数) |
| `startY` | [Number](Number.md) | 開始 y座標(タイル数) |
| `x` | [Number](Number.md) | 開始位置からの相対 x座標(タイル数) |
| `y` | [Number](Number.md) | 開始位置からの相対 y座標(タイル数) |


#### _addSpotTile (tileId, dx, dy) 
**@MZ** スポットタイルをタイルIDによって(_upperLayer か _lowerLayer に)レイヤー分けして追加。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |
| `dx` | [Number](Number.md) | レイヤー内の x座標(ピクセル) |
| `dy` | [Number](Number.md) | レイヤー内の y座標(ピクセル) |


#### _addTile (layer, tileId, dx, dy) 
**@MZ** タイルレイヤーにタイルを追加。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `layer` | [Tilemap.Layer](Tilemap.Layer.md) | タイルレイヤー |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |
| `dx` | [Number](Number.md) | レイヤー内の x座標(ピクセル) |
| `dy` | [Number](Number.md) | レイヤー内の y座標(ピクセル) |


#### _addNormalTile (layer, tileId, dx, dy) 
**@MZ** タイルレイヤーに通常タイルを追加。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `layer` | [Tilemap.Layer](Tilemap.Layer.md) | タイルレイヤー |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |
| `dx` | [Number](Number.md) | レイヤー内の x座標(ピクセル) |
| `dy` | [Number](Number.md) | レイヤー内の y座標(ピクセル) |


#### _addAutotile (layer, tileId, dx, dy) 
**@MZ** タイルレイヤーにオートタイルを追加。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `layer` | [Tilemap.Layer](Tilemap.Layer.md) | タイルレイヤー |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |
| `dx` | [Number](Number.md) | レイヤー内の x座標(ピクセル) |
| `dy` | [Number](Number.md) | レイヤー内の y座標(ピクセル) |


#### _addTableEdge (layer, tileId, dx, dy) 
**@MZ** タイルレイヤーにテーブルの下端を追加。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `layer` | [Tilemap.Layer](Tilemap.Layer.md) | タイルレイヤー |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |
| `dx` | [Number](Number.md) | レイヤー内の x座標(ピクセル) |
| `dy` | [Number](Number.md) | レイヤー内の y座標(ピクセル) |


#### _addShadow (layer, shadowBits, dx, dy) 
**@MZ** タイルレイヤーに影ペンのデータを追加。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `layer` | [Tilemap.Layer](Tilemap.Layer.md) | タイルレイヤー |
| `shadowBits` | [Number](Number.md) | タイルを4分割したうちで描く位置を指定するビット（下位から左上/右上/左下/右下） |
| `dx` | [Number](Number.md) | レイヤー内の x座標(ピクセル) |
| `dy` | [Number](Number.md) | レイヤー内の y座標(ピクセル) |


#### _createLayers ()
 低層×4 + 高層×4 レイヤー(z: 0 〜 7)を生成。
 (参照: [レイヤーの配置](#レイヤーの配置))


#### _isHigherTile (tileId) → {Boolean}
 高層[☆]のタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


####  _isOverpassPosition (mx, my) → {Boolean}
立体交差か。<br />
標準では何の動作もしない空メソッドでプラグインによって機能を追加する。<br />
OverpassTile.js プラグインで使われている。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `mx` | [Number](Number.md) | マップ x座標(タイル数) |
| `my` | [Number](Number.md) | マップ y座標(タイル数) |


####  _isTableTile (tileId) → {Boolean}
 テーブルタイルか。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | [タイルID](#タイルID) |


#### _readMapData (x, y, z) → {[Number](Number.md)}
指定位置のタイルIDを返す。<br />
ただし z が 4 の場合、返り値は [\_drawShadow](#_drawshadow-bitmap-shadowbits-dx-dy) の引数 shadowBits にあたる。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | マップ x座標(タイル数) |
| `y` | [Number](Number.md) | マップ y座標(タイル数) |
| `z` | [Number](Number.md) |  0:Aタイル, 1:A2タイル右, 2〜3:B〜Eタイル, 4:影ペン, 5:リージョン |


#### _sortChildren ()
 子オブジェクトのソート。
 ソート条件は[\_compareChildOrder](#_comparechildorder-a-b)に記述。


#### _updateBitmaps()
**@MZ** ビットマップの更新。


#### destroy ()
**@MZ** オーバーライド: [PIXI.Container](PIXI.Container.md#destroy-)


#### initialize ()
 オブジェクト生成時の初期化。


#### isReady () → {Boolean}
 描画準備ができているか。
 

#### refresh ()
 タイルマップを更新。


#### setBitmaps (bitmaps)
**@MZ** タイルセット画像の設定。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bitmaps` | [Array](Array.md).&lt;[Bitmap](Bitmap.md)&gt; |  タイルセットのビットマップの配列 |


#### setData (width, height, data)
 タイルマップのデータを設定。

##### 引数:

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) |  マップの幅(タイル数) |
| `height` | [Number](Number.md) |  マップの高さ(タイル数) |
| `data` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 1次元配列によるマップのデータ(参照: [RPG.Map.data](RPG.Map.md#マップデータ)) |


#### update ()
 フレーム毎の更新。


#### updateTransform ()
オーバーライド: [PIXI.Container](PIXI.Container.md#updatetransform-)



### MV廃止メソッド
_drawAutotile (bitmap, tileId, dx, dy), _drawNormalTile (bitmap, tileId, dx, dy), _drawShadow (bitmap, shadowBits, dx, dy), _drawTableEdge (bitmap, tileId, dx, dy), _drawTile (bitmap, tileId, dx, dy), _paintAllTiles (startX, startY), _paintTiles (startX, startY, x, y), _readLastTiles (i, x, y), refreshTileset (), _updateLayerPositions (startX, startY), _writeLastTiles (i, x, y, tiles)
