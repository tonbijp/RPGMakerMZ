[クラスツリー](index.md)

# クラス: FontManager
**@MZ** フォントを扱う静的クラス。

MVで [Graphics](Graphics.md) にあった機能のうちフォント読み込みに関するものを独立させたもの。


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_urls` | Object.&lt;[String](String.md)&gt; | [static] ファミリをキーとしたURLのリスト |
| `_states` | Object.&lt;[String](String.md)&gt; | [static] ファミリをキーとした[状態](#状態)のリスト |

#### 状態

| 文字列 | 説明 |
| --- | --- |
| "loading" | 読み込み中 |
| "loaded" | 読み込み完了 |
| "error" | エラー |


### メソッド

#### (static) isReady ()→ {String}
準備が完了しているか。


#### (static) load (family, filename)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `family` | [String](String.md) | フォントファミリ |
| `filename` | [String](String.md) | フォントファイル名 |


#### (static) makeUrl (filename)→ {String}
指定ファイル名からURLを生成して返す。<br />
具体的には "fonts/ファイル名"

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) startLoading (family, url)
指定URLからフォントを読み込む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `family` | [String](String.md) | フォントファミリ |
| `url` | [String](String.md) | ファイルURL |


#### (static) throwLoadError (url)
読み込みエラーを投げる。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `url` | [String](String.md) | ファイルURL |
