[クラスツリー](index.md)

# クラス: Game_Actors

| データベース| JSONデータ | 大域変数 | セーブデータ |
| --- | --- | --- | --- |
| [アクター] | [RPG.Actor](RPG.Actor.md) | [$gameActors](global.md#gameactors-game_actors) | 保存される |

[Game_Actor](Game_Actor.md) をまとめて扱えるようにしたクラス。データベースの[$dataActors](global.md#dataactors-arrayrpgactor)のオブジェクト版。

関連クラス: [Game_Party](Game_Party.md)、[Game_Follower](Game_Follower.md)

### new Game_Actors ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_data` | [Array](Array.md).&lt;[Game_Actor](Game_Actor.md)&gt; | アクターの配列 |


### メソッド

#### actor (actorId) → {[Game_Actor](Game_Actor.md)}
指定IDのアクターを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actorId` | [Number](Number.md) | アクターID |


#### initialize ()
オブジェクト生成時の初期化。


