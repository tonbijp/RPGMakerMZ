[クラスツリー](index.md)

# クラス: ConfigManager
[オプション]のデータを扱う、静的クラス。

関連クラス: [Window_Options](Window_Options.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `alwaysDash ` | Boolean | [static] [常時ダッシュ] \(規定値: false)  |
| `commandRemember ` | Boolean | [static] [コマンド記憶] \(規定値: false) |
| `bgmVolume` | [Number](Number.md) | [static] [BGM 音量] \(規定値: 100) |
| `bgsVolume` | [Number](Number.md) | [static] [BGS 音量] \(規定値: 100)  |
| `meVolume` | [Number](Number.md) | [static] [ME 音量] \(規定値: 100)  |
| `seVolume` | [Number](Number.md) | [static] [SE 音量] \(規定値: 100)  |
| `touchUI ` | Boolean | **@MZ** [static] [タッチUI] \(規定値: true) |
| `_isLoaded ` | Boolean | **@MZ** [static] 読み込まれたか |


### メソッド

#### (static) applyData (config)
指定オプションを適用。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `config` | [MV.ConfigData](MV.ConfigData.md) | オプションデータ |


#### (static) load ()
オプションデータの読み込み。


#### (static) makeData () → {[MV.ConfigData](MV.ConfigData.md)}
オプションデータを生成して返す。


#### (static) readFlag (config, name) → {Boolean}
指定オプションデータのフラグを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `config` | [MV.ConfigData](MV.ConfigData.md) | オプションデータ |
| `name` | [String](String.md) | 設定名( 'alwaysDash', 'commandRemember' ) |


#### (static) readVolume (config, name) → {[Number](Number.md)}
指定オプションデータの音量を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `config` | [MV.ConfigData](MV.ConfigData.md) |  |
| `name` | [String](String.md) | 設定名( 'bgmVolume', 'bgsVolume', 'meVolume', 'seVolume' ) |


#### (static) save ()
オプションデータの保存。

