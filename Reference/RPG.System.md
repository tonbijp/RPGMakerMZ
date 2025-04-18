[クラスツリー](index.md)

# クラス: [RPG](RPG.md).System

| データベース| JSONファイル | 大域変数 | オブジェクト |
| --- | --- | --- | --- |
| [システム] | System.json | [$dataSystem](global.md#datasystem-rpgsystem) |  |

v1.5.0, 1.9.0 で変更あり。

関連クラス: [Game_System](Game_System.md), [Game_Variables](Game_Variables.md), [Game_Switches](Game_Switches.md), [TextManager](TextManager.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `gameTitle` | [String](String.md) | [ゲームタイトル] |
| `versionId` | [Number](Number.md) | 『RPGメーカーMZ』によって自動的に保存されるバージョンID |
| `locale` | [String](String.md) | 地域設定 ja\_JP, en\_US, zh\_CN, zh\_TW, ko\_KR, ru\_RU |
| `partyMembers` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [初期パーティ] アクターIDの配列 |
| `currencyUnit` | [String](String.md) | [通貨単位] |
| `windowTone` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [ウィンドウカラー] |
| `attackMotions` | [Array](Array.md).&lt;[RPG.System.AttackMotion](RPG.System.AttackMotion.md)&gt; | [\[SV\]攻撃モーション]の配列 |
| `battleSystem` | [Number](Number.md) | **@MZ** [戦闘システム] |
| `elements` | [Array](Array.md).&lt;[String](String.md)&gt; | [属性ID](RPG.Damage.md#属性id)に対応する名称の配列 |
| `equipTypes` | [Array](Array.md).&lt;[String](String.md)&gt; | [装備タイプID](RPG.Trait.md#装備タイプid)に対応する名称の配列 |
| `skillTypes` | [Array](Array.md).&lt;[String](String.md)&gt; | [スキルタイプID](RPG.Trait.md#スキルタイプid)に対応する名称の配列 |
| `weaponTypes` | [Array](Array.md).&lt;[String](String.md)&gt; | [武器タイプID](RPG.Trait.md#武器タイプid)に対応する名称の配列 |
| `armorTypes` | [Array](Array.md).&lt;[String](String.md)&gt; | [防具タイプID](RPG.Trait.md#防具タイプid)に対応する名称の配列 |
| `switches` | [Array](Array.md).&lt;[String](String.md)&gt; | [スイッチ]の名前の配列(0位置は空文字列) |
| `variables` | [Array](Array.md).&lt;[String](String.md)&gt; | [変数]の名前の配列(0位置は空文字列) |
| `boat` | [RPG.System.Vehicle](RPG.System.Vehicle.md) | [小型船]の設定 |
| `ship` | [RPG.System.Vehicle](RPG.System.Vehicle.md) | [大型船]の設定 |
| `airship` | [RPG.System.Vehicle](RPG.System.Vehicle.md) | [飛行船]の設定 |
| `title1Name` | [String](String.md) | タイトル画面の背景画像(拡張子を含まない) |
| `title2Name` | [String](String.md) | タイトル画面の枠画像(拡張子を含まない) |
| `optDrawTitle` | Boolean | [ゲームタイトルの描画] |
| `optTransparent` | Boolean | [透明状態で開始] |
| `optFollowers` | Boolean | [パーティの隊列歩行] |
| `optSlipDeath` | Boolean | [スリップダメージで戦闘不能] |
| `optFloorDeath` | Boolean | [床ダメージで戦闘不能] |
| `optDisplayTp` | Boolean | [ウィンドウにTPを表示] |
| `optExtraExp` | Boolean | [控えメンバーも経験値を獲得] |
| `optKeyItemsNumber` | Boolean | **@MZ** [大事なものの個数を表示] |
| `optSideView` | Boolean | [サイドビュー戦闘を使用] |
| `optAutosave` | Boolean | **@MZ** [オートセーブを有効化] |
| `titleBgm` | [RPG.AudioFile](RPG.AudioFile.md) | [音楽]-[タイプ]-[タイトル] |
| `battleBgm` | [RPG.AudioFile](RPG.AudioFile.md) | [音楽]-[タイプ]-[戦闘] |
| `victoryMe` | [RPG.AudioFile](RPG.AudioFile.md) | **@MZ** [音楽]-[タイプ]-[勝利] |
| `defeatMe` | [RPG.AudioFile](RPG.AudioFile.md) | **@MZ** [音楽]-[タイプ]-[敗北] |
| `gameoverMe` | [RPG.AudioFile](RPG.AudioFile.md) | [音楽]-[タイプ]-[ゲームオーバー] |
| `sounds` | [Array](Array.md).&lt;[RPG.AudioFile](RPG.AudioFile.md)&gt; | [効果音]の音声データの配列 |
| `startMapId` | [Number](Number.md) | プレイヤーの [初期位置] のマップID |
| `startX` | [Number](Number.md) | プレイヤーの [初期位置] のx座標(タイル数) |
| `startY` | [Number](Number.md) | プレイヤーの [初期位置] のy座標(タイル数)|
| `terms` | [RPG.System.Terms](RPG.System.Terms.md) | [用語]タブの内容 |
| `testBattlers` | [Array](Array.md).&lt;[RPG.System.TestBattler](RPG.System.TestBattler.md)&gt; | 戦闘テスト用のパーティ |
| `testTroopId` | [Number](Number.md) | 戦闘テスト用の敵グループID |
| `battleback1Name` | [String](String.md) |  戦闘テスト用の背景画像1(拡張子を含まない) |
| `battleback2Name` | [String](String.md) |  戦闘テスト用の背景画像2(拡張子を含まない) |
| `battlerName` | [String](String.md) | アニメーション制作時の背景画像(拡張子を含まない) |
| `battlerHue` | [Number](Number.md) | アニメーション制作時の[敵キャラ]の色相(0〜360) |
| `editMapId` | [Number](Number.md) | 最後に編集中だったマップID |
| `advanced` | [RPG.System.Advanced](RPG.System.Advanced.md) | **@MZ** [高度な設定] |
| `menuCommands` | [Array](Array.md).&lt;Boolean&gt; | **@MZ** [メニューコマンド] |
| `itemCategories` | [Array](Array.md).&lt;Boolean&gt; | **@MZ** [アイテムカテゴリー] |
| `magicSkills` | [Array](Array.md).&lt;[Number](Number.md)&gt; | **@MZ** [\[SV\]魔法スキル] |
| `titleCommandWindow` | [RPG.System.TitleCommandWindow](RPG.System.TitleCommandWindow.md) | **@MZ** [コマンドウィンドウ] |
| `editor` | [RPG.System.Editor](RPG.System.Editor.md) | **@MZ1.9.0** [エディター設定] |
| `tileSize` | [Number](Number.md) | **@MZ1.5.0** [タイルサイズ] (規定値:48ピクセル) |
| `iconSize` | [Number](Number.md) | **@MZ1.9.0** [アイコンサイズ] (規定値:32ピクセル) |
| `faceSize` | [Number](Number.md) | **@MZ1.9.0** [顔サイズ] (規定値:144ピクセル) |



### 廃止MVプロパティ
`battleEndMe`

### インナークラス

* [RPG.System.Advanced](RPG.System.Advanced.md) **@MZ**
* [RPG.System.AttackMotion](RPG.System.AttackMotion.md)
* [RPG.System.Editor](RPG.System.Editor.md) **@MZ1.9.0**
* [RPG.System.titleCommandWindow](RPG.System.titleCommandWindow.md) **@MZ**
* [RPG.System.Terms](RPG.System.Terms.md)
* [RPG.System.TestBattler](RPG.System.TestBattler.md)
* [RPG.System.Vehicle](RPG.System.Vehicle.md)


