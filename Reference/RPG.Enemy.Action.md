# Class: [RPG](RPG.md).[Enemy](RPG.Enemy.md).Action
[敵キャラ]の[行動パターン]のJSONデータ。

関連クラス: [Game_Enemy](Game_Enemy.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) | [スキルID](RPG.Skill.md#スキルid) |
| `conditionType` | [Number](Number.md) | [[条件](RPG.Enemy.Action.md#条件)] |
| `conditionParam1` | [Number](Number.md) | [条件] パラメータ1 |
| `conditionParam2` | [Number](Number.md) | [条件] パラメータ2 |
| `rating` | [Number](Number.md) | [レーティング] \(1〜10) |

#### [条件]

*0* のようなイタリック部分は、数字が入っているが未使用。

| 番号 | [条件] | conditionParam1 | conditionParam2 |
| --- | --- | --- | --- |
| 0 | 常時 | *0* | *0* |
| 1 | ターン | 開始ターン | ターン間隔 |
| 2 | HP | 下限% | 上限% |
| 3 | MP | 下限% | 上限% |
| 4 | ステート | [ステートID](RPG.State.md#ステートid) | *0* |
| 5 | パーティLv | 下限Lv | *0* |
| 6 | スイッチ | スイッチID | *0* |