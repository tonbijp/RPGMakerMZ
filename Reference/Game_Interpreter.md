# Class: Game_Interpreter

### new Game_Interpreter (depth)
[実行内容]に書かれたイベントコマンドを実行するクラス。 

このクラスはプラグインコマンドを処理する[pluginCommand](Game_Interpreter.md#plugincommand-command-args)を含む。

commandXXX(XXXは数字)というメソッドはイベントコマンドに対応した処理を行う。<br />
詳細は 
[RPGツクールMV プラグインコマンド集 リファレンス \[イベントコード一覧\]](https://docs.google.com/spreadsheets/d/1rOIzDuhLC6IqJPEFciYOmXWL_O7X9-hMValMs7DpWCk/edit#gid=1266374350) を参照。

イベントコマンドの[スクリプト]を実行する際は、このオブジェクトのインスタンスが this になるので、少々乱暴だが拡張コマンドをメソッドとして追加すると便利。

実行箇所や [[トリガー]](RPG.EventPage.md#トリガー) が[並列実行]であるかによって、Game_Interpreter を保持しているオブジェクトは次の異なったものがある。<br />
[Game_Troop](Game_Troop.md)、[Game_Map](Game_Map.md)、[Game_CommonEvent](Game_CommonEvent.md)、[Game_Event](Game_Event.md)、[Game_Interpreter](Game_Interpreter.md)

関連クラス: [RPG.EventPage](RPG.EventPage.md), [Game_Character](Game_Character.md), [Game_Message](Game_Message.md), [ImageManager](ImageManager.md)


#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `depth` | [Number](Number.md) | 世代(規定値:0)childとして何度よばれたかの深さ |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_depth` | [Number](Number.md) | 世代 |
| `_branch` | Object | インデントごとの分岐処理状況 |
| `_params` | [Array](Array.md).&lt;*&gt; | コマンドのパラメータ |
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

| waitMode | Description |
| --- | ---|
| 'message' | メッセージが終わるまで待つ |
| 'transfer' | 遷移効果が終わるまで待つ |
| 'scroll' | スクロールが終わるまで待つ |
| 'route' | 移動が終わるまで待つ |
| 'animation' | アニメーションが終わるまで待つ |
| 'balloon' | フキダシが終わるまで待つ |
| 'gather' | フォロワーの集合が終わるまで待つ |
| 'action' | アクションが終わるまで待つ |
| 'video' | 動画が終わるまで待つ |
| 'image' | 画像表示が終わるまで待つ |

### Methods

#### (static) requestImages (list, commonList opt)
コマンドに含まれる画像を用意する。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; |  | コマンドの配列 |
| `commonList` | [Array](Array.md).&lt;*&gt; | &lt;optional&gt; | 既に対象となったコモンイベントのインデックスの配列 |


#### changeHp (target, value, allowDeath)
[HP]を指定値により増減する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象アクターまたは敵 |
| `value` | [Number](Number.md) | 変更するHPの量 |
| `allowDeath` | Boolean | 死亡していても適用するか |


#### character (param) → {[Game_Character](Game_Character.md)}
指定したIDの[Game_Event](Game_Event.md)を返す。<br />
0 だとコマンドを含むイベント自身を返す。
マイナスの値の場合 [Game_Player](Game_Player.md) を返す。<br />
[隊列メンバー]オブジェクトを得るには、[Game_Followers.follower()](Game_Followers.md#follower-index--game_follower) を使う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) | イベントID |


#### checkFreeze () → {Boolean}
インタプリタが固まっていないか。


#### checkOverflow ()
オーバーフローを起こしていないか。


#### clear ()
インタプリタの状態をクリア。


#### command101 () → {Boolean}
[1] - [メッセージ] - [文章の表示…]


#### command102 () → {Boolean}
[1] - [メッセージ] - [選択肢の表示…]


#### command103 () → {Boolean}
[1] - [メッセージ] - [数値入力の処理…]


#### command104 () → {Boolean}
[1] - [メッセージ] - [アイテム選択の処理…]


#### command105 () → {Boolean}
[1] - [メッセージ] - [文章のスクロール表示…]


#### command108 () → {Boolean}
[1] - [フロー制御] - [注釈…]


#### command111 () → {Boolean}
[1] - [フロー制御] - [条件分岐…]


#### command112 () → {Boolean}
[1] - [フロー制御] - [ループ…]


#### command113 () → {Boolean}
[1] - [フロー制御] - [ループの中断]


#### command115 () → {Boolean}
[1] - [フロー制御] - [イベント処理の中断]


#### command117 () → {Boolean}
[1] - [フロー制御] - [コモンイベント…]


#### command118 () → {Boolean}
[1] - [フロー制御] - [ラベル…]


#### command119 () → {Boolean}
[1] - [フロー制御] - [ラベルジャンプ…]


#### command121 () → {Boolean}
[1] - [ゲーム進行] - [スイッチの操作…]


#### command122 () → {Boolean}
[1] - [ゲーム進行] - [変数の操作…]


#### command123 () → {Boolean}
[1] - [ゲーム進行] - [セルフスイッチの操作…]


#### command124 () → {Boolean}
[1] - [ゲーム進行] - [タイマーの操作…]


#### command125 () → {Boolean}
[1] - [パーティ] - [所持金の増減…]


#### command126 () → {Boolean}
[1] - [パーティ] - [アイテムの増減…]


#### command127 () → {Boolean}
[1] - [パーティ] - [武器の増減…]


#### command128 () → {Boolean}
[1] - [パーティ] - [防具の増減…]


#### command129 () → {Boolean}
[1] - [パーティ] - [メンバーの入れ替え…]


#### command132 () → {Boolean}
[3] - [システム設定] - [戦闘BGMの変更…]


#### command133 () → {Boolean}
[3] - [システム設定] - [勝利MEの変更…]


#### command134 () → {Boolean}
[3] - [システム設定] - [セーブ禁止の変更…]


#### command135 () → {Boolean}
[3] - [システム設定] - [メニュー禁止の変更…]


#### command136 () → {Boolean}
[3] - [システム設定] - [エンカウント禁止の変更…]


#### command137 () → {Boolean}
[3] - [システム設定] - [並び替え禁止の変更…]


#### command138 () → {Boolean}
[3] - [システム設定] - [ウィンドウカラーの変更…]


#### command139 () → {Boolean}
[3] - [システム設定] - [敗北MEの変更…]


#### command140 () → {Boolean}
[3] - [システム設定] - [乗り物BGMの変更…]


#### command201 () → {Boolean}
[2] - [移動] - [場所移動…]


#### command202 () → {Boolean}
[2] - [移動] - [乗り物の位置設定…]


#### command203 () → {Boolean}
[2] - [移動] - [イベントの位置設定…]


#### command204 () → {Boolean}
[2] - [移動] - [マップのスクロール…]


#### command205 () → {Boolean}
[2] - [移動] - [移動ルートの設定…]


#### command206 () → {Boolean}
[2] - [移動] - [乗り物の乗降]


#### command211 () → {Boolean}
[2] - [キャラクター] - [透明状態の変更…]


#### command212 () → {Boolean}
[2] - [キャラクター] - [アニメーションの表示…]


#### command213 () → {Boolean}
[2] - [キャラクター] - [フキダシアイコンの表示…]


#### command214 () → {Boolean}
[2] - [キャラクター] - [イベントの一時消去]


#### command216 () → {Boolean}
[2] - [キャラクター] - [隊列歩行の変更…]


#### command217 () → {Boolean}
[2] - [キャラクター] - [隊列メンバーの集合]


#### command221 () → {Boolean}
[2] - [画面] - [画面のフェードアウト]


#### command222 () → {Boolean}
[2] - [画面] - [画面のフェードイン]


#### command223 () → {Boolean}
[2] - [画面] - [画面の色調変更…]


#### command224 () → {Boolean}
[2] - [画面] - [画面のフラッシュ…]


#### command225 () → {Boolean}
[2] - [画面] - [画面のシェイク…]


#### command230 () → {Boolean}
[2] - [タイミング] - [ウェイト…]


#### command231 () → {Boolean}
[2] - [ピクチャ] - [ピクチャの表示…]


#### command232 () → {Boolean}
[2] - [ピクチャ] - [ピクチャの移動…]


#### command233 () → {Boolean}
[2] - [ピクチャ] - [ピクチャの回転…]


#### command234 () → {Boolean}
[2] - [ピクチャ] - [ピクチャの色調変更…]


#### command235 () → {Boolean}
[2] - [ピクチャ] - [ピクチャの消去…]


#### command236 () → {Boolean}
[2] - [画面] - [天候の設定…]


#### command241 () → {Boolean}
[2] - [オーディオ・ビデオ] - [BGMの演奏…]


#### command242 () → {Boolean}
[2] - [オーディオ・ビデオ] - [BGMのフェードアウト…]


#### command243 () → {Boolean}
[2] - [オーディオ・ビデオ] - [BGMの保存]


#### command244 () → {Boolean}
[2] - [オーディオ・ビデオ] - [BGMの再開]


#### command245 () → {Boolean}
[2] - [オーディオ・ビデオ] - [BGSの演奏…]


#### command246 () → {Boolean}
[2] - [オーディオ・ビデオ] - [BGSのフェードアウト…]


#### command249 () → {Boolean}
[2] - [オーディオ・ビデオ] - [MEの演奏…]


#### command250 () → {Boolean}
[2] - [オーディオ・ビデオ] - [SEの演奏…]


#### command251 () → {Boolean}
[2] - [オーディオ・ビデオ] - [SEの停止…]


#### command261 () → {Boolean}
[2] - [オーディオ・ビデオ] - [ムービーの再生…]


#### command281 () → {Boolean}
[3] - [マップ] - [マップ名表示の変更…]


#### command282 () → {Boolean}
[3] - [マップ] - [タイルセットの変更…]


#### command283 () → {Boolean}
[3] - [マップ] - [戦闘背景の変更…]


#### command284 () → {Boolean}
[3] - [マップ] - [遠景の変更…]


#### command285 () → {Boolean}
[3] - [マップ] - [指定位置の情報取得…]


#### command301 () → {Boolean}
[3] - [シーン制御] - [戦闘の処理…]


#### command302 () → {Boolean}
[3] - [シーン制御] - [ショップの処理…]


#### command303 () → {Boolean}
[3] - [シーン制御] - [名前入力の処理…]


#### command311 () → {Boolean}
[1] - [アクター] - [HPの増減…]


#### command312 () → {Boolean}
[1] - [アクター] - [MPの増減…]


#### command313 () → {Boolean}
[1] - [アクター] - [ステートの増減…]


#### command314 () → {Boolean}
[1] - [アクター] - [全回復…]


#### command315 () → {Boolean}
[1] - [アクター] - [経験値の増減…]


#### command316 () → {Boolean}
[1] - [アクター] - [レベルの増減…]


#### command317 () → {Boolean}
[1] - [アクター] - [能力値の増減…]


#### command318 () → {Boolean}
[1] - [アクター] - [スキルの増減…]


#### command319 () → {Boolean}
[1] - [アクター] - [装備の変更…]


#### command320 () → {Boolean}
[1] - [アクター] - [名前の変更…]


#### command321 () → {Boolean}
[1] - [アクター] - [職業の変更…]


#### command322 () → {Boolean}
[3] - [システム設定] - [アクターの画像変更…]


#### command323 () → {Boolean}
[3] - [システム設定] - [乗り物の変更…]


#### command324 () → {Boolean}
[1] - [アクター] - [二つ名の変更…]


#### command325 () → {Boolean}
[1] - [アクター] - [プロフィールの変更…]


#### command326 () → {Boolean}
[1] - [アクター] - [TPの変更…]


#### command331 () → {Boolean}
[3] - [バトル] - [敵キャラのHP増減…]


#### command332 () → {Boolean}
[3] - [バトル] - [敵キャラのMP増減…]


#### command333 () → {Boolean}
[3] - [バトル] - [敵キャラのステート変更…]


#### command334 () → {Boolean}
[3] - [バトル] - [敵キャラの全回復…]


#### command335 () → {Boolean}
[3] - [バトル] - [敵キャラの出現…]


#### command336 () → {Boolean}
[3] - [バトル] - [敵キャラの変身…]


#### command337 () → {Boolean}
[3] - [バトル] - [戦闘アニメーションの表示…]


#### command339 () → {Boolean}
[3] - [バトル] - [戦闘行動の強制…]


#### command340 () → {Boolean}
[3] - [バトル] - [バトルの中断]


#### command342 () → {Boolean}
[3] - [バトル] - [敵キャラのTP増減…]


#### command351 () → {Boolean}
[3] - [シーン制御] - [メニュー画面を開く]


#### command352 () → {Boolean}
[3] - [シーン制御] - [セーブ画面を開く]


#### command353 () → {Boolean}
[3] - [シーン制御] - [ゲームオーバー]


#### command354 () → {Boolean}
[3] - [シーン制御] - [タイトル画面に戻す]


#### command355 () → {Boolean}
[3] - [上級] - [スクリプト…]


#### command356 () → {Boolean}
[3] - [上級] - [プラグインコマンド…]


#### command402 () → {Boolean}
[1] - [メッセージ] - [選択肢の表示…] で [選択肢のとき]の分岐。


#### command403 () → {Boolean}
[1] - [メッセージ] - [選択肢の表示…] で [キャンセルのとき]の分岐。<br />
[キャンセル]の設定で[分岐]を選んだ場合。


#### command411 () → {Boolean}
[1] - [フロー制御] - [条件分岐…] で [それ以外のとき] の分岐。


#### command413 () → {Boolean}
[1] - [フロー制御] - [ループ…] の [以上繰り返し]


#### command601 () → {Boolean}
[3] - [シーン制御] - [戦闘の処理…] の [勝ったとき] の分岐。


#### command602 () → {Boolean}
[3] - [シーン制御] - [戦闘の処理…] の [逃げたとき] の分岐。


#### command603 () → {Boolean}
[3] - [シーン制御] - [戦闘の処理…] の [負けたとき] の分岐。


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

##### Parameters:

| Name | Type | Description |
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

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param1` | [Number](Number.md) | 0:直接ID指定、それ以外は変数指定 |
| `param2` | [Number](Number.md) | paramが0だとアクターID、それ以外はIDの入った変数の番号 |
| `callback` | function | コールバック関数 |


#### iterateActorId (param, callback)
アクターに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するアクターのID(0:全体) |
| `callback` | function | コールバック関数 |


#### iterateActorIndex (param, callback)
アクターに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するアクターの隊列番号(0:全体)  |
| `callback` | function | コールバック関数 |


#### iterateBattler (param1, param2, callback)
バトラーに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param1` | [Number](Number.md) | 0:エネミー |
| `param2` | [Number](Number.md) | 適用するバトラーの番号(0:全体) |
| `callback` | function | コールバック関数 |


#### iterateEnemyIndex (param, callback)
エネミーに繰り返し処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `param` | [Number](Number.md) | 適用するエネミーの番号(0:全体 |
| `callback` | function | コールバック関数 |


#### jumpTo (index)
指定インデックスに処理対象を移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | コマンドのインデックス |


#### nextEventCode () → {[Number](Number.md)}
次のイベントコード(commandXXX の XXX部分)を返す。


#### operateValue (operation, operandType, operand) → {[Number](Number.md)}
符号の計算を行って結果を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `operation` | [Number](Number.md) | 0:プラス, 他はマイナス  |
| `operandType` | [Number](Number.md) | 0:直接の値, それ以外:変数  |
| `operand` | [Number](Number.md) |operandTypeが 0:値, それ以外:変数ID |


#### operateVariable (variableId, operationType, value)
値の計算を行って結果を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `variableId` | [Number](Number.md) | 変数ID |
| `operationType` | [Number](Number.md) | 演算子の種類(0:=, 1:+, 2:-, 3:×, 4:÷, 5:%) |
| `value` | [Number](Number.md) | 値 |


#### pluginCommand (command, args)
 プラグインコマンドを受け取るメソッド。
 このメソッドにプラグイン毎の処理を追加。 Example のような書き方が定番。

##### Parameters:

| Name | Type | Description |
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

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; | コマンドのリスト |
| `eventId` | [Number](Number.md) | イベントID |


#### setupChild (list, eventId)
[コモンイベント]用の子インタプリタの準備。

See: [command117](Game_Interpreter.md#command117---boolean)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt; | コマンドのリスト |
| `eventId` | [Number](Number.md) | イベントID |


#### setupChoices (params)
選択ウィンドウの準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).&lt;*&gt; | 選択ウィンドウの設定 |


#### setupItemChoice (params)
アイテム選択ウィンドウの準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).&lt;[Number](Number.md)&gt; | アイテム選択ウィンドウの設定 |


#### setupNumInput (params)
数値入力ウィンドウの準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `params` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 数値入力ウィンドウの設定 |


#### setupReservedCommonEvent () → {Boolean}
コモンイベントが保存されていたら準備し、保存されていたかを返す。


#### setWaitMode (waitMode)
ウエイトモードを設定。

##### Parameters:

| Name | Type | Description |
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

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フレーム数 |




