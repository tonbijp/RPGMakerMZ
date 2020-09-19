# Class:  [RPG](RPG.md).Tileset

## Extends: [RPG.MetaData](RPG.MetaData.md)

| データベース| JSONファイル | 大域変数 |
| --- | --- | --- | --- |
| [タイルセット] | Tilesets.json | [$dataTilesets](global.md#datatilesets-arrayrpgtileset)(配列) |

関連クラス: [Game_Map](Game_Map.md),  [ShaderTilemap](ShaderTilemap.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) |  タイルセットのID |
| `name` | [String](String.md) | [名前] |
| `mode` | [Number](Number.md) | [[モード]](RPG.Tileset.md#モード) |
| `tilesetNames` | [Array](Array.md).&lt;[String](String.md)&gt; | タイルセットに使われる画像ファイル名の配列<br />( 0:A1, 1:A2, 2:A3, 3:A4, 4:A5, 5:B, 6:C, 7:D, 8:E ) |
| `flags` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [ビットフラグ](RPG.Tileset.md#ビットフラグ)の配列 |

#### [モード]
VX 互換タイプ とあるが、使われていない。

| 番号 | Description |
| --- | --- |
| 0 |  フィールドタイプ |
| 1 |  エリアタイプ |
| 2 |  VX 互換タイプ |

#### ビットフラグ
タイルの性質を記録したフラグのビット位置。

| Bit | Description |
| --- | --- |
| 0x0001 |  下通行不可 |
| 0x0002 |  左通行不可 |
| 0x0004 |  右通行不可 |
| 0x0008 |  上通行不可 |
| 0x0010 |  高層に表示[☆] |
| 0x0020 |  梯子 |
| 0x0040 |  茂み |
| 0x0080 |  カウンター |
| 0x0100 |  ダメージ床 |
| 0x0200 |  小型船通行不可 |
| 0x0400 |  大型船通行不可 |
| 0x0800 |  飛行船着地不可 |
| 0xF000 |  地形タグ |


