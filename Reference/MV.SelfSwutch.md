[クラスツリー](index.md)

# クラス:  [MV](MV.md).SelfSwutch

## 型: Array
[セルフスイッチ]を指定するキー。<br />
[ マップID, イベントID, タイプ ] の配列。

マップIDとイベントIDが指定できることからわかるように、スクリプトを実行したイベント以外のセルフスイッチの指定もできる。

タイプは "A", "B", "C", "D" のみが『RPGツクールMZ』のエディタ上で操作できる。<br />
逆にいえばスクリプト上での操作ならば任意の文字列が使用でき、"A", "B", "C", "D" にこだわる必要はない。

関連クラス: [Game_SelfSwitches](Game_SelfSwitches.md), [Game_Map](Game_Map.md)


### 配列内容

| 番号 | 型 | 説明 |
| --- | --- | --- |
| 0 | [Number](Number.md) | マップID |
| 1 | [Number](Number.md) | イベントID |
| 2 | [String](String.md) | タイプ |

