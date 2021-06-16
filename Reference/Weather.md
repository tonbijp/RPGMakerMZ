[クラスツリー](index.md)

# クラス: Weather

## スーパークラス: [PIXI.Container](PIXI.Container.md)

天候のエフェクト表示用クラス。

関連クラス: [Spriteset_Map](Spriteset_Map.md)

### new Weather ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `type` | [String](String.md) | [天候の種類](Weather.md#天候タイプ) |
| `power` | [Number](Number.md) | 天候の強度 (0 〜 9) |
| `origin` | [Point](Point.md) | スクロールの原点 |
| `viewport` | [Bitmap](Bitmap.md) |  |
| `_width` | [Number](Number.md) | 幅(ピクセル数) |
| `_height` | [Number](Number.md) | 高さ(ピクセル数) |
| `_sprites` | [Array](Array.md).&lt;[Sprite](Sprite.md)&gt; | 含まれるスプライト |
| `_rainBitmap` | [Bitmap](Bitmap.md) | 雨用画像 |
| `_stormBitmap` | [Bitmap](Bitmap.md) | 嵐用画像 |
| `_snowBitmap` | [Bitmap](Bitmap.md) | 雪用画像 |
| `_dimmerSprite` | [ScreenSprite](ScreenSprite.md) | 調光用スプライト |

#### 天候タイプ

| type | 天候タイプ |
| --- | --- |
| "none" | なし |
| "rain" | 雨 |
| "storm" | 嵐 |
| "snow" | 雪 |


### メソッド

#### _addSprite ()
スプライトを追加。


####  _createBitmaps ()
画像を生成。


#### _createDimmer ()
調光用スプライトを生成。


####  _rebornSprite (sprite)
スプライトを再配置。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### _removeSprite ()
スプライトを取り除く。


#### _updateAllSprites ()
全スプライトを更新。


#### _updateDimmer ()
調光用スプライトを更新。


#### _updateRainSprite (sprite)
雨のスプライトを更新。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) | スプライト |


#### _updateSnowSprite (sprite)
雪ののスプライトを更新。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) | スプライト |


#### (static) _updateSprite (sprite)
スプライトを更新。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) | スプライト |


#### (static) _updateStormSprite (sprite)
嵐のスプライトを更新。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) | スプライト |


#### initialize ()
 オブジェクト生成時の初期化。


#### update ()
フレーム毎の更新。
