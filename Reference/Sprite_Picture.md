[クラスツリー](index.md)

# クラス: Sprite_Picture

## スーパークラス: [Sprite_Clickable](Sprite_Clickable.md)


| データ | オブジェクト |
| --- | --- |
| [ピクチャ] | [Game_Picture](Game_Picture.md) |

[ピクチャ]\( img/pictures/ フォルダの画像 )の表示用スプライト。

MVでは [Sprite](Sprite.md) のサブクラスだったが、MZでは  [Sprite_Clickable](Sprite_Clickable.md) を継承している。

関連クラス:  [Spriteset_Base](Spriteset_Base.md), [Game_Screen](Game_Screen.md)

### new Sprite_Picture (pictureId)
#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID( [Game_Screen](Game_Screen.md) の _pictures 配列番号 ) |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_pictureId` | [Number](Number.md) | ピクチャID |
| `_pictureName` | [String](String.md) | 名前 |

### 廃止MVプロパティ
`_isPicture` 


### スーパークラスから継承されたメソッド

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
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [_renderCanvas (renderer)](PIXI.Container.md#_rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [PIXI.Sprite](PIXI.Sprite.md)

* [(static) from (source, options)](PIXI.Sprite.md#static-from-source-options--pixisprite)
* [\_calculateBounds ()](PIXI.Sprite.md#_calculatebounds-)
* [\_render (renderer)](PIXI.Sprite.md#_render-renderer)
* [calculateTrimmedVertices ()](PIXI.Sprite.md#calculatetrimmedvertices-)
* [calculateVertices ()](PIXI.Sprite.md#calculatevertices-)
* [containsPoint (point)](PIXI.Sprite.md#containspoint-point--boolean)
* [getLocalBounds (rect)](PIXI.Sprite.md#getlocalbounds-rect--pixirectangle)
* [renderCanvas (renderer)](PIXI.Sprite.md#rendercanvas-renderer)

#### [Sprite](Sprite.md)

* [destroy ()](Sprite.md#destroy-)
* [getBlendColor ()](Sprite.md#getblendcolor---mvcolor)
* [getColorTone ()](Sprite.md#getcolortone---mvcolor)
* [hide ()](Sprite.md#hide-)
* [move (x, y)](Sprite.md#Sprite.md#move-x-y)
* [setBlendColor (color)](Sprite.md#setblendcolor-color)
* [setColorTone (tone)](Sprite.md#setcolortone-tone)
* [setFrame (x, y, width, height)](Sprite.md#setframe-x-y-width-height)
* [setHue (hue)](Sprite.md#sethue-hue)
* [show ()](Sprite.md#show-)
* [updateVisibility ()](Sprite.md#updatevisibility-)

#### [Sprite_Clickable](Sprite_Clickable.md)

* [hitTest (x, y)](Sprite_Clickable.md#hittest-x-y--boolean)
* [isBeingTouched ()](Sprite_Clickable.md#isbeingtouched---boolean)
* [isClickEnabled ()](Sprite_Clickable.md#isclickenabled---boolean)
* [isPressed ()](Sprite_Clickable.md#ispressed---boolean)
* [onClick ()](Sprite_Clickable.md#onclick-)
* [onMouseEnter ()](Sprite_Clickable.md#onmouseenter-)
* [onMouseExit ()](Sprite_Clickable.md#onmouseexit-)
* [onPress ()](Sprite_Clickable.md#onpress-)
* [processTouch ()](Sprite_Clickable.md#processtouch-)


### メソッド

#### initialize (pictureId)
オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#initialize-)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID |


#### loadBitmap ()
画像を読み込む。


#### picture () → {[Game_Picture](Game_Picture.md)}
ピクチャオブジェクトを返す。


#### update ()
オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#update-)


#### updateBitmap ()
画像の更新。


#### updateOrigin ()
原点の更新。


#### updateOther ()
その他の更新。


#### updatePosition ()
位置の更新。


#### updateScale ()
拡大率の更新。


#### updateTone ()
[色調]の更新。

