[クラスツリー](index.md)

# クラス: Rectangle

## スーパークラス: [PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html)

### new Rectangle (x, y, width, height)
矩形範囲を表すクラス。

[PIXI.Rectangle](http://pixijs.download/release/docs/PIXI.Rectangle.html) を継承したクラスなので、 `bottom`などのプロパティが使えたり、`contains()`メソッドで衝突判定ができたりする。


関連クラス: [Point](Point.md), [Window](Window.md), [Window_NameEdit](Window_NameEdit.md), [Window_NameInput](Window_NameInput.md), [Window_SavefileList](Window_SavefileList.md), [Window_Selectable](Window_Selectable.md), [Window_BattleLog](Window_BattleLog.md), [Window_BattleStatus](Window_BattleStatus.md) [Sprite_Button](Sprite_Button.md), [MV.Rectangle](MV.Rectangle.md), [MV.Size](MV.Size.md)

#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 矩形左の x座標 |
| `y` | [Number](Number.md) | 矩形上の y座標 |
| `width` | [Number](Number.md) | 幅 |
| `height` | [Number](Number.md) | 高さ |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 矩形左の x座標 |
| `y` | [Number](Number.md) | 矩形上の y座標 |
| `width` | [Number](Number.md) | 幅 |
| `height` | [Number](Number.md) | 高さ |


### 廃止MVプロパティ
`emptyRectangle` (代わりに親クラスから継承したEMPTYを使う)

### メソッド

#### initialize ()
 オブジェクト生成時の初期化。