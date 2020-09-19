# Class: [RPG](RPG.md).Damage
[ダメージ]のデータ。

関連クラス: [RPG.UsableItem](RPG.UsableItem.md), [Game_Action](Game_Action.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [Number](Number.md) | [タイプ](RPG.Damage.md#タイプ) |
| `elementId` | [Number](Number.md) | [属性ID](RPG.Damage.md#属性id) |
| `formula` | [String](String.md) | [[計算式]](RPG.Damage.md#計算式) |
| `variance` | [Number](Number.md) | [分散度] % (0〜100) |
| `critical` | Boolean | [会心]するか |
#### タイプ

| 番号 | [タイプ] |
| --- | --- |
|  0 | なし ||  1 | HPダメージ ||  2 | MPダメージ ||  3 | HP回復 ||  4 | MP回復 ||  5 | HP吸収 ||  6 | MP吸収 |

#### 属性ID

[データベース]-[タイプ]-[属性] で設定されたID。

 [System](RPG.System.md) の elements プロパティに登録されている。
 
 下表の -1 と 0 は固定、1 以降は規定値。

| ID | [属性] |
| --- | --- |
| -1 | 通常攻撃 |
| 0 | なし |
| 1 | 物理 |
| 2 | 炎 |
| 3 | 氷 |
| 4 | 雷 |
| 5 | 水 |
| 6 | 土 |
| 7 | 風 |
| 8 | 光 |
| 9 | 闇 |

#### [計算式]
計算式は eval ( [Game_Action.evalDamageFormula](Game_Action.md#evaldamageformula-target--number) )によって処理されるので、例えば Math.random() メソッドなど JavaScript がそのまま記述できる。<br />
また、以下の変数が利用できる。

| 変数 | 値 |
| --- | --- |
| a | 攻撃側の [Game_BattlerBase](Game_BattlerBase.md) |
| b | 防御側の [Game_BattlerBase](Game_BattlerBase.md) ( target で代用可 ) |
| v | [Game_Variables](Game_Variables.md) の \_data プロパティ |
| item | [RPG.UsableItem](RPG.UsableItem.md) |
| this | [Game_Action](Game_Action.md) |


