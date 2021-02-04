# クラス: Weather

## スーパークラス: [PIXI.Container](PIXI.Container.md)

#### new Weather ()
The weather effect which displays rain, storm, or snow.


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [String](String.md) | The type of the weather. |
| `power` | [Number](Number.md) | The power of the weather in the range (0, 9). |
| `origin` | [Point](Point.md) | The origin point of the weather for scrolling. |
| `_width` | [Number](Number.md) |  |
| `_height` | [Number](Number.md) |  |
| `_sprites` | [Array](Array.md).&lt;[Sprite](Sprite.md)&gt; |  |
| `_rainBitmap` | [Bitmap](Bitmap.md) |  |
| `_stormBitmap` | [Bitmap](Bitmap.md) |  |
| `_snowBitmap` | [Bitmap](Bitmap.md) |  |
| `_dimmerSprite` | [ScreenSprite](ScreenSprite.md) |  |

#### 天候タイプ

| type | 天候タイプ |
| --- | --- |
| none |  |
| rain |  |
| storm |  |
| snow |  |

### メソッド

#### (static) _addSprite ()


#### (static) _createBitmaps ()


#### (static) _createDimmer ()


#### (static) _rebornSprite (sprite)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### (static) _removeSprite ()


#### (static) _updateAllSprites ()


#### (static) _updateDimmer ()


#### (static) _updateRainSprite (sprite)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### (static) _updateSnowSprite (sprite)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### (static) _updateSprite (sprite)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### (static) _updateStormSprite (sprite)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### initialize ()
 オブジェクト生成時の初期化。

#### update ()
Updates the weather for each frame.

