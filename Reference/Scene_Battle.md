[クラスツリー](index.md)

# クラス: Scene_Battle

## スーパークラス: [Scene_Message](Scene_Message.md)

### new Scene_Battle ()
戦闘シーンのコマンドやメッセージのウィンドウ、[敵キャラ]やサイドビューの[アクター]の画像を管理するクラス。

MVでは [Scene_Base](Scene_Base.md) がスーパークラスだったが [Scene_Message](Scene_Message.md) に変更されている。

関連クラス: [SceneManager](SceneManager.md), [Game_Actor](Game_Actor.md), [Game_Party](Game_Party.md), [Game_Enemy](Game_Enemy.md), [Game_Troop](Game_Troop.md), [Scene_Battle](Scene_Battle.md), [BattleManager](BattleManager.md), [Game_Timer](Game_Timer.md), [Game_Screen](Game_Screen.md)<br />
関連シーン: [Scene_Boot](Scene_Boot.md), [Scene_Map](Scene_Map.md), [Scene_GameEnd](Scene_GameEnd.md), [Scene_Gameover](Scene_Gameover.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_spriteset` | [Spriteset_Battle](Spriteset_Battle.md) | 戦闘スプライトセット |
| `_statusWindow` | [Window_BattleStatus](Window_BattleStatus.md) | [ステータス]ウィンドウ |
| `_partyCommandWindow` | [Window_PartyCommand](Window_PartyCommand.md) | [パーティ]コマンドウィンドウ |
| `_actorCommandWindow` | [Window_ActorCommand](Window_ActorCommand.md) | [アクター]コマンドウィンドウ |
| `_skillWindow` | [Window_BattleSkill](Window_BattleSkill.md) | [スキル]ウィンドウ |
| `_itemWindow` | [Window_BattleItem](Window_BattleItem.md) | [アイテム]ウィンドウ |
| `_actorWindow` | [Window_BattleActor](Window_BattleActor.md) | [アクター]選択ウィンドウ |
| `_enemyWindow` | [Window_BattleEnemy](Window_BattleEnemy.md) | [敵キャラ]選択ウィンドウ |
| `_logWindow` | [Window_BattleLog](Window_BattleLog.md) | ログウィンドウ |
| `_helpWindow` | [Window_Help](Window_Help.md) | ヘルプウィンドウ |
| `_messageWindow` | [Window_Message](Window_Message.md) | メッセージウィンドウ |
| `_scrollTextWindow` | [Window_ScrollText](Window_ScrollText.md) | スクロールテキストウィンドウ |


### スーパークラスから継承されたメソッド

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
* [setParent (container)](PIXI.DisplayObject.md#setparent-container--pixicontainer)
* [setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)](PIXI.DisplayObject.md#settransform-x-y-scalex-scaley-rotation-skewx-skewy-pivotx-pivoty--pixidisplayobject)
* [toGlobal (position, point, skipUpdate)](PIXI.DisplayObject.md#toglobal-position-point-skipupdate--pixipoint)
* [toLocal (position, from, point, skipUpdate)](PIXI.DisplayObject.md#tolocal-position-from-point-skipupdate--pixipoint)

#### [PIXI.Container](PIXI.Container.md)

* [addChild (child)](PIXI.Container.md#addchild-child--pixidisplayobject)
* [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
* [calculateBounds ()](PIXI.Container.md#calculatebounds-)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [renderCanvas (renderer)](PIXI.Container.md#rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [Stage](Stage.md)

* [destroy ()](Stage.md#destroy-)

#### [Scene_Base](Scene_Base.md)

* [addWindow (Window)](Scene_Base.md#addwindow-window)
* [attachReservation ()](Scene_Base.md#attachreservation-)
* [checkGameover ()](Scene_Base.md#checkgameover-)
* [createFadeSprite ()](Scene_Base.md#createfadesprite-)
* [createWindowLayer ()](Scene_Base.md#createwindowlayer-)
* [detachReservation ()](Scene_Base.md#detachreservation-)
* [fadeOutAll ()](Scene_Base.md#fadeoutall-)
* [fadeSpeed ()](Scene_Base.md#fadespeed---number)
* [isActive ()](Scene_Base.md#isactive---boolean)
* [isBusy ()](Scene_Base.md#isbusy---boolean)
* [isReady ()](Scene_Base.md#isready---boolean)
* [popScene ()](Scene_Base.md#popscene-)
* [slowFadeSpeed ()](Scene_Base.md#slowfadespeed---number)
* [startFadeIn (duration opt, white opt)](Scene_Base.md#startfadein-duration-opt-white-opt)
* [startFadeOut (duration opt, white opt)](Scene_Base.md#startfadeout-duration-opt-white-opt)
* [updateChildren ()](Scene_Base.md#updatechildren-)
* [updateFade ()](Scene_Base.md#updatefade-)

#### [Scene_Message](Scene_Message.md)
* [associateWindows ()](Scene_Message.md#associatewindows-)
* [createAllWindows ()](Scene_Message.md#createallwindows-)
* [createChoiceListWindow ()](Scene_Message.md#createchoicelistwindow-)
* [createEventItemWindow ()](Scene_Message.md#createeventitemwindow-)
* [createGoldWindow ()](Scene_Message.md#creategoldwindow-)
* [createMessageWindow ()](Scene_Message.md#createmessagewindow-)
* [createNameBoxWindow ()](Scene_Message.md#createnameboxwindow-)
* [createNumberInputWindow ()](Scene_Message.md#createnumberinputwindow-)
* [createScrollTextWindow ()](Scene_Message.md#createscrolltextwindow-)
* [eventItemWindowRect()](Scene_Message.md#eventitemwindowrect--rectangle)
* [goldWindowRect()](Scene_Message.md#goldwindowrect--rectangle)
* [isMessageWindowClosing ()](Scene_Message.md#ismessagewindowclosing---boolean)
* [messageWindowRect()](Scene_Message.md#messagewindowrect--rectangle)
* [scrollTextWindowRect()](Scene_Message.md#scrolltextwindowrect--rectangle)

### メソッド


#### actorCommandWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [アクター]コマンドウィンドウの矩形範囲を返す。


#### actorWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [アクター]選択ウィンドウの矩形範囲を返す。


#### buttonAreaTop() → {[Number](Number.md)}
**@MZ** ボタンエリアの上辺座標を返す。


#### windowAreaHeight() → {[Number](Number.md)}
**@MZ** ウィンドウエリアの高さを返す。


#### changeInputWindow ()
[パーティ]か[アクター]のコマンドウィンドウの選択、非選択を状態に応じて切り替え。


#### closeCommandWindows ()
**@MZ** コマンドウィンドウを閉じる。


#### commandAttack ()
[攻撃]コマンドのハンドラ。


#### commandCancel ()
**@MZ** [キャンセル]コマンドのハンドラ。


#### commandEscape ()
[逃げる]コマンドのハンドラ。


#### commandFight ()
[戦う]コマンドのハンドラ。


#### commandGuard ()
[防御]コマンドのハンドラ。


#### commandItem ()
[アイテム]コマンドのハンドラ。


#### commandSkill ()
[スキル]コマンドのハンドラ。


#### create ()
オーバーライド: [Scene_Base](Scene_Base.md#create-)


#### createActorCommandWindow ()
[アクター]コマンドウィンドウ([Window_ActorCommand](Window_ActorCommand.md))を生成。


#### createActorWindow ()
[アクター]選択ウィンドウ([Window_BattleActor](Window_BattleActor.md))を生成。


#### createAllWindows ()
戦闘シーンに必要なすべてのウィンドウを生成。


#### createButtons ()
**@MZ** ボタンを生成。

#### createCancelButton ()
**@MZ** キャンセルボタンを生成。


#### createDisplayObjects ()
表示に必要なオブジェクトを生成。
スプライトセット、ウィンドウレイヤー、ウィンドウなど。


#### createEnemyWindow ()
[敵キャラ]選択ウィンドウ([Window_BattleEnemy](Window_BattleEnemy.md))を生成。


#### createHelpWindow ()
ヘルプウィンドウ([Window_Help](Window_Help.md))を生成。


#### createItemWindow ()
[アイテム]ウィンドウ([Window_BattleItem](Window_BattleItem.md))を生成。


#### createLogWindow ()
ログウィンドウ([Window_BattleLog](Window_BattleLog.md))を生成。


#### createPartyCommandWindow ()
[パーティ]コマンドウィンドウ([Window_PartyCommand](Window_PartyCommand.md))を生成。


#### createSkillWindow ()
[スキル]ウィンドウ([Window_BattleSkill](Window_BattleSkill.md))を生成。


#### createSpriteset ()
戦闘シーンに必要なスプライトセットを生成。
[アクター][敵キャラ]など。


#### createStatusWindow ()
[ステータス]ウィンドウ([Window_BattleStatus](Window_BattleStatus.md))を生成。


#### endCommandSelection ()
コマンド選択の終了処理。


#### enemyWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [敵]選択ウィンドウの矩形範囲を返す。


#### helpAreaTop() → {[Number](Number.md)}
**@MZ** [ヘルプ]ウィンドウの上辺座標(規定値:0)を返す。


#### helpAreaBottom() → {[Number](Number.md)}
**@MZ** [ヘルプ]ウィンドウの下辺座標を返す。


#### helpAreaHeight() → {[Number](Number.md)}
**@MZ** [ヘルプ]ウィンドウの高さを返す。


#### helpAreaTop() → {[Number](Number.md)}
**@MZ** [ヘルプ]ウィンドウの上辺座標(規定値:0)を返す。


#### helpWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [ヘルプ]ウィンドウの矩形範囲を返す。


#### hideSubInputWindows ()
**@MZ** 副入力ウィンドウを隠す。


#### itemWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [アイテム]ウィンドウの矩形範囲を返す。


#### initialize ()
オーバーライド:[Scene_Message](Scene_Message.md#initialize-)


#### isAnyInputWindowActive () → {Boolean}
入力ウィンドウがアクティブか。


#### logWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** ログウィンドウの矩形範囲を返す。


#### needsInputWindowChange () → {Boolean}
**@MZ** 入力ウィンドウの変更が必要か。


#### needsSlowFadeOut () → {Boolean}
ゆっくりしたフェードアウトが必要か。


#### onActorCancel ()
[アクター]選択ウィンドウで[キャンセル]が選択された時のハンドラ


#### onActorOk ()
[アクター]選択ウィンドウで[OK]が選択された時のハンドラ


#### onEnemyCancel ()
[敵キャラ]選択ウィンドウで[キャンセル]が選択された時のハンドラ


#### onEnemyOk ()
[敵キャラ]選択ウィンドウで[OK]が選択された時のハンドラ。


#### onItemCancel ()
[アイテム]ウィンドウで[キャンセル]が選択された時のハンドラ


#### onItemOk ()
[アイテム]ウィンドウで[OK]が選択された時のハンドラ。


#### onSelectAction ()
アイテムかスキルが選択された時のハンドラ。

#### onSkillCancel ()
[スキル]ウィンドウで[キャンセル]が選択された時のハンドラ


#### onSkillOk ()
[スキル]ウィンドウで[OK]が選択された時のハンドラ。


#### partyCommandWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [パーティ]ウィンドウの矩形範囲を返す。


#### selectNextCommand ()
ひとつ先のコマンドを選択。


#### selectPreviousCommand ()
ひとつ前のコマンドを選択。


#### shouldAutosave() → {Boolean}
**@MZ** オートセーブが必要か。


#### shouldOpenStatusWindow() → {Boolean}
**@MZ** [ステータス]ウィンドウを開く必要があるか。


#### skillWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [スキル]ウィンドウの矩形範囲を返す。


#### start ()
オーバーライド:[Scene_Base](Scene_Base.md#start-)


#### startActorCommandSelection ()
[アクター]コマンドの選択開始。


#### selectActorSelection ()
**@MZ** [アクター]選択ウィンドウの選択開始。


#### startEnemySelection ()
**@MZ** [敵キャラ]選択ウィンドウの選択開始。


#### startPartyCommandSelection ()
[パーティ]コマンドの選択開始。


#### statusWindowX() → {[Number](Number.md)}
**@MZ** [ステータス]ウィンドウのx座標を返す。


#### statusWindowRect () → {[Rectangle](Rectangle.md)}
**@MZ** [ステータス]ウィンドウの矩形範囲を返す。


#### stop ()
オーバーライド:[Scene_Base](Scene_Base.md#stop-)


#### terminate ()
オーバーライド:[Scene_Base](Scene_Base.md#terminate-)


#### update ()
オーバーライド:[Scene_Base](Scene_Base.md#update-)


#### updateBattleProcess ()
戦闘段階のアップデート。


#### updateCancelButton ()
**@MZ** キャンセルボタンのアップデート。


#### updateInputWindowVisibility ()
**@MZ** 入力ウィンドウ表示状態のアップデート。


#### updateLogWindowVisibility ()
**@MZ** ログウィンドウ表示状態のアップデート。


#### updateStatusWindowPosition ()
**@MZ** [ステータス]ウィンドウ位置のアップデート。


#### updateStatusWindowVisibility ()
**@MZ** [ステータス]ウィンドウ表示状態のアップデート。


#### updateVisibility()
**@MZ** 表示状態のアップデート。


### 廃止MVメソッド
createMessageWindow (), createScrollTextWindow (),  refreshStatus (), selectActorSelection (), selectEnemySelection (), updateStatusWindow (), updateWindowPositions ()
