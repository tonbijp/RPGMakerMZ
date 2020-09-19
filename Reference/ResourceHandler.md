# Class: ResourceHandler
データの読み込みの制御に使われる静的クラス。

関連クラス: [Bitmap](Bitmap.md), [Graphics](Graphics.md), [WebAudio](WebAudio.md), [DataManager](DataManager.md), [Input](Input.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_reloaders` | [Array](Array.md).&lt;Object&gt; | [static] リトライ関数情報の配列 |
| `_defaultRetryInterval` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [static] リトライ間隔の配列 |


### Methods

#### (static) createLoader (url, retryMethod, resignMethod opt, retryInterval opt) → {Function}
指定した値で、ローダーを作って返す。

##### Parameters:
		
| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `url` | [String](String.md) |  |  | プロジェクト以下のファイルパス |
| `retryMethod` | Function |  |  | リトライに使われる関数 |
| `resignMethod` | Function | &lt;optional&gt;  |  | エラー時に呼ばれる関数 |
| `retryInterval` | [Array](Array.md).&lt;[Number](Number.md)&gt; | &lt;optional&gt; | [500, 1000, 3000] | リトライ間隔の配列  |


#### (static) exists () → {Boolean}
未実行のリトライ関数が存在するか。


#### (static) retry ()
リトライ関数の実行。


