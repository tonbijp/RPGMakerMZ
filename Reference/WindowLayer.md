[クラスツリー](index.md)

# クラス: WindowLayer

## スーパークラス: [PIXI.Container](PIXI.Container.md)

### new WindowLayer ()
[Scene_Base](Scene_Base.md) に含まれ [Window_Base](Window_Base.md) を children に持つレイヤー。

ウィンドウの重ね合わせの制御を行う。<br />
そのような制御がないなら [Scene_Base](Scene_Base.md) に直接ウィンドウが追加される。

MVでは、ここで処理されていたフィルタ機能など多くは [Window](Window.md) に移ってシンプルな作りになっている。

### 廃止MVプロパティ
`voidFilter`, `filterArea`, `filters`,  `_width`,`_height`, `_tempCanvas`, `_translationMatrix`, `_windowMask`, `_windowRect`

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
* [destroy ()](PIXI.Container.md#destroy-)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
*  [updateTransform ()](PIXI.Container.md#updatetransform-)


### メソッド

#### initialize ()
オブジェクト生成時の初期化。


#### render (renderer)
**@MZ** オーバーライド: [PIXI.Container](PIXI.Container.md#render-renderer)


#### update ()
フレーム毎のアップデート。


### 廃止MVメソッド
_canvasClearWindowRect (renderSession, window), _maskWindow (window), _renderCanvas (renderSession), renderWebGL (renderSession), move (x, y, width, height), onRemoveAsAChild ()