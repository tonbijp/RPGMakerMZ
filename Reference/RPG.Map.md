# Class: [RPG](RPG.md).Map

## Extends: [RPG.MetaData](RPG.MetaData.md) 

| データベース| JSONファイル | 大域変数 | オブジェクト | スプライトセット |
| --- | --- | --- | --- | --- |
| マップ | MapXXX.json | [$dataMap](global.md#datamap-rpgmap) | [Game_Map](Game_Map.md) | [Spriteset_Map](Spriteset_Map.md) |

JSONファイルの XXX は3桁の数値。

関連クラス: [Scene_Map](Scene_Map.md), [ShaderTilemap](ShaderTilemap.md), [RPG.MapInfo](RPG.MapInfo.md)
 

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `displayName` | [String](String.md) | [表示名] |
| `tilesetId` | [Number](Number.md) | [タイルセット]のID |
| `width` | [Number](Number.md) | マップの[幅] \(タイル数) |
| `height` | [Number](Number.md) | マップの[高さ] \(タイル数) |
| `scrollType` | [Number](Number.md) | [[スクロールタイプ]](RPG.Map.md#スクロールタイプ) |
| `specifyBattleback` | Boolean | [戦闘背景指定]するか |
| `battleback1Name` | [String](String.md) | レイヤー奥の戦闘背景画像1(地面)のファイル名 |
| `battleback2Name` | [String](String.md) | レイヤー手前の戦闘背景画像2(壁)のファイル名 |
| `autoplayBgm` | Boolean | [BGM自動演奏]するか |
| `bgm` | [RPG.AudioFile](RPG.AudioFile.md) | BGMの音声 |
| `autoplayBgs` | Boolean | [BGS自動演奏]するか |
| `bgs` | [RPG.AudioFile](RPG.AudioFile.md) | BGSの音声 |
| `disableDashing` | Boolean | [ダッシュ禁止]か |
| `encounterList` | [Array](Array.md).&lt;[RPG.Map.Encounter](RPG.Map.Encounter.md)&gt; | [エンカウント]の配列 |
| `encounterStep` | [Number](Number.md) | [敵出現歩数] |
| `parallaxName` | [String](String.md) | [遠景]の画像ファイル名 |
| `parallaxLoopX` | Boolean | [遠景]が[横方向にループする]か |
| `parallaxLoopY` | Boolean | [遠景]が[縦方向にループする]か |
| `parallaxSx` | [Number](Number.md) | [遠景]が[横方向にループする]場合の[スクロール]量 |
| `parallaxSy` | [Number](Number.md) | [遠景]が[縦方向にループする]場合の[スクロール]量 |
| `parallaxShow` | Boolean | [遠景]を[エディターに表示する]か |
| `data` | [Array](Array.md).&lt;[Number](Number.md)&gt; | タイルIDの配列による[マップデータ](RPG.Map.md#マップデータ) |
| `events` | [Array](Array.md).&lt;[RPG.Event](RPG.Event.md)&gt; | [イベント]データの配列 |

####  [スクロールタイプ]

| 番号 | [スクロールタイプ] |
| --- | --- |
| 0 | ループしない |
| 1 | 縦方向にループする |
| 2 | 横方向にループする |
| 3 | 縦横共にループする |

#### マップデータ
data プロパティは一次元配列で、<code>data[ x + ( y + z\*h )\*w ]</code> の形で取り出せる。<br />
x: x座標, y: y座標, w: マップ幅, h: マップ高さ, z: マップレイヤー
 
##### z:マップレイヤー
 
| z | Description |
| --- | --- |
| 5 | リージョン |
| 4 | 影ペン |
| 3 | B〜Eタイル | 
| 2 | B〜Eタイル | 
| 1 | A2右側タイル |
| 0 | Aタイル |

### Classes

* [RPG.Map.Encounter](RPG.Map.Encounter.md)


