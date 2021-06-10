[クラスツリー](index.md)

# クラス: Window_Base

## スーパークラス: [Window](Window.md)

メッセージや画像を描くためのメソッドを多く持つ、ウィンドウオブジェクト。<br />
多くは `contents` に対して [Bitmap](Bitmap.md) のメソッドを使う機能。

MZで色関連は [ColorManager](ColorManager.md)に、ステータス描画は[Window_StatusBase](Window_StatusBase.md) に移動。<br />
また、個々の要素の描画は [Sprite_Gauge](Sprite_Gauge.md)、[Sprite_StateIcon](Sprite_StateIcon.md) 、[Sprite_Name](Sprite_Name.md) といったスプライトに機能分解されている。<br />
画像のサイズなどのプロパティは [ImageManager](ImageManager.md) に移っている。

v1.1.1、v1.2.0 で変更あり。

関連クラス: [Graphics](Graphics.md), [Scene_Base](Scene_Base.md), [WindowLayer](WindowLayer.md), [Game_Message](Game_Message.md)

### new Window_Base (rect)
#### 引数
MVでは引数が x, y, width, height だった。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |


### サブクラス

* [Window_BattleLog](Window_BattleLog.md)
* [Window_Help](Window_Help.md)
* [Window_MapName](Window_MapName.md)
* [Window_Message](Window_Message.md)
* [Window_NameBox](Window_NameBox.md)
* [Window_ScrollText](Window_ScrollText.md)
* [Window_Scrollable](Window_Scrollable.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_opening` | Boolean | ウィンドウが開いている途中か |
| `_closing` | Boolean | ウィンドウが閉じている途中か |
| `_dimmerSprite ` | [Sprite](Sprite.md) | [暗くする]背景 |

### 廃止MVプロパティ
`_iconHeight`, `_iconWidth`, `_faceHeight`, `_faceWidth`

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

### メソッド

#### activate ()
ウィンドウをアクティブにする。


#### actorName (actorIndex) → {[String](String.md)}
指定された番号の[アクター]の名前を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actorIndex` | [Number](Number.md) | アクターの番号(1から始まる) |


#### baseTextRect (actorIndex) → {[Rectangle](Rectangle.md)}
**@MZ** 文字表示用の矩形範囲を返す。<br />
[Window_Message](Window_Message.md) ではなく、[Window_NameBox](Window_NameBox.md) , [Window_Help](Window_Help.md) および [Window_ScrollText](Window_ScrollText.md) で使われる。


#### calcTextHeight (textState) → {[Number](Number.md)}
指定したテキストの表示時の高さ(ピクセル)を計算して返す。

##### 引数
MZで `all` 引数は廃止。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 計算するテキストの情報 |


#### changeOutlineColor (color)
**@MZ** 文字の輪郭色を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [MV.CssColor](MV.CssColor.md) | 色(CSS文字列) |


#### changePaintOpacity (enabled)
描画を不透明にするか。<br />
主に選択の可不可の表現に使う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `enabled` | Boolean | true: 不透明(255), false: 半透明(160) |


#### changeTextColor (color)
文字の色を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [MV.CssColor](MV.CssColor.md) | 色(CSS文字列) |


#### checkRectObject (rect)
**@MZ** 引数が Rectangle か調べ、違っていたらエラーを出す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |


#### close ()
ウィンドウを閉じる。


#### contentsHeight () → {[Number](Number.md)}
**@MZ** ウィンドウに含まれるコンテンツの高さを返す。


#### contentsWidth () → {[Number](Number.md)}
**@MZ** ウィンドウに含まれるコンテンツの幅を返す。


#### convertEscapeCharacters (text) → {[String](String.md)}
**@MZ** エスケープ文字を変換して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 変換元の文字列 |


#### createDimmerSprite () 
**@MZ** 暗くする背景を生成。


#### createTextBuffer (rtl) → {[String](String.md)}
**@MZ** 指定文字方向に合わせた文字列を返す。

##### 引数
rtl は RIGHT-TO-LEFT の略。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rtl` | Boolean | 右から左(アラビア語など)の文字列か |


#### createContents ()
テキストなどを表示するコンテンツ領域を生成。


#### createTextState (text, x, y, width) → {[MV.TextState](MV.TextState.md)}
**@MZ** テキストステートを生成して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 文字列 |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 幅(ピクセル) |


#### deactivate ()
非アクティブにする。


#### destroy (options)
**@MZ** オーバーライド: [Window](Window.md#destroy-)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `options` | Object |  { children: 真偽値, texture: 真偽値 }(ただし未使用) |


#### destroyContents ()
**@MZ** コンテンツを破棄。


#### drawCharacter (characterName, characterIndex, x, y)
指定した"img/characters/"フォルダのファイル名とキャラクタ番号で、指定位置にキャラクタを描画。<br />
キャラクタ番号は左上から始まり右へ進み、2段目に移る。$付きの場合は0のみ。表示されるのは下向き中央のパターン。<br />
指定するのは足元の座標なので、左上を指定したい場合 x+24, y+48 としてずらす必要がある。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `characterName` | [String](String.md) |  ファイル名(拡張子.pngを除く) |
| `characterIndex` | [Number](Number.md) | キャラクタ番号(0 〜 7)  |
| `x` | [Number](Number.md) | 足元のx座標(ピクセル) |
| `y` | [Number](Number.md) | 足元のy座標(ピクセル) |


#### drawCurrencyValue (value, unit, x, y, width)
所持金を通貨単位付きで指定位置に描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `value` | [Number](Number.md) | 所持金 |
| `unit` | [String](String.md) | 通貨単位 |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |


#### drawFace (faceName, faceIndex, x, y, width opt, height opt)
指定した"img/faces/"フォルダのファイル名とキャラクタ番号で、指定位置に顔画像を描画。<br />
キャラクタ番号は左上から始まり右へ進み、2段目に移る。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `faceName` | [String](String.md) |  | ファイル名(拡張子.pngを除く) |
| `faceIndex` | [Number](Number.md) |  | キャラクタ番号(0 〜 7) |
| `x` | [Number](Number.md) |  | x座標(ピクセル) |
| `y` | [Number](Number.md) |  | y座標(ピクセル) |
| `width` | [Number](Number.md) | &lt;optional&gt; | 幅(ピクセル) |
| `height` | [Number](Number.md) | &lt;optional&gt; | 高さ(ピクセル) |


#### drawIcon (iconIndex, x, y)
指定した番号のアイコンを指定位置に描画。<br />
"img/system/IconSet.png"のファイルを16×20に分割した画像。
アイコン番号は左上から始まり右へ進み、端まで到達したら下へ進む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `iconIndex` | [Number](Number.md) | アイコン番号(0 〜 319) |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### drawItemName (item, x, y, width)
指定した[アイテム]の[名前]を指定位置に描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `item` | [RPG.BaseItem](RPG.BaseItem.md) | 対象の[アイテム] |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |


#### drawRect ( x, y, width, height )
**@MZ** 矩形を描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `width` | [Number](Number.md) | 描画領域の幅(ピクセル) |
| `height` | [Number](Number.md) | 描画領域の幅(ピクセル) |


#### drawText (text, x, y, maxWidth, align)
指定した文字列を指定位置に描画。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` |  [String](String.md) \| [Number](Number.md) | 表示する文字列 |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `maxWidth` | [Number](Number.md) | 最大許容幅(ピクセル) |
| `align` | [String](String.md) | 文字揃え(left, center, right) |


#### drawTextEx (text, x, y) → {[Number](Number.md)}
指定したエスケープ文字入の文字列を指定位置に描画し、x座標の差分を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 表示する文字列 |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### fittingHeight (numLines) → {[Number](Number.md)}
指定された行数に必要な高さを返す。<br />
高さ = 行数 * 行の高さ + パディング幅 * 2。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `numLines` | [Number](Number.md) | 行数 |


#### flushTextState (textState)
**@MZ** `textState.buffer`に溜まった文字を描画。<br />
アラビア語などの右左の表示対応。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |


#### hide ()
ウィンドウを非表示(閉じるわけではない)。


#### hideBackgroundDimmer ()
 [暗くする]背景を非表示。


#### initialize (rect)
オーバーライド: [Window](Window.md#initialize-)

##### 引数
MVでは引数が x, y, width, height だった。

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `rect` | [Rectangle](Rectangle.md) | 矩形範囲(ピクセル) |


#### isClosing () → {Boolean}
ウィンドウが閉じている途中か。


#### isOpening () → {Boolean}
ウィンドウが開いている途中か。


#### itemHeight () → {[Number](Number.md)}
**@MZ** 項目の高さ(規定値: 36ピクセル)を返す。


#### itemPadding () → {[Number](Number.md)}
**@MZ** 項目パディング幅(規定値:8ピクセル)を返す。


#### itemWidth () → {[Number](Number.md)}
**@MZ** 項目の幅を返す。


#### lineHeight () → {[Number](Number.md)}
行の高さ(規定値: 36ピクセル)を返す。


#### loadWindowskin ()
"img/system/Window.png"から、ウィンドウのスキンを読み込む。


#### makeFontBigger ()
フォントサイズを12大きくする。制御文字 \\\{ の処理。


#### makeFontSmaller ()
フォントサイズを12小さくする。制御文字	\\\} の処理。


#### maxFontSizeInLine (line) → {[Number](Number.md)}
**@MZ** 指定行での最大フォントサイズを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `line` | [String](String.md) | 制御文字を含んだ文字列 |


#### obtainEscapeCode (textState) → {[String](String.md)}
textStateのindex以降に含まれる制御文字本体を大文字で返す。<br />
indexは取り出した文字の数だけ進む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |


#### obtainEscapeParam (textState) → {[Number](Number.md) | [String](String.md)}
textStateのindex以降に含まれる制御文字の添字を返す。<br />
indexは取り出した文字の数だけ進む。<br />
添字がある場合は数値が返り、ない場合は空文字が返る。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |


#### open ()
ウィンドウを開く。


#### partyMemberName (partyMemberIndex) → {[String](String.md)}
指定したパーティーメンバー番号に対応した名前を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `partyMemberIndex` | [Number](Number.md) | パーティーメンバー番号(1から開始される) |


#### playBuzzerSound ()
**@MZ** [ブザー]を再生。


#### playCursorSound ()
**@MZ** [カーソル]を再生。


#### playOkSound ()
**@MZ** [決定]を再生。


#### processAllText (textState)
**@MZ** 全ての文字の処理。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |


#### processCharacter (textState)
改行・改ページ・エスケープ文字などを含む文字を処理。<br />
処理した文字列の分だけindexは進む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |


#### processColorChange (colorIndex)
**@MZ** 指定文字色に変更。制御文字 \\C[n] の処理。	

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `colorIndex` | [Number](Number.md) | 色番号 |


#### processControlCharacter (textState, c)
**@MZ** コントロール文字を処理。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |
| `c` | [String](String.md) | コントロール文字 |


#### processDrawIcon (iconIndex, textState)
アイコン表示。制御文字 \\I[n] の処理。<br />
処理した文字列の分だけindexは進む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `iconIndex` | [Number](Number.md) | アイコン番号(0 〜 319) |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |


#### processEscapeCharacter (code, textState)
制御文字の処理。<br />
処理した文字列の分だけ index は進む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `code` | [String](String.md) | 制御文字(C I PX PY FS \{ \}) |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |


#### processNewLine (textState)
改行の処理。<br />
処理した文字列の分だけindexは進む。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `textState` | [MV.TextState](MV.TextState.md) | 処理する状態つき文字列 |


#### refreshDimmerBitmap ()
 [暗くする]背景を再描画。


#### resetFontSettings ()
フォント設定を規定値に戻す。


#### resetTextColor ()
文字色を規定値に戻す。


#### setBackgroundType (type)
背景の種類を設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md) | 0:不透明度255 (標準), 1:薄暗く表示, その他:不透明度0 |


#### show ()
ウィンドウを表示。


#### showBackgroundDimmer ()
 [暗くする]背景を表示。


#### systemColor () → {[MV.CssColor](MV.CssColor.md)}
システム色を返す。


#### textSizeEx (text) → {[MV.Size](MV.Size.md)}
**@MZ** 制御文字による変更後の文字サイズを返す。


#### textWidth (text) → {[Number](Number.md)}
指定文字列を描画した場合の幅(ピクセル)を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `text` | [String](String.md) | 測定する文字列 |


#### translucentOpacity () → {[Number](Number.md)}
非活性時の不透明度(規定値:160)を返す。


#### update ()
オーバーライド: [Window](Window#update-)


#### updateBackgroundDimmer ()
 [暗くする]背景のアップデート。


#### updateBackOpacity ()
背景の不透明度をアップデート。


#### updateClose ()
ウィンドウを閉じている状態をアップデート。


#### updateOpen ()
ウィンドウを開いている状態をアップデート。


#### updatePadding ()
パディング幅をアップデート。


#### updateTone ()
[色調]をアップデート。


### 廃止MVメソッド
textColor (n),normalColor (), mpColor (actor), mpCostColor (), mpGaugeColor1 (), mpGaugeColor2 (), tpColor (actor), tpCostColor (), tpGaugeColor1 (), tpGaugeColor2 (), crisisColor (), deathColor (), dimColor1 (), dimColor2 (), gaugeBackColor (), hpColor (actor), hpGaugeColor1 (), hpGaugeColor2 (),paramchangeTextColor (change), pendingColor (), powerDownColor (),powerUpColor (),
canvasToLocalX (x), canvasToLocalY (y) ,
drawActorCharacter (actor, x, y), drawActorClass (actor, x, y, width), drawActorHp (actor, x, y, width), drawActorFace (actor, x, y, width, height), drawActorIcons (actor, x, y, width), drawActorLevel (actor, x, y), drawActorMp (actor, x, y, width), drawActorName (actor, x, y, width),drawActorNickname (actor, x, y, width), drawActorSimpleStatus (actor, x, y, width), drawActorTp (actor, x, y, width),
drawCurrentAndMax (current, max, x, y, width, color1, color2), drawGauge (x, y, width, rate, color1, color2),
processNewPage (textState), processNormalCharacter (textState), reserveFaceImages (), standardBackOpacity (), standardFontFace (), standardFontSize (), standardPadding (), textPadding ()
