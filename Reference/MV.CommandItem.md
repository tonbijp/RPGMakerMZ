[クラスツリー](index.md)

# クラス: [MV](MV.md).CommandItem

## 型: Object
コマンドウィンドウ( [Window_Command](Window_Command.md) )の項目のパラメータ。

シンボルは、[Window_Selectable.setHandler()](Window_Selectable.md#sethandler-symbol-method)メソッドでコールバック関数に紐づけられるのがパターン。

関連クラス: 


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | 表示名 |
| `symbol` | [String](String.md) | シンボル(内部的な名前) |
| `enabled` | Boolean | 選択可能か( true:選択可, false:グレーアウト ) |
| `ext` | * | 追加情報(例:スキルID) |

