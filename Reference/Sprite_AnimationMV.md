[クラスツリー](index.md)

# クラス: Sprite_AnimationMV

## スーパークラス: [Sprite](Sprite.md)

| データベース| JSONデータ | 大域変数 |
| --- | --- | --- |
| [アニメーション] | [RPG.Animation](RPG.Animation.md), [RPG.Animation.Timing](RPG.Animation.Timing.md) | [$dataAnimations](global.md#dataanimations-arrayrpganimation)(配列) |
	
[アニメーション]を表示するスプライト。主に戦闘シーンで使用される。<br />
[アニメーションの表示]スクリプトコマンドからも実行される。

MZで新たに追加されたクラスだが、実態はMVの Sprite_Animation の改訂版。<br />
MZの [Sprite_Animation](Sprite_Animation.md) が実質の新たに追加されたクラス。<br />
なのでここでは、MVの Sprite_Animation に対しての変更を記述している。<br />
MVのアニメーションとの互換性を維持するために存在するが、逆に言えばMVのアニメを移植して使わないなら不要なクラス。

関連クラス: [Sprite_Base](Sprite_Base.md), [Sprite_Damage](Sprite_Damage.md), [RPG.UsableItem](RPG.UsableItem.md), [RPG.Weapon](RPG.Weapon.md), [Game_Interpreter](Game_Interpreter.md)

### new Sprite_AnimationMV ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_checker1` | Object | [static] すでに生成済みかチェック用オブジェクト {key: [RPG.Animation](RPG.Animation.md)} |
| `_checker2` | Object | [static] すでに生成済みかチェック用オブジェクト {key: [RPG.Animation](RPG.Animation.md)} |
| `_targets` | [Array](Array.md).&lt;[Sprite_Base](Sprite_Base.md)&gt; | **@MZ** 対象 |
| `_animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |
| `_mirror` | Boolean | 左右反転するか |
| `_delay` | [Number](Number.md) | 表示時間 |
| `_rate` | [Number](Number.md) | 表示レート(規定値:4フレーム) |
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

### 廃止MVプロパティ
`_target`

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


### メソッド

#### absoluteX () → {[Number](Number.md)}
x座標の絶対値を返す。


#### absoluteY () → {[Number](Number.md)}
y座標の絶対値を返す。


#### createCellSprites ()
セル用のスプライトを生成。


#### createScreenFlashSprite ()
画面に対するフラッシュ用のスプライトを生成。


#### currentFrameIndex () → {[Number](Number.md)}
現在のフレーム番号を返す。


#### initialize ()
オーバーライド: [Sprite](Sprite.md#initialize-)

 
#### initMembers ()
メンバ変数の初期化。


#### isPlaying () → {Boolean}
アニメーションが再生中か。


#### isReady () → {Boolean}
アニメーションの準備ができているか。


#### loadBitmaps ()
アニメーション用の画像の読み込み。


#### onEnd ()
**@MZ** アニメーション終了時のハンドラ。


#### processTimingData (timing)
[SEとフラッシュのタイミング]データの実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `timing` | [RPG.Animation.Timing](RPG.Animation.Timing.md) | [SEとフラッシュのタイミング] |


#### setup (targets, animation, mirror, delay)
アニメーションの準備。<br />
MVではtarget単体だったのが、複数になっている。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `targets` | [Array](Array.md).&lt;[Sprite_Base](Sprite_Base.md)&gt; | **@MZ** 対象 |
| `animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |
| `mirror` | Boolean | 左右反転するか |
| `delay` | [Number](Number.md) | 表示時間 |


#### setupDuration ()
継続時間の設定。


#### setupRate ()
表示レート(フレーム)の設定(規定値:4)


#### startFlash (color, duration)
フラッシュの開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 色の配列 [ 赤, 緑, 青, 強さ ] |
| `duration` | [Number](Number.md) | 継続時間 |


#### startHiding (duration)
対象を隠す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | 継続時間 |


#### startScreenFlash (color, duration)
画面のフラッシュの開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 色の配列 [ 赤, 緑, 青, 強さ ] |
| `duration` | [Number](Number.md) | 継続時間 |


#### update ()
オーバーライド: [Sprite](Sprite.md#update-)


#### updateAllCellSprites (frame)
全セルスプライトの更新。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `frame` | [Array](Array.md).&lt;[Array](Array.md).&lt;[Number](Number.md)&gt;&gt; | [フレーム情報](RPG.Animation.md#フレーム情報)のセル番号以降 |


#### updateCellSprite (sprite, cell)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  |
| `cell` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  |


#### updateFlash ()
フラッシュの更新。


#### updateFrame ()
フレームの更新。


#### updateHiding ()
対象消去の更新。


#### updateMain ()
主要な更新。


#### updatePosition ()
位置の更新。


#### updateScreenFlash ()
画面のフラッシュの更新。



### 廃止MVメソッド
createSprites (),
remove ()

