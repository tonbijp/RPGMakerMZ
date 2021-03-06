[クラスツリー](index.md)

# クラス: Utils
便利なメソッドを集めた静的クラス。主に利用環境のチェックを行う。

v1.3.2 で変更あり。

関連クラス: [Graphics](Graphics.md), [Video](Video.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `RPGMAKER_NAME` | [String](String.md) | [static][read-only] RPGツクールの名前(規定値: "MZ") |
| `RPGMAKER_VERSION` | [String](String.md) | [static][read-only]  RPGツクールのバージョン(例:  "1.0.0") |


### メソッド

#### (static) canPlayOgg () → {Boolean}
**@MZ** oggファイル再生可能か。


#### (static) canPlayWebm () → {Boolean}
**@MZ** Webmファイル再生可能か。


#### (static) canReadGameFiles () → {Boolean}
ゲームのフォルダにあるファイルが読めるか。


#### (static) canUseCssFontLoading () → {Boolean}
**@MZ** CSSフォントの読み込み可能か。<br />
MV ではGraphicsのメソッドだった。


#### (static) canUseIndexedDB () → {Boolean}
**@MZ** IndexedDB 利用可能か。


#### (static) canUseWebAudioAPI () → {Boolean}
**@MZ** WebAudioAPI 利用可能か。


#### (static) canUseWebGL () → {Boolean}
**@MZ** WebGL 利用可能か。


#### (static) checkRMVersion (versiton) → {Boolean}
**@MZ** 指定バージョン文字列 =< 現在のバージョン か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `versiton` | [String](String.md) | バージョン文字列(例:  "1.0.0") |


#### (static) containsArabic (str) → {Boolean}
**@MZ** 指定文字列がアラビア文字を含むか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `str` | [String](String.md) | 文字列 |


#### (static) decryptArrayBuffer (source) → {[ArrayBuffer](ArrayBuffer.md)}
**@MZ** 暗号化されたデータを復号する。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `str` | [ArrayBuffer](ArrayBuffer.md) | 復号するデータ |


#### (static) encodeURI (str) → {[String](String.md)}
**@MZ** URIエンコーディングを行う(ただし / はそのまま)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `str` | [String](String.md) | エンコードする文字列 |


#### (static) escapeHtml (str) → {[String](String.md)}
**@MZ** HTML 用の実体参照(&amp;amp;など)によるエスケープを行う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `str` | [String](String.md) | エスケープする文字列 |


#### (static) extractFileName (filename) → {[String](String.md)}
**@MZ1.3.2** ファイルパスからファイル部分のみを取り出して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイルパス |


#### (static) generateRuntimeId () → {[Number](Number.md)}
ランタイムIDを生成して返す。


#### (static) hasEncryptedAudio () → {Boolean}
**@MZ** ゲームが暗号化された音声を含むか。


#### (static) hasEncryptedImages () → {Boolean}
**@MZ** ゲームが暗号化された画像を含むか。


#### (static) isAndroidChrome () → {Boolean}
ブラウザが Android Chrome か。


#### (static) isLocal () → {Boolean}
**@MZ** ローカル環境で実行されているか。


#### (static) isMobileDevice () → {Boolean}
モバイルデバイスか。<br />
"Android", "webOS", "iPhone", "iPad", "iPod", "BlackBerry", "Opera Mini"いずれか。


#### (static) isMobileSafari () → {Boolean}
ブラウザが Mobile Safari か。


#### (static) isNwjs () → {Boolean}
基盤に NW.js を使っているか。


#### (static) isOptionValid (name) → {Boolean}
指定オプション(ブラウザだとURLの?以降の&amp;で区切られたクエリ)が含まれるか。<br />
"test", "btest", "etest", "onTop", "devToolOff", "showfps", "canvas", "webgl", "noaudio"

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | オプション文字列 |


#### (static) isSupportPassiveEvent () → {Boolean}
ブラウザがパッシブイベントを採用しているか。


#### (static) rgbToCssColor (r, g, b) → {[MV.CssColor](MV.CssColor.md)}
指定したRGBの色数値から CSS色文字列を生成して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `r` | [Number](Number.md) | 赤 (0〜255) |
| `g` | [Number](Number.md) | 緑 (0〜255) |
| `b` | [Number](Number.md) | 青 (0〜255) |


#### (static) setEncryptionInfo (hasImages, hasAudio, key)
**@MZ** 暗号化情報の設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `hasImages` | Boolean | 画像を暗号化するか |
| `hasAudio` | Boolean | 音声を暗号化するか |
| `key` | [String](String.md) | 暗号化キー |
