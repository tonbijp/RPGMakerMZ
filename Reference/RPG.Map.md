[クラスツリー](index.md)

# クラス: [RPG](RPG.md).Map

## スーパークラス: [RPG.MetaData](RPG.MetaData.md) 

| データベース| JSONファイル | 大域変数 | オブジェクト | スプライトセット |
| --- | --- | --- | --- | --- |
| マップ | MapXXX.json | [$dataMap](global.md#datamap-rpgmap) | [Game_Map](Game_Map.md) | [Spriteset_Map](Spriteset_Map.md) |

JSONファイルの XXX は3桁の数値。

`$dataMap`はマップを移動するごとに読み込まれ、常に現在のマップのデータに置き換えられます。

関連クラス: [Scene_Map](Scene_Map.md), [RPG.MapInfo](RPG.MapInfo.md)
 

### プロパティ

| 識別子 | 型 | 説明 |
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
| `data` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [タイルID](Tilemap.md#タイルID)の配列による[マップデータ](RPG.Map.md#マップデータ) |
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
マップの1タイルは、以下の情報を持っています。

| z | レイヤー | 説明 |
| --- | --- | --- |
| 5 | なし | リージョン番号 |
| 4 | レイヤー2と3の間 | 影ペン(※) |
| 3 | レイヤー4 | 主にB〜Eタイル番号 |
| 2 | レイヤー3 | 主にB〜Eタイル番号 |
| 1 | レイヤー2 | 主にA2右側のタイル番号 |
| 0 | レイヤー1 | 主にAのタイル番号|

※ 影ペンは1タイルにつき4つに分けられた領域を塗りつぶします。
その情報を 1:左上、2:右上、4:左下、8:右下 のビットとして持っています。

次の例は1タイルだけのマップを作って、その MapXXX.json の data 部分を取り出したものです。
```js
"data":[2864,3008,139,147,5,255] // [レイヤー1, レイヤー2, レイヤー3, レイヤー4, 影ペン, リージョン]
```
つまり上記のデータの場合、[タイル番号, タイル番号, タイル番号, タイル番号 ,影ペン 0b0101 = 5, リージョン番号]となっているわけです。<br />
これがさらにタイルが増えるごとに繰り返されます。<br />
二次元や三次元配列ではなく一次元配列に格納されるので、[マップデータ](#マップデータ)で説明してある、取り出しのための数式が必要になりす。

### インナークラス

* [RPG.Map.Encounter](RPG.Map.Encounter.md)


