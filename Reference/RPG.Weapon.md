# Class: [RPG](RPG.md).Weapon

## Extends: [RPG.EquipItem](RPG.EquipItem.md)

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [武器] | Weapons.json | [$dataWeapons](global.md#dataweapons-arrayrpgweapon)(配列) | [Game_Item](Game_Item.md) |

[Game_Item](Game_Item.md) の _dataClass プロパティは 'weapon' になる。

関連クラス: [RPG.BaseItem](RPG.BaseItem.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `wtypeId` | [Number](Number.md) | [武器タイプID](RPG.Weapon#武器タイプid) |
| `animationId` | [Number](Number.md) | [[アニメーション](RPG.Animation.md)]のID |


#### 武器タイプID

[データベース]-[タイプ]-[武器タイプ] で設定されたID。

 [System](RPG.System.md) の weaponTypes プロパティに登録されている。
 
 下表は規定値。

| ID | [武器タイプ] |
| --- | --- |
| 0 | なし |
| 1 | 短剣 |
| 2 | 剣 |
| 3 | フレイル |
| 4 | 斧 |
| 5 | ムチ |
| 6 | 杖 |
| 7 | 弓 |
| 8 | クロスボウ |
| 9 | 銃 |
| 10 | 爪 |
| 11 | グローブ |
| 11 | 槍 |



