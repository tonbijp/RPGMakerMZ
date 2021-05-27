[クラスツリー](index.md)

# クラス: ColorFilter

## スーパークラス: [PIXI.Filter](PIXI.Filter.md)

WebGLカラーフィルタオブジェクト。

関連クラス: [Scene_Base](Scene_Base.md), [Sprite](Sprite.md), [Spriteset_Base](Spriteset_Base.md)

### new ColorFilter ()

### スーパークラスから継承されたメソッド

#### [PIXI.Shader](PIXI.Shader.md)

* [destroy ()](PIXI.Shader.md#destroy-)

####  [PIXI.Filter](PIXI.Filter.md) 

* [apply (filterManager, input, output, clearMode, currentState)](PIXI.Filter.md#apply-filtermanager-input-output-clear-currentstate-opt)


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

