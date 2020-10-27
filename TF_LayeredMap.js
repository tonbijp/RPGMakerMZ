//========================================
// TF_LayeredMap.js
// Version :0.1.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2018 - 2020
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:
 * @target MZ
 * @plugindesc Extended map tile layer.
 * @author Tonbi﹫Tobishima-Factory(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_LayeredMap.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * 
 * 
 * @param BillboardPriority
 * @type select
 * @option Put it front
 * @value front
 * @option Put it back
 * @value back
 * @desc Put billboard in front or back.
 * @default back
 * 
 * 
 * @param Autotile
 * 
 * 
 * @param UseLayeredCounter
 * @type boolean
 * @on Layered counter
 * @off Normal
 * @desc Counter becomes layered.
 * A2 counter tile can layered like billboard.
 *  (HalfMove.js is needed)
 * @default true
 * @parent Autotile
 * 
 * @param IsA2FullCollision
 * @type boolean
 * @on Full collision
 * @off Closed and inside is accessible
 * @desc Entire tile on the ground(A2) collision to activate.
 * @default false
 * @parent Autotile
 * 
 * @param IsA3UpperOpen
 * @type boolean
 * @on Open
 * @off Close
 * @desc Remove the south collision of the roof(A3)?
 * @default false
 * @parent Autotile
 * 
 * @param IsA4UpperOpen
 * @type boolean
 * @on Open
 * @off Close
 * @desc Remove the south collision of the wall top(A4)?
 * @default false
 * @parent Autotile
 * 
 * 
 * @param Overpass
 * 
 * @param OverpassTerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Terraing tag for overpass tile.
 * @default 3
 * @parent Overpass
 * 
 * @param CharacterSize
 * @type select
 * @option 1tile size
 * @value 1
 * @option 2tile size
 * @value 2
 * @desc Collision of overpass for.
 * @default 1
 * @parent Overpass
 * 
 * 
 * @help
 * Alert !!
 * If you use HalfMove.js by Triacontane.Place HalfMove.js before TF_LayeredMap.js.
 * And Place TF_LayeredMap.js before TF_Undulation.js.
 * 
 * This plug-in provides the following functions.
 * 　1. [☆]+[4 direction pass] Billboard function for B〜E tile is added.
 * 　2. [TerrainTag] Crosspass function for B〜E tile is added.
 * 　3. [Counter] Billboard function for auto tile is added.
 * 　4. [TerrainTag] Auto tile collision and overpass function for bridge is added.
 * 　5. [Counter] [TerrainTag]  Upper auto tile overpass function is added.
 * 　6. [TerrainTag] [×] The wall top that does not walk for A4 upper tile is added.
 * 　7. [TerrainTag] A5 tile up one layer.
 * 　8. <TF_zDef:Number> Put this tag in the note in event and adjust the overlap.
 * 　9. <TF_higherLevel:Boolean> Put this tag in the note in event and set overpass higher level.
 * 
 * 1. set [☆] to BCDE tile, and set 4 direction setting.
 *      0x0 ↑→←↓ : [☆]  Same as no plugin.
 *      0x1 ↑→←・ : billboard, ↑　←→ pass, ground (for fence)
 *      0x2 ↑→・↓ : billboard, ↑↓　→ pass, ground (left side of fence)┃
 *      0x3 ↑→・・ : billboard, ↑　　→ pass, ground (bottom left)┗
 *      0x4 ↑・←↓ : billboard, ↑↓←　 pass, ground (right)   ┃
 *      0x5 ↑・←・ : billboard, ↑　←　 pass, ground (bottom right)   ┛
 *      0x6 ↑・・↓ : billboard, ↑↓　　 pass, ground (both side)┃┃
 *      0x7 ↑・・・ : billboard, ↑　　　 pass, ground (like bartizan)┗┛
 *      0x8 ・→←↓ : billboard,  all directtion , ground (for bush)
 *      0x9 ・→←・ : billboard,  all directtion , 2nd floor
 *      0xA ・→・↓ : billboard,  all directtion , 3rd floor
 *      0xB ・→・・ : Same as [○] and north half blocked (for lower shelf) (HalfMove.js is needed)
 *      0xC ・・←↓ : Same as 0x1 and south half blocked (for Barrel) (HalfMove.js is needed)
 *      0xD ・・←・ : Same as 0xB and collision is half (for lower tree) (HalfMove.js is needed)
 *      0xE ・・・↓ : Same as 0xC and collision is half  (for chair) (HalfMove.js is needed)
 *      0xF ・・・・ : Same as 0x1 and collision is half (for peg)(HalfMove.js is needed)
 * 
 * 2. Set TerrainTag to 3(default)
 *      If you enter from blocke direction, you can move under the tile.
 *      If you enter from pass direction, you can move over the tile.
 * 
 * 3. For the clif.
 * 　First, set [counter].
 *      A3・A4 odd line(roof・walltop)
 *      　[○] All = upper[☆]
 *      A3・A4 even line(wallside)
 *      　[○] All = billboard, South=can't pass.(floor height set automaticaly)
 *      Common to A3 and A4 
 *      　[×] North = billboard, Perimeter = can't pass.
 * 
 * 4.  For the bridge or the stairs.
 * 　First, set [TerrainTag:3].
 *      A3 odd line(roof)
 *          [○] SouthNorth = can't pass, WestEast = pass.
 *          [×] SouthNorth = pass under、WestEast = pass over.
 *      A3・A4 even line(wallside)
 *          [○] SouthNorth = pass, WestEast = can't pass.
 *          [×] SouthNorth = pass over, WestEast = pass under.
 * 
 * 5.  For the overpass.
 * 　First, set [counter][TerrainTag:3].
 *      A3・A4 odd line(roof・walltop)
 *          [○] All = overpass.
 *          [×] North = overpass, Perimeter = can't pass.
 * 
 * 6.  For the wall that does not walk on.
 *      A4 odd line(walltop)
 *          [TerrainTag:3][×] North = upper[☆], All = can't enter.
 * 
 * 7. Move up one layer.
 * 　Add [TerrainTag:3] to A5 tile, Set the tile at base layer and target tile up one layer.
 *      The overpass will not work. If the right side of A2 is on the target tile, it will gone.
 * 
 * 8. adjust the overlap
 * 　<TF_zDef:Number> Put this tag in the note in event.
 *      Add a number to the y position and set a virtual y position.
 * 　Enter a number greater than 6 (default) to bring the character to the front.
 * 
 * 9. set overpass higher level.
 * 　 <TF_higherLevel:Boolean> Put this tag in the note in event.
 * 　true:front(upper)、false:back(lower)
 * 　default:false
 * 
 * Released under the MIT License.
 */
/*:ja
 * @target MZ
 * @plugindesc マップタイル重ね合わせ強化
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_LayeredMap.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * 
 * @param BillboardPriority
 * @type select
 * @option 手前
 * @value front
 * @option 奥(規定値)
 * @value back
 * @text 奥行き優先度
 * @desc  書き割りの奥・手前配置の設定
 * @default back
 * 
 * 
 * @param Autotile
 * @text オートタイル
 *
 * @param UseLayeredCounter
 * @type boolean
 * @text カウンター回り込み
 * @on 回り込み
 * @off 通常
 * @desc A2のカウンターの後ろに回り込めるようにするか
 * (HalfMove.js が必要)
 * @default true
 * @parent Autotile
 * 
 * @param IsA2FullCollision
 * @type boolean
 * @on 通行止め
 * @off 閉じて内側は通行可
 * @text タイル全体を通行不可にするか
 * @desc A2(地面)のタイル全体を通行不可にするか
 * @default false
 * @parent Autotile
 * 
 * @param IsA3UpperOpen
 * @type boolean
 * @on 南を開く
 * @off 閉じて内側は通行可
 * @text 屋根南を開くか
 * @desc A3(屋根)[周囲=通行不可]の場合に、南の衝突判定をなくすか
 * @default false
 * @parent Autotile
 * 
 * @param IsA4UpperOpen
 * @type boolean
 * @on 南を開く
 * @off 閉じて内側は通行可
 * @text 壁上面南を開くか
 * @desc A4(壁上上面)[周囲=通行不可]の場合に、南の衝突判定をなくすか
 * @default false
 * @parent Autotile
 * 
 * 
 * @param Overpass
 * @text 立体交差
 * 
 * @param OverpassTerrainTag
 * @type number
 * @min 0
 * @max 7
 * @text 立体交差の地形タグ
 * @desc 立体交差不使用 : 0
 * 立体交差をさせたいタイルに指定する地形タグ
 * @default 3
 * @parent Overpass
 * 
 * @param CharacterSize
 * @type select
 * @option 1tile size
 * @value 1
 * @option 2tile size
 * @value 2
 * @desc Collision of overpass for.
 * @text キャラのタイルサイズ
 * @desc 立体交差の衝突判定用のキャラサイズ
 * @default 1
 * @parent Overpass
 * 
 * 
 * @help 
 * 注意 : トリアコンタンさんの HalfMove.js を利用する場合は。
 * TF_LayeredMap.js の前に HalfMove.js を配置するようにしてください。
 * TF_Undulation.js と一緒の場合は、TF_LayeredMap.js が前です。
 * 
 * このプラグインは以下の機能を提供します。
 * 　1. [☆]+[通行設定(4方向)]で、B〜Eタイルの重なり機能を追加。
 * 　2. [地形タグ]で、B〜Eタイルの立体交差機能を追加。
 * 　3. [カウンター]で、A3・A4タイルに回り込み機能を追加。
 * 　4. [地形タグ]で、A3・A4タイルに橋の衝突判定と立体交差機能を追加。
 * 　5. [カウンター] [地形タグ] で、A3・A4タイル上面に立体交差機能を追加。
 * 　6. [地形タグ] [×] で、A4上面タイルに上を歩かない壁用の設定。
 * 　7. [地形タグ]で、A5タイルをひとつ上のレイヤーに移動。
 * 　8. <TF_zDef:数値> をイベントのメモに記入して重なりの調整。
 * 　9. <TF_higherLevel:真偽値> をイベントのメモに記入して立体交差の奥手前の指定。
 *   10. TF_HIGHER_LEVEL コマンドで立体交差の奥手前の指定。
 * 
 * 1. B〜Eタイルに[☆]を指定したあと、[通行設定(4方向)]
 *      0x0 ↑→←↓ : [☆] 設定、全方向に 通行可(プラグインなしと同じ)
 *      0x1 ↑→←・ : 書き割り、北　西東 通行可、1階 【基本、柵とか】
 *      0x2 ↑→・↓ : 書き割り、北南　東 通行可、1階 （柵の西側とか）┃
 *      0x3 ↑→・・ : 書き割り、北　　東 通行可、1階 （柵の西南とか）┗
 *      0x4 ↑・←↓ : 書き割り、北南西　 通行可、1階 （柵の東側とか）   ┃
 *      0x5 ↑・←・ : 書き割り、北　西　 通行可、1階 （柵の東南とか）   ┛
 *      0x6 ↑・・↓ : 書き割り、北南　　 通行可、1階 （両脇に木とか）┃┃
 *      0x7 ↑・・・ : 書き割り、北　　　 通行可、1階 （張り出し的な）┗┛
 *      0x8 ・→←↓ : 書き割り、全方向に 通行可、1階 （草むらなどに）
 *      0x9 ・→←・ : 書き割り、全方向に 通行可、2階
 *      0xA ・→・↓ : 書き割り、全方向に 通行可、3階
 *      0xB ・→・・ : 地面[○] 設定かつ北半分通行不可 （棚などに）(HalfMove.js が必要)
 *      0xC ・・←↓ : 0x1 と同じだが南半分が通行不可 （机などに）(HalfMove.js が必要)
 *      0xD ・・←・ : 0xB と同じだが北の両脇が通行可 （根元とか）(HalfMove.js が必要)
 *      0xE ・・・↓ : 0xC と同じだが南の両脇が通行可 （椅子とか）(HalfMove.js が必要)
 *      0xF ・・・・ : 0x1 と同じだが南の両脇が通行可 （杭などに）(HalfMove.js が必要)
 * 
 * 2. [地形タグ]を3(規定値)に設定
 *      通行設定で侵入可の方向から入ると上を通ります。
 * 　侵入不可の方向から入ると下を通ります。
 * 
 * 3. 崖など回り込み用
 * 　[カウンター]設定
 *      A3・A4の奇数列(屋根・壁上面)
 *      　[○] 全体=高層[☆]
 *      A3・A4の偶数列(壁)
 *      　[○] 全体=回り込み、南方向は通行不可(壁の高さは自動調整)
 *      A3・A4に共通
 *      　[×] 北=回り込み、周囲=通行不可
 * 
 * 4.  橋の立体交差や階段用
 * 　[地形タグ:3]設定
 *      A3の奇数列(屋根)
 *          [○]南北=通行不可、東西=通行
 *          [×]南北=下通行、東西=上通行(立体交差)
 *      A3・A4の偶数列(壁)
 *          [○]南北=通行、東西=通行不可
 *          [×]南北=上通行、東西=下通行(立体交差)
 * 
 * 5.  立体交差
 * 　[カウンター] [地形タグ:3] 設定
 *      A3・A4の奇数列(屋根・壁上面)
 *          [○]全面立体交差
 *          [×]北=立体交差、周囲=通行不可
 * 
 * 6.  上を歩かない壁用の設定
 *      A4の奇数列(壁上面)
 *          [地形タグ:3][×] 北=高層[☆]、全面通行不可
 * 
 * 7. ひとつ上のレイヤーに移動
 * 　A5タイルに[地形タグ:3] で、背景を補完しA2右側レイヤーに移動。
 *      立体交差は機能しないし、A2右側タイルがあれば消える。
 * 
 * 8. 重ね合わせの順番を調節
 * 　<TF_zDef:数値> をイベントのメモに入力。
 * 　数値はy位置に加えられて、仮想的にy位置をずらす。
 * 　キャラ画像は標準環境でy方向に-6ずれているので、例えば8を入れると手前に表示される。
 * 
 * 9. 立体交差の奥手前の指定
 * 　<TF_higherLevel:真偽値> をイベントのメモに入力
 * 　trueだと立体交差の手前(上)、falseだと奥(下)に配置される。
 * 　規定値はfalse。
 * 
 * 10. プラグインコマンドで立体交差の奥手前の指定。
 * 　TF_HIGHER_LEVEL 真偽値 対象(省略可)
 * 　対象は -2~-4:隊列キャラ、-1:プレイヤーキャラ、0:イベント自身(規定値)、1以降:イベントID
 * 
 * 利用規約 : MITライセンス
 */
( () => {
    "use strict";
    const TF_HIGHER_LEVEL = "TF_HIGHER_LEVEL";

    // flag用定数
    const FLAG_NORTH_DIR = 0x8; // 北の通行設定
    const FLAG_UPPER = 0x10; // 高層[☆]
    const FLAG_COUNTER = 0x80; // カウンター
    // flagのマスク
    const MASK_WITHOUT_DIR_UPPER = 0xFF60; // 方向と高層[☆]とカウンターを除いたもの用マスク
    const MASK_WITHOUT_TAG_DIR_UPPER = 0xF60; // 方向と高層[☆]と地形タグとカウンターを除いたもの用マスク
    const MASK_ALL_DIR = 0xF; // 通行設定用マスク

    // 書割り設定
    const FLOOR2_BOARD = 0x19; // 09 書き割り、全方向に 通行可、2階
    const FLOOR3_BOARD = 0x1A; // 10 書き割り、全方向に 通行可、3階

    const MASK_UPPER_DIR = 0x1F; // 高層[☆]と通行設定用マスク
    const FLOOR1_N_FULL = 0x1B; // 11 棚
    const FLOOR1_S_FULL = 0x1C; // 12 机
    const FLOOR1_N_HALF = 0x1D; // 13 椅子(北)
    const FLOOR1_S_HALF = 0x1E; // 14 椅子(南)
    const FLOOR1_S_FLAT = 0x1F; // 15 杭

    const AUTOTILE_BLOCK = 48; // オートタイル1ブロック分のパターン数


    /*---- パラメータパース関数 ----*/
    const PARAM_TRUE = "true";
    const PARAM_ON = "on";
    const TYPE_BOOLEAN = "boolean";
    const TYPE_NUMBER = "number";
    /**
     * 指定したパラメータが、指定した値と同じか。
     * @param {String} paramName パラメータ名
     * @param {String} param 比較する値(小文字)
     * @param {Boolean} defaultParam 規定値
     * @returns {Boolean}
     */
    function conpairPluginParam( paramName, param, defaultParam ) {
        if( pluginParams[ paramName ] ) {
            return pluginParams[ paramName ].toLowerCase() === param;
        } else {
            return defaultParam;
        }
    }

    /**
     * 与えられた文字列に変数が指定されていたら、変数の内容に変換して返す。
     * @param {String} value 変換元の文字列( v[n]形式を含む )
     * @return {String} 変換後の文字列
     */
    function treatValue( value ) {
        if( value === undefined || value === "" ) return "0";
        const result = value.match( /v\[(.+)\]/i );
        if( result === null ) return value;
        const id = parseInt( result[ 1 ], 10 );
        if( isNaN( id ) ) {
            return $gameVariables.valueByName( id );
        } else {
            return $gameVariables.value( id );
        }
    }
    /*--- Game_Variables ---*/
    /**
     * 変数を文字列で指定し、値を返す。
     * @param {String} name 変数(ID, 名前, V[n]による指定が可能)
     */
    Game_Variables.prototype.valueByName = function( name ) {
        return this.value( stringToVariableId( name ) );
    };
    /**
     * 指定された変数のIDを返す。
     * @param {String} name 変数(ID, 名前, V[n]による指定が可能)
     */
    function stringToVariableId( name ) {
        name = treatValue( name );
        let i = $dataSystem.variables.findIndex( i => i === name );
        if( 0 <= i ) return i;
        i = parseInt( name, 10 );
        if( isNaN( i ) ) throw new Error( `I can't find the variable '${name}'` );
        return i;
    }

    /**
     * 文字列を整数に変換して返す。
     * @param {String|Number} value
     * @return {Number} 数値に変換した結果
     */
    function parseIntStrict( value ) {
        if( typeof value === TYPE_NUMBER ) return Math.floor( value );
        const result = parseInt( treatValue( value ), 10 );
        if( isNaN( result ) ) throw Error( "指定した値[" + value + "]が数値ではありません。" );
        return result;
    }

    /**
     * 文字列を実数に変換して返す。
     * @param {String|Number} value
     * @return {Number} 数値に変換した結果
     */
    function parseFloatStrict( value ) {
        if( typeof value === "number" ) return value;
        const result = parseFloat( treatValue( value ) );
        if( isNaN( result ) ) throw Error( "指定した値[" + value + "]が数値ではありません。" );
        return result;
    }

    /**
     * 文字列を真偽値に変換して返す。
     * @param {String|Boolean} value 変換元文字列
     * @returns {Boolean} 
     */
    function parseBooleanStrict( value ) {
        if( typeof value === TYPE_BOOLEAN ) return value;
        value = treatValue( value );
        const result = value.toLowerCase();
        return ( result === PARAM_TRUE || result === PARAM_ON );
    }

    /**
     * character を拡張して隊列メンバーも指定できるようにしたもの。
     * @param {Game_Interpreter} interpreter インタプリタ
     * @param {Number} id 拡張イベントID
     * @returns {Game_CharacterBase}
     */
    function getEventById( interpreter, id ) {
        if( id < -1 ) {
            return $gamePlayer.followers().follower( -2 - id );			// 隊列メンバー(0〜2)
        } else {
            return interpreter.character( id );			// プレイヤーキャラおよびイベント
        }
    }

    const EVENT_THIS = "this";
    const EVENT_SELF = "self";
    const EVENT_PLAYER = "player";
    const EVENT_FOLLOWER0 = "follower0";
    const EVENT_FOLLOWER1 = "follower1";
    const EVENT_FOLLOWER2 = "follower2";
    /**
     * 文字列をイベントIDへ変換
     * @param {String} value イベントIDの番号か識別子
     * @returns {Number} 拡張イベントID
     */
    function stringToEventId( value ) {
        value = treatValue( value );
        const result = parseInt( value, 10 );
        if( !isNaN( result ) ) return result;

        const lowValue = value.toLowerCase();
        switch( lowValue ) {
            case EVENT_THIS:
            case EVENT_SELF: return 0;
            case EVENT_PLAYER: return -1;
            case EVENT_FOLLOWER0: return -2;
            case EVENT_FOLLOWER1: return -3;
            case EVENT_FOLLOWER2: return -4;
        }

        // イベント名で指定できるようにする
        const i = $gameMap._events.findIndex( event => {
            if( event === undefined ) return false;	// _events[0] が undefined なので無視

            const eventId = event._eventId;
            return $dataMap.events[ eventId ].name === value;
        } );
        if( i === -1 ) throw Error( `指定したイベント[${value}]がありません。` );
        return i;
    }

    /**
     * パラメータを受け取る
     */
    const pluginParams = PluginManager.parameters( "TF_LayeredMap" );
    const TF_UseLayeredCounter = parseBooleanStrict( pluginParams.UseLayeredCounter );
    const TF_BillboardPriority = conpairPluginParam( "BillboardPriority", "front", false ) ? Infinity : -Infinity;
    const TF_IsA2FullCollision = parseBooleanStrict( pluginParams.IsA2FullCollision );
    const TF_IsA3UpperOpen = parseBooleanStrict( pluginParams.IsA3UpperOpen );
    const TF_IsA4UpperOpen = parseBooleanStrict( pluginParams.IsA4UpperOpen );
    const TF_OverpassTerrainTag = parseIntStrict( pluginParams.OverpassTerrainTag );
    const TF_CharacterSize = parseIntStrict( pluginParams.CharacterSize );

    /*---- Game_Interpreter ----*/
    /**
     * プラグインコマンドの実行
     */
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function( command, args ) {
        _Game_Interpreter_pluginCommand.apply( this, arguments );

        // _higherLevel のON/OFF
        if( command.toUpperCase() !== TF_HIGHER_LEVEL ) return;

        const targetCharacter = getEventById( this, stringToEventId( args[ 1 ] ) );
        targetCharacter._higherLevel = parseBooleanStrict( args[ 0 ] );
    };


    /*---- Tilemap ----*/
    /**
     * その位置が立体交差であるかチェック(地形タグで決定)
     */
    const _Tilemap_isOverpassPosition = Tilemap.prototype._isOverpassPosition;
    Tilemap.prototype._isOverpassPosition = function( x, y ) {
        if( TF_OverpassTerrainTag !== 0 && $gameMap.terrainTag( x, y ) === TF_OverpassTerrainTag ) return true;
        return _Tilemap_isOverpassPosition.apply( this, arguments );
    };

    /**
     * イベントの重なりのソート用関数。
     */
    Tilemap.prototype._compareChildOrder = function( a, b ) {
        if( a.z !== b.z ) return a.z - b.z;
        const zDefA = a._character ? a._character._TF_zDef : 0;
        const zDefB = b._character ? b._character._TF_zDef : 0;
        const ay = a.y + ( zDefA ? zDefA : 0 );
        const by = b.y + ( zDefB ? zDefB : 0 );
        if( ay !== by ) {
            return ay - by;
        }
        return a.spriteId - b.spriteId;
    };

    /*---- Tilemap ----*/
    /**
     * タイルセットの画像を設定する。
     * マップ開始時に呼ばれる。
     */
    const _Tilemap_refreshTileset = Tilemap.prototype.refreshTileset;
    Tilemap.prototype.refreshTileset = function() {
        _Tilemap_refreshTileset.call( this );

        // BitmapをPIXI.Textureにコンバート
        const bitmaps = this.bitmaps.map( function( x ) {
            return x._baseTexture ? new PIXI.Texture( x._baseTexture ) : x;
        } );

        // 書き割りのタイルセットの画像をアップデート
        for( let curItem of this.TF_billboards ) {
            curItem.children[ 0 ].setBitmaps( bitmaps );
        }
    };

    /**
     * 書き割りレイヤーの生成と追加。
     */
    const _Tilemap_createLayers = Tilemap.prototype._createLayers;
    Tilemap.prototype._createLayers = function() {
        _Tilemap_createLayers.call( this );

        // 書き割り風オブジェクトを生成
        // +3 はスクロールの際にはみ出す部分と2・3階用
        const th = this._tileHeight;
        const tileRows = Math.ceil( this._height / th ) + 3;

        if( !this.hasOwnProperty( "TF_billboards" ) ) {
            this.TF_billboards = [];
        }

        for( let i = 0; i < tileRows; i++ ) {
            const billboard = new Tilemap.Layer();
            billboard.z = 3;
            billboard.spriteId = TF_BillboardPriority;
            this.addChild( billboard );
            this.TF_billboards.push( billboard );
        }
    };

    /**
     * 描画前に書き割りの中を空にしておく。
     */
    const _Tilemap__addAllSpots = Tilemap.prototype._addAllSpots;
    Tilemap.prototype._addAllSpots = function( startX, startY ) {
        for( const curItem of this.TF_billboards ) {
            curItem.clear();
        }

        _Tilemap__addAllSpots.apply( this, arguments );
    };


    /**
     * タイルを描画(upperLayer,lowerLayer,dx,dy は親の変数を使う)
     * @param {Number} tileId タイルID
     */
    Tilemap.prototype._addSpotTile = function( tileId, dx, dy ) {
        const y = dy / this._tileHeight;
        /**
         * 指定位置の壁の状態を調べる。
         * @param {Number} tileId タイルID
         * @returns {Number}  0:壁ではない, 1:下端, 2:上下に接続した壁, 3:上端
         */
        const getWallSideType = ( tileId ) => {
            if( !Tilemap.isWallSideTile( tileId ) ) return 0; // 壁タイルではない

            // autotileShape のビットは 下右上左 に対応しているので、それで判定
            const autotileShape = Tilemap.getAutotileShape( tileId );
            if( autotileShape & 2 ) return 3;
            if( autotileShape & 8 ) return 1;
            return 2;
        };

        /**
         * 優先階(priorityFloor)を得る
         * @param {Number} tileId タイルID
         */
        const getPriorityFloor = ( tileId ) => {
            if( ( this.flags[ tileId ] & MASK_UPPER_DIR ) === FLOOR2_BOARD ) return 2;
            if( ( this.flags[ tileId ] & MASK_UPPER_DIR ) === FLOOR3_BOARD ) return 3;
            return 1;
        };

        if( !this._isHigherTile( tileId )
            || ( this.flags[ tileId ] & MASK_UPPER_DIR ) === FLOOR1_N_FULL
            || ( this.flags[ tileId ] & MASK_UPPER_DIR ) === FLOOR1_N_HALF
        ) {
            // 高層タイルではない
            this._addTile( this._lowerLayer, tileId, dx, dy );
            return;
        }

        /**
         * 表示階(floorNumber)を得る
         * @param {Number} priorityFloor 優先階
         */
        const getFloorNumber = ( priorityFloor ) => {
            if( priorityFloor === 2 || priorityFloor === 3 ) {
                const wallSideType = getWallSideType( this._readMapData( mx, my + 1, 1 ) );

                if( wallSideType === 1 ) return 2;
                if( wallSideType === 2 ) return 3;
                if( wallSideType === 3 ) return priorityFloor;

                // 壁ではない場合
                return priorityFloor;
                // TODO : B〜E タイルのオート位置設定を行う…か?
            }
            return 1;
        };

        const floorNumber = getFloorNumber( getPriorityFloor( tileId ) );

        if( floorNumber === 2 ) {
            // 2階設定は、ひとつ下の書き割りに書き込む
            this._addTile( this.TF_billboards[ y + 1 ], tileId, dx, -this._tileHeight * 2 );

        } else if( floorNumber === 3 ) {
            // 3階設定は、ふたつ下の書き割りに書き込む
            this._addTile( this.TF_billboards[ y + 2 ], tileId, dx, -this._tileHeight * 3 );

        } else if( this.flags[ tileId ] & MASK_ALL_DIR ) {
            // 通行不可設定のどれかがONだと書き割り
            this._addTile( this.TF_billboards[ y ], tileId, dx, -this._tileHeight );

        } else {
            // 全方向通行可の場合は通常の高層[☆]表示
            this._addTile( this._upperLayer, tileId, dx, dy );
        }
    };

    /**
     * (スクロールに合わせて)書き割りの表示位置を変更。
     * @param {Number} startX
     * @param {Number} startY
     */
    const _Tilemap_updateTransform = Tilemap.prototype.updateTransform;
    Tilemap.prototype.updateTransform = function() {
        const ox = Math.ceil( this.origin.x );
        const oy = Math.ceil( this.origin.y );
        const startX = Math.floor( ( ox - this._margin ) / this._tileWidth );
        const startY = Math.floor( ( oy - this._margin ) / this._tileHeight );
        const posX = startX * this._tileWidth - ox;
        const posY = startY * this._tileHeight - oy;
        const l = this.TF_billboards.length;
        for( let i = 0; i < l; i++ ) {
            const curItem = this.TF_billboards[ i ];
            curItem.x = posX;
            curItem.y = posY + this._tileHeight * ( i + 1 );
        };

        _Tilemap_updateTransform.apply( this, arguments );
    };

    /*---- DataManager ---*/
    /**
     * 読み込み直後に、タイルセットデータを書き換える。
     * @param {Object} object 読み込んだデータ
     */
    const _DataManager_onLoad = DataManager.onLoad;
    DataManager.onLoad = function( object ) {
        _DataManager_onLoad.apply( this, arguments );
        if( object !== $dataTilesets ) return;

        // 全タイルセットに対してflagの走査・変更
        for( const curTileset of $dataTilesets ) {
            if( !curTileset ) continue;
            treatA2Tilesets( curTileset.flags );
            treatA3Tilesets( curTileset.flags );
            treatA4Tilesets( curTileset.flags );
        }
    };
    /* ---- DataManager.onLoad 用ユーティリティ ---- */
    // $gameMap が無い段階なので、必要な関数を代わりに定義したり、flags をまる渡ししたりしてる

    const OPTT = ( TF_OverpassTerrainTag << 12 ); // 立体交差地形タグ

    /**
     * カウンター設定か。
     * @param {Number} tileFlag タイルのフラグ情報
     */
    function isCounterTile( tileFlag ) {
        return ( tileFlag & FLAG_COUNTER ) === FLAG_COUNTER;
    }
    /**
     * 指定タイルが立体交差地形タグを持っているか。
     * @param {Number} tileFlag タイルのフラグ情報
     */
    function isOverpassTile( tileFlag ) {
        if( TF_OverpassTerrainTag === 0 ) return false;
        return tileFlag >> 12 === TF_OverpassTerrainTag;
    }

    /**
     * 指定タイルが全方位に衝突判定を持っているか。
     * @param {Number} tileFlag タイルのフラグ情報
     */
    function isFullCollisionTile( tileFlag ) {
        return MASK_ALL_DIR === ( tileFlag & MASK_ALL_DIR );
    }
    /**
     * 指定タイルが衝突判定を持っているか。
     * @param {Number} tileFlag タイルのフラグ情報
     */
    function isCollisionTile( tileFlag ) {
        return 0 < ( tileFlag & MASK_ALL_DIR );
    }

    // A2タイルの走査・変更。
    function treatA2Tilesets( flags ) {
        for( let tileId = Tilemap.TILE_ID_A2; tileId < Tilemap.TILE_ID_A3; tileId += AUTOTILE_BLOCK ) {
            const autotileFlags =
                ( isCounterTile( flags[ tileId ] ) ? 2 : 0 ) +
                ( isCollisionTile( flags[ tileId + 46 ] ) ? 1 : 0 );
            switch( autotileFlags ) {
                case 1: if( !TF_IsA2FullCollision ) { setEmptyLinePass( flags, tileId ); }; break;   // [×]
                case 3: if( TF_UseLayeredCounter ) { setCounterPass( flags, tileId ); }; break;   // [×][♢]
            }
        }
    }

    // A3タイルの走査・変更。
    function treatA3Tilesets( flags ) {
        for( let tileId = Tilemap.TILE_ID_A3; tileId < Tilemap.TILE_ID_A4; tileId += AUTOTILE_BLOCK ) {
            const autotileFlags =
                ( Tilemap.isRoofTile( tileId ) ? 8 : 0 ) +
                ( isOverpassTile( flags[ tileId ] ) ? 4 : 0 ) +
                ( isCounterTile( flags[ tileId ] ) ? 2 : 0 ) +
                ( isCollisionTile( flags[ tileId + 15 ] ) ? 1 : 0 );
            switch( autotileFlags ) {
                // 側面
                case 2: setWallSidePass( flags, tileId ); break;   // [○][♢]
                case 3: setWallSideEdgePass( flags, tileId ); break;   // [×][♢]
                case 4: setBridgeSNPass( flags, tileId, false ); break;    // [○][TT]
                case 5: setBridgeSNPass( flags, tileId, true ); break;   // [×][TT]
                // case 6 : ; break;   // [○][♢][TT]
                // case 7 : ; break;   // [×][♢][TT]

                // 上面
                case 9: setRoofBottomPass( flags, tileId ); break;   // [×]
                case 10: setAutoUpperPass( flags, tileId, 16 ); break;   // [○][♢]
                case 11: setRoofUpperPass( flags, tileId ); break;   // [×][♢]
                case 12: setBridgeWEPass( flags, tileId, false ); break;   // [○][TT]
                case 13: setBridgeWEPass( flags, tileId, true ); break;   // [×][TT]
                case 14: setEmptySquarePass( flags, tileId ); break;     // [○][♢][TT]
                case 15: setA3UpperOverPass( flags, tileId ); break;       // [×][♢][TT]
            }
        }
    }

    // A4タイルの走査・変更。
    function treatA4Tilesets( flags ) {
        for( let tileId = Tilemap.TILE_ID_A4; tileId < Tilemap.TILE_ID_MAX; tileId += AUTOTILE_BLOCK ) {
            const autotileFlags =
                ( Tilemap.isWallTopTile( tileId ) ? 8 : 0 ) +
                ( isOverpassTile( flags[ tileId ] ) ? 4 : 0 ) +
                ( isCounterTile( flags[ tileId ] ) ? 2 : 0 ) +
                ( isCollisionTile( flags[ tileId + 46 ] ) ? 1 : 0 );
            switch( autotileFlags ) {
                // 側面
                case 2: setWallSidePass( flags, tileId ); break;                  // [○][♢]
                case 3: setWallSideEdgePass( flags, tileId ); break;       // [×][♢]
                case 4: setBridgeSNPass( flags, tileId, false ); break;    // [○][TT]
                case 5: setBridgeSNPass( flags, tileId, true ); break;   // [×][TT]
                // case 6 : ; break;   // [○][♢][TT]
                // case 7 : ; break;   // [×][♢][TT]

                // 上面
                case 9: if( !TF_IsA4UpperOpen ) { setEmptyLinePass( flags, tileId ); } break;   // [×]
                case 10: setAutoUpperPass( flags, tileId, 47 ); break;   // [○][♢]
                case 11: setA4UpperPass( flags, tileId ); break;               // [×][♢]
                // case 12 : ; break;       // [○][TT]
                case 13: setA4UpperStarPass( flags, tileId ); break;   // [×][TT]
                case 14: setEmptyLinePass( flags, tileId ); break;   // [○][♢][TT] 
                case 15: setA4UpperOverPass( flags, tileId ); break;       // [×][♢][TT]
            }
        }
    }

    /**
     * 衝突判定を指定した設定に変換。
     * @param {Array} flags 
     * @param {Number} tileId 
     * @param {Number} mask flagのマスク
     * @param {Array} collisionSetting 適用するflag設定 
     */
    function replaceCollision( flags, tileId, mask, collisionSetting ) {
        const maxNum = collisionSetting.length;
        for( let i = 0; i < maxNum; i++ ) {
            flags[ tileId + i ] = flags[ tileId + i ] & mask | collisionSetting[ i ];
        }
    }

    /**
     * 高層[☆] 全通行に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     * @param {Number} maxNum 変更数
     */
    function setAutoUpperPass( flags, tileId, maxNum ) {
        for( let i = 0; i < maxNum; i++ ) {
            flags[ tileId + i ] = flags[ tileId + i ] & MASK_WITHOUT_DIR_UPPER | FLAG_UPPER;
        }
    }
    /**
     * カウンター用に変更。
     * 地面(カウンター) : 北が半分侵入可書き割り、■通行不可
     * [A2 右側][×][♢][UseLayeredCounter:ON]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setCounterPass( flags, tileId ) {
        const COUNTER_PASS = [
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 28, 28, 28, 28,
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 28, 28, 28, 28, 28, 15, 15,
            15, 15, 28, 28, 15, 28, 28, 28,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER | FLAG_COUNTER, COUNTER_PASS );
    }
    /**
     * 中空の地形に変更。
     * [A2][×][IsA2FullCollision:OFF] □周囲=通行不可
     * [A4][○][♢][TT] □周囲=通行不可
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setEmptyLinePass( flags, tileId ) {
        const EMPTY_PASS = [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            2, 2, 2, 2, 8, 8, 8, 8,
            4, 4, 4, 4, 1, 1, 1, 1,
            6, 9, 10, 10, 12, 12, 5, 5,
            3, 3, 14, 11, 7, 13, 15, 15
        ];
        //if( isCrossPass ) EMPTY_PASS.map( v => OPTT + v );
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, EMPTY_PASS );
    };
    /**
     * 屋根 : 北が立体交差、他は周囲通行不可に変更。
     * [A3 奇数列][×][♢][TT]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setA3UpperOverPass( flags, tileId ) {
        const A3_UPPER_OVERPASS = TF_IsA3UpperOpen ? [
            0, 2, OPTT + 8, OPTT + 10,
            4, 6, OPTT + 12, OPTT + 14,
            0, 2, OPTT + 8, OPTT + 10,
            4, 6, OPTT + 12, OPTT + 14,
        ] : [
                0, 2, OPTT + 8, OPTT + 10,
                4, 6, OPTT + 12, OPTT + 14,
                1, 3, OPTT + 9, OPTT + 11,
                5, 7, OPTT + 15, OPTT + 13,
            ];
        replaceCollision( flags, tileId, MASK_WITHOUT_TAG_DIR_UPPER, A3_UPPER_OVERPASS );
    }
    /**
     * 屋根 : 北が書き割り、他は周囲通行不可に変更。
     * [A3 奇数列][×][カウンター]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setRoofUpperPass( flags, tileId ) {
        const A3_UPPER_PASS = TF_IsA3UpperOpen ? [
            0, 2, 17, 17,
            4, 6, 17, 17,
            0, 2, 17, 17,
            4, 6, 17, 17,
        ] : [
                0, 2, 17, 17,
                4, 6, 17, 17,
                1, 3, 17, 17,
                5, 7, 17, 17,
            ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, A3_UPPER_PASS );
    }
    /**
     * 壁(上面) : 北が立体交差、他は周囲通行不可に変更。
     * [A4 奇数列][×][カウンター][OverpassTerrainTag]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setA4UpperOverPass( flags, tileId ) {
        const A4_UPPER_OVERPASS = TF_IsA4UpperOpen ? [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            2, 2, 2, 2, OPTT + 8, OPTT + 8, OPTT + 8, OPTT + 8,
            4, 4, 4, 4, 0, 0, 0, 0,
            6, OPTT + 8, OPTT + 10, OPTT + 10, OPTT + 12, OPTT + 12, 4, 4,
            2, 2, OPTT + 14, OPTT + 10, 6, OPTT + 12, OPTT + 14, OPTT + 15,
        ] : [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                2, 2, 2, 2, OPTT + 8, OPTT + 8, OPTT + 8, OPTT + 8,
                4, 4, 4, 4, 1, 1, 1, 1,
                6, OPTT + 9, OPTT + 10, OPTT + 10, OPTT + 12, OPTT + 12, 5, 5,
                3, 3, OPTT + 14, OPTT + 11, 7, OPTT + 13, OPTT + 15, OPTT + 15,
            ];
        replaceCollision( flags, tileId, MASK_WITHOUT_TAG_DIR_UPPER, A4_UPPER_OVERPASS );
    }
    /**
     * 壁(上面) : 北が書き割り、他は周囲通行不可に変更。
     * [A4 奇数列][×][カウンター]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setA4UpperPass( flags, tileId ) {
        const A4_UPPER_PASS = TF_IsA4UpperOpen ? [
            0, 2, 4, 6, 0, 2, 4, 6,
            0, 2, 4, 6, 0, 2, 4, 6,
            2, 6, 2, 6, 17, 17, 17, 17,
            4, 4, 6, 6, 0, 2, 4, 6,
            6, 17, 17, 17, 17, 17, 4, 6,
            2, 6, 17, 17, 6, 17, 17, 17,
        ] : [
                0, 2, 4, 6, 0, 2, 4, 6,
                0, 2, 4, 6, 0, 2, 4, 6,
                2, 6, 2, 6, 17, 17, 17, 17,
                4, 4, 6, 6, 1, 3, 5, 7,
                6, 17, 17, 17, 17, 17, 5, 7,
                3, 7, 17, 17, 7, 17, 17, 17,
            ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, A4_UPPER_PASS );
    }
    /**
     * 壁(上面) : 北が☆、他は通行不可に変更。
     * [A4 奇数列][○][TT]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setA4UpperStarPass( flags, tileId ) {
        const A4_UPPER_STAR_PASS = [
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 15, 15, 15, 16, 16, 16, 16,
            15, 15, 15, 15, 15, 15, 15, 15,
            15, 16, 16, 16, 16, 16, 15, 15,
            15, 15, 16, 16, 15, 16, 16, 16,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_TAG_DIR_UPPER, A4_UPPER_STAR_PASS );
    }
    /**
     * 壁(側面):南が書き割り、他は通行可に変更。
     * [A3・A4 偶数列][○]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setWallSideEdgePass( flags, tileId ) {
        const WALL_SIDE_PASS_EDGE = [
            15, 15, 17, 17,
            15, 15, 17, 17,
            15, 15, 17, 17,
            15, 15, 17, 17,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, WALL_SIDE_PASS_EDGE );
    }
    /**
     * 壁(側面): 北が書き割り、他は全通行不可に変更。
     * [A3・A4 偶数列][○][♢]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setWallSidePass( flags, tileId ) {
        const WALL_SIDE_PASS = [
            25, 25, 26, 26,
            25, 25, 26, 26,
            17, 17, 17, 17,
            17, 17, 17, 17,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, WALL_SIDE_PASS );
    }
    /**
     * 屋根 (地面) : 周囲通行不可に変更。
     * [A3 奇数列][×]
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setRoofBottomPass( flags, tileId ) {
        if( TF_IsA3UpperOpen ) {
            setSquareOpenPass( flags, tileId );
        } else {
            setEmptySquarePass( flags, tileId );
        }
    }
    /**
     * 屋根 (地面) : 南以外通行不可に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setSquareOpenPass( flags, tileId ) {
        const SQUARE_PASS = [
            0, 2, 8, 10,
            4, 6, 12, 14,
            0, 2, 8, 10,
            4, 6, 12, 14,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, SQUARE_PASS );
    }
    /**
     * 屋根 (地面) : 全周通行不可に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     */
    function setEmptySquarePass( flags, tileId ) {
        const SQUARE_PASS = [
            0, 2, 8, 10,
            4, 6, 12, 14,
            1, 3, 9, 11,
            5, 7, 13, 15,
        ];
        replaceCollision( flags, tileId, MASK_WITHOUT_DIR_UPPER, SQUARE_PASS );
    }
    /**
     * 南北の橋設定に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     * @param {Boolean} isCrossPass 立体交差か
     */
    function setBridgeSNPass( flags, tileId, isCrossPass ) {
        const BRIDGE_SN_PASS = isCrossPass ? [
            OPTT + 0, OPTT + 2, OPTT + 0, OPTT + 2,
            OPTT + 4, OPTT + 6, OPTT + 4, OPTT + 6,
            OPTT + 0, OPTT + 2, OPTT + 0, OPTT + 2,
            OPTT + 4, OPTT + 6, OPTT + 4, OPTT + 6,
        ] : [
                0, 2, 0, 2,
                4, 6, 4, 6,
                0, 2, 0, 2,
                4, 6, 4, 6,
            ];
        replaceCollision( flags, tileId, MASK_WITHOUT_TAG_DIR_UPPER, BRIDGE_SN_PASS );
    }
    /**
     * 東西の橋設定に変更。
     * @param {Array<Number>} flags 地形フラグの配列
     * @param {Number} tileId タイルID
     * @param {Boolean} isCrossPass 立体交差か
     */
    function setBridgeWEPass( flags, tileId, isCrossPass ) {
        const BRIDGE_WE_PASS = isCrossPass ? [
            OPTT + 0, OPTT + 0, OPTT + 8, OPTT + 8,
            OPTT + 0, OPTT + 0, OPTT + 8, OPTT + 8,
            OPTT + 1, OPTT + 1, OPTT + 9, OPTT + 9,
            OPTT + 1, OPTT + 1, OPTT + 9, OPTT + 9,
        ] : [
                0, 0, 8, 8,
                0, 0, 8, 8,
                1, 1, 9, 9,
                1, 1, 9, 9,
            ];
        replaceCollision( flags, tileId, MASK_WITHOUT_TAG_DIR_UPPER, BRIDGE_WE_PASS );
    }



    /*---- Scene_Map ---*/
    /**
     * シーン表示前に、マップデータを書き換える。
     */
    const _Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function() {
        if( this._transfer ) $gamePlayer.performTransfer();    // シーン遷移時のマップデータ置き換え処理
        treatDataMap();
        _Scene_Map_onMapLoaded.call( this );

        /**
         * カウンター設定のA3・A4オートタイルの箇所に、低層の補完タイルを設定。
         */
        function treatDataMap() {
            const flags = $gameMap.tilesetFlags();
            for( let y = 0; y < $dataMap.height; y++ ) {
                for( let x = 0; x < $dataMap.width; x++ ) {
                    const tileId = getMapData( x, y, 0 );

                    // 対象タイルを上層へ TODO: レイヤー機能を考慮して配置を考えること
                    if( Tilemap.isTileA5( tileId ) && isOverpassTile( flags[ tileId ] ) ) {
                        setMapData( x, y, 1, tileId );
                    } else if( isA3A4Tile( tileId ) ) {
                        if( isOverpassTile( flags[ tileId ] ) ) {
                            setMapData( x, y, 2, tileId );
                        } else if( !isFullCollisionTile( flags[ tileId ] ) && isCollisionTile( flags[ tileId ] ) ) {
                            setMapData( x, y, 1, tileId );
                        }
                    }
                }
            }

            /**
             * A3・A4タイルか。
             * @param {Number} tileId タイルID
             * @returns {Boolean} 
             */
            function isA3A4Tile( tileId ) {
                return ( Tilemap.isTileA3( tileId ) || Tilemap.isTileA4( tileId ) );
            }
            /**
             * 指定位置のタイルIDを返す。
             * @param {Number} x x座標(タイル数)
             * @param {Number} y y座標(タイル数)
             * @param {*} z レイヤー位置
             * @returns {Number} タイルID
             */
            function getMapData( x, y, z ) {
                return $dataMap.data[ x + ( $gameMap.roundY( y ) + z * $dataMap.height ) * $dataMap.width ];
            }
            /**
             * マップデータにタイルIDを書き込む。
             * @param {Number} x x座標(タイル数)
             * @param {Number} y y座標(タイル数)
             * @param {Number} z レイヤー位置
             * @param {Number} tileId タイルID
             */
            function setMapData( x, y, z, tileId ) {
                $dataMap.data[ x + ( $gameMap.roundY( y ) + z * $dataMap.height ) * $dataMap.width ] = tileId;
            }

        }
    };


    /*---- Game_CharacterBase ----*/
    /**
     * レイヤー位置を返す。
     * @returns {Number} z位置(立体交差上:5、低層:3)
     */
    const _Game_CharacterBase_screenZ = Game_CharacterBase.prototype.screenZ;
    Game_CharacterBase.prototype.screenZ = function() {
        return this._higherLevel ? 5 : _Game_CharacterBase_screenZ.call( this );
    };

    /**
     * 指定座標がイベントで塞がれているか。高さレベルを考慮する。
     * TODO : HalfMove.js とコンフリクトするので、回避方法を探る
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @returns {Boolean} 
     */
    //const _Game_CharacterBase_isCollidedWithEvents = Game_CharacterBase.prototype.isCollidedWithEvents;
    // Game_CharacterBase.prototype.isCollidedWithEvents = function( x, y ){
    //     const events = $gameMap.eventsXyNt( x, y );
    //     return events.some( event => Boolean( this._higherLevel ) === Boolean( event._higherLevel ) );
    // };

    /**
     * 指定方向への移動が可能か
     * キャラクタ半分の位置が関係するものは、ここで判定。
     * @param {Number} halfX タイル数(0.5刻み)
     * @param {Number} halfY タイル数(0.5刻み)
     * @param {Number} d 向き(テンキー対応)
     * @returns {Boolean} 移動可能か
     */
    const _Game_CharacterBase_isMapPassable = Game_CharacterBase.prototype.isMapPassable;
    Game_CharacterBase.prototype.isMapPassable = function( halfX, halfY, d ) {
        const x = Math.floor( halfX + 0.5 );
        const y = Math.floor( halfY + 0.5 );
        const halfPos = getHalfPos( halfX, halfY );
        const dx = getDx( d );
        // const dy =getDy( d );
        const rd = this.reverseDir( d );
        const flags = $gameMap.tilesetFlags();

        /**
         * 指定位置に指定flagがあるか
         * @param {Number} x タイル数
         * @param {Number} y タイル数
         * @param {Number} collisionType 調べるタイルのflag(高層[☆]と通行)
         * @returns {Boolean} 
         */
        const checkCollision = ( x, y, collisionType ) => {
            const tiles = $gameMap.allTiles( Math.floor( x ), Math.floor( y ) );

            for( let i = 0; i < tiles.length; i++ ) {
                if( ( flags[ tiles[ i ] ] & MASK_UPPER_DIR ) === collisionType ) return true;
            }
            return false;
        };

        const isFurniturePassable = () => {
            // FLOOR1_N_FULL
            if( d === 2 ) {
                if( ( halfPos === 2 || halfPos === 3 ) && checkCollision( x, y + 1, FLOOR1_N_FULL ) ) return false;
                if( halfPos === 2 && checkCollision( x - 1, y + 1, FLOOR1_N_FULL ) ) return false;
            } else if( d === 8 ) {
                if( ( halfPos === 2 || halfPos === 3 ) && checkCollision( x, y, FLOOR1_N_FULL ) ) return false;
                if( ( halfPos === 2 ) && checkCollision( x - 1, y, FLOOR1_N_FULL ) ) return false;
            } else if( d === 4 || d === 6 ) {
                if( halfPos === 1 && checkCollision( x + dx, y, FLOOR1_N_FULL ) ) return false;
            }

            //FLOOR1_S_FULL
            if( d === 2 ) {
                if( ( halfPos === 0 || halfPos === 1 ) && checkCollision( x, y, FLOOR1_S_FULL ) ) return false;
                if( halfPos === 0 && checkCollision( x - 1, y, FLOOR1_S_FULL ) ) return false;
            } else if( d === 8 ) {
                if( ( halfPos === 0 || halfPos === 1 ) && checkCollision( x, y - 1, FLOOR1_S_FULL ) ) return false;
                if( halfPos === 0 && checkCollision( x - 1, y - 1, FLOOR1_S_FULL ) ) return false;
            } else if( d === 4 || d === 6 ) {
                if( halfPos === 3 && checkCollision( x + dx, y, FLOOR1_S_FULL ) ) return false;
            }

            // FLOOR1_N_HALF
            if( d === 2 ) {
                if( halfPos === 3 && checkCollision( x, y + 1, FLOOR1_N_HALF ) ) return false;
            } else if( d === 8 ) {
                if( halfPos === 3 && checkCollision( x, y, FLOOR1_N_HALF ) ) return false;
            } else if( d === 4 ) {
                if( halfPos === 0 && checkCollision( x - 1, y, FLOOR1_N_HALF ) ) return false;
            } else if( d === 6 ) {
                if( halfPos === 0 && checkCollision( x, y, FLOOR1_N_HALF ) ) return false;
            }

            // FLOOR1_S_HALF
            if( d === 2 ) {
                if( halfPos === 1 && checkCollision( x, y, FLOOR1_S_HALF ) ) return false;
            } else if( d === 8 ) {
                if( halfPos === 1 && checkCollision( x, y - 1, FLOOR1_S_HALF ) ) return false;
            } else if( d === 4 ) {
                if( halfPos === 2 && checkCollision( x - 1, y, FLOOR1_S_HALF ) ) return false;
            } else if( d === 6 ) {
                if( halfPos === 2 && checkCollision( x, y, FLOOR1_S_HALF ) ) return false;
            }

            // FLOOR1_S_FLAT
            if( d === 2 ) {
                if( halfPos === 3 && checkCollision( x, y, FLOOR1_S_FLAT ) ) return false;
            } else if( d === 8 ) {
                if( halfPos === 1 && checkCollision( x, y - 1, FLOOR1_S_FLAT ) ) return false;
            }

            return null;
        };

        // Overpass タグが設定されていない
        if( TF_OverpassTerrainTag === 0 ) {
            const isFPassable = isFurniturePassable();
            if( isFPassable !== null ) return isFPassable;
            return _Game_CharacterBase_isMapPassable.apply( this, arguments );
        }


        /*---- Overpass 用のプログラム ----*/

        // 立体交差の下では、家具の衝突判定は行わない
        if( this._higherLevel || ( !this._higherLevel && !isOverpassTileAt( x, y ) ) ) {
            const isFPassable = isFurniturePassable();
            if( isFPassable !== null ) return isFPassable;
        }

        const isOverpassMapPassable = () => {
            if( isOverpassTileAt( x, y ) ) {
                // 下を潜っている状態は端の通行判定を逆転
                if( d === 2 ) {
                    if( ( halfPos === 2 || halfPos === 3 ) &&
                        !isOverpassTileAt( x, y + 1 ) && checkOverpassCollision( x, y, 2 ) === false
                    ) return false;
                } else if( d === 8 ) {
                    if( halfPos === 2 || halfPos === 3 ) {
                        if( TF_CharacterSize === 2 ) {
                            if( !isOverpassTileAt( x, y - 2 ) && checkOverpassCollision( x, y - 1, 8 ) === false ) return false;
                        } else if( !isOverpassTileAt( x, y - 1 ) && checkOverpassCollision( x, y, 8 ) === false ) return false;
                    }
                } else if( d === 4 || d === 6 ) {
                    if( ( halfPos === 1 || halfPos === 3 ) &&
                        !isOverpassTileAt( x + dx, y ) && checkOverpassCollision( x, y, d ) === false
                    ) return false;
                }
                return true;
            }

            // 東の境界
            if( isOverpassTileAt( x - 1, y ) ) {
                if( halfPos === 0 ) return true;
                if( halfPos === 2 ) {
                    if( d === 2 ) {
                        if( !isOverpassTileAt( x - 1, y + 1 ) && checkOverpassCollision( x - 1, y, 2 ) === false ) return false;
                    } else if( d === 8 ) {
                        if( TF_CharacterSize === 2 ) {
                            if( !isOverpassTileAt( x - 1, y - 2 ) && checkOverpassCollision( x - 1, y - 1, 8 ) === false ) return false;
                        } else if( !isOverpassTileAt( x - 1, y - 1 ) && checkOverpassCollision( x - 1, y, 8 ) === false ) return false;
                    }
                    return true;
                }
            } else if( d === 8 && halfPos === 0 && checkOverpassCollisionBit( x - 1, y - 1, 5 ) ) return true; // 東の角┘

            // 潜る
            if( d === 2 ) {
                if( halfPos === 2 ) {
                    if( checkOverpassCollisionBit( x - 1, y + 1, 12 ) ) return true; // 東の角┐
                    if( checkOverpassCollisionBit( x, y + 1, 9 ) ) return true; // 西の角┌
                    if( checkOverpassCollision( x, y + 1, 8 ) ) {
                        if( checkOverpassCollision( x - 1, y + 1, 8 ) ) return true;
                    }
                } else if( halfPos === 3 ) {
                    if( checkOverpassCollision( x, y + 1, 8 ) ) return true;
                }
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( checkOverpassCollisionBit( x, y - 1, 3 ) ) return true; // 西の角└
                    if( checkOverpassCollision( x, y - 1, 2 ) && checkOverpassCollision( x - 1, y - 1, 2 ) ) return true;
                } else if( halfPos === 1 ) {
                    if( checkOverpassCollision( x, y - 1, 2 ) ) return true;
                }
            } else if( d === 4 || d === 6 ) {
                if( checkOverpassCollision( x + dx, y, rd ) ) {
                    if( checkOverpassCollision( x + dx, y - 1, rd ) ) {
                        if( halfPos === 3 ) return true;
                        if( halfPos === 1 && TF_CharacterSize === 1 || checkOverpassCollision( x + dx, y - 2, rd ) ) return true;
                    }
                    if( ( halfPos === 1 || halfPos === 3 ) && checkOverpassCollision( x + dx, y, 8 ) ) return true;   // ┌西東┐の角
                }
            }


            // 境界の北の衝突判定
            if( d === 2 ) {
                if( halfPos === 0 && !isOverpassTileAt( x, y ) && !isOverpassTileAt( x - 1, y ) ) {
                    if( !isOverpassTileAt( x - 1, y + 1 ) &&
                        checkOverpassCollision( x, y + 1, 4 ) === false &&
                        checkOverpassCollision( x, y + 1, 2 ) ) return false;
                    if( !isOverpassTileAt( x, y + 1 ) &&
                        checkOverpassCollision( x - 1, y + 1, 6 ) === false &&
                        checkOverpassCollision( x - 1, y + 1, 2 ) ) return false;
                }
            } else if( d === 4 || d === 6 ) {
                if( halfPos === 3 && !isOverpassTileAt( x + dx, y ) ) {
                    if( !isOverpassTileAt( x + dx, y + 1 ) &&
                        checkOverpassCollision( x, y + 1, d ) === false &&
                        checkOverpassCollision( x, y + 1, 8 ) ) return false;
                    if( !isOverpassTileAt( x, y + 1 ) &&
                        checkOverpassCollision( x + dx, y + 1, rd ) === false &&
                        checkOverpassCollision( x + dx, y + 1, 8 ) ) return false;
                }
            }

            // 境界の南の衝突判定
            if( halfPos === 1 || ( TF_CharacterSize === 2 && halfPos === 3 ) ) {
                if( ( d === 4 || d === 6 ) && !isOverpassTileAt( x + dx, y ) ) {
                    if( !isOverpassTileAt( x + dx, y - 1 ) &&
                        checkOverpassCollision( x, y - 1, d ) === false &&
                        checkOverpassCollision( x, y - 1, 2 ) ) return false;
                    if( !isOverpassTileAt( x, y - 1 ) &&
                        checkOverpassCollision( x + dx, y - 1, rd ) === false &&
                        checkOverpassCollision( x + dx, y - 1, 2 ) ) return false;
                }
            } else if( d === 8 ) {
                if( TF_CharacterSize === 2 ) {
                    if( halfPos === 0 && !isOverpassTileAt( x, y - 1 ) && !isOverpassTileAt( x - 1, y - 1 ) ) {
                        if( !isOverpassTileAt( x - 1, y - 2 ) &&
                            checkOverpassCollision( x, y - 2, 4 ) === false &&
                            checkOverpassCollision( x, y - 2, 2 ) ) return false;
                        if( !isOverpassTileAt( x, y - 2 ) &&
                            checkOverpassCollision( x - 1, y - 2, 6 ) === false &&
                            checkOverpassCollision( x - 1, y - 2, 2 ) ) return false;
                    }
                } else if( halfPos === 2 && !isOverpassTileAt( x, y ) && !isOverpassTileAt( x - 1, y ) ) {
                    if( !isOverpassTileAt( x - 1, y - 1 ) &&
                        checkOverpassCollision( x, y - 1, 4 ) === false &&
                        checkOverpassCollision( x, y - 1, 2 ) ) return false;
                    if( !isOverpassTileAt( x, y - 1 ) &&
                        checkOverpassCollision( x - 1, y - 1, 6 ) === false &&
                        checkOverpassCollision( x - 1, y - 1, 2 ) ) return false;
                }
            }
            return null;
        };

        // 乗る
        const isGateway = isUp2Higher( x, y, d, halfPos );
        if( isGateway ) this._higherLevel = true;

        if( this._higherLevel ) {
            if( isDownFromUpperTile( x, y, d, halfPos ) ) this._higherLevel = false;
            return _Game_CharacterBase_isMapPassable.apply( this, arguments );
        }

        const isOPMapPassable = isOverpassMapPassable();
        if( isOPMapPassable === null ) return _Game_CharacterBase_isMapPassable.apply( this, arguments );
        if( isOPMapPassable === false ) return false;

        const checkUnderpassCollision = ( x, y, d ) => {
            const x2 = $gameMap.roundX( x + getDx( d ) );
            const y2 = $gameMap.roundY( y + getDy( d ) );
            if( isOverpassTileAt( x2, y2 ) ) {
                if( isGateway ) return true;
                if( ( flags[ $gameMap.tileId( x, y, 0 ) ] |
                    flags[ $gameMap.tileId( x, y, 1 ) ] ) &
                    getFlag( d )
                ) return false;
                if( ( flags[ $gameMap.tileId( x2, y2, 0 ) ] |
                    flags[ $gameMap.tileId( x2, y2, 1 ) ] ) &
                    getFlag( rd )
                ) return false;
            }
            return true;
        };

        // レイヤー0,1の衝突判定
        if( !this._higherLevel &&
            ( ( halfPos === 1 || halfPos === 3 ) && ( d === 4 || d === 6 ) ) ||
            ( ( halfPos === 0 || halfPos === 1 ) && d === 8 ) ||
            ( ( halfPos === 2 || halfPos === 3 ) && d === 2 )
        ) {
            if( checkUnderpassCollision( x, y, d ) ) {
                if( ( halfPos === 0 && d === 8 ) || ( halfPos === 2 && d === 2 ) ) {
                    if( !checkUnderpassCollision( x - 1, y, d ) ) return false;
                }
            } else return false;
        }

        return isOPMapPassable;
    };

    /*---- Game_Follower ----*/
    /**
     * 指定位置の指定フラグビットが通行可か。
     * @param {Number} character 追うキャラクタ
     */
    const _Game_Follower_chaseCharacter = Game_Follower.prototype.chaseCharacter;
    Game_Follower.prototype.chaseCharacter = function( character ) {
        if( TF_OverpassTerrainTag === 0 ) {
            _Game_Follower_chaseCharacter.apply( this, arguments );
            return;
        }

        const sx = this.deltaXFrom( character.x );
        const sy = this.deltaYFrom( character.y );
        const d = 5 - Math.sign( sx ) + ( ( sx === 0 ) ? Math.sign( sy ) * 3 : 0 );
        if( d === 5 ) {
            _Game_Follower_chaseCharacter.apply( this, arguments );
            return;
        }

        const x = Math.floor( this.x + 0.5 );
        const y = Math.floor( this.y + 0.5 );
        const halfPos = getHalfPos( this.x, this.x );
        if( this._higherLevel ) {
            if( isDownFromUpperTile( x, y, d, halfPos ) ) this._higherLevel = false;
        } else {
            if( isUp2Higher( x, y, d, halfPos ) ) this._higherLevel = true;
        }

        _Game_Follower_chaseCharacter.apply( this, arguments );
    };


    /*---- Game_Event ----*/
    var _Game_Event_initialize = Game_Event.prototype.initialize;
    Game_Event.prototype.initialize = function( mapId, eventId ) {
        _Game_Event_initialize.apply( this, arguments );

        const getMetaValue = ( object, name ) => {
            const metaTagName = "TF_" + name;
            return object.meta.hasOwnProperty( metaTagName ) ? object.meta[ metaTagName ] : undefined;
        };

        const zDef = getMetaValue( this.event(), "zDef" );
        if( zDef !== undefined ) this._TF_zDef = parseFloat( zDef );

        const higherLevel = getMetaValue( this.event(), "higherLevel" );
        if( higherLevel !== undefined ) this._higherLevel = ( higherLevel.toLowerCase() === PARAM_TRUE );
    };


    /*---- Game_Map ----*/
    /**
     * 指定位置の指定フラグビットが通行可か。
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} bit {@link RPG.Tileset}の flagsチェック用ビット
     * @returns {Boolean} 高層表示[☆]の4方向の通行設定については@helpを参照
     */
    //const _Game_Map_checkPassage = Game_Map.prototype.checkPassage;
    Game_Map.prototype.checkPassage = function( x, y, bit ) {
        const flags = this.tilesetFlags();
        const tiles = this.allTiles( x, y );
        const isOverpass = isOverpassTileAt( x, y );
        const lastIndex = tiles.length - ( ( $gamePlayer._higherLevel && isOverpass ) ? 2 : 0 );
        for( let i = 0; i < lastIndex; i++ ) {
            const tileId = tiles[ i ];
            const flag = flags[ tileId ];

            if( tileId === 0 ||    // Bタイルの左上は無視
                ( flag & FLAG_UPPER ) && (          // [☆]かつ
                    ( flag & FLAG_NORTH_DIR ) ||  // ・北通行不可タイルは無視
                    !( flag & MASK_ALL_DIR )        // ・全通行可タイルは無視
                )
            ) continue;
            if( ( flag & bit ) === 0 ) return true;
            if( ( flag & bit ) === bit ) return false;
        }
        return $gamePlayer._higherLevel && isOverpass;
        //return _Game_Map_checkPassage.apply( this, arguments );
    };


    /**
     * 指定位置の立体交差地形タグを持つタイルの通行判定(4方向)チェック
     * @param {Number} ax タイル数
     * @param {Number} ay タイル数
     * @param {Number} d 通行設定(テンキー方向)
     * @returns {Boolean} 立体交差タイルでない場合nullを返す
     */
    function checkOverpassCollision( x, y, d ) {
        return checkOverpassCollisionBit( x, y, getFlag( d ) );
    }

    /**
     * 指定位置の立体交差地形タグを持つタイルの通行判定(ビットフラグ)チェック
     * @param {Number} ax タイル数
     * @param {Number} ay タイル数
     * @param {Number} bit 通行設定(ビットフラグ)
     * @returns {Boolean} 立体交差タイルでない場合nullを返す
     */
    function checkOverpassCollisionBit( x, y, bit ) {
        const flags = $gameMap.tilesetFlags();
        const tiles = $gameMap.allTiles( Math.floor( $gameMap.roundX( x ) ), Math.floor( $gameMap.roundY( y ) ) );

        for( let i = 0; i < tiles.length; i++ ) {
            const flag = flags[ tiles[ i ] ];
            if( flag >> 12 === TF_OverpassTerrainTag && !Tilemap.isTileA5( tiles[ i ] ) ) {
                return ( flag & bit ) === bit;
            }
        }
        return null;
    }

    /**
     * 指定位置のタイルは立体交差地形タグを持つか
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @returns {Boolean} 立体交差タイルでない場合nullを返す
     */
    function isOverpassTileAt( x, y ) {
        const flags = $gameMap.tilesetFlags();
        const tiles = $gameMap.layeredTiles( $gameMap.roundX( x ), $gameMap.roundY( y ) );
        for( let i = 0; i < tiles.length; i++ ) {
            if( flags[ tiles[ i ] ] >> 12 === TF_OverpassTerrainTag && !Tilemap.isTileA5( tiles[ i ] ) ) {
                return true;
            }
        }
        return false;
    }


    /**
     * 高層へ上がるタイミングか
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} d 通行設定(テンキー方向)
     * @param {Number} halfPos タイル内での位置
     * @returns {Boolean} 
     */
    function isUp2Higher( x, y, d, halfPos ) {
        if( halfPos === 0 || halfPos === 2 ) {
            if( !isOverpassTileAt( x - 1, y ) && checkOverpassCollision( x, y, 4 ) === false ) return true;   // 西出入口境界
        }
        if( isOverpassTileAt( x, y ) ) return false;   // 立体交差タイルの上は帰す

        return (
            checkOverpassCollision( x - 1, y, 6 ) === false ||  // 東出入口
            checkOverpassCollision( x + 1, y, 4 ) === false ||  // 西出入口
            checkOverpassCollision( x, y + 1, 8 ) === false ||  // 北入り口↓
            ( !isOverpassTileAt( x - 1, y ) && checkOverpassCollision( x - 1, y + 1, 8 ) === false ) ||
            ( !isOverpassTileAt( x, y - 1 ) && checkOverpassCollision( x, y - 2, 2 ) === false ) ||  // 南入口↓
            ( !isOverpassTileAt( x - 1, y ) && ( checkOverpassCollision( x - 1, y - 1, 2 ) === false ||
                ( !isOverpassTileAt( x - 1, y - 1 ) && checkOverpassCollision( x - 1, y - 2, 2 ) === false ) )
            ) ||
            ( !isOverpassTileAt( x + 1, y ) && checkOverpassCollision( x + 1, y - 1, 2 ) === false )
        );
    }

    /**
     * 高層から降りるタイミングか
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} d 通行設定(テンキー方向)
     * @param {Number} halfPos タイル内での位置
     * @returns {Boolean} 
     */
    function isDownFromUpperTile( x, y, d, halfPos ) {
        if( isOverpassTileAt( x, y ) ) return false;  // 立体交差タイルの上は帰す
        if( checkOverpassCollision( x, y - 1, 2 ) === false ) return false;  // 南入り口タイルは帰す
        if( ( halfPos === 0 || halfPos === 2 ) && checkOverpassCollision( x - 1, y - 1, 2 ) === false ) return false;

        // 全周に立体交差タイルの入り口がない
        return checkOverpassCollision( x + 1, y, 4 ) !== false &&   // 東
            checkOverpassCollision( x - 1, y, 6 ) !== false &&    // 西
            checkOverpassCollision( x, y + 1, 8 ) !== false &&    // 南
            checkOverpassCollision( x - 1, y + 1, 8 ) !== false &&  // 南西
            checkOverpassCollision( x, y - 2, 2 ) !== false;  // ふたつ北
    }

    /**
     * タイル内の位置を返す( 0:左上, 1:上, 2:左下, 3:下 )
     * @param {Number} x x座標(タイル数)
     * @param {Number} y y座標(タイル数)
     */
    function getHalfPos( x, y ) {
        return ( ( ( x % 1 ) === 0 ) ? 1 : 0 ) + ( ( ( y % 1 ) === 0 ) ? 2 : 0 );
    }
    /**
     * 指定方向のX要素を返す。
     * @param {Number} d 方向(テンキー対応)
     */
    function getDx( d ) {
        return ( d === 6 ) ? 1 : ( d === 4 ) ? -1 : 0;
    }
    /**
     * 指定方向のY要素を返す。
     * @param {Number} d 方向(テンキー対応)
     */
    function getDy( d ) {
        return ( d === 2 ) ? 1 : ( d === 8 ) ? -1 : 0;
    }
    /**
     * 指定方向をflagに変換して返す。
     * @param {Number} d 方向(テンキー対応)
     */
    function getFlag( d ) {
        return 1 << ( d / 2 - 1 );
    }
} )();