# クラス: TouchInput
マウスやタッチスクリーンによるタッチ入力を扱う静的クラス。

関連クラス: [Input](Input.md), [Sprite_Destination](Sprite_Destination.md)


### プロパティ

| 名前 | 型 | 説明 |
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
| `_moved` | Boolean | [static] |
| `_released` | Boolean | [static] |
| `_x` | [Number](Number.md) | [static] |
| `_y` | [Number](Number.md) | [static] |
| `_date` | [Number](Number.md) | [static] |


#### 廃止MVプロパティ
[static]
`_events`, `_triggered`, `_cancelled`, `_wheelX`, `_wheelY`


### メソッド

#### (static) _createNewState ()
**@MZ** 新たな状態を作る。


#### (static) _onCancel (x, y)
二本指でタッチあるいはキャンセル(右)ボタンが押された時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onHover (x, y)
**@MZ** ボタンを離した状態で移動した時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onLeftButtonDown (event)
決定(左)ボタンが押された時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onLostFocus ()
**@MZ** フォーカスを失った時のイベント。


#### (static) _onMiddleButtonDown (event)
補助(中央)ボタン(ホイール)が押された時のイベント。<br />
コアスクリプトでの実装はない。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMouseDown (event)
いずれかのマウスボタンが押された時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMouseMove (event)
マウスが移動した時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMouseUp (event)
いずれかのマウスボタンが離された時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onMove (x, y)
タッチした指あるいはマウスが移動した時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onRelease (x, y)
タッチした指あるいはボタンが離れた時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onRightButtonDown (event)
キャンセル(右)ボタンが押された時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | MouseEvent |  |


#### (static) _onTouchCancel (event)
タッチがキャンセル(二本指でタッチ)された時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | TouchEvent |  |


#### (static) _onTouchEnd (event)
タッチした指が離れた時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | TouchEvent |  |


#### (static) _onTouchMove (event)
タッチした状態で指が移動した時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | TouchEvent |  |


#### (static) _onTouchStart (event)
タッチされた時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | TouchEvent |  |


#### (static) _onTrigger (x, y)

トリガされた時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### (static) _onWheel (event)
ホイールが回された時のイベント。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | WheelEvent |  |


#### (static) _setupEventHandlers ()
イベントハンドラを設定。


#### (static) clear ()
タッチ・クリック入力に関するデータを消去。


#### (static) initialize ()
クラスの初期化。


#### (static) isCancelled () → {Boolean}
キャンセル(右ボタン)が押されたか。


#### (static) isClicked () → {Boolean}
**@MZ** 押されたか。


#### (static) isHovered () → {Boolean}
**@MZ** ボタンが押されない状態で移動したたか。


#### (static) isLongPressed () → {Boolean}
タッチあるいは決定(左)ボタンが長押しされたか。


#### (static) isMoved () → {Boolean}
タッチした指あるいはマウスカーソルが移動しているか。


#### (static) isPressed () → {Boolean}
タッチあるいは決定(左)ボタンが押されているか。


#### (static) isReleased () → {Boolean}
タッチあるいは決定(左)ボタンが離されているか。


#### (static) isRepeated () → {Boolean}
タッチあるいは決定(左)ボタンが押されている、もしくは仮想のキーリピートが発生しているか。


#### (static) isTriggered () → {Boolean}
タッチあるいは決定(左)ボタンが押されているか。


#### (static) update ()
タッチ・クリック入力のアップデート。


### MV廃止メソッド
[static]
_onPointerDown (event)