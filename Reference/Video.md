[クラスツリー](index.md)

# クラス: Video
**@MZ** 動画の処理を行うための静的クラス。

MVでは [Graphics](Graphics.md) に含まれていた動画機能が独立したもの。

関連クラス: [Bitmap](Bitmap.md), [ImageManager](ImageManager.md), [SceneManager](SceneManager.md), [Game_Screen](Game_Screen.md), [Window](Window.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_element` | HTMLElament | [static] HTMLVideoElement |
| `_loading` | Boolean | [static] ロード中か |
| `_volume` | [Number](Number.md) | [static] 音量 (規定値: 1) |


### メソッド

#### (static) _createElement ()
HTMLVideoElement を生成。


#### (static) _isVisible () → {Boolean}
動画が表示されているか。


#### (static) _onError ()
再生が終了した時のハンドラ。


#### (static) _onError ()
エラーが発生した時のハンドラ。


#### (static) _onLoad ()
読み込みが完了した時のハンドラ。


#### (static) _onUserGesture ()
ユーザの入力(keydown, mousedown, touchend)が発生した時のハンドラ。


#### (static) _setupEventHandlers ()
イベントハンドラの準備。


#### (static) _updateVisibility (videoVisible)
指定した表示状態に変更。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `videoVisible` | Boolean | 表示するか |


#### (static) initialize (width, height) → {Boolean}
動画の初期化。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | 動画の幅(ピクセル) |
| `height` | [Number](Number.md) | 動画の高さ(ピクセル) |


#### (static) isPlaying () → {Boolean}
動画が再生されているか。


#### (static) play ()
動画の再生。


#### (static) resize (width, height) 
動画の大きさを再設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | 動画の幅(ピクセル) |
| `height` | [Number](Number.md) | 動画の高さ(ピクセル) |


#### (static) setVolume (volume)
指定音量に設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `volume` | [Number](Number.md) | 音量(0〜1) |