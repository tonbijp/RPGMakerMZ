# Class: Game_Actors

### new Game_Actors ()

| データベース| JSONデータ | 大域変数 | セーブデータ |
| --- | --- | --- | --- |
| [アクター] | [RPG.Actor](RPG.Actor.md) | [$gameActors](global.md#gameactors-game_actors) | 保存される |

[Game_Actor](Game_Actor.md) をまとめて扱えるようにしたクラス。ほぼ、[$dataActors](global.md#dataactors-arrayrpgactor)と同じ。

関連クラス: [Game_Party](Game_Party.md)、[Game_Follower](Game_Follower.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_data` | [Array](Array.md).&lt;[Game_Actor](Game_Actor.md)&gt; | アクターの配列 |


### Methods

#### actor (actorId) → {[Game_Actor](Game_Actor.md)}
指定IDのアクターを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) | アクターID |


#### initialize ()
オブジェクト生成時の初期化。


