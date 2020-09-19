# Class: Scene_Base

## Extends: [Stage](Stage.md)

### new Scene_Base ()
シーンの基礎オブジェクト。シーン管理は [SceneManager](SceneManager.md) で行う。


### Sub Classes

* [Scene_Boot](Scene_Boot.md)
* [Scene_Title](Scene_Title.md)
* [Scene_Gameover](Scene_Gameover.md)
* [Scene_Map](Scene_Map.md)
* [Scene_Battle](Scene_Battle.md)
* [Scene_MenuBase](Scene_MenuBase.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_active` | Boolean |  アクティブか |
| `_fadeSign` | [Number](Number.md) | フェードの状態(  -1:OUT, 0:なし, 1:IN ) |
| `_fadeDuration` | [Number](Number.md) |  フェードにかける時間 |
| `_fadeSprite` | [ScreenSprite](ScreenSprite.md) |  フェードに使うスプライト |
| `_imageReservationId` | [Number](Number.md) | [ImageManager](ImageManager.md) で使う画像ID |
| `_windowLayer` | [WindowLayer](WindowLayer.md) |  ウィンドウレイヤ |


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
* [updateTransform ()](PIXI.Container.md#updatetransform-)


### Methods

#### addWindow (Window)
ウィンドウレイヤにウィンドウを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `Window` | [Window_Base](Window_Base.md) |  追加するウィンドウ |


#### attachReservation ()
キューに予約を追加。


#### checkGameover ()
ゲームオーバー状態か検査。


#### create ()
シーンの生成。


#### createFadeSprite ()
フェード用のスプライトを生成。


#### createWindowLayer ()
ウィンドウレイヤ[WindowLayer](WindowLayer.md) を生成。


#### detachReservation ()
キューから予約を削除。


#### fadeOutAll ()
全ての映像と音声を、遅い速度でフェードアウト。


#### fadeSpeed () → {[Number](Number.md)}
フェード速度を返す。


#### initialize ()
Overrides: [Stage](Stage.md#initialize-)


#### isActive () → {Boolean}
シーンがアクティブか。


#### isBusy () → {Boolean}
フェード動作中か。


#### isReady () → {Boolean}
シーンの準備ができているか。


#### popScene ()
シーンを引き出す(pop)。


#### slowFadeSpeed () → {[Number](Number.md)}
遅いフェード速度を返す。


#### start ()
シーンの開始。


#### startFadeIn (duration opt, white opt)
フェードインの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.md) | &lt;optional&gt; | 30 |  フェードインにかける時間 |
| `white` | Boolean | &lt;optional&gt; | false |  白で[フェード]するか(falseだと黒) |


#### startFadeOut (duration opt, white opt)
 フェードアウトの要求。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.md) | &lt;optional&gt; | 30 |  フェードアウトにかける時間 |
| `white` | Boolean | &lt;optional&gt; | false |  白で[フェード]するか(falseだと黒) |


#### stop ()
シーンの停止。


#### terminate ()
遷移前のシーン中断。


#### update ()
フレーム毎のアップデート。


#### updateChildren ()
子オブジェクトのアップデート。


#### updateFade ()
フェードのアップデート。
