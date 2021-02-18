[クラスツリー](index.md)

# クラス: Scene_Shop

## スーパークラス: [Scene_MenuBase](Scene_MenuBase.md)

### new Scene_Shop ()
[ショップの処理]のシーン。

関連クラス: [SceneManager](SceneManager.md), [Game_Interpreter](Game_Interpreter.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_goods` | [Array](Array.md).&lt;[Array](Array.md).&lt;*&gt;&gt; | 商品の配列 |
| `_purchaseOnly` | Boolean | [購入のみ]か |
| `_item` | [RPG.BaseItem](RPG.BaseItem.md) | 選択中のアイテム |
| `_goldWindow` | [Window_Gold](Window_Gold.md) | 所持金ウィンドウ |
| `_commandWindow` | [Window_ShopCommand](Window_ShopCommand.md) | コマンドウィンドウ |
| `_dummyWindow` | [Window_Base](Window_Base.md) | ダミーウィンドウ |
| `_numberWindow` | [Window_ShopNumber](Window_ShopNumber.md) | 個数ウィンドウ |
| `_statusWindow` | [Window_ShopStatus](Window_ShopStatus.md) | ステータスウィンドウ |
| `_buyWindow` | [Window_ShopBuy](Window_ShopBuy.md) | 購入ウィンドウ |
| `_categoryWindow` | [Window_ItemCategory](Window_ItemCategory.md) | カテゴリウィンドウ |
| `_sellWindow` | [Window_ShopSell](Window_ShopSell.md) | 売却ウィンドウ |


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


### メソッド

#### activateBuyWindow ()
購入ウィンドウをアクティベート。


#### activateSellWindow ()
売却ウィンドウをアクティベート。


#### buyingPrice () → {[Number](Number.md)}
選択中のアイテムの購入金額を返す。


#### buyWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** 購入ウィンドウの矩形範囲を返す。


#### categoryWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** カテゴリウィンドウの矩形範囲を返す。


#### commandBuy ()
[購入する]を実行。


#### commandSell ()
[売却する]を実行。


#### commandWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** コマンドウィンドウの矩形範囲を返す。


#### create ()
オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#create-)


#### createBuyWindow ()
購入ウィンドウを生成。


#### createCategoryWindow ()
カテゴリウィンドウを生成。


#### createCommandWindow ()
コマンドウィンドウを生成。


#### createDummyWindow ()
ダミーウィンドウを生成。


#### createGoldWindow ()
所持金ウィンドウを生成。


#### createNumberWindow ()
数量ウィンドウを生成。


#### createSellWindow ()
売却ウィンドウを生成。


#### createStatusWindow ()
ステータスウィンドウを生成。


#### currencyUnit () → {[String](String.md)}
通貨単位を返す。


#### doBuy (number)
指定個数の購入を実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `number` | [Number](Number.md) | 個数 |


#### doSell (number)
指定個数の売却を実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `number` | [Number](Number.md) | 個数 |


#### dummyWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** ダミーウィンドウの矩形範囲を返す。


#### endNumberInput ()
個数の入力を終了。


#### goldWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** 所持金ウィンドウの矩形範囲を返す。


#### initialize ()
オーバーライド: [Scene_MenuBase](Scene_MenuBase.md#initialize-)


#### maxBuy () → {[Number](Number.md)}
最大購入個数を返す。


#### maxSell () → {[Number](Number.md)}
最大売却個数を返す。


#### money () → {[Number](Number.md)}
所持金を返す。


#### numberWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** 数量ウィンドウの矩形範囲を返す。


#### onBuyCancel ()
購入がキャンセルされた時に呼ばれるハンドラ。


#### onBuyOk ()
購入が決定された時に呼ばれるハンドラ。


#### onCategoryCancel ()
カテゴリがキャンセルされた時に呼ばれるハンドラ。


#### onCategoryOk ()
カテゴリが決定された時に呼ばれるハンドラ。


#### onNumberCancel ()
個数入力がキャンセルされた時に呼ばれるハンドラ。


#### onNumberOk ()
個数が決定された時に呼ばれるハンドラ。


#### onSellCancel ()
売却がキャンセルされた時に呼ばれるハンドラ。


#### onSellOk ()
売却が決定された時に呼ばれるハンドラ。


#### prepare (goods, purchaseOnly)
[ショップの処理]を実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `goods` | [Array](Array.md).&lt;[Array](Array.md).&lt;*&gt;&gt; | 商品の配列 |
| `purchaseOnly` | Boolean | 購入のみか |


#### sellingPrice () → {[Number](Number.md)}
現在のアイテムの売却金額を返す。


#### sellWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** 売却ウィンドウの矩形範囲を返す。


#### statusWindowRect() → {[Rectangle](Rectangle.md)}
**@MZ** ステータスウィンドウの矩形範囲を返す。

