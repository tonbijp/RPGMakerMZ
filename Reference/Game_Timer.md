[クラスツリー](index.md)

# クラス: Game_Timer

| イベントコマンド | 大域変数 | セーブデータ | スプライト |
| --- | --- | --- | --- |
| [タイマーの操作] | [$gameTimer](global.md#gametimer-game_timer) | 保存される | [Sprite_Timer](Sprite_Timer.md) |

v1.4.0 で変更あり。

関連クラス: [Scene_Map](Scene_Map.md), [Scene_Battle](Scene_Battle.md)

### new Game_Timer ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_frames` | [Number](Number.md) | 残り時間(フレーム数) |
| `_working` | Boolean | 動作しているか |


### メソッド

#### frames () → {[Number](Number.md)}
**@MZ 1.4.0** 残り時間(フレーム数)を返す。

#### initialize ()
 オブジェクト生成時の初期化。


#### isWorking () → {Boolean}
タイマーが動作しているか。


#### onExpire ()
タイマーが完了した時に呼ばれるハンドラ。


#### seconds () → {[Number](Number.md)}
残り秒数を返す。


#### start (count)
指定されたカウントでタイマーを開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `count` | [Number](Number.md) | カウント時間(フレーム数) |


#### stop ()
タイマーを停止。


#### update (sceneActive)
フレーム毎の更新。<br />
ただしシーンがアクティブな場合は更新しない。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sceneActive` | Boolean | シーンがアクティブか |

