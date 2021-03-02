[クラスツリー](index.md)

# クラス: Window_Gold

## スーパークラス: [Window_Selectable](Window_Selectable.md)

### new Window_Gold (rect)
[所持金]を表示するウィンドウ。

MVではスーパークラス(継承元)が [Window_Base](Window_Base.md) だったが、MZで [Window_Selectable](Window_Selectable.md) に変更されている。

関連クラス: [Scene_Menu](Scene_Menu.md), [Scene_Shop](Scene_Shop.md), [Window_Message](Window_Message.md)

#### 引数
MVでは引数が x, y  だった。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |


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
* [move (x, y, width, height)](Window.md#move-x-y-width-height)
* [setCursorRect (x, y, width, height)](Window.md#setcursorrect-x-y-width-height)
* [setTone (r, g, b)](Window.md#settone-r-g-b)
* [updateTransform ()](Window.md#updatetransform-)

#### [Window_Base](Window_Base.md)

* [activate ()](Window_Base.md#activate-)
* [actorName (actorIndex)](Window_Base.md#actorname-actorindex--string)
* [baseTextRect (actorIndex)](Window_Base.md#basetextrect-actorindex--rectangle)
* [calcTextHeight (textState, all)](Window_Base.md#calctextheight-textstate-all--number)
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
* [drawTextEx (text, x, y)](Window_Base.md#drawtextex-text-x-y--number)
* [fittingHeight (numLines)](Window_Base.md#fittingheight-numlines--number)
* [flushTextState (textState)](Window_Base.md#flushtextstate-textstate)
* [hide ()](Window_Base.md#hide-)
* [hideBackgroundDimmer ()](Window_Base.md#hidebackgrounddimmer-)
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
* [update ()](Window_Base.md#update-)
* [updateBackgroundDimmer ()](Window_Base.md#updatebackgrounddimmer-)
* [updateBackOpacity ()](Window_Base.md#updatebackopacity-)
* [updateClose ()](Window_Base.md#updateclose-)
* [updateOpen ()](Window_Base.md#updateopen-)
* [updatePadding ()](Window_Base.md#updatepadding-)
* [updateTone ()](Window_Base.md#updatetone-)



### メソッド

#### colSpacing () → {[Number](Number.md)}
**@MZ** 列の間隔(規定値:0ピクセル)を返す。


#### currencyUnit () → {[String](String.md)}
通貨単位を返す。


#### initialize (rect)
オーバーライド: [Window_Base](Window_Base.md#initialize-rect)


#### open ()
オーバーライド: [Window_Base](Window_Base.md#open-)


#### refresh ()
再描画。


#### value () → {[Number](Number.md)}
[$gameParty](global.md#gameparty-game_party).gold を数値で返す。



#### 廃止MVメソッド
windowHeight (), windowWidth ()