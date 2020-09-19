# Class: Html5Audio

HTML5 Audio を扱う静的クラス。

関連クラス: [CacheEntry](CacheEntry.md), [SoundManager](SoundManager.md), [WebAudio](WebAudio.md), [RPG.AudioFile](RPG.AudioFile.md)

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) | [read-only] The url of the audio file. |
| `volume` | [Number](Number.md) | The volume of the audio. |
| `_initialized` | Boolean |  |
| `_unlocked` | Boolean |  |
| `_audioElement` | HTMLAudioElement |  |
| `_gainTweenInterval` | [Number](Number.md) |  |
| `_tweenGain` | [Number](Number.md) |  |
| `_tweenTargetGain` | [Number](Number.md) |  |
| `_tweenGainStep` | [Number](Number.md) |  |
| `_staticSePath` | Boolean |  |
| `_volume` | [Number](Number.md) |  |
| `_loadListeners` | [Array](Array.md).<function()> |  |
| `_hasError` | Boolean |  |
| `_autoPlay` | Boolean |  |
| `_isLoading` | Boolean |  |
| `_buffered` | Boolean |  |


### Methods

#### (static) _applyTweenValue (volume)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `volume` | [Number](Number.md) |  |


#### (static) _load (url)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) |  |


#### (static) _onEnded ()


#### (static) _onError ()


#### (static) _onHide ()


#### (static) _onLoad ()


#### (static) _onLoadedData ()


#### (static) _onShow ()


#### (static) _onTouchStart ()


#### (static) _onVisibilityChange ()


#### (static) _setupEventHandlers ()


#### (static) _startGainTween ()


#### (static) _startPlaying (loop, offset)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `loop` | Boolean |  |
| `offset` | [Number](Number.md) |  |


#### (static) addLoadListener (listner)
Add a callback function that will be called when the audio data is loaded.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | function | The callback function |


#### (static) clear ()
Clears the audio data.

#### (static) fadeIn (duration)
Performs the audio fade-in.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | Fade-in time in seconds |


#### (static) fadeOut (duration)
Performs the audio fade-out.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | Fade-out time in seconds |


#### (static) initialize () → {Boolean}
Initializes the audio system.

#### (static) isError () → {Boolean}
Checks whether a loading error has occurred.

#### (static) isPlaying () → {Boolean}
Checks whether the audio is playing.

#### (static) isReady () → {Boolean}
Checks whether the audio data is ready to play.

#### (static) play (loop, offset)
Plays the audio.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `loop` | Boolean | Whether the audio data play in a loop |
| `offset` | [Number](Number.md) | The start position to play in seconds |


#### (static) seek ()
Gets the seek position of the audio.

#### (static) setStaticSe (url)
Set the URL of static se.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) |  |


#### (static) setup (url)
Sets up the Html5 Audio.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) | The url of the audio file |


#### (static) stop ()
Stops the audio.



