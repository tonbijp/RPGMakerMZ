[クラスツリー](index.md)

# クラス: Sprite

## スーパークラス: [PIXI.Sprite](PIXI.Sprite.md)

### new Sprite (bitmap)
描画のための基本オブジェクト。

PRGツクールMZでは、[ImageManager](ImageManager.md)で画像ファイルから読み込んだ[Bitmap](Bitmap.md)を、コンストラクタ引数に指定してSpriteを生成し、[Stage](Stage.md)などのコンテナオブジェクトにaddChildする、という手順で画像を表示する。

#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) |  スプライトに設定する画像 |


### サブクラス
MZになって新規クラスが増えたのとSprite_Baseが廃止された関係上、サブクラスが多い。

* [Sprite_Animation](Sprite_Animation.md)
* [Sprite_AnimationMV](Sprite_AnimationMV.md) **@MZ**
* [Sprite_Balloon](Sprite_Balloon.md) (継承位置変更)
* [Sprite_Character](Sprite_Character.md) (継承位置変更)
* [Sprite_Clickable](Sprite_Clickable.md) **@MZ**
* [Sprite_Damage](Sprite_Damage.md)
* [Sprite_Destination](Sprite_Destination.md)
* [Sprite_Gauge](Sprite_Gauge.md) **@MZ**
* [Sprite_Name](Sprite_Name.md) **@MZ**
* [Sprite_StateIcon](Sprite_StateIcon.md)
* [Sprite_StateOverlay](Sprite_StateOverlay.md) (継承位置変更)
* [Sprite_Timer](Sprite_Timer.md)
* [Sprite_Weapon](Sprite_Weapon.md) (継承位置変更)
* [Spriteset_Base](Spriteset_Base.md)
* ~~Sprite_Base~~ (廃止)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_emptyBaseTexture` |  | **@MZ** [static]  |
| `_counter` | [Number](Number.md) | [static] スプライトの(生成順)番号 |
| `spriteId` | [Number](Number.md) | スプライトID |
| `bitmap` | [Bitmap](Bitmap.md) | スプライトに設定する画像 |
| `opacity` | [Number](Number.md) | 不透明度 (0 〜 255) |
| `visible` | Boolean |  表示中か |
| `z` | [Number](Number.md) | [重なりの優先度](#重なりの優先度) |
| `blendMode` | [Number](Number.md) | [\[合成方法\]](#合成方法) (規定値:0)|
| `_bitmap` | | |
| `_blendColor` | [Array](Array.md) | ブレンドカラー [r, g, b, g]|
| `_blendMode` | | |
| `_colorFilter` | | 色フィルタ |
| `_colorTone` | [Array](Array.md) | 色調 [r, g, b, a]|
| `_frame` | [Rectangle](Rectangle.md) | 枠 |
| `_hidden` | Boolean | 隠されているか |
| `_hue` | [Number](Number.md) | 色相 (-360 〜 360) | 

#### 重なりの優先度
[Tilemap.\_comparechildorder](Tilemap.md#_comparechildorder-a-b)でソートの際に使われる。

| z | Object | 内容 |
| --- | --- | --- |
| 9 | [Sprite_Destination](Sprite_Destination.md) | タッチ位置表示 |
| 8 | [Sprite_Animation](Sprite_Animation.md) | アニメーション |
| 7 | [Sprite_Balloon](Sprite_Balloon.md) | フキダシ |
| 6 | [Sprite](Sprite.md) | 飛行船の影 |
| 5 | [Sprite_Character](Sprite_Character.md) | プライオリティ [通常キャラの上] ・立体交差の上 |
| 4 | [Sprite](Sprite.md) | 高層タイル\[☆\](レイヤー1〜4) |
| 3 | [Sprite_Character](Sprite_Character.md) | プライオリティ[通常キャラと同じ] |
| 2 | | 通常タイル(未使用) |
| 1 | [Sprite_Character](Sprite_Character.md) | プライオリティ [通常キャラの下] |
| 0 | [Sprite](Sprite.md) | 低層タイル\[○\]・\[×\](レイヤー1・2 ・影ペン・3・4 ) |

#### [合成方法]
番号は [Graphics](Graphics.md) の静的クラス定数として定義されていたが、『RPGツクールMZ』では廃止されて、[PIXI.BLEND_MODES](http://pixijs.download/release/docs/PIXI.html#.BLEND_MODES) の定数を使うようになっている。

| 番号 | 定数 | [合成方法] |
| --- | --- | --- |
| 0 | PIXI.BLEND_MODES.NORMAL | 通常 |
| 1 | PIXI.BLEND_MODES.ADD | 加算 |
| 2 | PIXI.BLEND_MODES.MULTIPLY | 乗算 |
| 3 | PIXI.BLEND_MODES.SCREEN | スクリーン |


### 廃止MVプロパティ
`voidFilter`, `opaque`, `point`, `_isPicture`, `_tintTexture`, `_context`, `_canvas`, `_realFrame`


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


### メソッド

#### _createColorFilter ()
**@MZ** 色フィルタを生成。


#### _onBitmapChange ()
**@MZ** ビットマップが変更された時のハンドラ。


#### _onBitmapLoad ()
ビットマップ読み込み時のハンドラ。


#### _refresh ()
再設定。


#### _updateColorFilter ()
**@MZ** 色フィルタをアップデート。


#### destroy ()
**@MZ** オーバーライド: [PIXI.Sprite](PIXI.Sprite.md#destroy-options)


#### getBlendColor () → {[MV.Color](MV.Color.md)}
 合成される色(r, g, b)と不透明度(a)を[ r, g, b, a ] の配列として返す。


#### getColorTone () → {[MV.Tone](MV.Tone.md)}
 補正される[色調]を返す。


#### hide ()
**@MZ** このオブジェクトを非表示。


#### initialize (bitmap)
 オブジェクト生成時の初期化。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | ビットマップ |


#### move (x, y)
 位置の指定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### setBlendColor (color)
 合成される色(r, g, b)と不透明度(a)を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [MV.Color](MV.Color.md) | [r, g, b, a] の配列 |


#### setColorTone (tone)
 補正される[色調]を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tone` | [MV.Tone](MV.Tone.md) | [色調] |


#### setHue (hue)
**@MZ** 色相を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [Number](Number.md) | 色相 (-360 〜 360) |


#### setFrame (x, y, width, height)
 保持している画像(bitmap)の表示領域を指定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  矩形枠のx座標(ピクセル) |
| `y` | [Number](Number.md) |  矩形枠のy座標(ピクセル) |
| `width` | [Number](Number.md) |  矩形枠の幅(ピクセル) |
| `height` | [Number](Number.md) |  矩形枠の高さ(ピクセル) |


#### show ()
**@MZ** このオブジェクトを表示。


#### update ()
フレーム毎のアップデート。


#### updateVisibility ()
**@MZ** 表示状態のアップデート。


### MV廃止メソッド
_createTinter (w, h), _executeTint (x, y, w, h), _isInBitmapRect (x, y, w, h), _needsTint (), _renderWebGL (renderer), _speedUpCustomBlendModes (renderer)