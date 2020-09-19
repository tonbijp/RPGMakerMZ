# Class: [RPG](RPG.md).Class

## Extends: [RPG.MetaData](RPG.MetaData.md) 

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [職業] | Classes.json | [$dataClasses](global.md#dataclasses-arrayrpgclass)(配列) |  |

[Game_Actor](Game_Actor.md) の _classId プロパティで参照される。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) |職業ID |
| `name` | [String](String.md) | [名前] |
| `expParams` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [経験値曲線]<br />配列の内容(0: 基本値, 1: 補正値, 2: 増加度A 3:増加度B) |
| `params` | [Array](Array.md).&lt;[Array](Array.md).&lt;[Number](Number.md)&gt;&gt; | [能力値曲線] \([能力値ID](RPG.Enemy.md#能力値id)の順の配列に、レベル毎の能力値の配列が入っている) |
| `learnings` | [Array](Array.md).&lt;[RPG.Class.Learning](RPG.Class.Learning.md)&gt; | [取得するスキル]に必要な条件の配列 |
| `traits` | [Array](Array.md).&lt;[RPG.Trait](RPG.Trait.md)&gt; | [特徴]の配列 |


### Classes

* [RPG.Class.Learning](RPG.Class.Learning.md)


