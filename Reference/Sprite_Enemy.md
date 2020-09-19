# Class: Sprite_Enemy

##  Extends: [Sprite_Battler](Sprite_Battler.md)

### new Sprite_Enemy (enemy opt)

| データベース| JSONデータ | オブジェクト |
| --- | --- | --- |
| [敵キャラ] | [RPG.Enemy](RPG.Enemy.md) | [Game_Enemy](Game_Enemy.md) |

[敵キャラ]表示用のスプライトクラス

関連クラス: [Spriteset_Battle](Spriteset_Battle.md), [Game_Troop](Game_Troop.md)

#### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `enemy` | [Game_Enemy](Game_Enemy.md) | &lt;optional&gt; | [敵キャラ] |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_enemy` | [Game_Enemy](Game_Enemy.md) | [敵キャラ]のデータ |
| `_appeared` | Boolean | 出現しているか |
| `_battlerName` | [String](String.md) | 画像ファイル名(拡張子を除く) |
| `_battlerHue` | [Number](Number.md) | 色相(0〜360) |
| `_effectType` | [String](String.md) | エフェクトタイプ  |
| `_effectDuration` | [Number](Number.md) | エフェクト継続時間 |
| `_shake` | [Number](Number.md) | 揺れているか |
| `_stateIconSprite` | [Sprite_StateIcon](Sprite_StateIcon.md) | ステートアイコン |


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

####  [Sprite_Battler](Sprite_Battler.md)

* [inHomePosition () ](Sprite_Battler.md#inhomeposition---boolean)
* [isMoving ()](Sprite_Battler.md#ismoving---boolean)
* [onMoveEnd ()](Sprite_Battler.md#onmoveend-)
* [setHome (x, y)](Sprite_Battler.md#sethome-x-y)
* [setupAnimation ()](Sprite_Battler.md#setupanimation-)
* [setupDamagePopup ()](Sprite_Battler.md#setupdamagepopup-)
* [startMove (x, y, duration)](Sprite_Battler.md#startmove-x-y-duration)
* [updateAnimation ()](Sprite_Battler.md#updateanimation-)
* [updateDamagePopup ()](Sprite_Battler.md#updatedamagepopup-)
* [updateMain ()](Sprite_Battler.md#updatemain-)
* [updateMove ()](Sprite_Battler.md#updatemove-)
* [updateSelectionEffect ()](Sprite_Battler.md#updateselectioneffect-)
* [updateVisibility ()](Sprite_Battler.md#updatevisibility-)

### Methods


#### createStateIconSprite ()

#### damageOffsetX () → {[Number](Number.md)}
Overrides:[Sprite_Battler](Sprite_Battler.md#damageoffsetx---number)

#### damageOffsetY () → {[Number](Number.md)}
Overrides:[Sprite_Battler](Sprite_Battler.md#damageoffsety---number)

#### initialize (battler)
Overrides:[Sprite_Battler](Sprite_Battler.md#initialize-)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Enemy](Game_Enemy.md) |  |


#### initMembers ()
Overrides:[Sprite_Battler](Sprite_Battler.md#initmembers-)


#### initVisibility ()
表示状態を初期化。


#### isEffecting () → {Boolean}
Overrides:[Sprite_Battler](Sprite_Battler.md#iseffecting---boolean)


#### loadBitmap (name, hue)
指定したビットマップ画像を読み込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | ファイル名(拡張子を含まない) |
| `hue` | [Number](Number.md) | 色相(0〜360) |


#### revertToNormal ()
状態を通常に戻す。


#### setBattler (battler)
Overrides:[Sprite_Battler](Sprite_Battler.md#setbattler-battler)


#### setupEffect ()
エフェクトの準備。


#### startAppear ()
出現の開始。


#### startBlink ()
点滅の開始。


#### startBossCollapse ()
[消滅エフェクト - ボス]開始。


#### startCollapse ()
[消滅エフェクト - 通常]開始。


#### startDisappear ()
消滅の開始。


#### startEffect (effectType)
指定したエフェクトの開始。

エフェクトタイプは 'appear', 'disappear', 'whiten', 'blink', 'collapse':, 'bossCollapse', 'instantCollapse'

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `effectType` | [String](String.md) | エフェクトタイプ |


#### startInstantCollapse ()
[消滅エフェクト - 瞬間消去]開始。


#### startWhiten ()
白く変化開始。


#### update ()
Overrides:[Sprite_Battler](Sprite_Battler.md#update-)


#### updateAppear ()
出現エフェクトをアップデート。


#### updateBitmap ()
Overrides:[Sprite_Battler](Sprite_Battler.md#updatebitmap-)


#### updateBlink ()
点滅をアップデート。


#### updateBossCollapse ()
[消滅エフェクト - ボス]をアップデート。


#### updateCollapse ()
[消滅エフェクト - 通常]をアップデート。


#### updateDisappear ()
消滅エフェクトをアップデート。


#### updateEffect ()
エフェクトをアップデート。


#### updateFrame ()
Overrides:[Sprite_Battler](Sprite_Battler.md#updateframe-)


#### updateInstantCollapse ()
[消滅エフェクト - 瞬間消去]をアップデート。


#### updatePosition ()
Overrides:[updatePosition ()](Sprite_Battler.md#updateposition-)


#### updateStateSprite ()
ステートスプライトをアップデート。


#### updateWhiten ()
白エフェクトをアップデート。


