[クラスツリー](index.md)

# クラス: Scene_Equip

## スーパークラス: [Scene_MenuBase](Scene_MenuBase.md)

### new Scene_Equip ()
[装備]シーン。

主なパス
```js
SceneManager._scene
```

関連クラス: [SceneManager](SceneManager.md), [RPG.EquipItem](RPG.EquipItem.md)<br />
関連シーン: [Scene_Menu](Scene_Menu.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_statusWindow` | [Window_EquipStatus](Window_EquipStatus.md) | ステータスウィンドウ |
| `_commandWindow` | [Window_EquipCommand](Window_EquipCommand.md) | コマンド選択ウィンドウ |
| `_slotWindow` | [Window_EquipSlot](Window_EquipSlot.md) | スロット選択ウィンドウ |
| `_itemWindow` | [Window_EquipItem](Window_EquipItem.md) | 装備選択ウィンドウ |


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
* [mainCommandWidth ()](Scene_Base.md#maincommandwidth---number)
* [onAutosaveFailure ()](Scene_Base.md#onautosavefailure-)
* [onAutosaveSuccess ()](Scene_Base.md#onautosavesuccess-)
* [popScene ()](Scene_Base.md#popscene-)
* [requestAutosave ()](Scene_Base.md#requestautosave-)
* [scaleSprite (sprite)](Scene_Base.md#scalesprite-sprite)
* [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
* [start ()](Scene_Base.md#start-)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [stop ()](Scene_Base.md#stop-)
* [terminate ()](Scene_Base.md#terminate-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateColorFilter ()](Scene_Base.md#updatecolorfilter-)
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
* [previousActor ()](Scene_MenuBase.md#previousactor-)
* [setBackgroundOpacity (opacity)](Scene_MenuBase.md#setbackgroundopacity-opacity)
* [update ()](Scene_MenuBase.md#update-)
* [updateActor ()](Scene_MenuBase.md#updateactor-)
* [updatePageButtons ()](Scene_MenuBase.md#updatepagebuttons-)

### メソッド

#### arePageButtonsEnabled () → {Boolean}
**@MZ** ページボタンが利用可能か。


#### commandClear ()
[全て外す]コマンド実行。


#### commandEquip ()
[装備]コマンド実行。


#### commandOptimize ()
[最強装備]コマンド実行。


#### commandWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** コマンド選択ウィンドウの矩形範囲を返す。


#### create ()
オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#create-)


#### createCommandWindow ()
コマンド選択ウィンドウの生成。


#### createItemWindow ()
装備選択ウィンドウの生成。


#### createSlotWindow ()
装備スロット選択ウィンドウの生成。


#### createStatusWindow ()
ステータスウィンドウの生成。


#### executeEquipChange ()
**@MZ** 現在選択している装備への変更。


#### hideItemWindow ()
**@MZ** アイテムウィンドウを隠す。


#### initialize ()
オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#initialize-)


#### itemWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** アイテムウィンドウの矩形範囲を返す。


#### needsPageButtons () → {Boolean}
**@MZ** ページボタンが必要か。


#### onActorChange ()
オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#onactorchange-)


#### onItemCancel ()
装備の選択がキャンセルされた時に呼ばれるハンドラ。


#### onItemOk ()
装備の選択が決定された時に呼ばれるハンドラ。


#### onSlotCancel ()
スロットの選択がキャンセルされた時に呼ばれるハンドラ。


#### onSlotOk ()
スロットの選択が決定された時に呼ばれるハンドラ。


#### refreshActor ()
アクターを再描画。


#### slotWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** 装備スロット選択ウィンドウの矩形範囲を返す。


#### statusWidth () → {[Number](Number.md)}
**@MZ** ステータスウィンドウの幅(規定値:312)を返す。


#### statusWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** ステータスウィンドウの矩形範囲を返す。

