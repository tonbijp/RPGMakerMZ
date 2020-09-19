# Class: Sprite_Actor

## Extends: [Sprite_Battler](Sprite_Battler.md)

### new Sprite_Actor (actor opt)

| データベース| JSONデータ | オブジェクト |
| --- | --- | --- |
| [敵キャラ] | [RPG.Actor](RPG.Actor.md) |  [Game_Actor](Game_Actor.md) |

サイドビューのアクター表示用のスプライト。

関連クラス: [Spriteset_Battle](Spriteset_Battle.md)

#### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | &lt;optional&gt; | アクターオブジェクト |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `MOTIONS` | Object | [static] [MOTIONS](Sprite_Actor.md#motions)に詳細 |
| `_battlerName` | [String](String.md) | SVの画像ファイル名(拡張子を含まない)
| `_motion` | [MV.Motion](MV.Motion.md) | 現在のモーション |
| `_motionCount` | [Number](Number.md) | モーションのカウンタ |
| `_pattern` | [Number](Number.md) | モーションのパターン |
| `_mainSprite` | [Sprite_Base](Sprite_Base.md) | 本体のスプライト |
| `_shadowSprite` | [Sprite](Sprite.md) | 影のスプライト |
| `_weaponSprite` | [Sprite_Weapon](Sprite_Weapon.md) | 武器のスプライト |
| `_stateSprite` | [Sprite_StateOverlay](Sprite_StateOverlay.md) | ステートのスプライト |
| `_actor` | [Game_Actor](Game_Actor.md) | 生成元のアクター |

###### MOTIONS
サイドビュー時のモーション指定用の定数。<br />
例えば <code>Sprite_Actor.MOTIONS.walk</code> といった形で使用する。

| Name | Type | Description |
| --- | --- | --- |
| walk | [MV.Motion](MV.Motion.md) | 歩く |
| wait | [MV.Motion](MV.Motion.md) | 待機 |
| chant | [MV.Motion](MV.Motion.md) | 詠唱 |
| guard | [MV.Motion](MV.Motion.md) | 防御 |
| damage | [MV.Motion](MV.Motion.md) | ダメージ |
| evade | [MV.Motion](MV.Motion.md) | 回避 |
| thrust | [MV.Motion](MV.Motion.md) | 突き |
| swing | [MV.Motion](MV.Motion.md) | 振り |
| missile | [MV.Motion](MV.Motion.md) | 飛び道具 |
| skill | [MV.Motion](MV.Motion.md) | スキル |
| spell | [MV.Motion](MV.Motion.md) | 魔法 |
| item | [MV.Motion](MV.Motion.md) | アイテム |
| escape | [MV.Motion](MV.Motion.md) | 逃走 |
| victory | [MV.Motion](MV.Motion.md) | 勝利 |
| dying | [MV.Motion](MV.Motion.md)| 瀕死 |
| abnormal | [MV.Motion](MV.Motion.md) | 状態異常 |
| sleep | [MV.Motion](MV.Motion.md) | 睡眠 |
| dead | [MV.Motion](MV.Motion.md) | 死亡 |


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
* [isEffecting ()](Sprite_Battler.md#iseffecting---boolean)
* [isMoving ()](Sprite_Battler.md#ismoving---boolean)
* [setHome (x, y)](Sprite_Battler.md#sethome-x-y)
* [setupAnimation ()](Sprite_Battler.md#setupanimation-)
* [setupDamagePopup ()](Sprite_Battler.md#setupdamagepopup-)
* [startMove (x, y, duration)](Sprite_Battler.md#startmove-x-y-duration)
* [updateAnimation ()](Sprite_Battler.md#updateanimation-)
* [updateDamagePopup ()](Sprite_Battler.md#updatedamagepopup-)
* [updateMove ()](Sprite_Battler.md#updatemove-)
* [updatePosition ()](Sprite_Battler.md#updateposition-)
* [updateSelectionEffect ()](Sprite_Battler.md#updateselectioneffect-)
* [updateVisibility ()](Sprite_Battler.md#updatevisibility-)


### Methods

#### createMainSprite ()
本体のスプライトを生成。


#### createShadowSprite ()
影のスプライトを生成。


#### createStateSprite ()
ステートのスプライトを生成。


#### createWeaponSprite ()
武器のスプライトを生成。


#### damageOffsetX () → {[Number](Number.md)}
Overrides:[Sprite_Battler](Sprite_Battler.md#damageoffsetx)


#### damageOffsetY () → {[Number](Number.md)}
Overrides:[Sprite_Battler](Sprite_Battler.md#damageoffsety)</a>


#### initialize (battler opt)
Overrides:[Sprite_Battler](Sprite_Battler.md#initialize-)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `battler` | [Game_Actor](Game_Actor.md) | &lt;optional&gt; | バトラー |


#### initMembers ()
Overrides:[Sprite_Battler](Sprite_Battler.md#initmembers-)


#### motionSpeed () → {[Number](Number.md)}
モーションの速度を返す。


#### moveToStartPosition ()
開始点に移動。


#### onMoveEnd ()
Overrides:[Sprite_Battler](Sprite_Battler.md#onmoveend-)


#### refreshMotion ()
モーションを再設定。


#### retreat ()
モーションの再開。


#### setActorHome (index)
指定隊列番号から基点を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 隊列番号 |


#### setBattler (battler)
Overrides:[Sprite_Battler](Sprite_Battler.md#setbattler-)


#### setupMotion ()
モーションの準備。


#### setupWeaponAnimation ()
武器アニメの準備。


#### startEntryMotion ()
入場モーションの準備。


#### startMotion (motionType)
指定モーションを開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `motionType` | [String](String.md) | モーションタイプ([MOTIONS](Sprite_Actor.md#motions)のNameを文字列指定) |


#### stepBack ()
後退しているか。


#### stepForward ()
前進しているか。


#### update ()
Overrides:[Sprite_Battler](Sprite_Battler.md#update-)


#### updateBitmap ()
Overrides:[Sprite_Battler](Sprite_Battler.md#updateBitmap-)


#### updateFrame ()
Overrides:[Sprite_Battler](Sprite_Battler.md#updateFrame-)


#### updateMain ()
Overrides:[Sprite_Battler](Sprite_Battler.md#updateMain-)


#### updateMotion ()
モーションのアップデート。


#### updateMotionCount ()
モーションカウントのアップデート。


#### updateMove ()
Overrides:[Sprite_Battler](Sprite_Battler.md#updateMove-)


#### updateShadow ()
影のアップデート。


#### updateTargetPosition ()
目標位置のアップデート。


