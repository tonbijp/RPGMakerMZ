# Class: [RPG](RPG.md).Effect
アイテムやスキルの[使用効果]のデータ。

関連クラス: [Game_Action](Game_Action.md), [RPG.UsableItem](RPG.UsableItem.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | [使用効果]コード \([下表](RPG.Effect.md#code)を参照) |
| `dataId` | [Number](Number.md) | code 毎に意味の異なるID |
| `value1` | [Number](Number.md) | code 毎に意味の異なる値1 |
| `value2` | [Number](Number.md) | code 毎に意味の異なる値2 |

### code
code は [Game_Action](Game_Action.md) の定数として定義されている。例えば、<code>Game_Action.EFFECT_RECOVER_HP</code>のような形で使う。<br />
下表で、*0* や *1* のようなイタリック部分は、数字が入っているが未使用。

#### [回復]

| code | 定数 | 使用効果 | dataId | value1 | value2 |
| --- | --- | --- | --- | --- | --- |
| 11 | `EFFECT_RECOVER_HP` | HP回復 | *0* | 回復量 % (0〜100) | 回復量 (固定値) |
| 12 | `EFFECT_RECOVER_MP` | MP回復 | *0* | 回復量 % (0〜100) | 回復量 (固定値) |
| 13 | `EFFECT_GAIN_TP` | TP増加 | *0* | 増加量(固定値)| *0* |

#### [ステート]

| code | 定数 | 使用効果 | dataId | value1 | value2 |
| --- | --- | --- | --- | --- | --- |
| 21 | `EFFECT_ADD_STATE` | ステート付加 | [ステートID](RPG.State.md#ステートID) | 確率 % (0〜100) | *0* |
| 22 | `EFFECT_REMOVE_STATE` | ステート解除 | [ステートID](RPG.State.md#ステートID) | 確率 % (0〜100) | *0* |

#### [能力値]

| code | 定数 | 使用効果 | dataId | value1 | value2 |
| --- | --- | --- | --- | --- | --- |
| 31 | `EFFECT_ADD_BUFF` | 強化 | [能力値ID](RPG.Enemy.md#能力値id) | ターン数(1～1000) | *0* |
| 32  | `EFFECT_ADD_DEBUFF` | 弱体 | [能力値ID](RPG.Enemy.md#能力値id) | ターン数(1～1000) | *0* |
| 33  | `EFFECT_REMOVE_BUFF` | 強化の解除 | [能力値ID](RPG.Enemy.md#能力値id) | *1* | *0* |
| 34  | `EFFECT_REMOVE_DEBUFF` | 弱体の解除 | [能力値ID](RPG.Enemy.md#能力値id) | *1* | *0* |

#### [その他]

| code | 定数 | 使用効果 | dataId | value1 | value2 |
| --- | --- | --- | --- | --- | --- |
| 41 | `EFFECT_SPECIAL` | [特殊効果] | [特殊効果ID](RPG.Effect.md#特殊効果id) | *1* | *0* |
| 42  | `EFFECT_GROW` | 成長 | [能力値ID](RPG.Enemy.md#能力値id) | 上昇値 | *0* |
| 43  | `EFFECT_LEARN_SKILL` | スキル習得 | [スキルID](RPG.Skill.md#スキルid) | *1* | *0* |
| 44  | `EFFECT_COMMON_EVENT` | コモンイベント | コモンイベントID | *1* | *0* |

##### 特殊効果ID

| dataId | 定数 | 使用効果 |
| --- | --- | --- |
| 0 | `SPECIAL_EFFECT_ESCAPE`| 逃げる |

##### dataId:コモンイベントID

 [$dataCommonEvents](global.md#datacommonevents-arrayrpgcommonevent)  ([CommonEvent](RPG.CommonEvent.md) の配列)の番号。
 