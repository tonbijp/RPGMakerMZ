[クラスツリー](index.md)

# クラス: PIXI.Filter

## スーパークラス: [PIXI.Shader](PIXI.Shader.md)

フィルターは、画面に適用される特別なタイプの WebGL シェーダーです。

詳細は本家PxiiJSのリファレンス [PIXI.Filter](http://pixijs.download/release/docs/PIXI.Filter.html)、[フィルタの使用方法に関するドキュメント](https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters) を参照。

関連クラス: [PIXI.DisplayObject](PIXI.DisplayObject.md)

### new PIXI.Filter (vertexSrc opt, fragmentSrc opt, uniforms opt)

### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `vertexSrc ` | [String](String.md) | &lt;optional&gt; | The source of the vertex shader. |
| `fragmentSrc ` | [String](String.md) | &lt;optional&gt; | The source of the fragment shader. |
| `uniforms` | Object | &lt;optional&gt; |  Custom uniforms to use to augment the built-in ones. |

{ uAlpha: 1 }

### サブクラス
追加のフィルタを[PixiJS Filters](https://github.com/pixijs/pixi-filters) からダウンロードできます。

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
| `defaultFragmentSrc ` |  | [static] The default fragment shader source |
| `defaultVertexSrc ` |  | [static] The default vertex shader source |
| `SOURCE_KEY_MAP ` |  | [static] The default vertex shader source |
| `enabled` | Boolean |  If enabled is true the filter is applied, if false it will not. |
| `fragmentSrc` | [String](String.md) | The fragment shader. |
| `padding` | [Number](Number.md) | The padding of the filter. Some filters require extra space to breath such as a blur.
Increasing this will add extra width and height to the bounds of the object that the
filter is applied to. |
| `resolution` | [Number](Number.md) | The resolution of the filter. Setting this to be lower will lower the quality but
increase the performance of the filter. |
| `uniforms` | Object |  An object containing the current values of custom uniforms. |
| `vertexSrc` | [String](String.md) | The vertex shader. |


### スーパークラスから継承されたメソッド

#### [PIXI.Shader](PIXI.Shader.md)

* [(static) from (vertexSrc, fragmentSrc, uniforms)](PIXI.Shader.md#from-)
* [destroy ()](PIXI.Shader.md#destroy-)


### メソッド

#### apply (filterManager, input, output, clear, currentState opt)
フィルタを適用。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `filterManager` | [PIXI.FilterManager](PIXI.FilterManager.md) | | The renderer to retrieve the filter from |
| `input` | [PIXI.RenderTarget](PIXI.RenderTarget.md) | | The input render target. |
| `output` | [PIXI.RenderTarget](PIXI.RenderTarget.md) | | The target to output to. |
| `clear` | Boolean | | Should the output be cleared before rendering to it |
| `currentState` | [PIXI.FilterManager](PIXI.FilterManager.md) | &lt;optional&gt; | It's current state of filter. |

There are some useful properties in the currentState :
target, filters, sourceFrame, destinationFrame, renderTarget, resolution
