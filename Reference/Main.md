[クラスツリー](index.md)

# クラス: Main

**@MZ**
メインクラス。main.js で設定されている。

MVでは [SceneManager](SceneManager.md) の `run(Scene_Boot)` に丸投げされていた初期化処理をある程度分離したもの。

v1.4.4 で変更あり。

関連クラス: [Scene_Boot](Scene_Boot.md)

### new Main ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `xhrSucceeded` | Boolean | XMLHttpRequest が成功したか |
| `loadCount` | [Number](Number.md) | スクリプトの読み込み数 |
| `error` | Object | エラーイベント |
| `numScripts` | [Number](Number.md) | スクリプトの数 |


### メソッド

#### eraseLoadingSpinner ()
ローディングスピナー(読み込みアニメ)を消す。


#### hookNwjsClose ()
**@MZ1.4.4** NW.js を確実に閉じるためのフックをセット。


#### initEffekseerRuntime ()
Effekseer ランタイムの初期化。


#### isPathRandomized ()
ゲートキーパーがパスを乱数化しているか。


#### loadMainScripts ()
コアスクリプトを読み込む。


#### makeErrorHtml (name, message) → {[String](String.md)}
エラー表示用HTML(div要素)を生成して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md)  | エラーの名前 |
| `message` | [String](String.md)  | エラーメッセージ |


#### onEffekseerError()
Effekseer 読み込みエラー発生時のハンドラ。


#### onEffekseerLoad ()
Effekseer 読み込み完了時のハンドラ。


#### onScriptError (e)
JavaScript 読み込みエラー発生時のハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `e` | Error | エラー |


#### onScriptLoad ()
JavaScript 読み込み完了時のハンドラ。


#### onWindowError (event)
ウィンドウ読み込みエラー発生時のハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | Object | エラーイベント |


#### onWindowLoad ()
ウィンドウ読み込み完了時のハンドラ。


#### printError (name, message) 
エラー表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md)  | エラーの名前 |
| `message` | [String](String.md)  | エラーメッセージ |


#### run ()
実行開始。


#### showLoadingSpinner ()
ローディングスピナー(読み込みアニメ)を出す。


#### testXhr ()
XMLHttpRequest のテスト。

