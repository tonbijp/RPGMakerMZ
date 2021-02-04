[クラスツリー](index.md)

# クラス:  Array

### new Array ()
JavaScript の配列にいくつか『RPGツクールMZ』独自のメソッドが追加してある。

詳細は [MDN の Arrayのページ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)を見てもらうとして。
ここでは追加されたメソッドのみ解説。


### メソッド

#### clone () → {[Array](Array.md)}
配列を(シャロー)コピーして返す。
実態は標準の slice(0) なので、あえて使う必要はない。


#### contains (element) → {Boolean}
指定した値が配列に含まれるか。
**JSの機能である、includes()を使うことが推奨されている。**

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `element` | * | 配列を検索する値 |


#### equals (array) → {Boolean}
配列が同じものか。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `array` | [Array](Array.md) | 比較する配列 |


#### remove(element)
**@MZ** 配列から指定要素を取り除く。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `array` | [Array](Array.md) | 比較する配列 |
