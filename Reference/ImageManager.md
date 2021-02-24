[クラスツリー](index.md)

# クラス: ImageManager
画像ファイルの読み込み、保持(キャッシュ)を行う静的オブジェクト。

MZになってキャッシュ方式が大幅に変更されたので、このクラスもかなり変わっている。<br />
ブラウザ側のキャッシュ機能に任せる方式になり、かなり簡素化された。<br />
reserveXxxx()、reserveXxxx() 系統のメソッドは軒並み廃止されている。<br />
また読み込み時の hue(色相)と smooth(スムージング)の指定はなくなった。

関連クラス: [Bitmap](Bitmap.md), [Graphics](Graphics.md), [Game_Screen](Game_Screen.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `iconWidth` | [Number](Number.md) | **@MZ** [static] アイコン幅(規定値:32ピクセル) |
| `iconHeight` | [Number](Number.md) | **@MZ** [static] アイコン高さ(規定値:32ピクセル) |
| `faceWidth` | [Number](Number.md) | **@MZ** [static] 顔画像幅(規定値:144ピクセル) |
| `faceHeight` | [Number](Number.md) | **@MZ** [static] 顔画像高さ(規定値:144ピクセル) |
| `_cache` | Object.&lt;[Bitmap](Bitmap.md)&gt; | [static] URLをキーとした画像のキャッシュ |
| `_system` | Object.&lt;[Bitmap](Bitmap.md)&gt; | [static] systemフォルダの画像を対象とした<br />URLをキーとした画像のキャッシュ |
| `_emptyBitmap` | [Bitmap](Bitmap.md) | [static] 空の画像 |

### 廃止MVプロパティ
`cache`, `_imageCache`, `_requestQueue`, `_systemReservationId`


### メソッド

#### (static) clear ()
RPGツクールMZの画像キャッシュをクリア。<br />
ブラウザなどが持っているキャッシュがクリアされるわけではない。


#### (static) isBigCharacter (filename) → {Boolean}
指定したファイル名に”$”がついているか。<br />
”$”がついている場合は3×4のひとキャラ分の画像とみなすのであって、実際大きい(big)かどうかはわからない。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) isObjectCharacter (filename) → {Boolean}
指定したファイル名に”!”がついているか。<br />
”!”がついている場合は表示際に上にずらさない画像とみなすのであって、実際が物体(object)の画像かどうかはわからない。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) isReady () → {Boolean}
画像のキャッシュが完了しているか。


#### (static) isZeroParallax (filename) → {Boolean}
指定したファイル名に”!”がついているか。<br />
”!”がついている場合はずらさない遠景画像とみなす。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名 |


#### (static) loadAnimation (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/animations/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadBattleback1 (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/battlebacks1/”フォルダから読み込み、スムージングをかけて返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadBattleback2 (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/battlebacks2/”フォルダから読み込み、スムージングをかけて返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadBitmap (folder, filename) → {[Bitmap](Bitmap.md)}
指定したフォルダ・ファイル名の画像をプロジェクトフォルダ以下から読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `folder` | [String](String.md) | フォルダ名(”img/faces/”のように指定する) |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadBitmapFromUrl (folder, filename) → {[Bitmap](Bitmap.md)}
**@MZ** 指定したURLの画像を読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `url` | [String](String.md) | ファイルURL |


#### (static) loadCharacter (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/characters/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadEnemy (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/enemies/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadFace (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/faces/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） ||


#### (static) loadParallax (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/parallaxes/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadPicture (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/pictures/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadSvActor (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/sv_actors/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadSvEnemy (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/sv_enemies/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadSystem (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/system/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadTileset (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/tilesets/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadTitle1 (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/titles1/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


#### (static) loadTitle2 (filename) → {[Bitmap](Bitmap.md)}
指定したファイル名の画像を”img/titles2/”フォルダから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `filename` | [String](String.md) | ファイル名(拡張子.pngを除く） |


### 廃止MVメソッド
[static] _generateCacheKey(path, hue), clearRequest (), loadEmptyBitmap (), update (), releaseReservation, requestAnimation (filename, hue), requestBattleback1 (filename, hue), requestBattleback2 (filename, hue), requestBitmap (folder, filename), requestCharacter (filename, hue), requestEnemy (filename, hue), requestFace (filename, hue), requestNormalBitmap (path, hue), requestParallax (filename, hue), requestPicture (filename, hue), requestSvActor (filename, hue), requestSvEnemy (filename, hue), requestSystem (filename, hue), requestTileset (filename, hue), requestTitle1 (filename, hue), requestTitle2 (filename, hue), reserveAnimation (filename, hue, reservationId), reserveBattleback1 (filename, hue, reservationId), reserveBattleback2 (filename, hue, reservationId), reserveBitmap (folder, filename, hue, smooth, reservationId), reserveCharacter (filename, hue, reservationId), reserveEnemy (filename, hue, reservationId), reserveFace (filename, hue, reservationId), reserveNormalBitmap (path, hue, reservationId), reserveParallax (filename, hue, reservationId), reservePicture (filename, hue, reservationId), reserveSvActor (filename, hue, reservationId), reserveSvEnemy (filename, hue, reservationId), reserveSystem (filename, hue, reservationId), reserveTileset (filename, hue, reservationId), reserveTitle1 (filename, hue, reservationId), reserveTitle2 (filename, hue, reservationId), setDefaultReservationId (reservationId)