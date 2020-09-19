# Class: Game_Picture

### new Game_Picture ()

| データ | スプライト |
| --- | --- |
| [ピクチャ] | [Sprite_Picture](Sprite_Picture.md) |

[ピクチャ]\( img/pictures/ フォルダの画像 )関連イベントコマンドに使われる、画像の座標や加工情報。

関連クラス: [Game_Screen](Game_Screen.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_name` | [String](String.md) | ファイル名 |
| `_origin` | [Number](Number.md) | [[原点]](Game_Picture.md#原点) |
| `_x` | [Number](Number.md) | x座標(ピクセル) |
| `_y` | [Number](Number.md) | y座標(ピクセル) |
| `_scaleX` | [Number](Number.md) | x拡大率 |
| `_scaleY` | [Number](Number.md) | y拡大率 |
| `_opacity` | [Number](Number.md) | [不透明度]\(0〜255) |
| `_blendMode` | [Number](Number.md) | [[合成方法]](Sprite.md#合成方法) |
| `_targetX` | [Number](Number.md) | 目標 x座標 |
| `_targetY` | [Number](Number.md) | 目標 y座標 |
| `_targetScaleX` | [Number](Number.md) | 目標拡大率(幅) |
| `_targetScaleY` | [Number](Number.md) | 目標拡大率(高さ) |
| `_targetOpacity` | [Number](Number.md) | 目標不透明度(0〜255) |
| `_duration` | [Number](Number.md) | 継続時間(フレーム) |
| `_tone` | [MV.Tone](MV.Tone.md) | [色調] |
| `_toneTarget` | [MV.Tone](MV.Tone.md) | 色調目標 |
| `_toneDuration` | [Number](Number.md) | 色調の継続時間 |
| `_angle` | [Number](Number.md) | 回転角(度) |
| `_rotationSpeed` | [Number](Number.md) | 回転速度 |

#### 原点
画面に対して、どの位置に表示するか指定するための番号。

| 番号 | 説明 |
| --- | --- |
| 0 | 左上 |
| 1 | 中央 |


### Methods

#### angle () → {[Number](Number.md)}
回転角度を返す。


#### blendMode () → {[Number](Number.md)}
[[合成方法]](Sprite.md#合成方法)を返す。


#### erase ()
画像を消去。


#### initBasic ()
基本的な初期化。


#### initialize ()
オブジェクト生成時の初期化。


#### initRotation ()
回転を初期化。


#### initTarget ()
目標を初期化。


#### initTone ()
[色調]を初期化。


#### move (origin, x, y, scaleX, scaleY, opacity, blendMode, duration)
指定位置へ移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `origin` | [Number](Number.md) | [[原点]](Game_Picture.md#原点) |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `scaleX` | [Number](Number.md) | 拡大率[幅] |
| `scaleY` | [Number](Number.md) | 拡大率[高さ] |
| `opacity` | [Number](Number.md) | [不透明度]\(0〜255) |
| `blendMode` | [Number](Number.md) | [[合成方法]](Sprite.md#合成方法) |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### name () → {[String](String.md)}
ファイル名を返す。


#### opacity () → {[Number](Number.md)}
[不透明度]\(0〜255)を返す。


#### origin () → {[Number](Number.md)}
[[原点]](Game_Picture.md#原点)を返す。


#### rotate (speed)
指定速度で回転。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `speed` | [Number](Number.md) | 速度 |


#### scaleX () → {[Number](Number.md)}
拡大率(幅)を返す。


#### scaleY () → {[Number](Number.md)}
拡大率(高さ)を返す。


#### show (name, origin, x, y, scaleX, scaleY, opacity, blendMode)
指定した位置に表示。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | 名前 |
| `origin` | [Number](Number.md) | [[原点]](Game_Picture.md#原点) |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `scaleX` | [Number](Number.md) | 拡大率[幅] |
| `scaleY` | [Number](Number.md) | 拡大率[高さ] |
| `opacity` | [Number](Number.md) | [不透明度]\(0〜255) |
| `blendMode` | [Number](Number.md) | [[合成方法]](Sprite.md#合成方法) |


#### tint (tone, duration)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [MV.Tone](MV.Tone.md) | 色調 |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### tone () → {[MV.Tone](MV.Tone.md)}
色調を返す。


#### update ()
フレーム毎の画像のアップデート。


#### updateMove ()
移動のアップデート。


#### updateRotation ()
回転のアップデート。


#### updateTone ()
[色調]のアップデート。


#### x () → {[Number](Number.md)}
x座標(ピクセル)を返す。


#### y () → {[Number](Number.md)}
y座標(ピクセル)を返す。


