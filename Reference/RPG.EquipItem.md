# Class: [RPG](RPG.md).EquipItem

## Extends: [RPG.BaseItem](RPG.BaseItem.md)

### Sub Classes

* [RPG.Armor](RPG.Armor.md)
* [RPG.Weapon](RPG.Weapon.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `price` | [Number](Number.md) | [価格] |
| `etypeId` | [Number](Number.md) | [装備タイプID](RPG.EquipItem.md#装備タイプID) |
| `params` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [能力値ID](RPG.Enemy.md#能力値id)の順に[能力値変化量]が書かれた配列 |
| `traits` | [Array](Array.md).&lt;[RPG.Trait](RPG.Trait.md)&gt; | [特徴]の配列 |

#### 装備タイプID

[データベース]-[タイプ]-[装備タイプ] で設定されたID。

 [System](RPG.System.md) の equipTypes プロパティに登録されている。
 
 下表は規定値。

| ID | [装備タイプ] |
| --- | --- |
| 0 | なし |
| 1 | 盾 |
| 2 | 頭 |
| 3 | 身体 |
| 4 | 装飾品 |

