//========================================
// TF_Condition.js
// Version :1.2.4.2
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
 * 数値・真偽値に指定できる値について
 * ・基本は変数・スイッチの[名前]を指定します。
 * ・PluginCommonBase 定義により \V[n] \S[n]が使えます。
 * ・数字は名前でなく数値と判断します。
 * ・true、false は名前ではなく値と判断します。
 * 
 * 一時変数・一時スイッチについて
 * ・名前に it をつけることを推奨します。
 * 　プラグインコマンドの規定値が it だからです。
 * 　一時変数・一時スイッチ両方とも it が規定値です。
 * ・IDはプラグインパラメータで変更できますが 1 を推奨します。
 * 　イベントコマンドの規定値が 1 だから入れ替える必要がありません。
 *
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 *
 * ●イベントコマンド
 * 　[スイッチの操作][変数の操作][セルフスイッチの操作]
 * 判定
 * 　[スイッチ判定][セルフスイッチ判定]
 * 　[複数スイッチ&結合][JavaScript判定]
 * 比較
 * 　[数値比較][数値範囲]
 * 位置
 * 　[座標位置][前方イベント][その場イベント]
 * 出現条件:判定
 * 　[スイッチ判定][セルフスイッチ判定][複数スイッチ&結合]
 * 出現条件:比較
 * 　[数値比較][数値範囲]
 * ------------------------------
 * 引数の[論理演算]の選択肢のうち get そして and、or、== は、
 * 判定を連続して行いたい場合に使います。
 * 論理演算の結果は一時スイッチに代入されます。
 *
 *  [一時スイッチに代入 get]
 * 　　判定結果。
 *  [一時スイッチとの論理積 and]
 * 　　一時スイッチと判定結果が両方ともONだとON。
 *  [一時スイッチとの論理和 or]
 * 　　一時スイッチと判定結果のどちらかがONだとON。
 *  [一時スイッチと同じ ==]
 * 　　一時スイッチと判定結果の値が同じだとON。
 * 
 * ●スクリプト
 * $gameVariables.setValueByName( 変数名, 変数への設定値 )
 * $gameVariables.valueByName( 変数名 )
 * $gameSwitches.setValueByName( スイッチ名, スイッチ状態(真偽値) )
 * $gameSwitches.valueByName( スイッチ名 )
 * this.TF_checkLocation( マップID, x, y, 向き )
 * this.TF_checkFrontEvent( マップID, イベントID )
 * this.TF_checkHereEvent( マップID, 向き, イベントID )
 * 
 * 利用規約 : MITライセンス
 *
 * @================================================
 * @command switch @text スイッチの操作
 * @desc 指定スイッチへの代入。
 *
 * @arg name @text スイッチの名前
 * @desc 指定スイッチ
 * @type string @default it
 * 
 * @arg operand @text オペランド(値)
 * @desc スイッチの名前、true、false、\S[n]いずれか
 * @type combo @default true
 * @option true
 * @option false
 * @option \S[n]
 * 
 * @================================================
 * @command variable @text 変数の操作
 * @desc 数値は小数値も扱う
 * 数値以外が入った変数の動作は保証しない
 *
 * @arg name @text 変数の名前
 * @desc 指定変数
 * @type string @default it
 *
 * @arg operate @text 操作
 * @desc 規定値: 指定変数に代入 =
 * @type select @default =
 * @option 指定変数に代入 = @value =
 * @option 足し算 += @value +=
 * @option 引き算 -= @value -=
 * @option 掛け算 *= @value *=
 * @option 割り算 /= @value /=
 * @option 割り算の余り %= @value %=
 * @option 割り算の商 //= @value //=
 * @option 足し算して一時変数に + @value +
 * @option 引き算して一時変数に - @value -
 * @option 掛け算して一時変数に * @value *
 * @option 割り算して一時変数に / @value /
 * @option 割り算の余りを一時変数に % @value %
 * @option 割り算の商を一時変数に // @value //
 *
 * @arg operand @text オペランド(値)
 * @desc 変数の名前、数値、\V[n]いずれか
 * @type string @default 100
 *
 * @================================================
 * @command textVariable @text 文字変数の操作
 * @desc 変数に対して文字を代入
 * 数値が含まれていても文字として代入される
 *
 * @arg name @text 変数の名前
 * @desc 指定変数
 * @type string @default it
 *
 * @arg operate @text 操作
 * @desc 規定値: 指定変数に代入 =
 * @type select @default =
 * @option 指定変数に代入 = @value =
 * @option 結合 += @value +=
 * @option 結合して一時変数に + @value +
 *
 * @arg operand @text オペランド(値)
 * @desc 変数に代入する文字(\V[n]を使用できる)
 * @type string @default \V[1]
 * 
 * @================================================
 * @command selfSwitch @text セルフスイッチの操作
 * @desc 指定イベントのセルフスイッチを設定。
 *
 * @arg mapId @text マップID
 * @desc マップをIDまたは名前で指定
 * 規定値:this(現在のマップ)
 * @type string @default this
 *
 * @arg eventId @text イベントID
 * @desc イベントをIDで指定(規定値:this(このイベント))
 * マップ指定が this だとイベント名で指定できる。
 * @type string @default this
 *
 * @arg type @text タイプ
 * @desc 任意の文字が指定できるが
 * 通常のイベントコマンドでは使えない。
 * @type combo @default A
 * @option A @option B @option C @option D
 *
 * @arg operand @text オペランド(値)
 * @desc スイッチの名前、true、false、\S[n]いずれか
 * (セルフスイッチの指定はできません)
 * @type combo @default true
 * @option true
 * @option false
 * @option \S[n]
 *
 * @command rem1 @text ＿＿＿＿＿ 判定 ＿＿＿＿＿
 * @desc [条件分岐]を行うため下準備的なものです。
 * (なお、これは区切り線なので選択しても何も起きません)
 *
 * @================================================
 * @command checkSwitch @text 判定:スイッチ
 * @desc
 * 指定スイッチと一時スイッチを論理演算し、
 * 結果を一時スイッチに設定。
 *
 * @arg name @text スイッチの名前
 * @desc 指定スイッチ
 * @type string @default it
 *
 * @arg operate @text 論理演算
 * @desc (規定値: 一時スイッチとの論理積 and)
 * @type select @default and
 * @option 反転 not @value not
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 * 
 * @================================================
 * @command checkSelfSwitch @text 判定:セルフスイッチ
 * @desc
 * 指定スイッチと一時スイッチを論理演算し、
 * 結果を一時スイッチに設定。
 *
 * @arg mapId @text マップID
 * @desc マップをIDまたは名前で指定
 * 規定値:this(現在のマップ)
 * @type string @default this
 *
 * @arg eventId @text イベントID
 * @desc イベントをIDで指定(規定値:this(このイベント))
 * マップ指定が this だとイベント名で指定できる。
 * @type string @default this
 *
 * @arg type @text タイプ
 * @desc 任意の文字が指定できるが
 * 通常のイベントコマンドでは使えない。
 * @type combo @default A
 * @option A @option B @option C @option D
 *
 * @arg operate @text 論理演算
 * @desc (規定値: 一時スイッチとの論理積 and)
 * @type select @default and
 * @option 反転 not @value not
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 * 
 * @================================================
 * @command checkMultiple @text 判定:複数スイッチ
 * @desc
 * 複数のスイッチの論理積(and)の結果を、
 * 一時スイッチに設定。
 *
 * @arg nameList @text スイッチ名リスト
 * @desc スイッチを名前で指定
 * @type string[] @default ["it", "done"]
 *
 * @arg operate @text 論理演算
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @================================================
 * @command checkCompare @text 判定:数値比較
 * @desc
 * 一時変数と比較した結果を一時スイッチに設定。
 *
 * @arg leftSide @text 左辺の数値
 * @desc 変数の名前、数値、\V[n]いずれか
 * @type string @default it
 *
 * @arg compare @text 比較演算子
 * @desc (規定値: ==)
 * @type select @default ==
 * @option 同じ == @value ==
 * @option 以外 != @value !=
 * @option 以上 ≦ @value ≦
 * @option より上 < @value <
 * @option 以下 ≧ @value ≧
 * @option より下 > @value >
 *
 * @arg rightSide @text 右辺の数値
 * @desc 変数の名前、数値、\V[n]いずれか
 * @type string @default it
 *
 * @arg operate @text 論理演算
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 * 
 * @================================================
 * @command checkCompareText @text 判定:文字比較
 * @desc
 * 一時変数と比較した結果を一時スイッチに設定。
 *
 * @arg leftSide @text 左辺の文字変数
 * @desc 変数の名前、\V[n]いずれか
 * @type string @default it
 *
 * @arg compare @text 比較演算子
 * @desc (規定値: ==)
 * @type select @default ==
 * @option 同じ == @value ==
 * @option 以外 != @value !=
 *
 * @arg rightSide @text 右辺の文字
 * @desc 文字(\V[n]を使える)
 * @type string @default 
 *
 * @arg operate @text 論理演算
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @================================================
 * @command checkRange @text 判定:数値範囲
 * @desc
 * 指定変数が範囲内にあるか判定して、
 * 結果を一時スイッチに設定。
 *
 * @arg min @text 最小値
 * @desc 変数の名前、数値、\V[n]いずれか
 * @type number @default 0
 *
 * @arg center @text ≦中間値
 * @desc 変数の名前、数値、\V[n]いずれか
 * @type string @default it
 * 
 * @arg max @text ≦最大値
 * @desc 変数の名前、数値、\V[n]いずれか
 * @type number @default 100
 *
 * @arg operate @text 論理演算
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @command rem2 @text ＿＿＿＿ 特殊判定 ＿＿＿＿
 * @desc 標準にはついてない判定方式で[出現条件]では使えません。
 * (なお、これは区切り線なので選択しても何も起きません)
 *
 * @================================================
 * @command checkLocation @text 座標位置
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
 * @arg operate @text 論理演算
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @================================================
 * @command checkFrontEvent @text 前方イベント
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
 * @arg operate @text 論理演算
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @================================================
 * @command checkHereEvent @text その場イベント
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
 * @arg operate @text 論理演算
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 * 
 * @================================================
 * @command checkJs @text JavaScript
 * @desc
 * このイベントを this とした JavaScriptを実行し、
 * return で返った結果を一時スイッチに設定。
 *
 * @arg script @text JavaScript
 * @desc 真偽値を返すJavaScriptを書く。
 * @type note @default "// 実行結果を returnで返す\nreturn true;"
 *
 * @arg operate @text 論理演算
 * @desc 結果の扱い(規定値:get)
 * @type select @default get
 * @option 一時スイッチに代入 get @value get
 * @option 一時スイッチとの論理積 and @value and
 * @option 一時スイッチとの論理和 or @value or
 * @option 一時スイッチと同じ == @value ==
 *
 * @=================== 【出現条件】 ===============================================================
 *
 * @command rem3 @text ＿＿＿＿ 出現条件 ＿＿＿＿
 * @desc 出現条件は[実行内容]の上の方に並べて使います。
 * (なお、これは区切り線なので選択しても何も起きません)
 * 
 * @================================================
 * @command conditionSwitch @text 出現条件:スイッチ
 * @desc 指定した値と同じならページ出現。
 *
 * @arg name @text スイッチの名前
 * @desc 指定スイッチ
 * @type string @default it
 *
 * @arg operand @text オペランド(値)
 * @desc 
 * @type boolean @default true
 *
 * @================================================
 * @command conditionSelfSwitch @text 出現条件:セルフスイッチ
 * @desc セルフスイッチと値が同じならページ出現。
 *
 * @arg mapId @text マップID
 * @desc マップをIDまたは名前で指定
 * 規定値:this(現在のマップ)
 * @type string @default this
 *
 * @arg eventId @text イベントID
 * @desc イベントをIDで指定(規定値:this(このイベント))
 * マップ指定が this だとイベント名で指定できる。
 * @type string @default this
 *
 * @arg type @text タイプ
 * @desc 任意の文字が指定できるが
 * 通常のイベントコマンドでは使えない。
 * @type combo @default A
 * @option A @option B @option C @option D
 *
 * @arg operand @text オペランド(値)
 * @desc
 * @type boolean @default true
 *
 * @================================================
 * @command conditionMultiple @text 出現条件:複数スイッチ&結合
 * @desc 指定した値がすべてtrueならページ出現。
 *
 * @arg nameList @text スイッチ名リスト
 * @desc スイッチを名前で指定
 * @type string[] @default ["it", "done"]
 *
 * @================================================
 * @command conditionCompare @text 出現条件:数値比較
 * @desc 比較した結果がtrueならページ出現。
 *
 * @arg leftSide @text 左辺の数値
 * @desc 変数の名前、数値いずれか
 * @type string @default it
 *
 * @arg compare @text 比較演算子
 * @desc (規定値: ==)
 * @type select @default ==
 * @option 同じ == @value ==
 * @option 以外 != @value !=
 * @option 以上 ≦ @value ≦
 * @option より上 < @value <
 * @option 以下 ≧ @value ≧
 * @option より下 > @value >
 *
 * @arg rightSide @text 右辺の数値
 * @desc 変数の名前、数値いずれか
 * @type string @default it
 * 
 * @================================================
 * @command conditionCompareText @text 出現条件:文字比較
 * @desc 比較した結果がtrueならページ出現。
 *
 * @arg leftSide @text 左辺の文字変数
 * @desc 変数の名前
 * @type string @default it
 *
 * @arg compare @text 比較演算子
 * @desc (規定値: ==)
 * @type select @default ==
 * @option 同じ == @value ==
 * @option 以外 != @value !=
 *
 * @arg rightSide @text 右辺の文字
 * @desc 文字
 * @type string @default
 *
 * @================================================
 * @command conditionRange @text 出現条件:数値範囲
 * @desc 指定変数が範囲内にあればページ出現。
 *
 * @arg min @text 最小値
 * @desc 変数の名前、数値いずれか
 * @type number @default 0
 *
 * @arg center @text ≦中間値
 * @desc 変数の名前、数値いずれか
 * @type string @default it
 *
 * @arg max @text ≦最大値
 * @desc 変数の名前、数値いずれか
 * @type number @default 100
 */

