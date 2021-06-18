[クラスツリー](index.md)

# クラス: PIXI.Texture

## スーパークラス: [PIXI.utils.EventEmitter](http://pixijs.download/release/docs/PIXI.utils.EventEmitter.html) 
(WebGL)レンダリング用の画像データ。

直接コンテナに追加して表示するのではなく、[PIXI.Sprite](PIXI.Sprite.md) などの表示用オブジェクトにセットして表示される。

詳細は本家 PixiJS のサイト [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html) を参照。

### new PIXI.Texture  (baseTexture, frame opt, orig opt, trim opt, rotate opt, anchor opt)
#### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `baseTexture` | [PIXI.BaseTexture](http://pixijs.download/release/docs/PIXI.BaseTexture.html) | | テクスチャのソース |
| `frame` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | &lt;Optional&gt; | 表示する矩形範囲 |
| `orig` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | &lt;Optional&gt; | オリジナルの矩形範囲 |
| `trim` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | &lt;Optional&gt; | オリジナルのトリミング矩形範囲 |
| `rotate` | [Number](Number.md) | &lt;optional&gt; | 回転角 |
| `anchor` | [PIXI.IPointData](http://pixijs.download/release/docs/PIXI.IPointData.html) | &lt;Optional&gt; | アンカー点 |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `EMPTY` | [PIXI.Texture](PIXI.Texture.md) | [static] 空のテクスチャ |
| `WHITE` | [PIXI.Texture](PIXI.Texture.md) | [static] 16×16サイズの白のテクスチャ |
| `_frame` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | テクスチャが表示される矩形領域 |
| `baseTexture` | [PIXI.BaseTexture](http://pixijs.download/release/docs/PIXI.BaseTexture.html) | テクスチャのソース |
| `defaultAnchor` | [PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html) | このテクスチャを使ったオブジェクトのアンカーの規定値(規定値:{0,0}) |
| `frame` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | テクスチャが表示される矩形領域 |
| `width` | [Number](Number.md)  | 幅(ピクセル) |
| `height` | [Number](Number.md)  | 高さ(ピクセル) |
| `noFrame` | Boolean | フレームなしか(規定値: false) |
| `orig` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | オリジナルの矩形範囲 |
| `resolution` | [Number](Number.md) | [read-only]解像度 |
| `rotate` | [Number](Number.md) | 回転角 |
| `textureCacheIds` | [Array](Array.md).&lt;[String](String.md)&gt; | キャッシュIDの配列 |
| `trim` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | オリジナルのトリミング矩形範囲 |
| `uvMatrix` | [PIXI.TextureMatrix](http://pixijs.download/release/docs/PIXI.TextureMatrix.html) | 変形行列 |
| `valid` | Boolean | レンダ可能と判定されているか(規定値: false) |
| `_updateID` | [Number](Number.md) | [protected]アップデートID(規定値: 0)  |
| `_uvs` | [PIXI.TextureUvs](http://pixijs.download/release/docs/PIXI.TextureUvs.html) | [protected]WebGL UVデータキャッシュ |


### メソッド

#### (static) addToCache (texture, id)
PIXI の共有キャッシュに追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `texture` | [PIXI.Texture](http://pixijs.download/release/docs/PIXI.Texture.html)   | テクスチャ |
| `id` | [String](String.md)  | キャッシュ用ID |
 
 
#### (static) from (source, options opt, strict opt) →  {PIXI.Texture}
テクスチャを生成。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `source` | [String](String.md) \| HTMLImageElement \| HTMLCanvasElement \| HTMLVideoElement \| [PIXI.BaseTexture](http://pixijs.download/release/docs/PIXI.BaseTexture.html) |  | 生成元(Stringはファイルパス) |
| `options` | Object  | &lt;optional&gt; | プロパティは `pixiIdPrefix` だけ |
| `options.pixiIdPrefix` | [String](String.md)  | &lt;optional&gt; | IDの接頭辞 |
| `strict` | Boolean  | &lt;optional&gt; | [PIXI.settings.STRICT_TEXTURE_CACHE](http://pixijs.download/release/docs/PIXI.settings.html#STRICT_TEXTURE_CACHE) |

 
#### (static) fromBuffer (buffer, width, height, options opt) →  {PIXI.Texture}
バッファデータからテクスチャを生成。

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `buffer` | Float32Array \| Uint8Array  |  | 画像データ配列 |
| `width` | [Number](Number.md)  |  | 幅(ピクセル) |
| `height` | [Number](Number.md)  |  | 高さ(ピクセル) |
| `options` | Object  | &lt;optional&gt; | [PIXI.BaseTexture](http://pixijs.download/release/docs/PIXI.BaseTexture.html) のコンストラクタ `options` と同じ |


#### (static) fromLoader (source, imageUrl, name) →  {PIXI.Texture}
生成元からテクスチャを生成しキャッシュに追加。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `source` | [String](String.md) \| HTMLImageElement \| HTMLCanvasElement |  | 生成元(Stringはファイルパス) |
| `imageUrl` | [String](String.md)  |  | キャッシュ用ファイル名 |
| `name` | [String](String.md)  | &lt;optional&gt; | `imageUrl` の別名(規定値: `imageUrl`) |


#### (static) fromURL (url, options) →  {PIXI.Texture}
URLからテクスチャを生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `url` | [String](String.md)  | URL |
| `options` | Object  | &lt;optional&gt; |  |


#### (static) removeFromCache (texture) →  {PIXI.Texture}
テクスチャをキャッシュから取り除いて返す。

| `texture` | [String](String.md) \| [PIXI.Texture](PIXI.Texture.md) | ID または インスタンス |


#### castToBaseTexture () →  {[PIXI.BaseTexture](http://pixijs.download/release/docs/PIXI.BaseTexture.html)}
`BaseTexture` に型変換して返す。


#### clone () →  {PIXI.Texture}
複製を作って返す。


#### destroy (destroyBase opt)
オブジェクトを破棄。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `destroyBase ` | Boolean | &lt;optional&gt; | `PIXI.BaseTexture`も破棄するか(規定値: false) |


#### update () 
描画を更新。枠(`frame`)の更新は `updateUvs()` の方を使う。


#### updateUvs () 
枠(`frame`)や切り落とし(`trim`)の更新。


#### onBaseTextureUpdated (baseTexture)
ベーステクスチャが更新された時のハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `baseTexture` | [PIXI.BaseTexture](http://pixijs.download/release/docs/PIXI.BaseTexture.html)  | ベーステクスチャ |