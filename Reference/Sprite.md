# Class: Sprite

## Extends: [PIXI.Sprite](PIXI.Sprite.md)

### new Sprite (bitmap)
描画のための基本オブジェクト。

PRGツクールMVでは、[ImageManager](ImageManager.md)で画像ファイルから読み込んだ[Bitmap](Bitmap.md)を、コンストラクタ引数に指定してSpriteを生成し、[Stage](Stage.md)などのコンテナオブジェクトにaddChildする、という手順で画像を表示する。

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  スプライトに設定する画像 |


### Sub Classes

* [Sprite_Animation](Sprite_Animation.md)
* [Sprite_Button](Sprite_Button.md)
* [Sprite_Damage](Sprite_Damage.md)
* [Sprite_Destination](Sprite_Destination.md)
* [Sprite_Picture](Sprite_Picture.md)
* [Sprite_StateIcon](Sprite_StateIcon.md)
* [Sprite_Timer](Sprite_Timer.md)
* [Spriteset_Base](Spriteset_Base.md)
* [Sprite_Base](Sprite_Base.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_counter` | [Number](Number.md) | [static] スプライトの(生成順)番号 |
| `voidFilter` | [PIXI.filters.VoidFilter](http://pixijs.download/dev/docs/PIXI.filters.VoidFilter.html) | [static] |
| `spriteId` | [Number](Number.md) | スプライトID |
| `opaque` | Boolean | 不[透明状態]か |
| `bitmap` | [Bitmap](Bitmap.md) | スプライトに設定する画像 |
| `opacity` | [Number](Number.md) | 不透明度 (0 〜 255) |
| `visible` | Boolean |  表示中か |
| `z` | [Number](Number.md) | [重なりの優先度](Sprite.md#重なりの優先度) |
| `point` | [Point](Point.md) | 位置(x, y を同時に指定) [PIXI.DisplayObject](PIXI.DisplayObject.md)のpositionと同じ |
| `blendMode` | [Number](Number.md) | [[合成方法]](Sprite.md#合成方法) |

#### 重なりの優先度
[Tilemap.\_comparechildorder](Tilemap.md#_comparechildorder-a-b)でソートの際に使われる。

| z | Object | 内容 |
| --- | --- | --- |
| 9 | [Sprite_Destination](Sprite_Destination.md) | タッチ位置表示 |
| 8 | [Sprite_Animation](Sprite_Animation.md) | アニメーション |
| 7 | [Sprite_Balloon](Sprite_Balloon.md) | フキダシ |
| 6 | [Sprite](Sprite.md) | 飛行船の影 |
| 5 | [Sprite_Character](Sprite_Character.md) | プライオリティ [通常キャラの上] ・立体交差の上 |
| 4 | [Sprite](Sprite.md) | 高層タイル[☆] |
| 3 | [Sprite_Character](Sprite_Character.md) | プライオリティ[通常キャラと同じ] |
| 2 | | 通常タイル(未使用) |
| 1 | [Sprite_Character](Sprite_Character.md) | プライオリティ [通常キャラの下] |
| 0 | [Sprite](Sprite.md) | 低層タイル( A・影ペン・[○]・[×] ) |

#### [合成方法]
番号は [Graphics](Graphics.md) の静的クラス定数として定義されている。例えば Graphics.BLEND_ADD の形で使う。

| 番号 | 定数 | [合成方法] |
| --- | --- | --- |
| 0 | BLEND_NORMAL | 通常 |
| 1 | BLEND_ADD | 加算 |
| 2 | BLEND_MULTIPLY | 乗算 |
| 3 | BLEND_SCREEN | スクリーン |


### Inherited From

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
* [destroy (options)](PIXI.Sprite.md#destroy-options)
* [getLocalBounds (rect)](PIXI.Sprite.md#getlocalbounds-rect--pixirectangle)
* [renderCanvas (renderer)](PIXI.Sprite.md#rendercanvas-renderer)


### Methods

#### _createTinter (w, h)
指定の幅と高さで矩形枠を生成。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `w` | [Number](Number.md) | 幅(ピクセル) |
| `h` | [Number](Number.md) | 高さ(ピクセル) |


#### _executeTint (x, y, w, h)
指定した矩形枠に[色調]変化を適用。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `w` | [Number](Number.md) | 幅(ピクセル) |
| `h` | [Number](Number.md) | 高さ(ピクセル) |


#### _isInBitmapRect (x, y, w, h) → {Boolean}
指定した矩形枠内にいるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `w` | [Number](Number.md) | 幅(ピクセル) |
| `h` | [Number](Number.md) | 高さ(ピクセル) |


#### _needsTint () → {Boolean}
[色調]変化が必要か。


#### _onBitmapLoad ()
ビットマップ読み込み時に呼ばれるハンドラ。


#### _refresh ()
再設定。


#### _renderCanvas (renderer)
Overrides: [PIXI.Container](PIXI.Container.md#_rendercanvas-renderer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object | レンダラ |


#### _renderWebGL (renderer)
WebGL でレンダリング。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object | レンダラ |


#### _speedUpCustomBlendModes (renderer)
カスタムブレンドモードのスピードアップの要不要をチェック。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `renderer` | Object | レンダラ |


#### getBlendColor () → {[MV.Color](MV.Color.md)}
 合成される色(r, g, b)と不透明度(a)を[ r, g, b, a ] の配列として返す。


#### getColorTone () → {[MV.Tone](MV.Tone.md)}
 補正される[色調]を返す。


#### initialize (bitmap)
 オブジェクト生成時の初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | ビットマップ |


#### move (x, y)
 位置の指定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### setBlendColor (color)
 合成される色(r, g, b)と不透明度(a)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md) | [r, g, b, a] の配列 |


#### setColorTone (tone)
 補正される[色調]を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tone` | [MV.Tone](MV.Tone.md) | [色調] |


#### setFrame (x, y, width, height)
 保持している画像(bitmap)の表示領域を指定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  矩形枠のx座標(ピクセル) |
| `y` | [Number](Number.md) |  矩形枠のy座標(ピクセル) |
| `width` | [Number](Number.md) |  矩形枠の幅(ピクセル) |
| `height` | [Number](Number.md) |  矩形枠の高さ(ピクセル) |


#### update ()
 フレーム毎のアップデート。


