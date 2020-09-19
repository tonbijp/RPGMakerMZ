# Class: ImageCache

### new ImageCache ()
画像を保持(キャッシュ)するクラス。Ver.1.5.0 で追加されたクラス。

関連クラス: [ImageManager](ImageManager.md), [CacheEntry](CacheEntry.md), [CacheMap](CacheMap.md), [Bitmap](Bitmap.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `limit` | [Number](Number.md) | [static] 上限(規定値: 10,000,000) |


### Methods

#### add (key, value)
指定画像をキャッシュに追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [String](String.md) | キー文字列(URL) |
| `value` | [Bitmap](Bitmap.md) | 画像 |


#### get (key) → {null | [Bitmap](Bitmap.md)}
指定キーに対応した画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [String](String.md) | キー文字列(URL) |


#### getErrorBitmap () → {null | [Bitmap](Bitmap.md)}
エラー画像を得る。


#### initialize ()
オブジェクト生成時の初期化。

#### isReady () → {Boolean}
キャッシュされたか。


#### releaseReservation (reservationId)
指定IDのキャッシュを解放。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### reserve (key, value, reservationId)
指定画像をキャッシュへ保存。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [String](String.md) | キー文字列(URL) |
| `value` | [Bitmap](Bitmap.md) | 画像 |
| `reservationId` | [Number](Number.md) | キャッシュID |
