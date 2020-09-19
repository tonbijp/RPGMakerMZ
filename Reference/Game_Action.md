# Class: Game_Action

### new Game_Action (subject, forcing)
攻撃や防御、スキル・アイテムの使用など、戦闘の行動を記述したクラス。

[Game_Battler](Game_Battler.md) の \_actions プロパティが持っていて、逆にこちらからは [subject()](Game_Action.md#subject-) メソッドで Game\_Battler を取得できる。

関連クラス: [BattleManager](BattleManager.md), [Game_Actor](Game_Actor.md), [Game_Enemy](Game_Enemy.md), [Game_ActionResult](Game_ActionResult.md), [RPG.Effect](RPG.Effect.md), [RPG.UsableItem](RPG.UsableItem.md), [RPG.Damage](RPG.Damage.md)

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 行動主体 |
| `forcing` | Boolean | 強制行動か |


### Properties:

* EFFECT\_ から始まる定数は、[[使用効果](RPG.Effect.md#code)] を指定するのに使う。
* SPECIAL\_EFFECT\_ESCAPE は、[[使用効果 - その他 - 特殊効果](RPG.Effect.md#その他)] の dataId を指定するのに使う。
* HITTYPE\_から始まる定数は、[[命中タイプ](RPG.UsableItem.md#命中タイプ)] を指定するのに使う。

| Name | Type | Description |
| --- | --- | --- |
| `EFFECT_RECOVER_HP` | [Number](Number.md) | [static] HP回復 |
| `EFFECT_RECOVER_MP` | [Number](Number.md) | [static] MP回復 |
| `EFFECT_GAIN_TP` | [Number](Number.md) | [static] TP増加 |
| `EFFECT_ADD_STATE` | [Number](Number.md) | [static] ステート付加 |
| `EFFECT_REMOVE_STATE` | [Number](Number.md) | [static] ステート解除 |
| `EFFECT_ADD_BUFF` | [Number](Number.md) | [static] 強化 |
| `EFFECT_ADD_DEBUFF` | [Number](Number.md) | [static] 弱体 |
| `EFFECT_REMOVE_BUFF` | [Number](Number.md) | [static] 強化の解除 |
| `EFFECT_REMOVE_DEBUFF` | [Number](Number.md) | [static] 弱体の解除 |
| `EFFECT_SPECIAL` | [Number](Number.md) | [static] 特殊効果 |
| `EFFECT_GROW` | [Number](Number.md) | [static] 成長 |
| `EFFECT_LEARN_SKILL` | [Number](Number.md) | [static] スキル習得 |
| `EFFECT_COMMON_EVENT` | [Number](Number.md) | [static] コモンイベント |
| `SPECIAL_EFFECT_ESCAPE` | [Number](Number.md) | [static] 特殊効果 - 逃げる |
| `HITTYPE_CERTAIN` | [Number](Number.md) | [static] 必中 |
| `HITTYPE_PHYSICAL` | [Number](Number.md) | [static] 物理攻撃 |
| `HITTYPE_MAGICAL` | [Number](Number.md) | [static] 魔法攻撃 |
| `_subjectActorId` | [Number](Number.md) | 行動主体アクターID |
| `_subjectEnemyIndex` | [Number](Number.md) | 行動主体敵番号 |
| `_targetIndex` | [Number](Number.md) | 対象番号 |
| `_forcing` | Boolean | 強制行動か |
| `_item` | [Game_Item](Game_Item.md) | スキル・アイテム |


### Methods

#### (static) initialize (subject, forcing) オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `forcing` | Boolean | 強制行動か |


#### apply (target)
指定対象へ結果( [Game_ActionResult](Game_ActionResult.md) )の適用。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### applyCritical (damage) → {[Number](Number.md)}
指定ダメージで[会心]攻撃。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `damage` | [Number](Number.md) | ダメージ量 |


#### applyGlobal ()
[使用効果]に含まれる[コモンイベント]を抽出して [$GameTemp](global.md#gametemp-game_temp)([Game_Temp](Game_Temp.md)) に保持。


#### applyGuard (damage, target) → {[Number](Number.md)}
指定ダメージを対象バトラーが防御し、防御分を減らしたダメージを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `damage` | [Number](Number.md) | ダメージ量 |
| `target` | [Game_Battler](Game_Battler.md) |対象バトラー |


#### applyItemEffect (target, effect)
指定対象にエフェクトを適用。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | エフェクト |


#### applyItemUserEffect (target)
指定対象にアイテムの効果を適用。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### applyVariance (damage, variance) → {[Number](Number.md)}
指定ダメージに対して[分散度]を適用したダメージを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `damage` | [Number](Number.md) | ダメージ量 |
| `variance` | [Number](Number.md) | [分散度] % (0〜100) |


#### calcElementRate (target) → {[Number](Number.md)}
指定対象への[属性]の効果率を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### checkDamageType (list) → {Boolean}
_item プロパティのダメージタイプと同じものが、指定したの配列の中にあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).&lt;[Number](Number.md)&gt; | ダメージの[[タイプ](RPG.Damage.md#タイプ)]の配列 |


#### checkItemScope (list) → {Boolean}
_item プロパティの[範囲]と同じものが、指定したの配列の中にあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `list` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [[範囲](RPG.UsableItem.md#範囲)]の配列 |


#### clear ()
アイテムと対象IDを空に。


#### confusionTarget () → {[Game_Battler](Game_Battler.md)}
混乱している場合の、対象バトラーを選んで返す。


#### decideRandomTarget ()
[範囲]に沿って、対象をランダムに決定。


#### elementsMaxRate (target, elements) → {[Number](Number.md)}
 指定対象の指定属性のうち最大の[耐性 - 属性有効度]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `elements` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [属性ID](RPG.Damage.md#属性id)の配列 |


#### evalDamageFormula (target) → {[Number](Number.md)}
[[ダメージ]](RPG.Damage.md)の[計算式]を適用し、ダメージ量を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー( [計算式]の b ) |


#### evaluate () → {[Number](Number.md)}
全ての対象に効果を適用して、総ダメージ量を返す。


#### evaluateWithTarget (target) → {[Number](Number.md)}
指定対象に効果を適用して、ダメージ量を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### executeDamage (target, value)
指定対象にダメージを与える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `value` | [Number](Number.md) | ダメージ量 |


#### executeHpDamage (target, value)
指定対象にHPダメージを与える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `value` | [Number](Number.md) | HPダメージ量 |

#### executeMpDamage (target, value)
指定対象にMPダメージを与える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `value` | [Number](Number.md) | MPダメージ量 |


#### friendsUnit () → {[Game_Unit](Game_Unit.md)}
味方パーティを返す。


#### gainDrainedHp (value)
敵から吸収したHPを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) | HP回復量 |


#### gainDrainedMp (value)
敵から吸収したMPを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) | MP回復量 |


#### hasItemAnyValidEffects (target) → {Boolean}
指定対象が、なんらかの[[使用効果](RPG.Effect.md)]を発生させるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### isAttack () → {Boolean}
行動が[攻撃]か。


#### isCertainHit () → {Boolean}
[[命中タイプ](RPG.UsableItem.md#命中タイプ)]が[必中]か。


#### isDamage () → {Boolean}
ダメージの[[タイプ](RPG.Damage.md#タイプ)]が[HPダメージ]か[MPダメージ]か。


#### isDrain () → {Boolean}
ダメージの[[タイプ](RPG.Damage.md#タイプ)]が[HP吸収]か[MP吸収]か。


#### isForAll () → {Boolean}
[[範囲](RPG.UsableItem.md#範囲)]が敵味方・戦闘不能問わず全体か。


#### isForDeadFriend () → {Boolean}
[[範囲](RPG.UsableItem.md#範囲)]が戦闘不能の味方か。


#### isForFriend () → {Boolean}
[[範囲](RPG.UsableItem.md#範囲)]が味方(自身も含む)か。


#### isForOne () → {Boolean}
[[範囲](RPG.UsableItem.md#範囲)]が敵味方問わず単体(複数回含まず)か。


#### isForOpponent () → {Boolean}
[[範囲](RPG.UsableItem.md#範囲)]が敵単体(複数回も含む)か。


#### isForRandom () → {Boolean}
[[範囲](RPG.UsableItem.md#範囲)]がランダムな敵か。


#### isForUser () → {Boolean}
[[範囲](RPG.UsableItem.md#範囲)]が自分自身か。


#### isGuard () → {Boolean}
行動が[防御]か。


#### isHpEffect () → {Boolean}
ダメージの[[タイプ](RPG.Damage.md#タイプ)]がHPに関するものか。


#### isHpRecover () → {Boolean}
ダメージの[[タイプ](RPG.Damage.md#タイプ)]が[HP回復]か。


#### isItem () → {Boolean}
[アイテム]か。


#### isMagical () → {Boolean}
[[命中タイプ](RPG.UsableItem.md#命中タイプ)]が[魔法攻撃]か。


#### isMagicSkill () → {Boolean}
[魔法]スキルか。


#### isMpEffect () → {Boolean}
ダメージの[[タイプ](RPG.Damage.md#タイプ)]がMPに関するものか。


#### isMpRecover () → {Boolean}
ダメージの[[タイプ](RPG.Damage.md#タイプ)]が[MP回復]か。


#### isPhysical () → {Boolean}
[[命中タイプ](RPG.UsableItem.md#命中タイプ)]が[物理攻撃]か。


#### isRecover () → {Boolean}
ダメージの[[タイプ](RPG.Damage.md#タイプ)]が[MP回復]か。


#### isSkill () → {Boolean}
[スキル]か。


#### isValid () → {Boolean}
行動可能か。


#### item () → {[RPG.UsableItem](RPG.UsableItem.md)}
行動の情報を記述したオブジェクトを返す。<br />
道具というより項目ぐらいの意味で、攻撃・スキルなどにもこれが使われる。


#### itemCnt (target) → {[Number](Number.md)}
指定対象の[反撃率]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### itemCri (target) → {[Number](Number.md)}
指定対象の[会心率]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### itemEffectAddAttackState (target, effect)
指定対象に攻撃の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectAddBuff (target, effect)
指定対象に[強化]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectAddDebuff (target, effect)
指定対象に[弱体]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectAddNormalState (target, effect)
指定対象に通常の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] ||


#### itemEffectAddState (target, effect)
指定対象に[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectCommonEvent (target, effect)
指定対象に[コモンイベント]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectGainTp (target, effect)
指定対象に[TP増加]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectGrow (target, effect)
指定対象に[成長]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectLearnSkill (target, effect)
指定対象に[スキル習得]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectRecoverHp (target, effect)
指定対象に[HP回復]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectRecoverMp (target, effect)
指定対象に[MP回復]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectRemoveBuff (target, effect)
指定対象に[強化の解除]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectRemoveDebuff (target, effect)
指定対象に[弱体の解除]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectRemoveState (target, effect)
指定対象に[ステート解除]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEffectSpecial (target, effect)
指定対象に[特殊効果]の[使用効果]を加える。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |


#### itemEva (target) → {[Number](Number.md)}
指定対象の[回避率]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### itemHit (target) → {[Number](Number.md)}
指定対象の[命中率]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### itemMrf (target) → {[Number](Number.md)}
指定対象の[魔法反射率]を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### itemTargetCandidates () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}
対象となり得るバトラーを配列で返す。


#### lukEffectRate (target) → {[Number](Number.md)}
指定対象の[幸運]の適用率を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### makeDamageValue (target, critical) → {[Number](Number.md)}
指定対象へのダメージ量を計算して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `critical` | Boolean | [会心]か |


#### makeSuccess (target)
行動結果用に指定対象の行動に成功したフラグを立てる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### makeTargets () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}
対象となり得るバトラーを配列で返す。


#### needsSelection () → {Boolean}
[[範囲](RPG.UsableItem.md#範囲)]が単体で対象の選択が必要か。


#### numRepeats () → {[Number](Number.md)}
繰り返し行動回数を返す。


#### numTargets () → {[Number](Number.md)}
単体攻撃対象の数を返す。


#### opponentsUnit () → {[Game_Unit](Game_Unit.md)}
敵対グループを返す。


#### prepare ()
準備(標準では[混乱]の設定しかしていない)


#### repeatTargets (targets) → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}
繰り返し行動の対象を配列で返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `targets` | [Array](Array.md).<[Game_Battler](Game_Battler.md)> | 対象バトラーの配列 |


#### setAttack ()
行動に[攻撃]を設定。


#### setConfusion ()
行動に[混乱]を設定。


#### setEnemyAction (action)
敵に指定[行動パターン]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `action` | [RPG.Enemy.Action](RPG.Enemy.Action.md) | [行動パターン] |


#### setGuard ()
行動に[防御]を設定。


#### setItem (itemId)
行動に[アイテム]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `itemId` | [Number](Number.md) | アイテムID |


#### setItemObject (object)
行動に[アイテム][スキル]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | [RPG.UsableItem](RPG.UsableItem.md) | アイテム・スキル |


#### setSkill (skillId)
行動に[スキル]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `skillId` | [Number](Number.md) | [スキルID](RPG.Skill.md#スキルid)  |


#### setSubject (subject)
指定した行動主体に変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 行動主体バトラー |


#### setTarget (targetIndex)
指定番号で行動対象を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `targetIndex` | [Number](Number.md) | 対象番号 |


#### speed () → {[Number](Number.md)}
速度を返す。


#### subject () → {[Game_Battler](Game_Battler.md)}
行動主体を返す。


#### targetsForFriends () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}
味方側のバトラーの配列を返す。


#### targetsForOpponents () → {[Array](Array.md).<[Game_Battler](Game_Battler.md)>}
敵側のバトラーの配列を返す。


#### testApply (target) → {Boolean}
対象に行動を試験適用し、その結果は行動可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### testItemEffect (target, effect) → {Boolean}
対象に[使用効果]を試験適用し、その結果は実行可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `effect` | [RPG.Effect](RPG.Effect.md) | [使用効果] |

