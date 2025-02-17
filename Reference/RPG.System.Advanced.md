[クラスツリー](index.md)

# クラス: [RPG](RPG.md).[System](RPG.System.md).Advanced
**@MZ** [高度な設定]のJSONデータ。

`uiAreaWidth` は [Graphics](Graphics.md) の `boxWidth` と同じではなく、`boxWidth`  が8ピクセル少ない。
同様に  `boxHeight` = `uiAreaHeight` - 8 の関係。

v1.3.0、1.9.0 で変更あり。

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `gameId` | [Number](Number.md) | [ゲームID] |
| `screenWidth` | [Number](Number.md) | [画面の幅] (規定値: 816ピクセル) |
| `screenHeight` | [Number](Number.md) | [画面の高さ] (規定値: 624ピクセル) |
| `uiAreaWidth` | [Number](Number.md) | [UIエリアの幅] (規定値: 816ピクセル) |
| `uiAreaHeight` | [Number](Number.md) | [UIエリアの高さ] (規定値: 624ピクセル) |
| `mainFontFilename` | [String](String.md) | [メインフォントのファイル名] |
| `numberFontFilename` | [String](String.md) | [数字フォントのファイル名] |
| `fallbackFonts` | [String](String.md) | [フォールバックフォント] |
| `fontSize` | [Number](Number.md) | [フォントサイズ] (規定値: 26) |
| `windowOpacity` | [Number](Number.md) | **MZ1.3.0** [ウィンドウの不透明度] (規定値: 192) |
| `picturesUpperLimit` | [Number](Number.md) | **MZ1.9.0** [ピクチャ枚数上限] (規定値: 100) |

