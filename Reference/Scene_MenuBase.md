[クラスツリー](index.md)

# クラス: Scene_MenuBase

## スーパークラス: [Scene_Base](Scene_Base.md)

### new Scene_MenuBase ()
 メニュー型シーンの基礎クラス。

### サブクラス

* [Scene_Debug](Scene_Debug.md)
* [Scene_Equip](Scene_Equip.md)
* [Scene_GameEnd](Scene_GameEnd.md)
* [Scene_Menu](Scene_Menu.md)
* [Scene_Name](Scene_Name.md)
* [Scene_Options](Scene_Options.md)
* [Scene_Shop](Scene_Shop.md)
* [Scene_Status](Scene_Status.md)
* [Scene_File](Scene_File.md)
* [Scene_ItemBase](Scene_ItemBase.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_actor` | [Game_Actor](Game_Actor.md) |  選択されているアクター |
| `_backgroundSprite` | [Sprite](Sprite.md) |  シーンの背景となるスプライト |
| `_helpWindow` | [Window_Help](Window_Help.md) |  シーンに付加されるヘルプウィンドウ |
| `_backgroundFilter` | PIXI.filters.BlurFilter |  **@MZ** シーンの背景用のフィルタ |
| `_cancelButton` | [Sprite_Button](Sprite_Button.md) |  **@MZ** キャンセルボタン |
| `_pageupButton` | [Sprite_Button](Sprite_Button.md) |  **@MZ** ページアップボタン |
| `_pagedownButton` | [Sprite_Button](Sprite_Button.md) |  **@MZ** ページダウンボタン |


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
* [isActive () ](Scene_Base.md#isactive---boolean)
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


### メソッド

#### actor () → {[Game_Actor](Game_Actor.md)}
現在のアクターを返す。


#### arePageButtonsEnabled () → {Boolean}
**@MZ** ページボタンが利用可能か。


#### create ()
オーバーライド: [Scene_Base](Scene_Base.md#create-)


#### createButtons ()
**@MZ** ボタンを生成。


#### createCancelButton ()
**@MZ** キャンセルボタンを生成


#### createHelpWindow ()
ヘルプウィンドウを生成。


#### createPageButtons ()
**@MZ** ページボタンを生成


#### helpAreaBottom() → {[Number](Number.md)}
**@MZ** [ヘルプ]領域の下辺座標を返す。


#### helpAreaHeight() → {[Number](Number.md)}
**@MZ** [ヘルプ]領域の高さを返す。


#### helpAreaTop() → {[Number](Number.md)}
**@MZ** [ヘルプ]領域の上辺座標を返す。


#### helpWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [ヘルプ]ウィンドウの矩形範囲を返す


#### mainAreaBottom() → {[Number](Number.md)}
**@MZ** メイン領域の下辺座標を返す。


#### mainAreaHeight() → {[Number](Number.md)}
**@MZ** メイン領域の高さを返す。


#### mainAreaTop() → {[Number](Number.md)}
**@MZ** メイン領域の上辺座標を返す。


#### initialize ()
オーバーライド: [Scene_Base](Scene_Base.md#initialize-)


#### nextActor ()
パーティの次のアクターに切り替える。


#### needsCancelButton () → {Boolean}
**@MZ** キャンセルボタンが必要か。


#### needsPageButtons () → {Boolean}
**@MZ** ページボタンが必要か。


#### onActorChange ()
アクターが切り替わった時に呼ばれるハンドラ。


#### previousActor ()
パーティの前のアクターに切り替える。


#### update ()
**@MZ** オーバーライド: [Scene_Base](Scene_Base.md#update-)


#### updatePageButtons ()
**@MZ** ページボタンをアップデート。


#### setBackgroundOpacity (opacity)
背景の不透明度を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `opacity` | [Number](Number.md) | 不透明度(0〜255) |


#### updateActor ()
現在のアクターをアップデート。
