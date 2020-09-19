# Class: ImageManager
画像ファイルの読み込み、保持(キャッシュ)、管理を行う静的オブジェクト。

読み込みには、キャッシュの方式などが異なる loadXxxx()、reserveXxxx()、reserveXxxx() の3系統がある。

#### loadXxxx()
主に使われる、基本的な画像読み込み。<br />
メモリ管理上限( [ImageCache.limit](ImageCache.md) )に達すると古い画像からキャッシュが自動で破棄される。<br />
そのため以前読んだ画像が、常にキャッシュされている保証はない。

#### reserveXxxx()
自動でキャッシュが**破棄されることはない**のでプリロードに使える。<br />
キャッシュは [releaseReservation()](ImageManager.md#static-releasereservation-reservationid) によって、明示的に解放できる。<br />
キャッシュの際の reservationId は [Utils.generateRuntimeId()](Utils.md#static-generateruntimeid---number) メソッドを使って生成すればIDの衝突を防げる。<br />
バージョン 1.5.0 で導入された機能。

#### requestXxxx()
まず専用の予約キュー( [RequestQueue](RequestQueue.md) )に保存され。<br />
予約キューから**順に取り出されて**画像が読み込まれる。<br />
[Game_Interpreter.requestImages()](Game_Interpreter.md#requestImages--) でイベントに含まれる画像の先読みに使われている。<br />
読み込みが終わっていれば、次にloadXxxx() を実行した時に瞬時に使える。<br />
バージョン 1.5.0 で導入された機能。

関連クラス: [Bitmap](Bitmap.md), [Graphics](Graphics.md), [Game_Screen](Game_Screen.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `cache` | [CacheMap](CacheMap.md) | [static] キャッシュマップ |
| `_imageCache` | [ImageCache](ImageCache.md) | [static] 画像キャッシュ |
| `_requestQueue` | [RequestQueue](RequestQueue.md) | [static] リクエストキュー |
| `_systemReservationId` | [Number](Number.md) | [static] システム予約ID |


### Methods

#### (static) clear ()
RPGツクールMVの画像キャッシュをクリア。<br />
ブラウザなどが持っているキャッシュがクリアされるわけではない。


#### (static) clearRequest ()
リクエストをクリア。


#### (static) isBigCharacter (filename) → {Boolean}
指定したファイル名に'$'がついているか。<br />
'$'がついている場合は3×4のひとキャラ分の画像とみなすのであって、実際大きい(big)かどうかはわからない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) isObjectCharacter (filename) → {Boolean}
指定したファイル名に'!'がついているか。<br />
'!'がついている場合は表示際に上にずらさない画像とみなすのであって、実際が物体(object)の画像かどうかはわからない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) isReady () → {Boolean}
画像のキャッシュが完了しているか。


#### (static) isZeroParallax (filename) → {Boolean}
指定したファイル名に'!'がついているか。<br />
'!'がついている場合はずらさない遠景画像とみなす。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) loadAnimation (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/animations/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) (規定値:0) |


#### (static) loadBattleback1 (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/battlebacks1/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) (規定値:0) |


#### (static) loadBattleback2 (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/battlebacks2/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) (規定値:0) |


#### (static) loadBitmap (folder, filename, hue opt, smooth opt) → {[Bitmap](Bitmap.md)}
指定したフォルダ・ファイル名の画像をプロジェクトフォルダ以下から読み込み、指定した色相にずらし、指定したスムージングの状態で返す。<br />
色相の変更が必要ない場合 loadBitmap( folder, filename, null, true )　のように、色相に null を渡せば良い。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `folder` | [String](String.md) | | フォルダ名('img/faces/'のように指定する) |
| `filename` | [String](String.md) | | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) (規定値:0) |
| `smooth` | Boolean | &lt;optional&gt; | スムージングを行うか (規定値:false) |


#### (static) loadCharacter (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/characters/'フォルダから読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) (規定値:0) |


#### (static) loadEmptyBitmap () → {[Bitmap](Bitmap.md)}
カラの画像を返す。loadとあるが、特にどこからか読み込むわけではない。


#### (static) loadEnemy (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/enemies/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) (規定値:0) |


#### (static) loadFace (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/faces/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) (規定値:0) |


