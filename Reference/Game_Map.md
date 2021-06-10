[クラスツリー](index.md)

# クラス:  Game_Map

| データベース| JSONデータ | 大域変数 | セーブデータ | スプライトセット |
| --- | --- | --- | --- | --- |
| マップ | [RPG.Map](RPG.Map.md) | [$gameMap](global.md#gamemap-game_map) | 保存される | [Spriteset_Map](Spriteset_Map.md) |

[イベント][タイルセット] などを含むマップの管理、スクロール制御や通行判定など役割の多いクラス。 

A〜Eの各タイルに割り当てられているタイルIDの数値は [Tilemap](Tilemap.md) で定義されている定数を参照。

[セルフスイッチ]は[イベント]とは別に [Game_SelfSwitches](Game_SelfSwitches.md) が管理している。

v1.1.0、v1.2.0  で変更あり。<br />
なお、公式プラグイン PluginCommonBase.js によって追加されるプロパティ・メソッドも書いている。

関連クラス: [RPG.Tileset](RPG.Tileset.md), [Scene_Map](Scene_Map.md), [Game_Screen](Game_Screen.md), [Tilemap](Tilemap.md), [ShaderTilemap](ShaderTilemap.md), [Game_Player](Game_Player.md)

### new Game_Map ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_interpreter` | [Game_Interpreter](Game_Interpreter.md) |コマンドインタプリタ |
| `_mapId` | [Number](Number.md) | [マップ]のID |
| `_tilesetId` | [Number](Number.md) | [タイルセット]のID |
| `_events` | [Array](Array.md).&lt;[Game_Event](Game_Event.md)&gt; | [イベント]の配列 |
| `_commonEvents` | [Array](Array.md).&lt;[Game_CommonEvent](Game_CommonEvent.md)&gt; | [コモンイベント]の配列 |
| `_vehicles` | [Array](Array.md).&lt;[Game_Vehicle](Game_Vehicle.md)&gt; | [乗り物]の配列 |
| `_displayX` | [Number](Number.md) | マップ表示の x座標(タイル数) |
| `_displayY` | [Number](Number.md) | マップ表示の y座標(タイル数) |
| `_nameDisplay` | Boolean | マップの[名前]を表示するか |
| `_scrollDirection` | [Number](Number.md) | スクロール方向(テンキー対応) |
| `_scrollRest` | [Number](Number.md) | スクロールの残り距離 |
| `_scrollSpeed` | [Number](Number.md) | スクロール速度 (規定値:4)|
| `_parallaxName` | [String](String.md) | [遠景]のファイル名 |
| `_parallaxZero` | Boolean | 視差を0にするか |
| `_parallaxLoopX` | Boolean | [横方向にループする] |
| `_parallaxLoopY` | Boolean | [縦方向にループする] |
| `_parallaxSx` | [Number](Number.md) | 遠景 x[スクロール]量(ピクセル) |
| `_parallaxSy` | [Number](Number.md) | 遠景 y[スクロール]量(ピクセル) |
| `_parallaxX` | [Number](Number.md) | 遠景 x位置(タイル数) |
| `_parallaxY` | [Number](Number.md) | 遠景 y位置(タイル数) |
| `_battleback1Name` | [String](String.md) | レイヤー奥の戦闘背景画像1(地面)のファイル名 |
| `_battleback2Name` | [String](String.md) | レイヤー手前の戦闘背景画像2(壁)のファイル名 |
| `_needsRefresh` | Boolean | [requestRefresh()](Game_Map.md#requestrefresh-mapid)などで更新予約がされているか |
| `_dynamicEvents` | [Array](Array.md).&lt;[Game_Interpreter](Game_Interpreter.md)&gt; | **@MZ PluginCommonBase.js**  |



### メソッド

#### adjustX (x) → {[Number](Number.md)}
指定されたマップの全体での x位置を、画面左からの x位置(タイル数)に変換して返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |


#### adjustY (y) → {[Number](Number.md)}
指定されたマップの全体での y位置を、画面上からの y位置(タイル数)に変換して返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### airship () → {[Game_Vehicle](Game_Vehicle.md)}
[飛行船]を返す。


#### allTiles (x, y) → {[Array](Array.md).&lt;[Number](Number.md)&gt;}
指定位置に重なった[イベント]も含めた全タイルIDの配列を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### autoplay ()
[BGM自動演奏][BGS自動演奏]を開始。


#### autotileType (x, y, z) → {[Number](Number.md)}
 指定位置のオートタイルのタイプ(オートタイルでない場合は-1)を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `z` | [Number](Number.md) | 重なり(0〜3) |


#### autorunCommonEvents () → {Array](Array.md).&lt;[Game_CommonEvent](Game_CommonEvent.md)&gt;}
**@MZ** [自動実行]のコモンイベントを返す。


#### battleback1Name () → {[String](String.md)}
 レイヤー奥の戦闘背景画像1(地面)のファイル名を返す。


#### battleback2Name () → {[String](String.md)}
 レイヤー手前の戦闘背景画像2(壁)のファイル名を返す。


#### boat () → {[Game_Vehicle](Game_Vehicle.md)}
[小型船]を返す。


#### canvasToMapX (x) → {[Number](Number.md)}
canvasの x座標をタイル数に変換して返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x座標(ピクセル) |


#### canvasToMapY (y) → {[Number](Number.md)}
canvasの y座標をタイル数に変換して返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `y` | [Number](Number.md) | y座標(ピクセル) |


#### changeBattleback (battleback1Name, battleback2Name)
[戦闘背景の変更]を行う。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `battleback1Name` | [String](String.md) | レイヤー奥の戦闘背景画像1(地面)のファイル名 |
| `battleback2Name` | [String](String.md) | レイヤー手前の戦闘背景画像2(壁)のファイル名 |


#### changeParallax (name, loopX, loopY, sx, sy)
[遠景の変更]を行う。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | [画像]ファイル名 |
| `loopX` | Boolean | [横方向にループする] |
| `loopY` | Boolean | [縦方向にループする] |
| `sx` | [Number](Number.md) | x [スクロール]量(ピクセル) |
| `sy` | [Number](Number.md) | y [スクロール]量(ピクセル) |


#### changeTileset (tilesetId)
[タイルセットの変更]を行う。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `tilesetId` | [Number](Number.md) | [タイルセット]のID |


#### checkLayeredTilesFlags (x, y, bit) → {Boolean}
 指定位置のタイルのうち指定フラグが立っているものがあるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `bit` | [Number](Number.md) | [RPG.Tileset](RPG.Tileset.md) の flagsチェック用ビット |


#### checkPassage (x, y, bit) → {Boolean}
 指定位置の指定フラグビットが通行可か。<br />
[☆]でない最初のタイルのうち、指定したビットが立っていれば false

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `bit` | [Number](Number.md) | [RPG.Tileset](RPG.Tileset.md) の flagsチェック用ビット |


#### createVehicles ()
 マップ上に[乗り物]( boat, ship, airship )を生成。


#### data () → {[Array](Array.md).&lt;[Number](Number.md)&gt;}
 マップデータの配列を返す。(参照: [RPG.Map.data](RPG.Map.md#マップデータ))


#### deltaX (x1, x2) → {[Number](Number.md)}
x座標2点間のタイル距離を(ループも考慮して)返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x1` | [Number](Number.md) | x位置(タイル数) |
| `x2` | [Number](Number.md) | x位置(タイル数) |


#### deltaY (y1, y2) → {[Number](Number.md)}
y座標2点間のタイル距離を(ループも考慮して)返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `y1` | [Number](Number.md) | y位置(タイル数) |
| `y2` | [Number](Number.md) | y位置(タイル数) |


#### disableNameDisplay ()
 マップ[表示名]を非表示に設定。


#### displayName () → {[String](String.md)}
 マップ[表示名]を返す。


#### displayX () → {[Number](Number.md)}
 マップ表示の x座標(タイル数)を返す。


#### displayY () → {[Number](Number.md)}
 マップ表示の y座標(タイル数)を返す。


#### distance (x1, y1, x2, y2) → {[Number](Number.md)}
2点間の距離を返す。<br />
直線距離ではなく、4方向移動でかかるタイル数。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x1` | [Number](Number.md) | x位置(タイル数) |
| `y1` | [Number](Number.md) | y位置(タイル数) |
| `x2` | [Number](Number.md) | x位置(タイル数) |
| `y2` | [Number](Number.md) | y位置(タイル数) |


#### doScroll (direction, distance)
指定方向と距離の分だけスクロール。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `direction` | [Number](Number.md) | 方向(テンキー対応) |
| `distance` | [Number](Number.md) | 距離(タイル数) |


#### enableNameDisplay ()
 マップ[表示名]を表示に設定。


#### encounterList () → {[Array](Array.md).&lt;[RPG.Map.Encounter](RPG.Map.Encounter.md)&gt;}
[エンカウント]の配列を返す。


#### encounterStep () → {[Number](Number.md)}
[敵出現歩数]を返す。


#### eraseEvent (eventId)
 イベントIDに対応する[イベント]を削除。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `eventId` | [Number](Number.md) | イベントID |


#### event (eventId) → {[Game_Event](Game_Event.md)}
 イベントIDに対応する[イベント]を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `eventId` | [Number](Number.md) | イベントID |


#### eventIdXy (x, y) → {[Number](Number.md)}
 指定位置にある[イベント]のイベントIDを返す。<br />
 イベントがない場合は0、複数ある場合は最初のイベントID

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### events () → {[Array](Array.md).&lt;[Game_Event](Game_Event.md)&gt;}
 現在のマップ上に存在する全[イベント]の配列を返す。


#### eventsXy (x, y) → {[Array](Array.md).&lt;[Game_Event](Game_Event.md)&gt;}
 指定位置にある[イベント]を配列で返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### eventsXyNt (x, y) → {[Array](Array.md).&lt;[Game_Event](Game_Event.md)&gt;}
 指定位置にある、通行不可の[イベント]を配列で返す。Nt = No Through。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### height () → {[Number](Number.md)}
 マップの[高さ]\(タイル数)を返す。


#### initDynamicEvents ()
**@MZ PluginCommonBase.js**  動的イベントの初期化。


#### initialize ()
オブジェクト生成時の初期化。


#### isAirshipLandOk (x, y) → {Boolean}
[飛行船]で指定位置に着地できるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### isAnyEventStarting () → {Boolean}
 なんらかの[イベント]が実行されたか。


#### isBoatPassable (x, y) → {Boolean}
[小型船]で指定位置が通れるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### isBush (x, y) → {Boolean}
 指定位置のタイルに[茂み]フラグを持つものがあるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### isCounter (x, y) → {Boolean}
 指定位置のタイルに[カウンター]フラグを持つものがあるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### isDamageFloor (x, y) → {Boolean}
 指定位置のタイルに[ダメージ床]フラグを持つものがあるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### isDashDisabled () → {Boolean}
[ダッシュ禁止]か。


#### isEventRunning () → {Boolean}
 イベント実行中か。


#### isInterpreterOf (interpreter) → {Boolean}
**@MZ PluginCommonBase.js** 指定インタプリタが、現在のマップのインタプリタと同一か。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `interpreter` | [Game_Interpreter](Game_Interpreter.md) | 比較するインタプリタ |


#### isLadder (x, y) → {Boolean}
 指定位置のタイルに[梯]\(はしご)フラグを持つものがあるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### isLoopHorizontal () → {Boolean}
[横方向にループする]か。


#### isLoopVertical () → {Boolean}
[縦方向にループする]か。


#### isNameDisplayEnabled () → {Boolean}
 マップ[表示名]が表示されるか。


#### isOverworld () → {Boolean}
[タイルセット]の[モード]が[フィールドタイプ]か。


#### isPassable (x, y, d) → {Boolean}
 指定位置から指定方向に進めるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |


#### isScrolling () → {Boolean}
 スクロール中か。


#### isShipPassable (x, y) → {Boolean}
[大型船]で指定位置が通れるか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### isValid (x, y) → {Boolean}
 指定位置がマップ範囲に含まれているか。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### layeredTiles (x, y) → {[Array](Array.md).&lt;[Number](Number.md)&gt;}
 指定位置に重なったタイルIDの配列を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### mapId () → {[Number](Number.md)}
 マップIDを返す。


#### parallaxName () → {[String](String.md)}
[遠景]画像のファイル名を返す。


#### parallaxOx () → {[Number](Number.md)}
[遠景]画像の視差を考慮した x位置(ピクセル)を返す。


#### parallaxOy () → {[Number](Number.md)}
[遠景]画像の視差を考慮した y位置(ピクセル)を返す。


#### parallelCommonEvents () → {[Array](Array.md).&lt;[RPG.CommonEvent](RPG.CommonEvent.md)&gt;}
[並列処理]の[コモンイベント]の配列を返す。


#### refereshVehicles ()
[乗り物]を再描画。


#### refresh ()
[イベント]の更新。


#### refreshIfNeeded ()
[Game_Map#requestRefresh](#requestrefresh-mapid) で予約されていたら再描画。


#### refreshTileEvents ()
 タイル画像が設定されている[イベント]を更新。


#### regionId (x, y) → {[Number](Number.md)}
 指定位置のタイルのリージョンIDを返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### requestRefresh ()
 マップの再描画を予約。<br />
 ※mapId引数は不要だったので廃止。


#### roundX (x) → {[Number](Number.md)}
 ループ回数を考慮しない x座標(タイル数)に変換して返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |


#### roundXWithDirection (x, d) → {[Number](Number.md)}
 指定方向に移動した(ループ回数を考慮しない) x座標(タイル数)を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |


#### roundY (y) → {[Number](Number.md)}
 ループ回数を考慮しない y座標(タイル数)に変換して返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### roundYWithDirection (y, d) → {[Number](Number.md)}
 指定方向に移動した(ループ回数を考慮しない) y座標(タイル数)を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |


#### screenTileX () → {[Number](Number.md)}
 画面の幅(小数点以下有りのタイル数)を返す。<br />
 1/16タイル単位で切りそろえられている。


#### screenTileY () → {[Number](Number.md)}
 画面の高さ(小数点以下有りのタイル数)を返す。<br />
 1/16タイル単位で切りそろえられている。


#### scrollDistance () → {[Number](Number.md)}
 スクロール距離(タイル数)を返す。


#### scrollDown (distance)
 指定距離だけ下にスクロール。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `distance` | [Number](Number.md) | 下への移動距離(タイル数) |


#### scrollLeft (distance)
 指定距離だけ左にスクロール。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `distance` | [Number](Number.md) | 左への移動距離(タイル数) |


#### scrollRight (distance)
 指定距離だけ右にスクロール。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `distance` | [Number](Number.md) | 右への移動距離(タイル数) |


#### scrollUp (distance)
 指定距離だけ上にスクロール。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `distance` | [Number](Number.md) | 上への移動距離(タイル数) |


#### setDisplayPos (x, y)
 指定位置(画面左上基準)にマップ表示。 マップ端でスクロールが止まるか、ループする処理も行う。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### setup (mapId)
 マップ移動などで新たなマップを表示する場合の準備。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `mapId` | [Number](Number.md) | マップID |


#### setupAutorunCommonEvent () → {Boolean}
トリガー[自動実行]のコモンイベントの準備を行い、準備したものがあったか返す。


#### setupBattleback ()
 戦闘背景の準備。


#### setupDynamicCommon (id)
**@MZ PluginCommonBase.js** 動的コモンイベントの準備。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `id` | [Number](Number.md) | コモンイベントID |


#### setupDynamicInterpreter (list)
**@MZ PluginCommonBase.js** 動的インタプリタの準備。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `list` | [Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt;  | コマンドのリスト |


#### setupEvents ()
[イベント]の準備。


#### setupParallax ()
[遠景]の準備。


#### setupScroll ()
 スクロールの準備。


#### setupStartingEvent () → {Boolean}
テストイベント・マップイベント・コモンイベントについて、<br />
開始時に実行するイベントの準備を行い、準備したものがあったか返す。


#### setupStartingMapEvent () → {Boolean}
開始時に実行するマップイベントの準備を行い、準備したものがあったか返す。


#### setupTestEvent () → {Boolean}
開始時に実行するテストベントの準備を行い、準備したものがあったか返す。


#### ship () → {[Game_Vehicle](Game_Vehicle.md)}
[大型船]を返す。


#### startScroll (direction, distance, speed)
 スクロール開始。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `direction` | [Number](Number.md) |  |
| `distance` | [Number](Number.md) |  |
| `speed` | [Number](Number.md) |  |


#### terrainTag (x, y) → {[Number](Number.md)}
 指定位置のタイルのうち最初の[地形タグ]を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |


#### tileEventsXy (x, y) → {[Array](Array.md).&lt;[Game_Event](Game_Event.md)&gt;}
 指定位置にある、画像にタイルセットを選択した[イベント]を配列で返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) |  |
| `y` | [Number](Number.md) |  |


#### tileHeight () → {[Number](Number.md)}
 タイルの高さ(規定値:48ピクセル)を返す。


#### tileId (x, y, z) → {[Number](Number.md)}
 指定位置のタイルIDを返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `z` | [Number](Number.md) | 重なり(0 〜 3) |


#### tileset () → {[RPG.Tileset](RPG.Tileset.md)}
[タイルセット]を返す。


#### tilesetFlags () → {[Array](Array.md).&lt;[Number](Number.md)&gt;}
[タイルセット]に設定された[通行]などの地形フラグを返す。<br />
地形フラグの 詳細は[RPG.Tileset](RPG.Tileset.md) を参照


#### tilesetId () → {[Number](Number.md)}
 タイルセットIDを返す。


#### tileWidth () → {[Number](Number.md)}
 タイルの幅(規定値: 48ピクセル)を返す。


#### unlockEvent (eventId)
 指定IDの[イベント]をアンロック。 決定ボタンでイベントをプレイヤーの方に向かせた状態の解除。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `eventId` | [Number](Number.md) |  |


#### update (sceneActive)
 マップをアップデート。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `sceneActive` | Boolean |  |


#### updateEvents ()
 現在のマップにある全[イベント]をアップデート。


#### updateInterpreter ()
 インタプリタをアップデート。


#### updateParallax ()
[遠景]をアップデート。


#### updateScroll ()
 スクロールをアップデート。


#### updateVehicles ()
 現在のマップにある全乗り物をアップデート。


#### vehicle (type) → {[Game_Vehicle](Game_Vehicle.md)}
 数値( 0:小型船, 1:大型船, 2:飛行船 )か文字列( 'boat', 'ship', 'airship' )による指定で[乗り物]を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md) | [String](String.md) |  |


#### vehicles () → {[Array](Array.md).&lt;[Game_Vehicle](Game_Vehicle.md)&gt;}
 生成されている[乗り物]の配列を返す。


#### width () → {[Number](Number.md)}
 マップの[幅]\(タイル数)を返す。


#### xWithDirection (x, d) → {[Number](Number.md)}
 指定方向に移動した x座標(タイル数)を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `x` | [Number](Number.md) | x位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |


#### yWithDirection (y, d) → {[Number](Number.md)}
 指定方向に移動した y座標(タイル数)を返す。

##### 引数

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `y` | [Number](Number.md) | y位置(タイル数) |
| `d` | [Number](Number.md) | 方向(テンキー対応) |



