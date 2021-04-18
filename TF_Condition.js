//========================================
// TF_Condition.js
// Version :0.8.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020-2021
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:ja
 * @target MZ
 * @plugindesc 条件判定関連のスクリプト
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Condition.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @param temporarySwitch @text 一時スイッチのID
 * @desc 各種値を返すスイッチのID(規定値:1)
 * @type switch @default 1
 *
 * @param temporaryVariable @text 一時変数のID
 * @desc 各種値を返す変数のID(規定値:1)
 * @type variable @default 1
 *
 * @================================================
 * @help 
 * 変数・スイッチ・セルフスイッチをIDだけでなく[名前]で設定できる。
 * そのため、制作途中でIDを変えても[名前]が同じなら大丈夫。
 * 
 * プレイヤー位置・前方のイベントなどの判定ができる。
 * 
 * 一時変数・一時スイッチについて
 * ・名前に it をつけることを推奨。
 * 　プラグインコマンドの規定値が it だからです。
 * ・IDはプラグインパラメータで変更できますが 1 を推奨。
 * 　イベントコマンドでの規定値が 1 だからです。
 *
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 *
 * ●イベントコマンド
 * [スイッチの操作]
 * [変数の操作]
 * [セルフスイッチの操作]
 * [複数スイッチ&結合]
 * [プレイヤー位置判定]
 * [プレイヤー前方イベント判定]
 * [プレイヤー位置イベント判定]
 * ------------------------------
 * 引数の[操作]の選択肢のうち get そして and と or は、
 * 判定を連続して行いたい場合に使います。
 * 指定したスイッチの内容は変更されません。
 *
 * ・ [一時スイッチに代入 get]
 * 　指定スイッチの値を一時スイッチに
 *
 * ・ [一時スイッチとの論理積 and]
 * 　一時スイッチと指定スイッチが両方ともONだとON
 * 　それ以外だとOFFという結果を一時スイッチに代入します。
 * 
 * ・ [一時スイッチとの論理和 or]
 * 　一時スイッチと指定スイッチのどちらかがONだとON
 * 　それ以外だとOFFという結果を一時スイッチに代入します。
 * 
 * ●スクリプト
 * $gameVariables.setValueByName( [変数名], [変数への設定値] )
 * $gameVariables.valueByName( [変数名] )
 * $gameSwitches.setValueByName( [スイッチ名], [スイッチ状態(真偽値)] )
 * $gameSwitches.valueByName( [スイッチ名] )
 * $gameSwitches.multipleAnd( [スイッチ名], [スイッチ名]... )
 * this.TF_checkLocation( [マップID], [x], [y], [向き] )
 * this.TF_checkFrontEvent( [マップID], [イベントID] )
 * this.TF_checkHereEvent( [マップID], [向き], [イベントID] )
 * 
 * 利用規約 : MITライセンス
 * 
 * @================================================
 * @command switch @text スイッチの操作
 * @desc
 *
 * @arg name @text スイッチ名
 * @desc スイッチを名前で指定
 * @type string @default it
 *
 * @arg operate @text 操作
 * @desc (規定値:ON)
 * @type select @default true
 * @option ON true @value true
 * @option OFF false @value false
 * @option 反転 not @value not
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 * 
 * @================================================
 * @command variable @text 変数の操作
 * @desc 数値は小数値も扱う
 *
 * @arg name @text 変数名
 * @desc 変数を名前で指定
 * @type string @default it
 *
 * @arg operate @text 操作
 * @desc 加算に関しては文字列の連結も可能
 * 規定値: 代入 =
 * @type select @default =
 * @option 代入 = @value =
 * @option 足し算 += @value +=
 * @option 引き算 -= @value -=
 * @option 掛け算 *= @value *=
 * @option 割り算 /= @value /=
 * @option 割り算の余り %= @value %=
 * @option 割り算の商 //= @value //=
 * @option 一時変数に代入 get @value get
 * @option 足し算して一時変数に代入 + @value +
 * @option 引き算して一時変数に代入 - @value -
 * @option 掛け算して一時変数に代入 * @value *
 * @option 割り算して一時変数に代入 / @value /
 * @option 割り算の余りを一時変数に代入 % @value %
 * @option 割り算の商を一時変数に代入 // @value //
 *
 * @arg value @text オペランド(値)
 * @desc
 * 変数に設定する、数値・文字列
 * [一時変数に代入]の場合無視されます。
 * @type string
 *
 * @================================================
 * @command selfSwitch @text セルフスイッチの操作
 * @desc
 * 指定イベントのセルフスイッチを設定。
 * マップ指定が this だとイベント名で指定できる。
 *
 * @arg mapId @text マップID
 * @desc マップをIDまたは名前で指定
 * 規定値:this(現在のマップ)
 * @type string @default this
 *
 * @arg eventId @text イベントID
 * @desc イベントをIDで指定
 * 規定値:this(このイベント)
 * @type string @default this
 *
 * @arg type @text タイプ
 * @desc 任意の文字列が指定できるが
 * 通常のイベントコマンドでは使えない。
 * @type combo @default A
 * @option A @option B @option C @option D
 *
 * @arg operate @text 操作
 * @desc (規定値:ON)
 * @type select @default true
 * @option ON true @value true
 * @option OFF false @value false
 * @option 反転 not @value not
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @================================================
 * @command multipleAnd @text 複数スイッチ&結合
 * @desc
 * 複数のスイッチの論理積(and)の結果を、
 * 一時スイッチに設定。
 *
 * @arg nameList @text スイッチ名リスト
 * @desc スイッチを名前で指定
 * @type string[] @default ["it", "done"]
 *
 * @arg operate @text 操作
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @command ───── 位置 ──────
 * @desc これは区切り線なので選択しても何も起きないぞ!
 * 
 * @================================================
 * @command checkLocation @text プレイヤー位置判定
 * @desc
 * プレイヤーの座標位置と向きをチェックして、
 * 全て合致していたか結果を一時スイッチに設定。
 *
 * @arg mapId @text マップID
 * @desc マップをIDまたは名前で指定
 * 規定値:this(現在のマップ)
 * @type string @default this
 *
 * @arg position @text 位置(タイル数)
 * @desc マップ上の位置
 *  x, y 座標2つの数値を区切って入力。
 * @type string @default 0, 0
 *
 * @arg d @text 向き(テンキー対応)
 * @desc プレイヤーの向き
 * 規定値:0 (向きを問わない)
 * @type select @default 0
 * @option ・0 @value 0
 * @option ↑ 8 @value 8
 * @option → 6 @value 6
 * @option ←  4 @value 4
 * @option ↓ 2 @value 2
 *
 * @arg operate @text 操作
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @================================================
 * @command checkFrontEvent @text プレイヤー前方イベント判定
 * @desc
 * プレイヤーの前方に指定イベントがあるか、
 * 判定した結果を一時スイッチに設定。
 *
 * @arg mapId @text マップID
 * @desc マップをIDまたは名前で指定
 * 規定値:this(現在のマップ)
 * @type string @default this
 *
 * @arg eventId @text イベントID
 * @desc イベントをIDで指定
 * 規定値:this(このイベント)
 * @type string @default this
 *
 * @arg operate @text 操作
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @================================================
 * @command checkHereEvent @text プレイヤー位置イベント判定
 * @desc
 * プレイヤーと同じ場所に指定イベントがあるか、
 * 判定した結果を一時スイッチに設定。
 *
 * @arg mapId @text マップID
 * @desc マップをIDまたは名前で指定
 * 規定値:this(現在のマップ)
 * @type string @default this
 *
 * @arg d @text 向き(テンキー対応)
 * @desc プレイヤーの向き
 * 規定値:0 (向きを問わない)
 * @type select @default 0
 * @option ・0 @value 0
 * @option ↑ 8 @value 8
 * @option → 6 @value 6
 * @option ←  4 @value 4
 * @option ↓ 2 @value 2
 *
 * @arg eventId @text イベントID
 * @desc イベントをIDで指定
 * 規定値:this(このイベント)
 * @type string @default this
 *
 * @arg operate @text 操作
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 * 
 * @command ───── 比較 ──────
 * @desc これは区切り線なので選択しても何も起きないぞ!
 *
 * @================================================
 * @command jsFunction @text JavaScript判定
 * @desc
 * このイベントを this とした JavaScript実行し、
 * return で返った結果を一時スイッチに設定。
 *
 * @arg script @text JavaScript
 * @desc 真偽値を返すJavaScriptを書く。
 * @type note @default "// 実行結果を returnで返す\nreturn true;"
 *
 * @arg operate @text 操作
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @================================================
 * @command compareVariables @text 数値比較
 * @desc
 * 一時変数と比較した結果を一時スイッチに設定。
 * 
 * @arg compare @text 比較演算子
 * @desc (規定値: ==)
 * @type select @default ==
 * @option 一時変数と同じ == @value ==
 * @option 一時変数以上 <= @value <=
 * @option 一時変数より上 < @value <
 * @option 一時変数以下 >= @value >=
 * @option 一時変数より下 > @value >
 * 
 * @arg name @text 変数名
 * @desc 変数を名前で指定
 * @type string @default
 *
 * @arg operate @text 操作
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 */
/*
 *
 * 
 * TODO: MZプラグインコマンドに変更
 * 
 * ---- ↓引数2 ----
 * TF_COMPARE [真偽値] [真偽値]
 * 　スイッチと真偽値、スイッチとスイッチが両辺で同じか判定。
 * 　　[真偽値] true、false、ON、OFF
 *　　　 S[番号]、S[識別子]、it、A、B、C、D、 のいずれか
 * 
 * 例: TF_COMPARE A OFF
 * ---- ↓引数3 ----
 * TF_COMPARE [数値] [条件式] [数値]
 * 　変数と数値、変数と変数を比較する。
 * 　　[数値] V[番号]、 \V[変数名]、it、数値 のいずれか
 * 　　[条件式] =、 = 以外なら全て =<(小なりイコール)とする
 * 
 * 例: TF_COMPARE V[0] ≦ V[3]
 * ---- ↓引数4 ----
 * TF_COMPARE [マップID] [イベントID] [セルフスイッチ] [実行条件(真偽値)]
 * 　指定のイベントのセルフスイッチの状態を判定。
 * 　　[イベントID]は現在のマップでないと識別子では指定できないので注意!!
 *
 * 例: TF_COMPARE here 門番 C ON
 * ---- ↓引数5 ----
 * TF_COMPARE [数値] [~] [数値] [~] [数値]
 * 　　[~] 実際は全て =<(小なりイコール)として判定
 *
 * 例: TF_COMPARE 10 ~ it ~ 15
 * 
 *
 *------------------------------
 * TF_STAY_IF
 * 　ページの[出現条件]をさらに追加する。
 * 　引数の数によって異なる比較を行い、
 * 　条件に合わなかった場合次のページの出現条件判定へ。
 * 　引数の数と内容の対応はTF_COMPAREと同じ。
 * ---- ↓引数1 ----
 * TF_STAY_IF [JavaScript]
 * 
 * 例: TF_STAY_IF 1000<=$gameParty.gold()
 * ---- ↓引数2 ----
 * TF_STAY_IF [真偽値] [真偽値]
 * 
 * 例: TF_STAY_IF S[0] OFF
 * ---- ↓引数3 ----
 * TF_STAY_IF [数値] [条件式] [数値]
 *
 * 例: TF_STAY_IF 0 ~ v[変数名]
 * ---- ↓引数4 ----
 * TF_STAY_IF [マップID] [イベントID] [セルフスイッチ] [真偽値]
 * 　　[イベントID] は識別子では指定できないので、注意!!
 *
 * 例: TF_STAY_IF here 門番 C ON
 * ---- ↓引数5 ----
 * TF_STAY_IF [数値] [~] [数値] [~] [数値]
 * 
 * 例: TF_STAY_IF 10 ~ V[1] ~ 15
 *
 */

