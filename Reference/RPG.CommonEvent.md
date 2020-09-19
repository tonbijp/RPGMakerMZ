# Class: [RPG](RPG.md).CommonEvent

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [コモンイベント] | CommonEvents.json | [$dataCommonEvents](global.md#datacommonevents-arrayrpgcommonevent)(配列) | [Game_CommonEvent](Game_CommonEvent.md)  |

関連クラス: [RPG.Event](RPG.Event.md)、[RPG.Troop](RPG.Troop.md), [RPG.EventPage.Conditions](RPG.EventPage.Conditions.md), [RPG.BattleEventPage.Conditions](RPG.BattleEventPage.Conditions.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) | [コモンイベントID](RPG.CommonEvent.md#コモンイベントid) |
| `name` | [String](String.md) | [名前] |
| `trigger` | [Number](Number.md) | [[トリガー](RPG.CommonEvent.md#トリガー)] |
| `switchId` | [Number](Number.md) | [[スイッチ](RPG.CommonEvent.md#スイッチ)] |
| `list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; | [実行内容] |

#### コモンイベントID
[データベース]-[コモンイベント] の番号。

#### [トリガー]

| 番号 | Description |
| --- | --- |
| 0 | [なし] |
| 1 | [自動実行] |
| 2 | [並列処理] |

#### [スイッチ]
trigger が 1 か 2 の場合に使われる [Game_Switches](Game_Switches.md)の value() に指定する番号。


