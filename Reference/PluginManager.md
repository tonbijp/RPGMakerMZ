[クラスツリー](index.md)

# クラス: PluginManager
 プラグインを管理する静的クラス。

 公式プラグイン PluginCommonBase.js によって追加される[PluginManagerEx](PluginManagerEx.md) は、このクラスの強化版。

関連クラス: [JsonEx](JsonEx.md)


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `_scripts` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] プラグイン名の配列 |
| `_errorUrls` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] 読み込みエラーを記録した配列 |
| `_parameters` | Object.&lt;[Parameters](MV.PluginSettings.md#parameters)&gt; | [static] プラグイン名をキーとするパラメータのリスト |
| `_commands` | Object.&lt;Function&gt; | **@MZ** [static] "プラグイン名:コマンド名"をキーとする関数リスト |


### 廃止MVプロパティ
`_path`

### メソッド


#### (static) callCommand (self, pluginName, commandName, args)
**@MZ** コマンドを実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `self` | Function |  this に設定するスコープとなる関数 |
| `pluginName` | [String](String.md) |  プラグイン名(英字の大小を区別しない) |
| `commandName` | [String](String.md) |  コマンド名(英字の大小を区別しない) |
| `args` | [Array](Array.md) | コマンドに渡す引数 |


#### (static) checkErrors ()
 エラーを検査。


#### (static) makeUrl (filename)→ {String}
**@MZ** 指定ファイル名からURLを生成して返す。<br />
具体的には "js/plugins/ファイル名.js"

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.jsを含まない) |


#### (static) loadScript (filename)
プラグインファイルを読み込む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.jsを含まない) |


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


#### (static) registerCommand (pluginName, commandName, func)
**@MZ** コマンドを登録。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pluginName` | [String](String.md) |  プラグイン名(英字の大小を区別しない) |
| `commandName` | [String](String.md) |  コマンド名(英字の大小を区別しない) |
| `func` | Function |  コマンドの関数 |


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


#### (static) throwLoadError (url)
読み込みエラーを投げる。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `url` | [String](String.md) | ファイルURL |

