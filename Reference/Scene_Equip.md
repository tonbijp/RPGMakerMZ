# Class: Scene_Equip

## Extends: [Scene_MenuBase](Scene_MenuBase.md)

### new Scene_Equip ()
[装備]シーン。

関連クラス: [RPG.EquipItem](RPG.EquipItem.md)<br />
関連シーン: [Scene_Menu](Scene_Menu.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_statusWindow` | [Window_EquipStatus](Window_EquipStatus.md) | ステータスウィンドウ |
| `_commandWindow` | [Window_EquipCommand](Window_EquipCommand.md) | コマンド選択ウィンドウ |
| `_slotWindow` | [Window_EquipSlot](Window_EquipSlot.md) | スロット選択ウィンドウ |
| `_itemWindow` | [Window_EquipItem](Window_EquipItem.md) | 装備選択ウィンドウ |


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
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [stop ()](Scene_Base.md#stop-)
* [terminate ()](Scene_Base.md#terminate-)
* [update ()](Scene_Base.md#update-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)

#### [Scene_MenuBase](Scene_MenuBase.md)

* [actor ()](Scene_MenuBase.md#actor---game_actor)
* [createHelpWindow ()](Scene_MenuBase.md#createhelpwindow-)
* [nextActor ()](Scene_MenuBase.md#nextactor-)
* [previousActor ()](Scene_MenuBase.md#previousactor-)
* [setBackgroundOpacity (opacity)](Scene_MenuBase.md#setbackgroundopacity-opacity)
* [start ()](Scene_Base.md#start-)
* [updateActor ()](Scene_MenuBase.md#updateactor-)


### Methods

#### commandClear ()
[全て外す]コマンド実行。


#### commandEquip ()
[装備]コマンド実行。


#### commandOptimize ()
[最強装備]コマンド実行。

#### create ()
Overrides: [Scene_MenuBase](Scene_MenuBase.md#create-)


#### createCommandWindow ()
コマンド選択ウィンドウの生成。


#### createItemWindow ()
装備選択ウィンドウの生成。


#### createSlotWindow ()
装備スロット選択ウィンドウの生成。


#### createStatusWindow ()
ステータスウィンドウの生成。

#### initialize ()
Overrides: [Scene_MenuBase](Scene_MenuBase.md#initialize-)


#### onActorChange ()
Overrides: [Scene_MenuBase](Scene_MenuBase.md#onactorchange-)


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