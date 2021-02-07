[クラスツリー](index.md)

# クラス:  [MV](MV.md).TileRect

## 型: Array
マップのタイル描画に使われる矩形データ。

[Tilemap.Layer.addRect](Tilemap.Layer#addRect-) の引数として渡される値。<br />
[Tilemap.Layer](Tilemap.Layer.md)._elements に格納され、それを元にして描画がなされる。


関連クラス: [RPG.Map](RPG.Map.md), [RPG.Tileset](RPG.Tileset.md), [Game_Map](Game_Map.md), [Spriteset_Map](Spriteset_Map.md), [Tilemap](Tilemap.md), [Tilemap.Layer](Tilemap.Layer.md)

### 配列内容
タイルセットの画像( setNumber )と位置(sx, sy)のデータ、マップのレイヤーに描画される位置(dx, dy)、そして両者に共通するタイルの大きさ(w, h)で構成される配列。

| 番号 | 型 | 説明 |
| --- | --- | --- |
| 0 | [Number](Number.md) | `setNumber` タイルセットの区分番号(0〜8)<br />A1:0, A2:1, A3:2, A4:3, A5:4, B:5,C:6, D:7, E:8 |
| 1 | [Number](Number.md) |  `sx` タイルセット画像の x位置(ピクセル) |
| 2 | [Number](Number.md) |  `sy` タイルセット画像の y位置(ピクセル) |
| 3 | [Number](Number.md) | `dx` レイヤー内の x座標(ピクセル) |
| 4 | [Number](Number.md) | `dy` レイヤー内の y座標(ピクセル) |
| 5 | [Number](Number.md) |  `w` タイルの幅(ピクセル) |
| 6 | [Number](Number.md) |  `h` タイルの高さ(ピクセル) |
