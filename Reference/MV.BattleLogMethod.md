# Class: [MV](MV.md).BattleLogMethod

## Type: Object
[Window_BattleLog](Window_BattleLog.md) のメソッドを、後から呼ぶために貯めておくパラメータ。

関連クラス: [TextManager](TextManager.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | [メソッド名](MV.BattleLogMethod.md#メソッド名) |
| `params` | [Array](Array.md) | 引数の配列(詳細は各メソッドの解説を参照) |


#### メソッド名
BaseLine は表示の区切り行数で、連続してダメージを与えた場合など、一旦表示した後その行数まで戻す処理で使う。<br />
なお、popBaseLine で記録上の行は戻るが、次に行が表示されるまで表示は消えない。

行数は

| Method | Description | param1 | param2 | param3 |
| --- | --- | --- | --- | --- |
| [addText](Window_BattleLog.md#addtext-text) | 行を追加 | [String](String.md) |
| [clear](Window_BattleLog.md#clear-) | 表示を消去 |
| [performAction ](Window_BattleLog.md#performaction-subject-action) | 行動を適用 | [Game_Battler](Game_Battler.md) |[ Game_Action](Game_Action.md) |
| [performActionEnd](Window_BattleLog.md#performactionend-subject) | 行動の終了を適用 | [Game_Battler](Game_Battler.md) |
| [performActionStart](Window_BattleLog.md#performactionstart-subject-action) | 行動の開始を適用 | [Game_Battler](Game_Battler.md) |[ Game_Action](Game_Action.md) |
| [performCollapse](Window_BattleLog.md#performcollapse-target) | 倒れたことを適用 | [Game_Battler](Game_Battler.md) |
| [performCounter](Window_BattleLog.md#performcounter-target) | カウンター攻撃を適用 | [Game_Battler](Game_Battler.md) |
| [performDamage](Window_BattleLog.md#performdamage-target) | ダメージを適用 | [Game_Battler](Game_Battler.md) |
| [performEvasion](Window_BattleLog.md#performevasion-target) | 回避を適用 | [Game_Battler](Game_Battler.md) |
| [performMagicEvasion](Window_BattleLog.md#performmagicevasion-target) | 魔法反射を適用 | [Game_Battler](Game_Battler.md) |
| [performMiss](Window_BattleLog.md#performmiss-target) | 攻撃失敗を適用 | [Game_Battler](Game_Battler.md) |
| [performRecovery](Window_BattleLog.md#performrecovery-target) | 回復を適用 | [Game_Battler](Game_Battler.md) |
| [performReflection](Window_BattleLog.md#performreflection-target) | 反射を適用 | [Game_Battler](Game_Battler.md) |
| [performSubstitute](Window_BattleLog.md#performsubstitute-target) | [かばう]行動を適用 | [Game_Battler](Game_Battler.md) |
| [popBaseLine](Window_BattleLog.md#popbaseline-) | 記録した区切り行数に戻る |
| [popupDamage](Window_BattleLog.md#popupdamage-target) | ダメージを表示 | [Game_Battler](Game_Battler.md) |
| [pushBaseLine](Window_BattleLog.md#pushbaseline-) | 区切り行数を記録 |
| [showAnimation](Window_BattleLog.md#showanimation-subject-targets-animationid) | アニメを表示 | [Game_Battler](Game_Battler.md) | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | [Number](Number.md) |
| [wait](Window_BattleLog.md#wait-) | 待つ |
| [waitForEffect](Window_BattleLog.md#waitforeffect-) | エフェクトを待つ |
| [waitForMovement ](Window_BattleLog.md#waitformovement-) | 動作を待つ |
| [waitForNewLine](Window_BattleLog.md#waitfornewline-) | 新たな行を待つ |



