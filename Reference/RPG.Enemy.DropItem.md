# Class: [RPG](RPG.md).[Enemy](RPG.Enemy.md).DropItem
[ドロップアイテム]のJSONデータ。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `kind` | [Number](Number.md) | [種類](RPG.Enemy.DropItem.md#種類)  |
| `dataId` | [Number](Number.md) | 種類毎のID |
| `denominator` | [Number](Number.md) | 1/N で表される[出現率]のNの部分 |#### 種類

| 番号 | 種類 | dataId |
| --- | --- | --- |
| 0 | なし |  |
| 1 | アイテム | アイテムID |
| 2 | 武器 | 武器ID |
| 3 | 防具 | 防具ID |
