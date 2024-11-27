[クラスツリー](index.md)

# クラス: Window_Scrollable

## スーパークラス: [Window_Base](Window_Base.md)

**@MZ** スクロールする項目を表示するウィンドウ。

### new Window_Scrollable (rect)
#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |

### サブクラス

* [Window_Selectable](Window_Selectable.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_scrollX` | [Number](Number.md) | x方向スクロール量 |
| `_scrollY` | [Number](Number.md) | y方向スクロール量 |
| `_scrollAccelX` | [Number](Number.md) | x方向スクロール加速 |
| `_scrollAccelY` | [Number](Number.md) | y方向スクロール加速 |
| `_scrollBaseX` | [Number](Number.md) | x方向スクロール起点 |
| `_scrollBaseY` | [Number](Number.md) | y方向スクロール起点 |
| `_scrollDuration` | [Number](Number.md) | スクロール継続時間 |
| `_scrollTargetX` | [Number](Number.md) | x方向スクロール目標 |
| `_scrollTargetY` | [Number](Number.md) | y方向スクロール目標 |
| `_scrollTouching` | Boolean | タッチされているか |
| `_scrollLastCursorVisible` | Boolean | 最終タッチカーソルを表示するか |
| `_scrollLastTouchX` | [Number](Number.md) | 最終タッチx位置 |
| `_scrollLastTouchY` | [Number](Number.md) | 最終タッチy位置 |



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

* [activate ()](Window_Base.md#activate-)
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
* [textSizeEx (text)](Window_Base.md#textsizeex-text--mvsize)
* [textWidth (text)](Window_Base.md#textwidth-text--number)
* [translucentOpacity ()](Window_Base.md#translucentopacity---number)
* [updateBackgroundDimmer ()](Window_Base.md#updatebackgrounddimmer-)
* [updateBackOpacity ()](Window_Base.md#updatebackopacity-)
* [updateClose ()](Window_Base.md#updateclose-)
* [updateOpen ()](Window_Base.md#updateopen-)
* [updatePadding ()](Window_Base.md#updatepadding-)
* [updateTone ()](Window_Base.md#updatetone-)



### メソッド

#### clearScrollStatus ()
スクロール状態を初期化。


#### initialize (rect)
オーバーライド: [Window_Base](Window_Base.md#initialize-rect)


#### isScrollEnabled () → {Boolean}
スクロールが可能か。


#### isTouchedInsideFrame () → {Boolean}
枠内がタッチされたか。


#### isTouchScrollEnabled () → {Boolean}
タッチによるスクロールが可能か。


#### isWheelScrollEnabled () → {Boolean}
ホイールによるスクロールが可能か。


#### maxScrollX () → {[Number](Number.md)}
最大x方向スクロール量を返す。


#### maxScrollY () → {[Number](Number.md)}
最大y方向スクロール量を返す。


#### onTouchScroll ()
タッチによるスクロール時のハンドラ。


#### onTouchScrollEnd ()
タッチによるスクロールが終了した時のハンドラ。


#### onTouchScrollStart ()
タッチによるスクロールを開始した時のハンドラ。


#### overallHeight () → {[Number](Number.md)}
全体の高さを返す。


#### overallWidth () → {[Number](Number.md)}
全体の幅を返す。


#### paint ()
描画。


#### processTouchScroll ()
タッチによるスクロールを実行。


#### processWheelScroll ()
ホイールによるスクロールを実行。


#### scrollBaseX () → {[Number](Number.md)}
x方向スクロール起点 を返す。


#### scrollBaseY () → {[Number](Number.md)}
y方向スクロール起点 を返す。


#### scrollBlockHeight () → {[Number](Number.md)}
スクロール単位の高さを返す。


#### scrollBlockWidth () → {[Number](Number.md)}
スクロール単位の幅を返す。


#### scrollTo (x, y)
指定位置にスクロール。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置 |
| `y` | [Number](Number.md) | y位置 |


#### scrollX () → {[Number](Number.md)}
x方向スクロール量を返す。


#### scrollY () → {[Number](Number.md)}
y方向スクロール量を返す。


#### setScrollAccel (x, y)
加速量を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x加速 |
| `y` | [Number](Number.md) | y加速 |


#### smoothScrollBy (x, y)
指定移動量で滑らかにスクロール。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x移動量 |
| `y` | [Number](Number.md) | y移動量 |


#### smoothScrollDown (n)
下に滑らかにスクロール。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `n` | [Number](Number.md) | スクロール行数 |


#### smoothScrollTo (x, y)
指定位置に滑らかにスクロール。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置 |
| `y` | [Number](Number.md) | y位置 |


#### smoothScrollUp (n)
上に滑らかにスクロール。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `n` | [Number](Number.md) | スクロール行数 |


#### update ()
オーバーライド: [Window_Base](Window_Base.md#update-)


#### updateArrows ()
上下に項目の続きがあることを示す矢印の更新。


#### updateOrigin ()
原点を更新。


#### updateScrollAccel ()
スクロール加速を更新。


#### updateScrollBase ()
スクロール起点を更新。


#### updateSmoothScroll ()
滑らかなスクロールを更新。
