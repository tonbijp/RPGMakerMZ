[クラスツリー](index.md)

# クラス: Sprite_Actor

## スーパークラス: [Sprite_Battler](Sprite_Battler.md)


| データベース| JSONデータ | オブジェクト |
| --- | --- | --- |
| [敵キャラ] | [RPG.Actor](RPG.Actor.md) |  [Game_Actor](Game_Actor.md) |

サイドビューのアクター表示用のスプライト。

V1.2.1で変更あり。

関連クラス: [Spriteset_Battle](Spriteset_Battle.md)

### new Sprite_Actor (actor opt)
#### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | &lt;optional&gt; | アクターオブジェクト |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `MOTIONS` | Object | [static] [MOTIONS](Sprite_Actor.md#motions)に詳細 |
| `_battlerName` | [String](String.md) | SVの画像ファイル名(拡張子を含まない) |
| `_motion` | [MV.Motion](MV.Motion.md) | 現在のモーション |
| `_motionCount` | [Number](Number.md) | モーションのカウンタ |
| `_pattern` | [Number](Number.md) | モーションのパターン |
| `_mainSprite` | [Sprite](Sprite.md) | 本体のスプライト |
| `_shadowSprite` | [Sprite](Sprite.md) | 影のスプライト |
| `_weaponSprite` | [Sprite_Weapon](Sprite_Weapon.md) | 武器のスプライト |
| `_stateSprite` | [Sprite_StateOverlay](Sprite_StateOverlay.md) | ステートのスプライト |
| `_actor` | [Game_Actor](Game_Actor.md) | 生成元のアクター |

###### MOTIONS
サイドビュー時のモーション指定用の定数。<br />
例えば <code>Sprite_Actor.MOTIONS.walk</code> といった形で使用する。

| 識別子 | 型 | 説明 |
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

#### [Sprite_Clickable](Sprite_Clickable.md)

* [hitTest (x, y)](Sprite_Clickable.md#hittest-x-y--boolean)
* [isBeingTouched ()](Sprite_Clickable.md#isbeingtouched---boolean)
* [isClickEnabled ()](Sprite_Clickable.md#isclickenabled---boolean)
* [isPressed ()](Sprite_Clickable.md#ispressed---boolean)
* [onMouseExit ()](Sprite_Clickable.md#onmouseexit-)
* [processTouch ()](Sprite_Clickable.md#processtouch-)

####  [Sprite_Battler](Sprite_Battler.md)

* [checkBattler (battler)](Sprite_Battler.md#checkbattler-battler--boolean)
* [createDamageSprite ()](Sprite_Battler.md#createdamagesprite-)
* [destroyDamageSprite ()](Sprite_Battler.md#destroydamagesprite-)
* [inHomePosition ()](Sprite_Battler.md#inhomeposition---boolean)
* [isEffecting ()](Sprite_Battler.md#iseffecting---boolean)
* [isMoving ()](Sprite_Battler.md#ismoving---boolean)
* [onClick ()](Sprite_Battler.md#onclick-)
* [onMouseEnter ()](Sprite_Battler.md#onmouseenter-)
* [onPress ()](Sprite_Battler.md#onpress-)
* [setHome (x, y)](Sprite_Battler.md#sethome-x-y)
* [setupDamagePopup ()](Sprite_Battler.md#setupdamagepopup-)
* [startMove (x, y, duration)](Sprite_Battler.md#startmove-x-y-duration)
* [updateDamagePopup ()](Sprite_Battler.md#updatedamagepopup-)
* [updatePosition ()](Sprite_Battler.md#updateposition-)
* [updateSelectionEffect ()](Sprite_Battler.md#updateselectioneffect-)
* [updateVisibility ()](Sprite_Battler.md#updatevisibility-)


### メソッド

#### createMainSprite ()
本体のスプライトを生成。


#### createShadowSprite ()
影のスプライトを生成。


#### createStateSprite ()
ステートのスプライトを生成。


#### createWeaponSprite ()
武器のスプライトを生成。


#### damageOffsetX () → {[Number](Number.md)}
オーバーライド: [Sprite_Battler](Sprite_Battler.md#damageoffsetx)


#### damageOffsetY () → {[Number](Number.md)}
オーバーライド: [Sprite_Battler](Sprite_Battler.md#damageoffsety)


#### initialize (battler opt)
オーバーライド: [Sprite_Battler](Sprite_Battler.md#initialize-)

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `battler` | [Game_Actor](Game_Actor.md) | &lt;optional&gt; | バトラー |


#### initMembers ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#initmembers-)


#### mainSprite () → {[Sprite](Sprite.md)}
**@MZ** オーバーライド: [Sprite_Battler](Sprite_Battler.md#mainsprite---sprite_battler)


#### motionSpeed () → {[Number](Number.md)}
モーションの速度を返す。


#### moveToStartPosition ()
開始点に移動。


#### onMoveEnd ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#onmoveend-)


#### refreshMotion ()
モーションを再設定。


#### retreat ()
モーションの再開。


#### setActorHome (index)
指定隊列番号から基点を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 隊列番号 |


#### setBattler (battler)
オーバーライド: [Sprite_Battler](Sprite_Battler.md#setbattler-battler)


#### setupMotion ()
モーションの準備。


#### setupWeaponAnimation ()
武器アニメの準備。


#### shouldStepForward () → {Boolean}
**@MZ** 前に移動する必要があるか。


#### startEntryMotion ()
入場モーションの準備。


#### startMotion (motionType)
指定モーションを開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `motionType` | [String](String.md) | モーションタイプ([MOTIONS](Sprite_Actor.md#motions)のNameを文字列指定) |


#### stepBack ()
後退しているか。


#### stepForward ()
前進しているか。


#### update ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#update-)


#### updateBitmap ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#updateBitmap-)


#### updateFrame ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#updateFrame-)


#### updateMain ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#updateMain-)


#### updateMotion ()
モーションの更新。


#### updateMotionCount ()
モーションカウントの更新。


#### updateMove ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#updateMove-)


#### updateShadow ()
影の更新。


#### updateTargetPosition ()
目標位置の更新。


