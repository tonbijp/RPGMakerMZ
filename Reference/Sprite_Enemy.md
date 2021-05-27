[クラスツリー](index.md)

# クラス: Sprite_Enemy

##  Extends: [Sprite_Battler](Sprite_Battler.md)


| データベース| JSONデータ | オブジェクト |
| --- | --- | --- |
| [敵キャラ] | [RPG.Enemy](RPG.Enemy.md) | [Game_Enemy](Game_Enemy.md) |

[敵キャラ]表示用のスプライト。

v1.0.2 で変更あり。

関連クラス: [Spriteset_Battle](Spriteset_Battle.md), [Game_Troop](Game_Troop.md)

### new Sprite_Enemy (enemy opt)
#### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `enemy` | [Game_Enemy](Game_Enemy.md) | &lt;optional&gt; | [敵キャラ] |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_enemy` | [Game_Enemy](Game_Enemy.md) | [敵キャラ]のデータ |
| `_appeared` | Boolean | 出現しているか |
| `_battlerName` | [String](String.md) | 画像ファイル名(拡張子を除く) |
| `_battlerHue` | [Number](Number.md) | 色相(0〜360) |
| `_effectType` | [String](String.md) | エフェクトタイプ  |
| `_effectDuration` | [Number](Number.md) | エフェクト継続時間 |
| `_shake` | [Number](Number.md) | 揺れているか |
| `_stateIconSprite` | [Sprite_StateIcon](Sprite_StateIcon.md) | ステートアイコン |


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
* [isMoving ()](Sprite_Battler.md#ismoving---boolean)
* [mainSprite ()](Sprite_Battler.md#mainsprite---sprite_battler)
* [onClick ()](Sprite_Battler.md#onclick-)
* [onMouseEnter ()](Sprite_Battler.md#onmouseenter-)
* [onMoveEnd ()](Sprite_Battler.md#onmoveend-)
* [onPress ()](Sprite_Battler.md#onpress-)
* [setHome (x, y)](Sprite_Battler.md#sethome-x-y)
* [setupDamagePopup ()](Sprite_Battler.md#setupdamagepopup-)
* [startMove (x, y, duration)](Sprite_Battler.md#startmove-x-y-duration)
* [updateDamagePopup ()](Sprite_Battler.md#updatedamagepopup-)
* [updateMain ()](Sprite_Battler.md#updateMain-)
* [updateMove ()](Sprite_Battler.md#updateMove-)
* [updateSelectionEffect ()](Sprite_Battler.md#updateselectioneffect-)
* [updateVisibility ()](Sprite_Battler.md#updatevisibility-)



### メソッド

#### createStateIconSprite ()


#### damageOffsetX () → {[Number](Number.md)}
オーバーライド: [Sprite_Battler](Sprite_Battler.md#damageoffsetx---number)


#### damageOffsetY () → {[Number](Number.md)}
オーバーライド: [Sprite_Battler](Sprite_Battler.md#damageoffsety---number)


#### initialize (battler)
オーバーライド: [Sprite_Battler](Sprite_Battler.md#initialize-)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `battler` | [Game_Enemy](Game_Enemy.md) |  |


#### initMembers ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#initmembers-)


#### initVisibility ()
表示状態を初期化。


#### isEffecting () → {Boolean}
オーバーライド: [Sprite_Battler](Sprite_Battler.md#iseffecting---boolean)


#### loadBitmap (name, hue)
指定したビットマップ画像を読み込む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | ファイル名(拡張子を含まない) |
| `hue` | [Number](Number.md) | 色相(0〜360) |


#### revertToNormal ()
状態を通常に戻す。


#### setBattler (battler)
オーバーライド: [Sprite_Battler](Sprite_Battler.md#setbattler-battler)


#### setHue (hue)
**@MZ** オーバーライド: [Sprite](Sprite.md#sethue-hue)


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

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `effectType` | [String](String.md) | エフェクトタイプ |


#### startInstantCollapse ()
[消滅エフェクト - 瞬間消去]開始。


#### startWhiten ()
白く変化開始。


#### update ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#update-)


#### updateAppear ()
出現エフェクトをアップデート。


#### updateBitmap ()
オーバーライド: [Sprite_Battler](Sprite_Battler.md#updatebitmap-)


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
オーバーライド: [Sprite_Battler](Sprite_Battler.md#updateframe-)


#### updateInstantCollapse ()
[消滅エフェクト - 瞬間消去]をアップデート。


#### updatePosition ()
オーバーライド: [updatePosition ()](Sprite_Battler.md#updateposition-)


#### updateStateSprite ()
ステートスプライトをアップデート。


#### updateWhiten ()
白エフェクトをアップデート。


