[README](README.md)

# RPGツクールMZ 非公式JavaScriptリファレンス - クラスツリー

## 目次

* [メイン](#メイン)
* [JavaScript拡張](#javascript拡張)
* [マネージャ](#マネージャ)
* [ユーティリティ](#ユーティリティ)
* [入力](#入力)
* [ファイル](#ファイル)
* [音声](#音声)

### オブジェクト構造データ

* [Objects](#Objects) 
* [Arrays](#Arrays) 
* [Strings](#Strings) 

### データベース(JSON)

* [イベントコマンド](#イベントコマンド)
* [メモつきデータ(MetaData)](#メモつきデータmetadata)
* [その他データベース](#その他データベース)

### オブジェクト

* [システム](#システム)
* [スイッチ・変数](#スイッチ変数)
* [マップキャラクタ](#マップキャラクタ)
* [バトルキャラクタ](#バトルキャラクタ)
* [その他オブジェクト](#その他オブジェクト)

### 画像

* [コア機能](#コア機能)
* [コンテナ(PIXI.Container)](#コンテナpixicontainer)
	* [スプライト(Sprite)](#スプライトsprite)
	* [シーン(Scene_Base)](#シーンscene_base)

### ウィンドウ

* [ウィンドウ(Window)](#ウィンドウwindow)
	* [選択ウィンドウ(Window_Selectable)](#選択ウィンドウwindow_selectable)
        * [項目表示ウィンドウ(Window_ItemList)](#項目表示ウィンドウwindow_itemlist)
        *  [ステータス表示ウィンドウ(Window_StatusBase)](#ステータス表示ウィンドウwindow_statusbase)
		* [コマンドウィンドウ(Window_Command)](#コマンドウィンドウwindow_command)

### 注釈

* **@MZ** は『RPGツクールMZ』で増えたクラス。
* 以下で表われる「→ 継承」は継承先へのリンク。

## メイン

* [Main](Main.md) **@MZ** 


## JavaScript拡張
namespace JsExtensions

* [Array](Array.md)
* [Math](Math.md)
* [Number](Number.md)
* [String](String.md)


## マネージャ

* [AudioManager](AudioManager.md)
* [BattleManager](BattleManager.md)
* [ColorManager](ColorManager.md) **@MZ**
* [ConfigManager](ConfigManager.md)
* [DataManager](DataManager.md)
* [EffectManager](EffectManager.md) **@MZ**
* [FontManager](FontManager.md) **@MZ**
* [ImageManager](ImageManager.md)
* [PluginManager](PluginManager.md) ([プラグインファイルの設定](MV.PluginSettings.md#プラグインファイルの設定))
* [PluginManagerEx](PluginManagerEx.md) **@MZ PluginCommonBase.js** 
* [SceneManager](SceneManager.md)
* [SoundManager](SoundManager.md)
* [StorageManager](StorageManager.md)
* [TextManager](TextManager.md)


## ユーティリティ

* [JsonEx](JsonEx.md)
* [Utils](Utils.md)
* [Video](Video.md) **@MZ**


## 入力

* [Input](Input.md)
* [TouchInput](TouchInput.md)


## 音声

* [WebAudio](WebAudio.md)


## オブジェクト構造データ
[MVネームスペース](MV.md) 

### Objects

* [MV.AnimationRequest](MV.AnimationRequest.md)
* [MV.AudioParameters](MV.AudioParameters.md)
* [MV.BalloonRequest](MV.BalloonRequest.md)
* [MV.BattleLogMethod](MV.BattleLogMethod.md)
* [MV.BattlerAnimation](MV.BattlerAnimation.md)
* [MV.BattleRewards](MV.BattleRewards.md)
* [MV.CommandItem](MV.CommandItem.md)
* [MV.ConfigData](MV.ConfigData.md)
* [MV.DatabaseFile](MV.DatabaseFile.md)
* [MV.Matrix](MV.Matrix.md)
* [MV.Motion](MV.Motion.md)
* [MV.PluginSettings](MV.PluginSettings.md)
* [MV.Rectangle](MV.Rectangle.md)
* [MV.SaveContents](MV.SaveContents.md)
* [MV.SaveFileInfo](MV.SaveFileInfo.md)
* [MV.Size](MV.Size.md)
* [MV.TextState](MV.TextState.md)
* [MV.TouchInputEvents](MV.TouchInputEvents.md)


### Arrays

* [MV.Color](MV.Color.md)
* [MV.SelfSwitch](MV.SelfSwitch.md)
* [MV.TileRect](MV.TileRect.md)
* [MV.Tone](MV.Tone.md)

### Strings

* [MV.CssColor](MV.CssColor.md)


## データベース(JSON)
[RPGネームスペース](RPG.md) 

### イベントコマンド

* [RPG.BattleEventPage](RPG.BattleEventPage.md) 
* [RPG.BattleEventPage.Conditions](RPG.BattleEventPage.Conditions.md)
* [RPG.CommonEvent](RPG.CommonEvent.md)([$dataCommonEvents](global.md#datacommonevents-arrayrpgcommonevent))
* [RPG.EventCommand](RPG.EventCommand.md)([$testEvent](global.md#testevent-arrayrpgeventcommand))
* [RPG.EventPage](RPG.EventPage.md) 
* [RPG.EventPage.Conditions](RPG.EventPage.Conditions.md) 
* [RPG.EventPage.Image](RPG.EventPage.Image.md)
* [RPG.MoveCommand](RPG.MoveCommand.md)
* [RPG.MoveRoute](RPG.MoveRoute.md)

### メモつきデータ(MetaData)

* [RPG.MetaData](RPG.MetaData.md)
	* [RPG.Actor](RPG.Actor.md)([$dataActors](global.md#dataactors-arrayrpgactor))
	* [RPG.Class](RPG.Class.md)([$dataClasses](global.md#dataclasses-arrayrpgclass))
    * [RPG.Class.Learning](RPG.Class.Learning.md)
	* [RPG.Enemy](RPG.Enemy.md)([$dataEnemies](global.md#dataenemies-arrayrpgenemy))
    * [RPG.Enemy.Action](RPG.Enemy.Action.md)
    * [RPG.Enemy.DropItem](RPG.Enemy.DropItem.md)
	* [RPG.Event](RPG.Event.md)
	* [RPG.Map](RPG.Map.md)([$dataMap](global.md#datamap-rpgmap))
    * [RPG.Map.Encounter](RPG.Map.Encounter.md)
	* [RPG.State](RPG.State.md)([$dataStates](global.md#datastates-arrayrpgstate))
	* [RPG.Tileset](RPG.Tileset.md)([$dataTilesets](global.md#datatilesets-arrayrpgtileset))
	* [RPG.BaseItem](RPG.BaseItem.md)
	    * [RPG.UsableItem](RPG.UsableItem.md)
	        * [RPG.Item](RPG.Item.md)([$dataItems](global.md#dataitems-arrayrpgitem))
	        * [RPG.Skill](RPG.Skill.md)([$dataSkills](global.md#dataskills-arrayrpgskill))
	    * [RPG.EquipItem](RPG.EquipItem.md)
	        * [RPG.Armor](RPG.Armor.md)([$dataArmors](global.md#dataarmors-arrayrpgarmor))
	        * [RPG.Weapon](RPG.Weapon.md)([$dataWeapons](global.md#dataweapons-arrayrpgweapon))

### その他データベース

* [RPG.Animation](RPG.Animation.md)([$dataAnimations](global.md#dataanimations-arrayrpganimation))
* [RPG.Animation.Timing](RPG.Animation.Timing.md)
* [RPG.AudioFile](RPG.AudioFile.md)
* [RPG.MapInfo](RPG.MapInfo.md)([$dataMapInfos](global.md#datamapinfos-arrayrpgmapinfo))
* [RPG.System](RPG.System.md)([$dataSystem](global.md#datasystem-rpgsystem)) 
* [RPG.System.Advanced](RPG.System.Advanced.md) **@MZ**
* [RPG.System.AttackMotion](RPG.System.AttackMotion.md)
* [RPG.System.Editor](RPG.System.Editor.md) **@MZ1.9.0**
* [RPG.System.TitleCommandWindow](RPG.System.TitleCommandWindow.md) **@MZ** 
* [RPG.System.Terms](RPG.System.Terms.md) 
* [RPG.System.TestBattler](RPG.System.TestBattler.md)
* [RPG.System.Vehicle](RPG.System.Vehicle.md)
* [RPG.Troop](RPG.Troop.md)([$dataTroops](global.md#datatroops-arrayrpgtroop))
* [RPG.Troop.Member](RPG.Troop.Member.md)
* [RPG.Damage](RPG.Damage.md)
* [RPG.Effect](RPG.Effect.md)
* [RPG.Trait](RPG.Trait.md)


## オブジェクト

### システム

* [Game_CommonEvent](Game_CommonEvent.md)
* [Game_Interpreter](Game_Interpreter.md)([イベントコマンド系メソッド](Game_Interpreter_command.md))
* [Game_System](Game_System.md)([$gameSystem](global.md#gamesystem-game_system))
* [Game_Temp](Game_Temp.md)([$gameTemp](global.md#gametemp-game_temp))
* [Game_Timer](Game_Timer.md)([$gameTimer](global.md#gametimer-game_timer))

### スイッチ・変数

* [Game_Switches](Game_Switches.md)([$gameSwitches](global.md#gameswitches-game_switches))
* [Game_SelfSwitches](Game_SelfSwitches.md)([$gameSelfSwitches](global.md#gameselfswitches-game_selfswitches))
* [Game_Variables](Game_Variables.md)([$gameVariables](global.md#gamevariables-game_variables))

### マップキャラクタ

* [Game_Followers](Game_Followers.md)
* [Game_CharacterBase](Game_CharacterBase.md)
    * [Game_Character](Game_Character.md)
        * [Game_Player](Game_Player.md)([$gamePlayer](global.md#gameplayer-game_player))
        * [Game_Follower](Game_Follower.md)
        * [Game_Event](Game_Event.md)
        * [Game_Vehicle](Game_Vehicle.md)

### バトルキャラクタ

* [Game_Action](Game_Action.md)
* [Game_ActionResult](Game_ActionResult.md)
* [Game_Actors](Game_Actors.md)([$gameActors](global.md#dataactors-arrayrpgactor))
* [Game_Unit](Game_Unit.md)
    * [Game_Party](Game_Party.md)([$gameParty](global.md#gameparty-game_party))
    * [Game_Troop](Game_Troop.md)([$gameTroop](global.md#gametroop-game_troop))
* [Game_BattlerBase](Game_BattlerBase.md)
    * [Game_Battler](Game_Battler.md)
        * [Game_Actor](Game_Actor.md)
        * [Game_Enemy](Game_Enemy.md)

### その他オブジェクト

* [Game_Item](Game_Item.md)
* [Game_Map](Game_Map.md)([$gameMap](global.md#gamemap-game_map))
* [Game_Message](Game_Message.md)([$gameMessage](global.md#gamemessage-game_message))
* [Game_Picture](Game_Picture.md)
* [Game_Screen](Game_Screen.md)([$gameScreen](global.md#gamescreen-game_screen))


## 画像

### コア機能

* [Bitmap](Bitmap.md)
* [Graphics](Graphics.md)
* [PIXI.Application](PIXI.Application.md)
* [PIXI.Point](http://pixijs.download/v5.3.12/docs/PIXI.Point.html)
    * [Point](Point.md)
* [PIXI.Rectangle](http://pixijs.download/v5.3.12/docs/PIXI.Rectangle.html)
    * [Rectangle](Rectangle.md)

* [PIXI.utils.EventEmitter](http://pixijs.download/v5.3.12/docs/PIXI.utils.EventEmitter.html)
    * [PIXI.BaseTexture](http://pixijs.download/v5.3.12/docs/PIXI.BaseTexture.html)
    * [PIXI.Texture](PIXI.Texture.md)
    * [PIXI.AbstractRenderer](http://pixijs.download/v5.3.12/docs/PIXI.AbstractRenderer.html) 
        * [PIXI.Renderer](PIXI.Renderer.md)
    * [PIXI.DisplayObject](PIXI.DisplayObject.md)
        * [PIXI.Container](PIXI.Container.md) → [継承](#コンテナpixicontainer)

* [PIXI.System](https://pixijs.download/release/docs/PIXI.System.html)
    * [PIXI.ObjectRenderer](https://pixijs.download/release/docs/PIXI.ObjectRenderer.html)
        * [Tilemap.Renderer](Tilemap.Renderer.md)  **@MZ**

* [PIXI.Shader](PIXI.Shader.md)
    * [PIXI.Filter](PIXI.Filter.md)
        * [ColorFilter](ColorFilter.md) **@MZ**


### [コンテナ(PIXI.Container)](PIXI.Container.md)

* [ScreenSprite](ScreenSprite.md)
* [Weather](Weather.md)
* [WindowLayer](WindowLayer.md)
* [PIXI.Graphics](PIXI.Graphics.md)
* [Tilemap](Tilemap.md)
* [Tilemap.Layer](Tilemap.Layer.md)  **@MZ**
* [Tilemap.CombinedLayer](Tilemap.CombinedLayer.md)   **@MZ1.7.0**
* [PIXI.Sprite](PIXI.Sprite.md)
    * [Sprite](Sprite.md) → [継承](#スプライトsprite)
    * [PIXI.TilingSprite](http://pixijs.download/v5.3.12/docs/PIXI.TilingSprite.html)
        * [TilingSprite](TilingSprite.md) (継承位置変更)
            * [Sprite_Battleback](Sprite_Battleback.md) **@MZ**
* [Stage](Stage.md)
    * [Scene_Base](Scene_Base.md) → [継承](#シーンscene_base)
* [Window](Window.md) → [継承](#ウィンドウwindow)


### [スプライト(Sprite)](Sprite.md)

* [Sprite_Animation](Sprite_Animation.md)
* [Sprite_AnimationMV](Sprite_AnimationMV.md) **@MZ**
* [Sprite_Balloon](Sprite_Balloon.md) (継承位置変更)
* [Sprite_Character](Sprite_Character.md) (継承位置変更)
* [Sprite_Damage](Sprite_Damage.md)
* [Sprite_Destination](Sprite_Destination.md)
* [Sprite_Gauge](Sprite_Gauge.md) **@MZ**
* [Sprite_Name](Sprite_Name.md) **@MZ**
* [Sprite_StateIcon](Sprite_StateIcon.md)
* [Sprite_StateOverlay](Sprite_StateOverlay.md) (継承位置変更)
* [Sprite_Timer](Sprite_Timer.md)
* [Sprite_Weapon](Sprite_Weapon.md) (継承位置変更)
* [Sprite_Clickable](Sprite_Clickable.md) **@MZ**
    * [Sprite_Button](Sprite_Button.md) (継承位置変更)
    * [Sprite_Picture](Sprite_Picture.md) (継承位置変更)
    * [Sprite_Battler](Sprite_Battler.md) (継承位置変更)
        * [Sprite_Actor](Sprite_Actor.md)
        * [Sprite_Enemy](Sprite_Enemy.md)
* [Spriteset_Base](Spriteset_Base.md)
    * [Spriteset_Battle](Spriteset_Battle.md)
    * [Spriteset_Map](Spriteset_Map.md)


### [シーン(Scene_Base)](Scene_Base.md)

* [Scene_Boot](Scene_Boot.md)
* [Scene_Gameover](Scene_Gameover.md)
* [Scene_Title](Scene_Title.md)
* [Scene_Splash](Scene_Splash.md) **@MZ1.8.0**
* [Scene_Message](Scene_Message.md) **@MZ**
    * [Scene_Battle](Scene_Battle.md) (継承位置変更)
    * [Scene_Map](Scene_Map.md) (継承位置変更)
* [Scene_MenuBase](Scene_MenuBase.md)
    * [Scene_Debug](Scene_Debug.md)
    * [Scene_Equip](Scene_Equip.md)
    * [Scene_GameEnd](Scene_GameEnd.md)
    * [Scene_Menu](Scene_Menu.md)
    * [Scene_Name](Scene_Name.md)
    * [Scene_Options](Scene_Options.md)
    * [Scene_Shop](Scene_Shop.md)
    * [Scene_Status](Scene_Status.md)
    * [Scene_File](Scene_File.md)
        * [Scene_Load](Scene_Load.md)
        * [Scene_Save](Scene_Save.md)
    * [Scene_ItemBase](Scene_ItemBase.md)
        * [Scene_Item](Scene_Item.md)
        * [Scene_Skill](Scene_Skill.md)


## ウィンドウ

### [ウィンドウ(Window)](Window.md)

 * [Window_Base](Window_Base.md)
    * [Window_BattleLog](Window_BattleLog.md) (継承位置変更)
    * [Window_Help](Window_Help.md)
    * [Window_MapName](Window_MapName.md)
    * [Window_Message](Window_Message.md)
    * [Window_NameBox](Window_NameBox.md) **@MZ**
    * [Window_ScrollText](Window_ScrollText.md)
    * [Window_Scrollable](Window_Scrollable.md) **@MZ**
        * [Window_Selectable](Window_Selectable.md) → [継承](#選択ウィンドウwindow_selectable) (継承位置変更)


### [選択ウィンドウ(Window_Selectable)](Window_Selectable.md)

* [Window_BattleEnemy](Window_BattleEnemy.md)
* [Window_DebugEdit](Window_DebugEdit.md)
* [Window_DebugRange](Window_DebugRange.md)
* [Window_Gold](Window_Gold.md) (継承位置変更)
* [Window_NameInput](Window_NameInput.md)
* [Window_NumberInput](Window_NumberInput.md)
* [Window_SavefileList](Window_SavefileList.md)
* [Window_ShopBuy](Window_ShopBuy.md)
* [Window_ShopNumber](Window_ShopNumber.md)
* [Window_SkillList](Window_SkillList.md)
    * [Window_BattleSkill](Window_BattleSkill.md)
* [Window_ItemList](Window_ItemList.md) → [継承](#項目表示ウィンドウwindow_itemlist)
* [Window_StatusBase](Window_StatusBase.md) **@MZ** → [継承](#ステータス表示ウィンドウwindow_statusbase)
* [Window_Command](Window_Command.md) → [継承](#コマンドウィンドウwindow_command)


### [項目表示ウィンドウ(Window_ItemList)](Window_ItemList.md)

* [Window_BattleItem](Window_BattleItem.md)
* [Window_EquipItem](Window_EquipItem.md)
* [Window_EventItem](Window_EventItem.md)
* [Window_ShopSell](Window_ShopSell.md)


### [ステータス表示ウィンドウ(Window_StatusBase)](Window_StatusBase.md)

* [Window_BattleStatus](Window_BattleStatus.md) (継承位置変更)
    * [Window_BattleActor](Window_BattleActor.md)
* [Window_EquipSlot](Window_EquipSlot.md) (継承位置変更)
* [Window_EquipStatus](Window_EquipStatus.md) (継承位置変更)
* [Window_MenuStatus](Window_MenuStatus.md) (継承位置変更)
    * [Window_MenuActor](Window_MenuActor.md)
* [Window_NameEdit](Window_NameEdit.md) (継承位置変更)
* [Window_ShopStatus](Window_ShopStatus.md) (継承位置変更)
* [Window_SkillStatus](Window_SkillStatus.md) (継承位置変更)
* [Window_Status](Window_Status.md) (継承位置変更)
* [Window_StatusParams](Window_StatusParams.md) **@MZ**
* [Window_StatusEquip](Window_StatusEquip.md) **@MZ**


### [コマンドウィンドウ(Window_Command)](Window_Command.md)

* [Window_ActorCommand](Window_ActorCommand.md)
* [Window_ChoiceList](Window_ChoiceList.md)
* [Window_GameEnd](Window_GameEnd.md)
* [Window_MenuCommand](Window_MenuCommand.md)
* [Window_Options](Window_Options.md)
* [Window_PartyCommand](Window_PartyCommand.md)
* [Window_SkillType](Window_SkillType.md)
* [Window_TitleCommand](Window_TitleCommand.md)
* [Window_HorzCommand](Window_HorzCommand.md)
    * [Window_EquipCommand](Window_EquipCommand.md)
    * [Window_ItemCategory](Window_ItemCategory.md)
    * [Window_ShopCommand](Window_ShopCommand.md)


## MV廃止クラス
`CacheEntry`, `CacheMap`, `ImageCache`, `RequestQueue`, `Decrypter`, `Html5Audio`, `ResourceHandler`, `ToneFilter`, `PIXI.tilemap.ZLayer`, `ShaderTilemap`, `ToneSprite`, `Sprite_Base`
