[クラスツリー](index.md)

# クラス: [RPG](RPG.md).UsableItem

## スーパークラス: [RPG.BaseItem](RPG.BaseItem.md)
アイテム・スキルの基本情報。

### サブクラス

* [RPG.Skill](RPG.Skill.md)
* [RPG.Item](RPG.Item.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `scope` | [Number](Number.md) | [範囲](#範囲) |
| `occasion` | [Number](Number.md) | [使用可能時](#使用可能時)  |
| `speed` | [Number](Number.md) | [速度補正] |
| `successRate` | [Number](Number.md) | [成功率] % (0〜100) |
| `repeats` | [Number](Number.md) | [連続回数] \(1〜9) |
| `tpGain` | [Number](Number.md) | [得TP] \(0〜100) |
| `hitType` | [Number](Number.md) | [命中タイプ](#命中タイプ) |
| `animationId` | [Number](Number.md) | [アニメーションID](#アニメーションid) |
| `damage` | [RPG.Damage](RPG.Damage.md) | [ダメージ] |
| `effects` | [Array](Array.md).&lt;[RPG.Effect](RPG.Effect.md)&gt; | [使用効果]の配列 |


#### 範囲
陣営(なし、敵、味方、敵と味方、使用者)<br />
数(単体、全体、ランダム)<br />
状態(生存、戦闘不能、無条件)<br />
の組み合わせで以下のパターンが指定可能。

| 番号 | [範囲] |
| --- | --- |
|  0 | なし |
|  1 | 敵単体 |
|  2 | 敵全体 |
|  3 | 敵 1 体ランダム |
|  4 | 敵 2 体ランダム |
|  5 | 敵 3 体ランダム |
|  6 | 敵 4 体ランダム |
|  7 | 味方単体(生存) |
|  8 | 味方全体(生存) |
|  9 | 味方単体(戦闘不能) |
|  10 | 味方全体(戦闘不能) |
|  11 | 使用者 |
|  12 | **@MZ** 味方単体(無条件) |
|  13 | **@MZ** 味方全体(無条件) |
|  14 | **@MZ** 敵と味方全体 |

#### 使用可能時

| 番号 | [使用可能時] |
| --- | --- |
| 0 | 常時 |
| 1 | バトル画面 |
| 2 | メニュー画面 |
| 3 | 使用不可 |

#### 命中タイプ
hitType は [Game_Action](Game_Action.md) の定数として定義されている。例えば、<code>Game_Action.HITTYPE_CERTAIN</code> のような形で使う。

| 番号 | 定数 | [命中タイプ] |
| --- | --- | --- |
| 0 | `HITTYPE_CERTAIN` | 必中 |
| 1 | `HITTYPE_PHYSICAL` | 物理攻撃 |
| 2 | `HITTYPE_MAGICAL` | 魔法攻撃 |

#### アニメーションID
[データベース]-[[アニメーション](RPG.Animation.md)]で設定されたID。

| ID | [アニメーション] | 説明 |
| --- | --- | --- |
| -1 | 通常攻撃 | 装備中の [RPG.Weapon](RPG.Weapon.md) の animationId が使われる |
| 0 | なし |
| 1〜 | 任意 | [アニメーション]で設定した内容 |

[通常攻撃]で武器を装備していない場合、[Game_Actor.bareHandsAnimationId()](Game_Actor.md#barehandsanimationid---number) (規定値:1) のIDが使われる。
