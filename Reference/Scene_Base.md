[クラスツリー](index.md)

# クラス: Scene_Base

## スーパークラス: [Stage](Stage.md)

### new Scene_Base ()
シーンの基礎オブジェクト。

MZ ではタップ操作用のボタン関連の機能が拡充されている。<br />
MV でサブクラスだった [Scene_Battle](Scene_Battle.md) と [Scene_Map](Scene_Map.md) は [Scene_Message](Scene_Message.md) のサブクラスになっている。

関連クラス: [SceneManager](SceneManager.md)

### サブクラス

* [Scene_Boot](Scene_Boot.md)
* [Scene_Gameover](Scene_Gameover.md)
* [Scene_Title](Scene_Title.md)
* [Scene_Message](Scene_Message.md) **@MZ**
* [Scene_MenuBase](Scene_MenuBase.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_started` | Boolean | **@MZ** 開始されているか |
| `_active` | Boolean |  アクティブか |
| `_fadeSign` | [Number](Number.md) | [フェードの状態](#フェードの状態) |
| `_fadeDuration` | [Number](Number.md) | フェードにかける時間 |
| `_windowLayer` | [WindowLayer](WindowLayer.md) |  ウィンドウレイヤ |
| `_fadeWhite` | [Number](Number.md) | **@MZ** フェードにかける時間 |
| `_fadeOpacity` | [Number](Number.md) | **@MZ** フェードにかける時間 |

#### フェードの状態

| 数字 | 説明 |
| --- | --- |
| -1 | フェードアウト |
| 0 | なし |
| 1 | フェードイン |

### 廃止MVプロパティ
`_fadeSprite`, `_imageReservationId`


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
* [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [Stage](Stage.md)

* [destroy ()](Stage.md#destroy-)


### メソッド

#### addWindow (Window)
ウィンドウレイヤにウィンドウを追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `Window` | [Window_Base](Window_Base.md) |  追加するウィンドウ |


#### attachReservation ()
キューに予約を追加。


#### buttonAreaBottom () → {[Number](Number.md)}
**@MZ** ボタン領域の下辺位置を返す。


#### buttonAreaHeight () → {[Number](Number.md)}
**@MZ** ボタン領域の高さ(規定値:52)を返す。


#### buttonAreaTop () → {[Number](Number.md)}
**@MZ** ボタン領域の上辺位置を返す。


#### buttonY () → {[Number](Number.md)}
**@MZ** ボタンのy位置を返す。


#### calcWindowHeight (numLines, selectable) → {[Number](Number.md)}
**@MZ** 指定行数とタイプで計算されるウィンドウの高さを返す。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `numLines` | [Number](Number.md) |  行数 |
| `selectable` | Boolean |  選択可能か |


#### centerSprite (sprite)
**@MZ** スプライトを画面中央に配置。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  対象のスプライト |


#### checkGameover ()
ゲームオーバー状態か検査。


#### create ()
シーンの生成。


#### createColorFilter ()
**@MZ** 色フィルタの生成。


#### createWindowLayer ()
ウィンドウレイヤ[WindowLayer](WindowLayer.md) を生成。


#### detachReservation ()
キューから予約を削除。


#### executeAutosave ()
**@MZ** オートセーブを実行。


#### fadeOutAll ()
全ての映像と音声を、遅い速度でフェードアウト。


#### fadeSpeed () → {[Number](Number.md)}
フェード速度を返す。


#### initialize ()
オーバーライド: [Stage](Stage.md#initialize-)


#### isActive () → {Boolean}
シーンがアクティブか。


#### isAutosaveEnabled () → {Boolean}
**@MZ** オートセーブ可能な状態か。


#### isBottomButtonMode () → {Boolean}
**@MZ** ボタン位置が下か(規定値:false)。


#### isBottomHelpMode () → {Boolean}
**@MZ** ヘルプ位置が下か(規定値:true)。


#### isBusy () → {Boolean}
フェード動作中か。


#### isReady () → {Boolean}
シーンの準備ができているか。


#### isRightInputMode () → {Boolean}
**@MZ** 右手入力モードか(規定値:true)。


#### mainCommandWidth () → {[Number](Number.md)}
**@MZ** メインコマンドの幅を返す(規定値:240)。


#### onAutosaveFailure ()
**@MZ** オートセーブが失敗した時のハンドラ。<br />
コアスクリプトは空で、プラグイン用に予約してあるもの。


#### onAutosaveSuccess ()
**@MZ** オートセーブが成功した時のハンドラ。<br />
コアスクリプトは空で、プラグイン用に予約してあるもの。


#### popScene ()
シーンを引き出す(pop)。


#### requestAutosave ()
**@MZ** オートセーブを要求。


#### scaleSprite (sprite)
**@MZ** スプライトを画面サイズに拡大。

##### 引数

| 名前 | 型 |  説明 |
| --- | --- | --- |
| `sprite` | [Sprite](Sprite.md) |  対象のスプライト |


#### slowFadeSpeed () → {[Number](Number.md)}
遅いフェード速度を返す。


#### start ()
シーンの開始。


#### startFadeIn (duration opt, white opt)
フェードインの要求。

##### 引数

| 名前 | 型 | 特性 | 規定値 | 説明 |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.md) | &lt;optional&gt; | 30 |  フェードインにかける時間 |
| `white` | Boolean | &lt;optional&gt; | false |  白で[フェード]するか(falseだと黒) |


#### startFadeOut (duration opt, white opt)
 フェードアウトの要求。

##### 引数

| 名前 | 型 | 特性 | 規定値 | 説明 |
| --- | --- | --- | --- | --- |
| `duration` | [Number](Number.md) | &lt;optional&gt; | 30 |  フェードアウトにかける時間 |
| `white` | Boolean | &lt;optional&gt; | false |  白で[フェード]するか(falseだと黒) |


#### stop ()
シーンの停止。


#### terminate ()
遷移前のシーン中断。


#### update ()
フレーム毎のアップデート。


#### updateChildren ()
子オブジェクトのアップデート。


#### updateColorFilter ()
**@MZ** 色フィルタのアップデート。


#### updateFade ()
フェードのアップデート。


### 廃止MVメソッド
createFadeSprite ()