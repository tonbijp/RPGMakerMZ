# Class: [RPG](RPG.md).BaseItem

## Extends: [RPG.MetaData](RPG.MetaData.md) 

[アイテム]はもちろん、[武器][防具][敵キャラ][状態]などにも使われる基本クラス。

関連クラス: [DataManager](DataManager.md)


### Sub Classes

* [RPG.UsableItem](RPG.UsableItem.md)
* [RPG.EquipItem](RPG.EquipItem.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) | [アイテムID](RPG.BaseItem.md#アイテムid) |
| `name` | [String](String.md) | [名前] |
| `iconIndex` | [Number](Number.md) | [アイコン]番号 |
| `description` | [String](String.md) | [説明]文 |

#### アイテムID

[データベース]-[アイテム] の番号。


