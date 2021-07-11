# TF_VectorWindow 概要

* ウィンドウの画像をベクター描画する。
* 種類の変更は Window_Message の方でしか基本やらない。
* 


### [Window](../Reference/Window.html) で書き換えているメソッド

* initialize	描画に必要なプロパティを設定
* _refreshPauseSign()
* _refreshAllParts()
* _refreshBack()
* _refreshFrame()


### [Window_Base](https://github.com/tonbijp/RPGMakerMZ/blob/master/Reference/Window_Base.html) で書き換えているメソッド

* lineHeight()
* textPadding()
* updatePadding()


### [Window_Message](https://github.com/tonbijp/RPGMakerMZ/blob/master/Reference/Window_Message.html) で書き換えているメソッド

* initialize()
* updatePlacement()
* calcTextHeight()
* numVisibleRows()
* textPadding()
* lineHeight()
* resetFontSettings()
* drawMessageFace()
* newPage()
* close()
* terminateMessage()
* newLineX()
* _refreshBack()
* _refreshContents()


### [Window_Message](https://github.com/tonbijp/RPGMakerMZ/blob/master/Reference/Window_Message.html) に加えているプロパティ

* TF_windowType
* TF_overWrite
* TF_faceAlign
* TF_shape

### [Window_NameBox](https://github.com/tonbijp/RPGMakerMZ/blob/master/Reference/Window_NameBox.html) で書き換えているメソッド

* initialize()
* updatePlacement()
* _refreshAllParts()
* resetFontSettings()
* windowWidth()
* refresh()

### [Scene_Message](https://github.com/tonbijp/RPGMakerMZ/blob/master/Reference/Scene_Message.html) で書き換えているメソッド

* createAllWindows()
* 

### 新規クラス

* Sprite_FacePicture


### 関数

* closeFacePicture()
* refreshWindowFrame()
* array2CssColor()
* cssColor2Array()
* drawWindow()
* tintColor()
* setShadowParam()
* setBorderParam()
* drawBalloon()
* drawRoundrect()
* drawOctagon()
* drawSpike()


### 変数


### 定数
* TF_TAIL_HEIGHT