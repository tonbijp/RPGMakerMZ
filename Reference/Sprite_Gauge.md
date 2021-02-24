[クラスツリー](index.md)

# クラス: Sprite_Gauge

## スーパークラス: [Sprite](Sprite.md)

### new Sprite_Gauge ()
ゲージ表示用のスプライト。ラベル・ゲージ・数値で構成される。

v1.1.0 で変更あり。

関連クラス: [Spriteset_Battle](Spriteset_Battle.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_battler` | [Game_Battler](Game_Battler.md) | バトラー |
| `_statusType` | [String](String.md) | [ステータスの種類](#ステータスの種類) |
| `_value` | [Number](Number.md) | 現在値 |
| `_maxValue` | [Number](Number.md) | 最大値 |
| `_targetValue` | [Number](Number.md) | 目標値 |
| `_targetMaxValue` | [Number](Number.md) | 目標最大値 |
| `_duration` | [Number](Number.md) | 遅延時間 |
| `_flashingCount` | [Number](Number.md) | カウント |

#### ステータスの種類

| 文字列 | ラベル | 説明 |
| --- | --- | --- |
| "hp" | [HP (略)] | HPの値 |
| "mp" | [MP (略)] | MPの値 |
| "tp" | [TP (略)] | TPの値 |
| "time" | なし | TPBでの経過時間 |


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



### メソッド


#### bitmapHeight () → {[Number](Number.md)}
画像表示領域の高さ(規定値:24ピクセル)を返す。


#### bitmapWidth () → {[Number](Number.md)}
画像表示領域の幅(規定値:128ピクセル)を返す。


#### createBitmap ()
画像表示領域を生成。


#### currentMaxValue () → {[Number](Number.md)}
現在の最大値を返す。


#### currentValue () → {[Number](Number.md)}
現在の値を返す。


#### destroy ()
オーバーライド: [Sprite](Sprite.md#destroy-)


#### drawLabel ()
ラベルの描画。


#### drawGauge ()
ゲージの描画。


#### drawValue ()
数値の描画。


#### drawGaugeRect (x, y, width, height)
ゲージのバー描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### flashingColor1 () → {[MV.Color](MV.Color.md)}
またたきの色1(規定値:[255, 255, 255, 64])を返す。


#### flashingColor2 () → {[MV.Color](MV.Color.md)}
またたきの色2(規定値:[0, 0, 255, 48])を返す。


#### gaugeBackColor () → {[MV.CssColor](MV.CssColor.md)}
ゲージの黒色を返す。


#### gaugeColor1 () → {[MV.CssColor](MV.CssColor.md)}
ゲージ色1を返す。


#### gaugeColor2 () → {[MV.CssColor](MV.CssColor.md)}
ゲージ色2を返す。


#### gaugeHeight () → {[Number](Number.md)}
ゲージの高さ(規定値:12ピクセル)を返す。


#### gaugeRate () → {[Number](Number.md)}
ゲージの比率(現在値/最大値)を返す。


#### gaugeX () → {[Number](Number.md)}
ゲージのx座標(time:0, それ以外:30)を返す。


#### initialize ()
オーバーライド: [Sprite](Sprite.md#initialize-)


#### initMembers ()
プロパティの初期化。


#### isValid () → {Boolean}
ゲージの設定が適当か。


#### label () → {[String](String.md)}
ラベル名を返す。


#### labelColor () → {[MV.CssColor](MV.CssColor.md)}
ラベルの色を返す。


#### labelFontFace () → {[String](String.md)}
ラベルのフォント名を返す。


#### labelFontSize () → {[Number](Number.md)}
ラベルのフォントサイズを返す。


#### labelOpacity () → {[Number](Number.md)}
ラベルの不透明度を返す([isValid()](#isValid---boolean))の状態で変わる)


#### labelOutlineColor () → {[MV.CssColor](MV.CssColor.md)}
ラベルの輪郭色を返す。


#### labelOutlineWidth () → {[Number](Number.md)}
ラベルの輪郭幅(規定値:3)を返す。


#### labelY () → {[Number](Number.md)}
ラベルのy座標(規定値:3)を返す。


#### redraw ()
再描画。


#### setup (battler, statusType)
ゲージを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `battler` | [Game_Battler](Game_Battler.md) | バトラー |
| `statusType` | [String](String.md) | [ステータスの種類](#ステータスの種類) |


#### setupLabelFont ()
ラベルフォントの準備。


#### setupValueFont ()
数値フォントの準備。


#### smoothness () → {[Number](Number.md)}
ゲージのアニメーション間隔を返す。


#### update ()
オーバーライド: [Sprite](Sprite.md#update-)


#### updateBitmap ()
画像表示領域のアップデート。


#### updateFlashing ()
またたきのアップデート。


#### updateGaugeAnimation ()
ゲージのアニメーションのアップデート。


#### updateTargetValue (value, maxValue)
対象の数値のアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | 現在値 |
| `maxValue` | [Number](Number.md) | 最大値 |


#### valueColor () → {[MV.CssColor](MV.CssColor.md)}
数値の色を返す。


#### valueFontFace () → {[String](String.md)}
数値のフォント名を返す。


#### valueFontSize () → {[Number](Number.md)}
数値のフォントサイズを返す。


#### valueOutlineColor () → {[MV.CssColor](MV.CssColor.md)}
数値の輪郭色(規定値:"rgba(0, 0, 0, 1)")を返す。


#### valueOutlineWidth () → {[Number](Number.md)}
数値の輪郭幅(規定値:2)を返す。

