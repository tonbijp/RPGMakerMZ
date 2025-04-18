[クラスツリー](index.md)

# クラス: Scene_Title

## スーパークラス: [Scene_Base](Scene_Base.md)

タイトルのシーン。

主なパス
```js
SceneManager._scene
```

関連クラス: [SceneManager](SceneManager.md), [Game_Interpreter](Game_Interpreter.md)<br />
関連シーン: [Scene_Load](Scene_Load.md), [Scene_Options](Scene_Options.md), [Scene_Boot](Scene_Boot.md), [Scene_Map](Scene_Map.md), [Scene_Battle](Scene_Battle.md), [Scene_GameEnd](Scene_GameEnd.md), [Scene_Gameover](Scene_Gameover.md)

### new Scene_Title ()
   
### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_commandWindow` | [Window_TitleCommand](Window_TitleCommand.md) | コマンドウィンドウ |
| `_backSprite1` | [Sprite](Sprite.md) | 背景1 |
| `_backSprite2` | [Sprite](Sprite.md) | 背景2 |
| `_gameTitleSprite` | [Sprite](Sprite.md) | タイトル |


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
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [Stage](Stage.md)

* [destroy ()](Stage.md#destroy-)

#### [Scene_Base](Scene_Base.md)

* [addWindow (Window)](Scene_Base.md#addwindow-window)
* [attachReservation ()](Scene_Base.md#attachreservation-)
* [buttonAreaBottom ()](Scene_Base.md#buttonareabottom---number)
* [buttonAreaHeight ()](Scene_Base.md#buttonareaheight---number)
* [buttonAreaTop ()](Scene_Base.md#buttonareatop---number)
* [buttonY ()](Scene_Base.md#buttony---number)
* [calcWindowHeight (numLines, selectable)](Scene_Base.md#calcwindowheight-numlines-selectable--number)
* [centerSprite (sprite)](Scene_Base.md#centersprite-sprite)
* [checkGameover ()](Scene_Base.md#checkgameover-)
* [createColorFilter ()](Scene_Base.md#createcolorfilter-)
* [createFadeSprite ()](Scene_Base.md#createfadesprite-)
* [createWindowLayer ()](Scene_Base.md#createwindowlayer-)
* [detachReservation ()](Scene_Base.md#detachreservation-)
* [executeAutosave ()](Scene_Base.md#executeautosave-)
* [fadeOutAll ()](Scene_Base.md#fadeoutall-)
* [fadeSpeed ()](Scene_Base.md#fadespeed---number)
* [isActive ()](Scene_Base.md#isactive---boolean)
* [isAutosaveEnabled ()](Scene_Base.md#isautosaveenabled---boolean)
* [isBottomButtonMode ()](Scene_Base.md#isbottombuttonmode---boolean)
* [isBottomHelpMode ()](Scene_Base.md#isbottomhelpmode---boolean)
* [isReady ()](Scene_Base.md#isready---boolean)
* [isRightInputMode ()](Scene_Base.md#isrightinputmode---boolean)
* [isStarted ()](Scene_Base.md#isstarted---boolean)
* [mainCommandWidth ()](Scene_Base.md#maincommandwidth---number)
* [onAutosaveFailure ()](Scene_Base.md#onautosavefailure-)
* [onAutosaveSuccess ()](Scene_Base.md#onautosavesuccess-)
* [popScene ()](Scene_Base.md#popscene-)
* [requestAutosave ()](Scene_Base.md#requestautosave-)
* [scaleSprite (sprite)](Scene_Base.md#scalesprite-sprite)
* [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [stop ()](Scene_Base.md#stop-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateColorFilter ()](Scene_Base.md#updatecolorfilter-)
* [updateFade ()](Scene_Base.md#updatefade-)


### メソッド

#### adjustBackground ()
**@MZ** 背景画像を合わせる。


#### commandContinue ()
[コンティニュー]の実行ハンドラ。


#### commandNewGame ()
[ニューゲーム]の実行ハンドラ。


#### commandOptions ()
[オプション]の実行ハンドラ。


#### commandWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** コマンドウィンドウの矩形範囲を返す。


#### create ()
オーバーライド: [Scene_Base](Scene_Base.md#create-)


#### createBackground ()
背景を生成。


#### createCommandWindow ()
コマンドウィンドウを生成。


#### createForeground ()
手前の画像を生成。


#### drawGameTitle ()
タイトルを描画。


#### initialize ()
オーバーライド: [Scene_Base](Scene_Base.md#initialize-)


#### isBusy () → {Boolean}
オーバーライド: [Scene_Base](Scene_Base.md#isBusy-boolean)


#### playTitleMusic ()
タイトル音楽を再生。


#### start ()
オーバーライド: [Scene_Base](Scene_Base.md#start-)


#### terminate ()
オーバーライド: [Scene_Base](Scene_Base.md#terminate-)


#### update ()
オーバーライド: [Scene_Base](Scene_Base.md#update-)


### 廃止MVメソッド
centerSprite()