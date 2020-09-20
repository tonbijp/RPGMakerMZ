# Class: Utils
便利なメソッドを集めた静的クラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `RPGMAKER_NAME` | [String](String.md) | [static] RPGツクールの名前(規定値: 'MV') |
| `RPGMAKER_VERSION` | [String](String.md) | [static] RPGツクールのバージョン |


### Methods

#### (static) canReadGameFiles () → {Boolean}
ゲームのフォルダにあるファイルが読めるか。

#### (static) generateRuntimeId () → {[Number](Number.md)}
ランタイムIDを生成して返す。


#### (static) isAndroidChrome () → {Boolean}

#### (static) isMobileDevice () → {Boolean}

#### (static) isMobileSafari () → {Boolean}

#### (static) isNwjs () → {Boolean}

#### (static) isOptionValid (name) → {Boolean}
'test', 'btest', 'etest', 'onTop', 'devToolOff', 'showfps', 'canvas', 'webgl', 'noaudio'

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | オプション文字列 |


#### (static) isSupportPassiveEvent () → {Boolean}

#### (static) rgbToCssColor (r, g, b) → {[MV.CssColor](MV.CssColor.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤 (0〜255) |
| `g` | [Number](Number.md) | 緑 (0〜255) |
| `b` | [Number](Number.md) | 青 (0〜255) |


