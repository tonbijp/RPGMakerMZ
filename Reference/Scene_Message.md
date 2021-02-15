[クラスツリー](index.md)

# クラス: Scene_Message

## スーパークラス: [Scene_Base](Scene_Base.md)

### new Scene_Message ()
**@MZ** メッセージウィンドウを持つシーン。

関連クラス: [SceneManager](SceneManager.md)

### サブクラス

* [Scene_Battle](Scene_Battle.md)
* [Scene_Map](Scene_Map.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_choiceListWindow` | [Window_ChoiceList](Window_ChoiceList.md) | 選択肢ウィンドウ |
| `_eventItemWindow` | [Window_EventItem](Window_EventItem.md) | イベントアイテムウィンドウ |
| `_goldWindow` | [Window_Gold](Window_Gold.md) | 所持金ウィンドウ |
| `_messageWindow` | [Window_Message](Window_Message.md) | メッセージウィンドウ |
| `_nameBoxWindow` | [Window_NameBox](Window_NameBox.md) | 名前ウィンドウ |
| `_numberInputWindow` | [Window_NumberInput](Window_NumberInput.md) | 数値入力ウィンドウ |
| `_scrollTextWindow` | [Window_ScrollText](Window_ScrollText.md) | スクロールテキストウィンドウ |


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
* [popScene ()](Scene_Base.md#popscene-)
* [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [stop ()](Scene_Base.md#stop-)
* [terminate ()](Scene_Base.md#terminate-)
* [update ()](Scene_Base.md#update-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)


### メソッド

#### associateWindows ()
ウィンドウを結合。


#### createAllWindows ()
全ウィンドウの生成。


#### createChoiceListWindow ()
選択肢ウィンドウの生成。


#### createEventItemWindow ()
イベントアイテムウィンドウの生成。


#### createGoldWindow ()
所持金ウィンドウの生成。


#### createMessageWindow ()
メッセージウィンドウの生成。


#### createNameBoxWindow ()
名前ウィンドウの生成。


#### createNumberInputWindow ()
数値入力ウィンドウの生成。


#### createScrollTextWindow ()
スクロールテキストウィンドウの生成。


#### eventItemWindowRect() → {[Rectangle](Rectangle.md)}
イベントアイテムウィンドウの矩形範囲を返す。


#### goldWindowRect() → {[Rectangle](Rectangle.md)}
所持金ウィンドウの矩形範囲を返す。


#### isMessageWindowClosing () → {Boolean}
メッセージウィンドウが閉じているところか。


#### initialize ()
オーバーライド: [Scene_Base](Scene_Base.md#initialize-)


#### messageWindowRect() → {[Rectangle](Rectangle.md)}
メッセージウィンドウの矩形範囲を返す。


#### scrollTextWindowRect() → {[Rectangle](Rectangle.md)}
スクロールテキストウィンドウの矩形範囲を返す。
