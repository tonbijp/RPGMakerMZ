[クラスツリー](index.md)

# クラス: Scene_Item

## スーパークラス: [Scene_ItemBase](Scene_ItemBase.md)

[アイテム]のシーン。

v1.2.0  で変更あり。

主なパス
```js
SceneManager._scene
```

関連クラス: [SceneManager](SceneManager.md)
関連シーン: [Scene_Menu](Scene_Menu.md)

### new Scene_Item ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_categoryWindow` | [Window_ItemCategory](Window_ItemCategory.md) | カテゴリ選択ウィンドウ |


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
* [createColorFilter ()](Scene_Base.md#createcolorfilter-)
* [centerSprite (sprite)](Scene_Base.md#centersprite-sprite)
* [checkGameover ()](Scene_Base.md#checkgameover-)
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
* [start ()](Scene_Base.md#start-)
* [stop ()](Scene_Base.md#stop-)
* [terminate ()](Scene_Base.md#terminate-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)

#### [Scene_MenuBase](Scene_MenuBase.md)

* [actor ()](Scene_MenuBase.md#actor---game_actor)
* [arePageButtonsEnabled ()](Scene_MenuBase.md#arepagebuttonsenabled---boolean)
* [createButtons ()](Scene_MenuBase.md#createbuttons-)
* [createCancelButton ()](Scene_MenuBase.md#createcancelbutton-)
* [createHelpWindow ()](Scene_MenuBase.md#createhelpwindow-)
* [createPageButtons ()](Scene_MenuBase.md#createpagebuttons-)
* [helpAreaBottom()](Scene_MenuBase.md#helpareabottom--number)
* [helpAreaHeight() ](Scene_MenuBase.md#helpareaheight--number)
* [helpAreaTop() ](Scene_MenuBase.md#mainareatop--number)
* [helpWindowRect ()](Scene_MenuBase.md#helpwindowrect---rectangle)
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

#### [Scene_ItemBase](Scene_ItemBase.md)

* [activateItemWindow ()](Scene_ItemBase.md#activateitemwindow-)
* [actorWindowRect ()](Scene_ItemBase.md#actorwindowrect--rectangle)
* [applyItem ()](Scene_ItemBase.md#applyitem-)
* [canUse ()](Scene_ItemBase.md#canuse---boolean)
* [checkCommonEvent ()](Scene_ItemBase.md#checkcommonevent-)
* [createActorWindow ()](Scene_ItemBase.md#createactorwindow-)
* [determineItem ()](Scene_ItemBase.md#determineitem-)
* [hideActorWindow ()](Scene_ItemBase.md#hideactorwindow-)
* [isCursorLeft ()](Scene_ItemBase.md#iscursorleft---boolean)
* [isItemEffectsValid ()](Scene_ItemBase.md#isitemeffectsvalid---boolean)
* [item ()](Scene_ItemBase.md#item---rpgbusableitem)
* [itemTargetActors ()](Scene_ItemBase.md#itemtargetactors---game_actor)
* [onActorCancel ()](Scene_ItemBase.md#onactorcancel-)
* [onActorOk ()](Scene_ItemBase.md#onactorok-)
* [showActorWindow ()](Scene_ItemBase.md#showactorwindow-)


### メソッド

#### categoryWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** カテゴリウィンドウの矩形範囲を返す。


#### create ()
オーバーライド: [Scene_ItemBase](Scene_ItemBase.md#create-)


#### createCategoryWindow ()
カテゴリウィンドウを生成。


#### createItemWindow ()
アイテムウィンドウを生成。


#### initialize ()
オーバーライド: [Scene_ItemBase](Scene_ItemBase.md#initialize-)


#### itemWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** アイテムウィンドウの矩形範囲を返す。


#### onCategoryOk ()
カテゴリが決定された時に呼ばれるハンドラ。


#### onItemCancel ()
アイテムがキャンセルされた時に呼ばれるハンドラ。


#### onItemOk ()
アイテムが決定された時に呼ばれるハンドラ。


#### playSeForItem ()
[アイテム使用]に設定された音を再生。


#### useItem ()
オーバーライド: [Scene_ItemBase](Scene_ItemBase.md#useitem-)


#### user () → {[Game_Actor](Game_Actor.md)}
オーバーライド: [Scene_ItemBase](Scene_ItemBase.md#user---game_actor)<br />
行動可能なメンバーの中でpha(薬効果率)が一番高い Game_Actor を返す。


