# Class: Scene_ItemBase

## Extends: [Scene_MenuBase](Scene_MenuBase.md)

### new Scene_ItemBase ()
[アイテム][スキル]の使用シーン。

関連クラス: [Game_Action](Game_Action.md)<br />
関連シーン: [Scene_Map](Scene_Map.md)

### Sub Classes

* [Scene_Item](Scene_Item.md)
* [Scene_Skill](Scene_Skill.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_actorWindow` | [Window_MenuActor](Window_MenuActor.md) | アクター選択ウィンドウ |
| `_itemWindow` | [Window_Selectable](Window_Selectable.md) | アイテム・スキル選択ウィンドウ |


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
* [onActorChange ()](Scene_MenuBase.md#onactorchange-)
* [previousActor ()](Scene_MenuBase.md#previousactor-)
* [setBackgroundOpacity (opacity)](Scene_MenuBase.md#setbackgroundopacity-opacity)
* [start ()](Scene_Base.md#start-)
* [updateActor ()](Scene_MenuBase.md#updateactor-)


### Methods

#### activateItemWindow ()
アイテムウィンドウをアクティベート。


#### applyItem ()
アイテムの効果を適用。

#### canUse () → {Boolean}
選択中のアイテムが選択中のアクターに使用可能か。


#### checkCommonEvent ()
[コモンイベント]をチェックして [Scene_Map](Scene_Map.md) に遷移。


#### createActorWindow ()
アクターウィンドウを生成。


#### create ()
Overrides: [Scene_MenuBase](Scene_MenuBase.md#create-)


#### determineItem ()
選択中のアイテムを選択中のアクターに使用。


#### hideSubWindow (window)
指定サブウィンドウを隠す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `window` | [Window_Base](Window_Base.md) | サブウィンドウ |


#### initialize ()
Overrides: [Scene_MenuBase](Scene_MenuBase.md#initialize-)


#### isCursorLeft () → {Boolean}
カーソルが左にあるか。


#### isItemEffectsValid () → {Boolean}
選択中のアイテムが選択中のアクターに効果があるか。


#### item () → {[RPG.UsableItem](RPG.UsableItem.md)} 
アイテムウィンドウに追加されているアイテムを返す。


#### itemTargetActors () → {[Game_Actor](Game_Actor.md)}
対象のアクターを返す。


#### onActorCancel ()
アクターがキャンセルされた時に呼ばれるハンドラ。


#### onActorOk ()
アクターが決定された時に呼ばれるハンドラ。


#### showSubWindow (window)
指定したサブウィンドウを表示。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `window` | [Window_Base](Window_Base.md) | サブウィンドウ |


#### useItem ()
選択中のアイテムを使用。


#### user () → {[Game_Actor](Game_Actor.md)}
現在のアクターを返す。


