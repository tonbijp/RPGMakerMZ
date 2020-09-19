# Class: Spriteset_Battle

##  Extends: [Spriteset_Base](Spriteset_Base.md)

### new Spriteset_Battle ()
戦闘シーン用のスプライトセット。[背景][アクター][敵キャラ]を含む。

関連クラス: [Scene_Battle](Scene_Battle.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_battlebackLocated` | Boolean | 背景画像が表示されているか |
| `_backgroundSprite` | [Sprite](Sprite.md) | [背景]スプライト |
| `_battleField` | [Sprite](Sprite.md) | 戦闘フィールド |
| `_back1Sprite` | [TilingSprite](TilingSprite.md) | 背景1スプライト |
| `_back2Sprite` | [TilingSprite](TilingSprite.md) | 背景2スプライト |
| `_enemySprites` | [Array](Array.md).&lt;[Sprite_Enemy](Sprite_Enemy.md)&gt; | [敵キャラ]スプライトの配列 |
| `_actorSprites` | [Array](Array.md).&lt;[Sprite_Actor](Sprite_Actor.md)&gt; | [アクター]スプライトの配列 |


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

#### [Spriteset_Base](Spriteset_Base.md)

* [createBaseSprite ()](Spriteset_Base.md#createbasesprite-)
* [createCanvasToneChanger ()](Spriteset_Base.md#createcanvastonechanger-)
* [createPictures ()](Spriteset_Base.md#createpictures-)
* [createScreenSprites ()](Spriteset_Base.md#createscreensprites-)
* [createTimer ()](Spriteset_Base.md#createtimer-)
* [createToneChanger ()](Spriteset_Base.md#createtonechanger-)
* [createUpperLayer ()](Spriteset_Base.md#createupperlayer-)
* [createWebGLToneChanger ()](Spriteset_Base.md#createwebgltonechanger-)
* [updateCanvasToneChanger ()](Spriteset_Base.md#updatecanvastonechanger-)
* [updatePosition ()](Spriteset_Base.md#updateposition-)
* [updateScreenSprites ()](Spriteset_Base.md#updatescreensprites-)
* [updateToneChanger ()](Spriteset_Base.md#updatetonechanger-)
* [updateWebGLToneChanger ()](Spriteset_Base.md#updatewebgltonechanger-)


### Methods

#### autotileType (z) → {[Number](Number.md)}
戦闘発生地点の指定レイヤーのオートタイルタイプ(地形タイプ)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `z` | [Number](Number.md) | レイヤー |



#### battleback1Bitmap () → {[Bitmap](Bitmap.md)}
背景1のビットマップを返す。


#### battleback1Name () → {[String](String.md)}
背景1のファイル名を返す。


#### battleback2Bitmap () → {[Bitmap](Bitmap.md)}
背景2のビットマップを返す。


#### battleback2Name () → {[String](String.md)}
背景2のファイル名を返す。


#### battlerSprites () → {[Array](Array.md).<[Sprite_Battler](Sprite_Battler.md)>}
バトラー([アクター] + [敵キャラ])の配列を返す。


#### compareEnemySprite (a, b) → {[Number](Number.md)}
[敵キャラ]スプライトを比較し、その差を返す。
重ね合わせのソートで使われるコールバック関数。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `a` | [Sprite_Enemy](Sprite_Enemy.md) | [敵キャラ]スプライトA |
| `b` | [Sprite_Enemy](Sprite_Enemy.md) | [敵キャラ]スプライトB |


#### createActors ()
[アクター]スプライトを生成。


#### createBackground ()
[背景]を生成。


#### createBattleback ()
[背景]\(奥)を生成。


#### createBattleField ()
[背景]\(地面)を生成。


#### createEnemies ()
[敵キャラ]スプライトを生成。


#### createLowerLayer ()
Overrides: [Spriteset_Base](Spriteset_Base.md#createLowerLayer-)


#### defaultBattleback1Name () → {[String](String.md)}
規定値の背景1のファイル名を返す。


#### defaultBattleback2Name () → {[String](String.md)}
規定値の背景2のファイル名を返す。


#### isAnimationPlaying () → {Boolean}
アニメーション再生中か。


#### isAnyoneMoving () → {Boolean}
[アクター]や[敵キャラ]が動作中か。


#### isBusy () → {Boolean}
処理中か。


#### isEffecting () → {Boolean}
エフェクト中か。


#### locateBattleback ()
[背景]を配置。


#### normalBattleback1Name () → {[String](String.md)}
通常の背景1のファイル名。


#### normalBattleback2Name () → {[String](String.md)}
通常の背景2のファイル名。


#### overworldBattleback1Name () → {[String](String.md)}
[タイルセット]の[モード]が[フィールドタイプ]の場合の背景1のファイル名。


#### overworldBattleback2Name () → {[String](String.md)}
[タイルセット]の[モード]が[フィールドタイプ]の場合の背景2のファイル名。


#### shipBattleback1Name () → {[String](String.md)}
船の場合の背景1のファイル名。


#### shipBattleback2Name () → {[String](String.md)}
船の場合の背景2のファイル名。


#### terrainBattleback1Name (type) → {[String](String.md)}
指定した地形に応じた背景1のファイル名。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | 地形タイプ(autotileTypeの返り値) |


#### terrainBattleback2Name (type) → {[String](String.md)}
指定した地形に応じた背景1のファイル名。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | 地形タイプ(autotileTypeの返り値) |


#### updateActors ()
[アクター]のアップデート。


#### updateBattleback ()
[背景]のアップデート。


