[クラスツリー](index.md)

# クラス: Graphics
画像の処理を行うための静的クラス。<br />
通常の画面を中心に、ローディングやエラー表示も取り扱う。

PixiJS の [PIXI.Application](PIXI.Application.md) を `app`プロパティに持っている。<br />
`PIXI.Application` はルートコンテナ、レンダラ、ティッカーなどを持っている画像表示関連の重要なオブジェクト。

Effekseer の EffekseerContext を `effekseer`プロパティに持っている。<br />
こちらはエフェクト表示関連の重要なオブジェクト。

ウィンドウサイズは、プロジェクト直下の package.json ファイルで決められていて、この width, heigth に合わせて再設定される。<br />
なので package.json の値と揃えておくと、ゲーム起動時にウィンドウの大きさが変わってパタつくのを防げる。

描画がWebGLに統一されたこと、[Utils](Utils.md#canUseCssFontLoading) 、[Video](Video.md) クラスに機能が移ったことなどで、多くのMVにあったプロパティ・メソッドが廃止されている。

v1.2.0 で変更あり。

関連クラス: [Bitmap](Bitmap.md), [ImageManager](ImageManager.md), [SceneManager](SceneManager.md), [Game_Screen](Game_Screen.md), [Window](Window.md), [RPG.System](RPG.System.md), [RPG.System.Advanced](RPG.System.Advanced.md)


### プロパティ
BLEND_ から始まるプロパティは PIXI.blendModes と同じ画像の[\[合成方法\]](Sprite.md#合成方法)の指定用定数。

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `app` | [PIXI.Application](PIXI.Application.md) | **@MZ**[static][read-only] PIXIアプリケーション |
| `effekseer` | EffekseerContext  | **@MZ**[static][read-only] Effekseerコンテキスト |
| `frameCount` | [Number](Number.md) | [static] フレームカウント |
| `width` | [Number](Number.md) | [static] ゲーム画面の幅(ピクセル) (規定値: 816) |
| `height` | [Number](Number.md) | [static] ゲーム画面の高さ(ピクセル) (規定値: 624) |
| `boxWidth` | [Number](Number.md) | [static] UI領域の幅(ピクセル) (規定値: 808) |
| `boxHeight` | [Number](Number.md) | [static] UI領域の高さ(ピクセル) (規定値: 616) |
| `defaultScale` | [Number](Number.md) | [static] 拡大率(scaleの名称変更) |
| `_app` | [PIXI.Application](PIXI.Application.md) | **@MZ**[static] |
| `_width` | [Number](Number.md) | [static] |
| `_height` | [Number](Number.md) | [static] |
| `_defaultScale` | [Number](Number.md) | [static] 拡大率(_scaleの名称変更) |
| `_realScale` | [Number](Number.md) | [static] ウィンドウフィットした実際の拡大率 |
| `_errorPrinter` | HTMLElemant | [static] エラー表示 p要素 |
| `_tickHandler` |  | **@MZ** [static]  |
| `_fpsCounter` |  | **@MZ** [static]  |
| `_loadingSpinner` |  | **@MZ** [static]  |
| `_effekseer` |  | **@MZ** [static]  |
| `_wasLoading` |  | **@MZ** [static]  |
| `_canvas` | HTMLCanvasElement | [static] canvas要素 |
| `_renderer` | PIXI.SystemRenderer | [static] レンダラ |
| `_stretchEnabled` | Boolean | [static] 画面の伸縮可能か |

### 廃止MVプロパティ
[static]
`_cssFontLoading`,
`_rendererType`, `_boxWidth`, `_boxHeight`, `_errorShowed`, `_video`, `_videoUnlocked`, `_videoLoading`, `_upperCanvas `, `_renderer`, `_fpsMeter`, `_modeBox`, `_skipCount`, `_maxSkip`, `_rendered`, `_loadingImage`, `_loadingCount`, `_fpsMeterToggled`, `_canUseDifferenceBlend`, `_canUseSaturationBlend`, `_hiddenCanvas`,`BLEND_ADD`,`BLEND_NORMAL` ,`BLEND_MULTIPLY`, `BLEND_SCREEN`

### メソッド

#### (static) _applyCanvasFilter ()
canvas フィルタを適用。


#### (static) _cancelFullScreen ()
フルスクリーンを終了。

#### (static) _canRender ()→ {Boolean}
**＠MZ** レンダリング可能(ステージの準備ができている)か。

#### (static) _centerElement (element)
指定要素を中央に配置。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `element` | HTMLElement | HTML要素 |


#### (static) _clearCanvasFilter ()
**@MZ** canvas フィルタを削除。


#### (static) _createFPSCounter ()
**@MZ** FPSカウンタを生成。


#### (static) _createLoadingSpinner ()
**@MZ** ローディング表示を生成。


#### (static) _createPixiApp ()
**@MZ** _app を生成。


#### (static) _createAllElements ()
全要素の生成。


#### (static) _createCanvas ()
canvas の生成。


#### (static) _createEffekseerContext ()
**@MZ** Effekseerコンテキストの生成。


#### (static) _createErrorPrinter ()
エラー表示要素を生成。


#### (static) _defaultStretchMode () → {Boolean}
規定のストレッチモードか。


#### (static) _disableContextMenu ()
コンテクストメニューを無効化。


#### (static) _isFullScreen () → {Boolean}
フルスクリーンか。


#### (static) _makeErrorHtml (name, message) → {[String](String.md)}
エラー文字列を生成して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | エラー名 |
| `message` | [String](String.md) | メッセージ |


#### (static) _onKeyDown (event)
キーが押された時に呼ばれるハンドラ。<br />
(F2, F3, F4 キーの処理)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `event` | KeyboardEvent | キーボードイベント |


#### (static) _onWindowResize ()
ウィンドウのリサイズした時に呼ばれるハンドラ。


#### (static) _onTick (deltaTime)
**@MZ** FPSカウンタを進める時に呼ばれるハンドラ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `deltaTime` | [Number](Number.md) | 単位時間 |


#### (static) _requestFullScreen ()
フルスクリーンを要求。


#### (static) _setupEventHandlers ()
イベントハンドラの準備。


#### (static) _setupPixi ()
**@MZ** PIXI の準備。


#### (static) _stretchWidth ()
**@MZ** 幅を拡大。


#### (static) _stretchHeight ()
**@MZ** 高さを拡大。


#### (static) _switchFPSCounter ()
**@MZ** FPSカウンタの切り替え。


#### (static) _switchFullScreen ()
フルスクリーンに切り替え。


#### (static) _switchStretchMode ()
画面の伸縮モードをトグルで切り替え。


#### (static) _updateAllElements ()
全ての要素をアップデート。


#### (static) _updateCanvas ()
canvas をアップデート。


#### (static) _updateErrorPrinter ()
エラー表示をアップデート。


#### (static) _updateRealScale ()
実際の拡大率をアップデート。


#### (static) _updateVideo ()
ビデオをアップデート。


#### (static) endLoading () → {Boolean}
"Now Loading" 画像を消し、ローディング画像がアクティブか返す。


#### (static) eraseError ()
**@MZ** 読み込みエラーの表示を消す。


#### (static) initialize (width opt, height opt, type opt) → {Boolean}
画像機能の初期化し、完了したら true を返す。<br />
通常 [SceneManager](SceneManager.md) の `_screenWidth`, `_screenHeight`が引数に使われるので、x:816, y:624 が初期値となる。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | ゲーム画面の幅(ピクセル) (規定値:800)|
| `height` | [Number](Number.md) | ゲーム画面の高さ(ピクセル) (規定値:600) |
| `type` | [String](String.md) | [レンダラタイプ](Graphics.md#レンダラタイプ) (規定値:auto) |


#### (static) isInsideCanvas (x, y) → {Boolean}
指定座標が canvas 内にあるか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### (static) pageToCanvasX (x) → {[Number](Number.md)}
ページ内の x座標を canvas 内の x座標に変換して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | ページ内の x座標(ピクセル) |


#### (static) pageToCanvasY (y) → {[Number](Number.md)}
ページ内の y座標を canvas 内の y座標に変換して返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `y` | [Number](Number.md) | ページ内の x座標(ピクセル) |


#### (static) printError (name, message)
エラーを表示。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | エラー名 |
| `message` | [String](String.md) | エラーメッセージ |



#### (static) resize (width, height)
**@MZ** ゲーム画面のサイズを再設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `width` | [Number](Number.md) | ゲーム画面の幅(ピクセル) (規定値:800)|
| `height` | [Number](Number.md) | ゲーム画面の高さ(ピクセル) (規定値:600) |


#### (static) setTickHandler (handler)
**@MZ** tickイベントのハンドラの設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `handler` | Function | 設定するハンドラ |


#### (static) showRetryButton (retry)
**@MZ** リトライボタンを表示し、クリックハンドラを設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `retry` | Function | ボタンクリック時に実行されるハンドラ |


#### (static) showScreen ()
**@MZ** ゲーム画面を表示。


#### (static) startGameLoop ()
**@MZ** アプリケーションのループ開始。


#### (static) startLoading ()
ローディング画像表示開始。


#### (static) stopGameLoop ()
**@MZ** アプリケーションのループ終了。


### MV廃止メソッド
[static]
_clearUpperCanvas (), _createFontLoader (name), _createFPSMeter (), _createGameFontLoader (), _createModeBox (), _createRenderer (), 
_createUpperCanvas (), _createVideo (), _disableTextSelection (), _isVideoVisible (), _modifyExistingElements (), _onTouchEnd (event), _onVideoEnd (), _onVideoError (), _onVideoLoad (),
_paintUpperCanvas (), _playVideo (src), _setupCssFontLoading (), _switchFPSMeter (), _testCanvasBlendModes (), _updateRenderer (), _updateUpperCanvas (),_updateVisibility (videoVisible), callGC (), canPlayVideoType (type), canUseCssFontLoading (), canUseDifferenceBlend (), canUseSaturationBlend (), eraseLoadingError (), hasWebGL (), hideFps (), isFontLoaded (name), isVideoPlaying (), isWebGL (), loadFont (name, url), playVideo (src), printLoadingError (url), render (stage), setLoadingImage (src), setVideoVolume (value), showFps (), tickEnd (), tickStart (), updateLoading ()