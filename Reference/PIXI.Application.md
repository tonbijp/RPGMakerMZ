[クラスツリー](index.md)

# クラス: PIXI.Application
PixiJS で扱う基本的なオブジェクトを保持するクラス。

v4以前のバージョンは必要なオブジェクトを個々に生成していた。<br />
このクラスは必要なオブジェクトの生成と保持を一手に担うもの。<br />
とりあえず PixiJS を使うときはこの `PIXI.Application`クラスを生成すれば準備が整うようになった。

詳細は本家 PixiJS のリファレンス [PIXI.Application](http://pixijs.download/release/docs/PIXI.Application.html) を参照。

関連クラス: [Graphics](Graphics.md)

### new PIXI.Application (options opt)
#### 引数
全ての値は任意(optional)。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `options` | Object | 詳細は以下を参照 |
| `options.autoStart` | Boolean | 生成後にレンダリング開始するか(規定値: true) |
| `options.width` | [Number](Number.md) | 描画領域の幅(規定値: 800ピクセル) |
| `options.height` | [Number](Number.md) | 描画領域の高さ(規定値: 600ピクセル) |
| `options.view` | [HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement) | 表示用 canvas |
| `options.useContextAlpha` | Boolean | canvas の alpha の状態を使うか(規定値: true) |
| `options.autoDensity` | Boolean | 1以外の解像度を許可するか (規定値: false) |
| `options.antialias` | Boolean | アンチエイリアスをかけるか(規定値: false) |
| `options.preserveDrawingBuffer` | Boolean | 描画バッファの保存をするか。WebGLコンテキストで toDataUrl を呼び出す必要がある場合は true (規定値: false) |
| `options.resolution` | [Number](Number.md) | 解像度 / 機器ピクセル の比。なおレティナの解像度は2 (規定値: PIXI.settings.RESOLUTION) |
| `options.forceCanvas` | Boolean | canvasで描画するか(でなければ WebGL)(規定値: false) |
| `options.backgroundColor` | [Number](Number.md) | 背景色 (規定値: 0x000000) |
| `options.backgroundAlpha` | [Number](Number.md) | 背景不透明度 (規定値: 1) |
| `options.clearBeforeRender` | Boolean | レンダ前にクリアするか。preserveDrawingBuffer が true の時のみ false にできる (規定値: true) |
| `options.powerPreference` | [String](String.md) | WebGLコンテキストに渡されるパラメーター。デュアルグラフィックカードを搭載したデバイスの場合は "high-performance" に設定する |
| `options.sharedTicker` | Boolean | PIXI.Ticker.shared を使うか(規定値: false) |
| `options.sharedLoader` | Boolean | PIXI.Loader.shared を使うか(規定値: false) |
| `options.resizeTo ` | Window \| HTMLElement | リサイズ対象のブラウザウィンドウまたは他のHTML要素 |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| ` loader` | [PIXI.Loader](http://pixijs.download/release/docs/PIXI.Loader.md) | [read-only] ローダー |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) \| [PIXI.CanvasRenderer](http://pixijs.download/release/docs/PIXI.CanvasRenderer.html) | [static] WebGLレンダラ または Canvasレンダラ |
| `resizeTo ` | Window \| HTMLElement | リサイズ対象のブラウザウィンドウまたは他のHTML要素 |
| `screen` | [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) | [read-only] クリックやフィルタに対応している画面のサイズ |
| `stage` | [PIXI.Container](PIXI.Container.md) | ルート(『RPGツクールMZ』の場合[Scene_Base](Scene_Base.md)) |
| `ticker` | [PIXI.Ticker](http://pixijs.download/release/docs/PIXI.Ticker.html) | フレーム毎の更新を行うオブジェクト(規定値:`PIXI.Ticker.shared`)  |
| `view` | HTMLCanvasElement | [read-only] 描画を行うcanvas  |


### メソッド

#### (static) registerPlugin (plugin)
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
| `removeView` | Boolean | &lt;optional&gt; | ビューを削除するか |
| `stageOptions` | Boolean \| Object | &lt;optional&gt; | オプション |


#### render ()
現在のステージをレンダリング。


#### resize ()
`resizeTo `プロパティに設定されている対象に合わせて即時、描画領域を再設定。


#### start ()
レンダリング開始。


#### stop ()
レンダリング停止。