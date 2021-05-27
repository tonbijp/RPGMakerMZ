[クラスツリー](index.md)

# クラス: Window_EquipStatus

## スーパークラス:  [Window_StatusBase](Window_StatusBase.md)

[装備]シーンでパラメータの変化を表示するウィンドウ。

MVではスーパークラス(継承元)が [Window_Base](Window_Base.md) だったが、MZで [Window_StatusBase](Window_StatusBase.md) に変更されている。

関連クラス: [Scene_Equip](Scene_Equip.md), [RPG.EquipItem](RPG.EquipItem.md), [Window_EquipSlot](Window_EquipSlot.md), [Window_EquipItem](Window_EquipItem.md)

### new Window_EquipStatus (rect)
#### 引数
MVでは引数が x, y  だった。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_actor` | [Game_Actor](Game_Actor.md) | 現在のアクター |
| `_tempActor` | [Game_Actor](Game_Actor.md) | 装備の着脱後のアクター |


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

* [actorName (actorIndex)](Window_Base.md#actorname-actorindex--string)
* [baseTextRect (actorIndex)](Window_Base.md#basetextrect-actorindex--rectangle)
* [calcTextHeight (textState)](Window_Base.md#calctextheight-textstate--number)
* [changeOutlineColor (color)](Window_Base.md#changeoutlinecolor-color)
* [changePaintOpacity (enabled)](Window_Base.md#changepaintopacity-enabled)
* [changeTextColor (color)](Window_Base.md#changetextcolor-color)
* [checkRectObject (rect)](Window_Base.md#checkrectobject-rect)
* [close ()](Window_Base.md#close-)
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
* [drawTextEx (text, x, y)](Window_Base.md#drawtextex-text-x-y--number)
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

#### [Window_Selectable](Window_Selectable.md)

* [activate ()](Window_Selectable.md#activate-)
* [callCancelHandler ()](Window_Selectable.md#callcancelhandler-)
* [callHandler (symbol)](Window_Selectable.md#callhandler-symbol)
* [callOkHandler ()](Window_Selectable.md#callokhandler-)
* [callUpdateHelp ()](Window_Selectable.md#callupdatehelp-)
* [clearItem (index)](Window_Selectable.md#clearitem-index)
* [contentsHeight ()](Window_Selectable.md#contentsheight---number)
* [cursorAll ()](Window_Selectable.md#cursorall---boolean)
* [cursorDown (wrap)](Window_Selectable.md#cursordown-wrap)
* [cursorFixed ()](Window_Selectable.md#cursorfixed---boolean)
* [cursorLeft (wrap)](Window_Selectable.md#cursorleft-wrap)
* [cursorPagedown ()](Window_Selectable.md#cursorpagedown-)
* [cursorPageup ()](Window_Selectable.md#cursorpageup-)
* [cursorRight (wrap)](Window_Selectable.md#cursorright-wrap)
* [cursorUp (wrap)](Window_Selectable.md#cursorup-wrap)
* [deactivate ()](Window_Selectable.md#deactivate-)
* [deselect ()](Window_Selectable.md#deselect-)
* [drawAllItems ()](Window_Selectable.md#drawallitems-)
* [drawBackgroundRect (rect)](Window_Selectable.md#drawbackgroundrect-rect)
* [drawItem (index)](Window_Selectable.md#drawitem-index)
* [drawItemBackground (index)](Window_Selectable.md#drawitembackground-index)
* [ensureCursorVisible (smooth)](Window_Selectable.md#ensurecursorvisible-smooth)
* [forceSelect (index)](Window_Selectable.md#forceselect-index)
* [hideHelpWindow ()](Window_Selectable.md#hidehelpwindow-)
* [hitIndex ()](Window_Selectable.md#hitindex---number)
* [hitTest (x, y)](Window_Selectable.md#hittest-x-y--number)
* [index ()](Window_Selectable.md#index---number)
* [isCancelEnabled ()](Window_Selectable.md#iscancelenabled---boolean)
* [isCancelTriggered ()](Window_Selectable.md#iscanceltriggered---boolean)
* [isCurrentItemEnabled ()](Window_Selectable.md#iscurrentitemenabled---boolean)
* [isCursorMovable ()](Window_Selectable.md#iscursormovable---boolean)
* [isHandled (symbol)](Window_Selectable.md#ishandled-symbol--boolean)
* [isHorizontal ()](Window_Selectable.md#ishorizontal---boolean)
* [isHoverEnabled ()](Window_Selectable.md#ishoverenabled---boolean)
* [isOkEnabled ()](Window_Selectable.md#isokenabled---boolean)
* [isOkTriggered ()](Window_Selectable.md#isoktriggered---boolean)
* [isOpenAndActive ()](Window_Selectable.md#isopenandactive---boolean)
* [isScrollEnabled ()](Window_Selectable.md#isscrollenabled---boolean)
* [isTouchOkEnabled ()](Window_Selectable.md#istouchokenabled---boolean)
* [itemHeight ()](Window_Selectable.md#itemheight---number)
* [itemLineRect (index)](Window_Selectable.md#itemlinerect-index--rectangle)
* [itemRect (index)](Window_Selectable.md#itemrect-index--rectangle)
* [itemRectWithPadding (index)](Window_Selectable.md#itemrectwithpadding-index--rectangle)
* [itemWidth ()](Window_Selectable.md#itemwidth---number)
* [maxCols ()](Window_Selectable.md#maxcols---number)
* [maxItems ()](Window_Selectable.md#maxitems---number)
* [maxPageItems ()](Window_Selectable.md#maxpageitems---number)
* [maxPageRows ()](Window_Selectable.md#maxpagerows---number)
* [maxRows ()](Window_Selectable.md#maxrows---number)
* [maxTopRow ()](Window_Selectable.md#maxtoprow---number)
* [maxVisibleItems ()](Window_Selectable.md#maxvisibleitems---number)
* [onTouchCancel ()](Window_Selectable.md#ontouchcancel-)
* [onTouchOk ()](Window_Selectable.md#ontouchok-)
* [onTouchSelect (trigger)](Window_Selectable.md#ontouchselect-trigger)
* [overallHeight ()](Window_Selectable.md#overallheight---number)
* [paint ()](Window_Selectable.md#paint-)
* [processCancel ()](Window_Selectable.md#processcancel-)
* [processCursorMove ()](Window_Selectable.md#processcursormove-)
* [processHandling ()](Window_Selectable.md#processhandling-)
* [processOk ()](Window_Selectable.md#processok-)
* [processPagedown ()](Window_Selectable.md#processpagedown-)
* [processPageup ()](Window_Selectable.md#processpageup-)
* [processTouch ()](Window_Selectable.md#processtouch-)
* [processWheel ()](Window_Selectable.md#processwheel-)
* [redrawCurrentItem ()](Window_Selectable.md#redrawcurrentitem-)
* [redrawItem (index)](Window_Selectable.md#redrawitem-index)
* [refreshCursor ()](Window_Selectable.md#refreshcursor-)
* [refreshCursorForAll ()](Window_Selectable.md#refreshcursorforall-)
* [reselect ()](Window_Selectable.md#reselect-)
* [row ()](Window_Selectable.md#row---number)
* [rowSpacing ()](Window_Selectable.md#rowspacing---number)
* [select (index)](Window_Selectable.md#select-index)
* [setCursorAll (cursorAll)](Window_Selectable.md#setcursorall-cursorall)
* [setCursorFixed (cursorFixed)](Window_Selectable.md#setcursorfixed-cursorfixed)
* [setHandler (symbol, method)](Window_Selectable.md#sethandler-symbol-method)
* [setHelpWindow (helpWindow)](Window_Selectable.md#sethelpwindow-helpwindow)
* [setHelpWindowItem (item)](Window_Selectable.md#sethelpwindowitem-item)
* [setTopRow (row)](Window_Selectable.md#settoprow-row)
* [showHelpWindow ()](Window_Selectable.md#showhelpwindow-)
* [smoothSelect (index)](Window_Selectable.md#smoothselect-index)
* [topIndex ()](Window_Selectable.md#topindex---number)
* [topRow ()](Window_Selectable.md#toprow---number)
* [update ()](Window_Selectable.md#update-)
* [updateHelp ()](Window_Selectable.md#updatehelp-)
* [updateInputData ()](Window_Selectable.md#updateinputdata-)

#### [Window_StatusBase](Window_StatusBase.md)

* [actorSlotName () ](Window_StatusBase.md#actorslotname---string)
* [createInnerSprite (key, spriteClass)](Window_StatusBase.md#createinnersprite-key-spriteclass)
* [drawActorCharacter (actor, x, y)](Window_StatusBase.md#drawactorcharacter-actor-x-y)
* [drawActorClass (actor, x, y, width)](Window_StatusBase.md#drawactorclass-actor-x-y-width)
* [drawActorFace (actor, x, y, width, height)](Window_StatusBase.md#drawactorface-actor-x-y-width-height)
* [drawActorIcons (actor, x, y, width)](Window_StatusBase.md#drawactoricons-actor-x-y-width)
* [drawActorLevel (actor, x, y)](Window_StatusBase.md#drawactorlevel-actor-x-y)
* [drawActorName (actor, x, y, width)](Window_StatusBase.md#drawactorname-actor-x-y-width)
* [drawActorNickname (actor, x, y, width)](Window_StatusBase.md#drawactornickname-actor-x-y-width)
* [drawActorSimpleStatus (actor, x, y)](Window_StatusBase.md#drawactorsimplestatus-actor-x-y)
* [gaugeLineHeight () ](Window_StatusBase.md#gaugelineheight---number)
* [hideAdditionalSprites ()](Window_StatusBase.md#hideadditionalsprites-)
* [loadFaceImages ()](Window_StatusBase.md#loadfaceimages-)
* [placeActorName (actor, x, y)](Window_StatusBase.md#placeactorname-actor-x-y)
* [placeBasicGauges (actor, x, y)](Window_StatusBase.md#placebasicgauges-actor-x-y)
* [placeGauge (actor, type, x, y)](Window_StatusBase.md#placegauge-actor-type-x-y)
* [placeStateIcon (actor, x, y)](Window_StatusBase.md#placestateicon-actor-x-y)
* [placeTimeGauge (actor, x, y)](Window_StatusBase.md#placetimegauge-actor-x-y)
* [refresh ()](Window_StatusBase.md#refresh-)
* [setName (name)](Window_StatusBase.md#setname-name)


### メソッド

#### colSpacing () → {[Number](Number.md)}
**@MZ** オーバーライド: [Window_Selectable](Window_Selectable.md#colspacing---number)


#### drawAllParams () 
**@MZ** 全パラメータを描画。


#### drawCurrentParam (x, y, paramId)
現在のパラメータを描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `paramId` | [Number](Number.md) | パラメータのID |


#### drawItem (x, y, paramId)
アイテムを描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `paramId` | [Number](Number.md) | パラメータのID |


#### drawNewParam (x, y, paramId)
装備後のパラメータを描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `paramId` | [Number](Number.md) | パラメータのID |


#### drawParamName (x, y, paramId)
パラメータの名前を描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `paramId` | [Number](Number.md) | パラメータのID |


#### drawRightArrow (x, y)
矢印(→)を描く。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### initialize (rect)
オーバーライド: [Window_StatusBase](Window_StatusBase.md#initialize-rect)


#### paramWidth () → {[Number](Number.md)}
**@MZ** パラメータの幅(規定値:48ピクセル)を返す。


#### paramX () → {[Number](Number.md)}
**@MZ** パラメータのx位置(ピクセル)を返す。


#### paramY (index) → {[Number](Number.md)}
**@MZ** 指定行のパラメータのy位置(ピクセル)を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `index` | [Number](Number.md) | 行数 |


#### refresh ()
再描画。


#### rightArrowWidth () → {[Number](Number.md)}
**@MZ** 装備前後を表示する矢印(→)の幅(規定値:32ピクセル)を返す。


#### setActor (actor)
対象となるアクターを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | アクター |


#### setTempActor (actor)
装備の着脱後のアクターを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | アクター |



### 廃止MVメソッド
numVisibleRows (), windowHeight (), windowWidth ()