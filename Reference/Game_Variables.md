# Class: Game_Variables

### new Game_Variables ()

| 大域変数 | セーブデータ |
| --- | --- |
| [$gameVariables](global.md#gamevariables-game_variables) | 保存される |

条件判定で使われる[変数]を扱うためのクラス。

変数はIDで管理されているが、[RPG.System](RPG.System.md)([$dataSystem](global.md#datasystem-rpgsystem)) の variables プロパティに文字列も存在している。

関連クラス: [Game_Switches](Game_Switches.md), [Game_SelfSwitches](Game_SelfSwitches.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_data` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 変数の内容の配列 |


### Methods

#### clear ()
値を初期化。


#### initialize () オブジェクト生成時の初期化。


#### onChange ()
スイッチの変更時に呼ばれるハンドラ。
(マップの書き換えを予約)


#### setValue (variableId, value)
指定した[変数]に値を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | 変数ID |
| `value` | * | 値 |


#### value (variableId) → {*}
指定した[変数]の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | 変数ID |


