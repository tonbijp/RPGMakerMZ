[クラスツリー](index.md)

# クラス: PluginManagerEx
**@MZ PluginCommonBase.js** プラグインのコマンド登録などを扱う静的クラス。<br />
[PluginManager](PluginManager.md) の機能強化版。<br />
PluginCommonBase.js には他に [PluginParam](PluginParam.md), [TextConverter](TextConverter.md) クラスがあるが、PluginManagerEx から使われるものなので、特に意識する必要はない。<br />
また [Game_Event](Game_Event.md) および [Game_Map](Game_Map.md) には新規メソッドが追加されている。

※公式プラグイン PluginCommonBase.js は、ほぼコアスクリプト扱いしていいと思うので、含まれるクラスのページを作った。<br />
なお、PluginCommonBase.js はサンプルゲームに含まれているバージョンからアップデートされているので、"/dlc/BasicResources/plugins/official/" にあるファイルを使って欲しい。

関連クラス:  [Game_Switches](Game_Switches.md), [Game_Switches](Game_Switches.md), [Game_Variables](Game_Variables.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_selfSwitchKey ` | [Array](Array.md).&lt;*&gt;  | [static] セルフスイッチのキー[マップID, イベントID, タイプ] |

### メソッド

#### (static) convertVariables (text, data opt) → {*}
文字列内の制御文字を変換し、適切な型に変換して返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `text` | [String](String.md) | | 変換対象(文字列以外はそのまま返す) |
| `data` | Object | &lt;optional&gt; | (規定値:null) |


#### (static) convertEscapeCharacters (text, data opt) → {[String](String.md)}
文字列内の制御文字を変換して返す。<br />
このメソッドは、V×2,N,P,Gの変換、S,SSの変換、V×2,N,P,Gの変換を順に行う。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `text` | [String](String.md) | | 変換対象(文字列以外はそのまま返す) |
| `data` | Object | &lt;optional&gt; | (規定値:null) |


#### (static) convertEscapeCharactersEx (text, data opt) → {[String](String.md)}
文字列内の制御文字を変換して返す。
このメソッドは、S,SSの変換を行う。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `text` | [String](String.md) | | 変換対象(文字列以外はそのまま返す) |
| `data` | Object | &lt;optional&gt; | (規定値:null) |


#### (static) createParameter (currentScript) → {[PluginParam](PluginParam.md)}
対象プラグインのパラメータを型解析したのち返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `currentScript` | Object | 対象プラグイン(document.currentScript) |


#### (static) createCommandArgs (args) → {Object}
コマンド引数を型解析したのち返す。<br />
引数にオブジェクトを含む場合の返り値は [PluginParam](PluginParam.md) が返る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `args` | Object | 引数 |


#### (static) findMetaValue (object, nameList) → {*}
指定データベースのメモ欄のメタデータの値を返す。<br />
`nameList` は多言語に対応することを想定して複数のタグ名を指定できるが、タグが一種類のみなら単独の文字列でよい。<br />
先頭のタグから調べ、最初に見つかったタグの値のみ返す。

##### 例
```js
const metaValue = PluginManagerEx.findMetaValue( $dataActors[1], [ "englishTag", "日本語タグ"] );
```

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | [MetaData](RPG.MetaData.md) | メモ欄を持つデータベース |
| `nameList` | [Array](Array.md).&lt;[String](String.md)&gt; \| [String](String.md) | タグ名(の配列) |


#### (static) findMetaObject (object, nameList) → {[PluginParam](PluginParam.md)}
指定データベースのメモ欄のメタデータに書かれたJSON文字列を解析して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | [MetaData](RPG.MetaData.md) | メモ欄を持つデータベース |
| `nameList` | [Array](Array.md).&lt;[String](String.md)&gt; \| [String](String.md) | タグ名(の配列) |


#### (static) findMetaProperty (object) → {Object}
指定オブジェクトのメタオブジェクトを返す。なければエラーを投げる。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | [MetaData](RPG.MetaData.md) | メモ欄を持つデータベース |


#### (static) findPluginName (currentScript) → {[String](String.md)}
対象プラグインの名前を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `currentScript` | Object | 対象プラグイン(document.currentScript) |


#### (static) registerCommand (currentScript, commandName, funcName) → {[PluginParam](PluginParam.md)}
プラグインコマンドを登録。<br />
[PluginManager.registerCommand()](PluginManager.md#static-registercommand-pluginname-commandname-func) の強化版。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `currentScript` | Object | 対象プラグイン(document.currentScript) |
| `commandName ` | [String](String.md) | コマンド名 |
| `funcName ` | Function \| [String](String.md) | コマンド実行関数(文字列の場合は [Game_Interpreter](Game_Interpreter.md) に含まれるメソッド) |


#### (static) isExistPlugin (pluginName) → {Boolean}
指定プラグインが存在するか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pluginName ` | [String](String.md) | プラグイン名 |


#### (static) generateSelfSwitchKey (eventId)
セルフスイッチの key を生成。<br />
`_selfSwitchKey`プロパティに保持。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `eventId ` | [Number](Number.md) | イベントID |


#### (static) findClassName (object) → {[String](String.md)}
指定オブジェクトのクラス名を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | Object | オブジェクト |


#### (static) throwError (message, currentScript)
エラーを投げる。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `message ` | [String](String.md) | エラーメッセージ |
| `currentScript` | Object | 対象プラグイン(document.currentScript) |


#### (static) escapeXmlTag (text) → {[String](String.md)}
文字列の &amp;lt; を&lt; に &amp;gt; を &gt; にして返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text ` | [String](String.md) | 文字列 |

