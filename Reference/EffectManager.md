[クラスツリー](index.md)

# クラス: EffectManager
**@MZ** エフェクトを扱う静的クラス。

MZではエフェクトに [Effekseer](https://effekseer.github.io/jp/) が採用されたので、そのファイルが扱えるように用意された。

v1.1.0、v1.2.0 で変更あり。

関連クラス: [Graphics](Graphics.md),  [RPG.Effect](RPG.Effect.md), [Sprite_Animation](Sprite_Animation.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_cache` | Object.&lt;EffekseerEffect&gt; | [static] URLをキーとしたEffekseerエフェクトのリスト |
| `_errorUrls` | [Array](Array.md) .&lt;[String](String.md)&gt; | [static] エラーの配列 |


### メソッド

#### (static) checkErrors ()
エラーが発生していたらエラーを投げる。


#### (static) clear ()
キャッシュを消去。


#### (static) isReady () → {[String](String.md)}
準備が完了しているか。


#### (static) load (filename) → {EffekseerEffect}
指定ファイルからエフェクト情報を読み込む。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) makeUrl (filename) → {[String](String.md)}
指定ファイル名からURLを生成して返す。<br />
具体的には "effects/ファイル名.efkefc"

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) onError (url)
読み込みエラーが発生した時のハンドラ。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `url` | [String](String.md) | ファイルURL |


#### (static) onLoad (url)
読み込みが完了した時のハンドラ。<br />
拡張用の空関数。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `url` | [String](String.md) | ファイルURL |


#### (static) startLoading (url)
指定URLからエフェクト情報を読み込む。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `url` | [String](String.md) | ファイルURL |


#### (static) throwLoadError (url)
読み込みエラーを投げる。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `url` | [String](String.md) | ファイルURL |
