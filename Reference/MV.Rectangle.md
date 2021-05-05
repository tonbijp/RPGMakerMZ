[クラスツリー](index.md)

# クラス:  [MV](MV.md).Rectangle

## 型: Object
矩形範囲を表すクラス。

矩形範囲を扱う場合に多くは [Rectangle](Rectangle.md)クラスが使われる。<br />
ごく限定的に(具体的には [Window](Window.md) 枠の描画)、こちらが使われている。

参考: `Rectangle` の値の初期化。

```js
const rect = new Rectangle( 0, 0, 640, 400 );
```

参考: `MV.Rectangle` の値の初期化(見ての通りの生 `Object`)

```js
const rect = { x:0, y:0, width:640, height:400 };
```

関連クラス: [Window](Window.md), [MV.TileRect](MV.TileRect.md), [MV.Size](MV.Size.md)


### プロパティ


| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 矩形左の x座標 |
| `y` | [Number](Number.md) | 矩形上の y座標 |
| `width` | [Number](Number.md) | 幅 |
| `height` | [Number](Number.md) | 高さ |
