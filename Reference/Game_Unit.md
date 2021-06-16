[クラスツリー](index.md)

# クラス: Game_Unit

戦闘時のグループを扱うクラス。

返り値が [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; のメンバー取得系のメソッドは、例えば `$gameParty.members[0]` と書きそうになるが、`$gameParty.members()[0]` のようにまず `()` でメソッドを起動し、帰ってきた配列から選択する手順を踏む。<br />
また、添字が `0` から始まることにも注意。

### new Game_Unit ()

### サブクラス

* [Game_Party](Game_Party.md)
* [Game_Troop](Game_Troop.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_inBattle` | Boolean | 戦闘中か |


### メソッド

#### agility () → {[Number](Number.md)}
ユニットの素早さを返す。


#### aliveMembers () → {[Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt;}
生存しているバトラーを配列で返す。


#### clearActions ()
アクションを取り消す。


#### clearResults ()
アクションの結果を取り消す。


#### deadMembers () → {[Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt;}
死亡しているバトラーを配列で返す。


#### inBattle () → {Boolean}
戦闘中か。


#### initialize ()
オブジェクト生成時の初期化。


#### isAllDead () → {Boolean}
全バトラーが死亡したか。


#### makeActions ()
戦闘行動を作成する。


#### members () → {[Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt;}
戦闘中のバトラー生死問わず全て配列で返す。


#### movableMembers () → {[Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt;}
動ける(死亡や麻痺などでない)バトラーを配列で返す。


#### onBattleEnd ()
戦闘終了時に呼ばれるハンドラ。


#### onBattleStart ()
戦闘開始時に呼ばれるハンドラ。


#### randomDeadTarget () → {[Game_Battler](Game_Battler.md)}
死亡したバトラーからランダムに1体を返す。


#### randomTarget () → {[Game_Battler](Game_Battler.md)}
含まれるバトラーからランダムに1体を返す。


#### select (activeMember)
指定されたバトラーを選択する。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `activeMember` | [Game_Battler](Game_Battler.md) | バトラー |


#### smoothDeadTarget (index) → {[Game_Battler](Game_Battler.md)}
指定番号のメンバーを優先して死亡しているメンバーを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | メンバー番号 |


#### smoothTarget (index) → {[Game_Battler](Game_Battler.md)}
指定番号のメンバーを優先して生きているメンバーを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | メンバー番号 |


#### substituteBattler () → {[Game_Battler](Game_Battler.md)}
身代わりのバトラーを返す。


#### tgrSum () → {[Number](Number.md)}
生きているメンバーの[狙われ率]の合計を返す。


#### tpbBaseSpeed () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘の基本速度を返す。


#### tpbReferenceTime () → {[Number](Number.md)}
**@MZ** タイムプログレス戦闘の参照速度を返す。


#### updateTpb ()
**@MZ** タイムプログレス戦闘を更新。



