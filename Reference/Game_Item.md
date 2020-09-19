# Class: Game_Item

### new Game_Item ()

| データベース| JSONデータ |
| --- | --- |
| [アイテム][武器][防具][スキル] | [RPG.BaseItem](RPG.BaseItem.md)  |

アイテム全般とスキルをまとめて扱うクラス。


関連クラス: [RPG.UsableItem](RPG.UsableItem.md), [RPG.Item](RPG.Item.md), [RPG.Skill](RPG.Skill.md), [RPG.EquipItem](RPG.EquipItem.md), [RPG.Weapon](RPG.Weapon.md), [RPG.Armor](RPG.Armor.md), [Game_Actor](Game_Actor.md), [Game_Action](Game_Action.md)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_dataClass` | [String](String.md) | アイテムの種類( 'item', 'skill', 'weapon', 'armor', '' ) |
| `_itemId` | [Number](Number.md) | アイテムID(種類毎に異なる) |


### Methods

#### initialize ()
 オブジェクト生成時の初期化。

#### isArmor () → {Boolean}
防具か。

#### isEquipItem () → {Boolean}
装備品か。

#### isItem () → {Boolean}
アイテムか。

#### isNull () → {Boolean}
未設定か。

#### isSkill () → {Boolean}
スキルか。

#### isUsableItem () → {Boolean}
使用できるアイテムか。

#### isWeapon () → {Boolean}
武器か。

#### itemId () → {[Number](Number.md)}
アイテムIDを返す。

#### object () → {[RPG.BaseItem](RPG.BaseItem.md)}
JSONデータを返す。


#### setEquip (isWeapon, itemId)
指定アイテムで装備品の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `isWeapon` | Boolean | 武器か |
| `itemId` | [Number](Number.md) | アイテムID |


#### setObject (item)
指定JSONデータで書き換える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |
