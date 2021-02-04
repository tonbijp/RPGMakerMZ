[クラスツリー](index.md)

# クラス: ColorFilter

## スーパークラス: [PIXI.Filter](http://pixijs.download/release/docs/PIXI.Filter.html)

### new ColorFilter ()
WebGLカラーフィルタオブジェクト。

関連クラス: [Scene_Base](Scene_Base.md), [Sprite](Sprite.md), [Spriteset_Base](Spriteset_Base.md)

### プロパティ
以下は PIXI.Filter から継承されたプロパティです。

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `defaultFragmentSrc` | [String](String.md) | [static] |
| `defaultVertexSrc` | [String](String.md)  | [static]  |
| `SOURCE_KEY_MAP` | Object | [static][protected]  |
| `autoFit` | Boolean |  |
| `blendMode` | [Number](Number.md)  |  |
| `enabled` | Boolean |  |
| `legacy` | Boolean |  |
| `padding` | [Number](Number.md)  |  |
| `resolution` | [Number](Number.md)  |  |
| `state` | PIXI.State |  |
| `program` | PIXI.Program  | [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html)からの継承 |
| `uniforms` | Object |  [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html)からの継承 |


### スーパークラスから継承されたメソッド

#### [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html)

* [destroy ()](http://pixijs.download/release/docs/PIXI.Shader.html#destroy)

####  [PIXI.Filter](http://pixijs.download/release/docs/PIXI.Filter.html) 

* [apply (filterManager, input, output, clearMode, currentState)](http://pixijs.download/release/docs/PIXI.Filter.html#apply)


### メソッド

#### _fragmentSrc () → {String}
fragment shader のソースを文字列で返す。


####  initialize ()
オブジェクトの初期化。
 
 
#### setBlendColor (color)
指定した値でブレンド色を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [MV.Color](MV.Color.md) | ブレンド色[r, g, b, a] |


#### setBrightness (brightness)
指定した値で明るさを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `brightness` | [Number](Number.md)  | 明るさ(0 〜 255) |
 
 
#### setColorTone (tone)
指定した値で[色調]を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tone` | [[MV.Tone](MV.Tone.md) | 色調[r, g, b, gray] |


#### setHue (hue)
指定した値で色相を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `hue` | [Number](Number.md) | 色相(-360 〜 360) |

