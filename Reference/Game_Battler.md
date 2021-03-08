[クラスツリー](index.md)

# クラス: Game_Battler

## スーパークラス: [Game_BattlerBase](Game_BattlerBase.md)

### new Game_Battler ()
戦闘シーンでのアイコン、バトラーの動作を制御する。

MZで武器以外のアニメーション制御は廃止され、タイムプログレス戦闘関連のプロパティ・メソッドが多く追加されている。

v1.1.0、v1.2.0  で変更あり。

### サブクラス

* [Game_Actor](Game_Actor.md)
* [Game_Enemy](Game_Enemy.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_actions` | [Array](Array.md).&lt;[Game_Action](Game_Action.md)&gt; | 行動の配列 |
| `_speed` | [Number](Number.md) | 速度(行動順を決定する) |
| `_result` | [Game_ActionResult](Game_ActionResult.md) | 行動の結果 |
| `_actionState` | [String](String.md) | [アクション状態](#アクション状態) |
| `_lastTargetIndex` | [Number](Number.md) | 最後の対象番号 |
| `_damagePopup` | Boolean | ダメージポップアップするか |
| `_effectType` | [String](String.md) | エフェクトタイプ |
| `_motionType` | [String](String.md) | モーションタイプ |
| `_weaponImageId` | [Number](Number.md) | 武器画像ID |
| `_motionRefresh` | Boolean | モーションを更新するか |
| `_selected` | Boolean | 選択されているか |
| `_tpbState` | [String](String.md) | [タイムプログレス戦闘状態](#タイムプログレス戦闘状態) |
| `_tpbChargeTime` | [Number](Number.md) | タイムプログレス戦闘チャージ時間 |
| `_tpbCastTime` | [Number](Number.md) | タイムプログレス戦闘キャスト(詠唱)時間 |
| `_tpbIdleTime` | [Number](Number.md) | タイムプログレス戦闘待機時間 |
| `_tpbTurnCount` | [Number](Number.md) | タイムプログレス戦闘ターンカウント |
| `_tpbTurnEnd` | Boolean | タイムプログレス戦闘ターン終了か |

#### アクション状態

| 文字列 | 説明 |
| --- | --- |
| "undecided" | 行動未決定 |
| "inputting" | 入力中 |
| "waiting" | 待ち状態 |
| "acting" | 行動中 |

#### タイムプログレス戦闘状態

| 文字列 | 説明 |
| --- | --- |
| "charging" | チャージ中 |
| "casting" | キャスト(詠唱)中 |
| "acting" | 行動中 |
| "charged" | チャージ完了 |
| "ready" | 準備 |


### 廃止MVプロパティ
`_animations`


### スーパークラスから継承されたメソッド

#### [Game_BattlerBase](Game_BattlerBase.md)

* [actionPlusSet ()](Game_BattlerBase.md#actionplusset---arraynumber)
* [addedSkills ()](Game_BattlerBase.md#addedskills---arraynumber)
* [addedSkillTypes ()](Game_BattlerBase.md#addedskilltypes---arraynumber)
* [addNewState (stateId)](Game_BattlerBase.md#addnewstate-stateid)
* [addParam (paramId, value)](Game_BattlerBase.md#addparam-paramid-value)
* [allIcons ()](Game_BattlerBase.md#allicons---arraynumber)
* [allTraits ()](Game_BattlerBase.md#alltraits---arrayrpgtrait)
* [appear ()](Game_BattlerBase.md#appear-)
* [attackElements ()](Game_BattlerBase.md#attackelements---arraynumber)
* [attackSkillId ()](Game_BattlerBase.md#attackskillid---number)
* [attackSpeed ()](Game_BattlerBase.md#attackspeed---number)
* [attackStates ()](Game_BattlerBase.md#attackstates---arraynumber)
* [attackStatesRate (stateId)](Game_BattlerBase.md#attackstatesrate-stateid)
* [attackTimesAdd ()](Game_BattlerBase.md#attacktimesadd---number)
* [buff (paramId)](Game_BattlerBase.md#buff-paramid--number)
* [buffIconIndex (buffLevel, paramId)](Game_BattlerBase.md#bufficonindex-bufflevel-paramid--number)
* [buffIcons ()](Game_BattlerBase.md#bufficons---arraynumber)
* [buffLength ()](Game_BattlerBase.md#bufflength---number)
* [canAttack ()](Game_BattlerBase.md#canattack---boolean)
* [canEquip (item)](Game_BattlerBase.md#canequip-item--boolean)
* [canEquipArmor (item)](Game_BattlerBase.md#canequiparmor-item--boolean)
* [canEquipWeapon (item)](Game_BattlerBase.md#canequipweapon-item--boolean)
* [canGuard ()](Game_BattlerBase.md#canguard---boolean)
* [canInput ()](Game_BattlerBase.md#caninput---boolean)
* [canMove ()](Game_BattlerBase.md#canmove---boolean)
* [canPaySkillCost (skill)](Game_BattlerBase.md#canpayskillcost-skill--boolean)
* [canUse (item)](Game_BattlerBase.md#canuse-item--boolean)
* [clearBuffs ()](Game_BattlerBase.md#clearbuffs-)
* [clearParamPlus ()](Game_BattlerBase.md#clearparamplus-)
* [clearStates ()](Game_BattlerBase.md#clearstates-)
* [collapseType ()](Game_BattlerBase.md#collapsetype---number)
* [confusionLevel ()](Game_BattlerBase.md#confusionlevel---number)
* [deathStateId ()](Game_BattlerBase.md#deathstateid---number)
* [debuffRate (paramId)](Game_BattlerBase.md#debuffrate-paramid--number)
* [decreaseBuff (paramId)](Game_BattlerBase.md#decreasebuff-paramid)
* [die ()](Game_BattlerBase.md#die-)
* [elementRate (elementId)](Game_BattlerBase.md#elementrate-elementid--number)
* [eraseBuff (paramId)](Game_BattlerBase.md#erasebuff-paramid)
* [eraseState (stateId)](Game_BattlerBase.md#erasestate-stateid)
* [guardSkillId ()](Game_BattlerBase.md#guardskillid---number)
* [hide ()](Game_BattlerBase.md#hide-)
* [hpRate ()](Game_BattlerBase.md#hprate---number)
* [increaseBuff (paramId)](Game_BattlerBase.md#increasebuff-paramid)
* [isActor ()](Game_BattlerBase.md#isactor---boolean)
* [isAlive ()](Game_BattlerBase.md#isalive---boolean)
* [isAppeared ()](Game_BattlerBase.md#isappeared---boolean)
* [isAutoBattle ()](Game_BattlerBase.md#isautobattle---boolean)
* [isBuffAffected (paramId)](Game_BattlerBase.md#isbuffaffected-paramid--boolean)
* [isBuffExpired (paramId)](Game_BattlerBase.md#isbuffexpired-paramid--boolean)
* [isBuffOrDebuffAffected (paramId)](Game_BattlerBase.md#isbuffordebuffaffected-paramid--boolean)
* [isConfused ()](Game_BattlerBase.md#isconfused---boolean)
* [isDead ()](Game_BattlerBase.md#isdead---boolean)
* [isDeathStateAffected ()](Game_BattlerBase.md#isdeathstateaffected---boolean)
* [isDebuffAffected (paramId)](Game_BattlerBase.md#isdebuffaffected-paramid--boolean)
* [isDualWield ()](Game_BattlerBase.md#isdualwield---boolean)
* [isDying ()](Game_BattlerBase.md#isdying---boolean)
* [isEnemy ()](Game_BattlerBase.md#isenemy---boolean)
* [isEquipAtypeOk (atypeId)](Game_BattlerBase.md#isequipatypeok-atypeid--boolean)
* [isEquipTypeLocked (etypeId)](Game_BattlerBase.md#isequiptypelocked-etypeid--boolean)
* [isEquipTypeSealed (etypeId)](Game_BattlerBase.md#isequiptypesealed-etypeid--boolean)
* [isEquipWtypeOk (wtypeId)](Game_BattlerBase.md#isequipwtypeok-wtypeid--boolean)
* [isGuard ()](Game_BattlerBase.md#isguard---boolean)
* [isHidden ()](Game_BattlerBase.md#ishidden---boolean)
* [isMaxBuffAffected (paramId)](Game_BattlerBase.md#ismaxbuffaffected-paramid--boolean)
* [isMaxDebuffAffected (paramId)](Game_BattlerBase.md#ismaxdebuffaffected-paramid--boolean)
* [isOccasionOk (item)](Game_BattlerBase.md#isoccasionok-item--boolean)
* [isPreserveTp ()](Game_BattlerBase.md#ispreservetp---boolean)
* [isRestricted ()](Game_BattlerBase.md#isrestricted---boolean)
* [isSkillSealed (stypeId)](Game_BattlerBase.md#isskillsealed-stypeid--boolean)
* [isSkillTypeSealed (stypeId)](Game_BattlerBase.md#isskilltypesealed-stypeid--boolean)
* [isSkillWtypeOk (skill)](Game_BattlerBase.md#isskillwtypeok-skill--boolean)
* [isStateAffected (stateId)](Game_BattlerBase.md#isstateaffected-stateid--boolean)
* [isStateExpired (stateId)](Game_BattlerBase.md#isstateexpired-stateid--boolean)
* [isStateResist (stateId)](Game_BattlerBase.md#isstateresist-stateid--boolean)
* [isSubstitute ()](Game_BattlerBase.md#issubstitute---boolean)
* [maxTp ()](Game_BattlerBase.md#maxtp---number)
* [meetsItemConditions (item)](Game_BattlerBase.md#Game_BattlerBase.md#meetsitemconditions-item--boolean)
* [meetsSkillConditions (skill)](Game_BattlerBase.md#meetsskillconditions-skill--boolean)
* [meetsUsableItemConditions (item)](Game_BattlerBase.md#meetsusableitemconditions-item--boolean)
* [mostImportantStateText ()](Game_BattlerBase.md#mostimportantstatetext---string)
* [mpRate ()](Game_BattlerBase.md#mprate---number)
* [overwriteBuffTurns (paramId, turns)](Game_BattlerBase.md#overwritebuffturns-paramid-turns)
* [param (paramId)](Game_BattlerBase.md#param-paramid--number)
* [paramBase (paramId)](Game_BattlerBase.md#parambase-paramid--number)
* [paramBuffRate (paramId)](Game_BattlerBase.md#parambuffrate-paramid--number)
* [paramMax (paramId)](Game_BattlerBase.md#parammax-paramid--number)
* [paramMin (paramId)](Game_BattlerBase.md#parammin-paramid--number)
* [paramPlus (paramId)](Game_BattlerBase.md#paramplus-paramid--number)
* [paramRate (paramId)](Game_BattlerBase.md#paramrate-paramid--number)
* [partyAbility (abilityId)](Game_BattlerBase.md#partyability-abilityid--boolean)
* [paySkillCost (skill)](Game_BattlerBase.md#payskillcost-skill)
* [recoverAll ()](Game_BattlerBase.md#recoverall-)
* [refresh ()](Game_BattlerBase.md#refresh-)
* [resetStateCounts (stateId)](Game_BattlerBase.md#resetstatecounts-stateid)
* [restriction ()](Game_BattlerBase.md#restriction---number)
* [revive ()](Game_BattlerBase.md#revive-)
* [setHp (hp)](Game_BattlerBase.md#sethp-hp)
* [setMp (mp)](Game_BattlerBase.md#setmp-mp)
* [setTp (tp)](Game_BattlerBase.md#settp-tp)
* [skillMpCost (skill)](Game_BattlerBase.md#skillmpcost-skill--number)
* [skillTpCost (skill)](Game_BattlerBase.md#skilltpcost-skill--number)
* [slotType ()](Game_BattlerBase.md#slottype---number)
* [sortStates ()](Game_BattlerBase.md#sortstates-)
* [specialFlag (flagId)](Game_BattlerBase.md#specialflag-flagid--boolean)
* [stateIcons ()](Game_BattlerBase.md#stateicons---arraynumber)
* [stateMotionIndex ()](Game_BattlerBase.md#statemotionindex---number)
* [stateOverlayIndex ()](Game_BattlerBase.md#stateoverlayindex---number)
* [stateRate (stateId)](Game_BattlerBase.md#staterate-stateid--number)
* [stateResistSet ()](Game_BattlerBase.md#stateresistset---arraynumber)
* [states ()](Game_BattlerBase.md#states---arrayrpgstate)
* [tpRate ()](Game_BattlerBase.md#tprate---number)
* [traitObjects ()](Game_BattlerBase.md#traitobjects---array)
* [traits (code)](Game_BattlerBase.md#traits-code--arrayrpgtrait)
* [traitsPi (code, id)](Game_BattlerBase.md#traitspi-code-id--number)
* [traitsSet (code)](Game_BattlerBase.md#traitsset-code--arraynumber)
* [traitsSum (code, id)](Game_BattlerBase.md#traitssum-code-id--number)
* [traitsSumAll (code)](Game_BattlerBase.md#traitssumall-code--number)
* [traitsWithId (code, id)](Game_BattlerBase.md#traitswithid-code-id--arrayrpgtrait)
* [updateBuffTurns ()](Game_BattlerBase.md#updatebuffturns-)
* [updateStateTurns ()](Game_BattlerBase.md#updatestateturns-)
* [xparam (xparamId)](Game_BattlerBase.md#xparam-xparamid--number)


### メソッド

#### action (index) → {[Game_Action](Game_Action.md)}
指定番号のアクションを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | アクション番号 |


#### addBuff (paramId, turns)
指定通常能力に指定ターン数の[強化]を追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |
| `turns` | [Number](Number.md) | ターン数 |


#### addDebuff (paramId, turns)
指定通常能力に指定ターン数の[弱体]を追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |
| `turns` | [Number](Number.md) | ターン数 |


#### addState (stateId)
指定ステートを追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### applyTpbPenalty ()
**@MZ** タイムプログレス戦闘、ペナルティを適用。


#### cancelMotionRefresh ()
**@MZ1.2.0** モーションの更新をしないよう設定。


#### canInput () → {Boolean}
**@MZ** タイムプログレス戦闘、入力可能な状態か。


#### chargeTpByDamage (damageRate)
ダメージ率にしたがって、TPを増やす。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `damageRate` | [Number](Number.md) | (最大HPを1とした場合の)ダメージ割合 |


#### clearActions ()
アクションを消去。


#### clearDamagePopup ()
ダメージポップアップを消去。


#### clearEffect ()
エフェクトを消去。


#### clearMotion ()
モーションを消去。


#### clearTp ()
TPを0に。


#### clearTpbChargeTime ()
**@MZ** タイムプログレス戦闘、チャージ時間をクリア。


#### clearWeaponAnimation ()
武器アニメーションを消去。


#### consumeItem (item)
指定アイテムを消費。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) | アイテム |


#### currentAction () → {[Game_Action](Game_Action.md)}
現在のアクションを返す。


#### deselect ()
選択を外す。


#### effectType () → {[String](String.md)}
エフェクトタイプを返す。


#### escape ()
戦闘から逃げる。


#### finishTpbCharge ()
**@MZ** タイムプログレス戦闘、チャージ完了。


#### forceAction (skillId, targetIndex)
指定したスキルを強制する。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `skillId` | [Number](Number.md) | [スキルID](RPG.Skill.md#スキルid) |
| `targetIndex` | [Number](Number.md) | 対象番号 |


#### gainHp (value)
指定量のHPを回復。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | HP回復量 |


#### gainMp (value)
指定量のMPを回復。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | MP回復量 |


#### gainSilentTp (value)
指定量のTPを非表示で回復。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | TP回復量 |


#### gainTp (value)
指定量のTPを回復。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | TP回復量 |


#### initialize ()
オーバーライド: [Game_BattlerBase](Game_BattlerBase.md#initialize-)


#### initMembers ()
オーバーライド: [Game_BattlerBase](Game_BattlerBase.md#initmembers-)


#### initTp ()
TPの量を25までのランダムな値に初期化。


#### initTpbChargeTime (advantageous)
**@MZ** タイムプログレス戦闘、チャージ時間を初期化。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `advantageous` | Boolean | アドバンテージがあるか |


#### initTpbTurn ()
**@MZ** タイムプログレス戦闘、ターンの初期化。


#### isActing () → {Boolean}
アクション実行中か。


#### isChanting () → {Boolean}
魔法詠唱中か。


#### isDamagePopupRequested () → {Boolean}
ダメージポップアップが要求されているか。


#### isEffectRequested () → {Boolean}
エフェクトが要求されているか。


#### isGuardWaiting () → {Boolean}
[防御]して待機中か。


#### isInputting () → {Boolean}
戦闘コマンド入力中か。


#### isMotionRefreshRequested () → {Boolean}
モーションの初期化が要求されているか。


#### isMotionRequested () → {Boolean}
モーションが要求されているか。


#### isSelected () → {Boolean}
選択されているか。


#### isStateAddable (stateId) → {Boolean}
指定ステートが付加可能か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### isStateRestrict (stateId) → {Boolean}
指定ステートが[行動制約によって解除]かつ、現在行動制約中か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### isTpbCharged () → {Boolean}
**@MZ** タイムプログレス戦闘、チャージが完了しているか。


#### isTpbReady () → {Boolean}
**@MZ** タイムプログレス戦闘、準備状態か。


#### isTpbTimeout () → {Boolean}
**@MZ** タイムプログレス戦闘、タイムアウトか。


#### isTpbTurnEnd () → {Boolean}
**@MZ** タイムプログレス戦闘、ターン終了か。


#### isUndecided () → {Boolean}
行動が未選択か。


#### isWaiting () → {Boolean}
待機中か。


#### isWeaponAnimationRequested () → {Boolean}
武器アニメーションが要求されているか。


#### makeActions ()
アニメーションを生成。


#### makeActionTimes () → {[Number](Number.md)}
行動回数を設定して返す。


#### makeSpeed ()
速度(行動順を決定する)を設定。


#### makeTpbActions ()
**@MZ** タイムプログレス戦闘、行動を生成。


#### maxSlipDamage () → {[Number](Number.md)}
最大スリップダメージ量を返す。


#### motionType () → {[String](String.md)}
行動タイプを返す。


#### numActions () → {[Number](Number.md)}
行動番号を返す。


#### onAllActionsEnd ()
全行動終了ハンドラ。


#### onBattleEnd ()
戦闘終了ハンドラ。


#### onBattleStart (advantageous)
戦闘開始ハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `advantageous` | Boolean | **@MZ** アドバンテージがあるか |


#### onDamage (value)
被ダメージハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | HPダメージ量 |


#### onRestrict ()
オーバーライド: [Game_BattlerBase](Game_BattlerBase.md#onrestrict-)


#### onTpbCharged ()
**@MZ** タイムプログレス戦闘、チャージ完了時のハンドラ。


#### onTpbTimeout ()
**@MZ** タイムプログレス戦闘、タイムアウト時のハンドラ。


#### onTurnEnd ()
ターン終了ハンドラ。


#### performAction (action)
指定アクションを実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `action` | [Game_Action](Game_Action.md) | アクション |


#### performActionEnd ()
行動終了を実行。


#### performActionStart (action)
指定アクションの開始動作を実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `action` | [Game_Action](Game_Action.md) | アクション |


#### performCollapse ()
倒れる動作を実行。


#### performCounter ()
カウンター動作を実行。


#### performDamage ()
被ダメージ動作を実行。


#### performEvasion ()
回避動作を実行。


#### performMagicEvasion ()
魔法回避動作を実行。


#### performMiss ()
失敗動作を実行。


#### performRecovery ()
回復動作を実行。


#### performReflection ()
魔法反射動作を実行。


#### performSubstitute (target)
身代わり動作を実行

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 身代わり対象 |


#### refresh ()
オーバーライド:[Game_BattlerBase](Game_BattlerBase.md)


#### regenerateAll ()
自動回復・ダメージを適用。


#### regenerateHp ()
HP自動回復を適用。


#### regenerateMp ()
MP自動回復を適用。


#### regenerateTp ()
TP自動回復を適用。


#### removeAllBuffs ()
全能力の[強化]を解除。


#### removeBattleStates ()
ステートを解除。

#### removeBuff (paramId)
指定通常能力の[強化]を解除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### removeBuffsAuto ()
ターン終了した能力[強化][弱体]を解除。


#### removeCurrentAction ()
現在の行動を解除。


#### removeState (stateId)
指定ステートを解除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### removeStatesAuto (timing)
指定条件のステートを解除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `timing` | [Number](Number.md) | 解除条件( 1:行動終了時 2:ターン終了時 ) |


#### removeStatesByDamage ()
[ダメージで解除]のステートを解除。


#### requestEffect (effectType)
指定エフェクトを要求。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `effectType` | [String](String.md) | エフェクトタイプ |


#### requestMotion (motionType)
指定モーションを要求。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `motionType` | [String](String.md) | モーションタイプ |


#### requestMotionRefresh ()
モーションの初期化を要求。


#### result () → {[Game_ActionResult](Game_ActionResult.md)}
行動結果を返す。


#### select ()
バトラーの選択。


#### setAction (index, action)
指定番号のバトラーにアクションを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | バトラー番号 |
| `action` | [Game_Action](Game_Action.md) | アクション |


#### setActionState (actionState)
指定アクション状態を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actionState` | [String](String.md) | [アクション状態](Game_Battler.md#アクション状態) |


#### setLastTarget (target)
目標バトラーを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### shouldDelayTpbCharge () → {Boolean}
**@MZ** タイムプログレス戦闘、チャージに遅延が必要か。


#### speed () → {[Number](Number.md)}
速度(行動順を決定する)を返す。


#### startDamagePopup ()
ダメージポップアップ開始。


#### startWeaponAnimation (weaponImageId)
指定武器のアニメーション開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `weaponImageId` | [Number](Number.md) | 武器ID |


#### startTpbTurn ()
**@MZ** タイムプログレス戦闘、ターンの開始。


#### shouldPopupDamage () → {Boolean}
**@MZ** ポップアップダメージの必要があるか。


#### tpbChargeTime () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘、チャージ時間を返す。


#### startTpbCasting ()
**@MZ** タイムプログレス戦闘、キャスト(詠唱)を開始。


#### startTpbAction ()
**@MZ** タイムプログレス戦闘、行動を開始。


#### tpbAcceleration () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘、加速度を返す。


#### tpbBaseSpeed () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘、基底速度を返す。


#### tpbRelativeSpeed () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘、相対速度を返す。


#### tpbSpeed () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘、速度を返す。


#### tpbRequiredCastTime () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘、必要なキャスト(詠唱)時間を返す。


#### turnCount () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘、ターンカウントを返す。


#### updateTpb ()
**@MZ** タイムプログレス戦闘、アップデート。


#### updateTpbAutoBattle ()
**@MZ** タイムプログレス戦闘、オートバトルをアップデート。


#### updateTpbCastTime ()
**@MZ** タイムプログレス戦闘、キャスト(詠唱)時間アップデート。


#### updateTpbChargeTime ()
**@MZ** タイムプログレス戦闘、チャージ時間アップデート。


#### updateTpbIdleTime ()
**@MZ** タイムプログレス戦闘、待機時間アップデート。

 
#### useItem (item)
指定アイテムを使用。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) | アイテム |


#### weaponImageId () → {[Number](Number.md)}
武器画像IDを返す。



### 廃止MVメソッド
clearAnimations (), isAnimationRequested (), shiftAnimation (), startAnimation (animationId, mirror, delay)