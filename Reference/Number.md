[クラスツリー](index.md)

# クラス: Number

JavaScript の数値にいくつか『RPGツクールMZ』独自のメソッドが追加してある。

詳細は [MDN の Numberのページ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)を見てもらうとして。
ここでは追加されたメソッドのみ解説。

### new Number ()

### メソッド

#### clamp (min, max) → {[Number](Number.md)}
指定範囲に収まる値を返す。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `min` | [Number](Number.md) | 最小値 |
| `max` | [Number](Number.md) | 最大値 |


#### mod (n) → {[Number](Number.md)}
割り算の余りの値を返す。

% に近いが常に正の値を返す。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `n` | [Number](Number.md) | 割る数値 |


#### padZero (length) → {[String](String.md)}
数値の頭を0で埋めて指定の長さの文字列にして返す。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `length` | [Number](Number.md) | 文字列の長さ |

