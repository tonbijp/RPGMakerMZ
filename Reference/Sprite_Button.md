[クラスツリー](index.md)

# クラス: Sprite_Button

## スーパークラス: [Sprite_Clickable](Sprite_Clickable.md)

### new Sprite_Button (buttonType)
ボタン表示用スプライト。

MVでは [Sprite](Sprite.md) のサブクラスだったが、MZでは  [Sprite_Clickable](Sprite_Clickable.md) を継承している。

関連クラス: [Window_ShopNumber](Window_ShopNumber.md), [Window_NumberInput](Window_NumberInput.md)

#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `buttonType` | [String](String.md) | **@MZ** [ボタンの種類](#ボタンの種類) |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_buttonType` | [String](String.md)  | **@MZ** [ボタンの種類](#ボタンの種類) |
| `_coldFrame` | [Rectangle](Rectangle.md) | 表示枠 |
| `_hotFrame` | [Rectangle](Rectangle.md) | タッチ・クリック反応枠 |
| `_clickHandler` | Function | タッチ・クリック時に呼ばれるハンドラ |

### ボタンの種類

| 文字列 | 説明 |
| --- | --- |
| "cancel" | キャンセル |
| "pageup" | ページアップ |
| "pagedown" | ページダウン |
| "down" | ダウン |
| "up" | アップ |
| "down2" | ダウン2 |
| "up2" | アップ2 |
| "ok" | 決定 |
| "menu" | メニュー |

### 廃止MVプロパティ
`_touching`


### スーパークラスから継承されたメソッド

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
* [setParent (container)](PIXI.DisplayObject.md#setparent-container--pixicontainer)
* [setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)](PIXI.DisplayObject.md#settransform-x-y-scalex-scaley-rotation-skewx-skewy-pivotx-pivoty--pixidisplayobject)
* [toGlobal (position, point, skipUpdate)](PIXI.DisplayObject.md#toglobal-position-point-skipupdate--pixipoint)
* [toLocal (position, from, point, skipUpdate)](PIXI.DisplayObject.md#tolocal-position-from-point-skipupdate--pixipoint)

#### [PIXI.Container](PIXI.Container.md)

* [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
* [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
* [calculateBounds ()](PIXI.Container.md#calculatebounds-)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [_renderCanvas (renderer)](PIXI.Container.md#_rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [PIXI.Sprite](PIXI.Sprite.md)

* [(static) from (source, options)](PIXI.Sprite.md#static-from-source-options--pixisprite)
* [\_calculateBounds ()](PIXI.Sprite.md#_calculatebounds-)
* [\_render (renderer)](PIXI.Sprite.md#_render-renderer)
* [calculateTrimmedVertices ()](PIXI.Sprite.md#calculatetrimmedvertices-)
* [calculateVertices ()](PIXI.Sprite.md#calculatevertices-)
* [containsPoint (point)](PIXI.Sprite.md#containspoint-point--boolean)
* [getLocalBounds (rect)](PIXI.Sprite.md#getlocalbounds-rect--pixirectangle)
* [renderCanvas (renderer)](PIXI.Sprite.md#rendercanvas-renderer)

#### [Sprite](Sprite.md)

* [destroy ()](Sprite.md#destroy-)
* [getBlendColor ()](Sprite.md#getblendcolor---mvcolor)
* [getColorTone ()](Sprite.md#getcolortone---mvcolor)
* [hide ()](Sprite.md#hide-)
* [move (x, y)](Sprite.md#Sprite.md#move-x-y)
* [setBlendColor (color)](Sprite.md#setblendcolor-color)
* [setColorTone (tone)](Sprite.md#setcolortone-tone)
* [setFrame (x, y, width, height)](Sprite.md#setframe-x-y-width-height)
* [setHue (hue)](Sprite.md#sethue-hue)
* [show ()](Sprite.md#show-)
* [updateVisibility ()](Sprite.md#updatevisibility-)

#### [Sprite_Clickable](Sprite_Clickable.md)

* [hitTest (x, y)](Sprite_Clickable.md#hittest-x-y--boolean)
* [isBeingTouched ()](Sprite_Clickable.md#isbeingtouched---boolean)
* [isClickEnabled ()](Sprite_Clickable.md#isclickenabled---boolean)
* [isPressed ()](Sprite_Clickable.md#ispressed---boolean)
* [onMouseEnter ()](Sprite_Clickable.md#onmouseenter-)
* [onMouseExit ()](Sprite_Clickable.md#onmouseexit-)
* [onPress ()](Sprite_Clickable.md#onpress-)
* [processTouch ()](Sprite_Clickable.md#processtouch-)


### メソッド

#### blockHeight () → {number}
**@MZ** ブロックの高さ(規定値:48ピクセル)を返す。


#### blockWidth () → {number}
**@MZ** ブロックの幅(規定値:48ピクセル)を返す。


#### buttonData () → {Object}
**@MZ** ボタンの種類に応じたデータ { x: x位置. w: 幅 }(ブロック単位)を返す。


#### checkBitmap ()
**@MZ** 画像をチェックしてサイズが小さすぎるならエラーを発生させる。


#### initialize ()
オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#initialize-)


#### loadButtonImage ()
**@MZ** ボタン画像を読み込む。


#### onClick ()
**@MZ** オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#onclick-)


#### setClickHandler (method)
クリックハンドラの設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `method` | Function | クリックハンドラ |


#### setColdFrame (x, y, width, height)
コールド(非アクティブ)の枠を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### setHotFrame (x, y, width, height)
ホット(アクティブ)の枠を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### setupFrames ()
**@MZ** フレームの準備。


#### update ()
オーバーライド:[Sprite_Clickable](Sprite_Clickable.md#update-)


#### updateFrame ()
ボタン枠のアップテート。


#### updateOpacity ()
**@MZ** 不透明度のアップテート。


### 廃止MVメソッド
callClickHandler (), canvasToLocalX (x),  canvasToLocalY (y), isActive (), isButtonTouched (), processTouch ()
