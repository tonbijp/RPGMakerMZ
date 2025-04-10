[クラスツリー](index.md)

# クラス: SceneManager
シーン( [Scene_Base](Scene_Base.md) の子孫クラス )を管理する静的クラス。
 
また、全体の update の基点になるクラス。

MZでは、他のクラスと被っている機能が廃止されている。<br />
環境チェック系は [Utils](Utils.md) にまとめられている。

v1.4.0 、v1.5.0 で変更あり。

関連クラス:   [Graphics](Graphics.md), [Bitmap](Bitmap.md), [AudioManager](AudioManager.md), [Input](Input.md), [TouchInput](TouchInput.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_scene` | [Scene_Base](Scene_Base.md) | [static] 現在のシーン(`Graphics.app.stage` と同じ) |
| `_nextScene` | [Scene_Base](Scene_Base.md) | [static] 次のシーン |
| `_stack` | [Array](Array.md).&lt;Function&gt; | [static] シーンなどの履歴 |
| `_exiting` | Boolean | [static] 抜けているか |
| `_previousScene` | [Scene_Base](Scene_Base.md)  | [static]前のシーン |
| `_previousClass` | Function | [static]前のシーンなど |
| `_backgroundBitmap` | [Bitmap](Bitmap.md) | [static] 背景画像 |
| `_smoothDeltaTime` | [Number](Number.md) | [static] 調整用フレーム間隔 |
| `_elapsedTime` | [Number](Number.md) | [static] 経過時間 |


### 廃止MVプロパティ
各種画面サイズは[RPG.System($dataSystem)](RPG.System.md)を参照する。

`_deltaTime`, `_currentTime`, `_accumulator`, `_stopped`, `_sceneStarted`, `_screenWidth`, `_screenHeight` , `_boxWidth`, `_boxHeight`


### メソッド


#### (static) backgroundBitmap () → {[Bitmap](Bitmap.md)}
生成された背景用に(ぼかした)スナップショットを返す。


#### (static) checkBrowser ()
**@MZ** ブラウザに必要な機能を検査して対応していない場合エラーを投げる。


#### (static) catchException (e)
エラーを受け取る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `e` | Event | エラーイベント |


#### (static) catchLoadError (e)
**@MZ** 読み込みエラーを受け取る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `e` | Event | エラーイベント |


#### (static) catchNormalError (e)
**@MZ** 通常のエラーを受け取る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `e` | Event | エラーイベント |


#### (static) catchUnknownError (e)
**@MZ** 不明なエラーを受け取る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `e` | Event | エラーイベント |


#### (static) changeScene ()
シーンの切り替え。


#### (static) checkPluginErrors ()
プラグインの検査。


#### (static) clearStack ()
履歴を消去。


#### (static) determineRepeatNumber (deltaTime) → {Number}
**@MZ** 遅延時間からループを回す回数を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `deltaTime` | [Number](Number.md) | 遅延時間 |


#### (static) exit ()
アプリケーション(NW.js)を終了。


#### (static) goto (sceneClass)
指定したシーンに遷移。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) | 移動先のシーン |


#### (static) initAudio ()
音声の初期化。


#### (static) initGraphics ()
画像の初期化。


#### (static) initVideo ()
**@MZ** 動画の初期化。


#### (static) initialize ()
初期化。


#### (static) initInput ()
入力の初期化。


#### (static) isCurrentSceneBusy () → {Boolean}
シーンの実行中か。


#### (static) isGameActive () → {Boolean}
ゲームがアクティブ(手前のウィンドウ)か。


#### (static) isNextScene (sceneClass) → {Boolean}
指定したシーンが次のシーンか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) | 比較するシーン |


#### (static) isPreviousScene (sceneClass) → {Boolean}
指定したシーンが前のシーンか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) | 比較するシーン  |


#### (static) isSceneChanging () → {Boolean}
 シーンの変更中か。


#### (static) onBeforeSceneStart ()
**@MZ** シーンがスタートする直前のハンドラ。


#### (static) onError (e)
エラーハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `e` | Event |  エラーイベント |


#### (static) onKeyDown (event)
キー押下イベントハンドラ。ここではリロード(F5)とデバッグウィンドウ(F8)の制御を行なっている。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | KeyboardEvent | キーボードイベント |


#### (static) onReject ()
**@MZ** エラー発生時のハンドラ。


#### (static) onSceneCreate ()
シーンが生成された時のハンドラ。


#### (static) onSceneStart ()
シーンが開始された時のハンドラ。


#### (static) onSceneTerminate ()
**@MZ** シーンが破棄された時のハンドラ。


#### (static) onUnload ()
**@MZ** ウィンドウが閉じられるなどアンロード時のハンドラ。


#### (static) pop ()
 履歴からシーンを取り出して遷移。


#### (static) prepareNextScene (args)
次のシーンの準備。引数はショップの品物など。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `args` | * | シーンによって異なる幾つかの引数 |


#### (static) push (sceneClass)
指定したシーンに遷移し履歴を残す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) | 遷移先のシーン |


#### (static) reloadGame ()
**@MZ** ゲームのリロード。


#### (static) resume ()
停止状態から復帰。


#### (static) run (sceneClass)
指定したシーンの実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sceneClass` | [Scene_Base](Scene_Base.md) |  実行するシーン |


#### (static) setupEventHandlers()
**@MZ** 各種ハンドラを準備。


#### (static) showDevTools ()
**@MZ** デベロッパーツールの表示。テスト時のみ。


#### (static) snap () → {[Bitmap](Bitmap.md)}
スナップショットを返す。


#### (static) snapForBackground ()
 背景用に(ぼかした)スナップショットを生成。


#### (static) stop ()
 シーン遷移を停止。


#### (static) terminate ()
 終了。


#### (static) update (deltaTime)
 フレーム毎の更新。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `deltaTime` | [Number](Number.md) | 遅延時間 |


#### (static) updateEffekseer ()
**@MZ** Effekseer の更新。


#### (static) updateFrameCount ()
**@MZ** フレームカウントを増やす。


#### (static) updateInputData ()
 入力データの更新。


#### (static) updateMain ()
 主要部分の更新。


#### (static) updateScene ()
 シーンの更新。


### 廃止MVメソッド

[static] checkFileAccess (), initNwjs ()

setupErrorHandlers ()
preferableRendererType ()

_getTimeInMsWithoutMobileSafari (), checkWebGL (), isCurrentSceneStarted (), onSceneLoading (), renderScene (),  requestUpdate (), shouldUseCanvasRenderer (), tickEnd (), tickStart (), updateManagers ()
