[クラスツリー](index.md)

# クラス: [Tilemap](Tilemap.md).Layer

## 継承元: [PIXI.Container](PIXI.Container.md)

### new Tilemap.Layer ()


関連クラス: [RPG.Map](RPG.Map.md), [RPG.Tileset](RPG.Tileset.md), [Game_Map](Game_Map.md), [Spriteset_Map](Spriteset_Map.md),
[Tilemap.Renderer](Tilemap.Renderer.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `MAX_GL_TEXTURES` | [Number](Number.md) | [static] 最大テクスチャ(3) |
| `VERTEX_STRIDE` | [Number](Number.md) | [static] 頂点ストライド(36) |
| `_elements` | [Array](Array.md).&lt;[MV.TileRect](MV.TileRect.md)&gt;  | タイル描画に使われる矩形データの配列 |
| `_images` | [Array](Array.md).&lt;[HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)&gt;  | 画像データの配列 |
| `_vao` | [PIXI.Geometry](http://pixijs.download/release/docs/PIXI.Geometry.html) | ジオメトリ |
| `_indexArray` | Float32Array | インデックスの配列 |
| `_indexBuffer` | [PIXI.Buffer](http://pixijs.download/release/docs/PIXI.Buffer.html) | インデックスのバッファ |
| `_vertexArray` | Float32Array | 頂点の配列 |
| `_vertexBuffer` | [PIXI.Buffer](http://pixijs.download/release/docs/PIXI.Buffer.html) | 頂点のバッファ |
| `_needsTexturesUpdate` | Boolean | テクスチャのアップデートが必要か |
| `_needsVertexUpdate` | Boolean | 頂点のアップデートが必要か |
| `_state` | [PIXI.State](http://pixijs.download/release/docs/PIXI.State.html) | 状態 |


### 継承されたメソッド

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
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)


### メソッド

### _createVao ()
VAOの生成。

### _updateIndexBuffer ()
バッファのアップデート。


### updateVertexBuffer ()
バッファのアップデート。


#### addRect (setNumber, sx, sy, dx, dy, w, h)
タイルセット中の矩形(タイル)範囲を設定。(参照: [MV.TileRect](MV.TileRect.md))

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `setNumber` | [Number](Number.md) | タイルセットの区分番号(0〜8)<br />A1:0, A2:1, A3:2, A4:3, A5:4, B:5,C:6, D:7, E:8 |
| `sx` | [Number](Number.md) |  タイルセット画像の x位置(ピクセル) |
| `sy` | [Number](Number.md) |  タイルセット画像の y位置(ピクセル) |
| `dx` | [Number](Number.md) | レイヤー内の x座標(ピクセル) |
| `dy` | [Number](Number.md) | レイヤー内の y座標(ピクセル) |
| `w` | [Number](Number.md) |  タイルの幅(ピクセル) |
| `h` | [Number](Number.md) |  タイルの高さ(ピクセル) |


#### destroy ()
Overrides: [PIXI.Container](PIXI.Container.md#destroy-)


#### initialize ()
Overrides: [PIXI.Container](PIXI.Container.md#initialize-)


#### isReady () → {Boolean}
準備ができているか。


#### render (renderer)
Overrides:  [PIXI.Container](PIXI.Container.md#render-renderer)


#### setBitmaps (bitmaps)
タイルセット画像の設定。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `bitmaps` | [Array](Array.md).&lt;[Bitmap](Bitmap.md)&gt; |  タイルセットのビットマップの配列 |


#### clear ()
画像の消去。