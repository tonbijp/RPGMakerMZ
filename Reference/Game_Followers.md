[クラスツリー](index.md)

# クラス: Game_Followers

### new Game_Followers ()
[Game_Follower](Game_Follower.md) をまとめた[隊列メンバー]の並びなどを管理するクラス。

 [$gamePlayer.followers()](Game_Player.md#followers---game_followers) メソッドで得られる。


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_visible` | Boolean | [パーティの隊列歩行]か |
| `_gathering` | Boolean | 集合しているか |
| `_data` | [Array](Array.md).&lt;[Game_Follower](Game_Follower.md)&gt; | [隊列メンバー]の配列 |


### メソッド

#### areGathered () → {Boolean}
[隊列メンバー]が集合しているか。


#### areGathering () → {Boolean}
[隊列メンバー]の集合中か。


#### areMoving () → {Boolean}
[隊列メンバー]が移動中か。


#### data () → {[Array](Array.md).&lt;[Game_Follower](Game_Follower.md)&gt;}
**@MZ** [隊列メンバー]の配列を返す。


#### follower (index) → {[Game_Follower](Game_Follower.md)}
指定した番号の[隊列メンバー]を返す。<br />
プレイヤー(先頭のキャラ)は隊列メンバーに含まれず、 0:2番目, 1:3番目, 2:4番目とindex は0から始まり2番目のキャラから指定される。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | [隊列メンバー]番号 |


#### gather ()
[隊列メンバーの集合]。


#### hide ()
[隊列メンバー]を表示しない。


#### initialize ()
 オブジェクト生成時の初期化。


#### isSomeoneCollided (x, y) → {Boolean}
 指定位置に[隊列メンバー]の誰かがいるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  x座標(タイル数) |
| `y` | [Number](Number.md) |  y座標(タイル数) |


#### isVisible () → {Boolean}
[隊列メンバー]が表示されているか。


#### jumpAll ()
[隊列メンバー]全員を、プレイヤーキャラクタの[ジャンプ]高さに揃える。


#### refresh ()
[隊列メンバー]を更新。


#### reverseData () → {[Array](Array.md).&lt;[Game_Follower](Game_Follower.md)&gt;}
**@MZ** [隊列メンバー]の配列を逆順で返す。


#### setup ()
**@MZ** 隊列メンバーオブジェクトを準備。


#### show ()
[隊列メンバー]を表示。


#### synchronize (x, y, d)
 指定の位置と向きに[隊列メンバー]を揃える。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### update ()
[隊列メンバー]をアップデート。


#### updateMove ()
[隊列メンバー]の移動をアップデート。


#### visibleFollowers () → {[Array](Array.md).<[Game_Follower](Game_Follower.md)>}
 表示中の[隊列メンバー]の配列を返す。


### 廃止MVメソッド
forEach (callback, thisObject), reverseEach (callback, thisObject)