[クラスツリー](index.md)

# クラス: Sprite_Battler

## スーパークラス: [Sprite_Clickable](Sprite_Clickable.md)

戦闘シーンで表示されるキャラ画像。

MV で継承元(スーパークラス)だった Sprite_Base から [Sprite_Clickable](Sprite_Clickable.md) に変更されている。

### new Sprite_Battler (battler opt)
#### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) | &lt;optional&gt; | バトラー |


### サブクラス

* [Sprite_Actor](Sprite_Actor.md)
* [Sprite_Enemy](Sprite_Enemy.md)


### プロパティ

| 識別子 | 型 | 説明 |
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


### メソッド

#### checkBattler (battler) → {Boolean}
**@MZ** 指定バトラーと同じものか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) | バトラー |


#### createDamageSprite ()
**@MZ** ダメージスプライトを生成。


#### damageOffsetX () → {[Number](Number.md)}
ダメージの xオフセットを返す。


#### damageOffsetY () → {[Number](Number.md)}
ダメージの yオフセットを返す。


#### destroyDamageSprite ()
**@MZ** ダメージスプライトを消去。


#### inHomePosition () → {Boolean}
基点にいるか。


#### initialize ()
オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#initialize-)


#### initMembers ()
メンバ変数を初期化。


#### isEffecting () → {Boolean}
効果が加わっているか(常にfalse)


#### isMoving () → {boolean}
移動中か。


#### mainSprite () → {[Sprite_Battler](Sprite_Battler.md)}
**@MZ** スプライトへの参照(規定値:this)を返す。


#### onClick ()
**@MZ** オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#onclick-)


#### onMouseEnter ()
**@MZ** オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#onmouseenter-)


#### onMoveEnd ()
移動が終わった時のハンドラ。


#### onPress ()
**@MZ** オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#onpress-)


#### setBattler (battler)
バトラーを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) | バトラー |


#### setHome (x, y)
基点を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 基点の x座標 |
| `y` | [Number](Number.md) | 基点の y座標 |


#### setupDamagePopup ()
ダメージポップアップの準備。


#### startMove (x, y, duration)
指定座標へ移動開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 対象 x座標 |
| `y` | [Number](Number.md) | 対象 y座標 |
| `duration` | [Number](Number.md) | 移動の継続時間 |


#### update ()
オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#update-)


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
オーバーライド:[Sprite](Sprite.md#updateVisibility-)


### 廃止MVメソッド
updateAnimation (), setupAnimation ()
