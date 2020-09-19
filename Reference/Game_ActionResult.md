# Class: Game_ActionResult

### new Game_ActionResult ()
 [Game_Action](Game_Action.md) の結果を記述したオブジェクト。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `used` | Boolean | 使ったか |
| `missed` | Boolean | 失敗か |
| `evaded` | Boolean | [回避]か |
| `physical` | Boolean | [物理攻撃]か |
| `drain` | Boolean | [吸収]か |
| `critical` | Boolean | [会心]か |
| `success` | Boolean | 成功か |
| `hpAffected` | Boolean | HPに変化があったか |
| `hpDamage` | [Number](Number.md) | HPのダメージ量 |
| `mpDamage` | [Number](Number.md) | MPのダメージ量 |
| `tpDamage` | [Number](Number.md) | TPのダメージ量 |
| `addedStates` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 付加された[ステート]の配列 |
| `removedStates` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 削除された[ステート]の配列 |
| `addedBuffs` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 付加された[強化]の配列 |
| `addedDebuffs` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 付加された[弱体]の配列 |
| `removedBuffs` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 削除された[強化][弱体]の配列 |


### Methods

#### addedStateObjects () → {[Array](Array.md).<[RPG.State](RPG.State.md)>}
付加された[ステート]の配列を返す。


#### clear ()
結果情報を消す。

#### initialize ()
 オブジェクト生成時の初期化。

#### isBuffAdded (paramId) → {Boolean}
指定された能力値に[強化]が付加されたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isBuffRemoved (paramId) → {Boolean}
指定された能力値の[強化]が削除されたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isDebuffAdded (paramId) → {Boolean}
指定された能力値に[弱体]が付加されたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### isHit () → {Boolean}
攻撃がヒットしたか。

#### isStateAdded (stateId) → {Boolean}
指定ステートが付加されたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### isStateRemoved (stateId) → {Boolean}
指定ステートが削除されたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### isStatusAffected () → {Boolean}
指定ステートが効果を発揮したか。


#### pushAddedBuff (paramId)
指定された能力値の[強化]の付加を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### pushAddedDebuff (paramId)
指定された能力値の[弱体]の付加を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### pushAddedState (stateId)
指定ステートの付加を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### pushRemovedBuff (paramId)
指定された能力値の[強化]の削除を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | [能力値ID](RPG.Enemy.md#能力値id) |


#### pushRemovedState (stateId)
指定ステートの削除を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stateId` | [Number](Number.md) | [ステートID](RPG.State.md#ステートid) |


#### removedStateObjects () → {[Array](Array.md).<[RPG.State](RPG.State.md)>}
削除されたステートの配列を返す。