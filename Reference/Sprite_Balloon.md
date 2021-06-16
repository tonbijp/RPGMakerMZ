[クラスツリー](index.md)

# クラス: Sprite_Balloon

## スーパークラス: [Sprite](Sprite.md)

フキダシアイコン(img/system/Balloon.png)のスプライト。

MV で継承元(スーパークラス)だった `Sprite_Base` は廃止されている。

関連クラス: [Spriteset_Map](Spriteset_Map.md), [Sprite_Character](Sprite_Character.md), [Game_Temp](Game_Temp.md), [Game_CharacterBase](Game_CharacterBase.md), [MV.BalloonRequest](MV.BalloonRequest.md)

### new Sprite_Balloon ()

### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `_balloonId` | [Number](Number.md) | フキダシID |
| `_duration` | [Number](Number.md) | 継続時間(フレーム) |
| `_target` | [Sprite](Sprite.md) | **@MZ** 対象スプライト |


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

#### frameIndex () → {[Number](Number.md)}
フレーム番号(0〜7)を返す。


#### initialize ()
オーバーライド: [Sprite](Sprite.md#initialize-)


#### initMembers ()
メンバ変数を初期化。


#### isPlaying () → {Boolean}
再生中か。


#### loadBitmap ()
画像の読み込み。


#### setup (targetSprite, balloonId)
準備。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `targetSprite` | [Sprite](Sprite.md) | **@MZ** 対象スプライト |
| `balloonId` | [Number](Number.md) | フキダシID |


#### speed () → {[Number](Number.md)}
1パターンの表示時間(規定値:8フレーム)を返す。


#### update ()
オーバーライド: [Sprite](Sprite.md#update-)


#### updateFrame ()
画像の更新。


#### updatePosition ()
**@MZ** 位置の更新。


#### waitTime () → {[Number](Number.md)}
アニメーション後の待ち時間(規定値: 12フレーム)を返す。


