[クラスツリー](index.md)

# クラス: Window_Message

## スーパークラス: [Window_Base](Window_Base.md)

[文章の表示]をするウィンドウ。

表示する文は Window\_Message ではなく [$gameMessage](global.md#gamemessage-game_message) を経由して設定するため、単に文を表示するだけならばこのクラスを操作する必要はない。<br />
また、Window\_Message は選択肢関連のサブウィンドウの起動も行う。シーンに近い役割を持ったクラス。<br />
新規に文字を表示するウィンドウが必要ならば、[WIndow_Help](WIndow_Help.md) を使うか、Window\_Base を継承して新たにクラスを作る方が良い。

V1.2.1で変更あり。

関連クラス: [Scene_Message](Scene_Message.md), [Scene_Map](Scene_Map.md), [Scene_Battle](Scene_Battle.md), [Game_Message](Game_Message.md)

### new Window_Message (rect)
#### 引数
MVでは引数がなかった。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_background` | [Number](Number.md) | [背景]のタイプ |
| `_positionType` | [Number](Number.md) | [ウィンドウ位置] |
| `_waitCount` | [Number](Number.md) | 待機カウント |
| `_faceBitmap` | [Bitmap](Bitmap.md) | 顔の画像 |
| `_pauseSkip` | Boolean | 入力待ちをとばすか( 制御文字 \\^ の効果) |
| `_showFast` | Boolean | 一括表示するか(入力によるスキップ) |
| `_lineShowFast` | Boolean | 行を一括表示するか( 制御文字 \\&gt; の効果) |
| `_goldWindow` | [Window_Gold](Window_Gold.md) | [所持金]ウィンドウ |
| `_nameBoxWindow` | [Window_NameBox](Window_NameBox.md) | **@MZ** [名前]ウィンドウ |
| `_choiceListWindow` | [Window_ChoiceList](Window_ChoiceList.md) | **@MZ** [選択肢の表示]ウィンドウ |
| `_numberInputWindow` | [Window_NumberInput](Window_NumberInput.md) | **@MZ** [数値入力の処理]ウィンドウ |
| `_eventItemWindow` | [Window_EventItem](Window_EventItem.md) | **@MZ** [アイテム選択の処理]ウィンドウ |


### 廃止MVプロパティ
`_choiceWindow`, `_imageReservationId`, `_itemWindow`, `_numberWindow`


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
* [destroy ()](PIXI.Container.md#destroy-)
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
* [addInnerChild (child)](Window.md#addinnerchild-child--object)
* [drawShape (graphics)](Window.md#drawshape-graphics)
* [isClosed ()](Window.md#isclosed---boolean)
* [isOpen ()](Window.md#isopen---boolean)
* [move (x, y, width opt, height opt)](Window.md#move-x-y-width-opt-height-opt)
* [moveCursorBy (x, y)](Window.md#movecursorby-x-y)
* [moveInnerChildrenBy (x, y)](Window.md#moveinnerchildrenby-x-y)
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
* [processDrawIcon (iconIndex, textState)](Window_Base.md#processdrawicon-iconindex-textstate)
* [processEscapeCharacter (code, textState)](Window_Base.md#processescapecharacter-code-textstate)
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

#### areSettingsChanged () → {Boolean}
ウィンドウの設定が変更されたか。


#### canBreakHere (textState) → {Boolean}
**@MZ** 一時停止が可能か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | テキスト状態 |


#### canStart () → {Boolean}
開始可能か。


#### checkToNotClose ()
閉じないようにチェック。


#### clearFlags ()
[文章の表示]で使うフラグを消去。


#### doesContinue () → {Boolean}
まだテキストがあり、かつ設定が変更されてい。
つまり、文章を続ける必要があるか。


#### initialize ()
オーバーライド: [Window_Base](Window_Base.md#initialize-)


#### initMembers ()
メンバ変数を初期化。


#### isAnySubWindowActive () → {Boolean}
サブウィンドウがアクティブか。


#### isEndOfText (textState) → {Boolean}
指定したテキスト状態が文末か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 調べるテキスト状態 |


#### isTriggered () → {Boolean}
決定・キャンセルなどのトリガが起動されたか。


#### isWaiting () → {Boolean}
**@MZ1.2.1** ウエイト中か。


#### loadMessageFace ()
[顔]画像を読み込む。


#### needsNewPage (textState) → {Boolean}
指定テキスト状態が、次ページが必要な状態か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 調べるテキスト状態 |


#### newLineX (textState) → {[Number](Number.md)}
[顔]表示の有無に応じて、新たな行の表示開始位置を返す。

##### 引数
MVでは引数はなかったが、アラビア語対応で必要になった。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 調べるテキスト状態 |


#### newPage (textState)
指定したテキスト状態に従って新規ページ(ウィンドウ)を用意。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | テキスト状態 |


#### onEndOfText ()
文章を全て表示した時に呼ばれるハンドラ。


#### processControlCharacter (textState, c)
オーバーライド: [Window_Base](Window_Base.md#processcontrolcharacter-textstate-c)


#### processNewLine (textState)
オーバーライド: [Window_Base](Window_Base.md#processnewline-textstate)


#### processNewPage (textState)
オーバーライド: [Window_Base](Window_Base.md#processnewpage-textstate)


#### setChoiceListWindow(choiceListWindow) 
**@MZ** [選択肢の表示]ウィンドウを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `choiceListWindow` | [Window_ChoiceList](Window_ChoiceList.md)  | [選択肢の表示]ウィンドウ |


#### setEventItemWindow(eventItemWindow) 
**@MZ** [アイテム選択の処理]ウィンドウを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `eventItemWindow` | [Window_EventItem](Window_EventItem.md)  | [アイテム選択の処理]ウィンドウ |


#### setGoldWindow(goldWindow) 
**@MZ** [所持金]ウィンドウを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `goldWindow` | [Window_Gold](Window_Gold.md)  | [所持金]ウィンドウ |


#### setNameBoxWindow(nameBoxWindow) 
**@MZ** [名前]ウィンドウを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `nameBoxWindow` | [Window_NameBox](Window_NameBox.md)  | [名前]ウィンドウ |


#### setNumberInputWindow(numberInputWindow) 
**@MZ** [数値入力の処理]ウィンドウを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `numberInputWindow` | [Window_NumberInput](Window_NameBox.md)  | [数値入力の処理]ウィンドウ |


#### shouldBreakHere (textState) → {Boolean}
**@MZ** [文章の表示]ループから抜ける必要があるか。<br />
別の言い方だと、文字をひとつずつ表示するモードか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | テキスト状態 |


#### startInput () → {Boolean}
入力ウィンドウの開始。<br />
[Game_Message](Game_Message.md) の [isChoice()](Game_Message.md#ischoice---boolean)、[isNumberInput()](Game_Message.md#isnumberinput---boolean)、[isItemChoice()](Game_Message.md#isitemchoice---boolean) をチェックし、それぞれに対応したウィンドウを開く。 


#### startMessage ()
[文章の表示]の準備。


#### startPause ()
入力待ちの停止状態の開始。


#### startWait (count)
指定カウント分の待ち状態の開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `count` | [Number](Number.md) | 待ち時間(フレーム) |


#### synchronizeNameBox ()
**@MZ** 名前ウィンドウの開閉状態を[文章の表示]ウィンドウと合わせる。


#### terminateMessage ()
[文章の表示]を停止してウィンドウを閉じる。


#### update ()
オーバーライド: [Window_Base](Window_Base.md#update-)


#### updateBackground ()
背景の更新。


#### updateInput () → {Boolean}
入力の更新。


#### updateLoading ()
読み込みの更新。


#### updateMessage () → {Boolean}
[文章の表示]の更新。


#### updatePlacement ()
ウィンドウの配置の更新。


#### updateShowFast ()
ボタン・クリック・タップによる早送りのチェック。


#### updateSpeakerName ()
**@MZ** 話者の名前を更新。


#### updateWait () → {Boolean}
待機状態の更新。



### 廃止MVメソッド
createSubWindows (), numVisibleRows (), subWindows (), windowHeight (), windowWidth ()
