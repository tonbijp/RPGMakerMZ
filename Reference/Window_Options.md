# Class: Window_Options

## Extends: [Window_Command](Window_Command.md)

### new Window_Options ()
[オプション]コマンド( [常時ダッシュ][コマンド記憶][BGM 音量][BGS 音量][ME 音量][SE 音量] )のウィンドウ。

関連クラス: [Scene_Options](Scene_Options.md), [Window_TitleCommand](Window_TitleCommand.md), [Window_MenuCommand](Window_MenuCommand.md)

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

#### [Window_Selectable](Window_Selectable.md)

* [activate ()](Window_Selectable.md#activate-)
* [bottomRow ()](Window_Selectable.md#bottomrow---number)
* [callCancelHandler ()](Window_Selectable.md#callcancelhandler-)
* [callHandler (symbol)](Window_Selectable.md#callhandler-symbol)
* [callUpdateHelp ()](Window_Selectable.md#callupdatehelp-)
* [clearItem (index)](Window_Selectable.md#clearitem-index)
* [cursorAll ()](Window_Selectable.md#cursorall---boolean)
* [cursorDown (wrap)](Window_Selectable.md#cursordown-wrap)
* [cursorFixed ()](Window_Selectable.md#cursorfixed---boolean)
* [cursorPagedown ()](Window_Selectable.md#cursorpagedown-)
* [cursorPageup ()](Window_Selectable.md#cursorpageup-)
* [cursorUp (wrap)](Window_Selectable.md#cursorup-wrap)
* [deactivate ()](Window_Selectable.md#deactivate-)
* [deselect ()](Window_Selectable.md#deselect-)
* [drawAllItems ()](Window_Selectable.md#drawallitems-)
* [ensureCursorVisible ()](Window_Selectable.md#ensurecursorvisible-)
* [hideHelpWindow ()](Window_Selectable.md#hidehelpwindow-)
* [hitTest (x, y)](Window_Selectable.md#hittest-x-y--number)
* [index ()](Window_Selectable.md#index---number)
* [isCancelEnabled ()](Window_Selectable.md#iscancelenabled---boolean)
* [isCancelTriggered ()](Window_Selectable.md#iscanceltriggered---boolean)
* [isContentsArea (x, y)](Window_Selectable.md#iscontentsarea-x-y--boolean)
* [isCursorMovable ()](Window_Selectable.md#iscursormovable---boolean)
* [isCursorVisible ()](Window_Selectable.md#iscursorvisible---boolean)
* [isHandled (symbol)](Window_Selectable.md#ishandled-symbol--boolean)
* [isHorizontal ()](Window_Selectable.md#ishorizontal---boolean)
* [isOkTriggered ()](Window_Selectable.md#isoktriggered---boolean)
* [isOpenAndActive ()](Window_Selectable.md#isopenandactive---boolean)
* [isTouchedInsideFrame ()](Window_Selectable.md#istouchedinsideframe---boolean)
* [isTouchOkEnabled ()](Window_Selectable.md#istouchokenabled---boolean)
* [itemHeight ()](Window_Selectable.md#itemheight---number)
* [itemRect (index)](Window_Selectable.md#itemrect-index--rectangle)
* [itemRectForText (index)](Window_Selectable.md#itemrectfortext-index--rectangle)
* [itemWidth ()](Window_Selectable.md#itemwidth---number)
* [maxCols ()](Window_Selectable.md#maxcols---number)
* [maxPageItems ()](Window_Selectable.md#maxpageitems---number)
* [maxPageRows ()](Window_Selectable.md#maxpagerows---number)
* [maxRows ()](Window_Selectable.md#maxrows---number)
* [maxTopRow ()](Window_Selectable.md#maxtoprow---number)
* [onTouch (triggered)](Window_Selectable.md#ontouch-triggered)
* [playBuzzerSound ()](Window_Selectable.md#playbuzzersound-)
* [playOkSound ()](Window_Selectable.md#playoksound-)
* [processCancel ()](Window_Selectable.md#processcancel-)
* [processCursorMove ()](Window_Selectable.md#processcursormove-)
* [processHandling ()](Window_Selectable.md#processhandling-)
* [processPagedown ()](Window_Selectable.md#processpagedown-)
* [processPageup ()](Window_Selectable.md#processpageup-)
* [processTouch ()](Window_Selectable.md#processtouch-)
* [processWheel ()](Window_Selectable.md#processwheel-)
* [redrawCurrentItem ()](Window_Selectable.md#redrawcurrentitem-)
* [redrawItem (index)](Window_Selectable.md#redrawitem-index)
* [refresh ()](Window_Selectable.md#refresh-)
* [reselect ()](Window_Selectable.md#reselect-)
* [resetScroll ()](Window_Selectable.md#resetscroll-)
* [row ()](Window_Selectable.md#row---number)
* [scrollDown ()](Window_Selectable.md#scrolldown-)
* [scrollUp ()](Window_Selectable.md#scrollup-)
* [select (index)](Window_Selectable.md#select-index)
* [setBottomRow (row)](Window_Selectable.md#setbottomrow-row)
* [setCursorAll (cursorAll)](Window_Selectable.md#setcursorall-cursorall)
* [setCursorFixed (cursorFixed)](Window_Selectable.md#setcursorfixed-cursorfixed)
* [setHandler (symbol, method)](Window_Selectable.md#sethandler-symbol-method)
* [setHelpWindow (helpWindow)](Window_Selectable.md#sethelpwindow-helpwindow)
* [setHelpWindowItem (item)](Window_Selectable.md#sethelpwindowitem-item)
* [setTopRow (row)](Window_Selectable.md#settoprow-row)
* [showHelpWindow ()](Window_Selectable.md#showhelpwindow-)
* [spacing ()](Window_Selectable.md#spacing---number)
* [topIndex ()](Window_Selectable.md#topindex---number)
* [topRow ()](Window_Selectable.md#toprow---number)
* [update ()](Window_Selectable.md#update-)
* [updateArrows ()](Window_Selectable.md#updatearrows-)
* [updateCursor ()](Window_Selectable.md#updatecursor-)
* [updateHelp ()](Window_Selectable.md#updatehelp-)
* [updateInputData ()](Window_Selectable.md#updateinputdata-)


#### [Window_Command](Window_Command.md)

* [addCommand (name, symbol, enabled, ext)](Window_Command.md#addcommand-name-symbol-enabled-opt-ext-opt)
* [callOkHandler ()](Window_Command.md#callokhandler-)
* [commandName (index)](Window_Command.md#commandname-index--string)
* [commandSymbol (index)](Window_Command.md#commandsymbol-index--string)
* [currentData ()](Window_Command.md#currentdata---object)
* [currentExt ()](Window_Command.md#currentext---)
* [currentSymbol ()](Window_Command.md#currentsymbol---string)
* [findExt (ext)](Window_Command.md#findext-ext--number)
* [findSymbol (symbol)](Window_Command.md#findsymbol-symbol--number)
* [isCommandEnabled (index)](Window_Command.md#iscommandenabled-index--boolean)
* [isCurrentItemEnabled ()](Window_Command.md#iscurrentitemenabled---boolean)
* [isOkEnabled ()](Window_Command.md#isokenabled---boolean)
* [itemTextAlign ()](Window_Command.md#itemtextalign---string)
* [maxItems ()](Window_Command.md#maxitems---number)
* [numVisibleRows ()](Window_Command.md#numvisiblerows---number)
* [refresh ()](Window_Command.md#refresh-)
* [selectExt (ext)](Window_Command.md#selectext-ext)
* [selectSymbol (symbol)](Window_Command.md#selectsymbol-symbol)


### Methods

#### addGeneralOptions ()
 [常時ダッシュ][コマンド記憶]をメニューに追加。


#### addVolumeOptions ()
[BGM 音量][BGS 音量][ME 音量][SE 音量]をメニューに追加。


#### booleanStatusText (value) → {[String](String.md)}
指定真偽値を 'ON' か 'OFF' に変換して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | Boolean | 真偽値 |


#### changeValue (symbol, value)
指定シンボルの値を変更。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | シンボル |
| `value` | Boolean | [Number](Number.md) | 値 |


#### cursorLeft (wrap)
Overrides: [Window_Selectable](Window_Selectable.md#cursorleft-wrap)


#### cursorRight (wrap)
Overrides:  [Window_Selectable](Window_Selectable.md#cursorright-wrap)


#### drawItem (index)
Overrides: [Window_Command](Window_Command.md#drawitem-index)


#### getConfigValue (symbol) → {Boolean | Number}
指定シンボルの値を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | シンボル |


#### initialize ()
Overrides: [Window_Command](Window_Command.md#initialize-x-y)


#### isVolumeSymbol (symbol) → {Boolean}
指定シンボルが音量に関するものか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | シンボル |


#### makeCommandList ()
Overrides: [Window_Command](Window_Command.md#makecommandlist-)


#### processOk ()
Overrides: [Window_Selectable](Window_Command.md#processok-)


#### setConfigValue (symbol, value)
指定シンボルに値を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `symbol` | [String](String.md) | シンボル |
| `value` | Boolean \| [Number](Number.md) | 値 |


#### updatePlacement ()
ウィンドウの配置のアップデート。


#### statusText (index) → {[String](String.md)}
指定番号のステータス文字列を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `index` | [Number](Number.md) | コマンド番号 |


#### statusWidth () → {[Number](Number.md)}
ステータスの幅(規定値: 120)を返す。


#### volumeStatusText (value) → {[String](String.md)}
指定した数値に単位(%)をつけて返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) | 数値 |


#### volumeOffset () → {[Number](Number.md)}
音量を変更する際の刻み値を返す(規定値: 20)


#### windowHeight () → {[Number](Number.md)}
Overrides: [Window_Command](Window_Command.md#windowheight---number)


#### windowWidth () → {[Number](Number.md)}
Overrides: [Window_Command](Window_Command.md#windowwidth---number)


