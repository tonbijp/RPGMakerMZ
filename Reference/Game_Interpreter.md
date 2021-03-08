[クラスツリー](index.md)

# クラス: Game_Interpreter

### new Game_Interpreter (depth)
[実行内容]に書かれたイベントコマンドを実行するクラス。 

このクラスはプラグインコマンドを処理する[pluginCommand](Game_Interpreter.md#plugincommand-command-args)を含む。

イベントコマンドの[スクリプト]を実行する際は、このオブジェクトのインスタンスが this になるので、少々乱暴だが拡張コマンドをメソッドとして追加すると便利。

実行箇所や [[トリガー]](RPG.EventPage.md#トリガー) が[並列実行]であるかによって、Game_Interpreter を保持しているオブジェクトは次の異なったものがある。<br />
[Game_Troop](Game_Troop.md)、[Game_Map](Game_Map.md)、[Game_CommonEvent](Game_CommonEvent.md)、[Game_Event](Game_Event.md)、[Game_Interpreter](Game_Interpreter.md)

v1.1.1、v1.2.0  で変更あり。

関連クラス: [RPG.EventPage](RPG.EventPage.md), [Game_Character](Game_Character.md), [Game_Message](Game_Message.md), [ImageManager](ImageManager.md)


#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `depth` | [Number](Number.md) | 世代(規定値:0)childとして何度よばれたかの深さ |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_depth` | [Number](Number.md) | 世代 |
| `_branch` | Object | インデントごとの分岐処理状況 |
| `_indent` | [Number](Number.md) | インデントの深さ |
| `_frameCount` | [Number](Number.md) | フレーム数 |
| `_freezeChecker` | [Number](Number.md) | 停止チェック用カウンタ |
| `_mapId` | [Number](Number.md) | コマンドがあるマップID |
| `_eventId` | [Number](Number.md) | コマンドがあるイベントID |
| `_list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; | コマンドのリスト |
| `_index` | [Number](Number.md) | 現在処理中のコマンドのインデックス |
| `_waitCount` | [Number](Number.md) | [ウェイト]用のカウンタ |
| `_waitMode` | [String](String.md) | [ウエイトモード](Game_Interpreter#ウエイトモード) |
| `_comments` | [Array](Array.md) | コメント行の一時保存 |
| `_character` | [Game_Event](Game_Event.md) | コマンド対象イベント |
| `_childInterpreter` | [Game_Interpreter](Game_Interpreter.md) | 子インタプリタ |

#### ウエイトモード

| 文字列 | 説明 |
| --- | ---|
| "message" | メッセージが終わるまで待つ |
| "transfer" | 遷移効果が終わるまで待つ |
| "scroll" | スクロールが終わるまで待つ |
| "route" | 移動が終わるまで待つ |
| "animation" | アニメーションが終わるまで待つ |
| "balloon" | フキダシが終わるまで待つ |
| "gather" | フォロワーの集合が終わるまで待つ |
| "action" | アクションが終わるまで待つ |
| "video" | 動画が終わるまで待つ |
| "image" | 画像表示が終わるまで待つ |

### 廃止MVプロパティ
`_params`


### メソッド
イベントコマンドに対応した commandXxx メソッドは、[別ファイル](Game_Interpreter_command.md)に分けています。<br />
が、単にコマンンド並べているだけなので、詳しい内容はトリアコンタンさんの
[RPGツクールMZ スクリプトリファレンス](https://docs.google.com/spreadsheets/d/1aqY-xzFqT0vnZE-OkfsMYsP9Ud91vWTrBLU-uDkJ-Ls/edit#gid=2095105278) を参照してください。


#### changeHp (target, value, allowDeath)
[HP]を指定値により増減する。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象アクターまたは敵 |
| `value` | [Number](Number.md) | 変更するHPの量 |
| `allowDeath` | Boolean | 死亡していても適用するか |


#### character (param) → {[Game_Character](Game_Character.md)}
指定したIDの[Game_Event](Game_Event.md)を返す。<br />
0 だとコマンドを含むイベント自身を返す。
マイナスの値の場合 [Game_Player](Game_Player.md) を返す。<br />
[隊列メンバー]オブジェクトを得るには、[Game_Followers.follower()](Game_Followers.md#follower-index--game_follower) を使う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param` | [Number](Number.md) | イベントID |


#### checkFreeze () → {Boolean}
インタプリタが固まっていないか。


#### checkOverflow ()
オーバーフローを起こしていないか。


#### clear ()
インタプリタの状態をクリア。


#### currentCommand () → {[RPG.EventCommand](RPG.EventCommand.md)}
処理対象となっているコマンドを返す。


#### eventId () → {[Number](Number.md)}
コマンド呼び出し元 イベントID を返す。


#### executeCommand () → {Boolean}
処理対象のコマンドを実行して、結果を返す。


#### fadeSpeed () → {[Number](Number.md)}
フェード速度を返す。

See: [command221](Game_Interpreter.md#command221---boolean)、[command222](Game_Interpreter.md#command222---boolean)


#### gameDataOperand (type, param1, param2) → {[Number](Number.md)}
指定されたゲームデータを返す。

param1, param2 は type によって意味が変わる引数で、例えば type が 7 の場合 param1 は 0:Map ID, 1:Party Members, 2: Gold, 3: Steps, 4:Play Time, 5:Timer, 6:Save Count, 7:Battle Count, 8:Win Count, 9:Escape Count を意味する。

コマンド実行用のメソッドなので、各データが欲しい場合は例えば this.gameDataOperand( 7, 4 ) と書くより $gameSystem.playtime() と書いた方がいいだろう。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md) | 0:Item, 1:Weapon, 2:Armor, 3:Actor, 4:Enemy, 5:Character, 6:Party, 7: Other |
| `param1` | [Number](Number.md) | typeによって意味が異なる |
| `param2` | [Number](Number.md) | typeによって意味が異なる |


#### initialize ()
 オブジェクト生成時の初期化。


#### isRunning () → {Boolean}
インタプリタが稼働しているか。


#### iterateActorEx (param1, param2, callback)
アクターに繰り返し処理を行う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param1` | [Number](Number.md) | 0:直接ID指定、それ以外は変数指定 |
| `param2` | [Number](Number.md) | paramが0だとアクターID、それ以外はIDの入った変数の番号 |
| `callback` | function | コールバック関数 |


#### iterateActorId (param, callback)
アクターに繰り返し処理を行う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するアクターのID(0:全体) |
| `callback` | function | コールバック関数 |


#### iterateActorIndex (param, callback)
アクターに繰り返し処理を行う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するアクターの隊列番号(0:全体)  |
| `callback` | function | コールバック関数 |


#### iterateBattler (param1, param2, callback)
バトラーに繰り返し処理を行う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param1` | [Number](Number.md) | 0:エネミー |
| `param2` | [Number](Number.md) | 適用するバトラーの番号(0:全体) |
| `callback` | function | コールバック関数 |


#### iterateEnemyIndex (param, callback)
エネミーに繰り返し処理を行う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するエネミーの番号(0:全体 |
| `callback` | function | コールバック関数 |


#### jumpTo (index)
指定インデックスに処理対象を移動。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | コマンドのインデックス |


#### loadImages ()
**@MZ** コマンドで使用する画像を先読みしておく。


#### nextEventCode () → {[Number](Number.md)}
次のイベントコード(commandXXX の XXX部分)を返す。


#### operateValue (operation, operandType, operand) → {[Number](Number.md)}
符号の計算を行って結果を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `operation` | [Number](Number.md) | 0:プラス, 他はマイナス  |
| `operandType` | [Number](Number.md) | 0:直接の値, それ以外:変数  |
| `operand` | [Number](Number.md) |operandTypeが 0:値, それ以外:変数ID |


#### operateVariable (variableId, operationType, value)
値の計算を行って結果を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | 変数ID |
| `operationType` | [Number](Number.md) | 演算子の種類(0:=, 1:+, 2:-, 3:×, 4:÷, 5:%) |
| `value` | [Number](Number.md) | 値 |


#### picturePoint (params)→ {[Point](Point.md)}
**@MZ** command232 [2] - [ピクチャ] - [ピクチャの移動…] の画像表示位置を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `params` | [Array](Array.md).&lt;[String](String.md)&gt; | command232 の引数と同じ |


#### pluginCommand (command, args)
 プラグインコマンドを受け取るメソッド。
 このメソッドにプラグイン毎の処理を追加。 Example のような書き方が定番。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `command` | [String](String.md) |  コマンド名 |
| `args` | [Array](Array.md).&lt;[String](String.md)&gt; |  引数の配列 |


##### Example

```
const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function ( command, args ){
   _Game_Interpreter_pluginCommand.call( this, command, args );
  // ここにプラグインごとのコマンド名の判定と実行内容を書く
```


#### setup (list, eventId)
インタプリタの準備。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; | コマンドのリスト |
| `eventId` | [Number](Number.md) | イベントID |


#### setupChild (list, eventId)
[コモンイベント]用の子インタプリタの準備。

See: [command117](Game_Interpreter.md#command117---boolean)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; | コマンドのリスト |
| `eventId` | [Number](Number.md) | イベントID |


#### setupChoices (params)
選択ウィンドウの準備。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `params` | [Array](Array.md).&lt;*&gt; | 選択ウィンドウの設定 |


#### setupItemChoice (params)
アイテム選択ウィンドウの準備。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `params` | [Array](Array.md).&lt;[Number](Number.md)&gt; | アイテム選択ウィンドウの設定 |


#### setupNumInput (params)
数値入力ウィンドウの準備。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `params` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 数値入力ウィンドウの設定 |


#### setupReservedCommonEvent () → {Boolean}
コモンイベントが保存されていたら準備し、保存されていたかを返す。


#### setWaitMode (waitMode)
ウエイトモードを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `waitMode` | [String](String.md) | [ウエイトモード](Game_Interpreter#ウエイトモード) |


#### skipBranch ()
条件などの分岐を飛ばす。


#### terminate ()
終端処理を行う。


#### update ()
フレーム毎のアップデート。

#### updateChild () → {Boolean}
子インタプリタをアップデート。


#### updateWait () → {Boolean}
待ち状態をアップデート。


#### updateWaitCount () → {Boolean}
待ちカウントをアップデート。


#### updateWaitMode () → {Boolean}
[ウエイトモード](Game_Interpreter#ウエイトモード)をアップデート


#### videoFileExt () → {[String](String.md)}
ビデオの拡張子 '.webm' か '.mp4' を返す。


#### wait (duration)
指定フレームだけインタプリタの実行を待つ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フレーム数 |



### 廃止MVメソッド
requestImages (list, commonList opt)
