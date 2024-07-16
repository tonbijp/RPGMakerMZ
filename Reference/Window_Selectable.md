[クラスツリー](index.md)

# クラス: Window_Selectable

## スーパークラス: [Window_Scrollable](Window_Scrollable.md)

コマンドカーソルの移動や入力判定を行うウィンドウ。

MVではスーパークラス(継承元)が [Window_Base](Window_Base.md) だったが、MZで [Window_Scrollable](Window_Scrollable.md) に変更されている。

関連クラス: [Input](Input.md), [TouchInput](TouchInput.md)

### new Window_Selectable (rect)
#### 引数
MVでは引数が x, y, width, height だった。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |


### サブクラス

* [Window_BattleEnemy](Window_BattleEnemy.md)
* [Window_Command](Window_Command.md)
* [Window_DebugEdit](Window_DebugEdit.md)
* [Window_DebugRange](Window_DebugRange.md)
* [Window_ItemList](Window_ItemList.md)
* [Window_NameInput](Window_NameInput.md)
* [Window_NumberInput](Window_NumberInput.md)
* [Window_SavefileList](Window_SavefileList.md)
* [Window_ShopBuy](Window_ShopBuy.md)
* [Window_ShopNumber](Window_ShopNumber.md)
* [Window_SkillList](Window_SkillList.md)
* [Window_StatusBase](Window_StatusBase.md)


