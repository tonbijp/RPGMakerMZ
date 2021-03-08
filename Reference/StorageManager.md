[クラスツリー](index.md)

# クラス: StorageManager
ゲームのセーブデータを管理する静的クラス。

ローカルファイル機能は、node.js の fs モジュールを使っている。<br />
Webでの保存には localStorage を直接使うのはやめて、 [localforage](https://localforage.github.io/localForage/) ライブラリを使っている。

MVで savefileID が使われていたが、MZではファイル名に変更されている。<br />
また保存はJSON文字列直接ではなくzip圧縮が加えられるようになった。<br />
zip圧縮・解凍には [pako](https://github.com/nodeca/pako) ライブラリが使われている。

v1.1.0、v1.2.0 で変更あり。


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_forageKeys` | [Array](Array.md) | [static] forageキーの配列 |
| `_forageKeysUpdated` | Boolean | [static] forageキーが更新されているか |


### メソッド

#### (static) exists (saveName) → {Boolean}
指定セーブファイルが存在するか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) fileDirectoryPath () → {String}
**@MZ** セーブファイルのディレクトリのパスを返す。


#### (static) filePath (saveName) → {String}
**@MZ** 指定セーブファイルにパスと拡張子(.rmmzsave)をつけて返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) forageExists (saveName) → {Boolean}
**@MZ** forageに指定セーブファイルが存在するか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) forageKey (saveName) → {String}
**@MZ** forageキーを生成して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) forageKeysUpdated () → {Boolean}
**@MZ** forageキーが更新されているか。


#### (static) forageTestKey () → {String}
**@MZ** テスト用のforageキーを返す。


#### (static) fsMkdir (path)
**@MZ** fsを使い、ディレクトリを作る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `path` | [String](String.md) | ディレクトリパス |


#### (static) fsReadFile (path) → {String}
**@MZ** fsを使い、ファイルを読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `path` | [String](String.md) | ファイルパス |


#### (static) fsRename (oldPath, newPath)
**@MZ** fsを使い、ファイル名変更。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `oldPath` | [String](String.md) | 旧ファイルパス |
| `newPath` | [String](String.md) | 新ファイルパス |


#### (static) fsWriteFile (path, data)
**@MZ** fsを使い、ファイルにデータを書き込む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `path` | [String](String.md) | ファイルパス |
| `data` | [String](String.md) | データ |


#### (static) fsUnlink (path)
**@MZ** fsを使い、ファイルをアンリンク。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `path` | [String](String.md) | ファイルパス |


#### (static) isLocalMode () → {Boolean}
ローカルモードか。


#### (static) loadObject (saveName) → {Object}
**@MZ** 指定セーブファイルを読み込んでオブジェクトを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) loadZip (saveName) → {Zip}
**@MZ** 指定セーブファイルを読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) loadFromLocalFile (saveName) → {Zip}
指定セーブファイルをローカルから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) loadFromForage (saveName) → {Zip}
**@MZ** 指定セーブファイルをローカルから読み込んで返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) localFileExists (saveName) → {Boolean}
指定セーブファイルがローカルに存在するか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) jsonToObject (json) → {Object}
**@MZ** 指定JSON文字列をオブジェクトに変換して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `json` | [String](String.md) | JSON文字列 |


#### (static) jsonToZip (json) → {Zip}
**@MZ** 指定JSON文字列をzip形式データに変換して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `json` | [String](String.md) | JSON文字列 |


#### (static) objectToJson (object) → {String}
**@MZ** 指定オブジェクトをJSON文字列に変換して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | Object | 保存するオブジェクト |


#### (static) remove (saveName) → {Boolean}
指定セーブファイルを削除して結果を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) removeForage (saveName) → {Boolean}
**@MZ** 指定セーブファイルをforage から削除して結果を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) removeLocalFile (saveName)
指定セーブファイルをローカルから削除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |


#### (static) saveObject (saveName,object)
**@MZ**JSON文字列を記録した指定セーブファイルを保存。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |
| `object` | Object | 保存するオブジェクト |



#### (static) saveToForage (saveName,zip)
**@MZ** 指定セーブファイルにzip形式データを保存。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |
| `zip` | Zip | JSON文字列のzip形式データ |


#### (static) saveZip (saveName,zip)
**@MZ** JSON文字列を記録した指定セーブファイルを保存。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [String](String.md) | セーブファイル名 |
| `zip` | Zip | JSON文字列のzip形式データ |


#### (static) saveToLocalFile (saveName, zip)
JSON文字列を記録した指定セーブファイルをローカルに保存。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `saveName` | [Number](Number.md) | セーブファイルID |
| `zip` | Zip | JSON文字列のzip形式データ  |


#### (static) updateForageKeys ()
**@MZ** forageキーをアップデート。


#### (static) zipToJson (zip) → {String}
**@MZ** 指定zip形式データをJSON文字列に変換して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `zip` | Zip | zip形式データ |


### 廃止MVメソッド

[static] backup (savefileId), backupExists (savefileId), cleanBackup (savefileId), load (savefileId), loadFromLocalBackupFile (savefileId), loadFromWebStorage (savefileId), loadFromWebStorageBackup (savefileId), localFileBackupExists (savefileId),  localFileDirectoryPath (), localFilePath (savefileId), removeWebStorage (savefileId), restoreBackup (savefileId), save (savefileId, json), saveToWebStorage (savefileId, json),webStorageBackupExists (savefileId), webStorageExists (savefileId), webStorageKey (savefileId)