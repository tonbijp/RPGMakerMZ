[クラスツリー](index.md)

# クラス: Game_Screen

| 大域変数 | セーブデータ |
| --- | --- |
| [$gameScreen](global.md#gamescreen-game_screen) | 保存される |

イベントコマンドの[画面]関連の挙動の担当クラス。 

関連クラス: [Game_Map](Game_Map.md), [Game_Picture](Game_Picture.md), [Sprite_Picture](Sprite_Picture.md), [Scene_Map](Scene_Map.md), [Scene_Battle](Scene_Battle.md), [Graphics](Graphics.md), [ImageManager](ImageManager.md)

### new Game_Screen ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_shake` | [Number](Number.md) | [シェイク]でずれた距離 |
| `_shakePower` | [Number](Number.md) | [シェイク]強さ |
| `_shakeSpeed` | [Number](Number.md) | [シェイク]速さ |
| `_shakeDuration` | [Number](Number.md) | [シェイク]継続時間(フレーム) |
| `_shakeDirection` | [Number](Number.md) | [シェイク]方向 |
| `_zoomX` | [Number](Number.md) |  拡大箇所の x座標(ピクセル) |
| `_zoomY` | [Number](Number.md) |  拡大箇所の y座標(ピクセル) |
| `_zoomScale` | [Number](Number.md) | 拡大率(1 で 100%) |
| `_zoomScaleTarget` | [Number](Number.md) | 拡大率目標 |
| `_zoomDuration` | [Number](Number.md) | 拡大の継続時間 |
| `_weatherType` | [String](String.md) | [天候]タイプ |
| `_weatherPower` | [Number](Number.md) | [天候]強さ(1~9) |
| `_weatherPowerTarget` | [Number](Number.md) | [天候]強さの目標(1~9) |
| `_weatherDuration` | [Number](Number.md) | [天候]の継続時間(フレーム) |
| `_brightness` | [Number](Number.md) | 明るさ |
| `_fadeOutDuration` | [Number](Number.md) | フェードアウトの継続時間(フレーム) |
| `_fadeInDuration` | [Number](Number.md) | フェードインの継続時間(フレーム) |
| `_tone` |  [MV.Tone](MV.Tone.md)  | [色調] |
| `_toneTarget` |  [MV.Tone](MV.Tone.md)  | 色調目標 |
| `_toneDuration` | [Number](Number.md) | 色調の継続時間(フレーム) |
| `_flashColor` | [Array](Array.md).&lt;[Number](Number.md)&gt; | [フラッシュ]の色(0~0xFFFFFF) |
| `_flashDuration` | [Number](Number.md) | [フラッシュ]の継続時間(フレーム) |
| `_pictures` | [Array](Array.md).&lt;[Game_Picture](Game_Picture.md)&gt; | 追加された[ピクチャ]の配列 |


### メソッド

#### brightness () → {[Number](Number.md)}
画面の明るさを返す。


#### changeWeather (type, power, duration)
指定した[天候]に変更。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [String](String.md) | [天候]タイプ |
| `power` | [Number](Number.md) | [天候]強さ |
| `duration` | [Number](Number.md) | [天候]継続時間(フレーム) |


#### clear ()
消去。


#### clearFade ()
[フェード]処理の消去。


#### clearFlash ()
[フラッシュ]処理の消去。


#### clearPictures ()
追加された[ピクチャ]の消去。


#### clearShake ()
[シェイク]処理の消去。


#### clearTone ()
[色調]処理の消去。


#### clearWeather ()
[天候]処理の消去。


#### clearZoom ()
拡大処理の消去。


#### eraseBattlePictures ()
戦闘ピクチャの消去。


#### erasePicture (pictureId)
指定した[ピクチャの消去]。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID |


#### flashColor () → {[Array](Array.md).&lt;[Number](Number.md)&gt;}
[フラッシュ]の色を返す。


#### initialize ()
 オブジェクト生成時の初期化。


#### maxPictures () → {[Number](Number.md)}
最大ピクチャ数を返す。


#### movePicture (pictureId, origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easingType)
指定した[ピクチャの移動]。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID |
| `origin` | [Number](Number.md) | [[原点]](Game_Picture.md#原点) |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `scaleX` | [Number](Number.md) | 拡大率[幅] |
| `scaleY` | [Number](Number.md) | 拡大率[高さ] |
| `opacity` | [Number](Number.md) | [不透明度] |
| `blendMode` | [Number](Number.md) | [[合成方法]](Sprite.md#合成方法) |
| `duration` | [Number](Number.md) | 継続時間 |
| `easingType` | [Number](Number.md) | **@MZ** [イージングタイプ](Game_Picture.md#イージングタイプ))  |


#### onBattleStart ()
戦闘シーンの開始時に呼ばれるハンドラ。


#### picture (pictureId) → {[Game_Picture](Game_Picture.md)}
指定ピクチャを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID |


#### realPictureId (pictureId) → {[Number](Number.md)}
通常シーンと戦闘シーンに共通のピクチャIDを返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID |


#### rotatePicture (pictureId, speed)
指定した[ピクチャの回転]。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID |
| `speed` | [Number](Number.md) | 速度 |


#### setZoom (x, y, scale)
指定した拡大の設定。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 拡大箇所の x座標(ピクセル) |
| `y` | [Number](Number.md) | 拡大箇所の y座標(ピクセル) |
| `scale` | [Number](Number.md) | 拡大率(1 で 100%) |


#### shake () → {[Number](Number.md)}
[シェイク]でずれた距離を返す。


#### showPicture (pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode)
指定した[ピクチャの表示]。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID |
| `name` | [String](String.md) | 名前 |
| `origin` | [Number](Number.md) | [[原点]](Game_Picture.md#原点) |
| `x` | [Number](Number.md) | x座標(ピクセル) |
| `y` | [Number](Number.md) | y座標(ピクセル) |
| `scaleX` | [Number](Number.md) | 拡大率[幅] |
| `scaleY` | [Number](Number.md) | 拡大率[高さ] |
| `opacity` | [Number](Number.md) | [不透明度] |
| `blendMode` | [Number](Number.md) | [[合成方法]](Sprite.md#合成方法) |


#### startFadeIn (duration)
指定した[フェードイン]を開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### startFadeOut (duration)
指定した[フェードアウト]を開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### startFlash (color, duration)
指定した[フラッシュ]を開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `color` | [Array](Array.md).&lt;[Number](Number.md)&gt; |  |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### startFlashForDamage ()
ダメージのフラッシュを開始。


#### startShake (power, speed, duration)
指定した[シェイク]を開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `power` | [Number](Number.md) | [シェイク]強さ |
| `speed` | [Number](Number.md) | [シェイク]速度 |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### startTint (tone, duration)
指定した[色調]効果を開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tone` | [MV.Tone](MV.Tone.md) | [色調] |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### startZoom (x, y, scale, duration)
指定した拡大を開始。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | 拡大箇所の x座標(ピクセル) |
| `y` | [Number](Number.md) | 拡大箇所の y座標(ピクセル) |
| `scale` | [Number](Number.md) | 拡大率(1 で 100%) |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### tintPicture (pictureId, tone, duration)
指定したピクチャに[色調]効果を追加。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `pictureId` | [Number](Number.md) | ピクチャID |
| `tone` | [MV.Tone](MV.Tone.md) | [色調] |
| `duration` | [Number](Number.md) | 継続時間(フレーム) |


#### tone () → {[MV.Tone](MV.Tone.md)}
[色調]を返す。


#### update ()
フレーム毎の更新。


#### updateFadeIn ()
[フェードイン]の更新。


#### updateFadeOut ()
[フェードアウト]の更新。


#### updateFlash ()
[フラッシュ]の更新。


#### updatePictures ()
[ピクチャ]の更新。


#### updateShake ()
[シェイク]の更新。


#### updateTone ()
[色調]の更新。


#### updateWeather ()
[天候]の更新。


#### updateZoom ()
拡大の更新。


#### weatherPower () → {[Number](Number.md)}
[天候]強さを返す。


#### weatherType () → {[String](String.md)}
[天候]のタイプを返す。


#### zoomScale () → {[Number](Number.md)}
拡大率を返す。


#### zoomX () → {[Number](Number.md)}
拡大箇所の x座標(ピクセル)を返す。


#### zoomY () → {[Number](Number.md)}
拡大箇所の y座標(ピクセル)を返す。


