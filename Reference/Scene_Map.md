# Class: Scene_Map

## Extends: [Scene_Base](Scene_Base.md)

### new Scene_Map ()
マップ表示シーン。

関連クラス: [Tilemap](Tilemap.md), [ShaderTilemap](ShaderTilemap.md), [Game_Timer](Game_Timer.md), [Game_Screen](Game_Screen.md)<br />
関連シーン: [Scene_Title](Scene_Title.md), [Scene_Boot](Scene_Boot.md), [Scene_ItemBase](Scene_ItemBase.md), [Scene_Battle](Scene_Battle.md), [Scene_Load](Scene_Load.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `menuCalling` | Boolean | メニューが呼ばれているか |
| `_waitCount` | [Number](Number.md) | 待ちカウント |
| `_encounterEffectDuration` | [Number](Number.md) | エンカウント効果残り時間 |
| `_mapLoaded` | Boolean | マップが読み込まれているか |
| `_touchCount` | [Number](Number.md) | タッチ時間 |
| `_transfer` | Boolean | 遷移中か |
| `_spriteset` | [Spriteset_Map](Spriteset_Map.md) | スプライトセット |
| `_mapNameWindow` | [Window_MapName](Window_MapName.md) | マップ名表示ウィンドウ |
| `_scrollTextWindow` | [Window_ScrollText](Window_ScrollText.md) | スクロール表示ウィンドウ |
| `_messageWindow` | [Window_Message](Window_Message.md) | メッセージウィンドウ |


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
* [start ()](Scene_Base.md#start-)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [stop ()](Scene_Base.md#stop-)
* [terminate ()](Scene_Base.md#terminate-)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)


### Methods

#### callMenu ()
 メニューの呼び出し。


#### create ()
Overrides: [Scene_Base](Scene_Base.md#create-)


#### createAllWindows ()
 ウィンドウを生成。


#### createDisplayObjects ()
 シーンに必要な全表示オブジェクトを生成。


#### createMapNameWindow ()
 マップ名表示ウィンドウ生成。


#### createMessageWindow ()
 メッセージウィンドウ生成。


#### createScrollTextWindow ()
 スクロールテキストウィンドウの生成。


#### createSpriteset ()
 マップスプライト([Spriteset_Map](Spriteset_Map.md))を生成。


#### encounterEffectSpeed () → {[Number](Number.md)}
 エンカウント効果のスピード(規定値:60)を返す。


#### fadeInForTransfer ()
 遷移時のフェードイン。


#### fadeOutForTransfer ()
 遷移時のフェードアウト。
 

#### initialize ()
Overrides: [Scene_Base](Scene_Base.md#initialize-)


#### isBusy () → {Boolean}
Overrides: [Scene_Base](Scene_Base.md#isbusy---boolean)


#### isDebugCalled () → {Boolean}
 デバッグウィンドウが呼ばれているか。


#### isFastForward () → {Boolean}
 早送りモードか。


#### isMapTouchOk () → {Boolean}
 タッチ移動が可能か。


#### isMenuCalled () → {Boolean}
 メニューが呼ばれているか。


#### isMenuEnabled () → {Boolean}
 メニュー使用可か。


#### isReady () → {Boolean}
Overrides: [Scene_Base](Scene_Base.md#isready---boolean)


#### isSceneChangeOk () → {Boolean}
 シーンの変更可能か。


#### launchBattle ()
 戦闘シーンの開始。


#### needsFadeIn () → {Boolean}
 フェードインするか。


#### needsSlowFadeOut () → {Boolean}
 フェードアウトするか。


#### onMapLoaded ()
 シーンの読み込みが完了した時に呼ばれるハンドラ。


#### processMapTouch ()
 タッチをキャラクタの移動に変換。


#### snapForBattleBackground ()
 戦闘背景が指定されていない場合の、マップのスナップショット表示。


#### start ()
Overrides: [Scene_Base](Scene_Base.md#start-)


#### startEncounterEffect ()
 エンカウント時の効果の表示開始。


#### startFlashForEncounter (duration)
 エンカウント時のフラッシュ開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |


#### stop ()
Overrides: [Scene_Base](Scene_Base.md#stop-)


#### stopAudioOnBattleStart ()
 戦闘開始前の音声の停止。


#### terminate ()
Overrides: [Scene_Base](Scene_Base.md#terminate-)


#### update ()
Overrides: [Scene_Base](Scene_Base.md#update-)


#### updateCallDebug ()
 デバッグウィンドウを呼ぶアップデート。


#### updateCallMenu ()
 メニュー呼び出しのアップデート。


#### updateDestination ()
 タッチ位置表示をアップデート。


#### updateEncounter ()
 エンカウントをアップデート。


#### updateEncounterEffect ()
 エンカウント時の効果のアップデート。


#### updateMain ()
[$gameMap](global.md#gamemap-game_map), [$gamePlayer](global.md#gameplayer-game_player), [$gameTimer](global.md#gametimer-game_timer), [$gameScreen](global.md#gamescreen-game_screen) をアップデート。


#### updateMainMultiply ()
 メインをアップデート。早送りモードだと2度アップデート。


#### updateScene ()
 シーンのアップデート。


#### updateTransferPlayer ()
 プレイヤーのマップ移動のアップデート。


#### updateWaitCount () → {Boolean}
 待ちカウントをアップデート。
 
 