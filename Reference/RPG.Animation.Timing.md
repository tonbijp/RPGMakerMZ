# Class: [RPG](RPG.md).[Animation](RPG.Animation.md).Timing
[アニメーション]の[SEとフラッシュのタイミング]を記述したデータ。

関連クラス: [Sprite_Animation](Sprite_Animation.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `frame` | [Number](Number.md) | [フレーム]番号(エディタで表示されるより1少ない) |
| `se` | [RPG.AudioFile](RPG.AudioFile.md) | [SE] |
| `flashScope` | [Number](Number.md) | [フラッシュ範囲](RPG.Animation.Timing.md#フラッシュ範囲) |
| `flashColor` | [Array](Array.md).&lt;[Number](Number.md)&gt; |フラッシュの色の配列 [ 赤, 緑, 青, 強さ ] |
| `flashDuration` | [Number](Number.md) | フラッシュの[時間] \(1/15秒単位) |

#### フラッシュ範囲
対象消去は対象としているバトラーの画像を消去するので、。

| 番号 | フラッシュ範囲 |
| --- | --- |
| 0 | なし |
| 1 | 対象(のバトラーがフラッシュ) |
| 2 | 画面(全体がフラッシュ) |
| 3 | 対象消去(されるので、flashColor の値は無視される) |

