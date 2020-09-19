# Class: TilingSprite

## Extends: PIXI.extras.PictureTilingSprite([PIXI.TilingSprite](http://pixijs.download/release/docs/PIXI.TilingSprite.html))

### new TilingSprite (bitmap)
The sprite object for a tiling image.

関連クラス: [Spriteset_Map](Spriteset_Map.md)

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | The image for the tiling sprite |


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | The image for the tiling sprite. |
| `opacity` | [Number](Number.md) | The opacity of the tiling sprite (0 to 255). |
| `spriteId` | [Number](Number.md) |  |
| `origin` | [Point](Point.md) | The origin point of the tiling sprite for scrolling. |
| `x` | [Number](Number.md) | The x coordinate of the tiling sprite. |
| `y` | [Number](Number.md) | The y coordinate of the tiling sprite. |
| `spriteId` | [Number](Number.md) |  |
| `visibility` | [Number](Number.md) | The visibility of the tiling sprite. |
| `_bitmap` | [Bitmap](Bitmap.md) |  |
| `_width` | [Number](Number.md) |  |
| `_height` | [Number](Number.md) |  |
| `_frame` | [Number](Number.md) |  |


### Methods

#### (static) _onBitmapLoad ()


#### (static) _refresh ()


#### (static) _renderCanvas (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object |  |


#### (static) _renderWebGL (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object |  |


#### (static) _renderWebGL (renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object |  |


#### (static) updateTransform ()


#### initialize (bitmap)
 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  |


#### move (x, y, width, height)
Sets the x, y, width, and height all at once.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate of the tiling sprite |
| `y` | [Number](Number.md) | The y coordinate of the tiling sprite |
| `width` | [Number](Number.md) | The width of the tiling sprite |
| `height` | [Number](Number.md) | The height of the tiling sprite |


#### setFrame (x, y, width, height)
Specifies the region of the image that the tiling sprite will use.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | The x coordinate of the frame |
| `y` | [Number](Number.md) | The y coordinate of the frame |
| `width` | [Number](Number.md) | The width of the frame |
| `height` | [Number](Number.md) | The height of the frame |


#### update ()
Updates the tiling sprite for each frame.

