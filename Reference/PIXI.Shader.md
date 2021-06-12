[クラスツリー](index.md)

# クラス: PIXI.Shader
詳細は本家 PixiJS のリファレンス [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html) を参照。

関連クラス: [PIXI.DisplayObject](PIXI.DisplayObject.md)

### new PIXI.Shader (program opt, uniforms opt)
#### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `program ` | [PIXI.Program](http://pixijs.download/release/docs/PIXI.Program.html]) | &lt;optional&gt; | シェーダの使うプログラム |
| `uniforms` | Object | &lt;optional&gt; |  GLSLに渡す変数 |

### サブクラス

* [PIXI.Filter](PIXI.Filter.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `program ` | [PIXI.Program](http://pixijs.download/release/docs/PIXI.Program.html)  |  シェーダの使うプログラム |
| `uniforms` | Object |  [read-only] GLSLに渡す変数( `uniformGroup.uniforms`と同じ ) |

### メソッド

#### (static)form (vertexSrc opt, fragmentSrc opt, uniforms opt) → {[PIXI.Shader](PIXI.Shader.md)}
シェーダを生成して返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `vertexSrc` | [String](String.md) | &lt;optional&gt; | 頂点シェーダのコード |
| `fragmentSrc` | [String](String.md) | &lt;optional&gt; | 断片シェーダのコード |
| `uniforms` | Object | &lt;optional&gt; | GLSLに渡す変数 |


#### destroy ()
シェーダの破棄。