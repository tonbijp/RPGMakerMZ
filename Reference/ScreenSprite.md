# Class: ScreenSprite

## Extends: [PIXI.Container](PIXI.Container.md)

#### new ScreenSprite ()
 画面全体を覆うフェードなどのエフェクト用スプライト。

関連クラス: [Spriteset_Base](Spriteset_Base.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `YEPWarned` | Boolean | [static] YEP_CoreEngine の警告が必要か |
| `opacity` | [Number](Number.md) |  不透明度 (0〜255) |
| `anchor` | [Point](Point.md) | 基点 |
| `blendMode` | [Number](Number.md) | [[合成方法]](Sprite.md#合成方法) |
| `_graphics` | [PIXI.Graphics](PIXI.Graphics.md) |  画像管理オブジェクト |
| `_red` | [Number](Number.md) |  赤 (0〜255) |
| `_green` | [Number](Number.md) |  緑 (0〜255) |
| `_blue` | [Number](Number.md) |  青 (0〜255) |
| `_colorText` | [String](String.md) |  色文字列(例: 'red') |


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

* [\_renderCanvas (renderer)](PIXI.Container.md#_rendercanvas-renderer)
* [\_calculateBounds ()](PIXI.Container.md#_calculatebounds-)
* [\_render (renderer)](PIXI.Container.md#_render-renderer)
* [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
* [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
* [calculateBounds ()](PIXI.Container.md#calculatebounds-)
* [destroy (options)](PIXI.Container.md#destroy-options)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)

### Methods

#### (static) warnYep ()
必要なら YEP_CoreEngine の警告。


#### initialize ()
 オブジェクト生成時の初期化。


#### setBlack ()
黒に設定。


#### setColor (r, g, b)
指定した色に設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤(0〜255) |
| `g` | [Number](Number.md) | 緑(0〜255) |
| `b` | [Number](Number.md) | 青(0〜255) |


#### setWhite ()
白に設定。

