# Class: Game_Temp

### new Game_Temp ()

| 大域変数 |
| --- |
| [$GameTemp](global.md#gametemp-game_temp) |

ゲームの一時データを保持しておくクラス。

関連クラス: [Game_CommonEvent](Game_CommonEvent.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_isPlaytest` | Boolean |  |
| `_commonEventId` | [Number](Number.md) |  |
| `_destinationX` | [Number](Number.md) |  |
| `_destinationY` | [Number](Number.md) |  |


### Methods

#### clearCommonEvent ()
一時保存の[コモンイベント]を消去。

#### clearDestination ()
プレイヤーの移動目標データを消去。

#### destinationX () → {[Number](Number.md)}
移動目標の x座標を返す。

#### destinationY () → {[Number](Number.md)}
移動目標の y座標を返す。

#### initialize ()
 オブジェクト生成時の初期化。

#### isCommonEventReserved () → {Boolean}
[コモンイベント]が保存されているか。

#### isDestinationValid () → {Boolean}
目標位置が正しいデータか。

#### isPlaytest () → {Boolean}
テストモードか。

#### reserveCommonEvent (commonEventId)
指定[コモンイベント]を、あとで処理するために保持。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `commonEventId` | [Number](Number.md) | コモンイベントID |


#### reservedCommonEvent () → {*}
一時保存された[コモンイベント]を返す。

#### setDestination (x, y)
移動目標の座標を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(タイル数) |
| `y` | [Number](Number.md) | y座標(タイル数) |
