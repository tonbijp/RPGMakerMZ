[クラスツリー](index.md)

# クラス: Scene_Map

## スーパークラス: [Scene_Message](Scene_Message.md)

マップ表示シーン。

MVでは [Scene_Base](Scene_Base.md) がスーパークラスだったが [Scene_Message](Scene_Message.md) に変更されている。

主なパス
```js
SceneManager._scene
```

v1.5.0、v1.8.0 で変更あり。

関連クラス: [SceneManager](SceneManager.md), [Tilemap](Tilemap.md),  [Game_Timer](Game_Timer.md), [Game_Screen](Game_Screen.md), [Game_Map](Game_Map.md)<br />
関連シーン: [Scene_Title](Scene_Title.md), [Scene_Boot](Scene_Boot.md), [Scene_ItemBase](Scene_ItemBase.md), [Scene_Battle](Scene_Battle.md), [Scene_Load](Scene_Load.md)

### new Scene_Map ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `menuCalling` | Boolean | メニューが呼ばれているか |
| `_waitCount` | [Number](Number.md) | 待ちカウント |
| `_encounterEffectDuration` | [Number](Number.md) | エンカウント効果残り時間 |
| `_mapLoaded` | Boolean | マップが読み込まれているか |
| `_touchCount` | [Number](Number.md) | タッチ時間 |
| `_transfer` | Boolean | 遷移中か |
| `_spriteset` | [Spriteset_Map](Spriteset_Map.md) | スプライトセット |
| `_mapNameWindow` | [Window_MapName](Window_MapName.md) | マップ名表示ウィンドウ |

### 廃止MVプロパティ
`_scrollTextWindow`, `_messageWindow` 


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
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateColorFilter ()](Scene_Base.md#updatecolorfilter-)
* [updateFade ()](Scene_Base.md#updatefade-)

#### [Scene_Message](Scene_Message.md)

* [associateWindows ()](Scene_Message.md#associatewindows-)
* [createAllWindows ()](Scene_Message.md#createallwindows-)
* [createChoiceListWindow ()](Scene_Message.md#createchoicelistwindow-)
* [createEventItemWindow ()](Scene_Message.md#createeventitemwindow-)
* [createGoldWindow ()](Scene_Message.md#creategoldwindow-)
* [createMessageWindow ()](Scene_Message.md#createmessagewindow-)
* [createNameBoxWindow ()](Scene_Message.md#createnameboxwindow-)
* [createNumberInputWindow ()](Scene_Message.md#createnumberinputwindow-)
* [createScrollTextWindow ()](Scene_Message.md#createscrolltextwindow-)
* [eventItemWindowRect()](Scene_Message.md#eventitemwindowrect--rectangle)
* [goldWindowRect()](Scene_Message.md#goldwindowrect--rectangle)
* [isMessageWindowClosing ()](Scene_Message.md#ismessagewindowclosing---boolean)
* [messageWindowRect()](Scene_Message.md#messagewindowrect--rectangle)
* [scrollTextWindowRect()](Scene_Message.md#scrolltextwindowrect--rectangle)


### メソッド

#### callMenu ()
 メニューの呼び出し。


#### create ()
オーバーライド: [Scene_Base](Scene_Base.md#create-)


#### createAllWindows ()
 ウィンドウを生成。


#### createButtons ()
**@MZ** ボタンを生成。


#### createMenuButton ()
**@MZ** メニューのボタンを生成。


#### createDisplayObjects ()
 シーンに必要な全表示オブジェクトを生成。


#### createMapNameWindow ()
 マップ名表示ウィンドウ生成。


#### createSpriteset ()
 マップスプライト([Spriteset_Map](Spriteset_Map.md))を生成。


#### encounterEffectSpeed () → {[Number](Number.md)}
 エンカウント効果のスピード(規定値:60)を返す。


#### fadeInForTransfer ()
 遷移時のフェードイン。


#### fadeOutForTransfer ()
 遷移時のフェードアウト。


#### hideMenuButton ()
**@MZ** メニューのボタンを隠す。
 

#### initialize ()
オーバーライド: [Scene_Message](Scene_Message.md#initialize-)


#### isBusy () → {Boolean}
オーバーライド: [Scene_Base](Scene_Base.md#isbusy---boolean)


#### isDebugCalled () → {Boolean}
 デバッグウィンドウが呼ばれているか。


#### isFastForward () → {Boolean}
 早送りモードか。


#### isMapTouchOk () → {Boolean}
 タッチ移動が可能か。


#### isAnyButtonPressed () → {Boolean}
**@MZ** いずれかのボタンか押されているか。


#### isMenuCalled () → {Boolean}
 メニューが呼ばれているか。


#### isMenuEnabled () → {Boolean}
 メニュー使用可か。


#### isPlayerActive () → {Boolean}
**@MZ** プレイヤーが操作できる状態か。


#### isReady () → {Boolean}
オーバーライド: [Scene_Base](Scene_Base.md#isready---boolean)


#### isSceneChangeOk () → {Boolean}
 シーンの変更可能か。


#### launchBattle ()
 戦闘シーンの開始。


#### mapNameWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** マップ名ウィンドウの矩形範囲を返す。


#### needsFadeIn () → {Boolean}
 フェードインするか。


#### needsSlowFadeOut () → {Boolean}
 フェードアウトするか。


#### onMapLoaded ()
 シーンの読み込みが完了した時のハンドラ。


#### onTransfer ()
**@MZ** マップ遷移開始時のハンドラ。


#### onTransferEnd ()
**@MZ** マップ遷移終了時のハンドラ。


#### processMapTouch ()
 タッチをキャラクタの移動に変換。


#### shouldAutosave () → {Boolean}
**@MZ** オートセーブする必要があるか。


#### snapForBattleBackground ()
 戦闘背景が指定されていない場合の、マップのスナップショット表示。


#### start ()
オーバーライド: [Scene_Base](Scene_Base.md#start-)


#### startEncounterEffect ()
 エンカウント時の効果の表示開始。


#### startFlashForEncounter (duration)
 エンカウント時のフラッシュ開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |


#### stop ()
オーバーライド: [Scene_Base](Scene_Base.md#stop-)


#### stopAudioOnBattleStart ()
 戦闘開始前の音声の停止。


#### terminate ()
オーバーライド: [Scene_Base](Scene_Base.md#terminate-)


#### update ()
オーバーライド: [Scene_Base](Scene_Base.md#update-)


#### updateCallDebug ()
 デバッグウィンドウ呼び出しの更新。


#### updateCallMenu ()
 メニュー呼び出しの更新。


#### updateDestination ()
 タッチ位置表示を更新。


#### updateEncounter ()
 エンカウントを更新。


#### updateEncounterEffect ()
 エンカウント時の効果の更新。


#### updateMain ()
[$gameMap](global.md#gamemap-game_map), [$gamePlayer](global.md#gameplayer-game_player), [$gameTimer](global.md#gametimer-game_timer), [$gameScreen](global.md#gamescreen-game_screen) を更新。


#### updateMainMultiply ()
 メインを更新。早送りモードだと2度更新。


#### updateMapNameWindow ()
**@MZ** マップ名ウィンドウを更新。


#### updateMenuButton ()
**@MZ** メニューのボタンを更新。


#### updateScene ()
 シーンの更新。


#### updateTransferPlayer ()
 プレイヤーのマップ移動の更新。


#### updateWaitCount () → {Boolean}
 待ちカウントを更新。
 
 ### 廃止MVメソッド
 createMessageWindow (), createScrollTextWindow ()
