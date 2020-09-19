# Class: CacheEntry

### new CacheEntry (cache, key, item)
画像・音声のデータを確保しておくクラス。バージョン 1.3.4 で追加された。

TTL とは time to live の略で、ガベッジコレクション(データの破棄)されるまでの生存時間のこと。

関連クラス: [Bitmap](Bitmap.md), [HTML5Audio](HTML5Audio.md), [WebAudio](WebAudio.md)

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cache` | [CacheMap](CacheMap.md) | キャッシュマップ |
| `key` | [String](String.md) | データ指定するキー(ファイルのURL) |
| `item` | [String](String.md) | 保持しているデータの種類('Bitmap', 'HTML5Audio', 'WebAudio') |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cache` | [CacheMap](CacheMap.md) | キャッシュマップ |
| `cached` | Boolean |キャッシュされているか |
| `freedByTTL` | Boolean | TTLで解放するか |
| `key` | [String](String.md) | データ指定するキー(ファイルのURL) |
| `item` | [String](String.md) | 保持しているデータの種類 ('Bitmap', 'HTML5Audio', 'WebAudio') |
| `touchSeconds` | [Number](Number.md) | touch 時間 |
| `touchTicks` | [Number](Number.md) | touch 時間 |
| `ttlSeconds` | [Number](Number.md) | TTL (0: 設定なし) |
| `ttlTicks` | [Number](Number.md) | TTL (0: 設定なし) |


### Methods

#### allocate () → {[CacheEntry](CacheEntry.md)}
リソースを割り当てて、自身を返す。

#### free (byTTL opt)
割り当てたリソースを解放。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `byTTL` | Boolean | &lt;optional&gt; | TTLか |


#### isStillAlive () → {Boolean}
生存しているか。


#### setTimeToLive (ticks opt, seconds opt) → {[CacheEntry](CacheEntry.md)}
TTLを設定し、自身を返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `ticks` | [Number](Number.md) | &lt;optional&gt; | TTL 0: 即時 |
| `seconds` | [Number](Number.md) | &lt;optional&gt; | TTL 0: 即時 |


#### touch ()
解放されていたらキャッシュマップに再追加するなど、キャッシュの延命。