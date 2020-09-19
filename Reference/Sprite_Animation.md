# Class: Sprite_Animation

## Extends: [Sprite](Sprite.md)

### new Sprite_Animation ()

| データベース| JSONデータ | 大域変数 |
| --- | --- | --- |
| [アニメーション] | [RPG.Animation](RPG.Animation.md), [RPG.Animation.Timing](RPG.Animation.Timing.md) | [$dataAnimations](global.md#dataanimations-arrayrpganimation)(配列) |
	
[アニメーション]を表示するスプライト。主に戦闘シーンで使用される。<br />
[アニメーションの表示]スクリプトコマンドからも実行される。

関連クラス: [Sprite_Base](Sprite_Base.md), [Sprite_Damage](Sprite_Damage.md), [RPG.UsableItem](RPG.UsableItem.md), [RPG.Weapon](RPG.Weapon.md), [Game_Interpreter](Game_Interpreter.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_checker1` | Object | [static] すでに生成済みかチェック用オブジェクト {key: [RPG.Animation](RPG.Animation.md)} |
| `_checker2` | Object | [static] すでに生成済みかチェック用オブジェクト {key: [RPG.Animation](RPG.Animation.md)} |
| `_target` | [Sprite_Base](Sprite_Base.md) | 対象 |
| `_animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |
| `_mirror` | Boolean | 左右反転するか |
| `_delay` | [Number](Number.md) | 表示時間 |
| `_rate` | [Number](Number.md) | 表示レート |
| `_duration` | [Number](Number.md) | 継続時間 |
| `_flashColor` | [Array](Array.md).&lt;[Number](Number.md)&gt; | フラッシュの色の配列 [ 赤, 緑, 青, 強さ ] |
| `_flashDuration` | [Number](Number.md) | フラッシュの[時間] \(1/15秒単位) |
| `_screenFlashDuration` | [Number](Number.md) | [画面]のフラッシュの継続時間 |
| `_hidingDuration` | [Number](Number.md) | [対象消去]の継続時間 |
| `_bitmap1` | [Bitmap](Bitmap.md) | [画像]1 |
| `_bitmap2` | [Bitmap](Bitmap.md) | [画像]2 |
| `_cellSprites` | [Array](Array.md).&lt;[Sprite](Sprite.md)&gt; | アニメ用スプライトの配列 |
| `_screenFlashSprite` | [ScreenSprite](ScreenSprite.md) | 画面フラッシュ用スプライト |
| `_duplicated` | Boolean | 複製か |
| `_reduceArtifacts` | Boolean | 減らすか |


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

#### [Sprite](Sprite.md)

* [\_createTinter (w, h)](Sprite.md#_createtinter-w-h)
* [\_executeTint (x, y, w, h)](Sprite.md#_executetint-x-y-w-h)
* [\_isInBitmapRect (x, y, w, h)](Sprite.md#_isinbitmaprect-x-y-w-h--boolean)
* [\_needsTint ()](Sprite.md#_needstint---boolean)
* [\_onBitmapLoad ()](Sprite.md#_onbitmapload-)
* [\_refresh ()](Sprite.md#_refresh-)
* [\_renderCanvas (renderer)](Sprite.md#_rendercanvas-renderer)
* [\_renderWebGL (renderer)](Sprite.md#_renderwebgl-renderer)
* [\_speedUpCustomBlendModes (renderer)](Sprite.md#_speedupcustomblendmodes-renderer)
* [getBlendColor ()](Sprite.md#getblendcolor---array)
* [getColorTone ()](Sprite.md#getcolortone---array)
* [move (x, y)](Sprite.md#Sprite.md#move-x-y)
* [setBlendColor (color)](Sprite.md#setblendcolor-color)
* [setColorTone (tone)](Sprite.md#setcolortone-tone)
* [setFrame (x, y, width, height)](Sprite.md#setframe-x-y-width-height)


### Methods

#### absoluteX () → {[Number](Number.md)}
x座標の絶対値を返す。

#### absoluteY () → {[Number](Number.md)}
y座標の絶対値を返す。


#### createCellSprites ()
セル用のスプライトを生成。

#### createScreenFlashSprite ()
画面に対するフラッシュ用のスプライトを生成。

#### createSprites ()
アニメーション用のスプライトのセットを生成。

#### currentFrameIndex () → {[Number](Number.md)}
現在のフレーム番号を返す。


#### initialize ()
Overrides:[Sprite](Sprite.md#initialize-)

 
#### initMembers ()
メンバ変数の初期化。


#### isPlaying () → {Boolean}
アニメーションが再生中か。

#### isReady () → {Boolean}
アニメーションの準備ができているか。

#### loadBitmaps ()
アニメーション用の画像の読み込み。

#### processTimingData (timing)
[SEとフラッシュのタイミング]データの実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `timing` | [RPG.Animation.Timing](RPG.Animation.Timing.md) | [SEとフラッシュのタイミング] |


#### remove ()
アニメーションを取り除く。


#### setup (target, animation, mirror, delay)
アニメーションの準備。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [Sprite_Base](Sprite_Base.md) | 対象 |
| `animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |
| `mirror` | Boolean | 左右反転するか |
| `delay` | [Number](Number.md) | 表示時間 |


#### setupDuration ()
継続時間の設定。


#### setupRate ()
表示レート(フレーム)の設定(規定値:4)


#### startFlash (color, duration)
フラッシュの開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 色の配列 [ 赤, 緑, 青, 強さ ] |
| `duration` | [Number](Number.md) | 継続時間 |


#### startHiding (duration)
対象を隠す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `duration` | [Number](Number.md) | 継続時間 |


#### startScreenFlash (color, duration)
画面のフラッシュの開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `color` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 色の配列 [ 赤, 緑, 青, 強さ ] |
| `duration` | [Number](Number.md) | 継続時間 |


#### update ()
Overrides:[Sprite](Sprite.md#update-)


#### updateAllCellSprites (frame)
全セルスプライトのアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `frame` | [Array](Array.md).&lt;[Array](Array.md).&lt;[Number](Number.md)&gt;&gt; | [フレーム情報](RPG.Animation.md#フレーム情報)のセル番号以降 |


#### updateCellSprite (sprite, cell)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |
| `cell` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  |


#### updateFlash ()
フラッシュのアップデート。

#### updateFrame ()
フレームのアップデート。

#### updateHiding ()
対象消去のアップデート。

#### updateMain ()
主要なアップデート。

#### updatePosition ()
位置のアップデート。

#### updateScreenFlash ()
画面のフラッシュのアップデート。


