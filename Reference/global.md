[クラスツリー](index.md)

# Global

大域(グローバル)変数の一覧。[DataManager](DataManager.md) で生成・管理されている。

多くの箇所で参照されるクラスが$から始まる大域変数に格納されていて、次の種類がある。

* 名前に data が付いた( dataフォルダ以下にあるJSONファイルの)データクラス
* 名前に game が付いた管理用のクラス
* そのほかのクラス

$gameXxx の多くはセーブデータになるが、セーブされないものもある。

### Members

#### $dataActors :[Array](Array.md).&lt;[RPG.Actor](RPG.Actor.md)&gt;
[アクター]用JSON( Actors.json )。


#### $dataAnimations :[Array](Array.md).&lt;[RPG.Animation](RPG.Animation.md)&gt;
[アニメーション]用JSON( Animations.json )。


#### $dataArmors :[Array](Array.md).&lt;[RPG.Armor](RPG.Armor.md)&gt;
[防具]用JSON( Armors.json )。


#### $dataClasses :[Array](Array.md).&lt;[RPG.Class](RPG.Class.md)&gt;
[職業]用JSON( Classes.json )。


#### $dataCommonEvents :[Array](Array.md).&lt;[RPG.CommonEvent](RPG.CommonEvent.md)&gt;
[コモンイベント]用JSON( CommonEvents.json )。


#### $dataEnemies :[Array](Array.md).&lt;[RPG.Enemy](RPG.Enemy.md)&gt;
[敵キャラ]用JSON( Enemies.json )。


#### $dataItems :[Array](Array.md).&lt;[RPG.Item](RPG.Item.md)&gt;
[アイテム]用JSON( Items.json )。


#### $dataMap :[RPG.Map](RPG.Map.md)
現在のマップ用JSON( MapXXX.json( XXX は3桁の数値) )。


#### $dataMapInfos :[Array](Array.md).&lt;[RPG.MapInfo](RPG.MapInfo.md)&gt;
マップ一覧用JSON( MapInfo.json )。


#### $dataSkills :[Array](Array.md).&lt;[RPG.Skill](RPG.Skill.md)&gt;
[スキル]用JSON( Skills.json )。


#### $dataStates :[Array](Array.md).&lt;[RPG.State](RPG.State.md)&gt;
[ステート]用JSON( States.json )。


#### $dataSystem :[RPG.System](RPG.System.md)
[システム]用JSON( System.json )。


#### $dataTilesets :[Array](Array.md).&lt;[RPG.Tileset](RPG.Tileset.md)&gt;
[タイルセット]用JSON( Tilesets.json )。


#### $dataTroops :[Array](Array.md).&lt;[RPG.Troop](RPG.Troop.md)&gt;
[敵グループ]用JSON( Troops.json )。


#### $dataWeapons :[Array](Array.md).&lt;[RPG.Weapon](RPG.Weapon.md)&gt;
[武器]用JSON( Weapons.json )。


<hr>


#### $gameActors :[Game_Actors](Game_Actors.md)
[アクター]管理用のクラス。※セーブ


#### $gameMap :[Game_Map](Game_Map.md)
[マップ]管理用のクラス。※セーブ


#### $gameMessage :[Game_Message](Game_Message.md)
[メッセージ]管理用のクラス。


#### $gameParty :[Game_Party](Game_Party.md)
[パーティー]管理用のクラス。※セーブ


#### $gamePlayer :[Game_Player](Game_Player.md)
[プレイヤー]管理用のクラス。※セーブ


#### $gameScreen :[Game_Screen](Game_Screen.md)
画面管理用のクラス。※セーブ


#### $gameSelfSwitches :[Game_SelfSwitches](Game_SelfSwitches.md)
[セルフスイッチ]管理用のクラス。※セーブ


#### $gameSwitches :[Game_Switches](Game_Switches.md)
[スイッチ]管理用のクラス。※セーブ


#### $gameSystem :[Game_System](Game_System.md)
[システム]管理用のクラス。※セーブ


#### $gameTemp :[Game_Temp](Game_Temp.md)
ゲームの一時データを保持しておくクラス。


#### $gameTimer :[Game_Timer](Game_Timer.md)
タイマー管理用のクラス。※セーブ


#### $gameTroop :[Game_Troop](Game_Troop.md)
[敵グループ]管理用のクラス。


#### $gameVariables :[Game_Variables](Game_Variables.md)
[変数]管理用のクラス。※セーブ


<hr>


#### $plugins :[Array](Array.md).&lt;[MV.PluginSettings](MV.PluginSettings.md)&gt;
『RPGツクールMZ』プラグイン設定( js/plugins.js )。


#### $testEvent :[Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt;
[テスト]を実行した場合に渡される[イベント]。


#### scriptUrls :[Array](Array.md).&lt;[String](String.md)&gt;
**@MZ** コアスクリプトの JavaScript ファイルパスの配列。


#### effekseerWasmUrl :[String](String.md)
**@MZ** effekseer.wasm のファイルパス。


#### main :[Main](Main.md)
**@MZ** メインオブジェクト。

その他、ライブラリごとに `effekseer` や `process` などの大域変数が用意されているが詳細は Effekseer や NW.js、Pixi.js の公式サイトなど参照。

