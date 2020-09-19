# Class: [MV](MV.md).CssColor

## Type: [String](String.md)
CSS形式の文字列による色指定方法。

16進による'#ff4000' のような形式の他、関数 rgb( 255, 64, 0 )' や色名'red'などでの指定が可能。

簡単に説明すると、'#ff4000' は '#' で始まりRGB(赤・緑・青)の順に二桁区切りで16進数を並べた文字列で、返り値はだいたいこの形式で返ってくる( rgba() 形式もある )

メソッドの引数の場合は、[Utils.rgbToCssColor()](Utils.md#static-rgbtocsscolor-r-g-b--mvcsscolor) を使って上記16進形式の文字列を生成できる。

詳しくは[MDN の CSS 色](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Color)などを参照。


関連クラス: [Bitmap](Bitmap.md), [Window_Base](Window_Base.md), [Window_NameEdit](Window_NameEdit.md), [MV.Color](MV.Color.md), [MV.Tone](MV.Tone.md)



