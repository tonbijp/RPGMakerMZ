[クラスツリー](index.md)

# クラス: PIXI.Filter

## スーパークラス: [PIXI.Shader](PIXI.Shader.md)

フィルターは、画面に適用される特別なタイプの WebGL シェーダー。<br />
[GLSL(OpenGL ES Shading Language) - Wikipedia](https://ja.wikipedia.org/wiki/GLSL)というC言語に似たOpenGL用の言語で書かれた描画プログラムを用いて、描画を行う。

WebGL およびシェーダの内容について詳細は[WebGL: ウェブの 2D および 3D グラフィック -MDN](https://developer.mozilla.org/ja/docs/Web/API/WebGL_API) や [WebGLの基本 - WebGLFundamentals](https://webglfundamentals.org/webgl/lessons/ja/) などを参照。

この`Filter` クラスについて詳細は本家PxiiJSのリファレンス [PIXI.Filter](http://pixijs.download/release/docs/PIXI.Filter.html)、[フィルタの使用方法に関するドキュメント](https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters) を参照。

関連クラス: [PIXI.DisplayObject](PIXI.DisplayObject.md),  [PIXI.Container](PIXI.Container.md)

### new PIXI.Filter (vertexSrc opt, fragmentSrc opt, uniforms opt)
### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `vertexSrc ` | [String](String.md) | &lt;optional&gt; | 頂点シェーダ(ポリゴンの頂点位置を変換するGLSL) |
| `fragmentSrc ` | [String](String.md) | &lt;optional&gt; | 断片シェーダ(ピクセル単位で色を変換するGLSL) |
| `uniforms` | Object | &lt;optional&gt; | GLSLに渡す変数 |

`uniforms` は、`{変数名:値,...}`の形で任意の変数が指定できる。<br />
変数名に書いた変数は、`vertexSrc ` あるいは `fragmentSrc ` のシェーダ側で `uniform` として定義しておく必要がある。<br />
なお `Filter` は左上を原点に正規化してあるので、JavaScriptの座標系の感覚のまま使えるが、他のGLSLコードを転用する際には注意。<br />
ちなみに、頂点シェーダはバーテックスシェーダ、断片シェーダはフラグメントシェーダと書かれたりもする。


### サブクラス
追加のフィルタを[PixiJS Filters](https://github.com/pixijs/pixi-filters) からダウンロードできる。

* [PIXI.filters.BlurFilter](http://pixijs.download/release/docs/PIXI.filters.BlurFilter.html)
* [PIXI.filters.BlurXFilter](http://pixijs.download/release/docs/PIXI.filters.BlurXFilter.html)
* [PIXI.filters.BlurYFilter](http://pixijs.download/release/docs/PIXI.filters.BlurYFilter.html)
* [PIXI.filters.ColorMatrixFilter](http://pixijs.download/release/docs/PIXI.filters.ColorMatrixFilter.html)
* [PIXI.filters.DisplacementFilter](http://pixijs.download/release/docs/PIXI.filters.DisplacementFilter.html)
* [PIXI.filters.FXAAFilter](http://pixijs.download/release/docs/PIXI.filters.FXAAFilter.html)
* [PIXI.filters.NoiseFilter](http://pixijs.download/release/docs/PIXI.filters.NoiseFilter.html)
* [PIXI.filters.VoidFilter](http://pixijs.download/release/docs/PIXI.filters.VoidFilter.html)
* [ColorFilter](ColorFilter.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `defaultVertexSrc ` | [String](String.md) | [static] 規定の頂点シェーダ |
| `defaultFragmentSrc ` | [String](String.md) | [static] 規定の断片シェーダ |
| `SOURCE_KEY_MAP ` | Object | [static][protected]  |
| `autoFit` | Boolean | 性能が発揮できる大きさにフィルタ領域を合わせるか(規定値: true) |
| `blendMode` | [Number](Number.md)  | [\[合成方法\]](Sprite.md#合成方法) (規定値: PIXI.BLEND_MODES.NORMAL) |
| `enabled` | Boolean |  フィルタを適用するか (規定値: true)  |
| `legacy` | Boolean | [read-only] attributes に position や uvs を使うフィルタか  |
| `padding` | [Number](Number.md) | フィルタのパディング(周辺領域が必要な場合)(規定値: 0)  |
| `resolution` | [Number](Number.md) | フィルタの解像度 |
| `state` | [PIXI.State](http://pixijs.download/release/docs/PIXI.State.md) | WebGL の状態 |
| `uniforms` | Object |  現在のGLSLに渡す変数  |


### スーパークラスから継承されたメソッド

#### [PIXI.Shader](PIXI.Shader.md)

* [(static) from (vertexSrc, fragmentSrc, uniforms)](PIXI.Shader.md#staticform-vertexsrc-opt-fragmentsrc-opt-uniforms-optpixishader)
* [destroy ()](PIXI.Shader.md#destroy-)


### メソッド

#### apply (filterManager, input, output, clearMode, currentState opt)
フィルタを適用。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `filterManager` | [PIXI.FilterSystem](http://pixijs.download/release/docs/PIXI.FilterSystem.html) | | フィルタを取得するレンダラ |
| `input` | [PIXI.RenderTexture](http://pixijs.download/release/docs/PIXI.RenderTexture.html) | | 画像入力対象 |
| `output` | [PIXI.RenderTexture](http://pixijs.download/release/docs/PIXI.RenderTexture.html) | | 画像出力対象 |
| `clearMode` | PIXI.CLEAR_MODES | | レンダリングの出力先の消去モード |
| `currentState` | Object | &lt;optional&gt; | フィルタの現在の状態 |

`currentState` には次のようなプロパティが含まれる。<br />
`target`, `filters`, `sourceFrame`, `destinationFrame`, `renderTarget`, `resolution`
