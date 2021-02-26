[クラスツリー](index.md)

# クラス: Spriteset_Battle

## スーパークラス: [Spriteset_Base](Spriteset_Base.md)

### new Spriteset_Battle ()
戦闘シーン用のスプライトセット。[アクター][敵キャラ]を含む。

MZで[背景]に関しては、[Sprite_Battleback](Sprite_Battleback.md)に機能が分離された。

関連クラス: [Scene_Battle](Scene_Battle.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_battlebackLocated` | Boolean | 背景画像が表示されているか |
| `_backgroundSprite` | [Sprite](Sprite.md) | [背景]スプライト |
| `_battleField` | [Sprite](Sprite.md) | 戦闘フィールド |
| `_back1Sprite` | [Sprite_Battleback](Sprite_Battleback.md) | 背景1スプライト |
| `_back2Sprite` | [Sprite_Battleback](Sprite_Battleback.md) | 背景2スプライト |
| `_enemySprites` | [Array](Array.md).&lt;[Sprite_Enemy](Sprite_Enemy.md)&gt; | [敵キャラ]スプライトの配列 |
| `_actorSprites` | [Array](Array.md).&lt;[Sprite_Actor](Sprite_Actor.md)&gt; | [アクター]スプライトの配列 |

`_back1Sprite`, `_back2Sprite`の型はMVでは [TilingSprite](TilingSprite.md) だったが、MZで [Sprite_Battleback](Sprite_Battleback.md) に変更されている。

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

#### [Spriteset_Base](Spriteset_Base.md)

* [animationBaseDelay ()](Spriteset_Base.md#animationbasedelay---number)
* [animationNextDelay ()](Spriteset_Base.md#animationnextdelay---number)
* [animationShouldMirror (target)](Spriteset_Base.md#animationshouldmirror-target--boolean)
* [createAnimation (request)](Spriteset_Base.md#createanimation-request)
* [createAnimationSprite (targets, animation, mirror, delay)](Spriteset_Base.md#createanimationsprite-targets-animation-mirror-delay)
* [createBaseFilters ()](Spriteset_Base.md#createbasefilters-)
* [createBaseSprite ()](Spriteset_Base.md#createbasesprite-)
* [createCanvasToneChanger ()](Spriteset_Base.md#createcanvastonechanger-)
* [createLowerLayer ()](Spriteset_Base.md#createlowerlayer-)
* [createOverallFilters ()](Spriteset_Base.md#createoverallfilters-)
* [createPictures ()](Spriteset_Base.md#createpictures-)
* [createTimer ()](Spriteset_Base.md#createtimer-)
* [createUpperLayer ()](Spriteset_Base.md#createupperlayer-)
* [destroy ()](Spriteset_Base.md#destroy-)
* [isAnimationForEach (animation)](Spriteset_Base.md#isanimationforeach-animation--boolean)
* [isAnimationPlaying ()](Spriteset_Base.md#isanimationplaying-)
* [isMVAnimation (animation)](Spriteset_Base.md#ismvanimation-animation--boolean)
* [lastAnimationSprite ()](Spriteset_Base.md#lastanimationsprite---sprite)
* [makeTargetSprites (targets)](Spriteset_Base.md#maketargetsprites-targets--arraysprite)
* [pictureContainerRect ()](Spriteset_Base.md#picturecontainerrect---rectangle)
* [processAnimationRequests ()](Spriteset_Base.md#processanimationrequests-)
* [removeAllAnimations ()](Spriteset_Base.md#removeallanimations-)
* [removeAnimation (sprite)](Spriteset_Base.md#removeanimation-sprite)
* [update ()](Spriteset_Base.md#update-)
* [updateAnimations ()](Spriteset_Base.md#updateanimations-)
* [updateBaseFilters ()](Spriteset_Base.md#updatebasefilters-)
* [updateOverallFilters ()](Spriteset_Base.md#updateoverallfilters-)
* [updatePosition ()](Spriteset_Base.md#updateposition-)


### メソッド

#### autotileType (z) → {[Number](Number.md)}
戦闘発生地点の指定レイヤーのオートタイルタイプ(地形タイプ)を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `z` | [Number](Number.md) | レイヤー |


#### battleFieldOffsetY () → {[Number](Number.md)}
**@MZ** y軸のオフセット(規定値:24ピクセル)を返す。


#### battlerSprites () → {[Array](Array.md).&lt;[Sprite_Battler](Sprite_Battler.md)&gt;}
バトラー([アクター] + [敵キャラ])の配列を返す。


#### compareEnemySprite (a, b) → {[Number](Number.md)}
[敵キャラ]スプライトを比較し、その差を返す。
重ね合わせのソートで使われるコールバック関数。

##### 引数

| 名前 | 型 | 説明 |
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
オーバーライド: [Spriteset_Base](Spriteset_Base.md#createLowerLayer-)


#### findTargetSprite (target)
オーバーライド: [Spriteset_Base](Spriteset_Base.md#findtargetsprite-target--sprite)


#### initialize ()
オーバーライド: [Spriteset_Base](Spriteset_Base.md#initialize-)


#### isAnyoneMoving () → {Boolean}
[アクター]や[敵キャラ]が動作中か。


#### isBusy () → {Boolean}
処理中か。


#### isEffecting () → {Boolean}
エフェクト中か。


#### loadSystemImages ()
オーバーライド: [Spriteset_Base](Spriteset_Base.md#loadsystemimages-)


#### updateActors ()
[アクター]のアップデート。


#### updateBattleback ()
[背景]のアップデート。


### 廃止MVメソッド
battleback1Bitmap (), battleback1Name () , battleback2Bitmap (), battleback2Name (), defaultBattleback1Name (),  defaultBattleback2Name (),  isAnimationPlaying (), locateBattleback (), normalBattleback1Name () , normalBattleback2Name (), overworldBattleback1Name () , overworldBattleback2Name (), shipBattleback1Name (), shipBattleback2Name (), terrainBattleback1Name (type), terrainBattleback2Name (type)
