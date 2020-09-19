# Class: Game_Character

## Extends: [Game_CharacterBase](Game_CharacterBase.md)

### new Game_Character ()

| データベース |  JSONデータ | オブジェクト | スプライト |
| --- | --- | --- | --- |
| [イベント] | [RPG.Event](RPG.Event.md) | [Game_Event](Game_Event.md) | [Sprite_Character](Sprite_Character.md) |
| [プレイヤー] | [RPG.Actor](RPG.Actor.md) | [Game_Player](Game_Player.md) | 〃 | 
| [フォロワー] | 〃 | [Game_Follower](Game_Follower.md) | 〃 | 
| [乗り物] | [RPG.System.Vehicle](RPG.System.Vehicle.md) |  [Game_Vehicle](Game_Vehicle.md) | 〃 | 

マップに表示されるキャラ用のクラス。

関連クラス: [Game_Interpreter](Game_Interpreter.md), [Game_Actor](Game_Actor.md)


### Sub Classes

* [Game_Event](Game_Event.md)
* [Game_Follower](Game_Follower.md)
* [Game_Player](Game_Player.md)
* [Game_Vehicle](Game_Vehicle.md)


### Properties:

ROUTE_ から始まる定数は、[移動ルートの設定]の[移動コマンド]に対応している。

| Name | Type | Description |
| --- | --- | --- |
| `ROUTE_END` | [Number](Number.md) | [static] 終了 |
| `ROUTE_MOVE_DOWN` | [Number](Number.md) | [static] [下に移動] |
| `ROUTE_MOVE_LEFT` | [Number](Number.md) | [static] [左に移動] |
| `ROUTE_MOVE_RIGHT` | [Number](Number.md) | [static] [右に移動] |
| `ROUTE_MOVE_UP` | [Number](Number.md) | [static] [上に移動] |
| `ROUTE_MOVE_LOWER_L` | [Number](Number.md) | [static] [左下に移動] |
| `ROUTE_MOVE_LOWER_R` | [Number](Number.md) | [static] [右下に移動] |
| `ROUTE_MOVE_UPPER_L` | [Number](Number.md) | [static] [左上に移動] |
| `ROUTE_MOVE_UPPER_R` | [Number](Number.md) | [static] [右上に移動] |
| `ROUTE_MOVE_RANDOM` | [Number](Number.md) | [static] [ランダムに移動] |
| `ROUTE_MOVE_TOWARD` | [Number](Number.md) | [static] [プレイヤーに近く] |
| `ROUTE_MOVE_AWAY` | [Number](Number.md) | [static] [プレイヤーから遠ざかる] |
| `ROUTE_MOVE_FORWARD` | [Number](Number.md) | [static] [一歩前進] |
| `ROUTE_MOVE_BACKWARD` | [Number](Number.md) | [static] [一歩後退] |
| `ROUTE_JUMP` | [Number](Number.md) | [static] [ジャンプ] |
| `ROUTE_WAIT` | [Number](Number.md) | [static] [ウェイト] |
| `ROUTE_TURN_DOWN` | [Number](Number.md) | [static] [下を向く] |
| `ROUTE_TURN_LEFT` | [Number](Number.md) | [static] [左を向く] |
| `ROUTE_TURN_RIGHT` | [Number](Number.md) | [static] [右を向く] |
| `ROUTE_TURN_UP` | [Number](Number.md) | [static] [上を向く] |
| `ROUTE_TURN_90D_R` | [Number](Number.md) | [static] [右に90度回転] |
| `ROUTE_TURN_90D_L` | [Number](Number.md) | [static] [左に90度回転] |
| `ROUTE_TURN_180D` | [Number](Number.md) | [static] [180度回転] |
| `ROUTE_TURN_90D_R_L` | [Number](Number.md) | [static] [右か左に90度回転] |
| `ROUTE_TURN_RANDOM` | [Number](Number.md) | [static] [ランダムに方向転換] |
| `ROUTE_TURN_TOWARD` | [Number](Number.md) | [static] [プレイヤーの方を向く] |
| `ROUTE_TURN_AWAY` | [Number](Number.md) | [static] [プレイヤーの逆を向く] |
| `ROUTE_SWITCH_ON` | [Number](Number.md) | [static] [スイッチON] |
| `ROUTE_SWITCH_OFF` | [Number](Number.md) | [static] [スイッチOFF] |
| `ROUTE_CHANGE_SPEED` | [Number](Number.md) | [static] [移動速度の変更] |
| `ROUTE_CHANGE_FREQ` | [Number](Number.md) | [static] [移動頻度の変更] |
| `ROUTE_WALK_ANIME_ON` | [Number](Number.md) | [static] [歩行アニメON] |
| `ROUTE_WALK_ANIME_OFF` | [Number](Number.md) | [static] [歩行アニメOFF] |
| `ROUTE_STEP_ANIME_ON` | [Number](Number.md) | [static] [足踏みアニメON] |
| `ROUTE_STEP_ANIME_OFF` | [Number](Number.md) | [static] [足踏みアニメOFF] |
| `ROUTE_DIR_FIX_ON` | [Number](Number.md) | [static] [向き固定ON] |
| `ROUTE_DIR_FIX_OFF` | [Number](Number.md) | [static] [向き固定OFF] |
| `ROUTE_THROUGH_ON` | [Number](Number.md) | [static] [すり抜けON] |
| `ROUTE_THROUGH_OFF` | [Number](Number.md) | [static] [すり抜けOFF] |
| `ROUTE_TRANSPARENT_ON` | [Number](Number.md) | [static] [透明化ON] |
| `ROUTE_TRANSPARENT_OFF` | [Number](Number.md) | [static] [透明化OFF] |
| `ROUTE_CHANGE_IMAGE` | [Number](Number.md) | [static] [画像の変更] |
| `ROUTE_CHANGE_OPACITY` | [Number](Number.md) | [static] [不透明度の変更] |
| `ROUTE_CHANGE_BLEND_MODE` | [Number](Number.md) | [static] [合成方法の変更] |
| `ROUTE_PLAY_SE` | [Number](Number.md) | [static] [SEの演奏] |
| `ROUTE_SCRIPT` | [Number](Number.md) | [static] [スクリプト] |
| `_moveRouteForcing` | Boolean | [移動ルート]を強制しているか |
| `_moveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) | [移動ルート] |
| `_moveRouteIndex` | [Number](Number.md) | [移動ルート]の番号 |
| `_originalMoveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) | オリジナルの[移動ルート] |
| `_originalMoveRouteIndex` | [Number](Number.md) | オリジナルの[移動ルート]の番号 |
| `_waitCount` | [Number](Number.md) | ウェイト |


