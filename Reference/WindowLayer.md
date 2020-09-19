# Class: WindowLayer

## Extends: [PIXI.Container](PIXI.Container.md)

### new WindowLayer ()
[Scene_Base](Scene_Base.md) に含まれ [Window_Base](Window_Base.md) を children に持つレイヤー。

下にあるウィンドウをマスクするなど、ウィンドウの重なりの制御を行う。<br />
そのような制御がないなら [Scene_Base](Scene_Base.md) に直接ウィンドウが追加される。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `voidFilter` | [PIXI.filters.VoidFilter]() | [static] 空のフィルタ |
| `filterArea` | [Number](Number.md) | フィルタ領域 |
| `filters` | [Array](Array.md)&lt;[PIXI.Filter](http://pixijs.download/release/docs/PIXI.Filter.html)&gt; | フィルタ |
| `_width` | [Number](Number.md) | 幅(ピクセル) |
| `_height` | [Number](Number.md) | 高さ(ピクセル) |
| `_tempCanvas` | HTMLCanvasElement | 一時canvas |
| `_translationMatrix` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 9個の配列による平行移動行列 |
| `_windowMask` | [PIXI.Graphics](PIXI.Graphics.md) | ウィンドウマスク |
| `_windowRect` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | ウィンドウ矩形 |


### Inherited From

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
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
*  [updateTransform ()](PIXI.Container.md#updatetransform-)


### Methods

#### (static) _canvasClearWindowRect (renderSession, window)
ウィンドウの矩形範囲を消去。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderSession` | Object | レンダラ |
| `window` | [Window](Window.md) | ウィンドウ |


#### (static) _maskWindow (window)
ウィンドウをマスク。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `window` | [Window](Window.md) | ウィンドウ |


#### (static) _renderCanvas (renderSession)
canvas でレンダリング。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderSession` | Object | レンダラ |


#### (static) renderWebGL (renderSession)
WebGLでレンダリング。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderSession` | [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) | レンダラ |


#### initialize ()
オブジェクト生成時の初期化。


#### move (x, y, width, height)
指定座標と大きさに変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### onRemoveAsAChild ()
親から削除された時に呼ばれるハンドラ。


#### update ()
フレーム毎のアップデート。

