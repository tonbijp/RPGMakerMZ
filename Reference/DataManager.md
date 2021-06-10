[クラスツリー](index.md)

# クラス: DataManager
[データベース]の管理を行う静的クラス。

$XXXで大域変数に設定されているものや、セーブデータの管理など行う。

大域変数について詳細は [Global](global.md) のページを参照。

関連クラス: [JsonEx](JsonEx.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_globalInfo` | Object | [static] セーブされるシステム情報  |
| `_errors` | [Array](Array.md) | **@MZ**[static] エラーの配列 |
| `_databaseFiles` | [Array](Array.md).&lt;[MV.DatabaseFile](MV.DatabaseFile.md)&gt; | [static] 読み込むデータファイル情報 |

### 廃止MVプロパティ
`_globalId`,`_lastAccessedId`,`_errorUrl`


### メソッド

#### (static) checkError ()
エラーが記録されていれば、エラーを表示。


#### (static) correctDataErrors ()
**@MZ** セーブデータに含まれるエラーを正す。


#### (static) createGameObjects ()
$game から始まる大域変数に、対応したオブジェクトを生成し代入。


#### (static) earliestSavefileId () → {[Number](Number.md)}
**@MZ** 一番古いセーブファイルID を返す。


#### (static) emptySavefileId () → {[Number](Number.md)}
**@MZ** 空のセーブファイルID を返す。


#### (static) extractArrayMetadata (array)
**@MZ** 渡したデータの配列に含まれるnoteをメタデータに分解して、データに追加する。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `array` | [Array](Array.md)&lt;[RPG.MetaData](RPG.MetaData.md)&gt;  | データの配列 |


#### (static) extractMetadata (data)
data.noteに書いてあるデータを分解しdata.metaに設定。<br />
渡したdata自体が書き換えられるので、返り値はない。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `data` | Object | [RPG.MetaData](RPG.MetaData.md) |


#### (static) extractSaveContents (contents)
渡したオブジェクトから$gameで始まる大域変数に値を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `contents` | [MV.SaveContents](MV.SaveContents.md) | 大域変数用オブジェクト |


#### (static) isAnySavefileExists () → {Boolean}
 セーブファイルが(ひとつでも)存在するか。


#### (static) isArmor (item) → {Boolean}
指定した項目が[防具]に含まれるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `item` | Object | [RPG.Armor](RPG.Armor.md)など |


#### (static) isBattleTest () → {Boolean}
[戦闘テスト]モードか。


#### (static) isDatabaseLoaded () → {Boolean}
 データベースの読み込みが完了しているか。


#### (static) isEventTest () → {Boolean}
[イベントテスト]モードか。


#### (static) isGlobalInfoLoaded () → {Boolean}
**@MZ** `_globalInfo`が読み込まれているか。


#### (static) isItem (item) → {Boolean}
 指定した項目が[アイテム]に含まれるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `item` | Object | [RPG.Item](RPG.Item.md)など |


#### (static) isMapLoaded () → {Boolean}
 マップの読み込みが完了しているか。
 

#### (static) isMapObject (object) → {Boolean}
**@MZ** 渡したオブジェクトがマップオブジェクトか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | Object | データを格納したオブジェクト |


#### (static) isSkill (item) → {Boolean}
 指定した項目が[スキル]に含まれるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `item` | Object | [RPG.Skill](RPG.Skill.md)など |


#### (static) isWeapon (item) → {Boolean}
 指定した項目が[武器]に含まれるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `item` | Object | [RPG.Weapon](RPG.Weapon.md)など |


#### (static) latestSavefileId () → {[Number](Number.md)}
 最新のセーブファイルID を返す。


#### (static) loadAllSavefileImages ()
 全てのセーブファイルの画像を読み込む。


#### (static) loadDatabase ()
 データベースファイル( $data から始まる大域変数に代入される JSON)を読み込む。 ただし $dataMap は別扱い。


#### (static) loadDataFile (name, src)
 指定したデータを読み込む。読み込みが完了したら onLoad が呼ばれる。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) |  データ代入先の大域変数名 $dataXXX |
| `src` | [String](String.md) | data/以下のファイル名 |


#### (static) loadGame (savefileId)
 指定したセーブファイルID からデータを読み込む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) loadGlobalInfo ()
セーブファイル("global")の情報を読み込む。<br />
情報は`_globalInfo`に保存される。


#### (static) loadMapData (mapId)
 マップデータを読み込む。完了時は onLoad が呼ばれる。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `mapId` | [Number](Number.md) | 1: 空のマップを作る |


#### (static) loadSavefileImages (info)
 セーブファイルに必要な画像を読み込む。<br />
読み込まれた画像は[ImageManager](ImageManager.md)に保管される。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `info` | [MV.SaveFileInfo](MV.SaveFileInfo.md) | セーブファイル情報 |


#### (static) makeEmptyMap ()
 空のマップを作成。


#### (static) makeSaveContents () → {[MV.SaveContents](MV.SaveContents.md)}
セーブ用のデータ作成。$gameで始まる大域変数をまとめたオブジェクトを返す。


#### (static) makeSavefileInfo () → {[MV.SaveFileInfo](MV.SaveFileInfo.md)}
新規のセーブファイル情報を作って返す。


#### (static) maxSavefiles () → {[Number](Number.md)}
セーブ可能なファイルの最大数を返す。


#### (static) makeSavename (savefileId)
**@MZ**  指定したセーブファイルID からセーブ名を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) onLoad (object)
データ読み込み完了時に呼ばれるハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `object` | Object |  データを格納したオブジェクト |


#### (static) onXhrLoad (xhr, name, src, url)
**@MZ**  xhr(XMLHttpRequest)データ読み込み完了時に呼ばれるハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `xhr` | XMLHttpRequest |  データを格納したオブジェクト |
| `name` | [String](String.md) |  データ代入先の大域変数名 $dataXXX |
| `src` | [String](String.md) | data/以下のファイル名 |
| `url` | [String](String.md) | data/も含んだパス |


#### (static) onXhrError ( name, src, url)
**@MZ**  xhr(XMLHttpRequest)データ読み込みエラー発生時に呼ばれるハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) |  データ代入先の大域変数名 $dataXXX |
| `src` | [String](String.md) | data/以下のファイル名 |
| `url` | [String](String.md) |  data/も含んだパス |


#### (static) removeInvalidGlobalInfo ()
**@MZ** 適正でない情報を`_globalInfo`から削除。

 
#### (static) savefileExists (savefileId)
**@MZ** 指定IDのセーブファイルが存在するか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) saveGame (savefileId) → {Boolean}
ゲームデータをセーブファイルに保存し、 保存に成功したか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) savefileInfo (savefileId) → {[MV.SaveFileInfo](MV.SaveFileInfo.md)}
**@MZ** 指定IDのセーブファイル情報を得る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `savefileId` | [Number](Number.md) | セーブファイルID |


#### (static) saveGlobalInfo (info)
セーブファイル情報を保存。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `info` | [MV.SaveFileInfo](MV.SaveFileInfo.md) | セーブファイル情報 |


#### (static) selectSavefileForNewGame ()
新規ゲーム用のセーブファイルを選択。


#### (static) setupBattleTest ()
[戦闘テスト] の準備。


#### (static) setupEventTest ()
[イベントテスト]の準備。


#### (static) setupNewGame ()
新規ゲームの準備。


### 廃止MVメソッド
[static] loadGameWithoutRescue (savefileId), isThisGameFile (savefileId), loadSavefileInfo (savefileId), lastAccessedSavefileId (), saveGameWithoutRescue (savefileId) 