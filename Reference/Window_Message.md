# Class: Window_Message

## Extends: [Window_Base](Window_Base.md)

### new Window_Message ()
[文章の表示]をするウィンドウ。

表示する文は Window\_Message ではなく [$gameMessage](global.md#gamemessage-game_message) を経由して設定するため、単に文を表示するだけならばこのクラスを操作する必要はない。<br />
また、Window\_Message は選択肢関連のサブウィンドウの起動も行う。<br />
新規に文字を表示するウィンドウが必要ならば、[WIndow_Help](WIndow_Help.md) を使うか、Window\_Base を継承して新たにクラスを作る方が良い。

関連クラス: [Scene_Map](Scene_Map.md), [Scene_Battle](Scene_Battle.md), [Game_Message](Game_Message.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_background` | [Number](Number.md) | [背景]のタイプ |
| `_positionType` | [Number](Number.md) | [ウィンドウ位置] |
| `_waitCount` | [Number](Number.md) | 待機カウント |
| `_faceBitmap` | [Bitmap](Bitmap.md) | 顔の画像 |
| `_pauseSkip` | Boolean | 入力待ちをとばすか |
| `_showFast` | Boolean | 一括表示するか |
| `_lineShowFast` | Boolean | 行を一括表示するか |
| `_goldWindow` | [Window_Gold](Window_Gold.md) | [所持金]ウィンドウ |
| `_choiceWindow` | [Window_ChoiceList](Window_ChoiceList.md) | [選択肢の表示]ウィンドウ |
| `_numberWindow` | [Window_NumberInput](Window_NumberInput.md) | [数値入力の処理]ウィンドウ |
| `_itemWindow` | [Window_EventItem](Window_EventItem.md) | [アイテム選択の処理]ウィンドウ |


### Inherited From

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
* [isClosed ()](Window.md#isclosed---boolean)
* [isOpen ()](Window.md#isopen---boolean)
* [move (x, y, width, height)](Window.md#move-x-y-width-height)
* [setCursorRect (x, y, width, height)](Window.md#setcursorrect-x-y-width-height)
* [setTone (r, g, b)](Window.md#settone-r-g-b)
* [updateTransform ()](Window.md#updatetransform-)

#### [Window_Base](Window_Base.md)

* [activate ()](Window_Base.md#activate-)
* [actorName (actorIndex)](Window_Base.md#actorname-actorindex--string)
* [calcTextHeight (textState, all)](Window_Base.md#calctextheight-textstate-all--number)
* [canvasToLocalX (x)](Window_Base.md#canvastolocalx-x--number)
* [canvasToLocalY (y)](Window_Base.md#canvastolocaly-y--number)
* [changePaintOpacity (enabled)](Window_Base.md#changepaintopacity-enabled)
* [changeTextColor (color)](Window_Base.md#changetextcolor-color)
* [close ()](Window_Base.md#close-)
* [contentsHeight ()](Window_Base.md#contentsheight---number)
* [contentsWidth ()](Window_Base.md#contentswidth---number)
* [convertEscapeCharacters (text)](Window_Base.md#convertescapecharacters-text--string)
* [createContents ()](Window_Base.md#createcontents-)
* [crisisColor ()](Window_Base.md#crisiscolor---mvcsscolor)
* [deactivate ()](Window_Base.md#deactivate-)
* [deathColor ()](Window_Base.md#deathcolor---mvcsscolor)
* [dimColor1 ()](Window_Base.md#dimcolor1---mvcsscolor)
* [dimColor2 ()](Window_Base.md#dimcolor2---mvcsscolor)
* [drawActorCharacter (actor, x, y)](Window_Base.md#drawactorcharacter-actor-x-y)
* [drawActorClass (actor, x, y, width)](Window_Base.md#drawactorclass-actor-x-y-width)
* [drawActorFace (actor, x, y, width, height)](Window_Base.md#drawactorface-actor-x-y-width-height)
* [drawActorHp (actor, x, y, width)](Window_Base.md#drawactorhp-actor-x-y-width)
* [drawActorIcons (actor, x, y, width)](Window_Base.md#drawactoricons-actor-x-y-width)
* [drawActorLevel (actor, x, y)](Window_Base.md#drawactorlevel-actor-x-y)
* [drawActorMp (actor, x, y, width)](Window_Base.md#drawactormp-actor-x-y-width)
* [drawActorName (actor, x, y, width)](Window_Base.md#drawactorname-actor-x-y-width)
* [drawActorNickname (actor, x, y, width)](Window_Base.md#drawactornickname-actor-x-y-width)
* [drawActorSimpleStatus (actor, x, y, width)](Window_Base.md#drawactorsimplestatus-actor-x-y-width)
* [drawActorTp (actor, x, y, width)](Window_Base.md#drawactortp-actor-x-y-width)
* [drawCharacter (characterName, characterIndex, x, y)](Window_Base.md#drawcharacter-charactername-characterindex-x-y)
* [drawCurrencyValue (value, unit, x, y, width)](Window_Base.md#drawcurrencyvalue-value-unit-x-y-width)
* [drawCurrentAndMax (current, max, x, y, width, color1, color2)](Window_Base.md#md#drawcurrentandmax-current-max-x-y-width-color1-color2)
* [drawFace (faceName, faceIndex, x, y, width opt, height opt)](Window_Base.md#drawface-facename-faceindex-x-y-width-opt-height-opt)
* [drawGauge (x, y, width, rate, color1, color2)](Window_Base.md#drawgauge-x-y-width-rate-color1-color2)
* [drawIcon (iconIndex, x, y)](Window_Base.md#drawicon-iconindex-x-y)
* [drawItemName (item, x, y, width)](Window_Base.md#drawitemname-item-x-y-width)
* [drawText (text, x, y, maxWidth, align)](Window_Base.md#drawtext-text-x-y-maxwidth-align)
* [drawTextEx (text, x, y)](Window_Base.md#drawtextex-text-x-y--number)
* [fittingHeight (numLines)](Window_Base.md#fittingheight-numlines--number)
* [gaugeBackColor ()](Window_Base.md#gaugebackcolor---mvcsscolor)
* [hide ()](Window_Base.md#hide-)
* [hideBackgroundDimmer ()](Window_Base.md#hidebackgrounddimmer-)
* [hpColor (actor)](Window_Base.md#hpcolor-actor--mvcsscolor)
* [hpGaugeColor1 ()](Window_Base.md#hpgaugecolor1---mvcsscolor)
* [hpGaugeColor2 ()](Window_Base.md#hpgaugecolor2---mvcsscolor)
* [isClosing ()](Window_Base.md#isclosing---boolean)
* [isOpening ()](Window_Base.md#isopening---boolean)
* [lineHeight ()](Window_Base.md#lineheight---number)
* [loadWindowskin ()](Window_Base.md#loadwindowskin-)
* [makeFontBigger ()](Window_Base.md#makefontbigger-)
* [makeFontSmaller ()](Window_Base.md#makefontsmaller-)
* [mpColor (actor)](Window_Base.md#mpcolor-actor--mvcsscolor)
* [mpCostColor ()](Window_Base.md#mpcostcolor---mvcsscolor)
* [mpGaugeColor1 ()](Window_Base.md#mpgaugecolor1---mvcsscolor)
* [mpGaugeColor2 ()](Window_Base.md#mpgaugecolor2---mvcsscolor)
* [normalColor ()](Window_Base.md#normalcolor---mvcsscolor)
* [obtainEscapeCode (textState)](Window_Base.md#obtainescapecode-textstate)
* [obtainEscapeParam (textState)](Window_Base.md#obtainescapeparam-textstate--numberstring)
* [open ()](Window_Base.md#open-)
* [paramchangeTextColor (change)](Window_Base.md#paramchangetextcolor-change--mvcsscolor)
* [partyMemberName (partyMemberIndex)](Window_Base.md#partymembername-partymemberindex--string)
* [pendingColor ()](Window_Base.md#pendingcolor---mvcsscolor)
* [powerDownColor ()](Window_Base.md#powerdowncolor---mvcsscolor)
* [powerUpColor ()](Window_Base.md#powerupcolor---mvcsscolor)
* [processCharacter (textState)](Window_Base.md#processcharacter-textstate)
* [processDrawIcon (iconIndex, textState)](Window_Base.md#processdrawicon-iconindex-textstate)
* [processEscapeCharacter (code, textState)](Window_Base.md#processescapecharacter-code-textstate)
* [processNormalCharacter (textState)](Window_Base.md#processnormalcharacter-textstate)
* [refreshDimmerBitmap ()](Window_Base.md#refreshdimmerbitmap-)
* [reserveFaceImages ()](Window_Base.md#reservefaceimages-)
* [resetFontSettings ()](Window_Base.md#resetfontsettings-)
* [resetTextColor ()](Window_Base.md#resettextcolor-)
* [setBackgroundType (type)](Window_Base.md#setbackgroundtype-type)
* [show ()](Window_Base.md#show-)
* [showBackgroundDimmer ()](Window_Base.md#showbackgrounddimmer-)
* [standardBackOpacity ()](Window_Base.md#standardbackopacity---number)
* [standardFontFace ()](Window_Base.md#standardfontface---string)
* [standardFontSize ()](Window_Base.md#standardfontsize---number)
* [standardPadding ()](Window_Base.md#standardpadding---number)
* [systemColor ()](Window_Base.md#systemcolor---mvcsscolor)
* [textColor (n)](Window_Base.md#textcolor-n--mvcsscolor)
* [textPadding ()](Window_Base.md#textpadding---number)
* [textWidth (text)](Window_Base.md#textwidth-text--number)
* [tpColor (actor)](Window_Base.md#tpcolor-actor--mvcsscolor)
* [tpCostColor ()](Window_Base.md#tpcostcolor---mvcsscolor)
* [tpGaugeColor1 ()](Window_Base.md#tpgaugecolor1---mvcsscolor)
* [tpGaugeColor2 ()](Window_Base.md#tpgaugecolor2---mvcsscolor)
* [translucentOpacity ()](Window_Base.md#translucentopacity---number)
* [updateBackgroundDimmer ()](Window_Base.md#updatebackgrounddimmer-)
* [updateBackOpacity ()](Window_Base.md#updatebackopacity-)
* [updateClose ()](Window_Base.md#updateclose-)
* [updateOpen ()](Window_Base.md#updateopen-)
* [updatePadding ()](Window_Base.md#updatepadding-)
* [updateTone ()](Window_Base.md#updatetone-)


### Methods

#### areSettingsChanged () → {Boolean}
ウィンドウの設定が変更されたか。


#### canStart () → {Boolean}
開始可能か。


#### checkToNotClose ()
閉じないようにチェック。


#### clearFlags ()
フラグを消去。


#### createSubWindows ()
サブウィンドウを生成。


#### doesContinue () → {Boolean}
まだテキストがあり、かつ設定が変更されていないか。


#### initialize ()
Overrides: [Window_Base](Window_Base.md#initialize-)


#### initMembers ()
メンバ変数を初期化。


#### isAnySubWindowActive () → {Boolean}
サブウィンドウがアクティブか。


#### isEndOfText (textState) → {Boolean}
指定したテキストの情報が最後にあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 調べるテキストの情報 |


#### isTriggered () → {Boolean}
決定・キャンセルなどのトリガが起動されたか。


#### loadMessageFace ()
[顔]画像を読み込む。


#### needsNewPage (textState) → {Boolean}
指定テキストの情報に次のページがあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 調べるテキストの情報 |


#### newLineX () → {[Number](Number.md)}
[顔]表示の有無に応じて、新たな行の表示開始位置を返す。


#### newPage (textState)
指定したテキストの情報に従って新しいページを用意。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | テキストの情報 |


#### numVisibleRows () → {[Number](Number.md)}
表示される行数を返す。


#### onEndOfText ()
メッセージを全て表示した時に呼ばれるハンドラ。


#### processNewLine (textState)
Overrides: [Window_Base](Window_Base.md#processnewline-textstate)


#### processNewPage (textState)
Overrides: [Window_Base](Window_Base.md#processnewpage-textstate)


#### startInput () → {Boolean}
入力ウィンドウの開始。<br />
[Game_Message](Game_Message.md) の [isChoice()](Game_Message.md#ischoice---boolean)、[isNumberInput()](Game_Message.md#isnumberinput---boolean)、[isItemChoice()](Game_Message.md#isitemchoice---boolean) をチェックし、それぞれに対応したウィンドウを開く。 


#### startMessage ()
メッセージ表示の開始。


#### startPause ()
入力待ちの停止状態の開始。


#### startWait (count)
指定カウント分の待ち状態の開始。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `count` | [Number](Number.md) | 待ち時間(フレーム) |


#### subWindows () → {[Array](Array.md).<[Window_Base](Window_Base.md)>}
サブウィンドウの配列を返す。


#### terminateMessage ()
メッセージを停止してウィンドウを閉じる。


#### update ()
Overrides: [Window_Base](Window_Base.md#update-)


#### updateBackground ()
背景のアップデート。


#### updateInput () → {Boolean}
入力のアップデート。


#### updateLoading ()
読み込みのアップデート。


#### updateMessage () → {Boolean}
メッセージのアップデート。


#### updatePlacement ()
ウィンドウの配置のアップデート。


#### updateShowFast ()
メッセージ速度のアップデート。


#### updateWait () → {Boolean}
待機状態のアップデート。


#### windowHeight () → {[Number](Number.md)}
ウィンドウの高さを返す。


#### windowWidth () → {[Number](Number.md)}
ウィンドウの幅を返す。