### プロパティ

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `_index` | [Number](Number.md) | 選択されている項目の番号 |
| `_cursorFixed` | Boolean | カーソルが固定されているか |
| `_cursorAll` | Boolean | 全項目を選択しているか |
| `_helpWindow` | [Window_Help](Window_Help.md) | ヘルプウィンドウ |
| `_handlers` | Object | \{[入力キー名](#入力キー名): ハンドラ関数, …\} |
| `_doubleTouch` | Boolean | **@MZ** 選択中の項目のクリック・タッチか |
| `_canRepeat` | Boolean | **@MZ** 繰り返し可か |


#### 入力キー名
『RPGツクールMZ』の主要な入力キー名。<br />
キーボード、ゲームパッド、タッチパネル、マウスの入力を共通した以下のシンボル文字列に変換している。

| 文字列 | 説明 |
| --- | --- |
| "ok" | OK |
| "cancel" | キャンセル |
| "up" | ↑ |
| "down" | ↓ |
| "left" | ← |
| "right" | → |
| "pageup" | ページアップ |
| "pagedown" | ページダウン |

### 廃止MVプロパティ
`_scrollX`, `_scrollY`, `_stayCount`, `_touching`


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

* [actorName (actorIndex)](Window_Base.md#actorname-actorindex--string)
* [baseTextRect ()](Window_Base.md#basetextrect---rectangle)
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
* [isClosing ()](Window_Base.md#isclosing---boolean)
* [isOpening ()](Window_Base.md#isopening---boolean)
* [itemPadding ()](Window_Base.md#itempadding---number)
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

#### [Window_Scrollable](Window_Scrollable.md)

* [clearScrollStatus ()](Window_Scrollable.md#clearscrollstatus-)
* [isTouchedInsideFrame ()](Window_Scrollable.md#istouchedinsideframe---boolean)
* [isTouchScrollEnabled ()](Window_Scrollable.md#istouchscrollenabled---boolean)
* [isWheelScrollEnabled ()](Window_Scrollable.md#iswheelscrollenabled---boolean)
* [maxScrollX ()](Window_Scrollable.md#maxscrollx---number)
* [maxScrollY ()](Window_Scrollable.md#maxscrolly---number)
* [onTouchScroll ()](Window_Scrollable.md#ontouchscroll-)
* [onTouchScrollEnd ()](Window_Scrollable.md#ontouchscrollend-)
* [onTouchScrollStart ()](Window_Scrollable.md#ontouchscrollstart-)
* [overallHeight ()](Window_Scrollable.md#overallheight---number)
* [overallWidth ()](Window_Scrollable.md#overallwidth---number)
* [processTouchScroll ()](Window_Scrollable.md#processtouchscroll-)
* [processWheelScroll ()](Window_Scrollable.md#processwheelscroll-)
* [scrollBaseX ()](Window_Scrollable.md#scrollbasex---number)
* [scrollBaseY ()](Window_Scrollable.md#scrollbasey---number)
* [scrollBlockHeight ()](Window_Scrollable.md#scrollblockheight---number)
* [scrollBlockWidth ()](Window_Scrollable.md#scrollblockwidth---number)
* [scrollTo (x, y)](Window_Scrollable.md#scrollto-x-y)
* [scrollX ()](Window_Scrollable.md#scrollx---number)
* [scrollY ()](Window_Scrollable.md#scrolly---number)
* [setScrollAccel (x, y)](Window_Scrollable.md#setscrollaccel-x-y)
* [smoothScrollBy (x, y)](Window_Scrollable.md#smoothscrollby-x-y)
* [smoothScrollDown (n)](Window_Scrollable.md#smoothscrolldown-n)
* [smoothScrollTo (x, y)](Window_Scrollable.md#smoothscrollto-x-y)
* [smoothScrollUp (n)](Window_Scrollable.md#smoothscrollup-n)
* [updateArrows ()](Window_Scrollable.md#updatearrows-)
* [updateOrigin ()](Window_Scrollable.md#updateorigin-)
* [updateScrollAccel ()](Window_Scrollable.md#updatearrows-)
* [updateScrollBase ()](Window_Scrollable.md#updatescrollbase-)
* [updateSmoothScroll ()](Window_Scrollable.md#updatesmoothscroll-)


### メソッド

#### activate ()
オーバーライド: [Window_Base](Window_Base.md#activate-)


#### callCancelHandler ()
キャンセルのハンドラを呼ぶ。


#### callHandler (symbol)
指定したハンドラを呼ぶ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `symbol` | [String](String.md) | [入力ハンドラ名](#入力ハンドラ名) |


#### callOkHandler ()
OKのハンドラを呼ぶ。


#### callUpdateHelp ()
ヘルプの更新を呼ぶ。


#### clearItem (index)
指定した番号の項目を削除。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### colSpacing () → {[Number](Number.md)}
**@MZ** 列の間隔(規定値:8ピクセル)を返す。


#### contentsHeight () → {[Number](Number.md)}
**@MZ** 内容の高さ(ピクセル)を返す。


#### cursorAll () → {Boolean}
全項目を選択しているか。


#### cursorDown (wrap)
カーソルを下に移動。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorFixed () → {Boolean}
カーソルが固定されているか。


#### cursorLeft (wrap)
カーソルを左に移動。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorPagedown ()
カーソルを次ページに移動。


#### cursorPageup ()
カーソルを前ページに移動。


#### cursorRight (wrap)
カーソルを右に移動。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### cursorUp (wrap)
カーソルを上に移動。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `wrap` | Boolean | リストの前後をつなぐか |


#### deactivate ()
オーバーライド: [Window_Base](Window_Base.md#deactivate-)


#### deselect ()
全項目を非選択。


#### drawAllItems ()
全項目を描画。


#### drawBackgroundRect (rect)
**@MZ** 指定範囲に背景を描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 背景描画範囲 |


#### drawItem (index)
指定番号の項目を描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### drawItemBackground (index)
**@MZ** 指定番号の項目の背景を描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### ensureCursorVisible (smooth)
選択カーソルを表示。

##### 引数
MVでは引数なし。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `smooth` | Boolean | 滑らかにスクロールするか |


#### forceSelect (index)
**@MZ** 指定番号の項目を選択(カーソル非表示)。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### hideHelpWindow ()
ヘルプウィンドウを非表示。


#### hitIndex () → {[Number](Number.md)}
**@MZ** ポイント・タッチ中の項目の番号を返す。


#### hitTest (x, y) → {[Number](Number.md)}
指定座標が項目の範囲に含まれるか上から判定を行い、最初に適合した項目番号を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### index () → {[Number](Number.md)}
選択中の項目の番号を返す。


#### initialize (rect)
オーバーライド: [Window_Scrollable](Window_Scrollable.md#initialize-rect)


#### isCancelEnabled () → {Boolean}
キャンセルが可能か。


#### isCancelTriggered () → {Boolean}
キャンセルが起動されたか。


#### isCurrentItemEnabled () → {Boolean}
選択中の項目が利用可能か。


#### isCursorMovable () → {Boolean}
カーソルが動かせるか。


#### isHandled (symbol) → {Boolean}
指定されたハンドラが利用可能か。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `symbol` | [String](String.md) | [入力ハンドラ名](#入力ハンドラ名) |


#### isHorizontal () → {Boolean}
横一列のコマンド並びか。


#### isHoverEnabled () → {Boolean}
**@MZ** ホバーが可能か。


#### isOkEnabled () → {Boolean}
OKが可能か。


#### isOkTriggered () → {Boolean}
OKが起動されたか。


#### isOpenAndActive () → {Boolean}
ウィンドウが開いてアクティブか。


#### isScrollEnabled () → {Boolean}
**@MZ** オーバーライド: [Window_Scrollable](Window_Scrollable.md#isscrollenabled---boolean)


#### isTouchOkEnabled () → {Boolean}
タッチ入力によるOKが可能か。


#### itemHeight () → {[Number](Number.md)}
オーバーライド: [Window_Base](Window_Base.md#itemheight---number)


#### itemLineRect (index) → {[Rectangle](Rectangle.md)}
**@MZ** 指定項目行の矩形範囲を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### itemRect (index) → {[Rectangle](Rectangle.md)}
指定された項目の矩形範囲を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### itemRectWithPadding (index) → {[Rectangle](Rectangle.md)}
**@MZ** パディングを含めた項目の矩形範囲を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### itemWidth () → {[Number](Number.md)}
オーバーライド: [Window_Base](Window_Base.md#itemwidth---number)


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


#### maxVisibleItems () → {[Number](Number.md)}
**@MZ** ウィンドウが持つ最大表示可能項目数を返す。


#### onTouchCancel ()
**@MZ** 項目の選択がキャンセルされた時のハンドラ。


#### onTouchOk ()
**@MZ** 項目が確定された時のハンドラ。


#### onTouchSelect (trigger)
**@MZ** 項目が選択された時のハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `trigger` | Boolean | タッチあるいは決定(左)ボタンが押された瞬間か |


#### overallHeight () → {[Number](Number.md)}
**@MZ** 全体の高さ(ピクセル)を返す。


#### processCancel ()
キャンセルを処理。


#### paint ()
**@MZ** オーバーライド: [Window_Scrollable](Window_Scrollable.md#paint-)


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

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### refresh ()
コンテンツの再描画。


#### refreshCursor ()
**@MZ** カーソルの再描画。


#### refreshCursorForAll ()
**@MZ** 全選択カーソルの再描画。


#### reselect ()
項目の再選択。


#### row () → {[Number](Number.md)}
現在の行(ロー)数を返す。


#### rowSpacing () → {[Number](Number.md)}
**@MZ** 行間隔(規定値:4ピクセル)を返す。


#### smoothSelect (index)
**@MZ** 指定番号の項目を選択。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号 |


#### select (index)
指定した番号の項目を選択。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 項目番号(0から開始) |


#### setCursorAll (cursorAll)
全項目選択の状態を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `cursorAll` | Boolean | 全選択か |


#### setCursorFixed (cursorFixed)
カーソルの固定状態を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `cursorFixed` | Boolean | カーソル固定か |


#### setHandler (symbol, method)
ハンドラを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `symbol` | [String](String.md) | [入力ハンドラ名](#入力ハンドラ名) |
| `method` | Function | ハンドラ関数 |


#### setHelpWindow (helpWindow)
ヘルプウィンドウを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `helpWindow` | [Window_Help](Window_Help.md) | ヘルプウィンドウ |


#### setHelpWindowItem (item)
指定項目をヘルプウィンドウに表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) \| [String](String.md) | 設定する項目 |


#### setTopRow (row)
上の行(ロー)を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `row` | [Number](Number.md) | 行番号 |


#### showHelpWindow ()
ヘルプウィンドウを表示。


#### topIndex () → {[Number](Number.md)}
スクロールリストの上にある項目の番号を返す。


#### topRow () → {[Number](Number.md)}
上の行(ロー)の番号を返す。


#### update ()
オーバーライド: [Window_Scrollable](Window_Scrollable.md#update-)


#### updateHelp ()
ヘルプウィンドウを更新。


#### updateInputData ()
入力データを更新。


### 廃止MVメソッド
bottomRow (), isContentsArea (x, y), isCursorVisible (), isTouchedInsideFrame (), itemRectForText (index), onTouch (triggered), playBuzzerSound (), playOkSound (), resetScroll (), scrollDown (), scrollUp (), setBottomRow (row), spacing (), updateCursor (), updateArrows ()
