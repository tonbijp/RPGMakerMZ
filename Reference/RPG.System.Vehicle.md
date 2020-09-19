# Class: [RPG](RPG.md).[System](RPG.System.md).Vehicle
[乗り物]のJSONデータ。

画像指定については [RPG.Actor](RPG.Actor.md) と同じような作り。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) | 画像ファイル名(拡張子を含まない) |
| `characterIndex` | [Number](Number.md) | 画像番号 (0〜7) |
| `bgm` | [RPG.AudioFile](RPG.AudioFile.md) | BGM |
| `startMapId` | [Number](Number.md) | [初期位置] マップID |
| `startX` | [Number](Number.md) | [初期位置] x座標(タイル数) |
| `startY` | [Number](Number.md) |  [初期位置] y座標(タイル数) |
