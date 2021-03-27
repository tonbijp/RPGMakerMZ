[クラスツリー](index.md)

# クラス: [RPG](RPG.md).State

## スーパークラス: [RPG.MetaData](RPG.MetaData.md) 

| データベース| JSONファイル | 大域変数 | スプライト |
| --- | --- | --- | --- |
| [ステート] | States.json | [$dataStates](global.md#datastates-arrayrpgstate)(配列) | [Sprite_StateIcon](Sprite_StateIcon.md) |

エディタ上の利用方法については公式の [RPGツクールMV 初心者講座 ステート作成例](https://tkool.jp/mv/guide/004_007c.html) を参照。

関連クラス: [Game_BattlerBase](Game_BattlerBase.md), [Game_Battler](Game_Battler.md), [Game_Actor](Game_Actor.md), [Game_Enemy](Game_Enemy.md), [Game_ActionResult](Game_ActionResult.md), [Window_BattleLog](Window_BattleLog.md), [RPG.Effect](RPG.Effect.md), [RPG.Trait](RPG.Trait.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `id` | [Number](Number.md) | [ステートID](#ステートid) |
| `name` | [String](String.md) | [名前] |
| `restriction` | [Number](Number.md) | [\[行動制約\]](#行動制約)) |
| `priority` | [Number](Number.md) | [優先度] \(0~100) |
| `removeAtBattleEnd` | Boolean | [戦闘終了時に解除] |
| `removeByRestriction` | Boolean | [行動制約によって解除] |
| `autoRemovalTiming` | [Number](Number.md) | [\[自動解除のタイミング\]](#[自動解除のタイミング])  |
| `minTurns` | [Number](Number.md) | [継続ターン数]の下限 |
| `maxTurns` | [Number](Number.md) | [継続ターン数]の上限 |
| `removeByDamage` | Boolean | [ダメージで解除] |
| `chanceByDamage` | [Number](Number.md) | [ダメージで解除]の%確率 |
| `removeByWalking` | Boolean | [歩数で解除] |
| `stepToRemove` | [Number](Number.md) | [歩数で解除]の歩数 |
| `iconIndex` | [Number](Number.md) | [アイコン]番号 |
| `message1` | [String](String.md) | [アクターがこの状態になったとき] |
| `message2` | [String](String.md) | [敵キャラがこの状態になったとき] |
| `message3` | [String](String.md) | [この状態が継続しているとき] |
| `message4` | [String](String.md) | [この状態が解除されたとき] |
| `motion` | [Number](Number.md) | [[SV]モーション] |
| `overlay` | [Number](Number.md) | [\[\[SV\]重ね合わせ\]](#[SV]重ね合わせ) |
| `traits` | [Array](Array.md).&lt;[RPG.Trait](RPG.Trait.md)&gt; | [特徴]の配列 |

#### ステートID
ID 1 はHPが 0 になった時に自動的に付加されるステート。<br />
以下ID 0 は固定、他は規定値。

| ID | 説明 |
| --- | --- |
| 0 | 通常 |
| 1 | 戦闘不能 |
| 2 | 防御 |
| 3 | 不死身 |
| 4 | 毒 |
| 5 | 暗闇 |
| 6 | 沈黙 |
| 7 | 激昂 |
| 8 | 混乱 |
| 9 | 魅了 |
| 10 | 睡眠 |

#### [行動制約]

| 番号 | 説明 |
| --- | --- |
| 0 | なし |
| 1 | 敵に攻撃 |
| 2 | 誰かを攻撃 |
| 3 | 味方を攻撃 |
| 4 | 行動できない |

#### [自動解除のタイミング]

| 番号 | 説明 |
| --- | --- |
| 0 | なし |
| 1 | 行動終了時 |
| 2 | ターン終了時 |


#### [SV]重ね合わせ
img/system/States.png に含まれる画像を指定する番号。<br />
規定では説明に対応する画像が入っているが、必ずしもその意味で使う必要はない。<br />
ただし、エディタ上の表記および数は変更不能。

| 番号 | 説明 |
| --- | --- |
| 0 | なし |
| 1 | 毒 |
| 2 | 暗闇 |
| 3 | 沈黙 |
| 4 | 激昂 |
| 5 | 混乱 |
| 6 | 魅了 |
| 7 | 睡眠 |
| 8 | 麻痺 |
| 9 | 呪い |
| 10 | 恐怖 |
