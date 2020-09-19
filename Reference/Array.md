# Class: Array

### new Array ()
JavaScript の配列にいくつかRPGツクールMV独自のメソッドが追加してある。

詳細は [MDN の Arrayのページ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)を見てもらうとして。
ここでは追加されたメソッドのみ解説。


### Methods

#### clone () → {[Array](Array.md)}
配列を(シャロー)コピーして返す。
多分、標準の slice() を使った方がいい。


#### contains (element) → {Boolean}
指定した値が配列に含まれるか。
多分、標準の includes()を使った方がいい。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `element` | * | 配列を検索する値 |


#### equals (array) → {Boolean}
配列が同じものか。
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | [Array](Array.md) | 比較する配列 |