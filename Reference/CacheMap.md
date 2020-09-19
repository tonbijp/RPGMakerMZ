# Class: CacheMap

### new CacheMap (manager)
画像や音声のキャッシュをまとめて扱うクラス。バージョン 1.3.4 で追加された。

関連クラス: [CacheEntry](CacheEntry.md), [Bitmap](Bitmap.md), [HTML5Audio](HTML5Audio.md), [WebAudio](WebAudio.md)

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `manager` | [ImageManager](ImageManager.md) | 所属するマネージャ |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `manager` | [ImageManager](ImageManager.md) | 所属するマネージャ |
| `updateSeconds` | [Number](Number.md) | アップデート時間 |
| `updateTicks` | [Number](Number.md) | アップデート時間 |
| `lastCheckTTL` | [Number](Number.md) | 次の TTL |
| `delayCheckTTL` | [Number](Number.md) | 遅延 TTL |
| `_inner` | [Array](Array.md)&lt;[CacheEntry](CacheEntry.md)&gt; | CacheEntry の配列 |
| `_lastRemovedEntries` | [Array](Array.md)&lt;[CacheEntry](CacheEntry.md)&gt; | 次に破棄する CacheEntry の配列 |


### Methods

#### clear ()
キャッシュのクリア。

#### checkTTL ()
TTL をチェックして、時間が過ぎている CacheEntry を解放。

#### getItem (key) → {[String](String.md) | null}
指定キーのデータの種類を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [String](String.md) | データ指定するキー(ファイルのURL) |


#### setItem (key, item) → {[CacheEntry](CacheEntry.md)}
指定キーにデータの種類を設定した、CacheEntry を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [String](String.md) | データ指定するキー(ファイルのURL) |
| `item` | [String](String.md) | 保持しているデータの種類('Bitmap', 'HTML5Audio', 'WebAudio') |


#### update (ticks, delta)
アップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `ticks` | [Number](Number.md) | 開始時刻 |
| `delta` | [Number](Number.md) | 間隔 |
