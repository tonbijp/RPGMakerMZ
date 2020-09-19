# Class: ConfigManager
[オプション]のデータを扱う、静的クラス。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `alwaysDash ` | Boolean | [static] [常時ダッシュ] |
| `commandRemember ` | Boolean | [static] [コマンド記憶] |
| `bgmVolume` | [Number](Number.md) | [static] [BGM 音量] |
| `bgsVolume` | [Number](Number.md) | [static] [BGS 音量] |
| `meVolume` | [Number](Number.md) | [static] [ME 音量] |
| `seVolume` | [Number](Number.md) | [static] [SE 音量] |


### Methods

#### (static) applyData (config)
指定オプションを適用。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `config` | [MV.ConfigData](MV.ConfigData.md) | オプションデータ |


#### (static) load ()
オプションデータの読み込み。


#### (static) makeData () → {[MV.ConfigData](MV.ConfigData.md)}
オプションデータを生成して返す。


#### (static) readFlag (config, name) → {Boolean}
指定オプションデータのフラグを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `config` | [MV.ConfigData](MV.ConfigData.md) | オプションデータ |
| `name` | [String](String.md) | 設定名( 'alwaysDash', 'commandRemember' ) |


#### (static) readVolume (config, name) → {[Number](Number.md)}
指定オプションデータの音量を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `config` | [MV.ConfigData](MV.ConfigData.md) |  |
| `name` | [String](String.md) | 設定名( 'bgmVolume', 'bgsVolume', 'meVolume', 'seVolume' ) |


#### (static) save ()
オプションデータの保存。

