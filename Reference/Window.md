[クラスツリー](index.md)

# クラス: Window

## スーパークラス: [PIXI.Container](PIXI.Container.md)

ゲーム内で使われるウィンドウ。ブラウザやその他アプリケーションのウィンドウではない。<br />
通常 [WindowLayer](WindowLayer.md) に含まれ、内部に以下のような形で画像を持っている。重なり順で並べていてポーズサインが一番画面手前で、ウィンドウ背景が一番奥だ。

* `_pauseSignSprite` ポーズサイン
* `_upArrowSprite` 上向き矢印
* `_downArrowSprite` 下向き矢印
* `_clientArea` クライアントエリア
	* `_contentsSprite` 内容
		*  `contents` ( `_contentsSprite.bitmap` )
	* `_cursorSprite` コマンド選択カーソル
		* `_cursorSprite.children`( [Sprite](Sprite.md) × 9 ) カーソル枠を構成する9スライスのパーツ
	* `_contentsBackSprite` 項目の背景
		* `contentsBack`  ( `_contentsBackSprite.bitmap` )
* `_container` ウィンドウ
	* `_frameSprite` ウィンドウ枠
		* `_frameSprite.children`( [Sprite](Sprite.md) × 8 ) ウィンドウ枠を構成する9スライスのパーツ
	* `_backSprite` ウィンドウ背景
		*  `_backSprite.children`( [TilingSprite](TilingSprite.md)×1 ) 繰り返しパターン用

このうち `contents` を書き換えることで、メッセージやアイコンなどの表示内容を変更する。<br />
『RPGツクールMV』と要素はほぼ同じだが、大きく構成が変わっている。

`contentsBack` はMZで追加されたもので、ウィンドウに表示されるコマンドやステータスといった項目の後ろに表示される背景。

opacity系のプロパティは、対象スプライトの alpha プロパティを読み書きしているだけ。

v1.2.0、v1.3.0 で変更あり。

関連クラス: [Graphics](Graphics.md), [Scene_Base](Scene_Base.md)

### new Window ()

### サブクラス

