[クラスツリー](index.md)

# クラス: PIXI.Graphics

## スーパークラス: [PIXI.Container](PIXI.Container.md) 
線や丸などを使って画像を描くためのクラス。<br />
多くのメソッドが自分自身である `PIXI.Graphics` を返してくるのは、メソッドを「.」区切りで連続で書くメソッドチェーンを使えるようにするため。

詳細は本家 PixiJS のサイト [PIXI.Graphics](http://pixijs.download/release/docs/PIXI.Graphics.html) を参照。<br />
なお、JavaScript の [HTMLCanvasElement](https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement)クラスの描画コンテキストである [CanvasRenderingContext2D](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D) と共通するメソッドが多いので、そちらを調べても良い。


関連クラス: [ScreenSprite](ScreenSprite.md), [WindowLayer](WindowLayer.md), [PIXI.Texture](PIXI.Texture.md)

### new PIXI.Graphics (geometry opt)
#### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `geometry ` | [PIXI.GraphicsGeometry](http://pixijs.download/release/docs/PIXI.GraphicsGeometry.html) | &lt;optional&gt; | ジオメトリ |

### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `batches` | [Array](Array.md).&lt;Object&gt; | バッチ |
| `batchTint` | [Number](Number.md) | (規定値: -1) |
| `blendMode` | [Number](Number.md) | [\[合成方法\]](Sprite.md#合成方法) (規定値: [PIXI.BLEND_MODES](http://pixijs.download/release/docs/PIXI.html#.BLEND_MODES).NORMAL) |
| `currentPath` | [PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html) | 現在のパス |
| `fill` | [PIXI.FillStyle](http://pixijs.download/release/docs/PIXI.FillStyle.html) | [read-only] 塗りの形式 |
| `geometry` | [PIXI.GraphicsGeometry](http://pixijs.download/release/docs/PIXI.GraphicsGeometry.html) | ジオメトリ |
| `line` | [PIXI.LineStyle](http://pixijs.download/release/docs/PIXI.LineStyle.html) | [read-only] 線の形式 |
| `pluginName` | [String](String.md) | 規定値: "batch" |
| `shader` | [PIXI.Shader](PIXI.Shader.md) | シェーダ |
| `state` | [PIXI.State](http://pixijs.download/release/docs/PIXI.State.html) | 状態 |
| `tint` | [Number](Number.md) | 枠線の色(規定値: 0xffffff) |
| `vertexData` | Float32Array | 頂点データ |
| `graphicsData` | [Array](Array.md).&lt;[PIXI.GraphicsData](http://pixijs.download/release/docs/PIXI.GraphicsData.html)&gt; | 画像データ |
| `_fillStyle` | [PIXI.FillStyle](http://pixijs.download/release/docs/PIXI.FillStyle.html) | 塗りの形式 |
| `_holeMode` | Boolean | 穴あけモードか(規定値: false) |
| `_lineStyle` | [PIXI.LineStyle](http://pixijs.download/release/docs/PIXI.LineStyle.html) | 線の形式 |
| `_matrix` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html) | 変形行列 |

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

* [\_renderCanvas (renderer)](PIXI.Container.md#_rendercanvas-renderer)
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


### メソッド

#### _calculateBounds ()
オーバーライド:[PIXI.Container.md](PIXI.Container.md#_calculatebounds-)
 
 
#### _initCurve (x opt, y opt)
曲線の初期化。

##### 引数

| 名前 | 肩 | 特性 | 説明 |
| --- | --- | --- | --- |
| `x` | [Number](Number.md)  | &lt;optional&gt; | x座標(規定値: 0ピクセル) |
| `y` | [Number](Number.md)  | &lt;optional&gt; | y座標(規定値: 0ピクセル) |

 
#### _render (renderer)
オーバーライド:[\_render (renderer)](PIXI.Container.md#_render-renderer)


#### arc (cx, cy, radius, startAngle, endAngle, anticlockwise opt) →  {PIXI.Graphics}
円弧を描き、自分自身を返す。

##### 引数

| 名前 | 肩 | 特性 | 説明 |
| --- | --- | --- | --- |
| `cx` | [Number](Number.md) |  | 中心 x座標(ピクセル) |
| `cy` | [Number](Number.md) |  | 中心 y座標(ピクセル) |
| `radius` | [Number](Number.md) |  | 半径(ピクセル) |
| `startAngle` | [Number](Number.md) |  | 開始角度 |
| `endAngle` | [Number](Number.md) |  | 終点角度 |
| `anticlockwise` | [Number](Number.md) | &lt;optional&gt; | 反時計回りか(規定値: false) |


#### arcTo (x1, y1, x2, y2, radius) →  {PIXI.Graphics}
角丸を描き、自身を返す。<br />
直前のポイント - 中間点、中間点 - 到達点 と直線を引き、両直線に接するようにradius 半径の円弧を描く、という手順で角丸を描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x1` | [Number](Number.md) | 中間点の x座標(ピクセル) |
| `y1` | [Number](Number.md) | 中間点の y座標(ピクセル) |
| `x2` | [Number](Number.md) | 到達点の x座標(ピクセル) |
| `y2` | [Number](Number.md) | 到達点の y座標(ピクセル) |
| `radius` | [Number](Number.md) | 角丸の半径(ピクセル) |


#### beginFill (color opt, alpha opt) →  {PIXI.Graphics}
塗り潰しを開始し、自身を返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `color` | [Number](Number.md) | &lt;optional&gt; | 色(規定値: 0) |
| `alpha` | [Number](Number.md) | &lt;optional&gt; | 不透明度(規定値: 1) |


#### beginHole () →  {PIXI.Graphics}
最後に描いたシェイプの内側に穴を開け始め、自身を返す。


#### beginTextureFill (color opt, alpha opt) →  {PIXI.Graphics}
テクスチャの塗り潰しを開始し、自身を返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `color` | [Number](Number.md) \| [PIXI.Texture](PIXI.Texture.md) | &lt;optional&gt; | 塗り潰し色(規定値: 0xffffff) |
| `alpha` | [Number](Number.md) \| [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html)  | &lt;optional&gt; | 不透明度(規定値: 1) |


#### bezierCurveTo (cpX, cpY, cpX2, cpY2, toX, toY) →  {PIXI.Graphics}
3次ベジェ曲線を引き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `cpX` | [Number](Number.md) | 制御点1の x座標(ピクセル) |
| `cpY` | [Number](Number.md) | 制御点1の y座標(ピクセル) |
| `cpX2` | [Number](Number.md) | 制御点2の x座標(ピクセル) |
| `cpY2` | [Number](Number.md) | 制御点2の y座標(ピクセル) |
| `toX` | [Number](Number.md) | 到達点の x座標(ピクセル) |
| `toY` | [Number](Number.md) | 到達点の y座標(ピクセル) |


#### calculateTints ()
着色を計算。


#### calculateVertices ()
頂点を計算。


#### clear () →  {PIXI.Graphics}
画像を消去して、自身を返す。


#### clone () →  {PIXI.Graphics}
複製を作って返す。


#### closePath () →  {PIXI.Graphics}
パスを閉じて、自身を返す。


#### containsPoint (point) →  {Boolean}
指定座標が含まれるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `point ` | [PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html) |  |


#### destroy (options opt)
オーバーライド:[PIXI.Container](PIXI.Container.md#destroy-options)

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `options` | Object \| Boolean | &lt;optional&gt; | 真偽値は以下のオプション全てに同じ値が設定される |
| `options.children` | Boolean | &lt;optional&gt; | 子も破棄するか(規定値: false) |
| `options.texture` | Boolean | &lt;optional&gt; | children と texture が true だと子のテクスチャを破棄する(規定値: false) |
| `options.baseTexture` | Boolean | &lt;optional&gt; | children と baseTexture が true だと子のベーステクスチャを破棄する(規定値: false) |


#### drawCircle (x, y, radius) →  {PIXI.Graphics}
円を描き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 中心の x座標(ピクセル) |
| `y` | [Number](Number.md) | 中心の y座標(ピクセル) |
| `radius` | [Number](Number.md) | 半径(ピクセル) |


#### drawEllipse (x, y, width, height) →  {PIXI.Graphics}
楕円を描き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 中心の x座標(ピクセル) |
| `y` | [Number](Number.md) | 中心の y座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |


#### drawPolygon (path) →  {PIXI.Graphics}
多角形を描き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `path ` | [Array](Array.md).&lt;[Number](Number.md)&gt; \| [Array](Array.md).&lt;[PIXI.Point](http://pixijs.download/release/docs/PIXI.Point.html)&gt; \| [Array](Array.md).&lt;[PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html)&gt; | パス |


#### drawRect (x, y, width, height) →  {PIXI.Graphics}
四角形を描き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 中心の x座標(ピクセル) |
| `y` | [Number](Number.md) | 中心の y座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |



#### drawRoundedRect (x, y, width, height, radius) →  {PIXI.Graphics}
角丸の四角形を描き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 中心のx座標(ピクセル) |
| `y` | [Number](Number.md) | 中心のy座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |
| `height` | [Number](Number.md) | 高さ(ピクセル) |
| `radius` | [Number](Number.md) | 半径(ピクセル) |


#### drawShape (shape) →  {PIXI.Graphics}
指定された図形を描き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `shape` | [PIXI.Circle](http://pixijs.download/release/docs/PIXI.Circle.html) \| [PIXI.Ellipse](http://pixijs.download/release/docs/PIXI.Ellipse.html) \| [PIXI.Polygon](http://pixijs.download/release/docs/PIXI.Polygon.html) \| [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) \| [PIXI.RoundedRectangle](http://pixijs.download/release/docs/PIXI.RoundedRectangle.html) | 図形の形を指定するオブジェクト |


#### drawStar (x, y, points, radius, innerRadius opt, rotation opt) →  {PIXI.Graphics}
星型の図形を描き、自身を返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `x` | [Number](Number.md) |  | 中心のx座標(ピクセル) |
| `y` | [Number](Number.md) |  | 中心のy座標(ピクセル) |
| `points` | [Number](Number.md) |  | 頂点の数 |
| `radius` | [Number](Number.md) |  | 半径(ピクセル) |
| `innerRadius` | [Number](Number.md) | &lt;optional&gt; | 内側の半径(規定値: radius/2ピクセル) |
| `rotation` | [Number](Number.md) | &lt;optional&gt; | 回転角(規定値: 0ラジアン) |


#### endFill () →  {PIXI.Graphics}
塗り潰しを終了し、自身を返す。


#### endHole () →  {PIXI.Graphics}
穴あけを終了し、自身を返す。


#### finishPoly () →  {PIXI.Graphics}
多角形を終了し、自身を返す。


#### generateCanvasTexture (scaleMode, resolution) →  {[PIXI.Texture](PIXI.Texture.md)}
指定の設定でテクスチャを生成して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `scaleMode` | [Number](Number.md) | [PIXI.SCALE_MODES](http://pixijs.download/release/docs/PIXI.html#.SCALE_MODES) |
| `resolution` | [Number](Number.md) | 解像度 |


#### isFastRect () →  {Boolean}
最初の角か。


#### lineStyle (options opt) →  {PIXI.Graphics}
指定の値でラインスタイルを設定し、自身を返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `options` | Object | &lt;optional&gt; | 詳細は以下参照 |
| `options.width` | [Number](Number.md) | &lt;optional&gt; | 幅(規定値: 0ピクセル) |
| `options.color` | [Number](Number.md) | &lt;optional&gt; | 色(規定値: 0) |
| `options.alpha` | [Number](Number.md) | &lt;optional&gt; | 不透明度(規定値: 1) |
| `options.alignment` | [Number](Number.md) | &lt;optional&gt; | (規定値: 0.5) |
| `options.native` | Boolean | &lt;optional&gt; | (規定値: false) |


#### lineTextureStyle (options opt) →  {PIXI.Graphics}
指定の値でラインテクスチャスタイルを設定し、自身を返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `options` | Object | &lt;optional&gt; | 詳細は以下参照 |
| `options.width` | [Number](Number.md) | &lt;optional&gt; | 幅(規定値: 0ピクセル) |
| `options.texture` | [PIXI.Texture](PIXI.Texture.md) | &lt;optional&gt; | テスクチャ(規定値: PIXI.Texture.WHITE) |
| `options.color` | [Number](Number.md) | &lt;optional&gt; | 色(規定値: 0) |
| `options.alpha` | [Number](Number.md) | &lt;optional&gt; | 不透明度(規定値: 1) |
| `options.matrix` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html) | &lt;optional&gt; |   |
| `options.alignment` | [Number](Number.md) | &lt;optional&gt; | (規定値: 0.5) |
| `options.native` | Boolean | &lt;optional&gt; | (規定値: false) |


#### lineTo (x, y) →  {PIXI.Graphics}
指定座標まで線を引き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### moveTo (x, y) →  {PIXI.Graphics}
指定座標まで描画位置を移動し、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### quadraticCurveTo (cpX, cpY, toX, toY) →  {PIXI.Graphics}
2次ベジェ曲線を引き、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `cpX` | [Number](Number.md) | コントロールポイントx座標(ピクセル) |
| `cpY` | [Number](Number.md) | コントロールポイントy座標(ピクセル) |
| `toX` | [Number](Number.md) | x座標(ピクセル) |
| `toY` | [Number](Number.md) | y座標(ピクセル) |


#### setMatrix (matrix) →  {PIXI.Graphics}
マトリクスを設定し、自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `matrix` | [PIXI.Matrix](http://pixijs.download/release/docs/PIXI.Matrix.html) | マトリクス |


####  startPoly ()
多角形の描画を開始。

