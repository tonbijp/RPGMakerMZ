[クラスツリー](index.md)

# クラス: Sprite_Damage

## スーパークラス: [Sprite](Sprite.md)

ダメージ数値をポップアップさせるスプライト。

MVでは画像で数値を表示していたが、MZではフォントを利用。

関連クラス: [Sprite_Animation](Sprite_Animation.md), [Sprite_Battler](Sprite_Battler.md)

### new Sprite_Damage ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_colorType` | [Number](Number.md) |  **@MZ** ダメージタイプ (0:HP↓, 1:HP↑, 2:MP↓, 2:MP↑) |
| `_duration` | [Number](Number.md) | 継続時間 |
| `_flashColor` | [Array](Array.md).&lt;[Number](Number.md)&gt; | フラッシュの色の配列 [ 赤, 緑, 青, 強さ ] |
| `_flashDuration` | [Number](Number.md) | フラッシュの[時間] \(1/15秒単位) |

### 廃止MVプロパティ
`_damageBitmap` 


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

#### createBitmap (width, height) → {[Bitmap](Bitmap.md)}
**@MZ** ビットマップを生成して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### createChildSprite (width, height) → {[Sprite](Sprite.md)}
ダメージ画像スプライトを生成して子に追加して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### createDigits (value)
指定行位置に数値スプライトを生成。<br />
MVの `baseRow` 引数は廃止。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | 数値 |


#### createMiss ()
ミスのスプライトを生成。


#### damageColor () → {[MV.CssColor](MV.CssColor.md)}
**@MZ** ダメージ数値の色を返す。


#### destroy ()
**@MZ** オーバーライド: [Sprite](Sprite.md#destroy-)


#### fontFace () → {[String](String.md)}
**@MZ** 数字フォント名を , で連結した文字列を返す。


#### fontSize () → {[Number](Number.md)}
**@MZ** 数字フォントサイズを返す。


#### initialize ()
オーバーライド: [Sprite](Sprite.md#initialize-)


#### isPlaying () → {Boolean}
再生されているか。


#### outlineColor () → {[MV.CssColor](MV.CssColor.md)}
**@MZ** ダメージ数値の輪郭色(規定値: "rgba(0, 0, 0, 0.7)")を返す。


#### outlineWidth () → {[Number](Number.md)}
**@MZ** ダメージ数値の輪郭幅(規定値: 4)を返す。


#### setup (target)
対象に対する準備。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Actor](Game_Actor.md) | 対象アクター |


#### setupCriticalEffect ()
クリティカル効果の準備。


#### update ()
オーバーライド: [Sprite](Sprite.md#update-)


#### updateChild (sprite)
指定小スプライトをアップデート。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) | 小スプライト |


#### updateFlash ()
フラッシュをアップデート。


#### updateOpacity ()
不透明度をアップデート。



### 廃止MVメソッド
digitHeight (), digitWidth ()