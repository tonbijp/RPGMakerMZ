# Class: BattleManager
戦闘の進行を制御する静的クラス。

関連クラス: [Game_Actor](Game_Actor.md), [Game_Party](Game_Party.md), [Game_Enemy](Game_Enemy.md), [Game_Troop](Game_Troop.md), [Scene_Battle](Scene_Battle.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_phase` | [String](String.md) | [static] [行動状態](BattleManager.md#行動状態) |
| `_canEscape` | Boolean | [static] [逃走可] |
| `_canLose` | Boolean | [static] [敗北可] |
| `_battleTest` | Boolean | [static] [戦闘テスト]か |
| `_eventCallback` | function | [static] コールバック関数 |
| `_preemptive` | Boolean | [static] [先制攻撃]か |
| `_surprise` | Boolean | [static] [不意打ち]か |
| `_actorIndex` | [Number](Number.md) | [static] アクター番号 |
| `_actionForcedBattler` | [Game_Battler](Game_Battler.md) | [static] 強制行動のアクター |
| `_mapBgm` | [MV.AudioParameters](MV.AudioParameters.md) | [static] 戦闘BGM |
| `_mapBgs` | [MV.AudioParameters](MV.AudioParameters.md) | [static] 戦闘BGS |
| `_actionBattlers` | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | [static] アクションを行うバトラーの配列(行動順) |
| `_subject` | [Game_Battler](Game_Battler.md) | [static] 対象バトラー |
| `_action` | [Game_Action](Game_Action.md) | [static] アクション |
| `_targets` | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | [static] 目標バトラーの配列 |
| `_logWindow` | [Window_BattleLog](Window_BattleLog.md) | [static] ログウィンドウ |
| `_statusWindow` | [Window_BattleStatus](Window_BattleStatus.md) | [static] ステータスウィンドウ |
| `_spriteset` | [Spriteset_Battle](Spriteset_Battle.md) | [static] スプライトセット |
| `_escapeRatio` | [Number](Number.md) | [static] 逃走確率 |
| `_escaped` | Boolean | [static] 逃走成功か |
| `_rewards` | [MV.BattleRewards](MV.BattleRewards.md) | [static] 報酬 |

#### 行動状態

| Phase | Description | update () |
| --- | --- | ---|
| 'init' | 初期化 |
| 'start' | 開始 | yes |
| 'input' | 入力 |
| 'turn' | ターン進行 | yes |
| 'action' | アクション | yes |
| 'turnEnd' | ターン終了 | yes |
| 'battleEnd' | 戦闘終了 | yes |
| 'aborting' | 戦闘中断 |
| 'waiting' | 待ち状態 |
| null | 戦闘シーンではない | 


### Methods

#### (static) abort ()
中止。


#### (static) actor () → {[Game_Actor](Game_Actor.md)}
アクターを返す。


#### (static) allBattleMembers () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}
戦闘に参加している全バトラーを返す。


#### (static) applySubstitute (target) → {[Game_Battler](Game_Battler.md)}
対象が死んでいるなどしたら、代わりを選んで返す。
問題なければ、対象をそのまま返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### (static) canEscape () → {Boolean}
[逃走可]か。


#### (static) canLose () → {Boolean}
[敗北可]か。


#### (static) changeActor (newActorIndex, lastActorActionState)
アクターの変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `newActorIndex` | [Number](Number.md) | 新しいアクターの番号 |
| `lastActorActionState` | [String](String.md) | 現在のアクターの行動状態 |


#### (static) checkAbort () → {Boolean}
パーティがいないなど中止する状態なら中止し、中止を実行したか返す。


#### (static) checkBattleEnd () → {Boolean}
味方か敵が全滅しているなど戦闘終了状態なら終了し、終了を実行したか返す。


#### (static) checkSubstitute (target) → {Boolean}
対象が死んでいるなどして代わりが必要か返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### (static) clearActor ()
アクターの順番を初期位置に戻す。


#### (static) displayDefeatMessage ()
[敗北]メッセージを表示。


#### (static) displayDropItems ()
[アイテム獲得]メッセージを表示。


#### (static) displayEscapeFailureMessage ()
[逃走失敗]メッセージを表示。


#### (static) displayEscapeSuccessMessage ()
[逃走成功]メッセージを表示。


#### (static) displayExp ()
[経験値獲得]メッセージを表示。


#### (static) displayGold ()
[お金獲得]メッセージを表示。


#### (static) displayRewards ()
報酬(経験値・お金・アイテム)メッセージを表示。


#### (static) displayStartMessages ()
[出現]メッセージを表示。


#### (static) displayVictoryMessage ()
[勝利]メッセージを表示。


#### (static) endAction ()
行動終了処理。


#### (static) endBattle (result)
戦闘終了処理。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `result` | [Number](Number.md) | 0:勝利 1:中断 2:敗北 |


#### (static) endTurn ()
ターン終了処理。


#### (static) forceAction (battler)
強制行動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### (static) gainDropItems ()
[ドロップアイテム]を返す。


#### (static) gainExp ()
[経験値]を返す。


#### (static) gainGold ()
[お金]を返す。


#### (static) gainRewards ()
報酬(経験値・お金・アイテム)を返す。


#### (static) getNextSubject () → {[Game_Battler](Game_Battler.md)}
次の対象バトラーを返す。


#### (static) initMembers ()
メンバ変数の初期化。


#### (static) inputtingAction () → {[Game_Action](Game_Action.md)}
入力中のアクターのアクションを返す。


#### (static) invokeAction (subject, target)
指定対象が指定目標に対してのアクションを起動する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### (static) invokeCounterAttack (subject, target)
指定対象が指定目標に対しての反撃アクションを起動する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### (static) invokeMagicReflection (subject, target)
指定対象が指定目標に対しての魔法反射アクションを起動する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### (static) invokeNormalAction (subject, target)
指定対象が指定目標に対しての通常アクションを起動する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### (static) isAborting () → {Boolean}
中断処理中か。


#### (static) isActionForced () → {Boolean}
強制行動中か。


#### (static) isBattleEnd () → {Boolean}
戦闘終了状態(敵か味方が全滅)か。


#### (static) isBattleTest () → {Boolean}
[戦闘テスト]での実行か。


#### (static) isBusy () → {Boolean}
メッセージ表示などの処理中か。


#### (static) isEscaped () → {Boolean}
逃走完了したか。


#### (static) isForcedTurn () → {Boolean}
強制されたターンか。


#### (static) isInputting () → {Boolean}
入力中か。


#### (static) isInTurn () → {Boolean}
ターンの最中か。


#### (static) isTurnEnd () → {Boolean}
ターンの終了状態か。


#### (static) makeActionOrders ()
アクションの順番を設定。


#### (static) makeEscapeRatio ()
逃走確率を設定。


#### (static) makeRewards ()
報酬を設定。


#### (static) onEncounter ()
エンカウント時に呼ばれるハンドラ。
[先制攻撃][不意打ち]の判定。


#### (static) playBattleBgm ()
戦闘BGMを再生。


#### (static) playDefeatMe ()
敗北MEを再生。


#### (static) playVictoryMe ()
勝利MEを再生。


#### (static) processAbort ()
中止処理。


#### (static) processDefeat ()
敗北処理。


#### (static) processEscape () → {Boolean}
逃走処理を行い、逃走が成功したか返す。


#### (static) processForcedAction ()
強制アクションの処理。


#### (static) processTurn ()
ターン継続処理。


#### (static) processVictory ()
勝利処理。


#### (static) rateSurprise () → {[Number](Number.md)}
[不意打ち]の確率を返す。


#### (static) refreshStatus ()
[ステータス]表示を再描画。


#### (static) replayBgmAndBgs ()
BGMとBGSの続きを再生。


#### (static) saveBgmAndBgs ()
BGMとBGSの状態を保存。


#### (static) selectNextCommand ()
ひとつ先のコマンドを選択。


#### (static) selectPreviousCommand ()
ひとつ前のコマンドを選択。


#### (static) setBattleTest (battleTest)
[テスト戦闘]状態か設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battleTest` | Boolean | [テスト戦闘]状態か |


#### (static) setEventCallback (callback)
(endBattleから帰る)コールバック関数を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `callback` | function | コールバック関数 |


#### (static) setLogWindow (logWindow)
ログウィンドウを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `logWindow` | [Window_BattleLog](Window_BattleLog.md) | ログウィンドウ |


#### (static) setSpriteset (spriteset)
スプライトセットを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `spriteset` | [Spriteset_Battle](Spriteset_Battle.md) | スプライトセット |


#### (static) setStatusWindow (statusWindow)
ステータスウィンドウを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `statusWindow` | [Window_BattleStatus](Window_BattleStatus.md) | ステータスウィンドウ |


#### (static) setup (troopId, canEscape, canLose)
戦闘の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopId` | [Number](Number.md) | 敵グループID |
| `canEscape` | Boolean | [逃走可] |
| `canLose` | Boolean | [敗北可] |


#### (static) startAction ()
アクション開始。


#### (static) startBattle ()
戦闘開始。


#### (static) startInput ()
入力開始。


#### (static) startTurn ()
ターン開始。


#### (static) update ()
フレーム毎のアップデート。

#### (static) updateAction ()
アクションのアップデート。


#### (static) updateBattleEnd ()
戦闘終了のアップデート。


#### (static) updateEvent () → {Boolean}
イベントのアップデートを行い、何か実行されたか返す。


#### (static) updateEventMain () → {Boolean}
イベント主要部分のアップデートを行い、何か実行されたか返す。


#### (static) updateTurn ()
ターンのアップデート。


#### (static) updateTurnEnd ()
ターン終了のアップテート。


