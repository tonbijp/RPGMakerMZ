[クラスツリー](index.md)

# クラス: TilingSprite

## スーパークラス: [PIXI.TilingSprite](http://pixijs.download/release/docs/PIXI.TilingSprite.html)

タイル(繰り返し表示)画像用のスプライト。<br />
[遠景]および、ウィンドウの背景に使われる。

MVでの継承元 `PIXI.extras.PictureTilingSprite` から変更された。

関連クラス: [Spriteset_Map](Spriteset_Map.md), [Window](Window.md)

### new TilingSprite (bitmap)
#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | タイル用画像 |

### サブクラス

* [Sprite_Battleback](Sprite_Battleback.md) 


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | タイル用画像 |
| `opacity` | [Number](Number.md) | 不透明度 (0 〜 255). |
| `spriteId` | [Number](Number.md) | スプライトID |
| `origin` | [Point](Point.md) | スクロールの原点 |
| `x` | [Number](Number.md) | x座標(ピクセル数) |
| `y` | [Number](Number.md) | y座標(ピクセル数) |
| `_bitmap` | [Bitmap](Bitmap.md) | タイル用画像 |
| `_width` | [Number](Number.md) | 幅 |
| `_height` | [Number](Number.md) | 高さ |
| `_frame` | [Rectangle](Rectangle.md) | 枠 |


### 廃止MVプロパティ
`visibility` 


### メソッド

#### _onBitmapChange ()
**@MZ** 画像が変更された時のハンドラ。


#### _onBitmapLoad ()
画像が読み込まれた時のハンドラ。


#### _refresh ()
再描画。


#### destroy ()
**@MZ** オブジェクトの破棄。


#### initialize (bitmap)
 オブジェクト生成時の初期化。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | タイル用画像 |


#### move (x, y, width, height)
移動。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル数) |
| `y` | [Number](Number.md) | y座標(ピクセル数)  |
| `width` | [Number](Number.md) | 幅(ピクセル数)  |
| `height` | [Number](Number.md) | 高さ(ピクセル数)  |


#### setFrame (x, y, width, height)
表示枠を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル数) |
| `y` | [Number](Number.md) | y座標(ピクセル数)  |
| `width` | [Number](Number.md) | 幅(ピクセル数)  |
| `height` | [Number](Number.md) | 高さ(ピクセル数)  |


#### update ()
フレーム毎の更新。


#### updateTransform ()
変形の更新。


### MV廃止メソッド
_renderCanvas (renderer), _renderWebGL (renderer)
