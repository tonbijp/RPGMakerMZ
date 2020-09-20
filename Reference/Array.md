# Class: Array

### new Array ()
JavaScript の配列にいくつかRPGツクールMV独自のメソッドが追加してある。

詳細は [MDN の Arrayのページ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)を見てもらうとして。
ここでは追加されたメソッドのみ解説。


### Methods

#### clone () → {[Array](Array.md)}
配列を(シャロー)コピーして返す。
実態は標準の slice(0) なので、あえて使う必要はない。


#### contains (element) → {Boolean}
指定した値が配列に含まれるか。
**JSの機能である、includes()を使うことが推奨されている。**

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


#### remove(element)
**@MZ**配列から指定要素を取り除く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `array` | [Array](Array.md) | 比較する配列 |
