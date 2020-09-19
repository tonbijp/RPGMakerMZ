# Class: [RPG](RPG.md).Actor

## Extends: [RPG.MetaData](RPG.MetaData.md)

| データベース| JSONファイル | 大域変数 | オブジェクト | スプライト |
| --- | --- | --- | --- | --- |
| [アクター] | Actors.json | [$dataActors](global.md#dataactors-arrayrpgactor) (配列) | [Game_Actor](Game_Actor.md) |  [Sprite_Actor](Sprite_Actor.md) |
| [プレイヤー] | 〃 | 〃 | [Game_Player](Game_Player.md) | [Sprite_Character](Sprite_Character.md) | 
| [フォロワー] | 〃 |  〃 | [Game_Follower](Game_Follower.md) | 〃 |

関連クラス: [Game_Actors](Game_Actors.md), [Game_Followers](Game_Followers.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) | アクターID |
| `name` | [String](String.md) | [名前] |
| `nickname` | [String](String.md) | [二つ名] |
| `classId` | [Number](Number.md) | クラスID |
| `initialLevel` | [Number](Number.md) | [初期レベル] |
| `maxLevel` | [Number](Number.md) | [最大レベル] |
| `characterName` | [String](String.md) | [歩行キャラ]画像ファイル名(拡張子を含まない) |
| `characterIndex` | [Number](Number.md) | 8分割された[歩行キャラ]画像のひとつを指定する番号(0 〜 7) |
| `faceName` | [String](String.md) | [顔]画像のファイル名(拡張子を含まない) |
| `faceIndex` | [Number](Number.md) | 8分割された[顔]画像のひとつを指定する番号(0 〜 7) |
| `battlerName` | [String](String.md) | [[SV]戦闘キャラ]画像ファイル名(拡張子を含まない) |
| `equips` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [初期装備] \(装備アイテムID の配列) |
| `profile` | [String](String.md) | [プロフィール]の文 |
| `traits` | [Array](Array.md).&lt;[RPG.Trait](RPG.Trait.md)&gt; | [特徴]の配列 |

`faceName`、`faceIndex` は [Game_Message](Game_Message.md) で顔画像を表示する場合に利用される。

