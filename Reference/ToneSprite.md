# Class: ToneSprite

## Extends: [PIXI.Container](PIXI.Container.md)

### new ToneSprite ()
The sprite which changes the screen color in 2D canvas mode.

関連クラス: [ToneFilter](ToneFilter.md), [Spriteset_Base](Spriteset_Base.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_red` | [Number](Number.md) |  |
| `_green` | [Number](Number.md) |  |
| `_blue` | [Number](Number.md) |  |
| `_gray` | [Number](Number.md) |  |


### Methods

#### (static) _renderCanvas (renderSession)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderSession` | Object |  |


#### (static) _renderWebGL (renderSession)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderSession` | Object |  |


#### initialize ()
 オブジェクト生成時の初期化。


#### reset ()
Clears the tone.


#### setTone (r, g, b, gray)
Sets the tone.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | The red strength in the range (-255, 255) |
| `g` | [Number](Number.md) | The green strength in the range (-255, 255) |
| `b` | [Number](Number.md) | The blue strength in the range (-255, 255) |
| `gray` | [Number](Number.md) | The grayscale level in the range (0, 255) |


