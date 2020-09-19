# Class: Game_Switches

### new Game_Switches ()

| 大域変数 | セーブデータ |
| --- | --- |
| [$gameSwitches](global.md#gameswitches-game_switches) | 保存される |

条件判定で使われる[スイッチ]を扱うためのクラス。

スイッチはIDで管理されているが、[RPG.System](RPG.System.md)([$dataSystem](global.md#datasystem-rpgsystem)) の switches プロパティに文字列も存在している。

関連クラス: [Game_Variables](Game_Variables.md), [Game_SelfSwitches](Game_SelfSwitches.md) 


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_data` | [Array](Array.md).&lt;Boolean&gt; | 真偽値の配列 |


### Methods

#### clear ()
値を初期化。


#### initialize ()
 オブジェクト生成時の初期化。


#### onChange ()
スイッチの変更時に呼ばれるハンドラ。
(マップの書き換えを予約)


#### setValue (switchId, value)
指定した[スイッチ]に値を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `switchId` | [Number](Number.md) | スイッチID |
| `value` | Boolean | スイッチがONか |


#### value (switchId)
指定した[スイッチ]の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `switchId` | [Number](Number.md) | スイッチID |