( function() {
	"use strict";
	const PLUGIN_NAME = "TF_Condition";
	const PLUGIN_PATH = ( () => {
		const url = document.currentScript._url;
		const args = url.match( /^js\/plugins\/(.+)\.js$/ );
		return args[ 1 ];
	} )();

	// 論理演算子
	const OPE_NOT = "not";
	const OPE_GET = "get"; // この定数は使われていないが予約
	const OPE_AND = "and";
	const OPE_OR = "or";
	const OPE_EQUAL = "==";

	const CHAR_SPACE = " ";

	/*---- パラメータパース関数 ----*/
	const PARAM_TRUE = "true";
	const TYPE_BOOLEAN = "boolean";
	const TYPE_NUMBER = "number";

	/**
	 * ショートサーキットなら結果を一時スイッチに代入。
	 * @param {String} logope
	 * @returns {Boolean} ショートサーキットが成立したか
	 */
	function shortCircuit( logope ) {
		if( logope === OPE_AND ) {
			if( !$gameSwitches.value( switchItId ) ) return true;
		} else if( logope === OPE_OR ) {
			if( $gameSwitches.value( switchItId ) ) return true;
		}
		return false;
	}

	// ショートサーキット処理が済んでいる場合の代入処理
	function setItTo( value, logope ) {
		if( logope === OPE_EQUAL ) {
			value = value === $gameSwitches.value( switchItId );
		}
		$gameSwitches.setValue( switchItId, value );
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
		const i = $gameMap._events.findIndex( e => {
			if( e === null || e === undefined ) return false;	// _events[0] が null なので無視

			return $dataMap.events[ e._eventId ].name === value;
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
	function positionStringToArray( positionString ) {
		const args = positionString.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${fixedMapArgs}"`;
		return [ parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) ];
	}

	// イベントコマンドの番号
	const PLUGIN_COMMAND = 357;
	const PLUGIN_PARAM = 657;
	const COMMENT_LINE = 108;
	const COMMENT_END = 408;

	// HalfMove.js の確認
	const hasHalfMove = PluginManager._scripts.contains( "HalfMove" );

	// プラグインパラメータを受け取る
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );
	const variableItId = pluginParams.temporaryVariable;
	const switchItId = pluginParams.temporarySwitch;


	/*---- プラグインコマンド識別子 ----*/
	const COM_SWITCH = "switch";
	const COM_VARIABLE = "variable";
	const COM_TEXT_VARIABLE = "textVariable";
	const COM_SELFSWITCH = "selfSwitch";

	const COM_CHECK_SWITCH = "checkSwitch";
	const COM_CHECK_SELFSWITCH = "checkselfSwitch";
	const COM_CHECK_MULTIPLE = "checkMultiple";
	const COM_CHECK_COMPARE = "checkCompare";
	const COM_CHECK_COMPARE_TEXT = "checkCompareText";
	const COM_CHECK_RANGE = "checkRange";

	const COM_CHECK_LOCATION = "checkLocation";
	const COM_CHECK_FRONT_EVENT = "checkFrontEvent";
	const COM_CHECK_HERE_EVENT = "checkHereEvent";
	const COM_CHECK_JS = "checkJs";

	// [スイッチの操作]
	PluginManagerEx.registerCommand( document.currentScript, COM_SWITCH, function( args ) {
		$gameSwitches.setValueByName( args.name, stringToBoolean( args.operand ) );
	} );


	// [変数の操作]
	PluginManagerEx.registerCommand( document.currentScript, COM_VARIABLE, function( args ) {
		const operand = stringToNumber( args.operand );
		if( args.operate === "=" ) {
			$gameVariables.setValueByName( args.name, operand );
			return;
		}
		const value = $gameVariables.valueByName( args.name );
		switch( args.operate ) {
			// 指定変数に代入
			case "+=": $gameVariables.setValueByName( args.name, value + operand ); break;
			case "-=": $gameVariables.setValueByName( args.name, value - operand ); break;
			case "*=": $gameVariables.setValueByName( args.name, value * operand ); break;
			case "/=": $gameVariables.setValueByName( args.name, value / operand ); break;
			case "%=": $gameVariables.setValueByName( args.name, value % operand ); break;
			case "//=": $gameVariables.setValueByName( args.name, Mathi.floor( value / operand ) ); break;
			// 一時変数に代入
			case "+": $gameVariables.setValueByName( variableItId, value + operand ); break;
			case "-": $gameVariables.setValueByName( variableItId, value - operand ); break;
			case "*": $gameVariables.setValueByName( variableItId, value * operand ); break;
			case "/": $gameVariables.setValueByName( variableItId, value / operand ); break;
			case "%": $gameVariables.setValueByName( variableItId, value % operand ); break;
			case "//": $gameVariables.setValueByName( variableItId, Mathi.floor( value / operand ) ); break;
		}
	} );

	// [文字変数の操作]
	PluginManagerEx.registerCommand( document.currentScript, COM_TEXT_VARIABLE, function( args ) {
		const operand = String( args.operand );
		if( args.operate === "=" ) {
			$gameVariables.setValueByName( args.name, operand );
			return;
		}
		const value = String( $gameVariables.valueByName( args.name ) );
		switch( args.operate ) {
			// 指定変数に代入
			case "+=": $gameVariables.setValueByName( args.name, value + operand ); break;
			// 一時変数に代入
			case "+": $gameVariables.setValueByName( variableItId, value + operand ); break;
		}
	} );

	// [セルフスイッチの操作]
	PluginManagerEx.registerCommand( document.currentScript, COM_SELFSWITCH, function( args ) {
		if( args.eventId === EVENT_THIS ) args.eventId = this.character( 0 )._eventId;
		setSelfSwitch( args.mapId, args.eventId, args.type, stringToBoolean( args.operand ) );
	} );

	// [スイッチ判定]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_SWITCH, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const value = $gameSwitches.valueByName( args.name );
		if( args.operate === OPE_NOT ) {
			$gameSwitches.setValueByName( args.name, !value );
		} else {
			setItTo( value, args.operate );
		}
	} );

	// [セルフスイッチ判定]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_SELFSWITCH, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		if( args.eventId === EVENT_THIS ) args.eventId = this.character( 0 )._eventId;
		const value = getSelfSwitch( args.mapId, args.eventId, args.type );
		if( args.operate === OPE_NOT ) {
			setSelfSwitch( args.mapId, args.eventId, args.type, !value );
		} else {
			setItTo( value, args.operate );
		}
	} );

	// [複数スイッチ&結合]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_MULTIPLE, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const value = args.nameList.every( e => $gameSwitches.valueByName( e ) );
		setItTo( value, args.operate );
	} );

	// [プレイヤー位置判定]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_LOCATION, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const [ x, y ] = positionStringToArray( args.position );
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
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_JS, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const code = JSON.parse( args.script );
		const value = ( new Function( code ) ).call( this.character( 0 ) );
		setItTo( value, args.operate );
	} );

	// [数値比較]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_COMPARE, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const value = checkCompare( args );
		setItTo( value, args.operate );
	} );
	function checkCompare( args ) {
		const leftSide = stringToNumber( args.leftSide );
		const rightSide = stringToNumber( args.rightSide );
		switch( args.compare ) {
			case "==": return leftSide === rightSide;
			case "!=": return leftSide !== rightSide;
			case "≦": return leftSide <= rightSide;
			case "<": return leftSide < rightSide;
			case "≧": return leftSide >= rightSide;
			case ">": return leftSide > rightSide;
		}
	}

	// [文字比較]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_COMPARE_TEXT, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const value = checkCompareText( args );
		setItTo( value, args.operate );
	} );
	function checkCompareText( args ) {
		const leftSide = String( $gameVariables.valueByName( args.leftSide ) );
		const rightSide = String( args.rightSide );
		switch( args.compare ) {
			case "==": return leftSide === rightSide;
			case "!=": return leftSide !== rightSide;
		}
	}

	// [範囲判定]
	PluginManagerEx.registerCommand( document.currentScript, COM_CHECK_RANGE, function( args ) {
		if( shortCircuit( args.operate ) ) return;
		const value = checkRange( args );
		setItTo( value, args.operate );
	} );
	function checkRange( args ) {
		const minValue = stringToNumber( args.min );
		const centerValue = stringToNumber( args.center );
		const maxValue = stringToNumber( args.max );
		return minValue <= centerValue && centerValue <= maxValue;
	}

	// 文字列を数値に変換
	// 数値が書かれた文字列なら、それを数値に変換して返す
	// 文字列なら、それを変数の識別子と判断して、変数の中身をそのまま返す
	function stringToNumber( value ) {
		if( value === undefined || value === "" ) return 0;
		const num = parseFloat( value );
		if( isNaN( num ) ) {
			return $gameVariables.valueByName( value );
		} else {
			return num;
		}
	}

	function stringToBoolean( value ) {
		if( value === undefined || value === "" ) return false;
		if( typeof value === TYPE_BOOLEAN ) return value;
		return $gameSwitches.valueByName( value );
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
	 * @param {String} d プレイヤーの向き(テンキー対応)
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
	 * @param {String} name 変数(ID, 名前による指定が可能)
	 */
	Game_Variables.prototype.valueByName = function( name ) {
		return this.value( stringToVariableId( name ) );
	};
	/**
	 * 変数を文字列で指定し、値を設定。小数値も設定可能。
	 * @param {String} name 変数(ID, 名前による指定が可能)
	 * @param {String|Number} value 設定する値
	 */
	Game_Variables.prototype.setValueByName = function( name, value ) {
		const variableId = stringToVariableId( name );
		if( 0 < variableId && variableId < $dataSystem.variables.length ) {
			this._data[ variableId ] = value;
			this.onChange();
		}
	};

	/**
	 * 指定された変数のIDを返す。
	 * @param {String} name 変数(ID, 名前による指定が可能)
	 */
	function stringToVariableId( name ) {
		if( typeof name === TYPE_NUMBER ) return name;
		let i = $dataSystem.variables.findIndex( i => i === name );
		if( 0 <= i ) return i;
		i = parseInt( name, 10 );
		if( isNaN( i ) ) throw Error( `${PLUGIN_NAME}: I can't find the variable '${name}'` );
		return i;
	}


	/*--- Game_Switches ---*/
	/**
	 * スイッチの内容を文字列で指定して返す
	 * @param {String} name スイッチ(ID, 名前による指定が可能)
	 */
	Game_Switches.prototype.valueByName = function( name ) {
		return this.value( stringToSwitchId( name ) );
	};
	/**
	 * スイッチの内容を文字列で指定して設定
	 * @param {String} name スイッチ(ID, 名前による指定が可能)
	 * @param {String} value 設定する値
	 */
	Game_Switches.prototype.setValueByName = function( name, value ) {
		this.setValue( stringToSwitchId( name ), value );
	};
	/**
	 * 指定されたスイッチのIDを返す
	 * @param {String} name スイッチ(ID, 名前による指定が可能)
	 */
	function stringToSwitchId( name ) {
		if( typeof name === TYPE_NUMBER ) return name;
		let i = $dataSystem.switches.findIndex( i => i === name );
		if( 0 <= i ) return i;
		i = parseInt( name, 10 );
		if( isNaN( i ) ) throw Error( `${PLUGIN_NAME}: I can't find the switch '${name}'` );
		return i;
	}

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
		if( eventIdNumber <= 0 ) throw Error( `${PLUGIN_NAME}: Can't use '${eventId}'` );
		$gameSelfSwitches.setValue( [ mapIdNumber, eventIdNumber, type ], stringToBoolean( value ) );
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


	// 出現条件判定
	const CONDITION_SWITCH = "conditionSwitch";
	const CONDITION_SELFSWITCH = "conditionSelfSwitch";
	const CONDITION_MULTIPLE = "conditionMultiple";
	const CONDITION_COMPARE = "conditionCompare";
	const CONDITION_COMPARE_TEXT = "conditionCompareText";
	const CONDITION_RANGE = "conditionRange";
	/*--- Game_Event ---*/
	/**
	 * 指定イベントページの出現条件判定を行う。
	 * @param {RPG.EventPage} page 対象イベントページ
	 */
	const _Game_Event_meetsConditions = Game_Event.prototype.meetsConditions;
	Game_Event.prototype.meetsConditions = function( page ) {
		const doPage = _Game_Event_meetsConditions.apply( this, arguments );
		if( !doPage ) return false;

		// 全て条件に合ったらtrueを返す(条件に合わないものがひとつでもあったらfalseを返す)
		for( const command of page.list ) {
			if( command.code === COMMENT_LINE || command.code === COMMENT_END || command.code === PLUGIN_PARAM ) continue;	// 注釈は無視
			if( command.code !== PLUGIN_COMMAND ) return true;	// プラグインコマンド以外のイベントコマンド
			if( command.parameters[ 0 ] !== PLUGIN_PATH ) return true;	// 他のプラグイン

			const pluginCommand = command.parameters[ 1 ];
			const args = command.parameters[ 3 ];
			switch( pluginCommand ) {
				case CONDITION_SWITCH:// [出現条件:スイッチ]
					if( $gameSwitches.valueByName( args.name ) !== ( args.operand === PARAM_TRUE ) ) return false;
					continue;
				case CONDITION_SELFSWITCH:// [出現条件:セルフスイッチ]
					if( args.eventId === EVENT_THIS ) args.eventId = this._eventId;
					if( getSelfSwitch( args.mapId, args.eventId, args.type ) !== ( args.operand === PARAM_TRUE ) ) return false;
					continue;
				case CONDITION_MULTIPLE:// [出現条件:複数スイッチ&結合]
					if( !args.nameList.every( e => $gameSwitches.valueByName( e ) ) ) return false;
					continue;
				case CONDITION_COMPARE:// [出現条件:数値比較]
					if( !checkCompare( args ) ) return false;
					continue;
				case CONDITION_COMPARE_TEXT:// [出現条件:文字列比較]
					if( !checkCompareText( args ) ) return false;
					continue;
				case CONDITION_RANGE:// [出現条件:数値範囲]
					if( !checkRange( args ) ) return false;
					continue;
				default:
					return true;	// [出現条件] 以外のプラグインコマンド
			}
		}
		return true;
	};
} )();