#### (static) loadNormalBitmap (path, hue) → {[Bitmap](Bitmap.md)}
指定したパスの画像をプロジェクトフォルダ以下から読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) | パス文字列('img/system/Balloon.png'のように記述) |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) loadParallax (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/parallaxes/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) |


#### (static) loadPicture (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/pictures/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) |


#### (static) loadSvActor (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/sv_actors/'フォルダから読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) |


#### (static) loadSvEnemy (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/sv_enemies/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) |


#### (static) loadSystem (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/system/'フォルダから読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) |


#### (static) loadTileset (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/tilesets/'フォルダから読み込み、指定した色相にずらして返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) |


#### (static) loadTitle1 (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/titles1/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) |


#### (static) loadTitle2 (filename, hue opt) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/titles2/'フォルダから読み込み、指定した色相にずらしスムージングをかけて返す。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `filename` | [String](String.md) |  | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | &lt;optional&gt; | 色相(360度) |


#### (static) releaseReservation (reservationId)
指定IDの予約を開放。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) requestAnimation (filename, hue) → {[Bitmap](Bitmap.md)}
アニメーションを予約し、画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestBattleback1 (filename, hue) → {[Bitmap](Bitmap.md)}
戦闘の背景1を予約し、画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestBattleback2 (filename, hue) → {[Bitmap](Bitmap.md)}
戦闘の背景2を予約し、画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestBitmap (folder, filename, hue, smooth) → {[Bitmap](Bitmap.md)}
画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `folder` | [String](String.md) | フォルダ名('img/faces/'のように指定する) |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `smooth` | Boolean | スムージングを行うか |


#### (static) requestCharacter (filename, hue) → {[Bitmap](Bitmap.md)}
キャラ画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestEnemy (filename, hue) → {[Bitmap](Bitmap.md)}
[敵キャラ]画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestFace (filename, hue) → {[Bitmap](Bitmap.md)}
[顔]画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestNormalBitmap (path, hue) → {[Bitmap](Bitmap.md)}
通常の画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) | パス文字列('img/system/Balloon.png'のように記述) |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestParallax (filename, hue) → {[Bitmap](Bitmap.md)}
マップ背景画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestPicture (filename, hue) → {[Bitmap](Bitmap.md)}
画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestSvActor (filename, hue) → {[Bitmap](Bitmap.md)}
サイドビュー[アクター]画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestSvEnemy (filename, hue) → {[Bitmap](Bitmap.md)}
サイドビュー[敵キャラ]画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestSystem (filename, hue) → {[Bitmap](Bitmap.md)}
システム画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestTileset (filename, hue) → {[Bitmap](Bitmap.md)}
タイルセット画像を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestTitle1 (filename, hue) → {[Bitmap](Bitmap.md)}
タイトル画像1を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) requestTitle2 (filename, hue) → {[Bitmap](Bitmap.md)}
タイトル画像2を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |


#### (static) reserveAnimation (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/animations/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveBattleback1 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/battlebacks1/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveBattleback2 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/battlebacks2/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveBitmap (folder, filename, hue, smooth, reservationId) → {[Bitmap](Bitmap.md)}
指定したフォルダ・ファイル名の画像をプロジェクトフォルダ以下から読み込み、指定した色相にずらし、指定したスムージングの状態で、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `folder` | [String](String.md) | フォルダ名('img/faces/'のように指定する) |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `smooth` | Boolean | スムージングを行うか |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveCharacter (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/characters/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveEnemy (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/enemies/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveFace (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/faces/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveNormalBitmap (path, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したパスの画像をプロジェクトフォルダ以下から読み込み、指定した色相にずらして、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `path` | [String](String.md) | パス文字列('img/system/Balloon.png'のように記述)  |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveParallax (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/parallaxes/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reservePicture (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/pictures/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveSvActor (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/sv_actors/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveSvEnemy (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/sv_enemies/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveSystem (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/system/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveTileset (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/tilesets/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveTitle1 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/titles1/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) reserveTitle2 (filename, hue, reservationId) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を'img/titles2/'フォルダから読み込み、指定したキャッシュIDに登録し、返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |
| `hue` | [Number](Number.md) | 色相(360度) |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) setDefaultReservationId (reservationId)
キャッシュIDの規定値を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `reservationId` | [Number](Number.md) | キャッシュID |


#### (static) update ()
フレーム毎のアップデート。



