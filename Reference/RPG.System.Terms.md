[クラスツリー](index.md)

# クラス: [RPG](RPG.md).[System](RPG.System.md).Terms
[用語]のJSONデータ。

関連クラス: [TextManager](TextManager.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `basic` | [Array](Array.md).&lt;[String](String.md)&gt; | [\[基本ステータス\]](#[基本ステータス]) |
| `params` | [Array](Array.md).&lt;[String](String.md)&gt; | [\[能力値\]](#[能力値]) |
| `commands` | [Array](Array.md).&lt;[String](String.md)&gt; | [\[コマンド\]](#[コマンド]) |
| `messages` | Object.&lt;[String](String.md)&gt; | [\[メッセージ\]](#[メッセージ])|

#### [基本ステータス]

| 番号 | 用語 |
| --- | --- | --- |
| 0 | レベル |
| 1 | レベル(略) |
| 2 | HP |
| 3 | HP (略) |
| 4 | MP |
| 5 | MP (略) |
| 6 | TP |
| 7 | TP (略) |
| 8 | 経験値 |
| 9 | 経験値 (略) |

#### [能力値]

| 番号 | 用語 |
| --- | --- | --- |
| 0 | 最大HP |
| 1 | 最大MP |
| 2 | 攻撃力 |
| 3 | 防御力 |
| 4 | 魔法力 |
| 5 | 魔法防御 |
| 6 | 敏捷性 |
| 7 | 運 |
| 8 | 命中率 |
| 9 | 回避率 |  |


#### [コマンド] 

| 番号 | 用語 |
| --- | --- | --- |
| 0 | 戦う |
| 1 | 逃げる |
| 2 | 攻撃 |
| 3 | 防御 |
| 4 | アイテム |
| 5 | スキル |
| 6 | 装備 |
| 7 | ステータス |
| 8 | 並び替え |
| 9 | セーブ |
| 10 | ゲーム終了 |
| 11 | オプション |
| 12 | 武器 |
| 13 | 防具 |
| 14 | 大事なもの |
| 15 | 装備 |
| 16 | 最強装備 |
| 17 | 全て外す |
| 18 | ニューゲーム |
| 19 | コンティニュー |
| 20 | (不使用) |
| 21 | タイトルへ |
| 22 | やめる |
| 23 | (不使用) |
| 24 | 購入する |
| 25 | 売却する |


#### [メッセージ]

| 識別子 | 用語 |
| --- | --- |
| `alwaysDash` | 常時ダッシュ |
| `commandRemember` | コマンド記憶 |
| `touchUI` | タッチUI |
| `bgmVolume` | BGM 音量 |
| `bgsVolume` | BGS 音量 |
| `meVolume` | ME 音量 |
| `seVolume` | SE 音量 |
| `possession` | 持っている数 |
| `expTotal` | 現在の%1 |
| `expNext` | 次の%1まで |
| `saveMessage` | どのファイルにセーブしますか？ |
| `loadMessage` | どのファイルをロードしますか？ |
| `file` | ファイル |
| `autosave` | オートセーブ |
| `partyName` | %1たち |
| `emerge` | %1が出現！ |
| `preemptive` | %1は先手を取った！ |
| `surprise` | %1は不意をつかれた！ |
| `escapeStart` | %1は逃げ出した！ |
| `escapeFailure` | しかし逃げることはできなかった！ |
| `victory` | %1の勝利！ |
| `defeat` | %1は戦いに敗れた。 |
| `obtainExp` | %1 の%2を獲得！ |
| `obtainGold` | お金を %1\\G 手に入れた！ |
| `obtainItem` | %1を手に入れた！ |
| `levelUp` | %1は%2 %3 に上がった！ |
| `obtainSkill` | %1を覚えた！ |
| `useItem` | %1は%2を使った！ |
| `criticalToEnemy` | 会心の一撃！！ |
| `criticalToActor` | 痛恨の一撃！！ |
| `actorDamage` | %1は %2 のダメージを受けた！ |
| `actorRecovery` | %1の%2が %3 回復した！ |
| `actorGain` | %1の%2が %3 増えた！ |
| `actorLoss` | %1の%2が %3 減った！ |
| `actorDrain` | %1は%2を %3 奪われた！ |
| `actorNoDamage` | %1はダメージを受けていない！ |
| `actorNoHit` | ミス！　%1はダメージを受けていない！ |
| `enemyDamage` | %1に %2 のダメージを与えた！ |
| `enemyRecovery` | %1の%2が %3 回復した！ |
| `enemyGain` | %1の%2が %3 増えた！ |
| `enemyLoss` | %1の%2が %3 減った！ |
| `enemyDrain` | %1の%2を %3 奪った！ |
| `enemyNoDamage` | %1にダメージを与えられない！ |
| `enemyNoHit` | ミス！　%1にダメージを与えられない！ |
| `evasion` | %1は攻撃をかわした！ |
| `magicEvasion` | %1は魔法を打ち消した！ |
| `magicReflection` | %1は魔法を跳ね返した！ |
| `counterAttack` | %1の反撃！ |
| `substitute` | %1が%2をかばった！ |
| `buffAdd` | %1の%2が上がった！ |
| `debuffAdd` | %1の%2が下がった！ |
| `buffRemove` | %1の%2が元に戻った！ |
| `actionFailure` | %1には効かなかった！ |