# Class: StorageManager
ゲームのセーブデータを管理する静的クラス。

ローカルファイル機能は、node.js の fs モジュールを使っている。<br />
Webストレージは JavaScript の localStorage を使っている。


### Methods

#### (static) backup (savefileId)
指定セーブファイルのバックアップを取る。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) backupExists (savefileId) → {Boolean}
指定セーブファイルのバックアップがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) cleanBackup (savefileId) 
指定セーブファイルのバックアップを削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) exists (savefileId) → {Boolean}
指定セーブファイルが存在するか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) isLocalMode () → {Boolean}
ローカルモードか。


#### (static) load (savefileId) → {[String](String.md)}
指定セーブファイルを読み込んで返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) loadFromLocalBackupFile (savefileId) → {[String](String.md)}
指定セーブファイルをローカルバックアップから読み込んで返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) loadFromLocalFile (savefileId) → {[String](String.md)}
指定セーブファイルをローカルから読み込んで返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) loadFromWebStorage (savefileId) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) loadFromWebStorageBackup (savefileId) → {[String](String.md)}
指定セーブファイルをWebストレージバックアップから読み込んで返す。
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) localFileBackupExists (savefileId) → {Boolean}
指定セーブファイルがWebストレージに存在するか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) localFileDirectoryPath () → {[String](String.md)}
ローカルのセーブファイルディレクトリのバス(規定値: ゲームフォルダ + 'save/')を返す。


#### (static) localFileExists (savefileId) → {Boolean}
指定セーブファイルがローカルに存在するか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) localFilePath (savefileId) → {[String](String.md)}
指定セーブファイルのローカルファイルパスを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) remove (savefileId)
指定セーブファイルを削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) removeLocalFile (savefileId)
指定セーブファイルをローカルから削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) removeWebStorage (savefileId)
指定セーブファイルをWebストレージから削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) restoreBackup (savefileId)
指定セーブファイルをバックアップから復元。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) save (savefileId, json)
JSON文字列を記録した指定セーブファイルを保存。
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |
| `json` | [String](String.md) | JSON文字列 |


#### (static) saveToLocalFile (savefileId, json)
JSON文字列を記録した指定セーブファイルをローカルに保存。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |
| `json` | [String](String.md) | JSON文字列 |


#### (static) saveToWebStorage (savefileId, json)
JSON文字列を記録した指定セーブファイルをWebストレージに保存。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |
| `json` | [String](String.md) | JSON文字列 |


#### (static) webStorageBackupExists (savefileId) → {Boolean}
指定セーブファイルがWebストレージのバックアップに存在するか。
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) webStorageExists (savefileId) → {Boolean}
指定セーブファイルがWebストレージに存在するか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) webStorageKey (savefileId) → {[String](String.md)}
指定セーブファイルのWebストレージキーを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |

