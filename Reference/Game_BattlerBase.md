# Class: Game_BattlerBase

### new Game_BattlerBase ()
[BattleManager](BattleManager.md) に保持され、戦闘シーンでのパラメータの計算につかわれる。


### Sub Classes

* [Game_Battler](Game_Battler.md)


### Properties:
TRAIT\_が頭についている静的定数は、[特徴]に含まれる値を取り出す際に使われる。ただし本クラスではそれぞれメソッドが用意されているので、直接使用する必要はない。<br />
[特徴]の値は[RPG.Trait](RPG.Trait.md) を参照。この値を直接操作する際には TRAIT\_接頭辞の定数を使う。

説明(Description) に [read-only] がついているプロパティは、[RPG.Damage](RPG.Damage.md)の[計算式]などで使うために用意されている。<br />
計算式の <code>a.atk * 4 - b.def * 2</code> の a や b に Game_BattlerBase(のサブクラス)が代入されている。


| Name | Type | Description |
| --- | --- | --- |
| `TRAIT_ELEMENT_RATE` | [Number](Number.md) | [static] [耐性 - 属性有効度] |
| `TRAIT_DEBUFF_RATE` | [Number](Number.md) | [static] [耐性 - 弱体有効度]  |
| `TRAIT_STATE_RATE` | [Number](Number.md) | [static] [耐性 - ステート有効度] |
| `TRAIT_STATE_RESIST` | [Number](Number.md) | [static] [耐性 - ステート無効化] |
| `TRAIT_PARAM` | [Number](Number.md) | [static] [能力値 - 通常能力値] |
| `TRAIT_XPARAM` | [Number](Number.md) | [static] [能力値 - 追加能力値] |
| `TRAIT_SPARAM` | [Number](Number.md) | [static] [能力値 - 特殊能力値] |
| `TRAIT_ATTACK_ELEMENT` | [Number](Number.md) | [static] [攻撃 - 攻撃時属性]|
| `TRAIT_ATTACK_STATE` | [Number](Number.md) | [static] [攻撃 - 攻撃時ステート] |
| `TRAIT_ATTACK_SPEED` | [Number](Number.md) | [static] [攻撃 - 攻撃速度補正] |
| `TRAIT_ATTACK_TIMES` | [Number](Number.md) | [static] [攻撃 - 攻撃追加回数] |
| `TRAIT_STYPE_ADD` | [Number](Number.md) | [static] [スキル - スキルタイプ追加] |
| `TRAIT_STYPE_SEAL` | [Number](Number.md) | [static] [スキル - スキルタイプ封印] |
| `TRAIT_SKILL_ADD` | [Number](Number.md) | [static] [スキル - スキル追加] |
| `TRAIT_SKILL_SEAL` | [Number](Number.md) | [static] [スキル - スキル封印] |
| `TRAIT_EQUIP_WTYPE` | [Number](Number.md) | [static] [装備 - 武器タイプ装備] |
| `TRAIT_EQUIP_ATYPE` | [Number](Number.md) | [static] [装備 - 防具タイプ装備] |
| `TRAIT_EQUIP_LOCK` | [Number](Number.md) | [static] [装備 - 装備固定] |
| `TRAIT_EQUIP_SEAL` | [Number](Number.md) | [static] [装備 - 装備封印 |
| `TRAIT_SLOT_TYPE` | [Number](Number.md) | [static] [装備 - スロットタイプ] |
| `TRAIT_ACTION_PLUS` | [Number](Number.md) | [static] [その他 - 行動回数追加] |
| `TRAIT_SPECIAL_FLAG` | [Number](Number.md) | [static] [その他 - 特殊フラグ] |
| `TRAIT_COLLAPSE_TYPE` | [Number](Number.md) | [static] [その他 - 消滅エフェクト] |
| `TRAIT_PARTY_ABILITY` | [Number](Number.md) | [static] [その他 - パーティ能力] |
| `FLAG_ID_AUTO_BATTLE` | [Number](Number.md) | [static] 特殊フラグIDの[自動戦闘]|
| `FLAG_ID_GUARD` | [Number](Number.md) | [static] 特殊フラグIDの[防御]|
| `FLAG_ID_SUBSTITUTE` | [Number](Number.md) | [static] 特殊フラグIDの[身代わり]|
| `FLAG_ID_PRESERVE_TP` | [Number](Number.md) | [static] 特殊フラグIDの[TP持ち越し]|
| `ICON_BUFF_START` | [Number](Number.md) | [static] 能力強化アイコンの開始位置 |
| `ICON_DEBUFF_START` | [Number](Number.md) | [static] 能力弱体アイコンの開始位置  |
| `hp` | [Number](Number.md) | [read-only] HP |
| `mp` | [Number](Number.md) | [read-only] MP |
| `tp` | [Number](Number.md) | [read-only] TP |
| `mhp` | [Number](Number.md) | [read-only] 最大HP |
| `mmp` | [Number](Number.md) | [read-only] 最大MP |
| `atk` | [Number](Number.md) | [read-only] 攻撃力 |
| `def` | [Number](Number.md) | [read-only] 防御力 |
| `mat` | [Number](Number.md) | [read-only] 魔法力 |
| `mdf` | [Number](Number.md) | [read-only] 魔法防御力 |
| `agi` | [Number](Number.md) | [read-only] 敏捷性 |
| `luk` | [Number](Number.md) | [read-only] 運 |
| `hit` | [Number](Number.md) | [read-only] 命中率 |
| `eva` | [Number](Number.md) | [read-only] 回避率 |
| `cri` | [Number](Number.md) | [read-only] 会心率 |
| `cev` | [Number](Number.md) | [read-only] 会心回避率 |
| `mev` | [Number](Number.md) | [read-only] 魔法会心率 |
| `mrf` | [Number](Number.md) | [read-only] 魔法反射率 |
| `cnt` | [Number](Number.md) | [read-only] 反撃率 |
| `hrg` | [Number](Number.md) | [read-only] HP回復率 |
| `mrg` | [Number](Number.md) | [read-only] MP回復率 |
| `trg` | [Number](Number.md) | [read-only] TP回復率 |
| `tgr` | [Number](Number.md) | [read-only] 狙われ率 |
| `grd` | [Number](Number.md) | [read-only] 防御率 |
| `rec` | [Number](Number.md) | [read-only] 回復率 |
| `pha` | [Number](Number.md) | [read-only] 薬効果率 |
| `mcr` | [Number](Number.md) | [read-only] MP消費率 |
| `tcr` | [Number](Number.md) | [read-only] TPチャージ率 |
| `pdr` | [Number](Number.md) | [read-only] 物理ダメージ率 |
| `mdr` | [Number](Number.md) | [read-only] 魔法ダメージ率 |
| `fdr` | [Number](Number.md) | [read-only] 床ダメージ率 |
| `exr` | [Number](Number.md) | [read-only] 経験値率 |
| `_hp` | [Number](Number.md) | HP |
| `_mp` | [Number](Number.md) | MP |
| `_tp` | [Number](Number.md) | TP |
| `_hidden` | Boolean | 隠れているか |
| `_paramPlus` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 能力値強化量の配列 |
| `_states` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [ステートID](RPG.State.md#ステートid) の配列 |
| `_stateTurns` | Object | {[stateId: number]: number} ステートの残りターン|
| `_buffs` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 能力の強化の配列 |
| `_buffTurns` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 強化の残りターン |


### Methods

#### actionPlusSet () → {[Array](Array.md).<[Number](Number.md)>}
 [その他 - 行動回数追加] の配列を返す。


#### addedSkills () → {[Array](Array.md).<[Number](Number.md)>}
[スキル - スキル追加]の配列を返す。


#### addedSkillTypes () → {[Array](Array.md).<[Number](Number.md)>}
 [スキル - スキルタイプ追加] の配列を返す。


#### addNewState (stateId)
新たなステートを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### addParam (paramId, value)
指定能力に指定した値を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |
| `value` | [Number](Number.md) | 値 |


#### allIcons () → {[Array](Array.md).<[Number](Number.md)>}
全アイコン番号を配列で返す。


#### allTraits () → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}
全特徴を配列で返す。


#### appear ()
バトラーを出現させる。


#### attackElements () → {[Array](Array.md).<[Number](Number.md)>}
 [攻撃時属性]の配列を返す。


#### attackSkillId () → {[Number](Number.md)}
攻撃スキルのIDを返す。


#### attackSpeed () → {[Number](Number.md)}
 [攻撃 - 攻撃速度補正] を返す。


#### attackStates () → {[Array](Array.md).<[Number](Number.md)>}
攻撃[ステートID](RPG.State.md#ステートid)を配列で返す。


#### attackStatesRate (stateId)
指定攻撃ステートの付加率を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### attackTimesAdd () → {[Number](Number.md)}
[攻撃 - 攻撃追加回数]を返す。


#### buff (paramId) → {[Number](Number.md)}
指定能力の強化量を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### buffIconIndex (buffLevel, paramId) → {[Number](Number.md)}
[強化]アイコンの番号を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `buffLevel` | [Number](Number.md) | 強化レベル |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### buffIcons () → {[Array](Array.md).<[Number](Number.md)>}
付加中の[強化]アイコン番号を配列で返す。


#### buffLength () → {[Number](Number.md)}
強化能力数を返す。


#### canAttack () → {Boolean}
攻撃可能か。


#### canEquip (item) → {Boolean}
指定アイテムを装備可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | 装備アイテム |


#### canEquipArmor (item) → {Boolean}
指定防具を装備可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | 装備アイテム |


#### canEquipWeapon (item) → {Boolean}
指定武器を装備可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.EquipItem](RPG.EquipItem.md) | 装備アイテム |


#### canGuard () → {Boolean}
防御可能か。


#### canInput () → {Boolean}
行動の入力可能か。


#### canMove () → {Boolean}
動作可能か。


#### canPaySkillCost (skill) → {Boolean}
指定スキルの動作可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### canUse (item) → {Boolean}
指定アイテムを使用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) | アイテム |


#### clearBuffs ()
能力[強化]を戻す。


#### clearParamPlus ()
能力強化量を戻す。


#### clearStates ()
ステート変化を戻す。


#### collapseType () → {[Number](Number.md)}
[その他 - 消滅エフェクト]を返す。


#### confusionLevel () → {[Number](Number.md)}
混乱レベルを返す。


#### deathStateId () → {[Number](Number.md)}
死亡ステートのID(規定値:1)を返す。


#### debuffRate (paramId) → {[Number](Number.md)}
指定した能力値に対する[耐性 - 弱体有効度] を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### decreaseBuff (paramId)
指定通常能力の[強化]を減少させる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### die ()
バトラーを死亡ステートにする。


#### elementRate (elementId) → {[Number](Number.md)}
 指定の属性に対する[耐性 - 属性有効度]を返す。
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `elementId` | [Number](Number.md) | [属性ID](RPG.Damage.md#属性id) |


#### eraseBuff (paramId)
指定通常能力の[強化]を消す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### eraseState (stateId)
指定ステートを消す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### guardSkillId () → {[Number](Number.md)}
防御スキルのID(規定値:2)を返す。


#### hide ()
バトラーを隠す。


#### hpRate () → {[Number](Number.md)}
HPのパーセント量を返す。


#### increaseBuff (paramId)
指定通常能力を[強化]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### initialize ()
 オブジェクト生成時の初期化。


#### initMembers ()
メンバ変数を初期化。


#### isActor () → {Boolean}
アクターか。


#### isAlive () → {Boolean}
生きているか。


#### isAppeared () → {Boolean}
現れているか。


#### isAutoBattle () → {Boolean}
[自動戦闘]か。


#### isBuffAffected (paramId) → {Boolean}
指定通常能力値に[強化]がかかっているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isBuffExpired (paramId) → {Boolean}
指定通常能力値の[強化]が切れているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isBuffOrDebuffAffected (paramId) → {Boolean}
指定通常能力値が[強化][弱体]されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isConfused () → {Boolean}
混乱しているか。


#### isDead () → {Boolean}
表示されて死亡ステートか。


#### isDeathStateAffected () → {Boolean}
死亡ステートか。


#### isDebuffAffected (paramId) → {Boolean}
指定通常能力値が[弱体]されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isDualWield () → {Boolean}
二刀流か。


#### isDying () → {Boolean}
瀕死(規定値:最大HPの1/4以下)か。


#### isEnemy () → {Boolean}
敵か。


#### isEquipAtypeOk (atypeId) → {Boolean}
指定防具タイプが[装備 - 防具タイプ装備]にある(装備可能)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `atypeId` | [Number](Number.md) | [防具タイプID](RPG.Trait.md#52--防具タイプid) |


#### isEquipTypeLocked (etypeId) → {Boolean}
指定装備タイプが [装備 - 装備固定]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) | [装備タイプID](RPG.Trait.md#53-54--装備タイプid) |


#### isEquipTypeSealed (etypeId) → {Boolean}
指定装備タイプが [装備 - 装備封印]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `etypeId` | [Number](Number.md) | [装備タイプID](RPG.Trait.md#53-54--装備タイプid) |


#### isEquipWtypeOk (wtypeId) → {Boolean}
指定武器タイプが[装備 - 武器タイプ装備]にある(装備可能)か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wtypeId` | [Number](Number.md) | [武器タイプID](RPG.Trait.md#51--武器タイプid) |


#### isGuard () → {Boolean}
防御中か。


#### isHidden () → {Boolean}
隠れているか。


#### isMaxBuffAffected (paramId) → {Boolean}
指定通常能力値が最[強化]されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isMaxDebuffAffected (paramId) → {Boolean}
指定通常能力値が最[弱体]されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isOccasionOk (item) → {Boolean}
指定アイテムが使用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) | アイテム |


#### isPreserveTp () → {Boolean}
[TP持ち越し]か。


#### isRestricted () → {Boolean}
何かの行動制約ステートか。


#### isSkillSealed (stypeId) → {Boolean}
指定スキルタイプが[スキル - スキル封印]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stypeId` | [Number](Number.md) | [スキルタイプID](RPG.Trait.md#スキルタイプid) |


#### isSkillTypeSealed (stypeId) → {Boolean}
指定スキルタイプが [スキル - スキルタイプ封印]されているか。
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stypeId` | [Number](Number.md) | [スキルタイプID](RPG.Trait.md#スキルタイプid) |


#### isSkillWtypeOk (skill) → {Boolean}
指定スキルの発動条件に合う装備をしているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### isStateAffected (stateId) → {Boolean}
指定したステートか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### isStateExpired (stateId) → {Boolean}
指定ステートが切れているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### isStateResist (stateId) → {Boolean}
指定ステートが無効化されているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### isSubstitute () → {Boolean}
[身代わり]ステートか。


#### maxTp () → {[Number](Number.md)}
最大TPを返す。


#### meetsItemConditions (item) → {Boolean}
指定アイテムを持っていて使用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.Item](RPG.Item.md) | アイテム |


#### meetsSkillConditions (skill) → {Boolean}
指定スキルを使用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### meetsUsableItemConditions (item) → {Boolean}
指定アイテムが使用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) | アイテム |


#### mostImportantStateText () → {[String](String.md)}
現在のステートを表すメッセージ文字列を返す。


#### mpRate () → {[Number](Number.md)}
MPのパーセント量を返す。


#### onRestrict ()
行動制約された時に呼ばれるハンドラ。


#### overwriteBuffTurns (paramId, turns)
通常能力[強化]の有効ターンを追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |
| `turns` | [Number](Number.md) | 追加ターン |


#### param (paramId) → {[Number](Number.md)}
指定通常能力値の様々な[強化]などの計算後の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### paramBase (paramId) → {[Number](Number.md)}
指定通常能力値の基本値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### paramBuffRate (paramId) → {[Number](Number.md)}
指定通常能力値の[強化]率を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### paramMax (paramId) → {[Number](Number.md)}
指定通常能力値の最大値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### paramMin (paramId) → {[Number](Number.md)}
指定通常能力値の最小値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### paramPlus (paramId) → {[Number](Number.md)}
指定通常能力値に加算される値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### paramRate (paramId) → {[Number](Number.md)}
指定した[能力値 - 通常能力値]の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### partyAbility (abilityId) → {Boolean}
指定パーティ能力が[その他 - パーティ能力]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `abilityId` | [Number](Number.md) |  [パーティ能力ID](RPG.Trait.md#64--パーティ能力id) |


#### paySkillCost (skill)
スキルに必要なコスト(MP・TP)を消費。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### recoverAll ()
HP・MP全回復しステートを解除。


#### refresh ()
能力値やステートを規定値内に収める処理。


#### resetStateCounts (stateId)
指定ステートの有効ターン数を初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### restriction () → {[Number](Number.md)}
行動制約の状態を示す値を返す。

0:なし, 1:敵を攻撃, 2:無作為攻撃, 3:味方を攻撃, 4:行動不可


#### revive ()
復活。


#### setHp (hp)
HPを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `hp` | [Number](Number.md) | HP |


#### setMp (mp)
MPを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mp` | [Number](Number.md) | MP |


#### setTp (tp)
TPを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tp` | [Number](Number.md) | TP |


#### skillMpCost (skill) → {[Number](Number.md)}
指定スキルに必要なMPを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### skillTpCost (skill) → {[Number](Number.md)}
指定スキルに必要なTPを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skill` | [RPG.Skill](RPG.Skill.md) | スキル |


#### slotType () → {[Number](Number.md)}
 [装備 - スロットタイプ]を返す。


#### sortStates ()
優先度でステートの並び替え。


#### sparam (sparamId) → {[Number](Number.md)}
指定した[能力値 - 特殊能力値]の値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sparamId` | [Number](Number.md) | [特殊能力値ID](RPG.Trait.md#23--特殊能力値id) |


#### specialFlag (flagId) → {Boolean}
指定フラグが[その他 - 特殊フラグ]か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `flagId` | [Number](Number.md) | フラグID |


#### stateIcons () → {[Array](Array.md).<[Number](Number.md)>}
ステートのアイコン番号を配列で返す。


#### stateMotionIndex () → {[Number](Number.md)}
SVでのステートの動作番号を返す。


#### stateOverlayIndex () → {[Number](Number.md)}
SVでのステートの重ね合わせ番号を返す。


#### stateRate (stateId) → {[Number](Number.md)}
 指定したステートに対する[耐性 - ステート有効度]を返す。
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### stateResistSet () → {[Array](Array.md).<[Number](Number.md)>}
[耐性 - ステート無効化]に対応する、[ステートID](RPG.State.md#ステートid)の配列を返す。


#### states () → {[Array](Array.md).<[RPG.State](RPG.State.md)>}
適用中のステートを配列で返す。


#### tpRate () → {[Number](Number.md)}
TPのパーセント量を返す。


#### traitObjects () → {[Array](Array.md).<*>}
特徴オブジェクトを配列で返す。


#### traits (code) → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}
指定特徴コード(TRAIT_定数)の特徴を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | [特徴コード](RPG.Trait.md#code) |


#### traitsPi (code, id) → {[Number](Number.md)}
指定特徴コード(TRAIT_定数)・IDの値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | [特徴コード](RPG.Trait.md#code) |
| `id` | [Number](Number.md) | 特徴ID |


#### traitsSet (code) → {[Array](Array.md).<[Number](Number.md)>}
指定特徴コード(TRAIT_定数)の、特徴IDの配列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | [特徴コード](RPG.Trait.md#code) |


#### traitsSum (code, id) → {[Number](Number.md)}
指定特徴コード(TRAIT_定数)・IDの特徴を足し合わせて返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | [特徴コード](RPG.Trait.md#code) |
| `id` | [Number](Number.md) | 特徴ID |


#### traitsSumAll (code) → {[Number](Number.md)}
指定特徴コード(TRAIT_定数)の特徴を積算して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | [特徴コード](RPG.Trait.md#code) |


#### traitsWithId (code, id) → {[Array](Array.md).<[RPG.Trait](RPG.Trait.md)>}
指定特徴コード(TRAIT_定数)・IDの特徴を配列で返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `code` | [Number](Number.md) | [特徴コード](RPG.Trait.md#code) |
| `id` | [Number](Number.md) | 特徴ID |


#### updateBuffTurns ()
通常能力値[強化]のアップデート。


#### updateStateTurns ()
ステート変化のアップデート。


#### xparam (xparamId) → {[Number](Number.md)}
 指定した[能力値 - 追加能力値] の値を返す。
 
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xparamId` | [Number](Number.md) | [追加能力値ID](RPG.Trait.md#追加能力値id) |

