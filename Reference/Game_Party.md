# Class: Game_Party

## Extends: [Game_Unit](Game_Unit.md)

### new Game_Party ()

| 大域変数 | セーブデータ |
| --- | --- |
| [$gameParty](global.md#gameparty-game_party) | 保存される |

[パーティ]を定義したクラス。

関連クラス: [Game_Troop](Game_Troop.md), [Game_Player](Game_Player.md), [Game_Follower](Game_Follower.md), [Game_Actor](Game_Actor.md), [Game_Actors](Game_Actors.md), [Scene_Battle](Scene_Battle.md), [BattleManager](BattleManager.md)


### Properties:

ABILITY\_ で始まる静的定数は [パーティ能力ID](RPG.Trait.md#パーティ能力id)に使われる。

| Name | Type | Description |
| --- | --- | --- |
| `ABILITY_ENCOUNTER_HALF` | [Number](Number.md) | [static] エンカウント半減 |
| `ABILITY_ENCOUNTER_NONE` | [Number](Number.md) | [static] エンカウント無効 |
| `ABILITY_CANCEL_SURPRISE` | [Number](Number.md) | [static] 不意打ち無効 |
| `ABILITY_RAISE_PREEMPTIVE` | [Number](Number.md) | [static] 先制攻撃率アップ |
| `ABILITY_GOLD_DOUBLE` | [Number](Number.md) | [static] 獲得金額2倍 |
| `ABILITY_DROP_ITEM_DOUBLE` | [Number](Number.md) | [static] アイテム入手率2倍 |
| `_gold` | [Number](Number.md) | 所持金 |
| `_steps` | [Number](Number.md) | 歩数 |
| `_lastItem` | [Game_Item](Game_Item.md) | 最後のアイテム |
| `_menuActorId` | [Number](Number.md) | メニューのアクターID |
| `_targetActorId` | [Number](Number.md) | 対象のアクターID |
| `_actors` | [Array](Array.md) | アクターIDの配列 |
| `_items` | Object | {[itemId: number]: number} |
| `_weapons` | Object | {[itemId: number]: number} |
| `_armors` | Object | {[itemId: number]: number} |


### Inherited From

#### [Game_Unit](Game_Unit.md)

* [agility ()](Game_Unit.md#agility---number)
* [aliveMembers ()](Game_Unit.md#alivemembers---arraygame_battler)
* [clearActions ()](Game_Unit.md#clearactions-)
* [clearResults ()](Game_Unit.md#clearresults-)
* [deadMembers ()](Game_Unit.md#deadmembers---arraygame_battler)
* [inBattle ()](Game_Unit.md#inbattle---boolean)
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

#### addActor (actorId)
指定したアクターを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) | アクターID |


#### allItems () → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}
パーティが持つ全アイテムを配列で返す。


#### allMembers () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}
パーティの全アクターを配列で返す。


#### armors () → {[Array](Array.md).<[RPG.Armor](RPG.Armor.md)>}
パーティが持つ全防具を配列で返す。


#### battleMembers () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}
戦闘に参加する全アクターを配列で返す。


#### canInput () → {Boolean}
入力可能か。


#### canUse (item) → {Boolean}
指定アイテムが使用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |


#### charactersForSavefile () → {[Array](Array.md).<[Array](Array.md).<*>>}
セーブファイルに記録されているキャラ画像情報を配列で返す。<br />
[ "ファイル名", キャラ番号 ] という2値の配列がキャラ数ぶん入った配列。


#### consumeItem (item)
指定アイテムを消費。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |


#### discardMembersEquip (item, amount)
指定の装備を捨てる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | 装備アイテム |
| `amount` | [Number](Number.md) | 数 |


#### equipItems () → {[Array](Array.md).<[RPG.EquipItem](RPG.EquipItem.md)>}
パーティが持つ全装備可能アイテムを配列で返す。


#### exists () → {Boolean}
パーティが存在する(少なくとも一人いる)か。

#### facesForSavefile () → {[Array](Array.md).<[Array](Array.md).<*>>}
セーブファイルに記録されている顔画像情報を配列で返す。<br />
[ "ファイル名", 顔番号 ] という2値の配列がキャラ数ぶん入った配列。


#### gainGold (amount)
指定金額ぶん所持金を増やす。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `amount` | [Number](Number.md) | 金額 |


#### gainItem (item, amount, includeEquip)
指定アイテムを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |
| `amount` | [Number](Number.md) | 数 |
| `includeEquip` | Boolean | 装備しているものを含むか |


#### gold () → {[Number](Number.md)}
所持金の金額を返す。


#### hasCancelSurprise () → {Boolean}
[不意打ち無効]のパーティ能力を持つか。


#### hasDropItemDouble () → {Boolean}
[アイテム入手率2倍]のパーティ能力を持つか。


#### hasEncounterHalf () → {Boolean}
[エンカウント半減]のパーティ能力を持つか。


#### hasEncounterNone () → {Boolean}
[エンカウント無効]のパーティ能力を持つか。


#### hasGoldDouble () → {Boolean}
[獲得金額2倍]のパーティ能力を持つか。


#### hasItem (item, includeEquip) → {Boolean}
指定アイテムをパーティが持っているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |
| `includeEquip` | Boolean | 装備しているものを含むか |


#### hasMaxItems (item) → {Boolean}
指定アイテムを最大数を持っているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |


#### hasRaisePreemptive () → {Boolean}
[先制攻撃率アップ]のパーティ能力を持つか。


#### highestLevel () → {[Number](Number.md)}
パーティメンバー中最高のレベルを返す。


#### increaseSteps ()
歩数を増やす。


#### initAllItems ()
全てのアイテムを初期化。


#### initialize ()
Overrides:[Game_Unit](Game_Unit.md#initialize-)


#### isAllDead () → {Boolean}
Overrides:[Game_Unit](Game_Unit.md#isalldead---boolean)


#### isAnyMemberEquipped (item) → {Boolean}
指定アイテムをいずれかのメンバーが装備しているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | 装備アイテム |


#### isEmpty () → {Boolean}
パーティメンパーが0人か。


#### itemContainer (item) → {[Array](Array.md).<[RPG.BaseItem](RPG.BaseItem.md)>}
指定アイテムが含まれるカテゴリ全体を配列で返す。<br />
[アイテム][武器][防具]のいずれかのカテゴリ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |


#### items () → {[Array](Array.md).<[RPG.Item](RPG.Item.md)>}
アイテム(武器・防具を含まない)を配列で返す。


#### lastItem () → {[RPG.BaseItem](RPG.BaseItem.md)}
最後に選択されたアイテムを返す。


#### leader () → {[Game_Actor](Game_Actor.md)}
リーダーであるアクターを返す。


#### loseGold (amount)
指定金額の所持金を減らす。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `amount` | [Number](Number.md) | 金額 |


#### loseItem (item, amount, includeEquip)
指定アイテムを減らす。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |
| `amount` | [Number](Number.md) | 数 |
| `includeEquip` | Boolean | 装備しているものを含むか |


#### makeMenuActorNext ()
次のアクターのメニューを生成。


#### makeMenuActorPrevious ()
前のアクターのメニューを生成。


#### maxBattleMembers () → {[Number](Number.md)}
戦闘参加メンバーの最大数(規定値:4)を返す。


#### maxGold () → {[Number](Number.md)}
最大所持金(規定値:99999999)を返す。


#### maxItems (item) → {[Number](Number.md)}
指定アイテムの最大数(規定値:99)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |


#### members () → {[Array](Array.md).<[Game_Actor](Game_Actor.md)>}
Overrides:[Game_Unit](Game_Unit.md#members---arraygame_battler)


#### menuActor () → {[Game_Actor](Game_Actor.md)}
現在のメニューで選択されているアクターを返す。


#### name () → {[String](String.md)}
パーティの名前を返す。<br />
ひとりの時は「アクター名」、複数いる時は「アクター名たち」(規定値)


#### numItems (item) → {[Number](Number.md)}
パーティが持っている指定アイテムの数を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |


#### onPlayerWalk ()
プレイヤーが歩く時に呼ばれるハンドラ。


#### partyAbility (abilityId) → {Boolean}
指定[パーティ能力]を持つアクターがいるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `abilityId` | [Number](Number.md) | [パーティ能力ID](RPG.Trait.md#パーティ能力id)  |


#### performEscape ()
パーティ全体の逃亡モーションを開始。


#### performVictory ()
パーティ全体の勝利モーションを開始。


#### ratePreemptive (troopAgi) → {[Number](Number.md)}
指定敵素早さに対して先制攻撃の確率を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopAgi` | [Number](Number.md) | 素早さ |


#### rateSurprise (troopAgi) → {[Number](Number.md)}
指定敵素早さに対して不意打ちの確率を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `troopAgi` | [Number](Number.md) | 素早さ |


#### removeActor (actorId)
指定アクターを取り除く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) | アクターID |


#### removeBattleStates ()
全パーティメンバーのステートを削除。


#### requestMotionRefresh ()
全パーティメンバーのモーションを初期化。


#### reviveBattleMembers ()
全戦闘参加メンバーを蘇生。


#### setLastItem (item)
指定アイテムを最後のアイテムに設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |


#### setMenuActor (actor)
指定アクターをメニューで選択された状態に。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | アクター |


#### setTargetActor (actor)
指定アクターを対象アクターに。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | アクター |


#### setupBattleTest ()
戦闘テストの準備。


#### setupBattleTestItems ()
戦闘テストのアイテムの準備。


#### setupBattleTestMembers ()
戦闘テストのメンバーの準備。


#### setupStartingMembers ()
開始メンバーの準備。


#### size () → {[Number](Number.md)}
パーティメンバーの数を返す。


#### steps () → {[Number](Number.md)}
歩数を返す。


#### swapOrder (index1, index2)
指定した番号のアクターを入れ替え。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index1` | [Number](Number.md) | アクター1の番号 |
| `index2` | [Number](Number.md) | アクター2の番号 |


#### targetActor () → {[Game_Actor](Game_Actor.md)}
対象アクターを返す。


#### weapons () → {[Array](Array.md).<[RPG.Weapon](RPG.Weapon.md)>}
パーティが持つ全武器を配列で返す。



