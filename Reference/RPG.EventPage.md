# Class: [RPG](RPG.md).EventPage
イベントの[EVページ]を構成するJSONデータ。

[RPG.Event](RPG.Event.md)  pages プロパティに含まれている。

関連クラス: [RPG.BattleEventPage](RPG.BattleEventPage.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `conditions` | [RPG.EventPage.Conditions](RPG.EventPage.Conditions.md) | [出現条件] |
| `image` | [RPG.EventPage.Image](RPG.EventPage.Image.md) | [画像] |
| `moveType` | [Number](Number.md) | [自律移動の[タイプ]](RPG.EventPage.md#自律移動のタイプ)  |
| `moveSpeed` | [Number](Number.md) | [自律移動の[速度]](RPG.EventPage.md#自律移動の速度) |
| `moveFrequency` | [Number](Number.md) | [自律移動の[頻度]](RPG.EventPage.md#自律移動の頻度) |
| `moveRoute` | [Array](Array.md).&lt;[RPG.MoveRoute](RPG.MoveRoute.md)&gt; | [ルート] \(moveType が 3: カスタム の場合に有効) |
| `walkAnime` | Boolean | [歩行アニメ] |
| `stepAnime` | Boolean | [足踏みアニメ] |
| `directionFix` | Boolean | [向き固定] |
| `through` | Boolean | [すり抜け] |
| `priorityType` | [Number](Number.md) | [[プライオリティ]](RPG.EventPage.md#プライオリティ) |
| `trigger` | [Number](Number.md) | [[トリガー]](RPG.EventPage.md#トリガー) |
| `list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; | [実行内容] |

#### 自律移動の[タイプ] 

| 番号 | [タイプ] |
| --- | --- |
| 0 | 固定 |
| 1 | ランダム |
| 2 | 近づく |
| 3 | カスタム |

#### 自律移動の[速度] 

| 番号 | [速度]  |
| --- | --- |
| 1 | 1/8倍速 |
| 2 | 1/4倍速 |
| 3 | 1/2倍速 |
| 4 | 標準速 |
| 5 | 2倍速 |
| 6 | 4倍速 |

#### 自律移動の[頻度] 

| 番号 | [頻度]  |
| --- | --- |
| 1 | 最低 |
| 2 | 低 |
| 3 | 標準 |
| 4 | 高 |
| 5 | 最高 |

#### [プライオリティ]

| 番号 | [プライオリティ] |
| --- | --- |
| 0 | 通常キャラの下 |
| 1 | 通常キャラと同じ |
| 2 | 通常キャラの上 |

#### [トリガー]

| 番号 | [トリガー] |
| --- | --- |
| 0 | 決定ボタン |
| 1 | プレイヤーから接触 |
| 2 | イベントから接触 |
| 3 | 自動実行 |
| 4 | 並列処理 |


### Classes

* [RPG.EventPage.Conditions](RPG.EventPage.Conditions.md)
* [RPG.EventPage.Image](RPG.EventPage.Image.md)
