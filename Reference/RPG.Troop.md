# Class: [RPG](RPG.md).Troop

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [敵グループ] | Troops.json | [$dataTroops](global.md#datatroops-arrayrpgtroop)(配列) | [Game_Troop](Game_Troop.md) |

関連クラス: [RPG.Event](RPG.Event.md), [RPG.CommonEvent](RPG.CommonEvent.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) | 敵グループID |
| `name` | [String](String.md) | 敵グループ名 |
| `members` | [Array](Array.md).&lt;[RPG.Troop.Member](RPG.Troop.Member.md)&gt; | メンバー |
| `pages` | [Array](Array.md).&lt;[RPG.BattleEventPage](RPG.BattleEventPage.md)&gt; | [バトルイベント] |

### Classes

* [RPG.Troop.Member](RPG.Troop.Member.md)


