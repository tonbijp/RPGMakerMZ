# クラス: [RPG](RPG.md).Item

## スーパークラス: [RPG.UsableItem](RPG.UsableItem.md)

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [アイテム] | Items.json |  [$dataItems](global.md#dataitems-arrayrpgitem)(配列) | [Game_Item](Game_Item.md) |

[Game_Item](Game_Item.md) の _dataClass プロパティは 'item' になる。


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `itypeId` | [Number](Number.md) | [アイテムタイプID](RPG.Item.md#アイテムタイプid) |
| `price` | [Number](Number.md) | [価格] |
| `consumable` | Boolean | [消耗]するか |

#### アイテムタイプID

| ID | [アイテムタイプ] |
| --- | --- |
| 1 | 通常アイテム |
| 2 | 大事なもの |
| 3 | 隠しアイテムA |
| 4 | 隠しアイテムB |

