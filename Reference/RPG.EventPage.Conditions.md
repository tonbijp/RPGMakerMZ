# Class: [RPG](RPG.md).[EventPage](RPG.EventPage.md).Conditions
イベントの [EVページ] の [出現条件] を構成するJSONデータ。<br/>
[RPG.EventPage](RPG.EventPage.md) の conditions プロパティに含まれる。

関連クラス: [RPG.CommonEvent](RPG.CommonEvent.md)、[RPG.BattleEventPage.Conditions](RPG.BattleEventPage.Conditions.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `switch1Valid` | Boolean | 1番目の [スイッチ] を使うか |
| `switch1Id` | [Number](Number.md) | 1番目の [スイッチ] のID |
| `switch2Valid` | Boolean | 2番目の [スイッチ] を使うか |
| `switch2Id` | [Number](Number.md) | 2番目の [スイッチ] のID |
| `variableValid` | Boolean | [変数] を使うか |
| `variableId` | [Number](Number.md) | [変数] のID |
| `variableValue` | [Number](Number.md) | [変数] の数値 |
| `selfSwitchValid` | Boolean | [セルフスイッチ] を使うか |
| `selfSwitchCh` | [String](String.md) | [セルフスイッチ] の記号(A,B,C,D いずれか)  |
| `itemValid` | Boolean | [アイテム] を使うか |
| `itemId` | [Number](Number.md) | [アイテム] のID |
| `actorValid` | Boolean | [アクター] を使うか |
| `actorId` | [Number](Number.md) | [アクター] のID |


