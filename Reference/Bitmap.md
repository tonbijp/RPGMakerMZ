[クラスツリー](index.md)

# クラス: Bitmap

画像を表す基本オブジェクト。

画像データ保持に `baseTexture`([PIXI.BaseTexture](http://pixijs.download/dev/docs/PIXI.BaseTexture.html))<br />
画像読み込みに `image`([Image(HTMLImageElement)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement))<br />
画像描画に `canvas`([HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement)) が使われており、これらの機能が統合されたクラス。

`new Bitmap(0, 0)` とデータ0で生成すると `canvas` が生成されないので、描画関連メソッドを使うのであれば最低 `new Bitmap(1, 1)` で生成する必要がある。

暗号化された画像ファイルの復号機能も持っている。

v1.1.1、v1.2.0 で変更あり。

関連クラス: [Graphics](Graphics.md), [ImageManager](ImageManager.md), [Game_Screen](Game_Screen.md), [Sprite](Sprite.md), [Game_Picture](Game_Picture.md)

### new Bitmap (width, height)
#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | 画像の幅(ピクセル) |
| `height` | [Number](Number.md) | 画像の高さ(ピクセル) |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `fontFace` | [String](String.md) | フォント名(規定値: "sans-serif") |
| `fontSize` | [Number](Number.md) | フォントサイズ(規定値: 16ピクセル)|
| `fontItalic` | Boolean | イタリックか(規定値: false) |
| `fontBold` | Boolean | 太字か(規定値: false) |
| `textColor` | [MV.CssColor](MV.CssColor.md) | 文字色(規定値: "#ffffff") |
| `outlineColor` | [MV.CssColor](MV.CssColor.md) | アウトラインの色(規定値: "rgba(0, 0, 0, 0.5)") |
| `outlineWidth` | [Number](Number.md) | アウトラインの幅(規定値: 3) |
| `url` | [String](String.md) | [read-only] 画像ファイルのURL |
| `baseTexture` | [PIXI.BaseTexture](http://pixijs.download/dev/docs/PIXI.BaseTexture.html) | [read-only] 画像データ保持用の基礎テクスチャ |
| `canvas` | [HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement) | [read-only] 画像操作用 `<canvas>`要素 |
| `context` | [CanvasRenderingContext2D](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D) | [read-only] 2Dレンダリングコンテクスト |
| `image` | [Image(HTMLImageElement)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) |  **@MZ** [read-only] ファイル読み込み管理用 `<img>`要素 |
| `width` | [Number](Number.md) | [read-only] 画像の幅(ピクセル) |
| `height` | [Number](Number.md) | [read-only] 画像の高さ(ピクセル) |
| `rect` | [Rectangle](Rectangle.md) | [read-only] 画像の矩形範囲 |
| `smooth` | Boolean | スムーススケーリング(ぼかし)を適用するか(規定値: true) |
| `paintOpacity` | [Number](Number.md) | 描画時の不透明度(0 〜 255)(規定値: 255) |
| `_loadingState` | [String](String.md) | [読み込みの状態](#読み込みの状態) |
| `_loadListeners` | [Array](Array.md).&lt;Function&gt; | ロードリスナの配列 |
| `_smooth` | Boolean |  |
| `_paintOpacity` | [Number](Number.md)  |  |
| `_url` | [String](String.md) |  |
| `_baseTexture` | [PIXI.BaseTexture](http://pixijs.download/dev/docs/PIXI.BaseTexture.html) |  |
| `_context` | [CanvasRenderingContext2D](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D) |  |
| `_canvas` | [HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement)  |  |
| `_image` |  **@MZ** [Image(HTMLImageElement)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) |  |

#### 読み込みの状態

| 文字列 | 説明 |
| --- | --- |
| "none" | 画像なし |
| "loading" | **@MZ** 画像読み込み中 |
| "loaded" | 画像の利用準備完了 |
| "error" | エラー発生 |

"pending", "purged", "requesting", "requestCompleted", "decrypting","decryptCompleted" の状態は廃止され "loading" に一本化。

### 廃止MVプロパティ
`cacheEntry`


### メソッド

#### (static) load (url) → {[Bitmap](Bitmap.md)}
画像ファイルを読み込んで、Bitmapオブジェクトを返す。<br />
なお、この場合 `canvas` は必要になるまで生成されない。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `url` | [String](String.md) | 画像ファイルのURL |


#### (static) snap (stage) → {[Bitmap](Bitmap.md)}
指定したStageのゲーム画面のスナップショットを持ったBitmapオブジェクトを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `stage` | [Stage](Stage.md) | Stageオブジェクト |


####  _drawTextBody (text, tx, ty, maxWidth)
文字の本体を描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 文字列 |
| `tx` | [Number](Number.md) | x座標(ピクセル) |
| `ty` | [Number](Number.md) | y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大幅(ピクセル) |


#### _drawTextOutline (text, tx, ty, maxWidth)
文字のアウトラインを描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 文字列 |
| `tx` | [Number](Number.md) | x座標(ピクセル) |
| `ty` | [Number](Number.md) | y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大幅(ピクセル) |


#### _makeFontNameText () → {[String](String.md)}
フォント名を文字列で返す。


####  _onError ()
エラーの時に呼ばれるハンドラ。


####  _callLoadListeners ()
全ロードリスナを呼ぶ。


#### _createBaseTexture (source)
**@MZ** キャンバスかイメージ要素から基礎テクスチャを生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `source` | [HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement) \| [Image(HTMLImageElement)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) | テクスチャの元になるデータ |


#### _createCanvas (width, height)
**@MZ** キャンバスの生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### _destroyCanvas ()
**@MZ** キャンバスを破棄。


#### _ensureCanvas ()
**@MZ** キャンバスを確保。


#### _onLoad ()
読み込み終了時に呼ばれるハンドラ。


#### _onXhrLoad (xhr)
**@MZ** XMLHttpRequest読み込み終了時に呼ばれるハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `xhr` | [XMLHttpRequest](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest) | XML HTTP リクエスト |


#### _startLoading ()
**@MZ** 読み込みの開始。


#### _startDecrypting ()
**@MZ** 復号の開始。


#### _updateScaleMode ()
**@MZ** 拡大モード(スムージング)の更新。


#### addLoadListener (listner)
画像がロードされたときに呼ばれるリスナ関数を追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `listner` | Function | コールバック関数 |


#### adjustTone (r, g, b)
指定したRGBに画像の色調を変更。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤 (-255 〜 255) |
| `g` | [Number](Number.md) | 緑 (-255 〜 255) |
| `b` | [Number](Number.md) | 青 (-255 〜 255) |


#### blt (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)
指定先画像から画像ブロックを転送。

##### 引数

| 識別子 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.md) |  | 転送元の画像 |
| `sx` | [Number](Number.md) |  | 転送元x座標(ピクセル) |
| `sy` | [Number](Number.md) |  | 転送元y座標(ピクセル) |
| `sw` | [Number](Number.md) |  | 転送元の画像幅(ピクセル) |
| `sh` | [Number](Number.md) |  | 転送元の画像高さ(ピクセル) |
| `dx` | [Number](Number.md) |  | 転送先x座標(ピクセル) |
| `dy` | [Number](Number.md) |  | 転送先y座標(ピクセル) |
| `dw` | [Number](Number.md) | &lt;optional&gt; | 転送先の画像幅(規定値:sw) |
| `dh` | [Number](Number.md) | &lt;optional&gt; | 転送先の画像高さ(規定値:sh) |


#### bltImage (source, sx, sy, sw, sh, dx, dy, dw opt, dh opt)
指定先画像から画像ブロックを転送。ただし、canvasには描画しない。

##### 引数

| 識別子 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `source` | [Bitmap](Bitmap.md) |  | 転送元の画像 |
| `sx` | [Number](Number.md) |  | 転送元x座標(ピクセル) |
| `sy` | [Number](Number.md) |  | 転送元y座標(ピクセル) |
| `sw` | [Number](Number.md) |  | 転送元の画像幅(ピクセル) |
| `sh` | [Number](Number.md) |  | 転送元の画像高さ(ピクセル) |
| `dx` | [Number](Number.md) |  | 転送先x座標(ピクセル) |
| `dy` | [Number](Number.md) |  | 転送先y座標(ピクセル) |
| `dw` | [Number](Number.md) | &lt;optional&gt; | 転送先の画像幅(規定値:sw) |
| `dh` | [Number](Number.md) | &lt;optional&gt; | 転送先の画像高さ(規定値:sh) |


#### blur ()
ぼかしエフェクトを適用。


#### checkDirty ()
テクスチャが汚染されているかチェック。


#### clear ()
画像を削除。<br />
[Sprite](Sprite.md)などの `bitmap`プロパティにすでに`Bitmap`が設定されている場合、新規 `Bitmap` を代入するのはメモリ効率的に問題がありそうなので、 `bitmap`プロパティに値が存在するか調べたのち、このメソッドで削除すると良いだろう。

##### 例
```js
if( sprite.bitmap ) {
    sprite.bitmap.clear();
}else{
    sprite.bitmap = new Bitmap(1, 1);
}
```


#### clearRect (x, y, width, height)
指定した矩形範囲を削除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 矩形左x座標(ピクセル) |
| `y` | [Number](Number.md) | 矩形上y座標(ピクセル) |
| `width` | [Number](Number.md) | 矩形幅(ピクセル) |
| `height` | [Number](Number.md) | 矩形高さ(ピクセル) |


#### decode ()
画像のデコード。


#### destroy ()
オブジェクトの破棄。


#### drawCircle (x, y, radius, color)
円を描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 中心x座標(ピクセル) |
| `y` | [Number](Number.md) | 中心y座標(ピクセル) |
| `radius` | [Number](Number.md) | 半径(ピクセル) |
| `color` | [MV.CssColor](MV.CssColor.md) | 色 |


#### drawText (text, x, y, maxWidth, lineHeight, align)
文字を描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 描く文字 |
| `x` | [Number](Number.md) | 左x座標(ピクセル) |
| `y` | [Number](Number.md) | 上y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大許容幅(ピクセル) |
| `lineHeight` | [Number](Number.md) | 行高さ(ピクセル) |
| `align` | [String](String.md) | 文字揃え(left, center, right) |


#### fillAll (color)
指定色で全体を塗りつぶす。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [MV.CssColor](MV.CssColor.md) | 色(CSS文字列) |


#### fillRect (x, y, width, height, color)
指定色で矩形範囲を塗りつぶす。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 左x座標(ピクセル) |
| `y` | [Number](Number.md) | 上y座標(ピクセル) |
| `width` | [Number](Number.md) | 矩形幅(ピクセル) |
| `height` | [Number](Number.md) | 矩形高さ(ピクセル) |
| `color` | [MV.CssColor](MV.CssColor.md) | 色(CSS文字列) |


#### getAlphaPixel (x, y) → {[Number](Number.md)}
指定位置の不透明度(0~255)を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### getPixel (x, y) → {[MV.CssColor](MV.CssColor.md)}
指定位置のピクセルの色を(#rrggbb形式で)返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### gradientFillRect (x, y, width, height, color1, color2, vertical)
グラデーションで矩形を描画。

##### 引数

| 名前 | 型 | 説明 |
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

##### 引数

| 名前 | 型 | 説明 |
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
指定文字列の幅を返す。<br />
**(v1.1.1)** 返り値をceil()を通して整数に (文字のぼやけを抑える)。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 幅を測定する文字列 |


#### retry ()
**@MZ** 画像読み込みの再施行。


#### resize (width, height)
指定の大きさに画像をリサイズ。<br />
[blt()](#blt-source-sx-sy-sw-sh-dx-dy-dw-opt-dh-opt)など各種描画メソッドの前に描画領域を確保しておく。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### rotateHue (offset)
指定した量だけ色相を変更。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `offset` | [Number](Number.md) | 色相の変更量(360度) |


#### strokeRect (x, y, width, height, color) 
**@MZ** 矩形枠を描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 矩形幅(ピクセル) |
| `height` | [Number](Number.md) | 矩形高さ(ピクセル) |
| `color` | [MV.CssColor](MV.CssColor.md) | 色 |


### 廃止MVメソッド
[static] request (url)<br />
_setDirty (), startRequest (), touch ()