[クラスツリー](index.md)

# クラス: Game_Temp

### new Game_Temp ()

| 大域変数 |
| --- |
| [$GameTemp](global.md#gametemp-game_temp) |

ゲームの一時データを保持しておくクラス。

関連クラス: [Game_CommonEvent](Game_CommonEvent.md), [Spriteset_Base](Spriteset_Base.md), [Spriteset_Map](Spriteset_Map.md), [Sprite_Destination](Sprite_Destination.md),


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_isPlaytest` | Boolean | テストプレイか |
| `_destinationX` | [Number](Number.md) | タッチ移動目標の x位置(タイル数) |
| `_destinationY` | [Number](Number.md) | タッチ移動目標の y位置(タイル数) |
| `_touchTarget` | Object | **@MZ** タッチの目標 |
| `_touchState` | [String](String.md) | **@MZ** タッチの状態 |
| `_needsBattleRefresh` | Boolean | **@MZ** 戦闘の再設定が必要か |
| `_commonEventQueue` | [Array](Array.md)&lt;[Number](Number.md)&gt; | **@MZ** コモンイベントキュー |
| `_animationQueue` | [Array](Array.md).&lt;[MV.AnimationRequest](MV.AnimationRequest.md)&gt; | **@MZ** アニメーションキュー |
| `_balloonQueue` | [Array](Array.md).&lt;[MV.BalloonRequest](MV.BalloonRequest.md)&gt; | **@MZ** フキダシキュー |
| `_lastActionData` | [Array](Array.md) | **@MZ** 最後の行動データ |


### 廃止MVプロパティ
`_commonEventId`


### メソッド

#### clearBattleRefreshRequest () 
**@MZ** 戦闘の再設定の要請を解除。


#### clearCommonEvent ()
一時保存の[コモンイベント]を消去。


#### clearDestination ()
プレイヤーのタッチ移動目標データを消去。


#### clearTouchState ()
**@MZ** タッチ状態を解除。


#### destinationX () → {[Number](Number.md)}
タッチ移動目標の x位置(タイル数)を返す。


#### destinationY () → {[Number](Number.md)}
タッチ移動目標の y位置(タイル数)を返す。


#### initialize ()
 オブジェクト生成時の初期化。


#### isBattleRefreshRequested () → {Boolean}
**@MZ** 戦闘の再設定が要請されているか。


#### isCommonEventReserved () → {Boolean}
[コモンイベント]が保存されているか。


#### isDestinationValid () → {Boolean}
タッチ移動目標を表示するか。


#### isPlaytest () → {Boolean}
テストモードか。


#### lastActionData (type) → {Object}
**@MZ** 指定タイプの最後のアクションを返す。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `type` | [String](String.md)  | アクションタイプ |


#### reserveCommonEvent (commonEventId)
指定[コモンイベント]を、あとで処理するために保持。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `commonEventId` | [Number](Number.md) | コモンイベントID |


#### requestBattleRefresh () 
**@MZ** 戦闘の再設定を要請。


#### requestAnimation (targets, animationId, mirror opt)
**@MZ** アニメーションを要請。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `targets` | [Array](Array.md).&lt;[Game_Character](Game_Character.md)&gt; | | 対象 |
| `animationId` | [Number](Number.md) | | アニメーションID |
| `mirror` | Boolean | &lt;optional&gt;  | 反転するか(規定値:false) |


#### requestBalloon (target, balloonId)
**@MZ** フキダシの出力を要請。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `target` | [Game_Character](Game_Character.md) | 対象 |
| `balloonId` | [Number](Number.md) | フキダシID |


#### retrieveAnimation () → {[MV.AnimationRequest](MV.AnimationRequest.md)}
**@MZ** 登録したアニメーション設定を返す。


#### retrieveBalloon () → {[MV.BalloonRequest](MV.BalloonRequest.md)}
**@MZ** 登録したフキダシ設定を返す。


#### retrieveCommonEvent () → {[Number](Number.md)}
**@MZ** 登録したコモンイベントIDを返す。|


#### setDestination (x, y)
タッチ移動目標の位置を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### setLastActionData (type, value)
**@MZ** 最後のアクションデータを設定。
0:スキル, 1:アイテム, 2:行動したアクター, 3:行動した敵, 4:対象となったアクター, 5:対象となった敵,

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md)  | アクションタイプ |
| `value` | Object | アクションデータ |


#### setLastSubjectActorId (actorID)
**@MZ** 最後に行動したアクターを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actorID` | [Number](Number.md) | アクターID |


#### setLastSubjectEnemyIndex (enemyIndex)
**@MZ** 最後に行動した敵番号を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `enemyIndex` | [Number](Number.md) | 敵番号 |


#### setLastTargetActorId (actorID)
**@MZ** 最後に対象となったアクターを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actorID` | [Number](Number.md) | アクターID |


#### setLastTargetEnemyIndex (enemyIndex)
**@MZ** 最後に対象となった敵番号を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `enemyIndex` | [Number](Number.md) | 敵番号 |


#### setLastUsedSkillId (skillID)
**@MZ** 最後に使ったスキルを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `skillID` | [Number](Number.md) | スキルID |


#### setLastUsedItemId (itemID)
**@MZ** 最後に使ったアイテムを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `itemID` | [Number](Number.md) | アイテムID |


#### setTouchState (target, state)
**@MZ** タッチ状態を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | Object | 目標 |
| `state` | [String](String.md) | タッチ状態 |


#### touchTarget () → {Object}
**@MZ** タッチ目標を返す。


#### touchState () → {[String](String.md)}
**@MZ** タッチ状態を返す。

### 廃止MVメソッド
reservedCommonEvent () 