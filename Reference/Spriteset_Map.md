# Class: Spriteset_Map

##  Extends: [Spriteset_Base](Spriteset_Base.md)

### new Spriteset_Map ()

| データベース| JSONデータ | オプジェクト |
| --- | --- | --- | --- | --- |
| マップ | [RPG.Map](RPG.Map.md) | [Game_Map](Game_Map.md) |

 マップ表示用スプライトセット。
 
 関連クラス: [Scene_Map](Scene_Map.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_parallax` | [TilingSprite](TilingSprite.md) | [遠景]スプライト |
| `_tilemap` | [Tilemap](Tilemap.md) \| [ShaderTilemap](ShaderTilemap.md) | マップ画像本体 |
| `_tileset` | [RPG.Tileset](RPG.Tileset.md) | [タイルセット] |
| `_characterSprites` | [Array](Array.md).&lt;[Sprite_Character](Sprite_Character.md)&gt; | [アクター][イベント]のスプライト |
| `_shadowSprite` | [Sprite](Sprite.md) |  影スプライト |
| `_destinationSprite` | [Sprite_Destination](Sprite_Destination.md) |  タッチ位置スプライト |
| `_weather` | [Weather](Weather.md) |  天候 |
| `_parallaxName` | [String](String.md) | [遠景]画像ファイル名 |


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

#### createCharacters ()
キャラクタスプライト([Sprite_Character](Sprite_Character.md))の生成。


#### createDestination ()
タッチ位置表示スプライト([Sprite_Destination](Sprite_Destination.md))の生成。


#### createLowerLayer ()
Overrides:[Spriteset_Base](Spriteset_Base.md#createLowerLayer-)

基本スプライトに加え、[遠景]、[タイルマップ]、キャラクタ、影、タッチ位置表示、天候を含む下レイヤを生成。


#### createParallax ()
[遠景]スプライトを生成。


#### createShadow ()
影スプライトの生成。


#### createTilemap ()
タイルマップ([Tilemap](Tilemap.md) か [ShaderTilemap](ShaderTilemap.md))を生成。


#### createWeather ()
天候スプライト([Weather](Weather.md))の生成。


#### hideCharacters ()
キャラクタスプライトを隠す。


#### initialize ()
Overrides:[Spriteset](Spriteset.md#initialize-)


#### loadTileset ()
タイルセット([RPG.Tileset](RPG.Tileset.md))の読み込み。


#### update ()
Overrides:[Spriteset.](Spriteset.md#update-)


#### updateParallax ()
[遠景]のアップデート。


#### updateShadow ()
影のアップデート。


#### updateTilemap ()
タイルマップのアップデート。


#### updateTileset ()
タイルセットのアップデート。


#### updateWeather ()
天候のアップデート。


