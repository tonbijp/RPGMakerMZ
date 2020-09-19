# Class: Game_Actor

## Extends: [Game_Battler](Game_Battler.md)

### new Game_Actor ()

| データベース| JSONデータ | スプライト |
| --- | --- | --- |
| [アクター] | [RPG.Actor](RPG.Actor.md) | [Sprite_Character](Sprite_Character.md), [Sprite_Actor](Sprite_Actor.md) |

アクターのパラメータの取得、画像の設定、戦闘の処理とサイドビュー時の画像処理を行うクラス。

関連クラス: [Game_Actors](Game_Actors.md), [Game_Party](Game_Party.md), [Game_Troop](Game_Troop.md), [Game_Enemy](Game_Enemy.md), [Scene_Battle](Scene_Battle.md), [BattleManager](BattleManager.md), [Game_Player](Game_Player.md), [Game_Follower](Game_Follower.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) | [read-only] [レベル] |
| `_actorId` | [Number](Number.md) | アクターID |
| `_name` | [String](String.md) | [名前] |
| `_nickname` | [String](String.md) | [二つ名] |
| `_profile` | [String](String.md) | [プロフィール] |
| `_classId` | [Number](Number.md) | 職業ID |
| `_level` | [Number](Number.md) | [レベル] |
| `_characterName` | [String](String.md) | [歩行キャラ]画像ファイル名(拡張子なし) |
| `_characterIndex` | [Number](Number.md) | [歩行キャラ]画像番号 |
| `_faceName` | [String](String.md) | [顔]画像ファイル名(拡張子なし) |
| `_faceIndex` | [Number](Number.md) | [顔]画像番号 |
| `_battlerName` | [String](String.md) | [[SV]戦闘キャラ]画像ファイル名(拡張子なし) |
| `_exp` | Object | {[classId: number]: number} |
| `_skills` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [スキル]の配列 |
| `_equips` | [Array](Array.md).&lt;[Game_Item](Game_Item.md)&gt; | [装備]の配列 |
| `_actionInputIndex` | [Number](Number.md) | 行動の番号 |
| `_lastMenuSkill` | [Game_Item](Game_Item.md) | 最後のメニュースキル |
| `_lastBattleSkill` | [Game_Item](Game_Item.md) | 最後の戦闘スキル |
| `_lastCommandSymbol` | [String](String.md) | 最後のコマンド |
| `_stateSteps` | Object | {[stateId: number]: number} |


### Inherited From

#### [Game_BattlerBase](Game_BattlerBase.md)

