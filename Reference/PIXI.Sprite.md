# Class: PIXI.Sprite

## Extends: [PIXI.Container](PIXI.Container.md)

### new PIXI.Sprite (texture)
描画のための基本オブジェクト。詳細は本家 PIXI のサイト [PIXI.Sprite](http://pixijs.download/release/docs/PIXI.Sprite.html) を参照。

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `texture` | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) |  スプライトに設定する画像 |


### Sub Classes

* [Sprite](Sprite.md) 


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `shader` | [PIXI.Filter](http://pixijs.download/release/docs/PIXI.Filter.html) \| [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html) | [static] シェーダ |
| `_cachedTint` | [Number](Number.md) | キャッシュされた色(規定値:0xFFFFFF) |
| `_tintedCanvas` | HTMLCanvasElement | 着色された canvas |
| `anchor` | [PIXI.ObservablePoint](http://pixijs.download/release/docs/PIXI.ObservablePoint.html) |座標の基点 (ex: 左上{0, 0} / 右下{1, 1} ) |
| `blendMode` | [Number](Number.md) | [合成方法]\(0: 通常, 1: 加算, 2: 乗算, 3: スクリーン)<br/>See:[PIXI.BLEND_MODES](PIXI.BLEND_MODES) |
| `isSprite` | Boolean | スプライトか |
| `pluginName` | [String](String.md) | プラグイン名(Default: 'batch') |
| `roundPixels` | Boolean | ピクセル補完するか |
| `texture` | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) | スプライトに設定された画像 |
| `tint` | [Number](Number.md) | 着色する色(規定値:0xFFFFFF の場合処理しない) |



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

* [\_renderCanvas (renderer)](PIXI.Container.md#_rendercanvas-renderer)
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
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)


### Methods

#### (static) from (source, options opt) → {PIXI.Sprite}
指定データを元に PIXI.Sprite を生成して返す。<br />
source には [Number](Number.md)(フレームID), [String](String.md)(画像・ビデオURL), [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html), HTMLCanvasElement, HTMLVideoElement が指定できる。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `source` | * | | 生成元となるデータ |
| `options` | Object | &lt;optional&gt; | [PIXI.BaseTexture](http://pixijs.download/release/docs/PIXI.BaseTexture.html) のコンストラクタの option と同じ形式 |


#### _calculateBounds ()
Overrides:[PIXI.Container](PIXI.Container.md#_calculatebounds-)
 
 
#### _render (renderer)
Overrides:[PIXI.Container](PIXI.Container.md#_render-renderer)
 
 
#### calculateTrimmedVertices ()
トリミングされた頂点データを計算。


#### calculateVertices ()
頂点データを計算。


#### containsPoint (point) → {Boolean}
指定座標が含まれるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `point` | [PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html) | 座標 |


#### destroy (options)
Overrides:[PIXI.Container](PIXI.Container.md#destroy-options)


#### getLocalBounds (rect) → {PIXI.Rectangle}
Overrides:[PIXI.DisplayObject](PIXI.DisplayObject.md#getlocalbounds-rect--pixirectangle)


#### renderCanvas (renderer)
Overrides:[PIXI.Container](PIXI.Container.md#rendercanvas-renderer)