( function() {
	"use strict";

	const OPE_AND = "and";
	const OPE_OR = "or";
	const OPE_NOT = "not";
	const OPE_GET = "get";
	const OPE_COMPARE = "==";

	const OPE_AND_MARK = "&";
	const OPE_OR_MARK = "|";
	const OPE_EQUAL = "=";
	const CHAR_SPACE = " ";
	const IDENTIFIER_IT = "it";

	/*---- パラメータパース関数 ----*/
	const PARAM_TRUE = "true";
	const PARAM_ON = "on";
	const TYPE_BOOLEAN = "boolean";
	const TYPE_NUMBER = "number";
	/**
	 * 与えられた文字列に変数が指定されていたら、変数の内容に変換して返す。
	 * @param {String} value 変換元の文字列( \v[n]、s[n]形式を含む )
	 * @return {String} 変換後の文字列
	 */
	function treatValue( value ) {
		if( value === undefined || value === "" ) return "0";

		const varResult = value.match( /^\x1bv\[(.+)\]$/i );
		if( varResult !== null ) {
			const id = parseInt( varResult[ 1 ], 10 );
			if( isNaN( id ) ) {
				return $gameVariables.valueByName( varResult[ 1 ] );
			} else {
				return $gameVariables.value( id );
			}
		}

		const swResult = value.match( /^\x1bs\[(.+)\]$/i );
		if( swResult !== null ) {
			const id = parseInt( swResult[ 1 ], 10 );
			if( isNaN( id ) ) {
				return $gameSwitches.valueByName( swResult[ 1 ] );
			} else {
				return $gameSwitches.value( id );
			}
		}

		return value;
	}

	/**
	 * 文字列を整数に変換して返す。
	 * @param {String|Number} value
	 * @return {Number} 数値に変換した結果
	 */
	function parseIntStrict( value ) {
		if( typeof value === TYPE_NUMBER ) return Math.floor( value );
		const result = parseInt( treatValue( value ), 10 );
		if( isNaN( result ) ) throw Error( `${PLUGIN_NAME}: '${value}' is not a number.` );
		return result;
	}

	/**
	 * 文字列を実数に変換して返す。
	 * @param {String|Number} value
	 * @return {Number} 数値に変換した結果
	 */
	function parseFloatStrict( value ) {
		if( typeof value === TYPE_NUMBER ) return value;
		const result = parseFloat( treatValue( value ) );
		if( isNaN( result ) ) throw Error( `${PLUGIN_NAME}: '${value}' is not a number.` );
		return result;
	}

	/**
	 * 文字列を真偽値に変換して返す。
	 * @param {String|Boolean} value 変換元文字列( it,S[n],S[name],ON,OFF,true,false)
	 * @returns {Boolean} 
	 */
	function parseBooleanStrict( value ) {
		if( typeof value === TYPE_BOOLEAN ) return value;
		if( value === undefined || value === "" ) return false;
		if( value === IDENTIFIER_IT ) return $gameSwitches.value( switchItId );

		const result = value.match( /s\[(.+)\]/i );
		if( result === null ) {
			value = value.toLowerCase();
			return ( value === PARAM_TRUE || value === PARAM_ON );
		}

		const id = parseInt( result[ 1 ], 10 );
		if( isNaN( id ) ) {
			return $gameSwitches.valueByName( id );
		} else {
			return $gameSwitches.value( id );
		}
	}

	/**
	 * ショートサーキットなら結果をItに代入。
	 * @param {String} logope
	 * @returns {Boolean} ショートサーキットが成立したか
	 */
	function shortCircuit( logope ) {
		logope = logope.toLowerCase();
		if( logope === OPE_AND_MARK || logope === OPE_AND ) {
			if( !$gameSwitches.value( switchItId ) ) return true;
		} else if( logope === OPE_OR_MARK || logope === OPE_OR ) {
			if( $gameSwitches.value( switchItId ) ) return true;
		}
		return false;
	}

	// ショートサーキット処理が済んでいる場合の代入処理
	function setItTo( value, logope ) {
		if( logope === OPE_COMPARE ) {
			value = value === $gameSwitches.valueByName( switchItId );
		}
		// OPE_GET, OPE_AND, OPE_OR のいずれか
		$gameSwitches.setValueByName( switchItId, value );
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
	const EVENT_PLAYER = "player";
	const EVENT_FOLLOWER0 = "follower0";
	const EVENT_FOLLOWER1 = "follower1";
	const EVENT_FOLLOWER2 = "follower2";
	/**
	 * 文字列をイベントIDへ変換。
	 * @param {String} value イベントIDの番号か識別子
	 * @returns {Number} 拡張イベントID(イベントが存在しない場合、undefinedを返す)
	 */
	function stringToEventId( value ) {
		value = treatValue( value );
		const result = parseInt( value, 10 );
		if( !isNaN( result ) ) return result;

		const lowValue = value.toLowerCase();
		switch( lowValue ) {
			case EVENT_THIS: return 0;
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
		if( i === -1 ) return;//イベントが存在しない
		return i;
	}

	/**
	 * 文字列をマップIDへ変換。
	 * @param {String} value マップIDの番号か識別子(this で現在のマップ)
	 * @returns {Number} マップID
	 */
	function stringToMapId( value ) {
		value = treatValue( value );

		const label = value.toLowerCase();
		if( label === EVENT_THIS ) return $gameMap.mapId();

		const i = $dataMapInfos.findIndex( e => {
			if( !e ) return false;
			return e.name === value;
		} );
		if( i !== -1 ) return i; // $dataMapInfos[ i ].id が正しい気がするが、実は使われていないようだ
		const result = parseInt( value, 10 );
		if( isNaN( result ) ) throw Error( `指定したマップ[${value}]がありません。` );
		return result;
	}

	const DIRECTION_MAP = [
		{ in: [ "↙︎", "dl", "sw", "downleft", "southwest" ], out: 1 },
		{ in: [ "↓", "d", "s", "down", "south" ], out: 2 },
		{ in: [ "↘︎", "dr", "se", "downright", "southeast" ], out: 3 },
		{ in: [ "←", "l", "w", "left", "west" ], out: 4 },
		{ in: [ "→", "r", "e", "right", "east" ], out: 6 },
		{ in: [ "↖︎", "ul", "nw", "upleft", "northwest" ], out: 7 },
		{ in: [ "↑", "u", "n", "up", "north" ], out: 8 },
		{ in: [ "↗︎", "ur", "ne", "upright", "northeast" ], out: 9 }
	];

	/**
		 * 方向文字列をテンキー方向の数値に変換して返す。
		 * @param {String} value 方向た文字列
		 * @returns {Number} テンキー方向の数値(変換できなかった場合:undefined)
		 */
	function stringToDirection( value ) {
		value = treatValue( value );
		const result = parseInt( value, 10 );
		if( !isNaN( result ) ) return result;

		value = value.toLowerCase();
		const index = DIRECTION_MAP.findIndex( e => e.in.includes( value ) );
		if( index === -1 ) return;
		return DIRECTION_MAP[ index ].out;
	}
	/**
	 * 指定した方向をプレイヤーが向いているか。
	 * @param {Number} d 判定する方向(テンキー対応)
	 * @returns {Boolean} 方向が同じか
	 */
	function isMatchDirection( d ) {
		return ( d === 0 ) ? true : ( d === $gamePlayer.direction() );
	}

	/**
	 * "2, 43" 形式の文字列を配列 [2,43] に変換して返す。
	 * @param {String} positionString "x, y" 形式の文字列
	 * @returns {Array} [x,y]形式の配列
	 */
	function position2xy( positionString ) {
		const args = positionString.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${fixedMapArgs}"`;
		return [ parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) ];
	}

	// イベントコマンドの番号
	const PLUGIN_COMMAND = 356;


	// HalfMove.js の確認
	const hasHalfMove = PluginManager._scripts.contains( "HalfMove" );

	// プラグインパラメータを受け取る
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );
	const variableItId = pluginParams.temporaryVariable;
	const switchItId = pluginParams.temporarySwitch;


	/*---- プラグインコマンド識別子 ----*/
	const COM_SWITCH = "switch";
	const COM_VARIABLE = "variable";
	const COM_SELFSWITCH = "selfSwitch";
	const COM_MULTIPLE_AND = "multipleAnd";
	const COM_CHECK_LOCATION = "checkLocation";
	const COM_CHECK_FRONT_EVENT = "checkFrontEvent";
	const COM_CHECK_HERE_EVENT = "checkHereEvent";
	const COM_JS_FUNCTION = "jsFunction";
	const COM_COMPARE_VARIABLES = "compareVariables";
	const TF_STAY_IF = "TF_STAY_IF";

	// [スイッチの操作]
	PluginManagerEx.registerCommand( document.currentScript, COM_SWITCH, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		if( typeof args.operate === TYPE_BOOLEAN ) {
			$gameSwitches.setValueByName( args.name, args.operate );
			return;
		}
		const value = $gameSwitches.valueByName( args.name );
		if( args.operate === OPE_NOT ) {
			$gameSwitches.setValueByName( args.name, !value );
		} else {
			setItTo( value, args.operate );
		}
	} );

	// [変数の操作]
	PluginManagerEx.registerCommand( document.currentScript, COM_VARIABLE, function( args ) {
		if( args.operate === "=" ) {
			$gameVariables.setValueByName( args.name, args.value );
			return;
		}
		const value = $gameVariables.valueByName( args.name );
		switch( args.operate ) {
			case "+=": $gameVariables.setValueByName( args.name, value + args.value ); break;
			case "-=": $gameVariables.setValueByName( args.name, value - args.value ); break;
			case "*=": $gameVariables.setValueByName( args.name, value * args.value ); break;
			case "/=": $gameVariables.setValueByName( args.name, value / args.value ); break;
			case "%=": $gameVariables.setValueByName( args.name, value % args.value ); break;
			case "//=": $gameVariables.setValueByName( args.name, Mathi.floor( value / args.value ) ); break;
			case "get": $gameVariables.setValueByName( variableItId, value ); break;
			case "+": $gameVariables.setValueByName( variableItId, value + args.value ); break;
			case "-": $gameVariables.setValueByName( variableItId, value - args.value ); break;
			case "*": $gameVariables.setValueByName( variableItId, value * args.value ); break;
			case "/": $gameVariables.setValueByName( variableItId, value / args.value ); break;
			case "%": $gameVariables.setValueByName( variableItId, value % args.value ); break;
			case "//": $gameVariables.setValueByName( variableItId, Mathi.floor( value / args.value ) ); break;
		}
	} );

	// [セルフスイッチ操作]
	PluginManagerEx.registerCommand( document.currentScript, COM_SELFSWITCH, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		if( typeof args.operate === TYPE_BOOLEAN ) {
			setSelfSwitch( args.mapId, args.eventId, args.type, args.value );
			return;
		}
		const value = getSelfSwitch( args.mapId, args.eventId, args.type, args.value );
		if( args.operate === OPE_NOT ) {
			setSelfSwitch( args.mapId, args.eventId, args.type, !value );
		} else {
			setItTo( value, args.operate );
		}
	} );

	// [複数スイッチ&結合]
	PluginManagerEx.registerCommand( document.currentScript, COM_MULTIPLE_AND, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const value = $gameSwitches.multipleAnd( ...args.nameList );
		setItTo( value, args.operate );
	} );

	// [プレイヤー位置判定]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_LOCATION, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const [ x, y ] = position2xy( args.position );
		const value = this.TF_checkLocation( args.mapId, x, y, args.d );
		setItTo( value, args.operate );
	} );

	// [プレイヤー前方イベント判定]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_FRONT_EVENT, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const value = this.TF_checkFrontEvent( args.mapId, args.eventId );
		setItTo( value, args.operate );
	} );

	// [プレイヤー位置イベント判定]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_HERE_EVENT, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const value = this.TF_checkHereEvent( args.mapId, args.d, args.eventId );
		setItTo( value, args.operate );
	} );

	// [JavaScript判定]
	PluginManagerEx.registerCommand( document.currentScript, COM_JS_FUNCTION, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const code = JSON.parse( args.script );
		const value = ( new Function( code ) ).call( this.character( 0 ) );
		setItTo( value, args.operate );
	} );

	// [数値比較]
	PluginManagerEx.registerCommand( document.currentScript, COM_COMPARE_VARIABLES, function( args ) {
		if( shortCircuit( args.operate ) ) return;

		const lastValue = $gameVariables.valueByName( valueIt );
		let value;
		switch( args.compare ) {
			case "==": value = $gameVariables.setValueByName( args.name, value + args.value ); break;
		}
		parseBooleanStrict( args.value ) === args.booleanValue;
		setItTo( value, args.operate );
	} );

	// TODO
	/**
		* 引数によって判定を行う。
		* @param { Game_Event; } gameEvent 対象のイベント
		* @param { String; } args 引数の数で判定方法を変更する
		* @returns { Boolean; } 判定結果
	 */
	function compareValues( gameEvent, args ) {
		const getSwitchValue = swId => SELF_SWITCHES.includes( swId ) ?	// セルフスイッチ判定
			$gameSelfSwitches.value( [ gameEvent._mapId, gameEvent._eventId, swId ] ) :
			parseBooleanStrict( swId );
		const l = args.length;
		switch( l ) {
			case 2:
			//  
			case 3:
				// 論理演算判定
				// [変数] [演算子] [数値]
				// 実際は2数値の判定で、演算子の左辺か右辺か以外に引数の処理に差はない
				const leftSide = parseFloatStrict( args[ 0 ] );
				const rightSide = parseFloatStrict( args[ 2 ] );
				return ( args[ 1 ] === OPE_EQUAL ) ? ( leftSide === rightSide ) : ( leftSide <= rightSide );
			case 4:
				// セルフスイッチ判定
				const mapId = stringToMapId( args[ 0 ] );
				const numberId = stringToEventId( args[ 1 ] );// 現在のマップが用意される前に判定が走るので、識別子で指定できない
				if( numberId === undefined ) throw Error( `${PLUGIN_NAME}: I can't find the event '${args[ 1 ]}'` );
				const type = args[ 2 ].toUpperCase();
				return $gameSelfSwitches.value( [ mapId, numberId, type ] ) === getSwitchValue( args[ 3 ] );
			case 5:
				// 範囲判定
				const centerVal = parseFloatStrict( args[ 2 ] );
				return ( parseFloatStrict( args[ 0 ] ) <= centerVal && centerVal <= parseFloatStrict( args[ 4 ] ) );
			default:
				throw Error( `${PLUGIN_NAME}: ${l} length of arguments are wrong.` );
		}
	}

	/*---- Game_Interpreter ----*/

	/**
	 * プレイヤー前方に指定イベントの判定があるか。
	 * @param {String} mapId マップID | マップ名 | here | this
	 * @param {String} eventId 対象イベント
	 * @returns {Boolean} 指定イベントがあるか
	 */
	Game_Interpreter.prototype.TF_checkFrontEvent = function( mapId, eventId ) {
		const d = $gamePlayer.direction();
		let x, y;
		if( hasHalfMove ) {//HalfMove.js を使っている場合
			x = $gameMap.roundHalfXWithDirection( $gamePlayer.x, d );
			y = $gameMap.roundHalfYWithDirection( $gamePlayer.y, d );
		} else {
			x = $gameMap.roundXWithDirection( $gamePlayer.x, d );
			y = $gameMap.roundYWithDirection( $gamePlayer.y, d );
		}
		return collisionCheck( this, mapId, x, y, eventId );
	};

	/**
	 * プレイヤー位置に指定イベントの判定があるか。
	 * @param {String} mapId マップID | マップ名 | this
	 * @param {Number} d プレイヤーの向き(テンキー対応)
	 * @param {String} eventId 対象イベント
	 * @returns {Boolean} 指定イベントがあるか
	 */
	Game_Interpreter.prototype.TF_checkHereEvent = function( mapId, d, eventId ) {
		return isMatchDirection( d ) && collisionCheck( this, mapId, $gamePlayer.x, $gamePlayer.y, eventId );
	};

	/**
	 * 
	 * @param {Game_Interpreter} interpreter
	 * @param {String} mapId マップID | マップ名 | this
	 * @param {Number*} x x位置(タイル数)
	 * @param {Number} y y位置(タイル数)
	 * @param {String} eventId 対象イベント
	 * @returns 
	 */
	function collisionCheck( interpreter, mapId, x, y, eventId ) {
		if( stringToMapId( mapId ) !== $gameMap.mapId() ) return false;

		let events;
		if( hasHalfMove ) {//HalfMove.js を使っている場合
			events = $gameMap.eventsXyUnitNt( x, y );
		} else {
			events = $gameMap.eventsXy( x, y );
		}
		const numberId = stringToEventId( eventId );
		if( numberId === undefined ) return false;
		const targetEvent = getEventById( interpreter, numberId );
		return events.some( e => e === targetEvent );
	}

	/**
	 * プレイヤーの座標位置と向きをチェックして合致しているか。
	 * 半歩移動を使っている場合は0.5を考慮する必要がある
	 * @param {String} mapId マップID | マップ名 | this
	 * @param {String} x 対象x座標(タイル数)
	 * @param {String} y 対象y座標(タイル数)
	 * @param {String} d プレイヤーの向き(テンキー対応 | 方向文字列)
	 * @returns {Boolean} 指定座標と向きがプレイヤーと合致しているか
	 */
	Game_Interpreter.prototype.TF_checkLocation = function( mapId, x, y, d ) {
		if( !isMatchDirection( d ) ) return false;
		if( stringToMapId( mapId ) !== $gameMap.mapId() ) return false;

		return ( x === $gamePlayer.x && y === $gamePlayer.y );
	};

	/*--- Game_Variables ---*/
	/**
	 * 変数を文字列で指定し、値を返す。
	 * @param {String} name 変数(ID, 名前, \V[n]による指定が可能)
	 */
	Game_Variables.prototype.valueByName = function( name ) {
		return this.value( stringToVariableId( name ) );
	};
	/**
	 * 変数を文字列で指定し、値を設定。小数値も設定可能。
	 * @param {String} name 変数(ID, 名前, \V[n]による指定が可能)
	 * @param {String|Number} value 設定する値
	 */
	Game_Variables.prototype.setValueByName = function( name, value ) {
		variableId = stringToVariableId( name );
		if( 0 < variableId && variableId < $dataSystem.variables.length ) {
			this._data[ variableId ] = value;
			this.onChange();
		}
	};

	/**
	 * 指定された変数のIDを返す。
	 * @param {String} name 変数(ID, 名前, \V[n]による指定が可能)
	 */
	function stringToVariableId( name ) {
		if( typeof name === TYPE_NUMBER ) return name;
		name = treatValue( name );
		let i = $dataSystem.variables.findIndex( i => i === name );
		if( 0 <= i ) return i;
		i = parseInt( name, 10 );
		if( isNaN( i ) ) throw Error( `${PLUGIN_NAME}: I can't find the variable '${name}'` );
		return i;
	}


	/*--- Game_Switches ---*/
	/**
	 * スイッチの内容を文字列で指定して返す
	 * @param {String} name スイッチ(ID, 名前, \V[n]による指定が可能)
	 */
	Game_Switches.prototype.valueByName = function( name ) {
		return this.value( stringToSwitchId( name ) );
	};
	/**
	 * スイッチの内容を文字列で指定して設定
	 * @param {String} name スイッチ(ID, 名前, \V[n]による指定が可能)
	 * @param {String} value 設定する値
	 */
	Game_Switches.prototype.setValueByName = function( name, value ) {
		this.setValue( stringToSwitchId( name ), value );
	};
	/**
	 * 指定されたスイッチのIDを返す
	 * @param {String} name スイッチ(ID, 名前, \V[n]による指定が可能)
	 */
	function stringToSwitchId( name ) {
		if( typeof name === TYPE_NUMBER ) return name;
		name = treatValue( name );
		let i = $dataSystem.switches.findIndex( i => i === name );
		if( 0 <= i ) return i;
		i = parseInt( name, 10 );
		if( isNaN( i ) ) throw Error( `${PLUGIN_NAME}: I can't find the switch '${name}'` );
		return i;
	}

	Game_Switches.prototype.multipleAnd = function( ...args ) {
		return args.reduce( ( pre, curr ) => pre && $gameSwitches.valueByName( curr ), true );
	};

	/*--- setSelfSwitch ---*/
	/**
	 * [セルフスイッチ] を設定
	 * @param {String} mapId 対象マップ
	 * @param {String} eventId 対象イベント(名前で指定できるのは現在のマップのみ)
	 * @param {String} type A・B・C・D などの文字
	 * @param {String} value ON/OFF状態
	 */
	function setSelfSwitch( mapId, eventId, type, value ) {
		const mapIdNumber = stringToMapId( mapId );
		const eventIdNumber = stringToEventId( eventId );
		if( eventIdNumber === undefined ) throw Error( `${PLUGIN_NAME}: I can't find the event '${eventId}'` );
		$gameSelfSwitches.setValue( [ mapIdNumber, eventIdNumber, type ], parseBooleanStrict( value ) );
	}
	/**
	 * [セルフスイッチ] の値を得て一時スイッチに返す
	 * @param {String} mapId 対象マップ
	 * @param {String} eventId 対象イベント(名前で指定できるのは現在のマップのみ)
	 * @param {String} type A・B・C・D などの文字
	 */
	function getSelfSwitch( mapId, eventId, type ) {
		const mapIdNumber = stringToMapId( mapId );
		const eventIdNumber = stringToEventId( eventId );
		if( eventIdNumber === undefined ) throw Error( `${PLUGIN_NAME}: I can't find the event '${eventId}'` );
		return $gameSelfSwitches.value( [ mapIdNumber, eventIdNumber, type ] );
	}

	/*--- Game_Event ---*/
	/**
	 * 指定イベントページの出現条件判定を行う。
	 * @param {RPG.EventPage} page 対象イベントページ
	 */
	const SELF_SWITCHES = [ "A", "B", "C", "D" ];
	const _Game_Event_meetsConditions = Game_Event.prototype.meetsConditions;
	Game_Event.prototype.meetsConditions = function( page ) {
		const doPage = _Game_Event_meetsConditions.apply( this, arguments );
		if( doPage === false ) return false;

		// 全て条件に合ったらtrueを返す(条件に合わないものがひとつでもあったらfalseを返す)
		for( const command of page.list ) {
			if( command.code !== PLUGIN_COMMAND ) return true;	// プラグインコマンド以外のイベントコマンド

			const args = command.parameters[ 0 ].split( CHAR_SPACE );
			const pluginCommand = args.shift();
			if( pluginCommand !== TF_STAY_IF ) return true;	// TF_STAY_IF 以外のプラグインコマンド
			if( !compareValues( this, args ) ) return false;
		}
		return true;
	};



} )();
