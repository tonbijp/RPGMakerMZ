[クラスツリー](index.md)

# クラス: Spriteset_Map

## スーパークラス: [Spriteset_Base](Spriteset_Base.md)


| データベース| JSONデータ | オプジェクト |
| --- | --- | --- |
| マップ | [RPG.Map](RPG.Map.md) | [Game_Map](Game_Map.md) |

 マップ表示用スプライトセット。

v1.1.1、1.2.0、1.4.3、1.4.4  で変更あり。
 
主なパス
```js
SceneManager._scene._spriteset
```

 関連クラス: [Scene_Map](Scene_Map.md)

### new Spriteset_Map ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_balloonSprites` | [Array](Array.md).&lt;[Sprite_Balloon](Sprite_Balloon.md)&gt; | **@MZ** [フキダシ]のスプライト |
| `_characterSprites` | [Array](Array.md).&lt;[Sprite_Character](Sprite_Character.md)&gt; | [アクター][イベント]のスプライト |
| `_destinationSprite` | [Sprite_Destination](Sprite_Destination.md) |  タッチ位置スプライト |
| `_effectsContainer` | [Tilemap](Tilemap.md) | **@MZ** フキダシ・エフェクト表示用コンテナ |
| `_parallax` | [TilingSprite](TilingSprite.md) | [遠景]スプライト |
| `_parallaxName` | [String](String.md) | [遠景]画像ファイル名 |
| `_tilemap` | [Tilemap](Tilemap.md) | マップ画像本体 |
| `_tileset` | [RPG.Tileset](RPG.Tileset.md) | [タイルセット] |
| `_shadowSprite` | [Sprite](Sprite.md) |  影スプライト |
| `_weather` | [Weather](Weather.md) |  天候 |


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

#### animationBaseDelay ()
**@MZ** アニメーションの基本遅延時間(規定値:0)を返す。


#### createBalloon (request)
**@MZ** [フキダシ]スプライト の生成を要請。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `request` | [BalloonRequest](MV.BalloonRequest.md)  | [フキダシ]パラメータ |


#### createCharacters ()
キャラクタスプライト([Sprite_Character](Sprite_Character.md))の生成。


#### createDestination ()
タッチ位置表示スプライト([Sprite_Destination](Sprite_Destination.md))の生成。


#### createLowerLayer ()
オーバーライド:[Spriteset_Base](Spriteset_Base.md#createLowerLayer-)

基本スプライトに加え、[遠景]、[タイルマップ]、キャラクタ、影、タッチ位置表示、天候を含む下レイヤを生成。


#### createParallax ()
[遠景]スプライトを生成。


#### createShadow ()
影スプライトの生成。


#### createTilemap ()
タイルマップ([Tilemap](Tilemap.md))を生成。


#### createWeather ()
天候スプライト([Weather](Weather.md))を生成。


#### destroy ()
**@MZ** オーバーライド:[Spriteset_Base](Spriteset_Base.md#destroy-)


#### hideCharacters ()
キャラクタスプライトを隠す。


#### findTargetSprite (target)
オーバーライド: [Spriteset_Base](Spriteset_Base.md#findtargetsprite-target--sprite)


#### initialize ()
オーバーライド:[Spriteset_Base](Spriteset_Base.md#initialize-)


#### loadSystemImages ()
**@MZ** オーバーライド:[Spriteset_Base](Spriteset_Base.md#loadsystemimages-)


#### loadTileset ()
タイルセット([RPG.Tileset](RPG.Tileset.md))の読み込み。


#### processBalloonRequests ()
**@MZ** 要請していた[フキダシ]の描画実行。


#### removeAllBalloons ()
**@MZ** 全[フキダシ]の削除。


#### removeBalloon (sprite)
**@MZ** [フキダシ]の削除。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `sprite` | [Sprite_Balloon](Sprite_Balloon.md) | [フキダシ]スプライト |


#### update ()
オーバーライド:[Spriteset_Base](Spriteset_Base.md#update-)


#### updateBalloons ()
**@MZ** [フキダシ]の更新。


#### updateParallax ()
[遠景]の更新。


#### updateShadow ()
影の更新。


#### updateTilemap ()
タイルマップの更新。


#### updateTileset ()
タイルセットの更新。


#### updateWeather ()
天候の更新。


### 廃止MVメソッド
_canvasReAddParallax ()
