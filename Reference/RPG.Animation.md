# Class: [RPG](RPG.md).Animation

| データベース| JSONファイル | 大域変数 | スプライト |
| --- | --- | --- | --- |
| [アニメーション] | Animations.json | [$dataAnimations](global.md#dataanimations-arrayrpganimation)(配列) | [Sprite_Animation](Sprite_Animation.md) |

同時表示可能な画像2種類があり。画像には複数のパターンが含まれる。<br />
2つの画像は連結され、パターン番号は共有される。

関連クラス: [RPG.UsableItem](RPG.UsableItem.md), [RPG.Weapon](RPG.Weapon.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) | アニメーションID |
| `name` | [String](String.md) | エディタで表示される[名前] |
| `animation1Name` | [String](String.md) | [画像]1のファイル名(img/animations/ フォルダで、拡張子を含まない) |
| `animation1Hue` | [Number](Number.md) |[画像]1の色相(0〜360) |
| `animation2Name` | [String](String.md) | [画像]2のファイル名((img/animations/ フォルダで、拡張子を含まない) |
| `animation2Hue` | [Number](Number.md) | [画像]2の色相(0〜360) |
| `position` | [Number](Number.md) | [[位置](RPG.Animation.md#位置)] |
| `frameMax` | [Number](Number.md) | 最大[フレーム数] |
| `frames` | [Array](Array.md).&lt;[Array](Array.md).&lt;[Array](Array.md).&lt;[Number](Number.md)&gt;&gt;&gt; | [フレーム情報](RPG.Animation.md#フレーム情報) |
| `timings` | [Array](Array.md).&lt;[RPG.Animation.Timing](RPG.Animation.Timing.md)&gt; | [SEとフラッシュのタイミング]の配列 |

#### 位置
[頭上][中心][足元]が全体攻撃で使用された場合、個別のバトラーに表示される。

| 番号 | [位置] |
| --- | --- |
| 0 | 頭上 |
| 1 | 中心 |
| 2 | 足下 |
| 3 | 画面 |

#### フレーム情報
3次元配列で frames[フレーム番号][セル番号][データ] という構造を持っている。

| 番号 | [データ] |
| --- | --- |
| 0 | [パターン]番号 |
| 1 | [X]座標(ピクセル) |
| 2 | [Y]座標(ピクセル) |
| 3 | [拡大率]\(%) |
| 4 | [回転角度]\(360度) |
| 5 | [左右反転]\(0:なし, 1:あり) |
| 6 | [不透明度] |
| 7 | [[合成方法]](Sprite.md#合成方法) |


### Classes

* [RPG.Animation.Timing](RPG.Animation.Timing.md)

