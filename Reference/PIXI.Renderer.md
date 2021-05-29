[クラスツリー](index.md)

# クラス: PIXI.Renderer

## スーパークラス: [PIXI.AbstractRenderer](http://pixijs.download/release/docs/PIXI.AbstractRenderer.html) 

WebGLのレンダリングを行うためのクラス。

詳細は本家 PixiJS のサイト [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) を参照。

関連クラス: [Sprite_Animation](Sprite_Animation.md), [PIXI.Container](PIXI.Container.md), [PIXI.Application](PIXI.Application.md)

### new PIXI.Renderer (options opt)
#### 引数
全ての値は任意(optional)です。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `options ` | Object | 詳細は以下を参照 |
| `options.width` | [Number](Number.md) | 画面の幅(ピクセル) (規定値: 800) |
| `options.height` | [Number](Number.md) | 画面の高さ(ピクセル) (規定値: 600) |
| `options.view` | [HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement) | 表示用 canvas |
| `options.useContextAlpha` | Boolean |  (規定値: true) |
| `options.autoDensity` | Boolean | 1以外の解像度を許可するか (規定値: false) |
| `options.antialias` | Boolean | アンチエイリアスを使うか (規定値: false) |
| `options.resolution` | [Number](Number.md) | 解像度 / 機器ピクセル の比。なおレティナの解像度は2 (規定値: PIXI.settings.RESOLUTION) |
| `options.clearBeforeRender` | Boolean | レンダ前にクリアするか。preserveDrawingBuffer が true の時のみ false にできる (規定値: true) |
| `options.preserveDrawingBuffer` | Boolean | 描画バッファの保存をするか。WebGLコンテキストで toDataUrl を呼び出す必要がある場合は true (規定値: false) |
| `backgroundColor` | [Number](Number.md) | 背景色 (規定値: 0x000000) |
| `backgroundAlpha` | [Number](Number.md) | 背景不透明度 (規定値: 1) |
| `powerPreference` | [String](String.md) | WebGLコンテキストに渡されるパラメーター。デュアルグラフィックカードを搭載したデバイスの場合は 'high-performance' に設定する |
| `context` | Object | 指定したWebGLコンテキストから、すべてのパラメーターを取得 |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- | 
| `plugins` | Object | [static][read-only] プラグインのコレクション |
| `batch` | [PIXI.BatchSystem](http://pixijs.download/release/docs/PIXI.BatchSystem.html) | [read-only] パッチシステムのインスタンス |
| `context` | [PIXI.ContextSystem](http://pixijs.download/release/docs/PIXI.ContextSystem.html) | [read-only] コンテクストシステムのインスタンス |
| `filter` | [PIXI.FilterSystem](http://pixijs.download/release/docs/PIXI.FilterSystem.html) | [read-only] フィルタシステムのインスタンス |
| `framebuffer` | [PIXI.FramebufferSystem](http://pixijs.download/release/docs/PIXI.FramebufferSystem.html) | [read-only] フレームバッファシステムのインスタンス |
| `geometry` | [PIXI.GeometrySystem](http://pixijs.download/release/docs/PIXI.GeometrySystem.html) | [read-only] ジオメトリシステムのインスタンス |
| `gl` | WebGLRenderingContext | [read-only] WebGLのコンテキスト(規定値: undefined) |
| `globalUniforms` | [PIXI.UniformGroup](http://pixijs.download/release/docs/PIXI.UniformGroup.html) | [read-only] 大域ユニフォーム |
| `mask` | [PIXI.MaskSystem](http://pixijs.download/release/docs/PIXI.MaskSystem.html) | [read-only] マスクシステムのインスタンス |
| `projection` | [PIXI.ProjectionSystem](http://pixijs.download/release/docs/PIXI.ProjectionSystem.html) | [read-only] プロジェクションシステムのインスタンス |
| `renderingToScreen` | Boolean | [read-only] Flag if we are rendering to the screen vs renderTexture(規定値: true) |
| `renderTexture` | [PIXI.RenderTextureSystem](http://pixijs.download/release/docs/PIXI.RenderTextureSystem.html) | [read-only] レンダテクスチャシステムのインスタンス |
| `scissor` | [PIXI.ScissorSystem ](http://pixijs.download/release/docs/PIXI.RenderTextureSystem.html) | [read-only] シザーシステムのインスタンス |
| `shader` | [PIXI.ShaderSystem](http://pixijs.download/release/docs/PIXI.ShaderSystem.html) | [read-only] シェーダシステムのインスタンス |
| `state` | [PIXI.StateSystem](http://pixijs.download/release/docs/PIXI.StateSystem.html) | [read-only] ステートシステムのインスタンス |
| `stencil` | [PIXI.StencilSystem](http://pixijs.download/release/docs/PIXI.StencilSystem.html) | [read-only] ステンシルシステムのインスタンス |
| `texture` | [PIXI.TextureSystem ](http://pixijs.download/release/docs/PIXI.TextureSystem .html) | [read-only] テクスチャシステムのインスタンス |
| `textureGC` | [PIXI.TextureGCSystem](http://pixijs.download/release/docs/PIXI.TextureGCSystem.html) | [read-only] テクスチャガベッジコレクションシステムのインスタンス |


### スーパークラスから継承されたメソッド

#### [PIXI.AbstractRenderer](http://pixijs.download/release/docs/PIXI.AbstractRenderer.html) 

 * [generateTexture (displayObject, scaleMode, resolution, region)](http://pixijs.download/release/docs/PIXI.AbstractRenderer.html#generateTexture)
 * [initPlugins (staticMap)](http://pixijs.download/release/docs/PIXI.AbstractRenderer.html#initPlugins)


### メソッド

#### (static)registerPlugin (pluginName, ctor)
プラグインの登録。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pluginName` | [String](String.md)  | プラグイン名 |
| `ctor` | IRendererPluginConstructor  | コンストラクタ |

 
#### addSystem (ClassRef, name) →  {PIXI.Renderer}
システムの追加。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `ClassRef` | PIXI.Rendererの参照 |   | クラス参照 |
| `name` |  [String](String.md)  | &lt;optional&lt; | 名前 |


#### clear ()
フレームバッファの消去。


#### destroy (removeView)
オーバーライド: [PIXI.AbstractRenderer](http://pixijs.download/release/docs/PIXI.AbstractRenderer.html#destroy) 


#### render (displayObject, options opt) 
レンダリングを行う。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `displayObject` | [PIXI.IRenderableObject](http://pixijs.download/release/docs/PIXI.IRenderableObject.html) |  | レンダリング対象 |
| `options` | Object | &lt;optional&gt; | 詳細は以下 |
| `options.renderTexture` | [PIXI.RenderTexture](http://pixijs.download/release/docs/PIXI.RenderTexture.html) | &lt;optional&gt; | レンダテクスチャ |
| `options.clear` | Boolean | &lt;optional&gt; | レンダリング前に消去するか(規定値: true) |
| `options.transform` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html) | &lt;optional&gt; | レンダリング前に加える変形 |
| `options.skipUpdateTransform` | Boolean | &lt;optional&gt; | 変形の更新をとばすか(規定値: false) |


#### reset () →  {PIXI.Renderer}
WebGL の状態を初期化。


#### resize (screenWidth, screenHeight)
オーバーライド: [PIXI.AbstractRenderer](http://pixijs.download/release/docs/PIXI.AbstractRenderer.html#resize) 


### イベント

#### context
WebGLコンテキストが呼ばれた時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `gl` | WebGLRenderingContext  | WebGLコンテキスト |


#### postrender
レンダリング完了後のイベント。


#### prerender
レンダリング開始前のイベント。


#### resize
リサイズが実行された時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `screenWidth` | [Number](Number.md) | 画面の幅(ピクセル) |
| `screenHeight` | [Number](Number.md) | 画面の高さ(ピクセル) |
