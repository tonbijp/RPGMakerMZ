[クラスツリー](index.md)

# クラス: [RPG](RPG.md).[System](RPG.System.md).Vehicle

| データベース| JSONファイル | オブジェクト | スプライト |
| --- | --- | --- | --- |
| [乗り物] | System.json | [Game_Vehicle](Game_Vehicle.md) | [Sprite_Character](Sprite_Character.md) |

[乗り物]のJSONデータ。

画像指定については [RPG.Actor](RPG.Actor.md) と同じような作り。

関連クラス:  [Game_Map](Game_Map.md),  [Game_Player](Game_Player.md) 


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `characterName` | [String](String.md) | 画像ファイル名(拡張子を含まない) |
| `characterIndex` | [Number](Number.md) | 画像番号 (0〜7) |
| `bgm` | [RPG.AudioFile](RPG.AudioFile.md) | BGM |
| `startMapId` | [Number](Number.md) | [初期位置] マップID |
| `startX` | [Number](Number.md) | [初期位置] x座標(タイル数) |
| `startY` | [Number](Number.md) |  [初期位置] y座標(タイル数) |



