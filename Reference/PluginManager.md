# クラス: PluginManager
 プラグインを管理する静的クラス。

関連クラス: [JsonEx](JsonEx.md)


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `_path` | [String](String.md) | [static] プラグインフォルダのパス |
| `_scripts` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] スクリプト名の配列 |
| `_errorUrls` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] 読み込みエラーを記録した配列 |
| `_parameters` | Object | [static] パラメータのオブジェクト { スクリプト名: [Parameters](MV.PluginSettings.md#parameters), … } |


### メソッド

#### (static) checkErrors ()
 エラーを検査。


#### (static) loadScript (name)
プラグインファイルを読み込む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | ファイル名(拡張子.jsを含む) |


#### (static) onError (e)
エラーハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `e` | Event | エラーイベント |


#### (static) parameters (name) → {Object}
指定プラグイン名に対応するパラメータをオブジェクトで返す。<br />
返り値の内容は [MV.PluginSettings](MV.PluginSettings.md) の項目を参照。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) |  プラグイン名(英字の大小を区別しない) |


#### (static) setParameters (name, parameters)
 パラメータを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) |  プラグイン名(英字の大小を区別しない) |
| `parameters` | [Parameters](MV.PluginSettings.md#parameters) |  パラメータの[名前]と[値]の組み合わせ |


#### (static) setup (plugins)
 プラグインの初期化。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `plugins` | [Array](Array.md).&lt;[MV.PluginSettings](MV.PluginSettings.md)&gt; | プラグイン設定の配列 |




