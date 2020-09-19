# Class: Scene_Title

## Extends: [Scene_Base](Scene_Base.md)

### new Scene_Title ()
タイトルのシーン。

関連クラス: [Game_Interpreter](Game_Interpreter.md)<br />
関連シーン: [Scene_Load](Scene_Load.md), [Scene_Options](Scene_Options.md), [Scene_Boot](Scene_Boot.md), [Scene_Map](Scene_Map.md), [Scene_Battle](Scene_Battle.md), [Scene_GameEnd](Scene_GameEnd.md), [Scene_Gameover](Scene_Gameover.md)

   
### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_commandWindow` | [Window_TitleCommand](Window_TitleCommand.md) | コマンドウィンドウ |
| `_backSprite1` | [Sprite](Sprite.md) | 背景1 |
| `_backSprite2` | [Sprite](Sprite.md) | 背景2 |
| `_gameTitleSprite` | [Sprite](Sprite.md) | タイトル |


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

#### [Scene_Base](Scene_Base.md)

* [addWindow (Window)](Scene_Base.md#addwindow-window)
* [attachReservation ()](Scene_Base.md#attachreservation-)
* [checkGameover ()](Scene_Base.md#checkgameover-)
* [createFadeSprite ()](Scene_Base.md#createfadesprite-)
* [createWindowLayer ()](Scene_Base.md#createwindowlayer-)
* [detachReservation ()](Scene_Base.md#detachreservation-)
* [fadeOutAll ()](Scene_Base.md#fadeoutall-)
* [fadeSpeed ()](Scene_Base.md#fadespeed---number)
* [isActive () ](Scene_Base.md#isactive---boolean)
* [isBusy ()](Scene_Base.md#isbusy---boolean)
* [isReady ()](Scene_Base.md#isready---boolean)
* [popScene ()](Scene_Base.md#popscene-)
* [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
* [start ()](Scene_Base.md#start-)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [stop ()](Scene_Base.md#stop-)
* [terminate ()](Scene_Base.md#terminate-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)

### Methods

#### commandContinue ()
[コンティニュー]の実行ハンドラ。


#### commandNewGame ()
[ニューゲーム]の実行ハンドラ。


#### commandOptions ()
[オプション]の実行ハンドラ。


#### create ()
Overrides: [Scene_Base](Scene_Base.md#create-)


#### createBackground ()
背景を生成。


#### createCommandWindow ()
コマンドウィンドウを生成。


#### createForeground ()
手前の画像を生成。


#### drawGameTitle ()
タイトルを描画。


#### initialize ()
Overrides: [Scene_Base](Scene_Base.md#initialize-)


#### isBusy () → {Boolean}
Overrides: [Scene_Base](Scene_Base.md#isBusy-boolean)


#### playTitleMusic ()
タイトル音楽を再生。


#### start ()
Overrides: [Scene_Base](Scene_Base.md#start-)


#### terminate ()
Overrides: [Scene_Base](Scene_Base.md#terminate-)


#### update ()
Overrides: [Scene_Base](Scene_Base.md#update-)
