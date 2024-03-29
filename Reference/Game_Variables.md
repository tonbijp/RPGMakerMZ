[クラスツリー](index.md)

# クラス: Game_Variables

| 大域変数 | セーブデータ |
| --- | --- |
| [$gameVariables](global.md#gamevariables-game_variables) | 保存される |

条件判定で使われる[変数]を扱うためのクラス。

変数はIDで管理されているが、[RPG.System](RPG.System.md)([$dataSystem](global.md#datasystem-rpgsystem)) の variables プロパティに変数名の文字列も存在している。

関連クラス: [Game_Switches](Game_Switches.md), [Game_SelfSwitches](Game_SelfSwitches.md)

### new Game_Variables ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_data` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 変数の内容の配列 |


### メソッド

#### clear ()
値を初期化。


#### initialize ()
 オブジェクト生成時の初期化。


#### onChange ()
変数の変更時に呼ばれるハンドラ。<br />
([イベント]の[出現条件]チェックを予約)


#### setValue (variableId, value)
指定した[変数]に値を設定。<br />
`value`には数字以外も設定できるが、空文字列("")などの `false` 相当値を設定した場合 [value ()](#value-variableid--) で取り出した時に 0 が返ってくるので注意。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | 変数ID |
| `value` | * | 値 |


#### value (variableId) → {*}
指定した[変数]の値を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | 変数ID |



