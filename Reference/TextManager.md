# Class: TextManager
[用語]のテキストを管理する静的クラス。

大域変数 [$dataSystem](global.md#datasystem-rpgsystem).terms に保存されている [RPG.System.Terms](RPG.System.Terms.md) を、呼び出しやすくしたもの。

用意されているメソッドはプロパティの準備のために使われるもので、通常は素直に必要なプロパティにアクセスすれば良い。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `currencyUnit` | [String](String.md) | [static][read-only] [通貨単位] |
| `level` | [String](String.md) | [static][read-only] [レベル] |
| `levelA` | [String](String.md) | [static][read-only] [レベル (略)] |
| `hp` | [String](String.md) | [static][read-only] [HP] |
| `hpA` | [String](String.md) | [static][read-only] [HP (略)] |
| `mp` | [String](String.md) | [static][read-only] [MP] |
| `mpA` | [String](String.md) | [static][read-only] [MP (略)] |
| `tp` | [String](String.md) | [static][read-only] [TP] |
| `tpA` | [String](String.md) | [static][read-only] [TP (略)] |
| `exp` | [String](String.md) | [static][read-only] [経験値] |
| `expA` | [String](String.md) | [static][read-only] [経験値 (略)] |
| `fight` | [String](String.md) | [static][read-only] [戦う] |
| `escape` | [String](String.md) | [static][read-only] [逃げる] |
| `attack` | [String](String.md) | [static][read-only] [攻撃] |
| `guard` | [String](String.md) | [static][read-only] [防御] |
| `item` | [String](String.md) | [static][read-only] [アイテム] |
| `skill` | [String](String.md) | [static][read-only] [スキル] |
| `equip` | [String](String.md) | [static][read-only] [装備]\(メインメニュー) |
| `status` | [String](String.md) | [static][read-only] [ステータス] |
| `formation` | [String](String.md) | [static][read-only] [並び替え] |
| `save` | [String](String.md) | [static][read-only] [セーブ] |
| `gameEnd` | [String](String.md) | [static][read-only] [ゲーム終了] |
| `options` | [String](String.md) | [static][read-only] [オプション] |
| `weapon` | [String](String.md) | [static][read-only] [武器] |
| `armor` | [String](String.md) | [static][read-only] [防具] |
| `keyItem` | [String](String.md) | [static][read-only] [大事なもの] |
| `equip2` | [String](String.md) | [static][read-only] [装備]\(装備メニュー) |
| `optimize` | [String](String.md) | [static][read-only] [最強装備] |
| `clear` | [String](String.md) | [static][read-only] [全て外す] |
| `newGame` | [String](String.md) | [static][read-only] [ニューゲーム] |
| `continue_` | [String](String.md) | [static][read-only] [コンティニュー] |
| `toTitle` | [String](String.md) | [static][read-only] [タイトルへ] |
| `cancel` | [String](String.md) | [static][read-only] [やめる] |
| `buy` | [String](String.md) | [static][read-only] [購入する] |
| `sell` | [String](String.md) | [static][read-only] [売却する] |
| `alwaysDash` | [String](String.md) | [static][read-only] [常時ダッシュ] |
| `commandRemember` | [String](String.md) | [static][read-only] [コマンド記憶] |
| `bgmVolume` | [String](String.md) | [static][read-only] [BGM 音量] |
| `bgsVolume` | [String](String.md) | [static][read-only] [BGS 音量] |
| `meVolume` | [String](String.md) | [static][read-only] [ME 音量] |
| `seVolume` | [String](String.md) | [static][read-only] [SE 音量] |
| `possession` | [String](String.md) | [static][read-only] [持っている数] |
| `expTotal` | [String](String.md) | [static][read-only] [現在の経験値] |
| `expNext` | [String](String.md) | [static][read-only] [次のレベルまで] |
| `saveMessage` | [String](String.md) | [static][read-only] [セーブメッセージ] |
| `loadMessage` | [String](String.md) | [static][read-only] [ロードメッセージ] |
| `file` | [String](String.md) | [static][read-only] [ファイル] |
| `partyName` | [String](String.md) | [static][read-only] [パーティ名] |
| `emerge` | [String](String.md) | [static][read-only] [出現] |
| `preemptive` | [String](String.md) | [static][read-only] [先制攻撃] |
| `surprise` | [String](String.md) | [static][read-only] [不意打ち] |
| `escapeStart` | [String](String.md) | [static][read-only] [逃走開始] |
| `escapeFailure` | [String](String.md) | [static][read-only] [逃走失敗] |
| `victory` | [String](String.md) | [static][read-only] [勝利] |
| `defeat` | [String](String.md) | [static][read-only] [敗北] |
| `obtainExp` | [String](String.md) | [static][read-only] [経験値獲得] |
| `obtainGold` | [String](String.md) | [static][read-only] [お金獲得] |
| `obtainItem` | [String](String.md) | [static][read-only] [アイテム獲得] |
| `levelUp` | [String](String.md) | [static][read-only] [レベルアップ] |
| `obtainSkill` | [String](String.md) | [static][read-only] [スキル習得] |
| `useItem` | [String](String.md) | [static][read-only] [アイテム使用] |
| `criticalToEnemy` | [String](String.md) | [static][read-only] [敵に会心] |
| `criticalToActor` | [String](String.md) | [static][read-only] [味方に会心] |
| `actorDamage` | [String](String.md) | [static][read-only] [味方ダメージ] |
| `actorRecovery` | [String](String.md) | [static][read-only] [味方回復] |
| `actorGain` | [String](String.md) | [static][read-only] [味方ポイント増加] |
| `actorLoss` | [String](String.md) | [static][read-only] [味方ポイント減少] |
| `actorDrain` | [String](String.md) | [static][read-only] [味方ポイント吸収] |
| `actorNoDamage` | [String](String.md) | [static][read-only] [味方ノーダメージ] |
| `actorNoHit` | [String](String.md) | [static][read-only] [味方に命中せず] |
| `enemyDamage` | [String](String.md) | [static][read-only] [敵ダメージ] |
| `enemyRecovery` | [String](String.md) | [static][read-only] [敵回復] |
| `enemyGain` | [String](String.md) | [static][read-only] [敵ポイント増加] |
| `enemyLoss` | [String](String.md) | [static][read-only] [敵ポイント減少] |
| `enemyDrain` | [String](String.md) | [static][read-only] [敵ポイント吸収] |
| `enemyNoDamage` | [String](String.md) | [static][read-only] [敵ノーダメージ] |
| `enemyNoHit` | [String](String.md) | [static][read-only] [敵に命中せず] |
| `evasion` | [String](String.md) | [static][read-only] [回避] |
| `magicEvasion` | [String](String.md) | [static][read-only] [魔法回避] |
| `magicReflection` | [String](String.md) | [static][read-only] [魔法反射] |
| `counterAttack` | [String](String.md) | [static][read-only] [反撃] |
| `substitute` | [String](String.md) | [static][read-only] [身代わり] |
| `buffAdd` | [String](String.md) | [static][read-only] [強化] |
| `debuffAdd` | [String](String.md) | [static][read-only] [弱体] |
| `buffRemove` | [String](String.md) | [static][read-only] [強化・弱体の解除] |
| `actionFailure` | [String](String.md) | [static][read-only] [行動失敗] |


### Methods

#### (static) basic (basicId) → {[String](String.md)}
指定IDの[[基本ステータス]](RPG.System.Terms.md#[基本ステータス])の用語を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `basicId` | [Number](Number.md) | 基本ステータスID |


#### (static) command (commandId) → {[String](String.md)}
指定IDの[[コマンド]](RPG.System.Terms.md#[コマンド])の用語を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `commandId` | [Number](Number.md) | コマンドID |


#### (static) getter (method, param) → {Object}
指定メソッドとIDのゲッターオブジェクト { get: Function, configurable: Boolean } を返す。

プロパティが読まれた時に使われる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `method` | [String](String.md) | メソッド名( 'basic', 'param', 'command', 'message' ) |
| `param` | [Number](Number.md) \| [String](String.md) | メソッド毎のID |


#### (static) message (messageId) → {[String](String.md)}
指定IDの[メッセージ]の用語を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `messageId` | [String](String.md) | メッセージID |


#### (static) param (paramId) → {[String](String.md)}
指定IDの[[能力値]](RPG.System.Terms.md#[能力値])の用語を返す。
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `paramId` | [Number](Number.md) | 能力値ID |


