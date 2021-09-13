[クラスツリー](index.md)

# クラス: Window_BattleLog

## スーパークラス: [Window_Base](Window_Base.md)

戦闘ログのウィンドウ。

このウィンドウのメソッドの多くは、[push()](Window_BattleLog.md#push-methodname-args) によって _methods プロパティに保存され順次実行される。

メッセージの表示だけではなく、サイドビューのアクションなども処理する、マネージャ的な役割も持っている。

MVではスーパークラス(継承元)が [Window_Selectable](Window_Selectable.md) だったが、MZで [Window_Base](Window_Base.md) に変更されている。

関連クラス: [Scene_Battle](Scene_Battle.md), [RPG.State](RPG.State.md), [Game_ActionResult](Game_ActionResult.md)

### new Window_BattleLog (rect)
#### 引数
MVでは引数はなかった。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_backBitmap ` | [Bitmap](Bitmap.md) | 背景画像 |
| `_lines` | [Array](Array.md).&lt;[String](String.md)&gt; | 行の配列 |
| `_methods` | [Array](Array.md).&lt;[MV.BattleLogMethod](MV.BattleLogMethod.md)&gt; | メソッドの配列 |
| `_waitCount` | [Number](Number.md) | 待ち時間 |
| `_waitMode` | [String](String.md) | [待機状態](Window_BattleLog.md#待機状態) |
| `_baseLineStack` | [Array](Array.md).&lt;[Number](Number.md)&gt; | 区切り行数のスタック |
| `_spriteset` | [Spriteset_Battle](Spriteset_Battle.md) | 戦闘スプライトセット |

#### 待機状態

| 名前 | 説明 |
| --- | --- |
| "effect" | エフェクト |
| "movement" | 移動 |


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

* [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
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

#### [Window](Window.md)

* [addChildToBack (child)](Window.md#addchildtoback-child--object)
* [isClosed ()](Window.md#isclosed---boolean)
* [isOpen ()](Window.md#isopen---boolean)
* [move (x, y, width opt, height opt)](Window.md#move-x-y-width-opt-height-opt)
* [setCursorRect (x, y, width, height)](Window.md#setcursorrect-x-y-width-height)
* [setTone (r, g, b)](Window.md#settone-r-g-b)
* [updateTransform ()](Window.md#updatetransform-)

#### [Window_Base](Window_Base.md)

* [activate ()](Window_Base.md#activate-)
* [actorName (actorIndex)](Window_Base.md#actorname-actorindex--string)
* [baseTextRect (actorIndex)](Window_Base.md#basetextrect-actorindex--rectangle)
* [calcTextHeight (textState)](Window_Base.md#calctextheight-textstate--number)
* [changeOutlineColor (color)](Window_Base.md#changeoutlinecolor-color)
* [changePaintOpacity (enabled)](Window_Base.md#changepaintopacity-enabled)
* [changeTextColor (color)](Window_Base.md#changetextcolor-color)
* [checkRectObject (rect)](Window_Base.md#checkrectobject-rect)
* [close ()](Window_Base.md#close-)
* [contentsHeight ()](Window_Base.md#contentsheight---number)
* [contentsWidth ()](Window_Base.md#contentswidth---number)
* [convertEscapeCharacters (text)](Window_Base.md#convertescapecharacters-text--string)
* [createContents ()](Window_Base.md#createcontents-)
* [createDimmerSprite () ](Window_Base.md#createdimmersprite-)
* [createTextBuffer (rtl)](Window_Base.md#createtextbuffer-rtl--string)
* [createTextState (text, x, y, width)](Window_Base.md#createtextstate-text-x-y-width--mvtextstate)
* [deactivate ()](Window_Base.md#deactivate-)
* [destroy (options)](Window_Base.md#destroy-options)
* [destroyContents ()](Window_Base.md#destroycontents-)
* [drawCharacter (characterName, characterIndex, x, y)](Window_Base.md#drawcharacter-charactername-characterindex-x-y)
* [drawCurrencyValue (value, unit, x, y, width)](Window_Base.md#drawcurrencyvalue-value-unit-x-y-width)
* [drawFace (faceName, faceIndex, x, y, width opt, height opt)](Window_Base.md#drawface-facename-faceindex-x-y-width-opt-height-opt)
* [drawIcon (iconIndex, x, y)](Window_Base.md#drawicon-iconindex-x-y)
* [drawItemName (item, x, y, width)](Window_Base.md#drawitemname-item-x-y-width)
* [drawRect ( x, y, width, height )](Window_Base.md#drawrect--x-y-width-height-)
* [drawText (text, x, y, maxWidth, align)](Window_Base.md#drawtext-text-x-y-maxwidth-align)
* [drawTextEx (text, x, y, width)](Window_Base.md#drawtextex-text-x-y-width--number)
* [fittingHeight (numLines)](Window_Base.md#fittingheight-numlines--number)
* [flushTextState (textState)](Window_Base.md#flushtextstate-textstate)
* [hide ()](Window_Base.md#hide-)
* [hideBackgroundDimmer ()](Window_Base.md#hidebackgrounddimmer-)
* [initialize (rect)](Window_Base.md#initialize-rect)
* [isClosing ()](Window_Base.md#isclosing---boolean)
* [isOpening ()](Window_Base.md#isopening---boolean)
* [itemHeight ()](Window_Base.md#itemheight---number)
* [itemPadding ()](Window_Base.md#itempadding---number)
* [itemWidth ()](Window_Base.md#itemwidth---number)
* [lineHeight ()](Window_Base.md#lineheight---number)
* [loadWindowskin ()](Window_Base.md#loadwindowskin-)
* [makeFontBigger ()](Window_Base.md#makefontbigger-)
* [makeFontSmaller ()](Window_Base.md#makefontsmaller-)
* [maxFontSizeInLine (line)](Window_Base.md#maxfontsizeinline-line--number)
* [obtainEscapeCode (textState)](Window_Base.md#obtainescapecode-textstate)
* [obtainEscapeParam (textState)](Window_Base.md#obtainescapeparam-textstate--numberstring)
* [open ()](Window_Base.md#open-)
* [partyMemberName (partyMemberIndex)](Window_Base.md#partymembername-partymemberindex--string)
* [playBuzzerSound ()](Window_Base.md#playbuzzersound-)
* [playCursorSound ()](Window_Base.md#playcursorsound-)
* [playOkSound ()](Window_Base.md#playoksound-)
* [processAllText (textState)](Window_Base.md#processalltext-textstate)
* [processCharacter (textState)](Window_Base.md#processcharacter-textstate)
* [processColorChange (colorIndex)](Window_Base.md#processcolorchange-colorindex)
* [processControlCharacter (textState, c)](Window_Base.md#processcontrolcharacter-textstate-c)
* [processDrawIcon (iconIndex, textState)](Window_Base.md#processdrawicon-iconindex-textstate)
* [processEscapeCharacter (code, textState)](Window_Base.md#processescapecharacter-code-textstate)
* [processNewLine (textState)](Window_Base.md#processnewline-textstate)
* [refreshDimmerBitmap ()](Window_Base.md#refreshdimmerbitmap-)
* [resetFontSettings ()](Window_Base.md#resetfontsettings-)
* [resetTextColor ()](Window_Base.md#resettextcolor-)
* [setBackgroundType (type)](Window_Base.md#setbackgroundtype-type)
* [show ()](Window_Base.md#show-)
* [showBackgroundDimmer ()](Window_Base.md#showbackgrounddimmer-)
* [systemColor ()](Window_Base.md#systemcolor---mvcsscolor)
* [textSizeEx (text)](Window_Base.md#textsizeex-text--number)
* [textWidth (text)](Window_Base.md#textwidth-text--number)
* [translucentOpacity ()](Window_Base.md#translucentopacity---number)
* [updateBackgroundDimmer ()](Window_Base.md#updatebackgrounddimmer-)
* [updateBackOpacity ()](Window_Base.md#updatebackopacity-)
* [updateClose ()](Window_Base.md#updateclose-)
* [updateOpen ()](Window_Base.md#updateopen-)
* [updatePadding ()](Window_Base.md#updatepadding-)
* [updateTone ()](Window_Base.md#updatetone-)


### メソッド

#### addText (text)
行を追加。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 行の文字列 |


#### animationBaseDelay () → {[Number](Number.md)}
アニメーションの基本遅延時間( 規定値: 8フレーム )を返す。


#### animationNextDelay () → {[Number](Number.md)}
次のアニメーションまでの遅延時間( 規定値: 12フレーム )を返す。


#### backColor () → {[MV.CssColor](MV.CssColor.md)}
背景色( 規定値: "#000000" )を返す。


#### backPaintOpacity () → {[Number](Number.md)}
背景の不透明度( 規定値: 64 )を返す。


#### backRect () → {[Rectangle](Rectangle.md)}
背景の矩形範囲を返す。


#### callNextMethod ()
次のメソッドを呼ぶ。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)


#### clear ()
表示を消去。区切り行数の記録も消去。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)


#### displayAction (subject, item)
指定された行動( [スキル][アイテム]の使用 )を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) | 使用項目 |


#### displayActionResults (subject, target)
行動結果を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayAddedStates (target)
追加されたステートを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayAffectedStatus (target)
能力値変化を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayAutoAffectedStatus (target)
自動での能力値変化を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayChangedBuffs (target)
[強化][弱体]の変化を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayChangedStates (target)
ステートの変化を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayCounter (target)
カウンター攻撃を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayCritical (target)
クリティカル攻撃を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayCurrentState (subject)
現在のステートを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### displayDamage (target)
ダメージ表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayEvasion (target)
回避を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayHpDamage (target)
HPへのダメージを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayItemMessage (fmt, subject, item)
**@MZ** アイテムのメッセージを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `fmt` | [String](String.md) | 文章のフォーマット文字列 |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `item` | [RPG.UsableItem](RPG.UsableItem.md) | 使用項目 |


#### displayMiss (target)
攻撃の失敗を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayMpDamage (target)
MPへのダメージを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayReflection (target)
反射を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayRemovedStates (target)
ステートが外れたことを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayRegeneration (subject)
再生を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### displaySubstitute (substitute, target)
[かばう]行動を表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `substitute` | [Game_Battler](Game_Battler.md) | 代理バトラー |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### displayTpDamage (target)
TPへのダメージを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### drawBackground ()
背景を描く。


#### drawLineText (index)
指定行の文字を描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 行位置 |


#### endAction (subject)
アクションの終了。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### initialize (rect)
オーバーライド: [Window_Base](Window_Base.md#initialize-rect)


#### isBusy () → {Boolean}
動作中か。


#### isFastForward () → {Boolean}
早送りか。


#### lineRect (index) → {[Rectangle](Rectangle.md)}
**@MZ** 指定行の矩形範囲を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 行位置 |


#### makeHpDamageText (target)
HPへのダメージのメッセージを生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### makeMpDamageText (target) → {[String](String.md)}
MPへのダメージのメッセージを生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### makeTpDamageText (target) → {[String](String.md)}
TPへのダメージのメッセージを生成。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### maxLines () → {[Number](Number.md)}
最大行数を返す。


#### messageSpeed () → {[Number](Number.md)}
メッセージスピードを返す。


#### numLines () → {[Number](Number.md)}
表示中の行数を返す。


#### performAction (subject, action)
行動を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `action` | [Game_Action](Game_Action.md) | 行動 |


#### performActionEnd (subject)
行動の終了を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |


#### performActionStart (subject, action)
行動の開始を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `action` | [Game_Action](Game_Action.md) | 行動 |


#### performCollapse (target)
倒れたことを適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### performCounter (target)
カウンター攻撃を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### performDamage (target)
ダメージを適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### performEvasion (target)
回避を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### performMagicEvasion (target)
魔法反射を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### performMiss (target)
攻撃失敗を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### performRecovery (target)
回復を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### performReflection (target)
反射を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### performSubstitute (target)
[かばう]行動を適用。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### popBaseLine ()
記録した区切り行数に戻る。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)


#### popupDamage (target)
ダメージを表示。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `target` | [Game_Battler](Game_Battler.md) | 目標バトラー |


#### push (methodName, args)
ログの挙動を予約する。<br />
引数の内容は [MV.BattleLogMethod](MV.BattleLogMethod.md) と同じ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `methodName` | [String](String.md) | 呼び出すメソッド名 |
| `args` | [Array](Array.md).&lt;*&gt; | メソッド毎に異なる引数 |


#### pushBaseLine ()
区切り行数を記録。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)


#### refresh ()
再描画。


#### setSpriteset (spriteset)
スプライトセットを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `spriteset` | [Spriteset_Battle](Spriteset_Battle.md) | スプライトセット |


#### setWaitMode (waitMode)
待機状態を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `waitMode` | [String](String.md) | 待機状態( "effect", "movement" ) |


#### showActorAttackAnimation (subject, targets)
アクターの攻撃アニメを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `targets` | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | 目標バトラーの配列 |


#### showAttackAnimation (subject, targets)
攻撃アニメを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `targets` | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | 目標バトラーの配列 |


#### showAnimation (subject, targets, animationId)
アニメを表示。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `targets` | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | 目標バトラーの配列 |
| `animationId` | [Number](Number.md) | アニメーションID |


#### showEnemyAttackAnimation (subject, targets)
敵の攻撃アニメを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `targets` | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | 目標バトラーの配列 |


#### showNormalAnimation (targets, animationId, mirror)
通常のアニメを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `targets` | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | 目標バトラーの配列 |
| `animationId` | [Number](Number.md) | アニメーションID |
| `mirror` | Boolean | 左右反転するか |


#### startAction (subject, action, targets)
行動の開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `subject` | [Game_Battler](Game_Battler.md) | 対象バトラー |
| `action` | [Game_Action](Game_Action.md) | 行動 |
| `targets` | [Array](Array.md).&lt;[Game_Battler](Game_Battler.md)&gt; | 目標バトラーの配列 |


#### startTurn ()
ターン開始。


#### update ()
オーバーライド: [Window_Base](Window_Base.md#update-)


#### updateWait () → {Boolean}
待ち時間の更新。


#### updateWaitCount () → {Boolean}
待ちカウントの更新。


#### updateWaitMode () → {Boolean}
待ち状態のの更新。


#### wait ()
待つ。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)


#### waitForEffect ()
エフェクトを待つ。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)


#### waitForMovement ()
動作を待つ。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)


#### waitForNewLine ()
新たな行を待つ。<br />
参照: [MV.BattleLogMethod](MV.BattleLogMethod.md)


### 廃止MVメソッド
createBackBitmap (), createBackSprite (),
windowHeight (), windowWidth ()
