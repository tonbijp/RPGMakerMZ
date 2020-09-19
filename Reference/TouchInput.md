# Class: TouchInput
The static class that handles input data from the mouse and touchscreen.

関連クラス: [Input](Input.md), [Sprite_Destination](Sprite_Destination.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `keyRepeatWait` | [Number](Number.md) | [static] The wait time of the pseudo key repeat in frames. |
| `keyRepeatInterval` | [Number](Number.md) | [static] The interval of the pseudo key repeat in frames. |
| `wheelX` | [Number](Number.md) | [static][read-only] The horizontal scroll amount. |
| `wheelY` | [Number](Number.md) | [static][read-only] The vertical scroll amount. |
| `x` | [Number](Number.md) | [static][read-only] The x coordinate on the canvas area of the latest touch event. |
| `y` | [Number](Number.md) | [static][read-only] The y coordinate on the canvas area of the latest touch event. |
| `date` | [Number](Number.md) | [static][read-only] The time of the last input in milliseconds. |
| `_mousePressed` | Boolean | [static] |
| `_screenPressed` | Boolean | [static] |
| `_pressedTime` | [Number](Number.md) | [static] |
| `_events` | [MV.TouchInputEvents](MV.TouchInputEvents.md) | [static] |
| `_triggered` | Boolean | [static] |
| `_cancelled` | Boolean | [static] |
| `_moved` | Boolean | [static] |
| `_released` | Boolean | [static] |
| `_wheelX` | [Number](Number.md) | [static] |
| `_wheelY` | [Number](Number.md) | [static] |
| `_x` | [Number](Number.md) | [static] |
| `_y` | [Number](Number.md) | [static] |
| `_date` | [Number](Number.md) | [static] |


### Methods

#### (static) _onCancel (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onLeftButtonDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMiddleButtonDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMouseDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMouseMove (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMouseUp (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMove (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onPointerDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | PointerEvent |  |


#### (static) _onRelease (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onRightButtonDown (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onTouchCancel (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |


#### (static) _onTouchEnd (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |


#### (static) _onTouchMove (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |


#### (static) _onTouchStart (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent |  |


#### (static) _onTrigger (x, y)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onWheel (event)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | WheelEvent |  |


#### (static) _setupEventHandlers ()


#### (static) clear ()
Clears all the touch data.

#### (static) initialize ()
Initializes the touch system.

#### (static) isCancelled () → {Boolean}
Checks whether the right mouse button is just pressed.

#### (static) isLongPressed () → {Boolean}
Checks whether the left mouse button or touchscreen is kept depressed.

#### (static) isMoved () → {Boolean}
Checks whether the mouse or a finger on the touchscreen is moved.

#### (static) isPressed () → {Boolean}
Checks whether the mouse button or touchscreen is currently pressed down.

#### (static) isReleased () → {Boolean}
Checks whether the left mouse button or touchscreen is released.

#### (static) isRepeated () → {Boolean}
Checks whether the left mouse button or touchscreen is just pressed or a pseudo key repeat occurred.

#### (static) isTriggered () → {Boolean}
Checks whether the left mouse button or touchscreen is just pressed.

#### (static) update ()
Updates the touch data.