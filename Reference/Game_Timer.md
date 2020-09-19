# Class: Game_Timer

### new Game_Timer ()

| イベントコマンド | 大域変数 | セーブデータ | スプライト |
| --- | --- | --- | --- |
| [タイマーの操作] | [$gameTimer](global.md#gametimer-game_timer) | 保存される | [Sprite_Timer](Sprite_Timer.md) |

関連クラス: [Scene_Map](Scene_Map.md), [Scene_Battle](Scene_Battle.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_frames` | [Number](Number.md) | 残り時間(フレーム数) |
| `_working` | Boolean | 動作しているか |


### Methods

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

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `count` | [Number](Number.md) | カウント時間(フレーム数) |


#### stop ()
タイマーを停止。

#### update (sceneActive)
シーンがアクティブな場合、タイマーをアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sceneActive` | Boolean | シーンがアクティブか |
