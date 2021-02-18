[クラスツリー](index.md)

# クラス: Scene_File

## スーパークラス: [Scene_MenuBase](Scene_MenuBase.md)

### new Scene_File ()
セーブファイルを扱うためのシーン。

関連クラス: [DataManager](DataManager.md)

### サブクラス

* [Scene_Save](Scene_Save.md)
* [Scene_Load](Scene_Load.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_listWindow` | [Window_SavefileList](Window_SavefileList.md) | セーブファイルのリストウィンドウ |


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
* [checkGameover ()](Scene_Base.md#checkgameover-)
* [createFadeSprite ()](Scene_Base.md#createfadesprite-)
* [createWindowLayer ()](Scene_Base.md#createwindowlayer-)
* [detachReservation ()](Scene_Base.md#detachreservation-)
* [fadeOutAll ()](Scene_Base.md#fadeoutall-)
* [fadeSpeed ()](Scene_Base.md#fadespeed---number)
* [isActive ()](Scene_Base.md#isactive---boolean)
* [isBusy ()](Scene_Base.md#isbusy---boolean)
* [isReady ()](Scene_Base.md#isready---boolean)
* [popScene ()](Scene_Base.md#popscene-)
* [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [stop ()](Scene_Base.md#stop-)
* [terminate ()](Scene_Base.md#terminate-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)

#### [Scene_MenuBase](Scene_MenuBase.md)

* [actor ()](Scene_MenuBase.md#actor---game_actor)
* [arePageButtonsEnabled ()](Scene_MenuBase.md#arepagebuttonsenabled---boolean)
* [createButtons ()](Scene_MenuBase.md#createbuttons-)
* [createCancelButton ()](Scene_MenuBase.md#createcancelbutton-)
* [createPageButtons ()](Scene_MenuBase.md#createpagebuttons-)
* [helpAreaBottom()](Scene_MenuBase.md#helpareabottom--number)
* [helpAreaTop() ](Scene_MenuBase.md#mainareatop--number)
* [mainAreaBottom()](Scene_MenuBase.md#mainareabottom--number)
* [mainAreaHeight()](Scene_MenuBase.md#mainareaheight--number)
* [mainAreaTop()](Scene_MenuBase.md#mainareatop--number)
* [needsCancelButton ()](Scene_MenuBase.md#needscancelbutton---boolean)
* [needsPageButtons ()](Scene_MenuBase.md#needspagebuttons---boolean)
* [nextActor ()](Scene_MenuBase.md#nextactor-)
* [onActorChange ()](Scene_MenuBase.md#onactorchange-)
* [previousActor ()](Scene_MenuBase.md#previousactor-)
* [setBackgroundOpacity (opacity)](Scene_MenuBase.md#setbackgroundopacity-opacity)
* [update ()](Scene_MenuBase.md#update-)
* [updateActor ()](Scene_MenuBase.md#updateactor-)
* [updatePageButtons ()](Scene_MenuBase.md#updatepagebuttons-)


### メソッド

#### activateListWindow ()
リストウィンドウをアクティベート。


#### create ()
オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#create-)


#### createHelpWindow ()
オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#createhelpwindow-)


#### createListWindow ()
リストウィンドウを生成。


#### firstSavefileId () → {[Number](Number.md)}
**@MZ** 画面上で最初のセーブファイルのIDを返す。


#### helpAreaHeight ()
**@MZ** オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#helpareaheight--number)


#### helpWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#helpwindowrect---rectangle)


#### helpWindowText () → {[String](String.md)}
[システム]で設定した、ヘルプウィンドウに表示する文字を返す。


#### initialize ()
オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#initialize-)


#### isSavefileEnabled (savefileId) → {Boolean}
**@MZ** 指定IDのファイルが利用可能か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | ファイルID |


#### listWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** セーブファイルのリストウィンドウの矩形範囲を返す。


#### mode () → {[String](String.md)}
モード( 'save' か 'load' )を返す。


#### needsAutosave () → {Boolean}
**@MZ** オートセーブの必要があるか。


#### onSavefileOk ()
セーブファイルが選択された時に呼ばれるハンドラ。


#### savefileId () → {[Number](Number.md)}
現在のセーブファイルのIDを返す。


#### start ()
オーバーライド: [Scene_Base](Scene_Base.md#start-)

### 廃止MVメソッド
firstSavefileIndex ()