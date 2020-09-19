# Class: Game_SelfSwitches

### new Game_SelfSwitches ()

| 大域変数 | セーブデータ |
| --- | --- |
| [$gameSelfSwitches](global.md#gameselfswitches-game_selfswitches) | 保存される |

[EVページ]の条件判定で使われる[セルフスイッチ]を扱うためのクラス。

関連クラス: [Game_Variables](Game_Variables.md), [Game_Switches](Game_Switches.md), [RPG.EventPage](RPG.EventPage.md), [RPG.EventPage.Conditions](RPG.EventPage.Conditions.md), [RPG.BattleEventPage](RPG.BattleEventPage.md), [RPG.BattleEventPage.Conditions](RPG.BattleEventPage.Conditions.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_data` | Object | {key: Array, …} の形 |


### Methods

#### clear ()
[セルフスイッチ]のデータを初期化。


#### initialize ()
 オブジェクト生成時の初期化。


#### onChange ()
スイッチの変更時に呼ばれるハンドラ。
(マップの書き換えを予約)


#### setValue (key, value)
指定した[セルフスイッチ]に値を設定。<br />
タイプは A,B,C,D いずれかの文字。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [Array](Array.md).&lt;*&gt; | [ マップID, イベントID, タイプ ] の配列 |
| `value` | Boolean | スイッチがONか |


#### value (key) → {Boolean}
指定キーの値がONか。<br />
タイプは A,B,C,D いずれかの文字。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [Array](Array.md).&lt;*&gt;  |  [ マップID, イベントID, タイプ ] の配列 |



