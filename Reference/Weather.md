# Class: Weather

## Extends: [PIXI.Container](PIXI.Container.md)

#### new Weather ()
The weather effect which displays rain, storm, or snow.


### Properties:

| Name | Type | Description |
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

### Methods

#### (static) _addSprite ()


#### (static) _createBitmaps ()


#### (static) _createDimmer ()


#### (static) _rebornSprite (sprite)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### (static) _removeSprite ()


#### (static) _updateAllSprites ()


#### (static) _updateDimmer ()


#### (static) _updateRainSprite (sprite)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### (static) _updateSnowSprite (sprite)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### (static) _updateSprite (sprite)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### (static) _updateStormSprite (sprite)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |


#### initialize ()
 オブジェクト生成時の初期化。

#### update ()
Updates the weather for each frame.

