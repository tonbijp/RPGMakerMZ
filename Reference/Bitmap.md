# Class: Bitmap

### new Bitmap (width, height)

画像を表す基本オブジェクト。概ね [HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement)のラッパーオブジェクト。

関連クラス: [Graphics](Graphics.md), [ImageManager](ImageManager.md), [Game_Screen](Game_Screen.md), [Sprite](Sprite.md), [Game_Picture](Game_Picture.md), [RequestQueue](RequestQueue.md)

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.md) | 画像の幅(ピクセル) |
| `height` | [Number](Number.md) | 画像の高さ(ピクセル) |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cacheEntry` | [CacheEntry](CacheEntry.md) | キャッシュエントリ |
| `fontFace` | [String](String.md) | フォント名 |
| `fontSize` | [Number](Number.md) | フォントサイズ(ピクセル) |
| `fontItalic` | Boolean | イタリックか |
| `textColor` | [MV.CssColor](MV.CssColor.md) | 文字色 |
| `outlineColor` | [MV.CssColor](MV.CssColor.md) | アウトラインの色 |
| `outlineWidth` | [Number](Number.md) | アウトラインの文字幅 |
| `url` | [String](String.md) | [read-only] 画像ファイルのURL |
| `baseTexture` | [PIXI.BaseTexture](http://pixijs.download/dev/docs/PIXI.BaseTexture.html) | [read-only] 基礎テクスチャ |
| `canvas` | [HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement) | [read-only] 画像を描画するcanvas |
| `context` | [CanvasRenderingContext2D](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D) | [read-only] 2Dレンダリングコンテクスト |
| `width` | [Number](Number.md) | [read-only] 画像の幅(ピクセル) |
| `height` | [Number](Number.md) | [read-only] 画像の高さ(ピクセル) |
| `rect` | [Rectangle](Rectangle.md) | [read-only] 画像の矩形範囲 |
| `smooth` | Boolean | スムーススケーリングを適用するか |
| `paintOpacity` | [Number](Number.md) | 不透明度(0 〜 255) |
| `_loadingState` | [String](String.md) | [読み込みの状態](Bitmap.md#読み込みの状態) |
| `_loadListeners` | [Array](Array.md).&lt;Function&gt; | ロードリスナの配列 |

#### 読み込みの状態

| Name | Description |
| --- | --- |
| 'none' | 画像なし |
| 'pending' | URLリクエスト保留中 |
| 'purged' | URLリクエストを受けてパージ |
| 'requesting' | URI を補完してリクエスト |
| 'requestCompleted' | リクエスト終了 |
| 'decrypting' | 復号中 |
| 'decryptCompleted' | 復号完了 |
| 'loaded' | 画像の利用準備完了 |
| 'error' | エラー発生 |


### Methods

#### (static) _callLoadListeners ()
全ロードリスナを呼ぶ。


#### (static) _drawTextBody (text, tx, ty, maxWidth)
文字の本体を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 文字列 |
| `tx` | [Number](Number.md) | x座標(ピクセル) |
| `ty` | [Number](Number.md) | y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大幅(ピクセル) |


#### (static) _drawTextOutline (text, tx, ty, maxWidth)
文字のアウトラインを描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 文字列 |
| `tx` | [Number](Number.md) | x座標(ピクセル) |
| `ty` | [Number](Number.md) | y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大幅(ピクセル) |


#### (static) _makeFontNameText () → {[String](String.md)}
フォント名を文字列で返す。

#### (static) _onError ()
エラーの時に呼ばれるハンドラ。


#### (static) _onLoad ()
読み込み終了時に呼ばれるハンドラ。


#### (static) _setDirty ()
汚染フラグを設定。


#### (static) load (url) → {[Bitmap](Bitmap.md)}
画像ファイルを読み込んで、Bitmapオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) | 画像ファイルのURL |


#### (static) snap (stage) → {[Bitmap](Bitmap.md)}
指定したStageのゲーム画面のスナップショットを持ったBitmapオブジェクトを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.md) | Stageオブジェクト |


#### addLoadListener (listner)
画像がロードされたときに呼ばれるリスナ関数を追加。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `listner` | Function | コールバック関数 |


#### adjustTone (r, g, b)
指定したRGBに画像の色調を変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤 (-255 〜 255) |
| `g` | [Number](Number.md) | 緑 (-255 〜 255) |
| `b` | [Number](Number.md) | 青 (-255 〜 255) |


#### blt (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)
指定先画像から画像ブロックを転送。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.md) |  |  | 転送元の画像 |
| `sx` | [Number](Number.md) |  |  | 転送元x座標(ピクセル) |
| `sy` | [Number](Number.md) |  |  | 転送元y座標(ピクセル) |
| `sw` | [Number](Number.md) |  |  | 転送元の画像幅(ピクセル) |
| `sh` | [Number](Number.md) |  |  | 転送元の画像高さ(ピクセル) |
| `dx` | [Number](Number.md) |  |  | 転送先x座標(ピクセル) |
| `dy` | [Number](Number.md) |  |  | 転送先y座標(ピクセル) |
| `dw` | [Number](Number.md) | &lt;optional&gt; | sw | 転送先の画像幅(ピクセル) |
| `dh` | [Number](Number.md) | &lt;optional&gt; | sh | 転送先の画像高さ(ピクセル) |


#### bltImage (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)
指定先画像から画像ブロックを転送。ただし、canvasには描画しない。

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.md) |  |  | 転送元の画像 |
| `sx` | [Number](Number.md) |  |  | 転送元x座標(ピクセル) |
| `sy` | [Number](Number.md) |  |  | 転送元y座標(ピクセル) |
| `sw` | [Number](Number.md) |  |  | 転送元の画像幅(ピクセル) |
| `sh` | [Number](Number.md) |  |  | 転送元の画像高さ(ピクセル) |
| `dx` | [Number](Number.md) |  |  | 転送先x座標(ピクセル) |
| `dy` | [Number](Number.md) |  |  | 転送先y座標(ピクセル) |
| `dw` | [Number](Number.md) | &lt;optional&gt; | sw | 転送先の画像幅(ピクセル) |
| `dh` | [Number](Number.md) | &lt;optional&gt; | sh | 転送先の画像高さ(ピクセル) |


#### blur ()
ぼかしエフェクトを適用。


#### checkDirty ()
テクスチャが汚染されているかチェック。


#### clear ()
画像を削除。


#### clearRect (x, y, width, height)
指定した矩形範囲を削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | 矩形左x座標(ピクセル) |
| `y` | [Number](Number.md) | 矩形上y座標(ピクセル) |
| `width` | [Number](Number.md) | 矩形幅(ピクセル) |
| `height` | [Number](Number.md) | 矩形高さ(ピクセル) |


#### decode ()
画像のデコード。


#### drawCircle (x, y, radius, color)
円を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | 中心x座標(ピクセル) |
| `y` | [Number](Number.md) | 中心y座標(ピクセル) |
| `radius` | [Number](Number.md) | 半径(ピクセル) |
| `color` | [MV.CssColor](MV.CssColor.md) | 色 |


#### drawText (text, x, y, maxWidth, lineHeight, align)
文字を描く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 描く文字 |
| `x` | [Number](Number.md) | 左x座標(ピクセル) |
| `y` | [Number](Number.md) | 上y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大許容幅(ピクセル) |
| `lineHeight` | [Number](Number.md) | 行高さ(ピクセル) |
| `align` | [String](String.md) | 文字揃え(left, center, right) |


#### fillAll (color)
指定色で全体を塗りつぶす。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [MV.CssColor](MV.CssColor.md) | 色(CSS文字列) |


#### fillRect (x, y, width, height, color)
指定色で矩形範囲を塗りつぶす。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | 左x座標(ピクセル) |
| `y` | [Number](Number.md) | 上y座標(ピクセル) |
| `width` | [Number](Number.md) | 矩形幅(ピクセル) |
| `height` | [Number](Number.md) | 矩形高さ(ピクセル) |
| `color` | [MV.CssColor](MV.CssColor.md) | 色(CSS文字列) |


#### getAlphaPixel (x, y) → {[String](String.md)}
指定位置の不透明度(16進数)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### getPixel (x, y) → {[MV.CssColor](MV.CssColor.md)}
指定位置のピクセルの色を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### gradientFillRect (x, y, width, height, color1, color2, vertical)
グラデーションで矩形を描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | 左x座標(ピクセル) |
| `y` | [Number](Number.md) | 上y座標(ピクセル) |
| `width` | [Number](Number.md) | 矩形幅(ピクセル) |
| `height` | [Number](Number.md) | 矩形高さ(ピクセル) |
| `color1` | [MV.CssColor](MV.CssColor.md) | 開始色 |
| `color2` | [MV.CssColor](MV.CssColor.md) | 終了色 |
| `vertical` | Boolean | 縦にグラデーションをかけるか |


#### initialize (width, height)
オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### isError () → {Boolean}
読み込み中にエラーが発生したか。


#### isReady () → {Boolean}
画像の描画準備ができているか。


#### isRequestOnly () → {Boolean}
リクエストだけか。


#### isRequestReady () → {Boolean}
リクエストが完了しているか。


#### measureTextWidth (text) → {[Number](Number.md)}
指定文字列の幅を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `text` | [String](String.md) | 幅を測定する文字列 |


#### request (url) → {[Bitmap](Bitmap.md)}
指定URLでリクエストを行い、画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) | 画像ファイルURL |


#### resize (width, height)
指定の大きさに画像をリサイズ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### rotateHue (offset)
指定した量だけ色相を変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `offset` | [Number](Number.md) | 色相の変更量(360度) |


#### startRequest ()
'pending' の状態を解除し画像のリクエストを開始。


#### touch ()
解放されていたらキャッシュマップに再追加するなど、キャッシュの延命。

