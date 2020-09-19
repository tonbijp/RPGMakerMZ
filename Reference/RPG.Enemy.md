# Class: [RPG](RPG.md).Enemy

## Extends: [RPG.MetaData](RPG.MetaData.md) 

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [敵キャラ] | Enemies.json | [$dataEnemies](global.md#dataenemies-arrayrpgenemy) (配列) | [Game_Enemy](Game_Enemy.md) |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `battlerName` | [String](String.md) | 画像ファイル名(拡張子なし) |
| `battlerHue` | [Number](Number.md) | [色相] \(0~360) |
| `name` | [String](String.md) | [名前] |
| `id` | [Number](Number.md) | 敵キャラID |
| `params` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [能力値ID](RPG.Enemy.md#能力値id)の順に値が記録された配列 |
| `exp` | [Number](Number.md) | [経験値] |
| `gold` | [Number](Number.md) | [所持金] |
| `dropItems` | [Array](Array.md).<[RPG.Enemy.DropItem](RPG.Enemy.DropItem.md)> | [ドロップアイテム]の配列 |
| `actions` | [Array](Array.md).<[RPG.Enemy.Action](RPG.Enemy.Action.md)> | [行動パターン]の配列 |
| `traits` | [Array](Array.md).<[RPG.Trait](RPG.Trait.md)> | [特徴]の配列 |

#### 能力値ID

| ID | [能力値] |
| --- | --- |
| 0 | 最大HP |
| 1 | 最大MP |
| 2 | 攻撃力 |
| 3 | 防御力 |
| 4 | 魔法力 |
| 5 | 魔法防御 |
| 6 | 敏捷性 |
| 7 | 運 |


### Classes

* [RPG.Enemy.Action](RPG.Enemy.Action.md)
* [RPG.Enemy.DropItem](RPG.Enemy.DropItem.md)