* [Window_Base](Window_Base.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `active` | Boolean | ウィンドウがアクティブか |
| `openness` | [Number](Number.md) | `_container`の開放度(0 〜 255) |
| `contents` | [Bitmap](Bitmap.md) | 内容( `_contentsSprite` )の画像 |
| `contentsBack` | [Bitmap](Bitmap.md) | **@MZ** 項目の背景( `_contentsBackSprite` )の画像 |
| `windowskin` | [Bitmap](Bitmap.md) | ウィンドウのスキン画像(img/system/Window.png)  |
| `pause` | Boolean | ポーズサインが表示中か |
| `downArrowVisible` | Boolean | 下向きスクロールアローが表示中か|
| `upArrowVisible` | Boolean | 上むきスクロールアローが表示中か |
| `opacity` | [Number](Number.md) | ウィンドウ( `_container` ) の不透明度(0 〜 255) |
| `backOpacity` | [Number](Number.md) | ウィンドウ背景( `_backSprite` ) の不透明度(0 〜 255)(規定値:192) |
| `contentsOpacity` | [Number](Number.md) | 内容( `_contentsSprite` ) の不透明度(0 〜 255) |
| `origin` | [Point](Point.md) | スクロールの際のウィンドウの原点 |
| `margin` | [Number](Number.md) | ウィンドウ端から背景までの幅(規定値:4ピクセル) |
| `padding` | [Number](Number.md) | ウィンドウ端からコンテンツまでの幅(規定値:12ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |
| `innerWidth` | [Number](Number.md) | **@MZ** [read-only]クライアントエリアの幅(width - padding * 2 ) |
| `innerHeight` | [Number](Number.md) | **@MZ** [read-only]クライアントエリアの高さ(height - padding * 2 ) |
| `innerRect` | [Rectangle](Rectangle.md) | **@MZ** [read-only]クライアントエリアの矩形範囲 |
| `_isWindow` | Boolean | ウィンドウか |
| `_windowskin` | [Bitmap](Bitmap.md) |  |
| `_width` | [Number](Number.md) |  |
| `_height` | [Number](Number.md) |  |
| `_innerChildren` | [Array](Array.md).&lt;Object&gt; | **@MZ** クライアントエリアの子オブジェクトの配列 |
| `_cursorRect` | [Rectangle](Rectangle.md) | 項目選択カーソルの矩形範囲 |
| `_openness` | [Number](Number.md) |  |
| `_animationCount` | [Number](Number.md) | アニメーションカウント |
| `_padding` | [Number](Number.md) |  |
| `_margin` | [Number](Number.md) |  |
| `_colorTone` | [MV.Tone](MV.Tone.md) | [色調] |
| `_container` | [PIXI.Container](http://pixijs.download/v5.3.12/docs/PIXI.Container.html) | **@MZ** ウィンドウ画像コンテナ |
| `_backSprite` | [Sprite](Sprite.md) | **@MZ** ウィンドウ背景 |
| `_cursorSprite` | [Sprite](Sprite.md) | **@MZ** コマンド選択カーソル |
| `_frameSprite` | [Sprite](Sprite.md) | **@MZ** ウィンドウ枠 |
| `_clientArea` |  [PIXI.Container](http://pixijs.download/v5.3.12/docs/PIXI.Container.html) | **@MZ** 内容( `contents` を含む ) |
| `_contentsBackSprite` | [Sprite](Sprite.md) | **@MZ** 項目の背景 |
| `_contentsSprite` | [Sprite](Sprite.md) | **@MZ** 内容 |
| `_pauseSignSprite` | [Sprite](Sprite.md) | **@MZ** ポーズサイン |
| `_downArrowSprite` | [Sprite](Sprite.md) | 下向き矢印 |
| `_upArrowSprite` | [Sprite](Sprite.md) | 上向き矢印 |


### 廃止MVプロパティ
MZでは、ほぼ同じものがwindowを省略する形で採用されている。

`_windowPauseSignSprite`, `_windowCursorSprite`, `_windowSpriteContainer`, `_windowFrameSprite`,  `_windowContentsSprite`, `_windowBackSprite`, `_arrowSprites`



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
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)


### メソッド

####  _createAllParts ()
ウィンドウの表示に必要な部品を生成する。


####  _createArrowSprites ()
**@MZ** 矢印(_downArrowSprite, _upArrowSprite)を生成する。


####  _createBackSprite ()
**@MZ** ウィンドウ背景(_backSprite)を生成する。


####  _createContainer ()
**@MZ** ウィンドウコンテナ(_container)を生成する。


####  _createClientArea ()
**@MZ** クライアントエリア(_clientArea)を生成する。


####  _createContentsSprite ()
**@MZ** 内容(_contentsSprite)を生成する。


####  _createContentsBackSprite ()
**@MZ** 項目の背景(_contentsBackSprite)を生成する。


####  _createCursorSprite ()
**@MZ** カーソル(_cursorSprite)を生成する。


####  _createFrameSprite ()
**@MZ** ウィンドウ枠(_frameSprite)を生成する。


####  _createPauseSignSprites ()
**@MZ** ポーズサイン(_pauseSignSprite)を生成する。


####  _makeCursorAlpha () → {Number}
**@MZ** アニメーションのカウントに応じてカーソルの不透明度を変更し、基本不透明度(0 〜 1)を返す。


####  _onWindowskinLoad ()
スキンがダウンロードされた時のハンドラ。


####  _refreshAllParts ()
部品の再描画。


####  _refreshArrows ()
矢印の再描画。


####  _refreshBack ()
背景の再描画。


####  _refreshCursor ()
カーソルの再描画。


####  _refreshFrame ()
枠の再描画。


####  _refreshPauseSign ()
ポーズサインの再描画。


####  _setRectPartsGeometry (sprite, srect, drect, m)
**@MZ** 指定スプライトに枠を設定。<br />
`sprite`は事前に`children`に8つの[Sprite](Sprite.md)  を用意したオブジェクトを指定する必要がある。<br />
具体的にはプロパティ `_cursorSprite`か `_frameSprite`を指定する。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md)  | 9スライス枠用スプライト |
| `srect` | [MV.Rectangle](MV.Rectangle.md) | スキン画像から切り取る矩形範囲 |
| `drect` | [MV.Rectangle](MV.Rectangle.md) | 配置する矩形範囲 |
| `m` | [Number](Number.md) | 枠画像の幅(ピクセル) |


####  _updateArrows ()
矢印の更新。


####  _updateClientArea ()
**@MZ** クライアントエリアの更新。


####  _updateContents ()
内容の更新。


####  _updateContentsBack ()
**@MZ** 項目の背景の更新。


####  _updateCursor ()
カーソルの更新。


####  _updateFilterArea ()
**@MZ** クライアントエリアのフィルタの更新


####  _updateFrame ()
**@MZ** ウィンドウ枠の更新


####  _updatePauseSign ()
ポーズサインの更新。


#### addChildToBack (child) → {Object}
ウィンドウ( `_container` )とクライアントエリアの間に子オブジェクトを追加し、追加されたオブジェクトを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](PIXI.DisplayObject.md)  | 追加するオブジェクト |


#### addInnerChild (child) → {Object}
**@MZ** クライアントエリアに子オブジェクトを追加し、追加されたオブジェクトを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `child` | [PIXI.DisplayObject](PIXI.DisplayObject.md)  | 追加するオブジェクト |


#### destroy ()
**@MZ** オーバーライド: [PIXI.Container](PIXI.Container.md#destroy-)


#### drawShape (graphics)
**@MZ** 指定グラフィックをウィンドウの大きさの白い矩形で塗る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `graphics` | [PIXI.Graphics](PIXI.Graphics.md)  | 描画するオブジェクト |


#### initialize ()
 オブジェクト生成時の初期化。


#### isClosed () → {Boolean}
ウィンドウが完全に閉じているか。<br />
つまり、openness === 0 であるか。


#### isOpen () → {Boolean}

ウィンドウが完全に開いているか。<br />
つまり、openness === 255 であるか。


#### move (x, y, width opt, height opt)
指定した位置と大きさにウィンドウを変更。

##### 引数

| 名前 | 型 | 特性 | 規定値 | 説明 |
| --- | --- | --- | --- | --- |
| `x` | [Number](Number.md) |  |  | ウィンドウ x座標(ピクセル) |
| `y` | [Number](Number.md) |  |  | ウィンドウ y座標(ピクセル) |
| `width` | [Number](Number.md) | &lt;optional&gt; | 0 | ウィンドウ幅(ピクセル) |
| `height` | [Number](Number.md) | &lt;optional&gt; | 0 | ウィンドウ高さ(ピクセル) |


#### moveCursorBy (x, y)
**@MZ** 指定した距離カーソルを移動。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | カーソルx移動距離(ピクセル) |
| `y` | [Number](Number.md) | カーソルy移動距離(ピクセル) |


#### moveInnerChildrenBy (x, y)
**@MZ** 指定した距離クライアントエリアの子オブジェクトをすべて移動。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 子オブジェクトx移動距離(ピクセル) |
| `y` | [Number](Number.md) | 子オブジェクトy移動距離(ピクセル) |


#### setCursorRect (x, y, width, height)
コマンド用カーソルの位置と大きさを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | カーソル x座標(ピクセル) |
| `y` | [Number](Number.md) | カーソル y座標(ピクセル) |
| `width` | [Number](Number.md) | カーソル幅(ピクセル) |
| `height` | [Number](Number.md) | カーソル高さ(ピクセル) |


#### setTone (r, g, b)
背景の色調を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤(-255 〜 255) |
| `g` | [Number](Number.md) | 緑(-255 〜 255) |
| `b` | [Number](Number.md) | 青(-255 〜 255) |


#### update ()
フレーム毎の更新。


#### updateTransform ()
オーバーライド: [PIXI.Container](PIXI.Container.md#updatetransform-)


### MV廃止メソッド
 _refreshContents ()