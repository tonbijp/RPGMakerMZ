# Class: [RPG](RPG.md).MapInfo

| データベース| JSONファイル | 大域変数 |
| --- | --- | --- |
| マップ一覧 | MapInfos.json | [$dataMapInfos](global.md#datamapInfos-arrayrpgmapInfo)(配列) |

含まれる情報はエディタ用。

関連クラス: [RPG.Map](RPG.Map.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) | [ID] \(おそらく未使用) |
| `name` | [String](String.md) | [名前] |
| `parentId` | [Number](Number.md) | 親のマップID |
| `order` | [Number](Number.md) | エディタへの表示順 |
| `expanded` | Boolean | エディタでリストが開いているか |
| `scrollX` | [Number](Number.md) | エディタで開くx位置 |
| `scrollY` | [Number](Number.md) | エディタで開くy位置 |

※ `id` は実装上は配列番号が使われていて、このプロパティは使われていないようだ。<br />
そのため、MapInfos.json に並んだ null, 行を削除するなどして配列番号が変わると ID がずれてしまう。