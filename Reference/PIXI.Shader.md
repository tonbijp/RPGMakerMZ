[クラスツリー](index.md)

# クラス: PIXI.Shader
GLSL によるレンダリングを行うための設定。

`new` で生成する場合は事前に [PIXI.Program](http://pixijs.download/v5.3.12/docs/PIXI.Program.html) を作っておく必要がある。
`PIXI.Shader.form()` を使うと直に断片シェーダのコードを渡して生成できる。
その際、頂点シェーダのコードは `null` にしておくと頂点シェーダは規定(変形なし)となる。

詳細は本家 PixiJS のリファレンス [PIXI.Shader](http://pixijs.download/v5.3.12/docs/PIXI.Shader.html) を参照。

関連クラス: [PIXI.DisplayObject](PIXI.DisplayObject.md), [PIXI.uniformGroup](http://pixijs.download/v5.3.12/docs/PIXI.uniformGroup.html), [PIXI.ShaderSystem](http://pixijs.download/v5.3.12/docs/PIXI.ShaderSystem.html)


### new PIXI.Shader (program opt, uniforms opt)
#### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `program ` | [PIXI.Program](http://pixijs.download/v5.3.12/docs/PIXI.Program.html) | &lt;optional&gt; | GLSLプログラム |
| `uniforms` | Object | &lt;optional&gt; |  GLSLプログラムに渡す値 |

### サブクラス

* [PIXI.Filter](PIXI.Filter.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `program ` | [PIXI.Program](http://pixijs.download/v5.3.12/docs/PIXI.Program.html)  |  GLSLプログラム |
| `uniforms` | Object |  [read-only] GLSLプログラムに渡す値( `uniformGroup.uniforms`と同じ ) |

### メソッド

#### (static) form (vertexSrc opt, fragmentSrc opt, uniforms opt) → {[PIXI.Shader](PIXI.Shader.md)}
シェーダを生成して返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `vertexSrc` | [String](String.md) | &lt;optional&gt; | 頂点シェーダのコード |
| `fragmentSrc` | [String](String.md) | &lt;optional&gt; | 断片シェーダのコード |
| `uniforms` | Object | &lt;optional&gt; | GLSLプログラムに渡す値 |


#### destroy ()
シェーダの破棄。