### Inherited From

#### [Game_CharacterBase](Game_CharacterBase.md)

* [animationId ()](Game_CharacterBase.md#animationid---number)
* [animationWait ()](Game_CharacterBase.md#animationwait---number)
* [balloonId ()](Game_CharacterBase.md#balloonid---number)
* [blendMode ()](Game_CharacterBase.md#blendmode---number)
* [bushDepth ()](Game_CharacterBase.md#bushdepth---number)
* [canPass (x, y, d)](Game_CharacterBase.md#canpass-x-y-d--boolean)
* [canPassDiagonally (x, y, horz, vert)](Game_CharacterBase.md#canpassdiagonally-x-y-horz-vert--boolean)
* [characterIndex ()](Game_CharacterBase.md#characterindex---number)
* [characterName ()](Game_CharacterBase.md#charactername---string)
* [checkEventTriggerTouch (x, y)](Game_CharacterBase.md#checkeventtriggertouch-x-y--boolean)
* [checkEventTriggerTouchFront (d)](Game_CharacterBase.md#checkeventtriggertouchfront-d)
* [checkStop (threshold)](Game_CharacterBase.md#checkstop-threshold--boolean)
* [copyPosition (character)](Game_CharacterBase.md#copyposition-character)
* [direction ()](Game_CharacterBase.md#direction---number)
* [distancePerFrame ()](Game_CharacterBase.md#distanceperframe---number)
* [endAnimation ()](Game_CharacterBase.md#endanimation-)
* [endBalloon ()](Game_CharacterBase.md#endballoon-)
* [hasStepAnime ()](Game_CharacterBase.md#hasstepanime---boolean)
* [hasWalkAnime ()](Game_CharacterBase.md#haswalkanime---boolean)
* [increaseSteps ()](Game_CharacterBase.md#increasesteps-)
* [isAnimationPlaying ()](Game_CharacterBase.md#isanimationplaying---boolean)
* [isBalloonPlaying ()](Game_CharacterBase.md#isballoonplaying---boolean)
* [isCollidedWithCharacters (x, y)](Game_CharacterBase.md#iscollidedwithcharacters-x-y--boolean)
* [isCollidedWithEvents (x, y)](Game_CharacterBase.md#iscollidedwithevents-x-y--boolean)
* [isCollidedWithVehicles (x, y)](Game_CharacterBase.md#iscollidedwithvehicles-x-y--boolean)
* [isDashing ()](Game_CharacterBase.md#isdashing---boolean)
* [isDebugThrough ()](Game_CharacterBase.md#isdebugthrough---boolean)
* [isDirectionFixed ()](Game_CharacterBase.md#isdirectionfixed---boolean)
* [isJumping ()](Game_CharacterBase.md#isjumping---boolean)
* [isMapPassable (x, y, d)](Game_CharacterBase.md#ismappassable-x-y-d--boolean)
* [isMovementSucceeded (x opt, y opt)](Game_CharacterBase.md#ismovementsucceeded-x-opt-y-opt--boolean)
* [isMoving ()](Game_CharacterBase.md#ismoving---boolean)
* [isNearTheScreen ()](Game_CharacterBase.md#isnearthescreen---boolean)
* [isNormalPriority ()](Game_CharacterBase.md#isnormalpriority---boolean)
* [isObjectCharacter ()](Game_CharacterBase.md#isobjectcharacter---boolean)
* [isOnBush ()](Game_CharacterBase.md#isonbush---boolean)
* [isOnLadder ()](Game_CharacterBase.md#isonladder---boolean)
* [isOriginalPattern ()](Game_CharacterBase.md#isoriginalpattern---boolean)
* [isStopping ()](Game_CharacterBase.md#isstopping---boolean)
* [isThrough ()](Game_CharacterBase.md#isthrough---boolean)
* [isTile ()](Game_CharacterBase.md#istile---boolean)
* [isTransparent ()](Game_CharacterBase.md#istransparent---boolean)
* [jump (xPlus, yPlus)](Game_CharacterBase.md#jump-xplus-yplus)
* [jumpHeight ()](Game_CharacterBase.md#jumpheight---number)
* [locate (x, y)](Game_CharacterBase.md#locate-x-y)
* [maxPattern ()](Game_CharacterBase.md#maxpattern---number)
* [moveDiagonally (horz, vert)](Game_CharacterBase.md#movediagonally-horz-vert)
* [moveFrequency ()](Game_CharacterBase.md#movefrequency---number)
* [moveSpeed ()](Game_CharacterBase.md#movespeed---number)
* [moveStraight (d)](Game_CharacterBase.md#movestraight-d)
* [opacity ()](Game_CharacterBase.md#opacity---number)
* [pattern ()](Game_CharacterBase.md#pattern---number)
* [pos (x, y)](Game_CharacterBase.md#pos-x-y--boolean)
* [posNt (x, y)](Game_CharacterBase.md#posnt-x-y--boolean)
* [realMoveSpeed ()](Game_CharacterBase.md#realmovespeed---number)
* [refreshBushDepth ()](Game_CharacterBase.md#refreshbushdepth-)
* [regionId ()](Game_CharacterBase.md#regionid---number)
* [requestAnimation (animationId)](Game_CharacterBase.md#requestanimation-animationid)
* [requestBalloon (balloonId)](Game_CharacterBase.md#requestballoon-balloonid)
* [resetPattern ()](Game_CharacterBase.md#resetpattern-)
* [resetStopCount ()](Game_CharacterBase.md#resetstopcount-)
* [reverseDir (d)](Game_CharacterBase.md#reversedir-d--number)
* [screenX ()](Game_CharacterBase.md#screenx---number)
* [screenY ()](Game_CharacterBase.md#screeny---number)
* [screenZ ()](Game_CharacterBase.md#screenz---number)
* [scrolledX ()](Game_CharacterBase.md#scrolledx---number)
* [scrolledY ()](Game_CharacterBase.md#scrolledy---number)
* [setBlendMode (blendMode)](Game_CharacterBase.md#setblendmode-blendmode)
* [setDirection (d)](Game_CharacterBase.md#setdirection-d)
* [setDirectionFix (directionFix)](Game_CharacterBase.md#setdirectionfix-directionfix)
* [setImage (characterName, characterIndex)](Game_CharacterBase.md#setimage-charactername-characterindex)
* [setMoveFrequency (moveFrequency)](Game_CharacterBase.md#setmovefrequency-movefrequency)
* [setMovementSuccess (success)](Game_CharacterBase.md#setmovementsuccess-success)
* [setMoveSpeed (moveSpeed)](Game_CharacterBase.md#setmovespeed-movespeed)
* [setOpacity (opacity)](Game_CharacterBase.md#setopacity-opacity)
* [setPattern (pattern)](Game_CharacterBase.md#setpattern-pattern)
* [setPosition (x, y)](Game_CharacterBase.md#setposition-x-y)
* [setPriorityType (priorityType)](Game_CharacterBase.md#setprioritytype-prioritytype)
* [setStepAnime (stepAnime)](Game_CharacterBase.md#setstepanime-stepanime)
* [setThrough (through)](Game_CharacterBase.md#setthrough-through)
* [setTileImage (tileId)](Game_CharacterBase.md#settileimage-tileid)
* [setTransparent (transparent)](Game_CharacterBase.md#settransparent-transparent)
* [setWalkAnime (walkAnime)](Game_CharacterBase.md#setwalkanime-walkanime)
* [shiftY ()](Game_CharacterBase.md#shifty---number)
* [startAnimation ()](Game_CharacterBase.md#startanimation-)
* [startBalloon ()](Game_CharacterBase.md#startballoon-)
* [straighten ()](Game_CharacterBase.md#straighten-)
* [terrainTag ()](Game_CharacterBase.md#terraintag---number)
* [tileId ()](Game_CharacterBase.md#tileid---number)
* [update ()](Game_CharacterBase.md#update-)
* [updateAnimation ()](Game_CharacterBase.md#updateanimation-)
* [updateAnimationCount ()](Game_CharacterBase.md#updateanimationcount-)
* [updateJump ()](Game_CharacterBase.md#updatejump-)
* [updateMove ()](Game_CharacterBase.md#updatemove-)
* [updatePattern ()](Game_CharacterBase.md#updatepattern-)


### Methods

#### advanceMoveRouteIndex ()
[移動ルート]の実行位置を進める。


#### deltaXFrom (x) → {[Number](Number.md)}
 指定した x座標と自身の x座標の差分(タイル数)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(タイル数) |


#### deltaYFrom (y) → {[Number](Number.md)}
 指定した y座標と自身の y座標の差分(タイル数)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `y` | [Number](Number.md) | y座標(タイル数) |


#### findDirectionTo (goalX, goalY) → {[Number](Number.md)}
 指定座標へたどり着くための向き(テンキー対応)を返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `goalX` | [Number](Number.md) | x座標(タイル数) |
| `goalY` | [Number](Number.md) | y座標(タイル数) |


#### forceMoveRoute (moveRoute)
[移動ルート]を強制。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) | [移動ルート] |


#### initialize ()
Overrides: [Game_CharacterBase](Game_CharacterBase.md#initialize-)


#### initMembers ()
Overrides: [Game_CharacterBase](Game_CharacterBase.md#initmembers-)


#### isMoveRouteForcing () → {Boolean}
[移動ルート]が強制されているか。


#### memorizeMoveRoute ()
[移動ルート]を記録。


#### moveAwayFromCharacter (character)
 指定キャラクタから遠ざかる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタ |


#### moveAwayFromPlayer ()
[プレイヤーから遠ざかる]。


#### moveBackward ()
[一歩後退]。


#### moveForward ()
[一歩前進]。


#### moveRandom ()
[ランダムに移動] [タイプ:ランダム]。


#### moveTowardCharacter (character)
 指定キャラクタに近づく。[タイプ:近づく]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタ |


#### moveTowardPlayer ()
[プレイヤーに近づく]。


#### processMoveCommand (command)
[移動コマンド]を実行。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `command` | [RPG.MoveCommand](RPG.MoveCommand.md) | [移動コマンド] |


#### processRouteEnd ()
[移動ルート]の終了。


#### restoreMoveRoute ()
 記録した[移動ルート]に戻す。


#### searchLimit () → {[Number](Number.md)}
 ルート検索の上限数を返す。


#### setMoveRoute (moveRoute)
[移動ルート]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveRoute` | [RPG.MoveRoute](RPG.MoveRoute.md) | [移動ルート] |


#### swap (character)
 指定したキャラクタと場所を入れ替わる。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタ |


#### turn180 ()
[180度回転]。


#### turnAwayFromCharacter (character)
 指定キャラクタの逆を向く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタ |


#### turnAwayFromPlayer ()
[プレイヤーの逆を向く]。


#### turnLeft90 ()
[左に90度回転]。


#### turnRandom ()
[ランダムに方向転換]。


#### turnRight90 ()
[右に90度回転]。


#### turnRightOrLeft90 ()
[右か左に90度回転]。


#### turnTowardCharacter (character)
 指定キャラクタの方を向く。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタ |


#### turnTowardPlayer ()
[プレイヤーの方を向く]。


#### updateRoutineMove ()
[移動ルート]をアップデート。


#### updateStop ()
Overrides: [Game_CharacterBase](Game_CharacterBase.md#updatestop-)


