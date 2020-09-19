# Class: Sprite_Battler

## Extends: [Sprite_Base](Sprite_Base.md)

### new Sprite_Battler (battler opt)
戦闘シーンで表示されるキャラ画像。

#### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) | &lt;optional&gt; | バトラー |


### Sub Classes

* [Sprite_Actor](Sprite_Actor.md)
* [Sprite_Enemy](Sprite_Enemy.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_battler` | [Game_Battler](Game_Battler.md) | バトラー |
| `_damages` | [Array](Array.md).&lt;[Sprite_Damage](Sprite_Damage.md)&gt; | ダメージポップアップ用 |
| `_homeX` | [Number](Number.md) | 基点の x座標 |
| `_homeY` | [Number](Number.md) | 基点の y座標 |
| `_offsetX` | [Number](Number.md) | xオフセット |
| `_offsetY` | [Number](Number.md) | yオフセット |
| `_targetOffsetX` | [Number](Number.md) | 対象の xオフセット |
| `_targetOffsetY` | [Number](Number.md) | 対象の yオフセット |
| `_movementDuration` | [Number](Number.md) | 移動の継続時間 |
| `_selectionEffectCount` | [Number](Number.md) | 選択エフェクトのカウント |


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


#### [PIXI.Sprite](PIXI.Sprite.md)

* [(static) from (source, options)](PIXI.Sprite.md#static-from-source-options--pixisprite)
* [\_calculateBounds ()](PIXI.Sprite.md#_calculatebounds-)
* [\_render (renderer)](PIXI.Sprite.md#_render-renderer)
* [calculateTrimmedVertices ()](PIXI.Sprite.md#calculatetrimmedvertices-)
* [calculateVertices ()](PIXI.Sprite.md#calculatevertices-)
* [containsPoint (point)](PIXI.Sprite.md#containspoint-point--boolean)
* [destroy (options)](PIXI.Sprite.md#destroy-options)
* [getLocalBounds (rect)](PIXI.Sprite.md#getlocalbounds-rect--pixirectangle)
* [renderCanvas (renderer)](PIXI.Sprite.md#rendercanvas-renderer)


#### [Sprite](Sprite.md)

* [\_createTinter (w, h)](Sprite.md#_createtinter-w-h)
* [\_executeTint (x, y, w, h)](Sprite.md#_executetint-x-y-w-h)
* [\_isInBitmapRect (x, y, w, h)](Sprite.md#_isinbitmaprect-x-y-w-h--boolean)
* [\_needsTint ()](Sprite.md#_needstint---boolean)
* [\_onBitmapLoad ()](Sprite.md#_onbitmapload-)
* [\_refresh ()](Sprite.md#_refresh-)
* [\_renderCanvas (renderer)](Sprite.md#_rendercanvas-renderer)
* [\_renderWebGL (renderer)](Sprite.md#_renderwebgl-renderer)
* [\_speedUpCustomBlendModes (renderer)](Sprite.md#_speedupcustomblendmodes-renderer)
* [getBlendColor ()](Sprite.md#getblendcolor---array)
* [getColorTone ()](Sprite.md#getcolortone---array)
* [move (x, y)](Sprite.md#Sprite.md#move-x-y)
* [setBlendColor (color)](Sprite.md#setblendcolor-color)
* [setColorTone (tone)](Sprite.md#setcolortone-tone)
* [setFrame (x, y, width, height)](Sprite.md#setframe-x-y-width-height)

#### [Sprite_Base](Sprite_Base.md)

* [hide ()](Sprite_Base.md#hide-)
* [isAnimationPlaying ()](Sprite_Base.md#isanimationplaying---boolean)
* [show ()](Sprite_Base.md#show-)
* [startAnimation (animation, mirror, delay)](Sprite_Base.md#startanimation-animation-mirror-delay)
* [updateAnimationSprites ()](Sprite_Base.md#updateanimationsprites-)


### Methods

#### damageOffsetX () → {[Number](Number.md)}
ダメージの xオフセットを返す。


#### damageOffsetY () → {[Number](Number.md)}
ダメージの yオフセットを返す。


#### inHomePosition () → {Boolean}
基点にいるか。


#### initialize ()
Overrides:[Sprite_Base](Sprite_Base.md#initialize-)


#### initMembers ()
メンバ変数を初期化。


#### isEffecting () → {Boolean}
効果が加わっているか(常にfalse)


#### isMoving () → {boolean}
移動中か。


#### onMoveEnd ()
移動が終わった時に呼ばれるハンドラ。


#### setBattler (battler)
バトラーを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) | バトラー |


#### setHome (x, y)
基点を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | 基点の x座標 |
| `y` | [Number](Number.md) | 基点の y座標 |


#### setupAnimation ()
アニメーションの準備。


#### setupDamagePopup ()
ダメージポップアップの準備。


#### startMove (x, y, duration)
指定座標へ移動開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | 対象 x座標 |
| `y` | [Number](Number.md) | 対象 y座標 |
| `duration` | [Number](Number.md) | 移動の継続時間 |


#### update ()
Overrides:[Sprite_Base](Sprite_Base.md#update-)


#### updateAnimation ()
アニメーションのアップデート。


#### updateBitmap ()
画像のアップデート。


#### updateDamagePopup ()
ダメージポップアップのアップデート。


#### updateFrame ()
フレームのアップデート。


#### updateMain ()
主要なアップデート。


#### updateMove ()
移動のアップデート。


#### updatePosition ()
位置のアップデート。


#### updateSelectionEffect ()
選択エフェクトのアップデート。


#### updateVisibility ()
Overrides:[Sprite_Base](Sprite_Base.md#updateVisibility-)



