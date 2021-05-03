[クラスツリー](index.md)

# クラス: Scene_Boot

## スーパークラス: [Scene_Base](Scene_Base.md)

### new Scene_Boot ()
 起動時の初期化を行うシーン。システムに必要なデータや画像を読み込み、戦闘・イベントテストの分岐なども行う。

関連クラス: [Main](Main.md), [SceneManager](SceneManager.md)<br />
関連シーン: [Scene_Title](Scene_Title.md), [Scene_Map](Scene_Map.md), [Scene_Battle](Scene_Battle.md)


### 廃止MVプロパティ
`_startDate`


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
* [isBusy ()](Scene_Base.md#isbusy---boolean)
* [isRightInputMode ()](Scene_Base.md#isrightinputmode---boolean)
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
* [terminate ()](Scene_Base.md#terminate-)
* [update ()](Scene_Base.md#update-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateColorFilter ()](Scene_Base.md#updatecolorfilter-)
* [updateFade ()](Scene_Base.md#updatefade-)


### メソッド

#### (static) loadSystemImages ()
 各種アイコンなどのシステムに必要なデータを読み込む。


#### adjustBoxSize ()
**@MZ** UIエリアの部品表示範囲を設定。


#### adjustWindow ()
**@MZ** ゲーム表示範囲を設定。


#### checkPlayerLocation ()
 プレイヤーの場所が設定されているか検査し、設定されていないならエラーを出力。


#### create ()
オーバーライド: [Scene_Base](Scene_Base.md#create-)


#### initialize ()
オーバーライド: [Scene_Base](Scene_Base.md#initialize-)


#### isPlayerDataLoaded () → {Boolean}
**@MZ** プレイヤー情報(グローバル・オプション)が読み込まれているか。


#### isGameFontLoaded () → {Boolean}
 フォントが読み込まれているか。


#### isReady () → {Boolean}
オーバーライド: [Scene_Base](Scene_Base.md#isReady-)


#### loadPlayerData ()
**@MZ** プレイヤー情報(グローバル・オプション)を読み込む。


#### loadGameFonts ()
**@MZ** フォントを読み込む。


#### onDatabaseLoaded ()
**@MZ** データベース読み込み完了時のハンドラ。


#### resizeScreen ()
**@MZ** 画面サイズを再設定。


#### setEncryptionInfo ()
**@MZ** 暗号化された情報を設定。


#### start ()
オーバーライド: [Scene_Base](Scene_Base.md#start-)


#### startNormalGame ()
**@MZ** 新規ゲームを開始。


#### updateDocumentTitle ()
 ゲームのタイトルをアップデート。


### 廃止MVメソッド
`loadSystemWindowImage ()`
