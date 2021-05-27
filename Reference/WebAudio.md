[クラスツリー](index.md)

# クラス: WebAudio

Web Audio API を使った音声データ。

静的メソッドも多く、ユーティリティとしての利用も多い。

v1.0.2 で変更あり。

関連クラス: [CacheEntry](CacheEntry.md), [SoundManager](SoundManager.md), [Html5Audio](Html5Audio.md), [RPG.AudioFile](RPG.AudioFile.md)

### new WebAudio (url)
#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `url` | [String](String.md) | The url of the audio file |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_context` | AudioContext | [static] |
| `_masterGainNode` | GainNode |  [static]  |
| `url` | [String](String.md) | [read-only] 音声ファイルのURL |
| `volume` | [Number](Number.md) | [音量] |
| `pitch` | [Number](Number.md) | [ピッチ] |
| `pan` | [Number](Number.md) | [位相] |
| `_buffers` | [Array](Array.md)  |  |
| `_data` |  |  |
| `_decoder` |  |  |
| `_endTimer` |  |  |
| `_fetchedData` | [Array](Array.md)  |  |
| `_fetchedSize` | [Number](Number.md)  |  |
| `_gainNode` |  |  |
| `_isError` | Boolean |  |
| `_isLoaded` | Boolean |  |
| `_isPlaying` | Boolean |  |
| `_lastUpdateTime` | [Number](Number.md)  |  |
| `_loadListeners` | [Array](Array.md) |  |
| `_loop` | [Number](Number.md)  |  |
| `_loopLength` | [Number](Number.md)  |  |
| `_loopLengthTime` | [Number](Number.md)  |  |
| `_loopStart` | [Number](Number.md)  |  |
| `_loopStartTime` | [Number](Number.md)  |  |
| `_pan` | [Number](Number.md)  |  |
| `_pannerNode` |  |  |
| `_pitch` | [Number](Number.md) |  |
| `_sampleRate` | [Number](Number.md)  |  |
| `_sourceNodes` | [Array](Array.md)  |  |
| `_startTime` | [Number](Number.md)  |  |
| `_stopListeners` | [Array](Array.md) |  |
| `_totalTime` | [Number](Number.md)  |  |
| `_url` |  [String](String.md) |  |
| `_volume` | [Number](Number.md)  |  |

### 廃止MVプロパティ
`_initialized`, `_unlocked`


### メソッド

#### (static) _createContext ()
コンテキストを生成。


#### (static) _createMasterGainNode ()
マスターゲインノード生成。


#### (static) _currentTime () → {Number}
**@MZ** 現在の時間を返す。


#### (static) _fadeIn (duration)
フェードイン。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェード時間(秒) |


#### (static) _fadeOut (duration)
フェードアウト。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェード時間(秒) |


#### (static) _onHide ()
ゲームが非表示になった時のハンドラ。

#### (static) _onShow ()
ゲームが表示された時のハンドラ。


#### (static) _onUserGesture ()
**@MZ** ユーザの入力があった時のハンドラ。


#### (static) _onVisibilityChange ()
表示状態に変更があった時のハンドラ。


#### (static) _resetVolume ()
**@MZ** 音量を初期化。


#### (static) _setupEventHandlers ()
イベントハンドラを準備。


#### (static) _shouldMuteOnHide () → {Boolean}
非表示の時に音をミュートするか。


#### (static) initialize ()→ {Boolean}
音声機能全体の初期化し、準備が完了しているか返す。


#### (static) setMasterVolume (value)
主音量を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | 音量 (0 〜 1) |


#### _createEndTimer ()
終了タイマーを生成。


####  _onLoad ()
音声ファイル読み込み完了時のハンドラ。


####  _onXhrLoad (xhr)
XMLHttpRequestのハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `xhr` | XMLHttpRequest |  |


#### _readFourCharacters (view, index) → {String}
viewの指定位置から4文字を取り出す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `view` | Uint8Array |  |
| `index` | [Number](Number.md) | 取り出し位置 |


#### _readLoopComments (arrayBuffer)
ループコメントを読む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `arrayBuffer` | Uint8Array |  |


#### _readMetaData (view, index, size)
メタデータを読む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `view` | Uint8Array |  |
| `index` | [Number](Number.md) |  |
| `size` | [Number](Number.md) |  |


#### _removeEndTimer ()
終了タイマーを削除。


#### _removeNodes ()
ノードを削除。


#### _startPlaying (offset)
再生の開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `offset` | [Number](Number.md) | 開始(秒) |


#### _updatePanner ()
位相をアップデート。


#### destroy ()
**@MZ** 音声を破棄。


#### fadeIn (duration)
フェードイン。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェード時間(秒) |


#### fadeOut (duration)
フェードアウト。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェード時間(秒) |


#### addLoadListener (listner)
音声ファイルの読み込みが終わった時のハンドラを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `listner` | Function | コールバック関数 |


#### addStopListener (listner)
音声ファイルの停止時のハンドラを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `listner` | function | コールバック関数 |


#### clear ()
音声データを消去(初期化)。


####  initialize (url)
オブジェクト生成時の初期化。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `url` | [String](String.md) | 音声ファイルパス |


#### isError () → {Boolean}
読み込みエラーが発生したか。


#### isPlaying () → {Boolean}
音声が再生されているか。


#### isReady () → {Boolean}
再生の準備ができているか。


#### play (loop, offset)
音声を再生。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `loop` | Boolean | ループするか |
| `offset` | [Number](Number.md) | 再生開始箇所(秒) |


#### seek () → {Number}
生成箇所(秒)を返す。


#### stop ()
音声を停止。


### MV廃止メソッド
_connectNodes (), _createNodes (), _detectCodecs (), _load (url)
, _onTouchStart (), _readBigEndian (array, index), _readLittleEndian (array, index), _readMp4 (array), _readOgg (array), canPlayM4a (), canPlayOgg ()