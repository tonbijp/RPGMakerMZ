# Class: Game_CharacterBase

### new Game_CharacterBase ()
 マップ上のキャラクタに共通する処理を行うクラス。
  
キャラの状態だけではなく、 乗っているマップの状態や移動可能かを調べたりもできる。

[移動ルートの設定]で[スクリプト]を使用した際の this はこのクラスになるので例えば <code>this.setPattern(0)</code> とすれば歩行パターンを指定できる。


### Sub Classes

* [Game_Character](Game_Character.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | [read-only] マップ上のX座標(タイル数) |
| `y` | [Number](Number.md) | [read-only] マップ上のY座標(タイル数) |
| `_x` | [Number](Number.md) | x と同じ |
| `_y` | [Number](Number.md) | y と同じ |
| `_realX` | [Number](Number.md) | 整数でない x |
| `_realY` | [Number](Number.md) | 整数でない y |
| `_moveSpeed` | [Number](Number.md) | 移動[速度] |
| `_moveFrequency` | [Number](Number.md) | 移動[頻度] |
| `_opacity` | [Number](Number.md) | 不透明度(0〜255) |
| `_blendMode` | [Number](Number.md) | [[合成方法]](Sprite.md#合成方法) |
| `_direction` | [Number](Number.md) | 向き(テンキー対応) |
| `_pattern` | [Number](Number.md) | 歩行パターン(0〜2) |
| `_priorityType` | [Number](Number.md) | [プライオリティ] |
| `_tileId` | [Number](Number.md) | 足元のタイルID |
| `_characterName` | [String](String.md) | キャラクタのファイル名 |
| `_characterIndex` | [Number](Number.md) | キャラクタ番号(0〜7) |
| `_isObjectCharacter` | Boolean | オブジェクトか |
| `_walkAnime` | Boolean | [歩行アニメ] |
| `_stepAnime` | Boolean | [足踏みアニメ] |
| `_directionFix` | Boolean | [向き固定] |
| `_through` | Boolean | [すり抜け] |
| `_transparent` | Boolean | [透明化] |
| `_bushDepth` | [Number](Number.md) | [茂み]の深さ |
| `_animationId` | [Number](Number.md) | アニメID |
| `_balloonId` | [Number](Number.md) | フキダシID |
| `_animationPlaying` | Boolean | アニメ再生中か |
| `_balloonPlaying` | Boolean | フキダシ表示中か |
| `_animationCount` | [Number](Number.md) | アニメのカウント |
| `_stopCount` | [Number](Number.md) | 停止カウント |
| `_jumpCount` | [Number](Number.md) | ジャンプのカウント |
| `_jumpPeak` | [Number](Number.md) | ジャンプの頂点 |
| `_movementSuccess` | Boolean | 移動できたか |


### Methods

#### animationId () → {[Number](Number.md)}
 アニメーションIDを返す。


#### animationWait () → {[Number](Number.md)}
 アニメーションの待ち時間(フレーム数)を返す。


#### balloonId () → {[Number](Number.md)}
 フキダシアイコンIDを返す。


#### blendMode () → {[Number](Number.md)}
[合成方法]を返す。
0: 通常, 1: 加算, 2: 乗算, 3: スクリーン


#### bushDepth () → {[Number](Number.md)}
[茂み]の深さ(ピクセル数)を返す。


#### canPass (x, y, d) → {Boolean}
 指定位置から指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### canPassDiagonally (x, y, horz, vert) → {Boolean}
 指定位置から斜め指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `horz` | [Number](Number.md) |  横方向(テンキー対応) |
| `vert` | [Number](Number.md) |  縦方向(テンキー対応) |


#### characterIndex () → {[Number](Number.md)}
 キャラクタ画像の番号(0〜7)を返す。


#### characterName () → {[String](String.md)}
 キャラクタ画像のファイル名(拡張子なし)を返す。


#### checkEventTriggerTouch (x, y) → {Boolean}
 指定位置にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(タイル数) |
| `y` | [Number](Number.md) | y座標(タイル数) |


#### checkEventTriggerTouchFront (d)
 指定方向にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### checkStop (threshold) → {Boolean}
 停止状態が閾値を超えたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `threshold` | [Number](Number.md) |  停止カウントの閾値(フレーム) |


#### copyPosition (character)
 指定キャラクタの位置を自身の位置にコピー。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Player](Game_Player.md) |  |


#### direction () → {[Number](Number.md)}
 向き(テンキー対応)を返す。


#### distancePerFrame () → {[Number](Number.md)}
 フレーム毎の移動距離を返す。


#### endAnimation ()
[アニメーション]表示を終了。


#### endBalloon ()
[フキダシアイコン]表示を終了。


#### hasStepAnime () → {Boolean}
[足踏みアニメ]するか。


#### hasWalkAnime () → {Boolean}
[歩行アニメ]するか。


#### increaseSteps ()
 歩き出す(歩数を増やす)。


#### initialize ()
 オブジェクト生成時の初期化。


#### initMembers ()
 メンバ変数の初期化。


#### isAnimationPlaying () → {Boolean}
[アニメーション]表示中か。


#### isBalloonPlaying () → {Boolean}
[フキダシアイコン]表示中か。


#### isCollidedWithCharacters (x, y) → {Boolean}
 指定位置がキャラによって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### isCollidedWithEvents (x, y) → {Boolean}
 指定位置が[イベント]によって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### isCollidedWithVehicles (x, y) → {Boolean}
 指定位置が[乗り物]によって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### isDashing () → {Boolean}
 現在ダッシュ中か。


#### isDebugThrough () → {Boolean}
 デバッグ用のすり抜け移動中か。


#### isDirectionFixed () → {Boolean}
[向き固定]か。


#### isJumping () → {Boolean}
 ジャンプ中か。


#### isMapPassable (x, y, d) → {Boolean}
 指定位置から指定向きへのマップ通行が可能か。 キャラ・[イベント]による障害を考慮しない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### isMovementSucceeded (x opt, y opt) → {Boolean}
 移動に成功したか。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `x` | [Number](Number.md) | <optional> |  |
| `y` | [Number](Number.md) | <optional> |  |


#### isMoving () → {Boolean}
 移動中(タイル毎の座標ではない)か。


#### isNearTheScreen () → {Boolean}
 画面端に近いか。あるいは、スクロールを止める位置か。


#### isNormalPriority () → {Boolean}
[プライオリティ]が[通常キャラと同じ]か。


#### isObjectCharacter () → {Boolean}
 キャラクタ用(characters フォルダ以下)の画像か。


#### isOnBush () → {Boolean}
[茂み]に乗っているか。


#### isOnLadder () → {Boolean}
[梯子]に乗っているか。


#### isOriginalPattern () → {Boolean}
 オリジナルのパターンか。


#### isStopping () → {Boolean}
 止まっている(タイル毎の座標にいる)か。


#### isThrough () → {Boolean}
[すり抜け]状態か。


#### isTile () → {Boolean}
 タイル用(tilesets フォルダ以下)の画像か。


#### isTransparent () → {Boolean}
[透明]状態か。


#### jump (xPlus, yPlus)
[ジャンプ]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xPlus` | [Number](Number.md) | x方向の移動(タイル数) |
| `yPlus` | [Number](Number.md) | y方向の移動(タイル数) |


#### jumpHeight () → {[Number](Number.md)}
 現在のジャンプの高さ(ピクセル数)を返す。


#### locate (x, y)
 現在のマップ内での[イベントの位置設定]。 [setPosition](Game_CharacterBase.md#setposition-x-y) と異なり、姿勢などを初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### maxPattern () → {[Number](Number.md)}
 最大パターン数を返す。


#### moveDiagonally (horz, vert)
 指定の方向に斜めに進む。
 テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `horz` | [Number](Number.md) |  水平向き(4: 左, 6:右) |
| `vert` | [Number](Number.md) |  垂直向き(2: 下, 8: 上) |


#### moveFrequency () → {[Number](Number.md)}
 移動[頻度]を返す。
1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高


#### moveSpeed () → {[Number](Number.md)}
 移動[速度]を返す。
1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速


#### moveStraight (d)
 指定の向きへ[一歩前進]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### opacity () → {[Number](Number.md)}
[不透明度]\(0〜255)を返す。


#### pattern () → {[Number](Number.md)}
 歩行パターン(0〜2)を返す。


#### pos (x, y) → {Boolean}
 指定位置にいるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### posNt (x, y) → {Boolean}
 指定位置にいて、通行不可か。たぶん Nt = No Through。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### realMoveSpeed () → {[Number](Number.md)}
(ダッシュ状態も考慮して)現在の移動速度を返す。


#### refreshBushDepth ()
[茂み]の深さを更新。


#### regionId () → {[Number](Number.md)}
 乗っているリージョンIDを返す。


#### requestAnimation (animationId)
指定アニメーションIDにしたがって[アニメーションの表示]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animationId` | [Number](Number.md) | アニメーションID(1〜) |


#### requestBalloon (balloonId)
 フキダシアイコンIDを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `balloonId` | [Number](Number.md) |  |


#### resetPattern ()
 オリジナルのパターンにリセット。


#### resetStopCount ()
 停止カウンタをリセット。


#### reverseDir (d) → {[Number](Number.md)}
 指定向きの逆向き(テンキー対応)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### screenX () → {[Number](Number.md)}
 画面上の x座標(ピクセル数)を返す。


#### screenY () → {[Number](Number.md)}
 画面上の y座標(ピクセル数)を返す。


#### screenZ () → {[Number](Number.md)}
 重なり位置を返す。
1: 通常キャラの下, 3:通常キャラと同じ , 5: 通常キャラの上


#### scrolledX () → {[Number](Number.md)}

<dl>
	<dt>To Do:</dt>
	<dd>
		<ul>
			<li>この用語の意味が分かったら教えてください</li>
		</ul>
	</dd>
</dl>


#### scrolledY () → {[Number](Number.md)}

<dl>
	<dt>To Do:</dt>
	<dd>
		<ul>
			<li>この用語の意味が分かったら教えてください</li>
		</ul>
	</dd>
</dl>


#### setBlendMode (blendMode)
[合成方法]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `blendMode` | [Number](Number.md) | 0: 通常, 1: 加算, 2: 乗算, 3: スクリーン |


#### setDirection (d)
 向きの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### setDirectionFix (directionFix)
[向き固定]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `directionFix` | Boolean |  |


#### setImage (characterName, characterIndex)
 キャラクタ画像の設定(タイル画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](String.md) | 拡張子抜きのファイル名 |
| `characterIndex` | [Number](Number.md) | 番号(0〜7) |


#### setMoveFrequency (moveFrequency)
 移動[頻度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveFrequency` | [Number](Number.md) | 1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高 |


#### setMovementSuccess (success)
 移動可能かの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `success` | Boolean |  |


#### setMoveSpeed (moveSpeed)
 移動[速度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveSpeed` | [Number](Number.md) | 1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速 |


#### setOpacity (opacity)
[不透明度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `opacity` | [Number](Number.md) | 0〜255 |


#### setPattern (pattern)
 指定番号のパターンを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | [Number](Number.md) |  |


#### setPosition (x, y)
 現在のマップ内での[イベントの位置設定]

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### setPriorityType (priorityType)
[プライオリティ]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `priorityType` | [Number](Number.md) | 0: 通常キャラの下, 1:通常キャラと同じ , 2: 通常キャラの上 |


#### setStepAnime (stepAnime)
[足踏みアニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stepAnime` | Boolean |  |


#### setThrough (through)
[すり抜け]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `through` | Boolean |  |


#### setTileImage (tileId)
 タイル画像の設定(キャラクタ画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](Number.md) |  タイルID |


#### setTransparent (transparent)
[透明]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `transparent` | Boolean |  |


#### setWalkAnime (walkAnime)
[歩行アニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `walkAnime` | Boolean |  |


#### shiftY () → {[Number](Number.md)}
 縦方向へのシフト量(ピクセル数)を返す。


#### startAnimation ()
[アニメーション]表示開始。


#### startBalloon ()
[フキダシアイコン]表示開始。


#### straighten ()
 キャラを(歩き・足踏みの途中でない)直立状態に。


#### terrainTag () → {[Number](Number.md)}
 乗っている[地形タグ]を返す。


#### tileId () → {[Number](Number.md)}
 タイルIDを返す。


#### update ()
 キャラをアップデート。


#### updateAnimation ()
 アニメーションをアップデート。


#### updateAnimationCount ()
 アニメーションのカウンタをアップデート。


#### updateJump ()
 ジャンプ状態をアップデート。


#### updateMove ()
 移動状態をアップデート。


#### updatePattern ()
 パターンをアップデート。


#### updateStop ()
 停止状態をアップデート。


