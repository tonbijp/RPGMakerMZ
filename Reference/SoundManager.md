# Class: SoundManager
[効果音]で設定された音声を管理する静的クラス。

データは大域変数 [$dataSystem](global.md#datasystem-rpgsystem) の sounds プロパティに記録されている。

関連クラス: [RPG.System](RPG.System.md), [WebAudio](WebAudio.md), [Html5Audio](Html5Audio.md), [RPG.AudioFile](RPG.AudioFile.md)

### Methods

#### (static) loadSystemSound (n)
指定番号の音声を読み込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.md) | 音声番号 |


#### (static) playActorCollapse ()
[味方戦闘不能]を再生。


#### (static) playActorDamage ()
[味方ダメージ]を再生。


#### (static) playBattleStart ()
[戦闘開始]を再生。


#### (static) playBossCollapse1 ()
[ボス消滅1]を再生。


#### (static) playBossCollapse2 ()
[ボス消滅2]を再生。


#### (static) playBuzzer ()
[ブザー]を再生。


#### (static) playCancel ()
[キャンセル]を再生。


#### (static) playCursor ()
[カーソル]を再生。


#### (static) playEnemyAttack ()
[敵攻撃]を再生。


#### (static) playEnemyCollapse ()
[敵消滅]を再生。


#### (static) playEnemyDamage ()
[敵ダメージ]を再生。


#### (static) playEquip ()
[装備]を再生。


#### (static) playEscape ()
[逃走]を再生。


#### (static) playEvasion ()
[回避]を再生。


#### (static) playLoad ()
[ロード]を再生。


#### (static) playMagicEvasion ()
[魔法回避]を再生。


#### (static) playMiss ()
[ミス]を再生。


#### (static) playOk ()
[決定]を再生。


#### (static) playRecovery ()
[回復]を再生。


#### (static) playReflection ()
[魔法反射]を再生。


#### (static) playSave ()
[セーブ]を再生。


#### (static) playShop ()
[ショップ]を再生。


#### (static) playSystemSound (n)
指定番号の音声を再生。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `n` | [Number](Number.md) | 音声番号 |


#### (static) playUseItem ()
[アイテム使用]を再生。


#### (static) playUseSkill ()
[スキル使用]を再生。


#### (static) preloadImportantSounds ()
重要な音声をプリロード。