* [actionPlusSet ()](Game_BattlerBase.md#actionplusset---arraynumber)
* [addedSkills ()](Game_BattlerBase.md#addedskills---arraynumber)
* [addedSkillTypes ()](Game_BattlerBase.md#addedskilltypes---arraynumber)
* [addNewState (stateId)](Game_BattlerBase.md#addnewstate-stateid)
* [addParam (paramId, value)](Game_BattlerBase.md#addparam-paramid-value)
* [allIcons ()](Game_BattlerBase.md#allicons---arraynumber)
* [allTraits ()](Game_BattlerBase.md#alltraits---arrayrpgtrait)
* [appear ()](Game_BattlerBase.md#appear-)
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
* [collapseType ()](Game_BattlerBase.md#collapsetype---number)
* [confusionLevel ()](Game_BattlerBase.md#confusionlevel---number)
* [deathStateId ()](Game_BattlerBase.md#deathstateid---number)
* [debuffRate (paramId)](Game_BattlerBase.md#debuffrate-paramid--number)
* [decreaseBuff (paramId)](Game_BattlerBase.md#decreasebuff-paramid)
* [die ()](Game_BattlerBase.md#die-)
* [elementRate (elementId)](Game_BattlerBase.md#elementrate-elementid--number)
* [eraseBuff (paramId)](Game_BattlerBase.md#erasebuff-paramid)
* [guardSkillId ()](Game_BattlerBase.md#guardskillid---number)
* [hide ()](Game_BattlerBase.md#hide-)
* [hpRate ()](Game_BattlerBase.md#hprate---number)
* [increaseBuff (paramId)](Game_BattlerBase.md#increasebuff-paramid)
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
* [isStateAffected (stateId)](Game_BattlerBase.md#isstateaffected-stateid--boolean)
* [isStateExpired (stateId)](Game_BattlerBase.md#isstateexpired-stateid--boolean)
* [isStateResist (stateId)](Game_BattlerBase.md#isstateresist-stateid--boolean)
* [isSubstitute ()](Game_BattlerBase.md#issubstitute---boolean)
* [maxTp ()](Game_BattlerBase.md#maxtp---number)
* [meetsItemConditions (item)](Game_BattlerBase.md#Game_BattlerBase.md#meetsitemconditions-item--boolean)
* [meetsSkillConditions (skill)](Game_BattlerBase.md#meetsskillconditions-skill--boolean)
* [mostImportantStateText ()](Game_BattlerBase.md#mostimportantstatetext---string)
* [mpRate ()](Game_BattlerBase.md#mprate---number)
* [overwriteBuffTurns (paramId, turns)](Game_BattlerBase.md#overwritebuffturns-paramid-turns)
* [param (paramId)](Game_BattlerBase.md#param-paramid--number)
* [paramBuffRate (paramId)](Game_BattlerBase.md#parambuffrate-paramid--number)
* [paramMin (paramId)](Game_BattlerBase.md#parammin-paramid--number)
* [paramRate (paramId)](Game_BattlerBase.md#paramrate-paramid--number)
* [partyAbility (abilityId)](Game_BattlerBase.md#partyability-abilityid--boolean)
* [paySkillCost (skill)](Game_BattlerBase.md#payskillcost-skill)
* [recoverAll ()](Game_BattlerBase.md#recoverall-)
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


#### [Game_Battler](Game_Battler.md)
* [action (index) ](Game_Battler.md#action-index--game_action)
* [addBuff (paramId, turns)](Game_Battler.md#addbuff-paramid-turns)
* [addDebuff (paramId, turns)](Game_Battler.md#adddebuff-paramid-turns)
* [addState (stateId)](Game_Battler.md#addstate-stateid)
* [chargeTpByDamage (damageRate)](Game_Battler.md#chargetpbydamage-damagerate)
* [clearAnimations ()](Game_Battler.md#clearanimations-)
* [clearDamagePopup ()](Game_Battler.md#cleardamagepopup-)
* [clearEffect ()](Game_Battler.md#cleareffect-)
* [clearMotion ()](Game_Battler.md#clearmotion-)
* [clearTp ()](Game_Battler.md#cleartp-)
* [clearWeaponAnimation ()](Game_Battler.md#clearweaponanimation-)
* [consumeItem (item)](Game_Battler.md#consumeitem-item)
* [currentAction ()](Game_Battler.md#currentaction---game_action)
* [deselect ()](Game_Battler.md#deselect-)
* [effectType ()](Game_Battler.md#effecttype---string)
* [escape ()](Game_Battler.md#escape-)
* [forceAction (skillId, targetIndex)](Game_Battler.md#forceaction-skillid-targetindex)
* [gainHp (value)](Game_Battler.md#gainhp-value)
* [gainMp (value)](Game_Battler.md#gainmp-value)
* [gainSilentTp (value)](Game_Battler.md#gainsilenttp-value)
* [gainTp (value)](Game_Battler.md#gaintp-value)
* [initTp ()](Game_Battler.md#inittp-)
* [isActing ()](Game_Battler.md#isacting---boolean)
* [isAnimationRequested ()](Game_Battler.md#isanimationrequested---boolean)
* [isChanting ()](Game_Battler.md#ischanting---boolean)
* [isDamagePopupRequested ()](Game_Battler.md#isdamagepopuprequested---boolean)
* [isEffectRequested ()](Game_Battler.md#iseffectrequested---boolean)
* [isGuardWaiting ()](Game_Battler.md#isguardwaiting---boolean)
* [isInputting ()](Game_Battler.md#isinputting---boolean)
* [isMotionRefreshRequested ()](Game_Battler.md#ismotionrefreshrequested---boolean)
* [isMotionRequested ()](Game_Battler.md#ismotionrequested---boolean)
* [isSelected ()](Game_Battler.md#isselected---boolean)
* [isStateAddable (stateId)](Game_Battler.md#isstateaddable-stateid--boolean)
* [isStateRestrict (stateId)](Game_Battler.md#isstaterestrict-stateid--boolean)
* [isUndecided ()](Game_Battler.md#isundecided---boolean)
* [isWaiting ()](Game_Battler.md#iswaiting---boolean)
* [isWeaponAnimationRequested ()](Game_Battler.md#isweaponanimationrequested---boolean)
* [makeActionTimes ()](Game_Battler.md#makeactiontimes---number)
* [makeSpeed ()](Game_Battler.md#makespeed-)
* [maxSlipDamage ()](Game_Battler.md#maxslipdamage---number)
* [motionType ()](Game_Battler.md#motiontype---string)
* [numActions ()](Game_Battler.md#numactions---number)
* [onAllActionsEnd ()](Game_Battler.md#onallactionsend-)
* [onBattleEnd ()](Game_Battler.md#onbattleend-)
* [onBattleStart ()](Game_Battler.md#onbattlestart-)
* [onDamage (value)](Game_Battler.md#ondamage-value)
* [onRestrict ()](Game_Battler.md#onrestrict-)
* [onTurnEnd ()](Game_Battler.md#onturnend-)
* [performMiss ()](Game_Battler.md#performmiss-)
* [performRecovery ()](Game_Battler.md#performrecovery-)
* [performReflection ()](Game_Battler.md#performreflection-)
* [performSubstitute (target)](Game_Battler.md#performsubstitute-target)
* [regenerateAll ()](Game_Battler.md#regenerateall-)
* [regenerateHp ()](Game_Battler.md#regeneratehp-)
* [regenerateMp ()](Game_Battler.md#regeneratemp-)
* [regenerateTp ()](Game_Battler.md#regeneratetp-)
* [removeAllBuffs ()](Game_Battler.md#removeallbuffs-)
* [removeBattleStates ()](Game_Battler.md#removebattlestates-)
* [removeBuff (paramId)](Game_Battler.md#removebuff-paramid)
* [removeBuffsAuto ()](Game_Battler.md#removebuffsauto-)
* [removeCurrentAction ()](Game_Battler.md#removecurrentaction-)
* [removeState (stateId)](Game_Battler.md#removestate-stateid)
* [removeStatesAuto (timing)](Game_Battler.md#removestatesauto-timing)
* [removeStatesByDamage ()](Game_Battler.md#removestatesbydamage-)
* [requestEffect (effectType)](Game_Battler.md#requesteffect-effecttype)
* [requestMotion (motionType)](Game_Battler.md#requestmotion-motiontype)
* [requestMotionRefresh ()](Game_Battler.md#requestmotionrefresh-)
* [result () ](Game_Battler.md#result---game_actionresult)
* [select ()](Game_Battler.md#select-)
* [setAction (index, action)](Game_Battler.md#setaction-index-action)
* [setActionState (actionState)](Game_Battler.md#setactionstate-actionstate)
* [setLastTarget (target)](Game_Battler.md#setlasttarget-target)
* [shiftAnimation ()](Game_Battler.md#shiftanimation---mvbattleranimation)
* [speed ()](Game_Battler.md#speed---number)
* [startDamagePopup ()](Game_Battler.md#startdamagepopup-)
* [startWeaponAnimation (weaponImageId)](Game_Battler.md#startweaponanimation-weaponimageid)
* [useItem (item)](Game_Battler.md#useitem-item)
* [weaponImageId ()](Game_Battler.md#weaponimageid---number)



### Methods

#### actor () → {[RPG.Actor](RPG.Actor.md)}
[アクター]のデータベース情報を返す。


#### actorId () → {[Number](Number.md)}
アクターIDを返す。


#### armors () → {[Array](Array.md).<[RPG.Armor](RPG.Armor.md)>}
防具を返す。


#### attackAnimationId1 () → {[Number](Number.md)}
1撃目のアニメーションIDを返す。


#### attackAnimationId2 () → {[Number](Number.md)}
2撃目のアニメーションIDを返す。


#### attackElements () → {[Array](Array.md).<[Number](Number.md)>}
Overrides:[Game_BattlerBase](Game_BattlerBase.md#attackelements---arraynumber)


#### bareHandsAnimationId () → {[Number](Number.md)}
素手攻撃のアニメーションIDを返す。


#### bareHandsElementId () → {[Number](Number.md)}
素手攻撃の[属性ID](RPG.Damage.md#属性id)を返す。


#### basicFloorDamage () → {[Number](Number.md)}
基本フロアダメージを返す(規定値:10)


#### battlerName () → {[String](String.md)}
バトラーの名前を返す。


#### benchMembersExpRate () → {[Number](Number.md)}
戦闘に参加していないメンバーの経験値の取得率を返す。


#### bestEquipItem (slotId)
指定スロットの最強装備を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) | スロットID |


#### calcEquipItemPerformance (item) → {[Number](Number.md)}
指定アイテムと装備アイテムの能力の差分の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | アイテム |


#### changeClass (classId, keepExp)
指定クラスに変更する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `classId` | [Number](Number.md) | クラスID |
| `keepExp` | Boolean | 経験値を保持するか |


#### changeEquip (slotId, item)
指定スロットを指定装備に変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) | スロットID |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | アイテム |


#### changeEquipById (etypeId, itemId)
指定装備タイプを指定装備に変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) | 装備タイプID |
| `itemId` | [Number](Number.md) | アイテムID |


#### changeExp (exp, show)
経験値を加え、必要ならレベルアップ処理を行う。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `exp` | [Number](Number.md) | 経験値 |
| `show` | Boolean | レベルアップ表示をするか |


#### changeLevel (level, show)
指定レベルに変更する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) | レベル |
| `show` | Boolean | レベルを表示するか |


#### characterIndex () → {[Number](Number.md)}
キャラ番号を返す。


#### characterName () → {[String](String.md)}
キャラの[名前]を返す。


#### checkFloorEffect ()
フロア効果を調べる。


#### clearActions ()
Overrides:[Game_Battler](Game_Battler.md#clearactions-)


#### clearEquipments ()
全ての装備を外す。


#### clearStates ()
Overrides:[Game_BattlerBase](Game_BattlerBase.md#clearstates-)


#### currentClass () → {[RPG.Class](RPG.Class.md)}
現在の[クラス]を返す。


#### currentExp () → {[Number](Number.md)}
現在の[経験値]を返す。


#### currentLevelExp () → {[Number](Number.md)}
現在のレベルの必要経験値を返す。


#### discardEquip (item)
装備を捨て、所持品に残さない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | アイテム |


#### displayLevelUp (newSkills)
指定スキルの習得とレベルアップのメッセージを表示。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `newSkills` | [Array](Array.md).<[RPG.Skill](RPG.Skill.md)> | スキルの配列 |


#### equips () → {[Array](Array.md).<[RPG.EquipItem](RPG.EquipItem.md)>}
装備の配列を返す。


#### equipSlots () → {[Array](Array.md).<[Number](Number.md)>}
装備スロットの配列を返す。


#### eraseState (stateId)
Overrides:[Game_BattlerBase](Game_BattlerBase.md#erasestate-stateid)


#### executeFloorDamage ()
フロアダメージを与える。


#### expForLevel (level) → {[Number](Number.md)}
指定レベルまでのレベルアップに必要な経験値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `level` | [Number](Number.md) | レベル |


#### faceIndex () → {[Number](Number.md)}
[顔]画像番号を返す。


#### faceName () → {[String](String.md)}
[顔]画像ファイル名(拡張子なし)を返す。


#### finalExpRate () → {[Number](Number.md)}
戦闘に出ているか控えかで変わる経験値の比率を返す。


#### findNewSkills (lastSkills) → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}
指定スキルを習得済みとして、身習得スキルを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `lastSkills` | [Array](Array.md).&lt;[RPG.Skill](RPG.Skill.md)&gt; | スキルの配列 |


#### forceChangeEquip (slotId, item)
指定スロットの装備を(持ち物に戻さず)強制的に変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) | スロットID |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | アイテム |


#### forgetSkill (skillId)
指定スキルを忘却(非習得に)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) | [スキルID](RPG.Skill.md#スキルid) |


#### friendsUnit () → {[Game_Party](Game_Party.md)}
味方パーティを返す。


#### gainExp (exp)
指定経験値を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `exp` | [Number](Number.md) | 経験値 |


#### hasArmor (armor) → {Boolean}
指定鎧を装備しているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `armor` | [RPG.Armor](RPG.Armor.md) | 鎧 |


#### hasNoWeapons () → {Boolean}
武器を持っていな(素手)か。


#### hasSkill (skillId) → {Boolean}
指定スキルを持っているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) | [スキルID](RPG.Skill.md#スキルid) |


#### hasWeapon (weapon) → {Boolean}
指定武器を持っているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `weapon` | [RPG.Weapon](RPG.Weapon.md) | 武器 |


#### index () → {[Number](Number.md)}
キャラ番号を返す。


#### initEquips (equips)
指定スロットを初期化する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `equips` | [Array](Array.md).&lt;[Number](Number.md)&gt; | スロットIDの配列 |


#### initExp ()
[経験値]を初期化。


#### initialize (actorId)
指定アクターで初期化。
Overrides:[Game_Battler](Game_Battler.md#initialize-)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) | アクターID |


#### initImages ()
画像の初期化。


#### initMembers ()
Overrides:[Game_Battler](Game_Battler.md#initmembers-)


#### initSkills ()
スキルの初期化。


#### inputtingAction () → {[Game_Action](Game_Action.md)}
入力された行動を返す。


#### isActor () → {Boolean}
Overrides:[Game_BattlerBase](Game_BattlerBase.md#isactor---boolean)


#### isBattleMember () → {Boolean}
戦闘に参加しているか。


#### isClass (gameClass) → {Boolean}
指定したクラスか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `gameClass` | [RPG.Class](RPG.Class.md) | クラス |


#### isEquipChangeOk (slotId) → {Boolean}
指定スロットの装備を変更可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `slotId` | [Number](Number.md) | スロットID |


#### isEquipped (item) → {Boolean}
指定アイテムが装備されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | アイテム |


#### isFormationChangeOk () → {Boolean}
隊列の変更が可能か。


#### isLearnedSkill (skillId) → {Boolean}
指定スキルを習得しているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) | [スキルID](RPG.Skill.md#スキルid) |


#### isMaxLevel () → {Boolean}
最大レベルに到達しているか。


#### isSkillWtypeOk (skill) → {Boolean}
Overrides:[Game_BattlerBase](Game_BattlerBase.md#isskillwtypeok-skill--boolean)


#### isSpriteVisible () → {Boolean}
スプライト(画像)が表示されているか。


#### isWtypeEquipped (wtypeId) → {Boolean}
指定武器タイプの武器を装備しているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wtypeId` | [Number](Number.md) | 武器タイプID |


#### lastBattleSkill () → {[RPG.Skill](RPG.Skill.md)}
最後の戦闘スキルを返す。


#### lastCommandSymbol () → {[String](String.md)}
最後のコマンドを返す。


#### lastMenuSkill () → {[RPG.Skill](RPG.Skill.md)}
最後のメニュースキルを返す。


#### learnSkill (skillId)
指定スキルを習得する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) | [スキルID](RPG.Skill.md#スキルid) |


#### levelDown ()
レベルダウンを実行。


#### levelUp ()
レベルアップを実行。


#### makeActionList () → {[Array](Array.md).<[Game_Action](Game_Action.md)>}
行動の配列を生成して返す。


#### makeActions ()
Overrides:[Game_Battler](Game_Battler.md#makeactions-)


#### makeAutoBattleActions ()
自動戦闘の行動を生成。


#### makeConfusionActions ()
混乱状態の行動を生成。


#### maxFloorDamage () → {[Number](Number.md)}
最大のフロアダメージを返す。


#### maxLevel ()
最大レベルを返す。


#### meetsUsableItemConditions (item) → {Boolean}
Overrides:[Game_BattlerBase](Game_BattlerBase.md#meetsusableitemconditions-item--boolean)


#### name ()
[名前]を返す。


#### nextLevelExp () → {[Number](Number.md)}
次のレベルの必要経験値を返す。


#### nextRequiredExp () → {[Number](Number.md)}
[次のレベルまで]の経験値を返す。


#### nickname () → {[String](String.md)}
[二つ名]を返す。


#### onPlayerWalk ()
マップシーンで歩いているときに呼ばれるハンドラ。


#### opponentsUnit () → {[Game_Troop](Game_Troop.md)}
敵グループを返す。


#### optimizeEquipments ()
[最強装備]にする。


#### paramBase (paramId) → {[Number](Number.md)}
Overrides:[Game_BattlerBase](Game_BattlerBase.md#parambase-paramid--number)


#### paramMax (paramId) → {[Number](Number.md)}
Overrides:[Game_BattlerBase](Game_BattlerBase.md#parammax-paramid--number)


#### paramPlus (paramId) → {[Number](Number.md)}
Overrides:[Game_BattlerBase](Game_BattlerBase.md#paramplus-paramid--number)


#### performAction (action)
Overrides:[Game_Battler](Game_Battler.md#performaction-action)


#### performActionEnd ()
Overrides:[Game_Battler](Game_Battler.md#performactionend-)


#### performActionStart (action)
Overrides:[Game_Battler](Game_Battler.md#performactionstart-action)


#### performAttack ()
攻撃動作を実行。


#### performCollapse ()
Overrides:[Game_Battler](Game_Battler.md#performcollapse-)


#### performCounter ()
Overrides:[Game_Battler](Game_Battler.md#performcounter-)


#### performDamage ()
Overrides:[Game_Battler](Game_Battler.md#performdamage-)


#### performEscape ()
逃走動作を実行。


#### performEvasion ()
Overrides:[Game_Battler](Game_Battler.md#performevasion-)


#### performMagicEvasion ()
Overrides:[Game_Battler](Game_Battler.md#performmagicevasion-)


#### performMapDamage ()
マップシーンでの被ダメージ動作を実行。


#### performVictory ()
勝利動作を実行。


#### profile () → {[String](String.md)}
[プロフィール]を返す。


#### refresh ()
Overrides:[Game_Battler](Game_Battler.md#refresh-)


#### releaseUnequippableItems (forcing)
装備不可アイテムの装備を外す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `forcing` | Boolean | 強制的に外すか |


#### resetStateCounts (stateId)
Overrides:[Game_BattlerBase](Game_BattlerBase.md#resetstatecounts-stateid)


#### selectNextCommand () → {Boolean}
次のコマンドを選択し、選択できたか返す。


#### selectPreviousCommand () → {Boolean}
前のコマンドを選択し、選択できたか返す。


#### setBattlerImage (battlerName)
SVのバトラー画像を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `battlerName` | [String](String.md) | [[SV]戦闘キャラ]画像ファイル名(拡張子なし) |


#### setCharacterImage (characterName, characterIndex)
トップビューのキャラ画像を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) | キャラ画像ファイル名(拡張子なし) |
| `characterIndex` | [Number](Number.md) | キャラ画像番号 |


#### setFaceImage (faceName, faceIndex)
キャラの[顔]画像を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `faceName` | [String](String.md) | [顔]画像ファイル名(拡張子なし) |
| `faceIndex` | [Number](Number.md) | [顔]画像番号 |


#### setLastBattleSkill (skill)
最後の戦闘スキルを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### setLastCommandSymbol (symbol)
最後に選択されたコマンドを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | コマンドシンボル |


#### setLastMenuSkill (skill)
最後に選択されたメニュースキルを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### setName (name)
[名前]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | [名前] |


#### setNickname (nickname)
[二つ名]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `nickname` | [String](String.md) | [二つ名] |


#### setProfile (profile)
[プロフィール]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `profile` | [String](String.md) | [プロフィール] |


#### setup (actorId)
指定アクターで Gama_Actor を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `actorId` | [Number](Number.md) | アクターID |


#### shouldDisplayLevelUp () → {Boolean}
レベルアップのメッセージ表示を行うか。


#### showAddedStates ()
ステート付加のメッセージ表示を行うか。


#### showRemovedStates ()
ステート解除のメッセージ表示を行うか。


#### skills () → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}
取得済みスキルを返す。


#### startAnimation (animationId, mirror, delay)
Overrides:[Game_Battler](Game_Battler.md#startanimation-animationid-mirror-delay)


#### stepsForTurn () → {[Number](Number.md)}
戦闘1ターンに当たる歩数(規定値:20)を返す。


#### testEscape (item)
指定アイテムが[特殊効果 - 逃げる]を持っているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | アイテム |


#### tradeItemWithParty (newItem, oldItem) → {Boolean}
所持アイテムを交換し、交換できたか返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `newItem` | [RPG.EquipItem](RPG.EquipItem.md) | 新アイテム |
| `oldItem` | [RPG.EquipItem](RPG.EquipItem.md) | 旧アイテム |


#### traitObjects () → {[Array](Array.md).<*>}
Overrides:[Game_Battler](Game_Battler.mdr#traitobjects)</a>


#### turnEndOnMap ()
マップ上でターン終了(相当)の歩数を歩いた。


#### updateStateSteps (state)
指定ステート解除条件の歩数をアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `state` | [RPG.State](RPG.State.md) | ステート |


#### usableSkills () → {[Array](Array.md).<[RPG.Skill](RPG.Skill.md)>}
使用可能なスキルの配列を返す。


#### weapons () → {[Array](Array.md).<[RPG.Weapon](RPG.Weapon.md)>}
装備している武器を配列で返す。

