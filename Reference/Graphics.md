# Class: Graphics
画像の処理を行うための静的クラス。

通常の画面を中心に、ビデオ、ローディングやエラー表示、FPSメータなどの表示要素も取り扱う。

ウィンドウサイズは、プロジェクト直下の package.json ファイルで決められていて、この width, heigth に合わせて再設定される。<br />
なので package.json の値と揃えておくと、ゲーム起動時にウィンドウの大きさが変わってパタつくのを防げる。


関連クラス: [Bitmap](Bitmap.md), [ImageManager](ImageManager.md), [SceneManager](SceneManager.md), [Game_Screen](Game_Screen.md), [Window](Window.md)


### Properties:
BLEND_ から始まるプロパティは PIXI.blendModes と同じ画像の[[合成方法]](Sprite.md#合成方法)の指定用定数。

| Name | Type | Description |
| --- | --- | --- |
| `BLEND_ADD` | [Number](Number.md) | [static] 加算 |
| `BLEND_NORMAL` | [Number](Number.md) | [static] 通常 |
| `BLEND_MULTIPLY` | [Number](Number.md) | [static] 乗算 |
| `BLEND_SCREEN` | [Number](Number.md) | [static] スクリーン |
| `frameCount` | [Number](Number.md) | [static] フレームカウント |
| `width` | [Number](Number.md) | [static] ゲーム画面の幅(ピクセル) (規定値: 816) |
| `height` | [Number](Number.md) | [static] ゲーム画面の高さ(ピクセル) (規定値: 624) |
| `boxWidth` | [Number](Number.md) | [static] UI領域の幅(ピクセル) (規定値: 816) |
| `boxHeight` | [Number](Number.md) | [static] UI領域の高さ(ピクセル) (規定値: 624) |
| `scale` | [Number](Number.md) | [static] 拡大率 |
| `_width` | [Number](Number.md) | [static] ゲーム画面の幅(ピクセル) |
| `_height` | [Number](Number.md) | [static] ゲーム画面の高さ(ピクセル) |
| `_rendererType` | [String](String.md) | [static] [レンダラタイプ](Graphics.md#レンダラタイプ) |
| `_boxWidth` | [Number](Number.md) | [static] UI領域囲の幅(ピクセル) |
| `_boxHeight` | [Number](Number.md) | [static] UI領域の高さ(ピクセル) |
| `_scale` | [Number](Number.md) | [static] 拡大率 |
| `_realScale` | [Number](Number.md) | [static] ウィンドウフィットした実際の拡大率 |
| `_errorPrinter` | HTMLElemant | [static] エラー表示 p要素 |
| `_canvas` | HTMLCanvasElement | [static] canvas要素 |
| `_video` | HTMLVideoElement | [static] video要素 |
| `_upperCanvas` | HTMLCanvasElement | [static] 上部canvas要素 |
| `_renderer` | PIXI.SystemRenderer | [static] レンダラ |
| `_fpsMeter` | FPSMeter | [static] FPSメータ |
| `_modeBox` | HTMLDivElement | [static] 描画モード表示 |
| `_skipCount` | [Number](Number.md) | [static] スキップカウント |
| `_maxSkip` | [Number](Number.md) | [static] 最大スキップ |
| `_rendered` | Boolean | [static] レンダ完了か |
| `_loadingImage` | HTMLImageElement | [static] ローディング画像 |
| `_loadingCount` | [Number](Number.md) | [static] ローディングカウント |
| `_fpsMeterToggled` | Boolean | [static] FPSメータのトグル情報 |
| `_stretchEnabled` | Boolean | [static] 画面の伸縮可能か |
| `_canUseDifferenceBlend` | Boolean | [static] 差の絶対値のブレンドが可能か |
| `_canUseSaturationBlend` | Boolean | [static] 彩度のブレンドが可能か |
| `_hiddenCanvas` | HTMLCanvasElement | [static] 隠れている canvas |

#### レンダラタイプ

| 値 | レンダラタイプ |
| --- | --- | --- |
| 'canvas' | canvasで描画 |
| 'webgl', | WebGLで描画 |
| 'auto' | 自動選択 |


### Methods

#### (static) _applyCanvasFilter ()
canvas フィルタを適用。


#### (static) _cancelFullScreen ()
フルスクリーンを終了。


#### (static) _centerElement (element)
指定要素を中央に配置。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `element` | HTMLElement | HTML要素 |


#### (static) _clearUpperCanvas ()
上部 canvas をクリア。


#### (static) _createAllElements ()
全要素の生成。


#### (static) _createCanvas ()
canvas の生成。


#### (static) _createErrorPrinter ()
エラー表示要素を生成。


#### (static) _createFontLoader (name)
指定フォント名でフォントローダを生成。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | フォント名 |


#### (static) _createFPSMeter ()
FPSメータ要素を生成。


#### (static) _createGameFontLoader ()
GameFont のフォントローダを生成。


#### (static) _createModeBox ()
モードボックスの生成。<br />
'WebGL mode' か 'Canvas mode' を表示する要素。


#### (static) _createRenderer ()
レンダラを生成。


#### (static) _createUpperCanvas ()
上部 canvas を生成。


#### (static) _createVideo ()
ビデオ要素を生成。


#### (static) _defaultStretchMode () → {Boolean}
規定のストレッチモードか。


#### (static) _disableContextMenu ()
コンテクストメニューを無効化。


#### (static) _disableTextSelection ()
テキスト選択を無効化。


#### (static) _isFullScreen () → {Boolean}
フルスクリーンか。


#### (static) _isVideoVisible () → {Boolean}
ビデオが表示されているか。


#### (static) _makeErrorHtml (name, message) → {[String](String.md)}
エラー文字列を生成して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | エラー名 |
| `message` | [String](String.md) | メッセージ |


#### (static) _modifyExistingElements ()
存在するHTML要素を(正の zIndex を 0 に)変更。


#### (static) _onKeyDown (event)
キーが押された時に呼ばれるハンドラ。<br />
(F2, F3, F4 キーの処理)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | KeyboardEvent | キーボードイベント |


#### (static) _onTouchEnd (event)
タッチ操作が終了した時に呼ばれるハンドラ。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `event` | TouchEvent | タッチイベント |


#### (static) _onVideoEnd ()
ビデオが終了した時に呼ばれるハンドラ。


#### (static) _onVideoError ()
ビデオのエラーが発生した時に呼ばれるハンドラ。


#### (static) _onVideoLoad ()
ビデオが読み込まれた時に呼ばれるハンドラ。


#### (static) _onWindowResize ()
ウィンドウのリサイズした時に呼ばれるハンドラ。


#### (static) _paintUpperCanvas ()
読み込まれた画像を上部 canvas に描画。


#### (static) _playVideo (src)
指定したビデオの再生。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `src` | [String](String.md) | 映像ファイルのパス |


#### (static) _requestFullScreen ()
フルスクリーンを要求。


#### (static) _setupCssFontLoading ()
CSSフォント読み込みの準備。


#### (static) _setupEventHandlers ()
イベントハンドラの準備。


#### (static) _switchFPSMeter ()
FPSメーターの切り替え。


#### (static) _switchFullScreen ()
フルスクリーンに切り替え。


#### (static) _switchStretchMode ()
画面の伸縮モードをトグルで切り替え。


#### (static) _testCanvasBlendModes ()
ブレンドモードのテスト。


#### (static) _updateAllElements ()
全ての要素をアップデート。


#### (static) _updateCanvas ()
canvas をアップデート。


#### (static) _updateErrorPrinter ()
エラー表示をアップデート。


#### (static) _updateRealScale ()
実際の拡大率をアップデート。


#### (static) _updateRenderer ()
レンダラをアップデート。


#### (static) _updateUpperCanvas ()
上部 canvas をアップデート。


#### (static) _updateVideo ()
ビデオをアップデート。


#### (static) _updateVisibility (videoVisible)
表示・非表示をアップデート。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `videoVisible` | Boolean | ビデオを表示するか |


#### (static) callGC ()
ガベッジコレクションを呼ぶ。


#### (static) canPlayVideoType (type) → {Boolean}
指定のビデオタイプが再生できるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `type` | [String](String.md) | ビデオタイプ |


#### (static) canUseCssFontLoading ()
CSSフォント読み込みが使用可能か。


#### (static) canUseDifferenceBlend () → {Boolean}
差の絶対値のブレンドが可能か。


#### (static) canUseSaturationBlend () → {Boolean}
彩度のブレンドが可能か。


#### (static) endLoading ()
"Now Loading" 画像を消す。


#### (static) eraseLoadingError ()
読み込みエラーの表示を消す。


#### (static) hasWebGL () → {Boolean}
WebGL を持っている(ブラウザ)環境か。


#### (static) hideFps ()
FPSメータを隠す。


#### (static) initialize (width opt, height opt, type opt)
画像機能の初期化。<br />
通常 [SceneManager](SceneManager.md) の `_screenWidth`, `_screenHeight`が引数に使われるので、x:816, y:624 が初期値となる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `width` | [Number](Number.md) | ゲーム画面の幅(ピクセル) (規定値:800)|
| `height` | [Number](Number.md) | ゲーム画面の高さ(ピクセル) (規定値:600) |
| `type` | [String](String.md) | [レンダラタイプ](Graphics.md#レンダラタイプ) (規定値:auto) |


#### (static) isFontLoaded (name) → {Boolean}
指定したフォントファイルが読み込まれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | フォント名 |


#### (static) isInsideCanvas (x, y) → {Boolean}
指定座標が canvas 内にあるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### (static) isVideoPlaying () → {Boolean}
ビデオが再生されているか。


#### (static) isWebGL () → {Boolean}
[レンダラタイプ](Graphics.md#レンダラタイプ) が WebGL か。


#### (static) loadFont (name, url)
指定したフォントファイルを読み込む。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | フォント名 |
| `url` | [String](String.md) | フォントファイルのURL |


#### (static) pageToCanvasX (x) → {[Number](Number.md)}
ページ内の x座標を canvas 内の x座標に変換して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | ページ内の x座標(ピクセル) |


#### (static) pageToCanvasY (y) → {[Number](Number.md)}
ページ内の y座標を canvas 内の y座標に変換して返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) | ページ内の x座標(ピクセル) |


#### (static) playVideo (src)
指定ビデオファイルを再生。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `src` | [String](String.md) | ファイルパス |


#### (static) printError (name, message)
エラーを表示。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | エラー名 |
| `message` | [String](String.md) | エラーメッセージ |


#### (static) printLoadingError (url)
読み込みエラーを表示。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) | 読み込みに失敗したファイルのURL |


#### (static) render (stage)
指定ステージ(シーン)の描画。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stage` | [Stage](Stage.md) | 描画対象オブジェクト |


#### (static) setLoadingImage (src)
ローディング画像を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `src` | [String](String.md) | ファイルパス |


#### (static) setVideoVolume (value)
ビデオの音量を設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `value` | [Number](Number.md) | 音量 |


#### (static) showFps ()
FPSメータを表示。


#### (static) startLoading ()
ローディング画像表示開始。


#### (static) tickEnd ()
FPSメータへフレーム(tick)の終了を通知。


#### (static) tickStart ()
FPSメータへフレーム(tick)の開始を通知。


#### (static) updateLoading ()
ローディング画面をアップデート。


