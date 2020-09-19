# Class: JsonEx
JSONファイルを扱う静的ビルトインクラス [JSON](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) のラッパークラス。

一応( _が前についた) privateメソッドも書いているが、実際使うのは [parse()](JsonEx.md#static-parse-json--object) と [stringify()](JsonEx.md#static-stringify-object--string)。<br />
[makeDeepCopy()](JsonEx.md#static-makedeepcopy-object--object) は JSONの変換ができればできる処理なので、ついでにこのクラスに付属している。

Namespace [RPG](RPG.md) に分類しているのがJSONデータ。

関連クラス: [PluginManager](PluginManager.md), [MV.PluginSettings](MV.PluginSettings.md), [DataManager](DataManager.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `maxDepth` | [Number](Number.md) | [static] オブジェクトの最高深度(規定値:100) |


### Methods

#### (static) _cleanMetadata (object)
指定オブジェクトからエンコード・デコードで使うメタデータ('@'、'@c')を取り除く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | Object | オブジェクト |

#### (static) _decode (value, circular, registry) → {Object}
parseの前処理。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | | Object \|  [Array](Array.md)  | デコードするオブジェクト |
| `circular` | [Array](Array.md) | 循環参照チェック配列 |
| `registry` | Object | レジストリ |


#### (static) _encode (value, circular, depth) → {Object}
stringifyの前処理。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Object \|  [Array](Array.md) | エンコードするオブジェクト |
| `circular` | [Array](Array.md) | 循環参照チェック配列 |
| `depth` | [Number](Number.md) | 深さ |


#### (static) _generateId () → {[Number](Number.md)}
IDを生成して返す。


#### (static) _getConstructorName (value) → {[String](String.md)}
指定オブジェクトのコンストラクタの名前を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Object | オブジェクト |


#### (static) _linkCircularReference (contents, circular, registry) → {Object}
循環参照のリンク。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `contents ` | Object | デコードするオブジェクト |
| `circular` | [Array](Array.md) | 循環参照チェック配列 |
| `registry` | Object | レジストリ |


#### (static) _resetPrototype (value, prototype) → {Object}
指定オブジェクトに、指定プロトタイプを再定義して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Object | オブジェクト |
| `prototype` | Object | プロトタイプオブジェクト |


#### (static) _restoreCircularReference (circulars) 
循環参照チェック配列から復帰。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `circular` | [Array](Array.md) | 循環参照チェック配列 |


#### (static) makeDeepCopy (object) → {Object}
指定オブジェクトのディープコピー(参照関係のない別データ)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | Object | コピー元オブジェクト |


#### (static) parse (json) → {Object}
JSON文字列をオブジェクトに変換して返す。<br />
正確にはJSON文字列でない、配列なども変換する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `json` | [String](String.md) | JSON文字列 |


#### (static) stringify (object) → {[String](String.md)}
オブジェクトをJSON文字列に変換して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | Object | 変換するオブジェクト |

