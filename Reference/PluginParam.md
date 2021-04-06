[クラスツリー](index.md)

# クラス: PluginParam

### new PluginParam(parameter, needParse opt)
**@MZ PluginCommonBase.js** プラグインパラメータを保持し、型を解析して返す。<br />
ただし、このクラスは大域(グローバルスコープ)にないので直接使うことはない。<br />
PluginManagerEx.createParameter() の返り値として使う。

※公式プラグイン PluginCommonBase.js は、ほぼコアスクリプト扱いしていいと思うので、含まれるクラスのページを作った。

関連クラス: [PluginManagerEx](PluginManagerEx.md)

#### 引数

| 名前 | 型 | 特性 | 規定値 | 説明 |
| --- | --- | --- | --- | --- |
| `parameter` | Object | | | プラグインパラメータ |
| `needParse` | Boolean | &lt;optional&gt; | true | 解析(パース)が必要か |

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_parameter ` | Object | プラグインパラメータ |


### メソッド

#### setup (parameter)
指定パラメータで準備。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `parameter` | Object | パラメータ |


#### _createAccessor (paramName)
アクセサ(プロパティの読み書きインタフェース)の生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `paramName` | [String](String.md) | パラメータ名 |


#### _convert(param, paramName) → {*}
渡した値を型変換して返す。<br />
パラメータ名の末尾が、text, name, note, desc, script のいずれかであれば文字列として返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param` | * | 変換する値 |
| `paramName` | [String](String.md) | パラメータ名 |


#### _findTextParamSuffixList () → {[Array](Array.md).&lt;RegExp&gt;}
末尾文字列を同定するための正規表現の配列を返す。


#### _isStructArray (param) → {Boolean}
Struct な配列か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param` | * | 確認する値 |


#### _isStruct (param) → {Boolean}
Struct な値か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param` | * | 確認する値 |


#### _param (name) → {*}
パラメータ名に対応する値を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | パラメータ名 |


#### _paramReplacer (key, value) → {*}
JSON.stringify の第二引数に渡す関数。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `key` | * | 確認する値 |
| `value` | * | 確認する値 |

