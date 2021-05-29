[クラスツリー](index.md)

# クラス: PIXI.Container

## スーパークラス: [PIXI.DisplayObject](PIXI.DisplayObject.md)

描画オブジェクトを含むコンテナ。

詳細は本家 PixiJS のサイト [PIXI.Container](http://pixijs.download/release/docs/PIXI.Container.html) を参照。

### new PIXI.Container ()

### サブクラス

* [PIXI.Sprite](PIXI.Sprite.md) 
* [PIXI.Graphics](PIXI.Graphics.md)
* [PIXI.tilemap.CompositeRectTileLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/CompositeRectTileLayer.ts)
* [PIXI.tilemap.RectTileLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/RectTileLayer.ts)
* [PIXI.tilemap.ZLayer](https://github.com/pixijs/pixi-tilemap/blob/master/src/ZLayer.ts)
* [ScreenSprite](ScreenSprite.md)
* [ToneSprite](ToneSprite.md)
* [Weather](Weather.md)
* [WindowLayer](WindowLayer.md)
* [Tilemap](Tilemap.md)
* [Stage](Stage.md)
* [Window](Window.md)


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `children` | [Array](Array.md).&lt;[PIXI.DisplayObject](PIXI.DisplayObject.md)&gt; | [read-only]子オブジェクト |
| `width` | [Number](Number.md) | 拡大縮小前の画像の幅(ピクセル) |
| `height` | [Number](Number.md) | 拡大縮小前の画像の高さ(ピクセル) |
| `sortableChildren` | Boolean |  子が(zIndexで)ソート可能か |
| `sortDirty` | Boolean |  次回アップデート時ソートされるか |


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


### メソッド

#### _calculateBounds ()
矩形範囲の再計算。


#### _render (renderer)
描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### _renderCanvas (renderer)
canvas の描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### addChild (child) → {PIXI.DisplayObject}
子オブジェクトを追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 追加するオブジェクト |


#### addChildAt (child, index) → {PIXI.DisplayObject}
子オブジェクトを追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 追加するオブジェクト |
| `index` | [Number](Number.md) | 追加位置 |


#### calculateBounds ()
矩形範囲の再計算。


#### destroy (options)
オーバーライド: [PIXI.DisplayObject](PIXI.DisplayObject.md#destroy-)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `options ` | Object \| Boolean | opt. 以下のオプション全てに同じ値が設定される |

options に Object として指定する内容

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | Boolean | false | opt. 子も破棄するか|
| `texture` | Boolean | false | opt. children と texture が true だと子のテクスチャを破棄する |
| `baseTexture` | Boolean | false | opt. children と baseTexture が true だと子のベーステクスチャを破棄する |


#### getChildAt (index) → {PIXI.DisplayObject}
指定番号の子オブジェクトを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 子オブジェクトの番号 |


#### getChildByName (name) → {PIXI.DisplayObject}
指定番号の子オブジェクトを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | 子オブジェクトの名前 |


#### getChildIndex (child) → {PIXI.DisplayObject}
子オブジェクトの番号を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `child ` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |


#### onChildrenChange () 
子オブジェクトが変更された時のハンドラ。


#### removeChild (child) → {PIXI.DisplayObject}
子オブジェクトを削除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `child ` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |


#### removeChildAt (index) → {PIXI.DisplayObject}
指定番号の子オブジェクトを削除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 子オブジェクトの番号 |


#### removeChildren (beginIndex, endIndex) → {Array.&lt;PIXI.DisplayObject&gt;}
指定番号範囲の子オブジェクトを削除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `beginIndex ` | [Number](Number.md) | 子オブジェクトの開始番号 |
| `endIndex ` | [Number](Number.md) | 子オブジェクトの終了番号 |


#### render (renderer)
オーバーライド: [PIXI.DisplayObject](PIXI.DisplayObject.md#render-renderer)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### renderAdvanced (renderer)
WebGL を使った描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### renderCanvas (renderer)
canvas の描画

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.CanvasRenderer](http://pixijs.download/release/docs/PIXI.CanvasRenderer.html) | レンダラ |


#### setChildIndex (child, index)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `child ` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |
| `index` | [Number](Number.md) | 子オブジェクトの番号 |


#### sortChildren ()
子オブジェクトを zIndex に従ってソート。


#### swapChildren (child, child2)
子オブジェクトの位置(番号)を入れ替える。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `child ` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |
| `child2` | [PIXI.DisplayObject](PIXI.DisplayObject.md) | 子オブジェクト |


#### updateTransform ()
オーバーライド: [PIXI.DisplayObject](PIXI.DisplayObject.md#updateTransform-)





