# Class: ShaderTilemap

## Extends: [Tilemap](Tilemap.md)

### new ShaderTilemap ()

描画モード(F2キーを押して確かめられる)が WebGL Mode の場合のタイルマップ。

バージョン1.3.0以降は、こちらの ShaderTilemap が実際に使用されているクラスで、[Tilemap](Tilemap.md) の方は継承されるために存在する abstract(抽象)クラスと、静的メソッド・プロパティを扱うユーティリティクラスの役割となっている。

関連クラス: [RPG.Map](RPG.Map.md), [RPG.Tileset](RPG.Tileset.md), [Game_Map](Game_Map.md), [Spriteset_Map](Spriteset_Map.md)


### Inherited From

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
* [getLocalBounds (rect)](PIXI.DisplayObject.md#getlocalbounds-rect--pixirectangle)
* [setParent (container)](PIXI.DisplayObject.md#setparent-container--pixicontainer)
* [setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)](PIXI.DisplayObject.md#settransform-x-y-scalex-scaley-rotation-skewx-skewy-pivotx-pivoty--pixidisplayobject)
* [toGlobal (position, point, skipUpdate)](PIXI.DisplayObject.md#toglobal-position-point-skipupdate--pixipoint)
* [toLocal (position, from, point, skipUpdate)](PIXI.DisplayObject.md#tolocal-position-from-point-skipupdate--pixipoint)

#### [PIXI.Container](PIXI.Container.md)

* [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
* [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
* [calculateBounds ()](PIXI.Container.md#calculatebounds-)
* [destroy ()](PIXI.Container.md#destroy-)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)

#### [Tilemap](Tilemap.md)

* [\_compareChildOrder (a, b)](Tilemap.md#_comparechildorder-a-b)
* [\_createLayers ()](Tilemap.md#_createlayers-)
* [\_drawAutotile (bitmap, tileId, dx, dy)](Tilemap.md#_drawautotile-bitmap-tileid-dx-dy)
* [\_drawNormalTile (bitmap, tileId, dx, dy)](Tilemap.md#_drawnormaltile-bitmap-tileid-dx-dy)
* [\_drawShadow (bitmap, shadowBits, dx, dy)](Tilemap.md#_drawshadow-bitmap-shadowbits-dx-dy)
* [\_drawTableEdge (bitmap, tileId, dx, dy)](Tilemap.md#_drawtableedge-bitmap-tileid-dx-dy)
* [\_drawTile (bitmap, tileId, dx, dy)](Tilemap.md#_drawtile-bitmap-tileid-dx-dy)
* [\_isHigherTile (tileId)](Tilemap.md#_ishighertile-tileid--boolean)
* [\_isOverpassPosition (mx, my)](Tilemap.md#_isoverpassposition-mx-my--boolean)
* [\_isTableTile (tileId)](Tilemap.md#_istabletile-tileid--boolean)
* [\_paintAllTiles (startX, startY)](Tilemap.md#_paintalltiles-startx-starty)
* [\_paintTiles (startX, startY, x, y)](Tilemap.md#_painttiles-startx-starty-x-y)
* [\_readLastTiles (i, x, y)](Tilemap.md#_readlasttiles-i-x-y--arraynumber)
* [\_readMapData (x, y, z) ](Tilemap.md#_readmapdata-x-y-z--number)
* [\_sortChildren ()](Tilemap.md#_sortchildren-)
* [\_updateLayerPositions (startX, startY)](Tilemap.md#_updatelayerpositions-startx-starty)
* [\_writeLastTiles (i, x, y, tiles)](Tilemap.md#_writelasttiles-i-x-y-tiles)
* [isReady ()](Tilemap.md#isready---boolean)
* [setData (width, height, data)](Tilemap.md#setdata-width-height-data)
* [update ()](Tilemap.md#update-)

### Methods

#### _hackRenderer (renderer) → {PIXI.CanvasRenderer \| PIXI.WebGLRenderer}
レンダラを環境に合わせて設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.CanvasRenderer](http://pixijs.download/release/docs/PIXI.CanvasRenderer.html) \| [PIXI.WebGLRenderer](https://pixijs.download/release/docs/PIXI.WebGLRenderer.html) | レンダラ |


#### renderCanvas (renderer)
canvas によって描画する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.CanvasRenderer](http://pixijs.download/release/docs/PIXI.CanvasRenderer.html) | レンダラ |


#### renderWebGL (renderer)
WebGL によって描画する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | [PIXI.WebGLRenderer](https://pixijs.download/release/docs/PIXI.WebGLRenderer.html) | レンダラ |


#### initialize ()
Overrides: [Tilemap](Tilemap.md#initialize-)


#### refresh ()
Overrides: [Tilemap](Tilemap.md#refresh-)


#### refreshTileset ()
Overrides: [Tilemap](Tilemap.md#refreshtileset-)


#### updateTransform ()
Overrides: [Tilemap](Tilemap.md#updatetransform-)


