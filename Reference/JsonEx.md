# クラス: JsonEx
JSONファイルを扱う静的ビルトインクラス [JSON](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) のラッパークラス。

一応( _が前についた) privateメソッドも書いているが、実際使うのは [parse()](JsonEx.md#static-parse-json--object) と [stringify()](JsonEx.md#static-stringify-object--string)。<br />
[makeDeepCopy()](JsonEx.md#static-makedeepcopy-object--object) は JSONの変換ができればできる処理なので、ついでにこのクラスに付属している。

Namespace [RPG](RPG.md) に分類しているのがJSONデータ。

関連クラス: [PluginManager](PluginManager.md), [MV.PluginSettings](MV.PluginSettings.md), [DataManager](DataManager.md)

### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `maxDepth` | [Number](Number.md) | [static] オブジェクトの最高深度(規定値:100) |


### メソッド

#### (static) _decode (value, circular, registry) → {Object}
parseの前処理。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | | Object \|  [Array](Array.md)  | デコードするオブジェクト |
| `circular` | [Array](Array.md) | 循環参照チェック配列 |
| `registry` | Object | レジストリ |


#### (static) _encode (value, circular, depth) → {Object}
stringifyの前処理。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | Object \|  [Array](Array.md) | エンコードするオブジェクト |
| `circular` | [Array](Array.md) | 循環参照チェック配列 |
| `depth` | [Number](Number.md) | 深さ |


#### (static) makeDeepCopy (object) → {Object}
指定オブジェクトのディープコピー(参照関係のない別データ)を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | Object | コピー元オブジェクト |


#### (static) parse (json) → {Object}
JSON文字列をオブジェクトに変換して返す。<br />
正確にはJSON文字列でない、配列なども変換する。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `json` | [String](String.md) | JSON文字列 |


#### (static) stringify (object) → {[String](String.md)}
オブジェクトをJSON文字列に変換して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | Object | 変換するオブジェクト |


### MV廃止メソッド
[static]
_cleanMetadata (object), _generateId (), _getConstructorName (value), _linkCircularReference (contents, circular, registry), _restoreCircularReference (circulars) 
