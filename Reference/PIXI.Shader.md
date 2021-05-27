[クラスツリー](index.md)

# クラス: PIXI.Shader
詳細は本家PxiiJSのリファレンス [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html) を参照のこと。

関連クラス: [PIXI.DisplayObject](PIXI.DisplayObject.md)

### new PIXI.Shader (program opt, uniforms opt)
### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `program ` | [PIXI.Program](http://pixijs.download/release/docs/PIXI.Program.md) | &lt;optional&gt; | The program the shader will use. |
| `uniforms` | Object | &lt;optional&gt; |  Custom uniforms to use to augment the built-in ones. |

### サブクラス

* [PIXI.Filter](PIXI.Filter.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `program ` | [PIXI.Program](http://pixijs.download/release/docs/PIXI.Program.md)  |  Program that the shader uses |
| `uniforms` | Object |  [read-only] Shader uniform values, shortcut for uniformGroup.uniforms. |

### メソッド

#### (static)form (vertexSrc opt, fragmentSrc opt, uniforms opt)PIXI.Shader
フィルタを適用。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `vertexSrc` | [String](String.md) | &lt;optional&gt; | It's current state of filter. |
| `fragmentSrc` | [String](String.md) | &lt;optional&gt; | The source of the fragment shader. |
| `uniforms` | Object | &lt;optional&gt; | Custom uniforms to use to augment the built-in ones. |


#### destroy ()