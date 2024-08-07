[クラスツリー](index.md)

# クラス: PIXI.DisplayObject

## スーパークラス: [PIXI.utils.EventEmitter](https://pixijs.download/v5.3.12/docs/PIXI.utils.EventEmitter.html)

画面に表示されるもの一般の基本となるオブジェクト。

`PIXI.DisplayObject` に限った話ではないが`position` など、複数の数値を持ったデータを変更する場合、<br />
`displayObject.position = new PIXI.Point( 0, 0 )` とするより<br />
`displayObject.position.set( 0, 0 )` とする方が簡単に書け、かつ処理の負荷も低い。

どのような設定方法が使えるかはデータごとのリファレンス([PIXI.Point](http://pixijs.download/v5.3.12/docs/PIXI.Point.html) など)を参照。

詳細は本家 PixiJS のサイト [PIXI.DisplayObject](http://pixijs.download/v5.3.12/docs/PIXI.DisplayObject.html) を参照。

### new PIXI.DisplayObject ()

### サブクラス
* [PIXI.Container](PIXI.Container.md)


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `accessible` | Boolean | アクセシビリティ対応か |
| `accessibleHint` | [String](String.md) | ヒント文字列(`accessible`が `true`) |
| `accessibleTitle` | [String](String.md) | タイトル文字列(`accessible`が `true`) |
| `alpha` | [Number](Number.md) | 不透明度 |
| `angle` | [Number](Number.md) | 回転角(角度) |
| `buttonMode` | Boolean | マウスオーバー時などポインタが変更されるか |
| `cacheAsBitmap` | Boolean | ビットマップとしてキャッシュされるか |
| `cursor` | [String](String.md) | マウスオーバー時のポインタの種類 |
| `filterArea` | [PIXI.Rectangle](http://pixijs.download/v5.3.12/docs/PIXI.Rectangle.html) | フィルタ範囲 |
| `filters` | [Array](Array.md).&lt;[PIXI.Filter](PIXI.Filter.md)&gt; | フィルタの配列 |
| `hitArea` | [PIXI.IHitArea](http://pixijs.download/v5.3.12/docs/PIXI.IHitArea.html) | (クリック)判定範囲 |
| `interactive` | Boolean | (クリック)操作可能か |
| `isSprite` | Boolean | スプライトか |
| `localTransform` | [PIXI.Matrix](http://pixijs.download/v5.3.12/docs/PIXI.Matrix.html) | [read-only]ローカルな変形 |
| `mask` | [PIXI.Graphics](PIXI.Graphics.md) \| [PIXI.Sprite](PIXI.Sprite.md) \| null | マスク画像 |
| `name` | [String](String.md) | 名前 |
| `parent` | [PIXI.Container](PIXI.Container.md) | [read-only] 親コンテナオブジェクト |
| `pivot` | [PIXI.IPoint](http://pixijs.download/v5.3.12/docs/PIXI.IPoint.html) | 回転軸(ピクセル) |
| `position` | [PIXI.Point](http://pixijs.download/v5.3.12/docs/PIXI.Point.html) | 位置(x, y を同時に指定) |
| `renderable` | Boolean | レンダ可能か |
| `rotation` | [Number](Number.md) | 回転角(ラジアン) |
| `scale` | [PIXI.IPoint](http://pixijs.download/v5.3.12/docs/PIXI.IPoint.html) | 拡大率(ex: 等倍 {1, 1} / 横2倍 {2, 1}) |
| `skew` | [PIXI.ObservablePoint](http://pixijs.download/v5.3.12/docs/PIXI.ObservablePoint.html) | 傾斜 |
| `transform` | [PIXI.Matrix](http://pixijs.download/v5.3.12/docs/PIXI.Matrix.html) | 変形 |
| `visible` | Boolean |  表示中か |
| `worldAlpha` | [Number](Number.md) | [read-only] 最終的な不透明度 |
| `worldTransform` | [PIXI.Matrix](http://pixijs.download/v5.3.12/docs/PIXI.Matrix.html) | [read-only] 最終的な変形 |
| `worldVisible` | Boolean |  [read-only] 最終的に表示中か |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `zIndex` | [Number](Number.md) | 高い番号ほど手前に表示される番号 |
| `_accessibleDiv` | Boolean |  |
| `_bounds` | [PIXI.Bounds](http://pixijs.download/v5.3.12/docs/PIXI.Bounds.html) | 矩形範囲 |
| `_destroyed` | Boolean | destroy() により破棄されているか |
| `_lastSortedIndex` | [Number](Number.md) | 最終ソート番号 |
| `_mask` | [PIXI.Graphics](PIXI.Graphics.md) \| [PIXI.Sprite](PIXI.Sprite.md) \| null |  |
| `_tempDisplayObjectParent` | PIXI.DisplayObject | 仮の親オブジェクト |
| `_zIndex` | [Number](Number.md) | |


### メソッド

#### (static) mixin (source)
指定オブジェクトを元に、列挙可能なすべてのプロパティとメソッドをミックスインさせます。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `source` | Object | ミックスインの元となるオブジェクト |


#### _recursivePostUpdateTransform ()
ルートからこのオブジェクトまでの再帰的な変形の更新。


#### destroy ()
破棄する。


#### displayObjectUpdateTransform ()
子オブジェクトの更新を伴わない、変形の更新。


#### getBounds (skipUpdate opt, rect opt) → {PIXI.Rectangle}
矩形範囲を返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `skipUpdate` | Boolean | &lt;optional&gt; | |
| `rect` | [PIXI.Rectangle](http://pixijs.download/v5.3.12/docs/PIXI.Rectangle.html) |  &lt;optional&gt; | |


#### getGlobalPosition (point opt, skipUpdate opt) → {PIXI.Point}
大域での位置を返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `point` | [PIXI.Point](http://pixijs.download/v5.3.12/docs/PIXI.Point.html)  | &lt;optional&gt; | |
| `skipUpdate` | Boolean | &lt;optional&gt; | |


#### getLocalBounds (rect opt) → {PIXI.Rectangle}
局所の矩形範囲を返す。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `rect` | [PIXI.Rectangle](http://pixijs.download/v5.3.12/docs/PIXI.Rectangle.html) || &lt;optional&gt; | |


#### render (renderer)
レンダリングを行う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `renderer` | [PIXI.Renderer](PIXI.Renderer.md) |  |


#### setParent (container) → {PIXI.Container}
親オブジェクトを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `container ` | [PIXI.Container](PIXI.Container.md) | 親に指定するコンテナオブジェクト |


#### setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY) → {PIXI.DisplayObject}
まとめて変形を設定して自身を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標 |
| `y` | [Number](Number.md) | y座標 |
| `scaleX` | [Number](Number.md) | x拡大率 |
| `scaleY` | [Number](Number.md) | y拡大率 |
| `rotation` | [Number](Number.md) | 回転角(ラジアン) |
| `skewX` | [Number](Number.md) | x傾斜 |
| `skewY` | [Number](Number.md) | y傾斜 |
| `pivotX` | [Number](Number.md) | 回転軸x座標 |
| `pivotY` | [Number](Number.md) | 回転軸y座標 |


#### toGlobal (position, point opt, skipUpdate opt) → {PIXI.Point}
大域座標に変換。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `position` | [PIXI.Point](http://pixijs.download/v5.3.12/docs/PIXI.Point.html) | | 変換元の座標 |
| `point` | [PIXI.Point](http://pixijs.download/v5.3.12/docs/PIXI.Point.html) | &lt;optional&gt; |  |
| `skipUpdate` | Boolean | &lt;optional&gt; | (規定値: false) |


#### toLocal (position, from opt, point opt, skipUpdate opt) → {PIXI.Point}
局所座標に変換。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `position` | [PIXI.Point](http://pixijs.download/v5.3.12/docs/PIXI.Point.html) | | 変換元の座標 |
| `from` |  | PIXI.DisplayObject | &lt;optional&gt; |  |
| `point` |  | [PIXI.Point](http://pixijs.download/v5.3.12/docs/PIXI.Point.html) | &lt;optional&gt; | |
| `skipUpdate` | Boolean | &lt;optional&gt; | (規定値: false) |


#### updateTransform ()
 変形の更新。


### イベント

#### added(container)
子オブジェクトが追加された時のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `container` | [PIXI.Container](PIXI.Container.md) | 子が追加されたコンテナ |


#### click(event)
クリックされた時のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### mousedown(event)
ボタンが押された瞬間のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### mousemove(event)
ポインタが移動した時のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### mouseout(event)
ポインタがUI領域から出た時のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### mouseover(event)
ポインタがUI領域に入った時のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### mouseup(event)
ボタンを離した瞬間のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### mouseupoutside(event)
UI領域内でボタンを離した瞬間のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### pointercancel(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### pointerdown(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### pointermove(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### pointerout(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### pointerover(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### pointertap(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### pointerup(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### pointerupoutside(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### removed(container)
子オブジェクトが削除された時のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `container` | [PIXI.Container](PIXI.Container.md) | 子が削除されたコンテナ |


#### rightclick(event)
右クリックされた時のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### rightdown(event)
右ボタンが押された瞬間のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### rightup(event)
右ボタンが離された瞬間のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### rightupoutside(event)
右ボタンがUI領域外で離された瞬間のイベント。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### tap(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### touchcancel(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### touchend(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### touchendoutside(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### touchmove(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |


#### touchstart(event)

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | [PIXI.interaction.InteractionEvent](http://pixijs.download/v5.3.12/docs/PIXI.interaction.InteractionEvent.html) | 操作イベント |

