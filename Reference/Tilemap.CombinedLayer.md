[クラスツリー](index.md)

# クラス: [Tilemap](Tilemap.md).CombinedLayer

## スーパークラス: [PIXI.Container](PIXI.Container.md)

1.7.0で導入された、マップで扱われるタイルの下層(通行判定○・×)と上層(通行判定☆)を表示するクラス。<br />
[Tilemap.Layer](Tilemap.Layer.md) を `children` プロパティに含む。

`Tilemap.Layer.MAX_SIZE`に設定された上限(16000)までで`Tilemap.Layer`を複数に分ける目的で存在する。<br />
操作に必要なメソッドは`children`に含まれる`Tilemap.Layer`に丸投げしているので、ほぼ`Tilemap.Layer`そのものと思って使える。

主なパス
```js
SceneManager._scene._spriteset._tilemap._upperLayer
SceneManager._scene._spriteset._tilemap._lowerLayer
```

関連クラス: [RPG.Map](RPG.Map.md), [RPG.Tileset](RPG.Tileset.md), [Game_Map](Game_Map.md), [Spriteset_Map](Spriteset_Map.md),
[Tilemap.Renderer](Tilemap.Renderer.md)

### new Tilemap.CombinedLayer ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `children` | [Array](Array.md).&lt;[Tilemap.Layer](Tilemap.Layer.md)&gt; | レイヤー |


### スーパークラスから継承されたメソッド

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
* [getLocalBounds (rect)](PIXI.DisplayObject.md#getlocalbounds-rect--pixirectangle)
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
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)


### メソッド

#### addRect (setNumber, sx, sy, dx, dy, w, h)
タイルセット中の矩形(タイル)範囲を設定。(参照: [MV.TileRect](MV.TileRect.md))

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `setNumber` | [Number](Number.md) | タイルセットの区分番号(0〜8)<br />A1:0, A2:1, A3:2, A4:3, A5:4, B:5,C:6, D:7, E:8 |
| `sx` | [Number](Number.md) |  タイルセット画像の x位置(ピクセル) |
| `sy` | [Number](Number.md) |  タイルセット画像の y位置(ピクセル) |
| `dx` | [Number](Number.md) | レイヤー内の x座標(ピクセル) |
| `dy` | [Number](Number.md) | レイヤー内の y座標(ピクセル) |
| `w` | [Number](Number.md) |  タイルの幅(ピクセル) |
| `h` | [Number](Number.md) |  タイルの高さ(ピクセル) |


#### destroy ()
オーバーライド: [PIXI.Container](PIXI.Container.md#destroy-)


#### initialize ()
オーバーライド: [PIXI.Container](PIXI.Container.md#initialize-)


#### isReady () → {Boolean}
準備ができているか。


#### setBitmaps (bitmaps)
タイルセット画像の設定。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `bitmaps` | [Array](Array.md).&lt;[Bitmap](Bitmap.md)&gt; |  タイルセットのビットマップの配列 |


#### size ()→ {[Number](Number.md)}
内容のある要素(`children`)数を返す。

#### clear ()
画像の消去。
