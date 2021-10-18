//========================================
// TF_BalloonEx.js
// Version :0.6.3.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020-2021
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:
 * @target MZ
 * @plugindesc [Display balloon icon] extension
 * @author Tobishima-Factory
 *
 * @param balloonParamList
 * @desc The presets of balloon animation.
 * @type struct<BalloonParam>[]
 * @default ["{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"12\"}"]
 * 
 * @param baseDy
 * @desc The base difference y coordinate for a balloon.
 * @type number
 * @default 0
 * 
 *
 * @help
 * ● Basic usage
 * 		Write the settings to each [Balloon ID] of the plug-in parameter "preset".
 * 　・You can edit the settings for dx, dy, loops, speed, waitTime.
 * 　・Summation of startPatterns, loopPatterns and endPatterns must under or equal 8.
 * 　・For details on the values to be set in parameter "preset", refer to the help text for entering each value.
 * 　Now, You execute [Display balloon icon] event command, The animation is played back with the settings according to [Balloon ID].
 * 　When combined with Triacontan's BalloonPlaySe.js, the sound can be played automatically, which is convenient.
 *
 * 
 * ● Plug-in command
 *------------------------------
 * TF_START_BALLOON [Event ID] [Balloon ID] [Wait for finish] [dx] [dy]
 * 　Start a balloon animation.All parameters can omitted.
 * 　[Event ID] 0:This event  -1:Player  -2〜-4:Member 1〜:Event ID (Default:0)
 * 　　You can use this, player,follower0,follower1,follower2 instead of the number.
 * 　　And [name] of the event. ( But can't use the name about like identifier of 'this', includes space, and number )
 * 　[Balloon ID] 1 to 15 counting from the top of the image( img/system/balloon.png ). (Default:11)
 * 　　And [name] of the balloon( set at plugin property ).
 * 　[Wait for finish] true:Wait for finish  false:Don't stop (Default:false)
 * 　[dx] Difference x coordinate. (Default:dx at plug-in parameter)
 * 　[dy] Difference y coordinate. (Default:dy at plug-in parameter)
 * 
 * 　EX: TF_START_BALLOON -1 5 false 0 20
 *------------------------------
 * TF_SET_BALLOON [Event ID] [Balloon ID] [Pattern Number] [Wait time] [Wait for finish] [dx] [dy]
 * 　[Pattern Number] 1 to 8 patterns from the left of the balloon image. (Default:8)
 * 　[Wait time] The number of frames to display the balloon( 0:Loop until TF STOP BALLOON is executed ). (Default:64)
 * 
 * 　EX: TF_SET_BALLOON 0 9 2 60 true 10 -50
 *------------------------------
 * TF_LOCATE_BALLOON [Event ID] [dx] [dy]
 * 　Locate ballon position. Apply to displayed balloon.
 * 
 * 　EX: TF_LOCATE_BALLOON 15 0 10
 *------------------------------
 * TF_STOP_BALLOON [Event ID] [Show end animation]
 * 　Stop balloon animation.
 * 　When executing TF_START_BALLOON specifying the preset [Loop] to 0.
 * 　[Show end animation] true:Show end animation  false:Immediately (Default:false)
 * 
 * 　EX: TF_STOP_BALLOON 0 true
 *------------------------------
 * All of the numbers of [Event ID][Balloon ID][dx][dy] can set format V[n]. That means variables.
 * 
 * 　EX : TF_LOCATE_BALLOON 0 V[1] V[2]
 *------------------------------
 * 
 * 
 * ● Scripts for [route settings]
 *------------------------------
 * this.TF_startBalloon( [Balloon ID], [Wait for finish], [dx], [dy] );
 * 　The function of  TF_START_BALLOON.
 * 　[Wait for finish], [dx], [dy] can omitted.Default values are confirmed on TF_START_BALLOON.
 * 　this.balloon is same syntax of this.TF_startBalloon.
 * 　If you use EventEffects.js, Place EventEffects.js over this plug-in.
 *------------------------------
 * this.TF_setBalloon( [Balloon ID], [Pattern Number], [Wait time], [Wait for finish], [dx], [dy] );
 * 　The function of TF_SET_BALLOON.
 *------------------------------
 * this.TF_locateBalloon( [dx], [dy] );
 * 　The function of  TF_LOCATE_BALLOON.
 *------------------------------
 * this.TF_stopBalloon( [Show end animation] );
 * 　The function of  TF_STOP_BALLOON .
 *------------------------------
 *
 * Released under the MIT License.
 */
/*~struct~BalloonParam:
 *
 * @param name
 * @desc  use for [Balloon ID]
 * @type String
 * @default ''
 *
 * @param dx
 * @desc difference x coordinate.
 * @type number
 * @default 0
 * @min -1000000
 *
 * @param dy
 * @desc difference y coordinate.
 * @type number
 * @default 0
 * @min 0
 * @min -1000000
 *
 * @param startPatterns
 * @desc The number of appearance patterns.
 * @type number
 * @default 2
 * @min 0
 * @max 7
 *
 * @param loopPatterns
 * @desc The number of loop patterns.
 * @type number
 * @default 6
 * @min 0
 * @max 8
 *
 * @param endPatterns
 * @desc The number of disappearance patterns.
 * @type number
 * @default 0
 * @min 0
 * @max 7
 *
 * @param loops
 * @desc The number of loops.(0:Loop until TF STOP BALLOON is executed)
 * @type number
 * @default 1
 * @min 0
 *
 * @param speed
 * @desc Duration of the pattern.(frame)
 * @type number
 * @default 8
 * @min 0
 *
 * @param waitTime
 * @desc Duration of the last pattern.(frame)
 * @type number
 * @default 12
 * @min 0
 */

/*:ja
 * @target MZ
 * @plugindesc [フキダシアイコンの表示]の拡張
 * @author とんび@鳶嶋工房
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_BalloonEx.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @param balloonParamList @text アニメーション設定
 * @type struct<BalloonParam>[]
 * @default ["{\"name\":\"びっくり\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"0\",\"loopPatterns\":\"7\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"4\",\"waitTime\":\"24\"}","{\"name\":\"はてな\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"0\",\"loopPatterns\":\"8\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"4\",\"waitTime\":\"24\"}","{\"name\":\"音符\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"0\",\"loopPatterns\":\"8\",\"endPatterns\":\"0\",\"loops\":\"2\",\"speed\":\"4\",\"waitTime\":\"12\"}","{\"name\":\"ハート\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"4\",\"loopPatterns\":\"4\",\"endPatterns\":\"0\",\"loops\":\"3\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"怒り\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"1\",\"loopPatterns\":\"3\",\"endPatterns\":\"0\",\"loops\":\"4\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"汗\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"0\",\"loopPatterns\":\"8\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"8\",\"waitTime\":\"32\"}","{\"name\":\"くしゃくしゃ\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"1\",\"loopPatterns\":\"3\",\"endPatterns\":\"0\",\"loops\":\"3\",\"speed\":\"8\",\"waitTime\":\"0\"}","{\"name\":\"沈黙\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"1\",\"loopPatterns\":\"3\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"12\",\"waitTime\":\"48\"}","{\"name\":\"電球\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"3\",\"endPatterns\":\"0\",\"loops\":\"2\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"Zzz\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"0\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"2\",\"speed\":\"10\",\"waitTime\":\"12\"}","{\"name\":\"星\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"6\",\"endPatterns\":\"0\",\"loops\":\"0\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"はてな複数\",\"dx\":\"18\",\"dy\":\"15\",\"startPatterns\":\"5\",\"loopPatterns\":\"3\",\"endPatterns\":\"0\",\"loops\":\"4\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"音符複数\",\"dx\":\"20\",\"dy\":\"0\",\"startPatterns\":\"3\",\"loopPatterns\":\"5\",\"endPatterns\":\"0\",\"loops\":\"0\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"ハート複数\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"3\",\"loopPatterns\":\"5\",\"endPatterns\":\"0\",\"loops\":\"0\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"ユゲダシ\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"5\",\"endPatterns\":\"0\",\"loops\":\"4\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"汗複数\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"3\",\"loopPatterns\":\"3\",\"endPatterns\":\"1\",\"loops\":\"4\",\"speed\":\"8\",\"waitTime\":\"12\"}","{\"name\":\"がやがや\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"2\",\"loopPatterns\":\"3\",\"endPatterns\":\"2\",\"loops\":\"4\",\"speed\":\"8\",\"waitTime\":\"0\"}","{\"name\":\"きゃっきゃ\",\"dx\":\"20\",\"dy\":\"5\",\"startPatterns\":\"3\",\"loopPatterns\":\"2\",\"endPatterns\":\"3\",\"loops\":\"40\",\"speed\":\"8\",\"waitTime\":\"0\"}","{\"name\":\"ヒットマーク\",\"dx\":\"0\",\"dy\":\"40\",\"startPatterns\":\"5\",\"loopPatterns\":\"1\",\"endPatterns\":\"2\",\"loops\":\"5\",\"speed\":\"1\",\"waitTime\":\"0\"}","{\"name\":\"カウントダウン\",\"dx\":\"0\",\"dy\":\"0\",\"startPatterns\":\"5\",\"loopPatterns\":\"0\",\"endPatterns\":\"0\",\"loops\":\"1\",\"speed\":\"60\",\"waitTime\":\"0\"}"]
 * 
 * @param baseDy @text 基本y座標差分
 * @type number
 * @default 0
 * 
 * @================================================
 * @help
 * ●基本的な使い方
 * 　プラグインパラメータの[アニメーション設定]に[フキダシ番号]毎に設定を書く。
 * 　・配置(dx,dy) ループ回数(loops) 速度(speed) 終了時間(waitTime)など設定。
 * 　・パターン数(出現, ループ, 消滅)は計8以内。
 * 　・値について詳細は、それぞれのヘルプ文などを参照。
 * 　通常の[フキダシアイコンの表示]イベントコマンドを実行すると、
 * 　[フキダシ番号]に応じた設定でアニメが再生されます。
 *
 * ●プラグインコマンド
 * [フキダシアニメ開始]
 * [単体フキダシ表示]
 * [フキダシ位置変更]
 * [フキダシアニメ停止]
 * 
 * ● [移動ルートの設定]で使えるスクリプト
 * 
 * this.TF_startBalloon( [フキダシ番号], [完了までウエイト], [dx], [dy] );
 * 　[フキダシアニメ開始]の機能
 * 　[完了までウエイト], [dx], [dy] は省略できます。
 * 　規定値は [フキダシアニメ開始] に準拠します。
 *------------------------------
 * this.TF_setBalloon( [フキダシ番号], [パターン番号], [表示フレーム数], [完了までウェイト], [dx], [dy] );
 * 　[単体フキダシ表示]の機能
 *------------------------------
 * this.TF_locateBalloon( [dx], [dy] );
 * 　[フキダシ位置変更]の機能
 *------------------------------
 * this.TF_stopBalloon( [消滅アニメを表示] );
 * 　[フキダシアニメ停止]の機能
 *------------------------------
 *
 *
 * 利用規約 : MITライセンス
 * @================================================
 * @command startBalloon @text フキダシアニメ開始
 * @desc
 * ほぼ[フキダシアイコンの表示]コマンドと同じ。
 * +フォロワー指定 +表示位置指定 の機能強化。
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg balloonIndex @text フキダシ番号
 * @desc
 * [アニメーション設定]で設定した名前か
 * フキダシ番号(数値)を入力します。
 * @type combo @default びっくり
 * @option びっくり @option はてな @option 音符 @option ハート @option 怒り
 * @option 汗 @option くしゃくしゃ @option 沈黙 @option 電球 @option 沈黙 @option Zzz
 *
 * @arg isWait @text 完了までウェイト
 * @type boolean @default false
 * @on 待つ @off 待たない(規定)
 *
 * @arg dx @text 表示位置X差分
 * @desc
 * [テキスト]で空に設定すると[アニメーション設定]で
 * フキダシ番号毎に設定された値が使われます。
 * @type number @default
 * @min -1000000
 * 
 * @arg dy @text 表示位置Y差分
 * @desc
 * [テキスト]で空に設定すると[アニメーション設定]で
 * フキダシ番号毎に設定された値が使われます。
 * @type number @default
 * @min -1000000
 * 
 * @================================================
 * @command setBalloon @text 単体フキダシ表示
 * @desc
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg balloonIndex @text フキダシ番号
 * @desc
 * [アニメーション設定]で設定した名前か
 * フキダシ番号(数値)を入力します。
 * @type combo @default びっくり
 * @option びっくり @option はてな @option 音符 @option ハート @option 怒り
 * @option 汗 @option くしゃくしゃ @option 沈黙 @option 電球 @option 沈黙 @option Zzz
 *
 * @arg patternIndex @text パターン番号
 * @desc
 * フキダシ画像の左から 0〜7 のパターン(規定値:7)
 * @type number @default 7
 * @min 0 @max 7
 * 
 * @arg waitTime @text 表示フレーム数
 * @desc
 * 0:TF_STOP_BALLOONを実行するまでループ
 * (規定値:64フレーム)
 * @type number @default 64
 * @min 0
 * 
 * @arg isWait @text 完了までウェイト
 * @type boolean @default false
 * @on 待つ @off 待たない(規定)
 *
 * @arg dx @text 表示位置X差分
 * @desc
 * [テキスト]で空に設定すると[アニメーション設定]で
 * フキダシ番号毎に設定された値が使われます。
 * @type number @default
 * @min -1000000
 *
 * @arg dy @text 表示位置Y差分
 * @desc
 * [テキスト]で空に設定すると[アニメーション設定]で
 * フキダシ番号毎に設定された値が使われます。
 * @type number @default
 * @min -1000000
 *
 * @================================================
 * @command locateBalloon @text フキダシ位置変更
 * @desc
 * フキダシ表示中のみ可能。
 * 
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg dx @text 表示位置X差分
 * @desc
 * [テキスト]で空に設定すると[アニメーション設定]で
 * フキダシ番号毎に設定された値が使われます。
 * @type number @default
 * @min -1000000
 *
 * @arg dy @text 表示位置Y差分
 * @desc
 * [テキスト]で空に設定すると[アニメーション設定]で
 * フキダシ番号毎に設定された値が使われます。
 * @type number @default
 * @min -1000000
 *
 * @================================================
 * @command stopBalloon @text フキダシアニメ停止
 * @desc
 * [フキダシアニメ開始][単体フキダシ表示]で
 * [ループ回数] 0 の場合、これを使って止める。
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg showFinish @text 消滅アニメ表示
 * @desc
 * 消滅アニメを表示してから消すか。
 * @type boolean @default false
 * @on 消滅アニメ表示(規定) @off 即時
 */

/*~struct~BalloonParam:ja
 * *
 * @param name @text 名前
 * @desc  [フキダシ番号]に使用する名前
 * @type String
 * 
 * @param dx @text x差分
 * @desc フキダシ表示座標のx差分。正の値で右に負の値で左にずれる。
 * @type number
 * @default 0
 * @min -1000000
 * 
 * @param dy @text y差分
 * @desc フキダシ表示座標のy差分。正の値で下に負の値で上にずれる。
 * @type number
 * @default 0
 * @min 0
 * @min -1000000
 *
 * @param startPatterns @text 出現パターン
 * @desc 出現に使用するパターン数。
 * @type number @default 2
 * @min 0 @max 7
 *
 * @param loopPatterns @text ループパターン
 * @desc ループに使用するパターン数。
 * @type number @default 6
 * @min 0 @max 8
 * 
 * @param endPatterns @text 消滅パターン
 * @desc 消滅に使用するパターン数。
 * @type number @default 0
 * @min 0 @max 7
 *
 * @param loops @text ループ回数
 * @desc 0:TF_STOP_BALLOONを実行するまでループ
 * @type number @default 1
 * @min 0
 *
 * @param speed @text パターン表示時間
 * @desc 1パターンの表示時間(フレーム)
 * @type number @default 8
 * @min 0
 *
 * @param waitTime @text 最終パターン表示時間
 * @desc 最終パターンの表示時間(フレーム)
 * @type number @default 12
 * @min 0
 */

( () => {
	"use strict";
	const PLUGIN_NAME = "TF_BalloonEx";
	// プラグインコマンド
	const COM_START_BALLOON = "startBalloon";
	const COM_SET_BALLOON = "setBalloon";
	const COM_LOCATE_BALLOON = "locateBalloon";
	const COM_STOP_BALLOON = "stopBalloon";

	// ウェイトモード
	const WAIT_BALLOON = "balloon";

	// アニメーション
	const PATTERNS_IN_LINE = 8;	// フキダシ画像の横1行に含まれるパターン数
	const PHASE_LOOP = "loop"; // 開始からループ中まで
	const PHASE_END = "end";	// 終了アニメーション
	const PHASE_FINISH = "finish";	// アニメーション即時終了
	const PHASE_SHOW_FINISH = "showFinish";	// 消滅アニメーションののち終了

	// typeof 型判定用定数
	const TYPE_NUMBER = "number";

	/**
	 * パラメータを受け取る
	 */
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );
	const baseDy = pluginParams.baseDy;
	const balloonParamList = pluginParams.balloonParamList;

	/**
	 * 与えられた文字列に変数が指定されていたら、変数の内容に変換して返す。
	 * @param {String} value 変換元の文字列( \V[n]形式を含む )
	 * @return {String} 変換後の文字列
	 */
	function treatValue( value ) {
		if( typeof value === TYPE_NUMBER ) return value;
		if( value === undefined || value === "" ) return "0";
		const result = value.match( /\x1bV\[(.+)\]/i );
		if( result === null ) return value;
		const id = parseInt( result[ 1 ], 10 );
		if( isNaN( id ) ) {
			return $gameVariables.valueByName( result[ 1 ] );
		} else {
			return $gameVariables.value( id );
		}
	}

	/*--- Game_Variables ---*/
	/**
	 * 変数を文字列で指定し、値を返す。
	 * @param {String} name 変数(ID, 名前, \V[n]による指定が可能)
	 */
	Game_Variables.prototype.valueByName = function( name ) {
		return this.value( stringToVariableId( name ) );
	};
	/**
	 * 指定された変数のIDを返す。
	 * @param {String} name 変数(ID, 名前, \V[n]による指定が可能)
	 */
	function stringToVariableId( name ) {
		name = treatValue( name );
		let i = $dataSystem.variables.findIndex( i => i === name );
		if( 0 <= i ) return i;
		i = parseInt( name, 10 );
		if( isNaN( i ) ) throw Error( `${PLUGIN_NAME}: I can't find the variable '${name}'` );
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
		if( isNaN( result ) ) throw Error( `${PLUGIN_NAME}: [${value}] is not a number.` );
		return result;
	}


	/*--- イベントID・オブジェクト取得関数 ---*/
	/*---- イベントIDの配置オフセット ----*/
	const FOLLOWER_OFFSET = -2;
	const VEHICLE_OFFSET = -100;

	/*---- イベントID変換用文字列 ----*/
	const EVENT_THIS = "this";
	const EVENT_PLAYER = "player";
	const EVENT_FOLLOWER0 = "follower0";
	const EVENT_FOLLOWER1 = "follower1";
	const EVENT_FOLLOWER2 = "follower2";
	const VEHICLE_BOAT = "boat";
	const VEHICLE_SHIP = "ship";
	const VEHICLE_AIRSHIP = "airship";

	/**
	 * character を拡張して隊列メンバーも指定できるようにしたもの。
	 * @param {Game_Interpreter} interpreter インタプリタ
	 * @param {Number} id 拡張イベントID
	 * @returns {Game_CharacterBase}
	 */
	function getEventById( interpreter, id ) {
		if( id <= VEHICLE_OFFSET ) {
			return $gameMap._vehicles[ VEHICLE_OFFSET - id ];			// 乗り物(0〜2)
		} else if( id <= FOLLOWER_OFFSET ) {
			return $gamePlayer.followers().follower( FOLLOWER_OFFSET - id );			// 隊列メンバー(0〜2)
		} else {
			return interpreter.character( id );			// プレイヤーキャラおよびイベント
		}
	}

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
			case EVENT_THIS: return 0;
			case EVENT_PLAYER: return -1;
			case EVENT_FOLLOWER0: return FOLLOWER_OFFSET;
			case EVENT_FOLLOWER1: return FOLLOWER_OFFSET - 1;
			case EVENT_FOLLOWER2: return FOLLOWER_OFFSET - 2;
			case VEHICLE_BOAT: return VEHICLE_OFFSET;
			case VEHICLE_SHIP: return VEHICLE_OFFSET - 1;
			case VEHICLE_AIRSHIP: return VEHICLE_OFFSET - 2;
		}

		const e = $dataMap.events.find( e => e && e.name === value );
		if( e === undefined ) throw Error( `${PLUGIN_NAME}: I can't find the event '${value}'` );
		return e.id;
	}

	/**
	 * 文字列をフキダシ番号へ変換
	 * @param {String} value フキダシ番号かnameプロパティ
	 * @returns {Number} フキダシ番号
	 */
	function stringToBalloonIndex( value ) {
		const result = parseInt( treatValue( value ), 10 );
		if( !isNaN( result ) ) return result;

		const i = balloonParamList.findIndex( e => e.name === value );
		if( i === -1 ) throw Error( `指定したフキダシ[${value}]がありません。` );
		return i + 1;
	}

	/**
	 * TF_SET_BALLOON
	 * @param {Game_Character} character 
	 * @param {Number} balloonIndex フキダシ番号
	 * @param {Number} patternIndex パターン番号
	 * @param {Number} waitTime 表示フレーム数
	 * @param {Number} dx x差分
	 * @param {Number} dy y差分
	 */
	function setBalloon( character, balloonIndex, patternIndex, waitTime, dx, dy ) {
		character._balloon = new Game_Balloon().setSinglePattern( balloonIndex, patternIndex, waitTime, dx, dy );
		$gameTemp.requestBalloon( character, balloonIndex );
	}

	/**
	 * フキダシ待ち状態に設定。
	 * @param {Game_Character} character 実行中のイベント・プレイヤーキャラ
	 */
	function setWaitMode2Balloon( character ) {
		getInterpreterFromCharacter( character ).setWaitMode( WAIT_BALLOON );
	}
	const TRIGGER_PARALLEL = 4;	// 並列処理
	/**
	 * 	イベントで使われているインタプリタを取り出す。
	 * @param {*} character 
	 */
	function getInterpreterFromCharacter( character ) {
		let interpreter;
		if( character._trigger === TRIGGER_PARALLEL ) {
			interpreter = character._interpreter;
		} else {
			interpreter = $gameMap._interpreter;
		}
		while( interpreter._childInterpreter ) {
			interpreter = interpreter._childInterpreter;
		}
		return interpreter;
	}

	/**
	 * フキダシ位置変更
	 * @param {Game_Character} gameCharacter キャラ
	 * @param {Number} dx x差分
	 * @param {Number} dy y差分
	 */
	function locateBalloon( gameCharacter, dx, dy ) {
		const balloonParam = balloonParamList[ gameCharacter._balloon.balloonIndex - 1 ];
		gameCharacter._balloon.dx = ( typeof dx === TYPE_NUMBER ) ? dx : balloonParam.dx;
		gameCharacter._balloon.dy = ( typeof dy === TYPE_NUMBER ) ? dy : balloonParam.dy;
	}

	/**
	 * フキダシアイコン表示の停止
	 * @param {Game_CharacterBase} targetEvent 対象となるキャラ・イベント
	 * @param {Boolean} showFinish 消滅アニメを表示するか
	 */
	function stopBalloon( targetEvent, showFinish ) {
		if( !targetEvent._balloon ) return;

		if( showFinish ) {
			targetEvent._balloon.phase = PHASE_SHOW_FINISH;
		} else {
			targetEvent._balloon.phase = PHASE_FINISH;
		}
	}

	/**
	 * プラグインコマンドの登録
	 */
	// [フキダシアニメ開始] コマンド
	PluginManagerEx.registerCommand( document.currentScript, COM_START_BALLOON, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		const balloonIndex = stringToBalloonIndex( args.balloonIndex );
		targetEvent._balloon = new Game_Balloon().setByBalloonIndex( balloonIndex, args.dx, args.dy );
		$gameTemp.requestBalloon( targetEvent, balloonIndex );
		if( args.isWait ) {
			this.setWaitMode( WAIT_BALLOON );
		}
	} );
	// [フキダシアニメ開始] スクリプト
	Game_CharacterBase.prototype.TF_startBalloon = function( index, isWait, dx, dy ) {
		const balloonIndex = stringToBalloonIndex( index );
		this.requestBalloon( balloonIndex );
		this._balloon = new Game_Balloon().setByBalloonIndex( balloonIndex, dx, dy );
		$gameTemp.requestBalloon( this, balloonIndex );
		if( isWait ) {
			setWaitMode2Balloon( this );
		}
	};

	// [単体フキダシ表示] コマンド
	PluginManagerEx.registerCommand( document.currentScript, COM_SET_BALLOON, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		const balloonIndex = stringToBalloonIndex( args.balloonIndex );
		setBalloon( targetEvent, balloonIndex, args.patternIndex, args.waitTime, args.dx, args.dy );
		if( args.isWait ) {
			this.setWaitMode( WAIT_BALLOON );
		}
	} );
	// [単体フキダシ表示] スクリプト
	Game_CharacterBase.prototype.TF_setBalloon = function( balloonIndex, patternIndex, waitTime, isWait, dx, dy ) {
		patternIndex = ( patternIndex ? parseIntStrict( patternIndex ) : 8 );
		waitTime = ( waitTime ? parseIntStrict( waitTime ) : 64 );
		setBalloon( this, balloonIndex, patternIndex, waitTime, dx, dy );
		if( isWait ) {
			setWaitMode2Balloon( this );
		}
	};

	// [フキダシ位置変更] コマンド
	PluginManagerEx.registerCommand( document.currentScript, COM_LOCATE_BALLOON, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		if( targetEvent._balloon ) {
			locateBalloon( targetEvent, args.dx, args.dy );
		}
	} );
	// [フキダシ位置変更] スクリプト
	Game_CharacterBase.prototype.TF_locateBalloon = function( dx, dy ) {
		if( this._balloon ) {
			locateBalloon( this, dx, dy );
		}
	};

	// [フキダシアニメ停止] コマンド
	PluginManagerEx.registerCommand( document.currentScript, COM_STOP_BALLOON, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		stopBalloon( targetEvent, args.showFinish );
	} );
	// [フキダシアニメ停止] スクリプト
	Game_CharacterBase.prototype.TF_stopBalloon = function( showFinish ) {
		stopBalloon( this, showFinish );
	};

	/*--- Sprite_Character ---*/
	/**
	 * 初期化時にフキダシデータがあったら復帰。
	 */
	const _Sprite_Character_initialize = Sprite_Character.prototype.initialize;
	Sprite_Character.prototype.initialize = function( character ) {
		_Sprite_Character_initialize.apply( this, arguments );

		if( character._balloon ) {
			$gameTemp.requestBalloon( this._character, character._balloon.balloonIndex );
		}
	};

	/**
	 * @class Game_Balloon
	 * @property duration 残り時間
	 * @property loopStartDuration	ループ開始時間
	 * @property loopEndDuration	ループ終了時間
	 * @property endDuration	完了時間
	 * @property phase	実行段階
	 * @property loops	残り繰り返し回数
	 *
	 */
	class Game_Balloon {
		constructor() {
		}
		/**
		 * 
		 * @param {number} balloonIndex フキダシ番号
		 * @param {number} dx 差分x
		 * @param {number} dy 差分y
		 * @returns {Game_Balloon}
		 */
		setByBalloonIndex( balloonIndex, dx, dy ) {
			const balloonParam = balloonParamList[ balloonIndex - 1 ];
			this.balloonIndex = balloonIndex;
			this.dx = ( typeof dx === TYPE_NUMBER ) ? dx : balloonParam.dx;
			this.dy = ( ( typeof dy === TYPE_NUMBER ) ? dy : balloonParam.dy ) + baseDy;
			this.waitTime = balloonParam.waitTime;
			this.speed = balloonParam.speed;
			this.duration = PATTERNS_IN_LINE * this.speed + this.waitTime;
			this.loopStartDuration = this.duration - balloonParam.startPatterns * this.speed;
			this.loopEndDuration = this.loopStartDuration - balloonParam.loopPatterns * this.speed;
			this.endDuration = this.loopEndDuration - balloonParam.endPatterns * this.speed;
			this.lastIndex = balloonParam.startPatterns + balloonParam.loopPatterns + balloonParam.endPatterns - 1;
			this.phase = PHASE_LOOP;
			this.loops = balloonParam.loops;
			return this;
		}
		/**
		 *
		 * @param {number} balloonIndex フキダシ番号
		 * @param {number} patternIndex パターン番号
		 * @param {number} waitTime 終了待ち時間
		 * @param {number} dx 差分x
		 * @param {number} dy 差分y
		 * @returns {Game_Balloon}
		 */
		setSinglePattern( balloonIndex, patternIndex, waitTime, dx, dy ) {
			const balloonParam = balloonParamList[ balloonIndex - 1 ];
			if( waitTime === 0 ) {
				// waitTime:0 の場合は無限ループ
				this.loops = 0;
				this.waitTime = 2;
			} else {
				this.loops = 1;
				this.waitTime = waitTime;
			}

			this.balloonIndex = balloonIndex;
			this.dx = ( typeof dx === TYPE_NUMBER ) ? dx : balloonParam.dx;
			this.dy = ( ( typeof dy === TYPE_NUMBER ) ? dy : balloonParam.dy ) + baseDy;
			this.lastIndex = patternIndex;
			this.speed = 0;

			this.endDuration = this.loopEndDuration = this.loopStartDuration = this.duration = this.waitTime;
			this.phase = PHASE_LOOP;
			return this;
		};
	}

	Sprite_Balloon.prototype.isPlaying = function() {
		if( this._duration > 0 ) {
			return true;
		} else {
			if( this._balloon ) {
				//TODO
				delete this._target._character._balloon;
			}
			return false;
		}
	};


	/*--- Sprite_Balloon ---*/
	/**
	 * アップデート。
	 */
	const _Sprite_Balloon_update = Sprite_Balloon.prototype.update;
	Sprite_Balloon.prototype.update = function() {
		Sprite.prototype.update.call( this );
		_Sprite_Balloon_update.call( this );
		if( !this._balloon ) return;

		// stopBalloonに対する処理
		if( this._balloon.phase === PHASE_FINISH ) {
			this._balloon.phase = PHASE_END;
			this._duration = 0;
		} else if( this._balloon.phase === PHASE_SHOW_FINISH ) {
			this._balloon.phase = PHASE_END;
			if( this._balloon.loopEndDuration < this._duration ) {
				this._duration = this._balloon.loopEndDuration;
			}
		}

		if( this._balloon.phase !== PHASE_LOOP || this._balloon.loopEndDuration < this._duration ) {
			this._balloon.duration = this._duration;
			return;
		}
		if( this._balloon.loops === 1 ) {
			// ループ終了
			this._balloon.phase = PHASE_END;
		} else {
			// ループ継続
			if( 1 < this._balloon.loops ) {
				this._balloon.loops--;
			}
			this._balloon.duration = this._duration = this._balloon.loopStartDuration;
		}
	};

	const _Sprite_Balloon_setup = Sprite_Balloon.prototype.setup;
	Sprite_Balloon.prototype.setup = function( targetSprite, balloonIndex ) {
		this._balloon = targetSprite._character._balloon;
		_Sprite_Balloon_setup.apply( this, arguments );
	};

	/**
	 * 現在の表示パターンを返す。
	 */
	const _Sprite_Balloon_frameIndex = Sprite_Balloon.prototype.frameIndex;
	Sprite_Balloon.prototype.frameIndex = function() {
		if( this._balloon && this._duration < this._balloon.endDuration ) {
			return this._balloon.lastIndex;// 最終アニメ(wait用)パターン
		} else {
			return _Sprite_Balloon_frameIndex.call( this );
		}
	};

	/**
	 * 表示位置に差分を追加する。
	 */
	const _Sprite_Balloon_updatePosition = Sprite_Balloon.prototype.updatePosition;
	Sprite_Balloon.prototype.updatePosition = function() {
		_Sprite_Balloon_updatePosition.call( this );

		if( this._balloon ) {
			this.x += this._balloon.dx;
			this.y += this._balloon.dy;
		}
	};

	const _Sprite_Balloon_speed = Sprite_Balloon.prototype.speed;
	Sprite_Balloon.prototype.speed = function() {
		if( this._balloon ) {
			return this._balloon.speed;
		} else {
			return _Sprite_Balloon_speed.call( this );
		}
	};

	const _Sprite_Balloon_waitTime = Sprite_Balloon.prototype.waitTime;
	Sprite_Balloon.prototype.waitTime = function() {
		if( this._balloon ) {
			return this._balloon.waitTime;
		} else {
			return _Sprite_Balloon_waitTime.call( this );
		}
	};
} )();
