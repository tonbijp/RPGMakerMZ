# Class: String

### new String ()
JavaScript の文字列にいくつかRPGツクールMV独自のメソッドが追加してある。

詳細は [MDN の Stringのページ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String)を見てもらうとして。
ここでは追加されたメソッドのみ解説。


### Methods

#### contains (string) → {Boolean}
指定の文字列が含まれるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `string` | [String](String.md) | 検索する文字列 |


#### format (...args) → {[String](String.md)}

%1, %2 といった文字列を指定された引数で置き換えて返す。

引数には配列ではなく、複数の引数を渡す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `...args` | Any | 入れ替え用の値 |


#### padZero (length) → {[String](String.md)}
0で埋めて、指定した長さの文字列にして返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `length` | [Number](Number.md) | 文字列の長さ |
