# クラス: WebAudio

### new WebAudio (url)
Web Audio API を使った音声データ。

静的メソッドも多く、ユーティリティとしての利用も多い。

v1.0.2 で変更あり。

関連クラス: [CacheEntry](CacheEntry.md), [SoundManager](SoundManager.md), [Html5Audio](Html5Audio.md), [RPG.AudioFile](RPG.AudioFile.md)

#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `url` | [String](String.md) | The url of the audio file |


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `url` | [String](String.md) | [read-only] 音声ファイルのURL |
| `volume` | [Number](Number.md) | The volume of the audio. |
| `pitch` | [Number](Number.md) | The pitch of the audio. |
| `pan` | [Number](Number.md) | The pan of the audio. |
| `_context` | AudioContext |  |
| `_masterGainNode` | GainNode |  |
| `_initialized` | Boolean |  |
| `_unlocked` | Boolean |  |


### Members

#### (static) _standAlone


### メソッド

#### (static) _connectNodes ()


#### (static) _createContext ()


#### (static) _createEndTimer ()


#### (static) _createMasterGainNode ()


#### (static) _createNodes ()


#### (static) _detectCodecs ()


#### (static) _fadeIn (duration)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |


#### (static) _fadeOut (duration)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) |  |


#### (static) _load (url)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `url` | [String](String.md) |  |


#### (static) _onHide ()


#### (static) _onLoad ()


#### (static) _onShow ()


#### (static) _onTouchStart ()


#### (static) _onVisibilityChange ()


#### (static) _onXhrLoad (xhr)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `xhr` | XMLHttpRequest |  |


#### (static) _readBigEndian (array, index)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `array` | Uint8Array |  |
| `index` | [Number](Number.md) |  |


#### (static) _readFourCharacters (array, index)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `array` | Uint8Array |  |
| `index` | [Number](Number.md) |  |


#### (static) _readLittleEndian (array, index)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `array` | Uint8Array |  |
| `index` | [Number](Number.md) |  |


#### (static) _readLoopComments (array)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `array` | Uint8Array |  |


#### (static) _readMetaData (array, index, size)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `array` | Uint8Array |  |
| `index` | [Number](Number.md) |  |
| `size` | [Number](Number.md) |  |


#### (static) _readMp4 (array)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `array` | Uint8Array |  |


#### (static) _readOgg (array)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `array` | Uint8Array |  |


#### (static) _removeEndTimer ()


#### (static) _removeNodes ()


#### (static) _setupEventHandlers ()


#### (static) _shouldMuteOnHide ()


#### (static) _startPlaying (loop, offset)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `loop` | Boolean |  |
| `offset` | [Number](Number.md) |  |


#### (static) _updatePanner ()


#### (static) canPlayM4a () → {Boolean}
Checks whether the browser can play m4a files.


#### (static) canPlayOgg () → {Boolean}
Checks whether the browser can play ogg files.


#### (static) initialize (noAudio) → {Boolean}
Initializes the audio system.

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `noAudio` | Boolean | Flag for the no-audio mode |


#### (static) setMasterVolume (value)
Sets the master volume of the all audio.

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | Master volume (min: 0, max: 1) |


#### addLoadListener (listner)
Add a callback function that will be called when the audio data is loaded.

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `listner` | function | The callback function |


#### addStopListener (listner)
Add a callback function that will be called when the playback is stopped.

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `listner` | function | The callback function |


#### clear ()
Clears the audio data.


#### fadeIn (duration)
Performs the audio fade-in.

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | Fade-in time in seconds |


#### fadeOut (duration)
Performs the audio fade-out.

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | Fade-out time in seconds |


#### initialize ()
オブジェクト生成時の初期化。


#### isError () → {Boolean}
Checks whether a loading error has occurred.


#### isPlaying () → {Boolean}
Checks whether the audio is playing.


#### isReady () → {Boolean}
Checks whether the audio data is ready to play.



#### play (loop, offset)
Plays the audio.

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `loop` | Boolean | Whether the audio data play in a loop |
| `offset` | [Number](Number.md) | The start position to play in seconds |


#### seek ()
Gets the seek position of the audio.


#### stop ()
Stops the audio.


