# Class: [RPG](RPG.md).Armor

## Extends: [RPG.EquipItem](RPG.EquipItem.md)

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [防具] | Armors.json | [$dataArmors](global.md#dataarmors-arrayrpgarmor)(配列) | [Game_Item](Game_Item.md) |

[Game_Item](Game_Item.md) の _dataClass プロパティは 'armor' になる。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `atypeId` | [Number](Number.md) | [防具タイプID](RPG.Armor.md#防具タイプid) |


#### 防具タイプID

[データベース]-[タイプ]-[防具タイプ] で設定されたID。

 [System](RPG.System.md) の armorTypes プロパティに登録されている。
 
下表は規定値。

| ID | [防具タイプ] |
| --- | --- |
| 1 | 一般防具 |
| 2 | 魔法防具 |
| 3 | 軽装防具 |
| 4 | 重装防具 |
| 5 | 小型盾 |
| 6 | 大型盾 | 


