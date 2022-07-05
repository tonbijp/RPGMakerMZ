[クラスツリー](index.md)

# クラス: Sprite_Animation

## スーパークラス: [Sprite](Sprite.md)

| データベース| JSONデータ | 大域変数 |
| --- | --- | --- |
| [アニメーション] | [RPG.Animation](RPG.Animation.md), [RPG.Animation.Timing](RPG.Animation.Timing.md) | [$dataAnimations](global.md#dataanimations-arrayrpganimation)(配列) |
	
[アニメーション]を表示するスプライト。主に戦闘シーンで使用される。<br />
[アニメーションの表示]スクリプトコマンドからも実行される。

[重なりの優先度](Sprite.md#重なりの優先度) `z` プロパティの値は 8。

名前は同じだが本クラスは [Effekseer](https://effekseer.github.io/jp/) 用に新たに作られたクラスで、MVの時のクラスは [Sprite_AnimationMV](Sprite_AnimationMV.md) に名称変更されている。<br />
なのでプロパティ・メソッドに **@MZ** 表記はつけず、新規クラスとして記述する。<br />
内容についてはカンでテキトーに書いているので信用しないでください。他のところもそうですけど、ここは特に何もわからずに書いてます(笑)

v1.1.0、v1.2.0、v1.3.3、v1.4.0 で変更あり。

関連クラス: [EffectManager](EffectManager.md), [Spriteset_Base](Spriteset_Base.md), [Sprite_Damage](Sprite_Damage.md), [RPG.UsableItem](RPG.UsableItem.md), [RPG.Weapon](RPG.Weapon.md), [Game_Interpreter](Game_Interpreter.md)

### new Sprite_Animation ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_targets` | [Array](Array.md).&lt;[Sprite](Sprite.md)&gt; | 対象 |
| `_animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |
| `_mirror` | Boolean | 左右反転するか |
| `_delay` | [Number](Number.md) | 表示時間 |
| `_previous` | [Sprite_Animation](Sprite_Animation.md) | 直前のアニメーションクラス |
| `_effect` |  EffekseerEffect | Effekseerエフェクト |
| `_handle` | EffekseerHandle | Effekseerハンドル(位置・回転・拡大率・速度のデータを持ったクラス) |
| `_playing` | Boolean | アニメーション再生(準備中も含む)中か |
| `_started` | Boolean | アニメーション開始されているか |
| `_frameIndex` | [Number](Number.md) | フレーム番号 |
| `_maxTimingFrames` | [Number](Number.md) | 最大フレーム |
| `_flashColor` | [Array](Array.md).&lt;[Number](Number.md)&gt; | フラッシュの色の配列 [ 赤, 緑, 青, 強さ ] |
| `_flashDuration` | [Number](Number.md) | フラッシュの[時間] \(1/15秒単位) |
| `_viewportSize` | [Number](Number.md) | ビューポートサイズ(規定値:4096) |
| `_originalViewport` | [Array](Array.md).&lt;[Number](Number.md)&gt; | **@MZ 1.3.3** で廃止。ビューポート[ x, y, 幅, 高さ ] |


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

#### _render (renderer) 
レンダリング実行。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### canStart () → {Boolean}
開始可能か。


#### checkEnd ()
アニメーションが終わっていたら終了状態にする。


#### destroy ()
オーバーライド: [Sprite](Sprite.md#destroy-)


#### initialize ()
オーバーライド: [Sprite](Sprite.md#initialize-)

 
#### initMembers ()
メンバ変数の初期化。


#### isPlaying () → {Boolean}
アニメーションが再生中か。


#### onAfterRender (renderer)
レンダリング終了後のハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### onBeforeRender (renderer)
レンダリング開始前のハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### processFlashTimings ()
[SEとフラッシュのタイミング]データのフラッシュを実行。


#### processSoundTimings ()
[SEとフラッシュのタイミング]データのSEを実行。


#### resetViewport (renderer)
ビューポートを再設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### saveViewport (renderer)
**@MZ 1.3.3** で廃止。<br />
ビューポートを(_originalViewportに)保存。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### setCameraMatrix (renderer) 
レンダラにカメラ行列を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ(未使用) |


#### setProjectionMatrix (renderer) 
レンダラにプロジェクション行列を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### setRotation (x, y, z)
ハンドルに回転を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` |  [Number](Number.md) | x回転 |
| `y` |  [Number](Number.md) | y回転 |
| `z` |  [Number](Number.md) | z回転 |


#### setViewport (renderer) 
レンダラにビューポートを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### setup (targets, animation, mirror, delay, previous)
アニメーションの準備。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `targets` | [Array](Array.md).&lt; [Sprite](Sprite.md)&gt; | 対象 |
| `animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |
| `mirror` | Boolean | 左右反転するか |
| `delay` | [Number](Number.md) | 表示時間 |
| `previous` | [Sprite_Animation](Sprite_Animation.md) | 直前のアニメーションクラス |


#### shouldWaitForPrevious () → {Boolean}
直前のアニメーションを待つ必要があるか。


#### targetPosition (renderer) → {[Point](Point.md)}
レンダラの対象位置を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) | レンダラ |


#### targetSpritePosition (sprite) → {[Point](Point.md)}
対象スプライトの位置を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) | 対象スプライト |


#### update ()
オーバーライド: [Sprite](Sprite.md#update-)


#### updateEffectGeometry ()
エフェクトジオメトリの更新。


#### updateFlash ()
フラッシュの更新。


#### updateMain ()
主要な更新。

