[クラスツリー](index.md)

# クラス: [Tilemap](Tilemap.md).Layer

## スーパークラス: [PIXI.Container](PIXI.Container.md)

マップで扱われるタイルの下層(通行判定○・×)と上層(通行判定☆)を表示するクラス。
1.7.0からは、[Tilemap.CombinedLayer](Tilemap.CombinedLayer.md) に含まれる形に変わった。

主なパス
```js
SceneManager._scene._spriteset._tilemap._upperLayer
SceneManager._scene._spriteset._tilemap._lowerLayer
```
1.7.0からは
```js
SceneManager._scene._spriteset._tilemap._upperLayer.childlen[n]
SceneManager._scene._spriteset._tilemap._lowerLayer.childlen[n]
```

関連クラス: [RPG.Map](RPG.Map.md), [RPG.Tileset](RPG.Tileset.md), [Game_Map](Game_Map.md), [Spriteset_Map](Spriteset_Map.md),
[Tilemap.Renderer](Tilemap.Renderer.md)

### new Tilemap.Layer ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `MAX_GL_TEXTURES` | [Number](Number.md) | [static] 最大テクスチャ(規定値: 3) |
| `VERTEX_STRIDE` | [Number](Number.md) | [static] 頂点ストライド(規定値: 36) |
| `MAX_SIZE` | [Number](Number.md) | **@MZ1.7.0** [static] 最大要素数(規定値: 16000) |
| `_elements` | [Array](Array.md).&lt;[MV.TileRect](MV.TileRect.md)&gt;  | タイル描画に使われる矩形データの配列 |
| `_images` | [Array](Array.md).&lt;[HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)&gt;  | 画像データの配列 |
| `_vao` | [PIXI.Geometry](http://pixijs.download/v5.3.12/docs/PIXI.Geometry.html) | VAO(頂点配列オブジェクト:Vertex Array Object) |
| `_indexArray` | Float32Array | インデックスの配列 |
| `_indexBuffer` | [PIXI.Buffer](http://pixijs.download/v5.3.12/docs/PIXI.Buffer.html) | インデックスのバッファ |
| `_vertexArray` | Float32Array | `_elements`を一次元化した配列 |
| `_vertexBuffer` | [PIXI.Buffer](http://pixijs.download/v5.3.12/docs/PIXI.Buffer.html) | 頂点のバッファ |
| `_needsTexturesUpdate` | Boolean | テクスチャの更新が必要か |
| `_needsVertexUpdate` | Boolean | 頂点の更新が必要か |
| `_state` | [PIXI.State](http://pixijs.download/v5.3.12/docs/PIXI.State.html) | 状態 |
| `z` | [Number](Number.md) | z番号 (参照: [レイヤーの配置](Tilemap.md#レイヤーの配置))|


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
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)


### メソッド

### _createVao ()
VAO(頂点配列オブジェクト:Vertex Array Object)の生成。


### _updateIndexBuffer ()
インデックスバッファの更新。


### _updateVertexBuffer ()
頂点バッファの更新。


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
オーバーライド: [PIXI.Container](PIXI.Container.md#destroy-)


#### initialize ()
オーバーライド: [PIXI.Container](PIXI.Container.md#initialize-)


#### isReady () → {Boolean}
準備ができているか。


#### render (renderer)
オーバーライド:  [PIXI.Container](PIXI.Container.md#render-renderer)


#### setBitmaps (bitmaps)
タイルセット画像の設定。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `bitmaps` | [Array](Array.md).&lt;[Bitmap](Bitmap.md)&gt; |  タイルセットのビットマップの配列 |


#### size ()→ {[Number](Number.md)}
**@MZ1.7.0** 含まれる要素(`_elements`)数を返す。

#### clear ()
画像の消去。
