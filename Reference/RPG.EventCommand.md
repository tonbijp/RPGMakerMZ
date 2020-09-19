# Class: [RPG](RPG.md).EventCommand
[実行内容]に記述される[イベントコマンド] を構成するJSONデータ。

記述された内容は [Game_Interpreter](Game_Interpreter.md) のcommandXXX メソッドで処理される。

関連クラス: [RPG.EventPage](RPG.EventPage.md), [RPG.BattleEventPage](RPG.BattleEventPage.md), [RPG.CommonEvent](RPG.CommonEvent.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | イベント番号 |
| `indent` | [Number](Number.md) | 階層(インデント)の深さ<br />(通常は0で[条件分岐]コマンドにより1階層ずつ深くなる) |
| `parameters` | [Array](Array.md).&lt;*&gt; | コマンドに渡される引数の配列 |


