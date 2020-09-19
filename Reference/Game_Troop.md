# Class: Game_Troop

## Extends: [Game_Unit](Game_Unit.md)

### new Game_Troop ()

| データベース| JSONデータ | 大域変数 |
| --- | --- | --- |
| [敵グループ] | [RPG.Troop](RPG.Troop.md) | [$gameTroop](global.md#gametroop-game_troop) |

戦闘シーンでの[敵グループ]を定義したクラス。

関連クラス: [Game_Enemy](Game_Enemy.md), [Game_Actor](Game_Actor.md), [Game_Party](Game_Party.md), [Scene_Battle](Scene_Battle.md), [BattleManager](BattleManager.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `LETTER_TABLE_HALF` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] 名前の接尾辞(A〜Zの半角記号) |
| `LETTER_TABLE_FULL` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] 名前の接尾辞(A〜Zの全角記号) |
| `_interpreter` | [Game_Interpreter](Game_Interpreter.md) | コマンドインタプリタ |
| `_troopId` | [Number](Number.md) | 敵グループID |
| `_eventFlags` | Object | {[page: Number]: Boolean} |
| `_enemies` | [Array](Array.md).&lt;[Game_Enemy](Game_Enemy.md)&gt; | [敵キャラ]の配列 |
| `_turnCount` | [Number](Number.md) | ターンカウンタ |
| `_namesCount` | Object | {[name: String]: Number} |


### Inherited From

#### [Game_Unit](Game_Unit.md)

* [agility ()](Game_Unit.md#agility---number)
* [aliveMembers ()](Game_Unit.md#alivemembers---arraygame_battler)
* [clearActions ()](Game_Unit.md#clearactions-)
* [clearResults ()](Game_Unit.md#clearresults-)
* [deadMembers ()](Game_Unit.md#deadmembers---arraygame_battler)
* [inBattle ()](Game_Unit.md#inbattle---boolean)
* [isAllDead ()](Game_Unit.md#isalldead---boolean)
* [makeActions ()](Game_Unit.md#makeactions-)
* [movableMembers ()](Game_Unit.md#movablemembers---arraygame_battler)
* [onBattleEnd ()](Game_Unit.md#onbattleend-)
* [onBattleStart ()](Game_Unit.md#onbattlestart-)
* [randomDeadTarget ()](Game_Unit.md#randomdeadtarget---game_battler)
* [randomTarget ()](Game_Unit.md#randomtarget---game_battler)
* [select (activeMember)](Game_Unit.md#select-activemember)
* [smoothDeadTarget (index)](Game_Unit.md#smoothdeadtarget-index--game_battler)
* [smoothTarget (index)](Game_Unit.md#smoothtarget-index--game_battler)
* [substituteBattler ()](Game_Unit.md#substitutebattler---game_battler)
* [tgrSum ()](Game_Unit.md#tgrsum---number)


### Methods

#### clear ()
データの初期化。

#### enemyNames () → {[Array](Array.md).<[String](String.md)>}
[敵キャラ]の名前を配列で返す。


#### expTotal () → {[Number](Number.md)}
[敵キャラ]の合計EXPを返す。


#### goldRate () → {[Number](Number.md)}
プレイヤーパーティが持つ金額の取得倍率を返す。スキルやアイテムの効果で上下する。


#### goldTotal () → {[Number](Number.md)}
[敵キャラ]からの合計取得金額を返す。


#### increaseTurn ()
ターンを進める。


#### initialize ()
Overrides:[Game_Unit](Game_Unit.md#initialize-)


#### isEventRunning () → {Boolean}
イベントが実行中か。


#### letterTable () → {[Array](Array.md).<[String](String.md)>}
名前の接尾辞(A〜Z)を配列で返す。


#### makeDropItems () → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}
ドロップアイテムを作成して配列で返す。


#### makeUniqueNames ()
全[敵キャラ]に(A〜Zを割り振って)固有名をつける。


#### meetsConditions (page) → {Boolean}
指定ページが条件に合っているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `page` | [RPG.BattleEventPage](RPG.BattleEventPage.md) | バトルEVページ |


#### members () → {[Array](Array.md).<[Game_Enemy](Game_Enemy.md)>}
Overrides:[Game_Unit](Game_Unit.md#members---arraygame_battler)


#### setup (troopId)
指定した[敵グループ]を準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopId` | [Number](Number.md) | 敵グループID |


#### setupBattleEvent ()
バトルイベントの準備。



#### troop () → {[RPG.Troop](RPG.Troop.md)}
[敵グループ]の定義情報を返す。


#### turnCount () → {[Number](Number.md)}
ターン数を返す。


#### updateInterpreter ()
コマンドインタプリタを更新する。

