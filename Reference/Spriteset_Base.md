[クラスツリー](index.md)

# クラス: Spriteset_Base

## スーパークラス: [Sprite](Sprite.md)

複数のスプライトを組み合わせて使うクラス。

v1.1.1、v1.2.0  で変更あり。

関連クラス: [Sprite_Picture](Sprite_Picture.md)

### new Spriteset_Base ()

### サブクラス

* [Spriteset_Battle](Spriteset_Battle.md)
* [Spriteset_Map](Spriteset_Map.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_baseSprite` | [Sprite](Sprite.md) | 基本スプライト |
| `_blackScreen` | [ScreenSprite](ScreenSprite.md) | 黒背景 |
| `_pictureContainer` | [Sprite](Sprite.md) | ピクチャコンテナ |
| `_timerSprite` | [Sprite_Timer](Sprite_Timer.md) | タイマースプライト |

### 廃止MVプロパティ
`_flashSprite`, `_fadeSprite`, `_tone`,`_toneFilter`, `_toneSprite`


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


#### animationBaseDelay () → {[Number](Number.md)}
**@MZ** 基本遅延時間( 規定値:8 )を返す。


#### animationNextDelay () → {[Number](Number.md)}
**@MZ** 次の遅延時間( 規定値:12 )を返す。


#### animationShouldMirror (target) → {Boolean}
**@MZ** アニメーション反転の必要があるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Character](Game_Character.md) | キャラクタ |


#### createAnimation (request)
**@MZ** アニメーションを生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `request` | [MV.AnimationRequest](MV.AnimationRequest.md) | アニメーション設定 |


#### createAnimationSprite (targets, animation, mirror, delay)
**@MZ** アニメーションを生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `_animationSprites` | [Array](Array.md).&lt;[Sprite](Sprite.md)&gt; | **@MZ** アニメーションスプライト |
| `targets` | [Array](Array.md).&lt;[Game_Character](Game_Character.md)&gt; | 対象 |
| `animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |
| `mirror` | Boolean | 反転するか |
| `delay` | [Number](Number.md) | 継続時間 |


#### createBaseFilters ()
**@MZ** 基本フィルタを生成。


#### createBaseSprite ()
 基本スプライトを生成。


#### createCanvasToneChanger ()
canvas [色調]変更を生成。


#### createLowerLayer ()
 基本スプライトを含む下レイヤを生成。


#### createOverallFilters ()
**@MZ** 全体のフィルタを生成。


#### createPictures ()
画像スプライトを生成。


#### createTimer ()
タイマースプライトを生成。


#### createUpperLayer ()
画像、タイマー、スクリーンスプライトを含む上レイヤを生成。


#### destroy ()
**@MZ** オーバーライド: [Sprite](Sprite.md#destroy-)


#### findTargetSprite (target) → {[Sprite](Sprite.md)}
**@MZ** 指定キャラクタが設定されているスプライトを検索して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Character](Game_Character.md) | キャラクタ |


#### initialize ()
オーバーライド: [Sprite](Sprite.md#initialize-)


#### isAnimationForEach (animation) → {Boolean}
**@MZ** 指定アニメーションデータが個別対象か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |


#### isAnimationPlaying ()
**@MZ** アニメーションが再生中か。


#### isMVAnimation (animation) → {Boolean}
**@MZ** 指定アニメーションデータがMVアニメーションか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `animation` | [RPG.Animation](RPG.Animation.md) | アニメーションデータ |


#### lastAnimationSprite () → {[Sprite](Sprite.md)}
**@MZ** 最後のアニメーションスプライトを返す。<br />
[Sprite_Animation](Sprite_Animation.md) もしくは [Sprite_AnimationMV](Sprite_AnimationMV.md)


#### loadSystemImages ()
**@MZ** システム画像を読み込む。


#### makeTargetSprites (targets) → {[Array](Array.md).&lt;[Sprite](Sprite.md)&gt;}
**@MZ** 指定のスプライトを検索して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `targets` | [Array](Array.md).&lt;[Game_Character](Game_Character.md)&gt; | 対象 |


#### pictureContainerRect () → {[Rectangle](Rectangle.md)}
**@MZ** 描画領域の矩形範囲を返す。


#### processAnimationRequests ()
**@MZ** 要請されたアニメーションを実行。


#### removeAllAnimations ()
**@MZ** 全てのアニメーションスプライトを削除。


#### removeAnimation (sprite)
**@MZ** 指定アニメーションスプライトを削除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) | 削除対象 |


#### update ()
オーバーライド: [Sprite](Sprite.md#update-)


#### updateAnimations ()
**@MZ** アニメーションを更新。


#### updateBaseFilters ()
**@MZ** 基本フィルタを更新。


#### updateOverallFilters ()
**@MZ** 全体のフィルタを更新。


#### updatePosition ()
位置を更新。



### 廃止MVメソッド
createScreenSprites (), createToneChanger (), createWebGLToneChanger (), updateCanvasToneChanger (), updateScreenSprites (), updateToneChanger (), updateWebGLToneChanger ()
