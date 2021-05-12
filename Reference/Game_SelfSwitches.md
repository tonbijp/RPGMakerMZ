[クラスツリー](index.md)

# クラス: Game_SelfSwitches

### new Game_SelfSwitches ()

| 大域変数 | セーブデータ |
| --- | --- |
| [$gameSelfSwitches](global.md#gameselfswitches-game_selfswitches) | 保存される |

[EVページ]の条件判定で使われる[セルフスイッチ]を扱うためのクラス。

関連クラス: [Game_Variables](Game_Variables.md), [Game_Switches](Game_Switches.md), [RPG.EventPage](RPG.EventPage.md), [RPG.EventPage.Conditions](RPG.EventPage.Conditions.md), [RPG.BattleEventPage](RPG.BattleEventPage.md), [RPG.BattleEventPage.Conditions](RPG.BattleEventPage.Conditions.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_data` | Object | { [MV.SelfSwitch](MV.SelfSwitch.md): Boolean, …} の形 |


### メソッド

#### clear ()
[セルフスイッチ]のデータを初期化。


#### initialize ()
 オブジェクト生成時の初期化。


#### onChange ()
スイッチの変更時に呼ばれるハンドラ。<br />
(マップの書き換えを予約)


#### setValue (key, value)
指定した[セルフスイッチ]に値を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `key` | [MV.SelfSwitch](MV.SelfSwitch.md)  | [セルフスイッチ]の指定キー |
| `value` | Boolean | スイッチがONか |


#### value (key) → {Boolean}
指定キーの値がONか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `key` | [MV.SelfSwitch](MV.SelfSwitch.md)  | [セルフスイッチ]の指定キー |



