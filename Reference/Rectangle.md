[クラスツリー](index.md)

# クラス: Rectangle

## スーパークラス: [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html)

矩形範囲を表すクラス。

ここでは `PIXI.Rectangle` のプロパティ・メソッドも書いているが、詳細は [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) を参照。

メソッドが大抵は自身を返すのは、メソッドチェーンに利用するため。


関連クラス: [Point](Point.md), [Window](Window.md), [Window_NameEdit](Window_NameEdit.md), [Window_NameInput](Window_NameInput.md), [Window_SavefileList](Window_SavefileList.md), [Window_Selectable](Window_Selectable.md), [Window_BattleLog](Window_BattleLog.md), [Window_BattleStatus](Window_BattleStatus.md) [Sprite_Button](Sprite_Button.md), [MV.Rectangle](MV.Rectangle.md), [MV.Size](MV.Size.md)

### new Rectangle (x opt, y opt, width opt, height opt)
#### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `x` | [Number](Number.md) | &lt;optional&gt; | 矩形左の x座標(規定値:0) |
| `y` | [Number](Number.md) | &lt;optional&gt; | 矩形上の y座標(規定値:0) |
| `width` | [Number](Number.md) | &lt;optional&gt; | 幅(規定値:0) |
| `height` | [Number](Number.md) | &lt;optional&gt; | 高さ(規定値:0) |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 矩形左の x座標 |
| `y` | [Number](Number.md) | 矩形上の y座標 |
| `width` | [Number](Number.md) | 幅 |
| `height` | [Number](Number.md) | 高さ |
| `top` | [Number](Number.md) | 矩形上の y座標( `y` と同じ) |
| `bottom` | [Number](Number.md) | 矩形下の y座標 |
| `left` | [Number](Number.md) | 矩形左の x座標( `x` と同じ) |
| `right` | [Number](Number.md) | 矩形右の y座標 |
| `type` | [Number](Number.md) | [read-only] タイプ(参照:[PIXI.SHAPES](http://pixijs.download/release/docs/PIXI.html#SHAPES)) |


### 廃止MVプロパティ
`emptyRectangle` (代わりに親クラスの `PIXI.Rectangle.EMPTY` を使う)

### メソッド

#### ceil (resolution opt, eps opt)→ {[Rectangle](Rectangle.md)}
グリッドに沿うように値を大きい方に丸め、自身を返す。<br />
自身の値が変わるので、返り値が不要なら捨てていい 。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `resolution` | [Number](Number.md) | &lt;optional&gt; | 解像度(規定値:1) |
| `eps` | [Number](Number.md) | &lt;optional&gt;  | 正確性(規定値:0.001) |


#### clone ()→ {[Rectangle](Rectangle.md)}
値を(参照ではなく)写して返す。


#### contains ()→ {Boolean}
指定座標が矩形範囲に含まれるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標 |
| `y` | [Number](Number.md) | y座標 |


#### copyFrom (rectangle)→ {[Rectangle](Rectangle.md)}
他の矩形範囲をコピーして設定し、自身を返す。<br />
自身の値が変わるので、返り値が不要なら捨てていい 。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rectangle` | [Rectangle](Rectangle.md) | 設定する矩形範囲 |


#### copyTo (rectangle)→ {[Rectangle](Rectangle.md)}
他の矩形範囲に自身をコピーして設定し、設定した値を返す。<br />
引数に指定する値は、実際は `Rectangle` に限らず、x, y, width, height のプロパティを持っているなら、どんなオブジェクトでもいい。<br />
大抵は変数から参照渡しをすることになるので、その場合は返り値を捨ててもいい。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rectangle` | [Rectangle](Rectangle.md) | 設定する矩形範囲 |


#### enlarge (rectangle)→ {[Rectangle](Rectangle.md)}
指定矩形範囲を含む範囲に自身を拡大し、自身を返す。<br />
自身の値が変わるので、返り値が不要なら捨てていい 。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rectangle` | [Rectangle](Rectangle.md) | 矩形範囲 |


#### fit (rectangle)→ {[Rectangle](Rectangle.md)}
指定矩形範囲に含まれる範囲に自身を切り取り、自身を返す。<br />
自身の値が変わるので、返り値が不要なら捨てていい 。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rectangle` | [Rectangle](Rectangle.md) | 矩形範囲 |


#### initialize ()
 オブジェクト生成時の初期化。


#### pad (paddingX opt, paddingY opt)→ {[Rectangle](Rectangle.md)}
指定した値に応じて両方向に拡大して、自身を返す。<br />
自身の値が変わるので、返り値が不要なら捨てていい 。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `paddingX` | [Number](Number.md) | &lt;optional&gt; | x方向拡大量(規定値:0) |
| `paddingY` | [Number](Number.md) | &lt;optional&gt;  | y方向拡大量(規定値:0 ただし `x` の指定がある場合 `x` と同じ) |