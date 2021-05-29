[クラスツリー](index.md)

# クラス: PIXI.Application
詳細は本家PixiJSのリファレンス [PIXI.Application](http://pixijs.download/release/docs/PIXI.Application.html) を参照。

関連クラス: [Graphics](Graphics.md)

### new PIXI.Application (options)
### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `options` | Object | &lt;optional&gt; | オプションの詳細は [PIXI.Application](http://pixijs.download/release/docs/PIXI.Application.html) を参照 |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| ` loader` | [PIXI.Loader](http://pixijs.download/release/docs/PIXI.Loader.md) | [read-only] ローダー |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) \| [PIXI.CanvasRenderer](http://pixijs.download/release/docs/PIXI.CanvasRenderer.html) | [static] WebGL レンダラ、なければCanvasレンダラ |
| `resizeTo ` | Window \| HTMLElement | リサイズ対象のブラウザウィンドウまたは他のHTML要素 |
| `screen` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | [read-only] クリックやフィルタに対応している画面のサイズ |
| `stage` | [PIXI.Container](PIXI.Container.md)  | PixiJSの描画のルートオブジェクト |
| `ticker` | [PIXI.Ticker](http://pixijs.download/release/docs/PIXI.Ticker.html)  |  アップデートを行うオブジェクト (規定値:`PIXI.Ticker.shared`)  |
| `view` | HTMLCanvasElement | [read-only] 描画を行うcanvas  |

### メソッド

#### (static)PIXI.Application.registerPlugin (plugin)
プラグインを登録。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `plugin` | [PIXI.IApplicationPlugin](http://pixijs.download/release/docs/PIXI.IApplicationPlugin.html) | 登録するプラグイン |


#### destroy (removeView opt, stageOptions opt)
オブジェクトの破棄。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `removeView` | Boolean | &lt;optional&gt; | 登録するプラグイン |
| `stageOptions` | Boolean \| Object | &lt;optional&gt; | オプション |


#### render ()
現在のステージをレンダリング。


#### resize ()
リサイズ。


#### start ()
レンダリング開始。


#### stop ()
レンダリング停止。