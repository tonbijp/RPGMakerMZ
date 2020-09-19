# Class: Game_Vehicle

## Extends: [Game_Character](Game_Character.md)

### new Game_Vehicle ()

| データベース | JSONデータ | スプライト |
| --- | --- | --- | --- |
| [乗り物] | [RPG.System.Vehicle](RPG.System.Vehicle.md) | [Sprite_Character](Sprite_Character.md) |

[乗り物]を定義したクラス。 大体の機能は [Game_Player](Game_Player.md) クラスから使える。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_type` | [String](String.md) | [乗り物]の種類 |
| `_mapId` | [Number](Number.md) | マップID |
| `_altitude` | [Number](Number.md) | 高度 |
| `_driving` | Boolean | 運転中か |
| `_bgm` | [RPG.AudioFile](RPG.AudioFile.md) | [乗り物]用BGM |


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
* [updateAnimation ()](Game_CharacterBase.md#updateanimation-)
* [updateAnimationCount ()](Game_CharacterBase.md#updateanimationcount-)
* [updateJump ()](Game_CharacterBase.md#updatejump-)
* [updateMove ()](Game_CharacterBase.md#updatemove-)
* [updatePattern ()](Game_CharacterBase.md#updatepattern-)


#### [Game_Character](Game_Character)

* [advanceMoveRouteIndex ()](Game_Character.md#advancemoverouteindex-)
* [deltaXFrom (x)](Game_Character.md#deltaxfrom-x--number)
* [deltaYFrom (y)](Game_Character.md#deltayfrom-y--number)
* [findDirectionTo (goalX, goalY)](Game_Character.md#finddirectionto-goalx-goaly--number)
* [forceMoveRoute (moveRoute)](Game_Character.md#forcemoveroute-moveroute)
* [isMoveRouteForcing ()](Game_Character.md#ismoverouteforcing---boolean)
* [memorizeMoveRoute ()](Game_Character.md#memorizemoveroute-)
* [moveAwayFromCharacter (character)](Game_Character.md#moveawayfromcharacter-character)
* [moveAwayFromPlayer ()](Game_Character.md#moveawayfromplayer-)
* [moveBackward ()](Game_Character.md#movebackward-)
* [moveForward ()](Game_Character.md#moveforward-)
* [moveRandom ()](Game_Character.md#moverandom-)
* [moveTowardCharacter (character)](Game_Character.md#movetowardcharacter-character)
* [moveTowardPlayer ()](Game_Character.md#movetowardplayer-)
* [processMoveCommand (command)](Game_Character.md#processmovecommand-command)
* [processRouteEnd ()](Game_Character.md#processrouteend-)
* [restoreMoveRoute ()](Game_Character.md#restoremoveroute-)
* [searchLimit ()](Game_Character.md#searchlimit---number)
* [setMoveRoute (moveRoute)](Game_Character.md#setmoveroute-moveroute)
* [swap (character)](Game_Character.md#swap-character)
* [turn180 ()](Game_Character.md#turn180-)
* [turnAwayFromCharacter (character)](Game_Character.md#turnawayfromcharacter-character)
* [turnAwayFromPlayer ()](Game_Character.md#turnawayfromplayer-)
* [turnLeft90 ()](Game_Character.md#turnleft90-)
* [turnRandom ()](Game_Character.md#turnrandom-)
* [turnRight90 ()](Game_Character.md#turnright90-)
* [turnRightOrLeft90 ()](Game_Character.md#turnrightorleft90-)
* [turnTowardCharacter (character)](Game_Character.md#turntowardcharacter-character)
* [turnTowardPlayer ()](Game_Character.md#turntowardplayer-)
* [updateRoutineMove ()](Game_Character.md#updateroutinemove-)


### Methods

#### canMove () → {Boolean}
[乗り物]を操作可能か。


#### getOff ()
[乗り物]から降りる。


#### getOn ()
[乗り物]へ乗る。


#### initialize (type)
Overrides: [Game_Character](Game_Character.md#initialize-)


#### initMembers ()
Overrides: [Game_Character](Game_Character.md#initmembers-)
 
 
#### initMoveSpeed ()
 移動速度の初期化。
 

#### isAirship () → {Boolean}
[飛行船]か。


#### isBoat () → {Boolean}
[小型船]か。


#### isHighest () → {Boolean}
 最高高度か。


#### isLandOk (x, y, d) → {Boolean}
 指定位置と向きで着陸可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](Number.md) |  x座標(タイル数) |
| `y` | [Number](Number.md) |  y座標(タイル数) |
| `d` | [Number](Number.md) |  向き(テンキー対応) |


#### isLowest () → {Boolean}
 着陸しているか(最低高度か)。


#### isMapPassable (x, y, d) → {Boolean}
Overrides: [Game_CharacterBase](Game_CharacterBase.md#ismappassable-x-y-d--boolean)


#### isShip () → {Boolean}
[大型船]か。


#### isTakeoffOk () → {Boolean}
 離陸可能か。


#### loadSystemSettings ()
[システム]設定を読んで設定。


#### maxAltitude () → {[Number](Number.md)}
 最高高度(ピクセル)を返す。


#### playBgm ()
[乗り物]用のBGMを再生。


#### pos (x, y) → {Boolean}
Overrides: [Game_CharacterBase](Game_CharacterBase.md#pos-)


#### refresh ()
[乗り物]の更新。


#### resetDirection ()
[乗り物]の向きを(左向きに)リセット。


#### setBgm (bgm)
[乗り物]用のBGMの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `bgm` | [RPG.AudioFile](RPG.AudioFile.md) |  |


#### setLocation (mapId, x, y)
 指定マップ・位置に移動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](Number.md) |  |
| `x` | [Number](Number.md) |  タイル数 |
| `y` | [Number](Number.md) |  タイル数 |


#### shadowOpacity () → {[Number](Number.md)}
 影の不透明度(0〜255)を返す。


#### shadowX () → {[Number](Number.md)}
 画面上の影の x座標(ピクセル)を返す。


#### shadowY () → {[Number](Number.md)|[Number](Number.md)}
 画面上の影の y座標(ピクセル)を返す。


#### syncWithPlayer ()
 プレイヤー位置に揃える。


#### update ()
Overrides: [Game_CharacterBase](Game_CharacterBase.md#update-)


#### updateAirship ()
[飛行船]をアップデート。


#### updateAirshipAltitude ()
[飛行船]の高度をアップデート。


#### vehicle () → {[RPG.System.Vehicle](RPG.System.Vehicle.md)}
 現在の[乗り物]情報オブジェクトを返す。


