# Class: RequestQueue

### new RequestQueue ()
画像の読み込み順番待ち行列(キュー)。Ver.1.5.0 で追加されたクラス。

保持している画像( [Bitmap](Bitmap.md) )の isRequestReady() が成立したらキューから外し、次の優先度の画像に startRequest() を送る、という処理を update() で行なっている。<br />
[読み込みの状態](Bitmap.md#読み込みの状態) でいうと、'purged' から 'requestCompleted' までの順番待ち行列。

関連クラス: [ImageManager](ImageManager.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_queue` | [Array](Array.md).&lt;Object&gt; | [static] {key: [String](String.md), value: [Bitmap](Bitmap.md)}の配列 |


### Methods

#### clear ()
予約を消去し0に。


#### enqueue (key, value)
指定画像をキューに追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [String](String.md) | キー文字列 |
| `value` | [Bitmap](Bitmap.md) | 画像 |


#### initialize ()
オブジェクト生成時の初期化。


#### raisePriority (key)
指定キーの優先度をあげる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `key` | [String](String.md) | キー文字列 |


#### update ()
フレーム毎のアップデート。