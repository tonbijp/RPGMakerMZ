[クラスツリー](index.md)

# クラス: AudioManager
BGM, BGS, ME, SE を扱う静的クラス。


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `bgmVolume` | [Number](Number.md) | [static] BGM音量 |
| `bgsVolume` | [Number](Number.md) | [static] BGS音量 |
| `meVolume` | [Number](Number.md) | [static] ME音量 |
| `seVolume` | [Number](Number.md) | [static] SE音量 |
| `_bgmVolume` | [Number](Number.md) | [static] BGM音量 |
| `_bgsVolume` | [Number](Number.md) | [static] BGS音量 |
| `_meVolume` | [Number](Number.md) | [static] ME音量 |
| `_seVolume` | [Number](Number.md) | [static] SE音量 |
| `_currentBgm` | [MV.AudioParameters](MV.AudioParameters.md) | [static] 現在のBGM |
| `_currentBgs` | [MV.AudioParameters](MV.AudioParameters.md) | [static] 現在のBGS |
| `_bgmBuffer` | Html5AudioStatic \| [WebAudio](WebAudio.md) | [static] BGMバッファ |
| `_bgsBuffer` | Html5AudioStatic \| [WebAudio](WebAudio.md) | [static] BGSバッファ |
| `_meBuffer` | Html5AudioStatic \| [WebAudio](WebAudio.md) | [static] MEバッファ |
| `_seBuffers` | [Array](Array.md).&lt;Html5AudioStatic \| [WebAudio](WebAudio.md)&gt; | [static] SEバッファ |
| `_staticBuffers ` | [Array](Array.md).&lt;Html5AudioStatic \| [WebAudio](WebAudio.md)&gt; | [static] 静的バッファ |
| `_replayFadeTime` | [Number](Number.md) | [static] リプレイフェード時間 |
| `_path` | [String](String.md) | [static] 音声フォルダのパス(規定値: 'audio/') |
| | [String](String.md) | [static] URL |

### 廃止MVプロパティ
`masterVolume`, `_blobUrl`


### メソッド

#### (static) audioFileExt () → {[String](String.md)}
音声ファイルの拡張子( '.ogg', '.m4a' )


#### (static) checkErrors ()
エラーチェック。


#### (static) checkWebAudioError (webAudio)
指定Webオーディオのエラーチェック。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `webAudio` | [WebAudio](WebAudio.md) | Webオーディオ |


#### (static) cleanupSe () 
**@MZ** SEの整理。


#### (static) createBuffer () → {Html5AudioStatic|[WebAudio](WebAudio.md)}
バッファの生成。


#### (static) fadeInBgm (duration)
BGMのフェードイン。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェードの継続時間 |


#### (static) fadeInBgs (duration)
BGSのフェードイン。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェードの継続時間 |


#### (static) fadeOutBgm (duration)
BGMのフェードアウト。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェードの継続時間 |


#### (static) fadeOutBgs (duration)
BGSのフェードアウト。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェードの継続時間 |


#### (static) fadeOutMe (duration)
MEのフェードアウト。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | フェードの継続時間 |


#### (static) isCurrentBgm (bgm) → {Boolean}
指定BGMが現在のBGMか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) isCurrentBgs (bgs) → {Boolean}
指定BGSが現在のBGSか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) isStaticSe (se) → {Boolean}

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) loadStaticSe (se)
SEを読み込む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) makeEmptyAudioObject () → {[MV.AudioParameters](MV.AudioParameters.md)}
空の音声オブジェクトを生成して返す。


#### (static) playBgm (bgm, pos opt)
BGMを再生。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  | 音声オブジェクト |
| `pos` | [Number](Number.md) | &lt;optional&gt; | 再生位置 |


#### (static) playBgs (bgs, pos opt)
BGSを再生。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) |  | 音声オブジェクト |
| `pos` | [Number](Number.md) | &lt;optional&gt; | 再生位置 |


#### (static) playMe (me)
MEを再生。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `me` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) playSe (se)
SEを再生。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) playStaticSe (se)
静的なSEを再生。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) replayBgm (bgm)
BGMをリプレイ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) replayBgs (bgs)
BGSをリプレイ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) saveBgm () → {[MV.AudioParameters](MV.AudioParameters.md)}
BGMの状態を保存。


#### (static) saveBgs () → {[MV.AudioParameters](MV.AudioParameters.md)}
BGSの状態を保存。


#### (static) shouldUseHtml5Audio () → {Boolean}
Html5Audioを使用する必要があるか。


#### (static) stopAll ()
全停止。


#### (static) stopBgm ()
BGMを停止。


#### (static) stopBgs ()
BGSを停止。


#### (static) stopMe ()
MEを停止。


#### (static) stopSe ()
SEを停止。


#### (static) updateBgmParameters (bgm)
BGMのパラメータをアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) updateBgsParameters (bgs)
BGSのパラメータをアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) updateBufferParameters (buffer, configVolume, audio)
バッファのパラメータをアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |
| `configVolume` | [Number](Number.md) |  |
| `audio` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) updateCurrentBgm (bgm, pos)
現在のBGMをアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |
| `pos` | [Number](Number.md) | 再生位置 |


#### (static) updateCurrentBgs (bgs, pos)
現在のBGSをアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bgs` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |
| `pos` | [Number](Number.md) | 再生位置 |


#### (static) updateMeParameters (me)
MEのパラメータをアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `me` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |


#### (static) updateSeParameters (buffer, se)
SEのパラメータをアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `buffer` | [MV.AudioParameters](MV.AudioParameters.md) | 音声オブジェクト |
| `se` | [MV.AudioParameters](MV.AudioParameters.md) |  |


### 廃止MVメソッド
[static] createDecryptBuffer (url, bgm, pos opt), playEncryptedBgm (bgm, pos opt)