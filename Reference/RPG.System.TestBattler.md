# クラス: [RPG](RPG.md).[System](RPG.System.md).TestBattler
[戦闘テスト]用のバトラー(パーティメンバ)を渡すためのJSONデータ。

実際のゲームのプレイで使われることはない。


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actorId` | [Number](Number.md) | アクターID |
| `level` | [Number](Number.md) | アクターの[レベル] |
| `equips` | [Array](Array.md).&lt;[Number](Number.md)&gt; | アクターの[装備]のIDの配列( 0:武器, 1:盾, 2:頭, 3:身体, 4:装飾品 ) |