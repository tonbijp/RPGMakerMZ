# Class: SceneManager
シーン( [Scene_Base](Scene_Base.md) の子孫クラス )を管理する静的クラス。
 
また、全体の update の基点になるクラス。

関連クラス: [Graphics](Graphics.md), [Bitmap](Bitmap.md), [AudioManager](AudioManager.md), [Input](Input.md), [TouchInput](TouchInput.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_scene` | [Scene_Base](Scene_Base.md) | [static] 現在のシーン |
| `_nextScene` | [Scene_Base](Scene_Base.md) | [static] 次のシーン |
| `_stack` | [Array](Array.md).&lt;Function&gt; | [static] シーンなどの履歴 |
| `_stopped` | Boolean | [static] 停止しているか|
| `_sceneStarted` | Boolean | [static] 開始しているか|
| `_exiting` | Boolean | [static] 抜けているか |
| `_previousClass` | Function | [static]前のシーンなど |
| `_backgroundBitmap` | [Bitmap](Bitmap.md) | [static] 背景画像 |
| `_screenWidth` | [Number](Number.md) | [static] ゲーム画面の幅(ピクセル) (規定値: 816) |
| `_screenHeight` | [Number](Number.md) | [static] ゲーム画面の高さ(ピクセル) (規定値: 624) |
| `_boxWidth` | [Number](Number.md) | [static] UI領域の幅(ピクセル) (規定値: 816) |
| `_boxHeight` | [Number](Number.md) | [static] UI領域の高さ(ピクセル) (規定値: 624) |
| `_deltaTime` | [Number](Number.md) | [static] 単位時間 |
| `_currentTime` | [Number](Number.md) | [static] 現在の時刻 |
| `_accumulator` | [Number](Number.md) | [static] _deltaTimeまでの経過時間 |


### Methods

#### (static) _getTimeInMsWithoutMobileSafari () → {[Number](Number.md)}
iOS Safari を除き、現在の時刻(ms)を返す。


#### (static) backgroundBitmap () → {[Bitmap](Bitmap.md)}
生成された背景用に(ぼかした)スナップショットを返す。


#### (static) catchException (e)
例外を受け取るハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `e` | Event | エラーイベント |


#### (static) changeScene ()
シーンの切り替え。


#### (static) checkFileAccess ()
ファイル操作ができない環境ならエラーを発生させる。


#### (static) checkPluginErrors ()
プラグインの検査。


#### (static) checkWebGL ()
WebGL が使えない環境ならエラーを発生させる。


#### (static) clearStack ()
履歴を消去。


#### (static) exit ()
シーン遷移を終了。


#### (static) goto (sceneClass)
指定したシーンに遷移。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) | 移動先のシーン |


#### (static) initAudio ()
音声の初期化。


#### (static) initGraphics ()
画像の初期化。


#### (static) initialize ()
初期化。


#### (static) initInput ()
入力の初期化。


#### (static) initNwjs ()
NW.js の初期化。


#### (static) isCurrentSceneBusy () → {Boolean}
シーンの実行中か。


#### (static) isCurrentSceneStarted () → {Boolean}
現在のシーンが開始されているか。


#### (static) isNextScene (sceneClass) → {Boolean}
指定したシーンが次のシーンか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) | 比較するシーン |


#### (static) isPreviousScene (sceneClass) → {Boolean}
指定したシーンが前のシーンか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) | 比較するシーン  |


#### (static) isSceneChanging () → {Boolean}
 シーンの変更中か。


#### (static) onError (e)
エラーハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `e` | Event |  エラーイベント |


#### (static) onKeyDown (event)
キー押下イベントハンドラ。ここではリロード(F5)とデバッグウィンドウ(F8)の制御を行なっている。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent | キーボードイベント |


#### (static) onSceneCreate ()
シーンが生成された時に呼ばれるハンドラ。


#### (static) onSceneLoading ()
シーンが読み込まれる時に呼ばれるハンドラ。


#### (static) onSceneStart ()
シーンが開始された時に呼ばれるハンドラ。


#### (static) pop ()
 履歴からシーンを取り出して遷移。


#### (static) preferableRendererType () → {[String](String.md)}
環境に適したレンダ方式(canvas, webgl, auto のいずれか)を返す。


#### (static) prepareNextScene ()
次のシーンの準備。


#### (static) push (sceneClass)
指定したシーンに遷移し履歴を残す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) | 遷移先のシーン |


#### (static) renderScene ()
シーンの描画。


#### (static) requestUpdate ()
アップデートを要求。


#### (static) resume ()
停止状態から復帰。


#### (static) run (sceneClass)
指定したシーンの実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) |  実行するシーン |


#### (static) setupErrorHandlers ()
エラーハンドラを準備。


#### (static) shouldUseCanvasRenderer () → {Boolean}
canvas レンダ方式を使っているか。


#### (static) snap () → {[Bitmap](Bitmap.md)}
スナップショットを返す。


#### (static) snapForBackground ()
 背景用に(ぼかした)スナップショットを生成。


#### (static) stop ()
 シーン遷移を停止。


#### (static) terminate ()
 終了。


#### (static) tickEnd ()
フレームの終了を記録。


#### (static) tickStart ()
FPSMeter を使いフレームの開始を記録。


#### (static) update ()
 フレーム毎のアップデート。


#### (static) updateInputData ()
 入力データのアップデート。


#### (static) updateMain ()
 主要部分のアップデート。


#### (static) updateManagers ()
 マネージャのアップデート。


#### (static) updateScene ()
 シーンのアップデート。


