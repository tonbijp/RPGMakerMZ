# Class: ToneFilter

## Extends: PIXI.ColorMatrixFilter([PIXI.filters.ColorMatrixFilter](http://pixijs.download/release/docs/PIXI.filters.ColorMatrixFilter.html))

#### new ToneFilter ()
The color matrix filter for WebGL.

関連クラス: [ToneSprite](ToneSprite.md)

### Methods

#### adjustHue (value)
Changes the hue.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) | The hue value in the range (-360, 360) |


#### adjustSaturation (value)
Changes the saturation.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) | The saturation value in the range (-255, 255) |


#### adjustTone (r, g, b)
Changes the tone.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | The red strength in the range (-255, 255) |
| `g` | [Number](Number.md) | The green strength in the range (-255, 255) |
| `b` | [Number](Number.md) | The blue strength in the range (-255, 255) |
