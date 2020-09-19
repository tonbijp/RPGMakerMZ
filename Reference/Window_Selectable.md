# Class: Window_Selectable

## Extends: [Window_Base](Window_Base.md)

### new Window_Selectable (x, y, width, height)
コマンドカーソルの移動やスクロールを行うウィンドウ。

関連クラス: [Input](Input.md)

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | ウィンドウ x座標(ピクセル) |
| `y` | [Number](Number.md) | ウィンドウ y座標(ピクセル) |
| `width` | [Number](Number.md) | ウィンドウ幅(ピクセル) |
| `height` | [Number](Number.md) | ウィンドウ高さ(ピクセル) |


### Sub Classes

* [Window_BattleEnemy](Window_BattleEnemy.md)
* [Window_BattleLog](Window_BattleLog.md)
* [Window_DebugEdit](Window_DebugEdit.md)
* [Window_DebugRange](Window_DebugRange.md)
* [Window_EquipSlot](Window_EquipSlot.md)
* [Window_NameInput](Window_NameInput.md)
* [Window_NumberInput](Window_NumberInput.md)
* [Window_SavefileList](Window_SavefileList.md)
* [Window_ShopBuy](Window_ShopBuy.md)
* [Window_ShopNumber](Window_ShopNumber.md)
* [Window_Status](Window_Status.md)
* [Window_BattleStatus](Window_BattleStatus.md)
* [Window_MenuStatus](Window_MenuStatus.md)
* [Window_SkillList](Window_SkillList.md)
* [Window_ItemList](Window_ItemList.md)
* [Window_Command](Window_Command.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_index` | [Number](Number.md) | 選択されている項目の番号 |
| `_cursorFixed` | Boolean | カーソルが固定されているか |
| `_cursorAll` | Boolean | 全項目を選択しているか |
| `_stayCount` | [Number](Number.md) | 選択されてからの待ち時間(フレーム) |
| `_helpWindow` | [Window_Help](Window_Help.md) | ヘルプウィンドウ |
| `_handlers` | Object | {[入力ハンドラ名](Window_Selectable.md#symbol): ハンドラ関数, …} |
| `_touching` | Boolean | タッチされているか |
| `_scrollX` | [Number](Number.md) | x軸のスクロール量 |
| `_scrollY` | [Number](Number.md) | y軸のスクロール量 |

#### 入力ハンドラ名
RPGツクールMVの主要な入力ハンドラ。<br />
キーボード、ゲームパッド、タッチパネル、マウスの入力を共通した以下のシンボルに変換している。

| Symbol | Description |
| --- | --- |
| `ok` | OK |
| `cancel` | キャンセル |
| `up` | ↑ |
| `down` | ↓ |
| `left` | ← |
| `right` | → |
| `pageup` | ページアップ |
| `pagedown` | ページダウン |


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
* [processNewLine (textState)](Window_Base.md#processnewline-textstate)
* [processNewPage (textState)](Window_Base.md#processnewpage-textstate)
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

#### activate ()
Overrides: [Window_Base](Window_Base.md#activate-)


#### bottomRow () → {[Number](Number.md)}
行数を返す。


#### callCancelHandler ()
キャンセルのハンドラを呼ぶ。


#### callHandler (symbol)
指定したハンドラを呼ぶ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | [入力ハンドラ名](Window_Selectable.md#symbol) |


#### callOkHandler ()
OKのハンドラを呼ぶ。


#### callUpdateHelp ()
ヘルプのアップデートを呼ぶ。


#### clearItem (index)
指定した番号の項目を削除。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### cursorAll () → {Boolean}
全項目を選択しているか。


#### cursorDown (wrap)
カーソルを下に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorFixed () → {Boolean}
カーソルが固定されているか。


#### cursorLeft (wrap)
カーソルを左に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorPagedown ()
カーソルを次ページに移動。


#### cursorPageup ()
カーソルを前ページに移動。


#### cursorRight (wrap)
カーソルを右に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorUp (wrap)
カーソルを上に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### deactivate ()
Overrides: [Window_Base](Window_Base.md#deactivate-)


#### deselect ()
全項目を非選択。


#### drawAllItems ()
全項目を描画。


#### drawItem (index)
指定番号の項目を描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### ensureCursorVisible ()
選択カーソルを表示。


#### hideHelpWindow ()
ヘルプウィンドウを非表示。


#### hitTest (x, y) → {[Number](Number.md)}
指定座標が項目の範囲に含まれるか上から判定を行い、最初に適合した項目番号を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### index () → {[Number](Number.md)}
選択中の項目の番号を返す。


#### initialize (x, y, width, height)
Overrides: [Window_Base](Window_Base.md#initialize-x-y-width-height)


#### isCancelEnabled () → {Boolean}
キャンセルが可能か。


#### isCancelTriggered () → {Boolean}
キャンセルが起動されたか。


#### isContentsArea (x, y) → {Boolean}
指定座標がコンテンツの範囲内か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### isCurrentItemEnabled () → {Boolean}
選択中の項目が利用可能か。


#### isCursorMovable () → {Boolean}
カーソルが動かせるか。


#### isCursorVisible () → {Boolean}
カーソルが表示中か。


#### isHandled (symbol) → {Boolean}
指定されたハンドラが利用可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | [入力ハンドラ名](Window_Selectable.md#symbol) |


#### isHorizontal () → {Boolean}
横一列のコマンド並びか。


#### isOkEnabled () → {Boolean}
OKが可能か。


#### isOkTriggered () → {Boolean}
OKが起動されたか。


#### isOpenAndActive () → {Boolean}
ウィンドウが開いてアクティブか。


#### isTouchedInsideFrame () → {Boolean}
枠の内側をタッチされたか。


#### isTouchOkEnabled () → {Boolean}
タッチ入力によるOKが可能か。


#### itemHeight () → {[Number](Number.md)}
項目の高さ(ピクセル)を返す。


#### itemRect (index) → {[Rectangle](Rectangle.md)}
指定された項目の矩形範囲を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### itemRectForText (index) → {[Rectangle](Rectangle.md)}
指定された項目の文字列用の矩形範囲を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### itemWidth () → {[Number](Number.md)}
項目の幅(ピクセル)を返す。


#### maxCols () → {[Number](Number.md)}
ウィンドウが持つ最大列(カラム)数を返す。


#### maxItems () → {[Number](Number.md)}
ウィンドウが持つ最大項目数を返す。


#### maxPageItems () → {[Number](Number.md)}
ページが持つ最大項目数を返す。


#### maxPageRows () → {[Number](Number.md)}
ページが持つ最大行(ロー)数を返す。


#### maxRows () → {[Number](Number.md)}
ウィンドウが持つ最大行(ロー)数を返す。


#### maxTopRow () → {[Number](Number.md)}
最後の最上部の行(ロー)数を返す。


#### onTouch (triggered)
タッチの処理。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `triggered` | Boolean | タッチされた瞬間か |


#### playBuzzerSound ()
[ブザー]音を再生。


#### playOkSound ()
[決定]音を再生。


#### processCancel ()
キャンセルを処理。


#### processCursorMove ()
カーソルの移動を処理。


#### processHandling ()
追加されたハンドラの処理。


#### processOk ()
OKの処理。


#### processPagedown ()
ページダウンの処理。


#### processPageup ()
ページアップの処理。


#### processTouch ()
タッチ入力の処理。


#### processWheel ()
ホイール入力の処理。


#### redrawCurrentItem ()
現在の項目の再描画。


#### redrawItem (index)
指定した番号の項目の再描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### refresh ()
コンテンツの再描画。


#### reselect ()
項目の再選択。


#### resetScroll ()
スクロールを初期化。


#### row () → {[Number](Number.md)}
現在の行(ロー)数を返す。


#### scrollDown ()
下にスクロール。


#### scrollUp ()
上にスクロール。


#### select (index)
指定した番号の項目を選択。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号(0から開始) |


#### setBottomRow (row)
下の行(ロー)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `row` | [Number](Number.md) | 行番号 |


#### setCursorAll (cursorAll)
全項目選択の状態を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cursorAll` | Boolean | 全選択か |


#### setCursorFixed (cursorFixed)
カーソルの固定状態を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `cursorFixed` | Boolean | カーソル固定か |


#### setHandler (symbol, method)
ハンドラを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | [入力ハンドラ名](Window_Selectable.md#symbol) |
| `method` | Function | ハンドラ関数 |


#### setHelpWindow (helpWindow)
ヘルプウィンドウを設定。
##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `helpWindow` | [Window_Help](Window_Help.md) | ヘルプウィンドウ |


#### setHelpWindowItem (item)
指定項目をヘルプウィンドウに表示。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) \| [String](String.md) | 設定する項目 |


#### setTopRow (row)
上の行(ロー)を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `row` | [Number](Number.md) | 行番号 |


#### showHelpWindow ()
ヘルプウィンドウを表示。


#### spacing () → {[Number](Number.md)}
空白の量(ピクセル)を返す。


#### topIndex () → {[Number](Number.md)}
スクロールリストの上にある項目の番号を返す。


#### topRow () → {[Number](Number.md)}
上の行(ロー)の番号を返す。


#### update ()
Overrides: [Window_Base](Window_Base.md#update-)


#### updateArrows ()
上下に項目の続きがあることを示す矢印のアップデート。


#### updateCursor ()
カーソルをアップデート。


#### updateHelp ()
ヘルプウィンドウをアップデート。


#### updateInputData ()
入力データをアップデート。

