//========================================
// TF_CharEx.js
// Version :0.6.7.0
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
 * @plugindesc キャラのアニメや移動など強化
 * @author とんび@鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_CharEx.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @param moveUnit @text [アニメの終了]時の配置単位
 * @desc 規定値: 通常(1タイル)
 * @type select @default 1
 * @option 通常(1タイル) @value 1
 * @option 半歩(0.5タイル) @value 0.5
 * @option なし(アナログ) @value 0
 * 
 * @help
 * 主な機能とイベントコマンドにない利点。
 * 
 * 1 : キャラ( イベント・プレイヤー・隊列メンバー )の位置・パターンの設定。
 * 　ピクセル単位の位置指定で、キャラの繊細なアニメーションができる。
 * 　歩行パターン別の指定で、キャラ素材を無駄なく利用できる。
 * 
 * 2 : 頻出するアニメーションの指定。
 * 　ドア・宝箱の開閉など、縦のアニメーションを1コマンドで指定。
 * 　歩行パターン別に指定可能なので、3列違う素材を置ける。
 *
 * 3 : キャラの[ルート移動]の簡易コマンドによる指定。
 * 　例えば[上に移動][上に移動][上に移動][上に移動]と指定が必要な場合、
 * 　↑4 と書けるので回数調整が容易で、全体の見通しが良い。
 *
 * 4 : 通常のイベントコマンドでは指定できない隊列メンバーを指定できる。
 * 　プレイヤーの設定がコピーされるため、[向き固定]など指定しても反映されない。
 * 　反映させたい場合は[隊列メンバーの追跡設定]をOFFにする。
 *
 * 利用できるプラグインコマンド一覧
 * [移動ルートの一括設定]
 * [キャラパターン指定アニメ]
 * [キャラパターンを指定]
 * [イベントを指定座標に移動]
 * [イベントを別のイベント位置に移動]
 * [イベントを指定座標に配置]
 * [イベントを別のイベント位置に配置]
 * [隊列メンバーの追跡設定]
 * [アニメの指定]
 * [アニメの終了]
 * ※ 利用方法はプラグインコマンド設定時の説明をご覧ください。
 * 
 * 【[移動ルートの設定]で使うスクリプト】
 * ------------------------------
 * TF_setCharPattern([キャラクター番号], [歩行パターン], [キャラの向き]);
 * 　[キャラパターンを指定]コマンドの[移動ルートの設定]用。
 * ------------------------------
 * this.TF_goXY( [x], [y] );
 * 　[イベントを指定座標に移動]コマンドの[移動ルートの設定]用。
 * ------------------------------
 * this.TF_goEv( [目標イベントID], [dx], [dy] );
 * 　[イベントを別のイベント位置に移動]コマンドの[移動ルートの設定]用。
 * =========================
 * 
 * 【プラグインコマンドに指定する引数の詳細】
 * ------------------------------
 * [イベントID] は、イベントの[名前]でも指定できる。
 * ただし数値や 上記 this などと同じ名前、スペースの入った名前の指定不可。
 * ------------------------------
 * [向き]にはテンキーに対応した数字の他、以下の文字が利用できる。
 * 　上: up, u, north, n, ↑, 上, 北
 * 　左: left, l, west, w, ←, 左, 西
 * 　右: right, r, east, e, →, 右, 東
 * 　下: down, d, south, s, ↓, 下, 南
 * 　※大文字小文字の区別をしません。
 * ------------------------------
 * [キャラパターン]は歩行グラフィックの[歩行パターン]と[向き]を一度に指定。
 * 　0, 1, 2		<= 下向き(テンキー2)
 * 　3, 4, 5		<= 左向き(テンキー4)
 * 　6, 7, 8		<= 右向き(テンキー6)
 * 　9, 10, 11 <= 上向き(テンキー8)
 * ------------------------------
 * 移動速度を[ウェイト]に変換する場合以下のような対応となる。
 * 　1 / 8倍速 … 64フレーム
 * 　1 / 4倍速 … 32フレーム
 * 　1 / 2倍速 … 16フレーム
 * 　通常速 … 8フレーム
 * 　2倍速 … 4フレーム
 * 　4倍速 … 2フレーム
 * ------------------------------
 * [移動指定] コマンド文字+数字を一単位とする文字列。
 * かなり量があるので、印刷するなどして手元で確認することを推奨。
 * 移動系のコマンドは数字に0を指定すると、
 * 方向転換コマンドの[〇〇を向く]と判断される。
 * 　[〇〇に移動] : [方向]に使える文字に加え以下の文字が使える。
 * 　　左上: upleft, ul, northwest, nw, ↖︎, 左上, 北西
 * 　　右上: upright, ur, northeast, ne, ↗︎, 右上, 北東
 * 　　左下: downleft, dl, southwest, sw, ↙︎, 左下, 南西
 * 　　右下: downright, dr, southeast, se, ↘︎, 右下, 南東
 * 　　ランダム: random, &, 乱
 * 　　プレイヤーに近づく: tward, t, 近
 * 　　プレイヤーから遠ざかる: away, y, 遠
 * 　　一歩前進(0は何もしない): front, forward, f, 前
 * 　　一歩後退(0は[180度回転]): back, backward, b, 後
 * 　[ジャンプ…] : jump, j, 跳
 * 　　数字が0の場合は、その場でジャンプ。
 * 　　コンマ( , )で区切ってx,yの座標が指定できる(空白不可)
 * 　[ウェイト…] : wait, z, 待
 * 　　数字はフレーム数。z は寝るイメージ( wは 左に移動なので注意)
 * 　[右に90度回転] : turnright, >, ⤵︎
 * 　　数字に0を指定すると[ランダムに方向転換]
 * 　　1の場合即時変更、2以降は[移動速度]に応じたウェイトをして回転。
 * 　[左に90度回転] : turnleft, <, ⤹, ⤴
 * 　　数字に0を指定すると[右か左に90度回転]
 * 　　1の場合即時変更、2以降は[移動速度]に応じたウェイトをして回転。
 * 　[スイッチ] : switch, h, ス
 * 　　コンマ( , )で区切って一つ目の数字はスイッチID。
 * 　　ふたつ目の数字が0の場合は[スイッチOFF…]、1で[スイッチON…]
 * 　[移動速度の変更…] : agility, a, 速
 * 　　1: 1 / 8倍速, 2: 1 / 4倍速, 3: 1 / 2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
 * 　[移動頻度の変更…] : freaqency, q, 頻
 * 　　1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高
 * 　[歩行アニメ] : walk, k, 歩
 * 　　数字が0の場合は[歩行アニメOFF]、1で[歩行アニメON]
 * 　[足踏みアニメ] : step, p, 踏
 * 　　数字が0の場合は[足踏みアニメOFF]、1で[足踏みアニメON]
 * 　[向き固定] : fix, x, 固
 * 　　数字が0の場合は[向き固定OFF]、1で[向き固定ON]
 * 　[すり抜け] : through, g, 抜
 * 　　数字が0の場合は[すり抜けOFF]、1で[すり抜けON]
 * 　[透明化] : invisible, i, 透
 * 　　数字が0の場合は[透明化OFF]、1で[透明化ON]
 * 　[表示] : visible, v, 示
 * 　　数字が0の場合は[表示OFF]、1で[表示ON]
 * 　　透明化のOFFで見えるというのが分かりづらく間違いまくるので追加。
 * 　SET_CHAR : change, c, 変
 * 　　コンマ( , )で区切って [キャラ番号],[歩行パターン],[向き] を数字で指定。
 * 　　標準のコマンド[画像の変更…]は数字だけで指定できないので、
 * 　　現在指定しているキャラ画像内での変更するコマンドを別に追加。
 * 　　[画像の変更…]はファイルとキャラの変更はできる。
 * 　　でも[歩行パターン][向き]の変更はできないので、むしろ高機能かも。
 * 　[不透明度の変更…] : opacity, o, 濁
 *　　0〜255 の間の数字。
 * 　[合成方法の変更…] : blendmode, m, 合
 * 　　0: 通常, 1: 加算, 2: 乗算, 3: スクリーン
 * 　COM_GO_XY( COM_GO_EV ) : go, ＠, 移
 * 　　コンマ( , )で区切って [x],[y] の座標に移動。
 * 　　数字がひとつだけの場合イベントIDとみなし、その位置に移動。
 *
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 *
 * 利用規約 : MITライセンス
 * @================================================
 * @command route @text 移動ルートの一括設定
 * @desc [移動ルートの設定]コマンドの文字列指定版
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 * 
 * @arg routeCode @text ルート設定文字列
 * @desc
 * 例: ↑4⤵︎5→3
 * 専用コマンド文字の詳細はヘルプを参照。
 * @type string  @default ↑1↓1←1→1
 *
 * @arg repeat @text 動作を繰り返す
 * @on 繰り返し @off 一回のみ(規定値)
 * @type boolean @default false
 *
 * @arg skippable @text 移動できない場合は飛ばす
 * @on 飛ばす(規定値) @off 停止
 * @type boolean @default true
 *
 * @arg isWait @text 完了までウェイト
 * @on 待つ(規定値) @off 完了を待たず並列実行
 * @type boolean @default true
 *
 * @================================================
 * @command patternAnime @text キャラパターン指定アニメ
 * @desc
 * 一定順のパターン表示によるアニメ
 * 宝箱・扉を開くなどに使う
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg fileName @text 画像ファイル名
 * @desc
 * .pngを除いた img/characters/ フォルダのファイル名
 *  (規定値:そのまま)
 * @type file @dir img/characters/
 *
 * @arg characterNumber @text キャラクター番号
 * @desc
 * [0123]
 * [4567] (規定値:-1 そのまま)
 * @type number @default -1
 * @min -1 @max 7
 *
 * @arg animePattern @text パターン
 * @desc
 *  パターンの列(規定値:↓現在列)
 * @type select @default -1
 * @option ↓現在列 @value -1
 * @option ↓・・ 左列 @value 0
 * @option ・↓・ 中央列 @value 1
 * @option ・・↓ 右列 @value 2
 * @option ↑・・ 左列 @value 3
 * @option ・↑・ 中央列 @value 4
 * @option ・・↑ 右列 @value 5
 * @option ┬│↓ 左列から順に全て @value 6
 * @option ↑│┴ 右列から順に全て @value 7
 *
 * @arg waitFrames @text ウェイト
 * @desc
 * 1パターンの表示時間(フレーム数)(0:[移動速度]より算出)
 * @type number @default 0
 * @min 0
 * 
 * @================================================
 * @command setCharPattern  @text キャラパターンを指定
 * @desc 
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg fileName @text 画像ファイル名
 * @desc
 * .pngを除いた img/characters/ フォルダのファイル名
 *  (規定値:そのまま)
 * @type file @dir img/characters/
 *
 * @arg characterNumber @text キャラクター番号
 * @desc
 * [0123]
 * [4567] (規定値:-1 そのまま)
 * @type number @default -1
 * @min -1 @max 7
 *
 * @arg patternNumber @text 歩行パターン
 * @desc
 *  パターンの列(規定値:↓現在列)
 * @type select @default -1
 * @option ↓現在列 @value -1
 * @option ↓・・ 左列 @value 0
 * @option ・↓・ 中央列 @value 1
 * @option ・・↓ 右列 @value 2
 *
 * @arg d @text キャラの向き
 * @desc (規定値: そのまま)
 * @type select @default 0
 * @option そのまま @value 0
 * @option ↑ @value 8
 * @option ← @value 4
 * @option → @value 6
 * @option ↓ @value 2
 *
 * @================================================
 * @command goXY @text イベントを指定座標に移動
 * @desc 障害物は無視する。
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg pointStr @text 移動先位置(タイル数)
 * @desc 移動先座標(小数点以下可)
 * @type string @default 0,0
 *
 * @arg isWait @text 完了までウェイト
 * @on 待つ(規定値) @off 完了を待たず並列実行
 * @type boolean @default true
 * 
 * @================================================
 * @command goEv @text イベントを別のイベント位置に移動
 * @desc 障害物は無視する。
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg destinationId @text 目標イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg pointStr @text 移動先位置(タイル数)
 * @desc 移動先座標(小数点以下可)
 * @type string @default 0,0
 *
 * @arg isWait @text 完了までウェイト
 * @on 待つ(規定値) @off 完了を待たず並列実行
 * @type boolean @default true
 *
 * @================================================
 * @command locateXY @text イベントを指定座標に配置
 * @desc 瞬間移動する。
 * 状況で異なる初期位置の設定などに。
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg pointStr @text 移動先位置(タイル数)
 * @desc 移動先座標(小数点以下可)
 * @type string @default 0,0
 * 
 * @arg patternNumber @text 歩行パターン
 * @desc
 *  パターンの列(規定値:そのまま)
 * @type select @default -1
 * @option そのまま @value -1
 * @option ↓・・ 左列 @value 0
 * @option ・↓・ 中央列 @value 1
 * @option ・・↓ 右列 @value 2
 *
 * @arg d @text キャラの向き
 * @desc (規定値: そのまま)
 * @type select @default 0
 * @option そのまま @value 0
 * @option ↑ @value 8
 * @option ← @value 4
 * @option → @value 6
 * @option ↓ @value 2
 *
 * @================================================
 * @command locateEv @text イベントを別のイベント位置に配置
 * @desc 瞬間移動する。
 * 状況で異なる初期位置の設定などに。
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg destinationId @text 目標イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg pointStr @text 相対座標(タイル数)
 * @desc 相対座標(小数点以下可)
 * @type string @default 0,0
 *
 * @arg patternNumber @text 歩行パターン
 * @desc
 *  パターンの列(規定値:そのまま)
 * @type select @default -1
 * @option そのまま @value -1
 * @option ↓・・ 左列 @value 0
 * @option ・↓・ 中央列 @value 1
 * @option ・・↓ 右列 @value 2
 *
 * @arg d @text キャラの向き
 * @desc (規定値: そのまま)
 * @type select @default 0
 * @option そのまま @value 0
 * @option ↑ @value 8
 * @option ← @value 4
 * @option → @value 6
 * @option ↓ @value 2
 *
 * @================================================
 * @command getOn @text 乗り物に乗る
 * @desc すでに乗っている、乗り物を設定してない、
 * 乗り物が現在のマップにない場合、動作しない。
 *
 * @arg eventId @text 対象乗り物
 * @desc
 * 規定値: 大型船(ship)
 * @type select @default ship
 * @option 小型船(boat) @value boat
 * @option 大型船(ship) @value ship
 * @option 飛行船(airship) @value airship
 *
 * @arg isVehiclePos @text 乗った後の位置
 * @desc
 * @type boolean @default true
 * @on 乗り物位置(規定値) @off プレイヤー位置
 * 
 * @================================================
 * @command getOff @text 乗り物から降りる
 * @desc 乗り物に乗っていない場合は動作しない。
 * 通常降りられない場所でも強制的に降りる。
 *
 * @arg d @text 降りる向き
 * @desc (規定値: 前に降りる)
 * @type select @default 0
 * @option 前に降りる @value 0
 * @option ↑ @value 8
 * @option ← @value 4
 * @option → @value 6
 * @option ↓ @value 2
 * @option その場 @value 5
 * 
 * @================================================
 * @command follow @text 隊列メンバーの追跡設定
 * @desc プレイヤーが動いた場合に追跡するか指定。
 * 
 * @arg eventId @text 隊列メンバーID
 * @desc 指定隊列メンバー(規定値:all)
 * @type select @default all
 * @option all @option follower0 @option follower1 @option follower2
 *
 * @arg isFollow @text 追跡するか
 * @desc ONは[向き固定]などの値をプレイヤーからコピーする。
 * @on 追跡する(規定値) @off 追跡しない
 * @type boolean @default true
 *
 * @================================================
 * @command anime @text アニメの指定
 * @desc アニメモード(移動アニメ停止・[すり抜け]ON)になるので、
 * [アニメの終了]を実行しておくこと。
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg pointStr @text 移動距離(ピクセル数)
 * @desc (小数点以下可)
 * @type string @default 0,0
 *
 * @arg wait @text ウェイト
 * @desc
 * 待ちフレーム(1/60秒)(規定値:0)
 * @type number @default 0
 *
 * @arg characterNumber @text キャラクター番号
 * @desc
 * [0123]
 * [4567] (規定値:-1 そのまま)
 * @type number @default -1
 * @min -1 @max 7
 *
 * @arg patternNumber @text 歩行パターン
 * @desc
 *  パターンの列(規定値:↓現在列)
 * @type select @default -1
 * @option ↓現在列 @value -1
 * @option ↓・・ 左列 @value 0
 * @option ・↓・ 中央列 @value 1
 * @option ・・↓ 右列 @value 2
 *
 * @arg d @text キャラの向き
 * @desc (規定値: そのまま)
 * @type select @default 0
 * @option そのまま @value 0
 * @option ↑ @value 8
 * @option ← @value 4
 * @option → @value 6
 * @option ↓ @value 2
 * 
 * @================================================
 * @command endAnime @text アニメの終了
 * @desc [アニメの指定]をするとアニメモード(移動アニメ停止・[すり抜け]ON)になるのでアニメ終了時に実行すること。
 *
 * @arg eventId @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 * 
 */

( () => {
	"use strict";
	const PLUGIN_NAME = "TF_CharEx";

	const WAIT_ROUTE = "route";
	const WAIT_MOVING = "moving";
	const WAIT_ANIMATION = "animation";
	const WAIT_BALLOON = "balloon";

	/*---- パラメータパース関数 ----*/
	const PARAM_TRUE = "true";
	const PARAM_ON = "on";
	const TYPE_BOOLEAN = "boolean";
	const TYPE_NUMBER = "number";
	const TYPE_STRING = "string";
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

	/**
	 * 文字列を実数に変換して返す。
	 * @param {String|Number} value
	 * @return {Number} 数値に変換した結果
	 */
	function parseFloatStrict( value ) {
		if( typeof value === TYPE_NUMBER ) return value;
		const result = parseFloat( treatValue( value ) );
		if( isNaN( result ) ) throw Error( `${PLUGIN_NAME}: [${value}] is not a number.` );
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
		if( id <= VEHICLE_OFFSET ) {
			return $gameMap._vehicles[ VEHICLE_OFFSET - id ];			// 乗り物(0〜2)
		} else if( id <= FOLLOWER_OFFSET ) {
			return $gamePlayer.followers().follower( FOLLOWER_OFFSET - id );			// 隊列メンバー(0〜2)
		} else {
			return interpreter.character( id );			// プレイヤーキャラおよびイベント
		}
	}

	/**
	 * 指定された文字列に対応するイベントを返す
	 * @param {Game_Interpreter} interpreter インタプリタ
	 * @param {String} eventId イベントIDの番号か識別子
	 * @returns {Game_CharacterBase}
	 */
	function stringToEvent( interpreter, eventId ) {
		return getEventById( interpreter, stringToEventId( eventId ) );
	}

	/*---- イベントIDの配置オフセット ----*/
	const FOLLOWER_OFFSET = -2;
	const VEHICLE_OFFSET = -100;

	/*---- イベントID変換用文字列 ----*/
	const EVENT_THIS = "this";
	const EVENT_PLAYER = "player";
	const EVENT_FOLLOWER0 = "follower0";
	const EVENT_FOLLOWER1 = "follower1";
	const EVENT_FOLLOWER2 = "follower2";
	const EVENT_FOLLOWER_ALL = "all";
	const VEHICLE_BOAT = "boat";
	const VEHICLE_SHIP = "ship";
	const VEHICLE_AIRSHIP = "airship";
	const VEHICLE_WALK = "walk";

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


	const DIRECTION_DOWN_LEFT = [ "downleft", "dl", "southwest", "sw", "↙︎", "左下", "南西" ];
	const DIRECTION_DOWN = [ "down", "d", "south", "s", "↓", "下", "南" ];
	const DIRECTION_DOWN_RIGHT = [ "downright", "dr", "southeast", "se", "↘︎", "右下", "南東" ];
	const DIRECTION_LEFT = [ "left", "l", "west", "w", "←", "左", "西" ];
	const DIRECTION_RIGHT = [ "right", "r", "east", "e", "→", "右", "東" ];
	const DIRECTION_UP_LEFT = [ "upleft", "ul", "northwest", "nw", "↖︎", "左上", "北西" ];
	const DIRECTION_UP = [ "up", "u", "north", "n", "↑", "上", "北" ];
	const DIRECTION_UP_RIGHT = [ "upright", "ur", "northeast", "ne", "↗︎", "右上", "北東" ];
	/**
	 * 方向文字列をテンキー方向の数値に変換して返す
	 * @param {String} value 方向た文字列
	 * @returns {Number} テンキー方向の数値(変換できなかった場合:undefined)
	 */
	function stringToDirection( value ) {
		if( typeof value === TYPE_NUMBER ) return value;
		value = treatValue( value );
		const result = parseInt( value, 10 );
		if( !isNaN( result ) ) return result;

		value = value.toLowerCase();
		if( DIRECTION_DOWN_LEFT.includes( value ) ) return 1;
		if( DIRECTION_DOWN.includes( value ) ) return 2;
		if( DIRECTION_DOWN_RIGHT.includes( value ) ) return 3;
		if( DIRECTION_LEFT.includes( value ) ) return 4;
		if( DIRECTION_RIGHT.includes( value ) ) return 6;
		if( DIRECTION_UP_LEFT.includes( value ) ) return 7;
		if( DIRECTION_UP.includes( value ) ) return 8;
		if( DIRECTION_UP_RIGHT.includes( value ) ) return 9;
	}

	// イベントコマンドの番号
	const COMMAND_END = 0;
	const TRANSFER_PLAYER = 201;
	const SET_MOVEMENT_ROUTE = 205;
	const CHANGE_PLAYER_FOLLOWERS = 216;
	const FADEOUT_SCREEN = 221;
	const FADEIN_SCREEN = 222;
	const WAIT_FOR = 230;
	const PLAY_SE = 250;
	const SET_CHAR = "setChar";

	const gc = Game_Character;


	/**
	 * パラメータを受け取る
	 */
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );
	const TF_moveUnit = parseFloatStrict( pluginParams.moveUnit );



	/*---- プラグインコマンド ----*/
	const COM_ROUTE = "route";
	const COM_PATTERN_ANIME = "patternAnime";
	const COM_SET_CHAR_PATTERN = "setCharPattern";
	const COM_GO_XY = "goXY";
	const COM_GO_EV = "goEv";
	const COM_LOCATE_XY = "locateXY";
	const COM_LOCATE_EV = "locateEv";
	const COM_GET_ON = "getOn";
	const COM_GET_OFF = "getOff";
	const COM_FOLLOW = "follow";
	const COM_ANIME = "anime";
	const COM_END_ANIME = "endAnime";


	/*--- Game_Interpreter ---*/
	const _Game_Interpreter_setupChild = Game_Interpreter.prototype.setupChild;
	Game_Interpreter.prototype.setupChild = function( list, eventId ) {
		list.forEach( e => { if( e.indent === undefined ) e.indent = 0; } );// indent未設定なら0を設定する
		_Game_Interpreter_setupChild.apply( this, arguments );
	};


	/**
	 * プラグインコマンドの登録
	 */
	// [移動ルートの一括設定]
	PluginManagerEx.registerCommand( document.currentScript, COM_ROUTE, moveRoute );

	// [ キャラパターン指定アニメ ]
	PluginManagerEx.registerCommand( document.currentScript, COM_PATTERN_ANIME, patternAnime );

	// [ キャラパターンを指定 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_SET_CHAR_PATTERN, function( args ) {
		const targetEvent = stringToEvent( this, args.eventId );
		setCharPattern( targetEvent, args.fileName, args.characterNumber, args.patternNumber, args.d );
	} );

	// [ イベントを指定座標に移動 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_GO_XY, function( args ) {
		const targetEvent = stringToEvent( this, args.eventId );
		const rect = stringToPoint( args.pointStr );
		goXY( targetEvent, rect.x, rect.y, args.isWait );
	} );

	// [ イベントを別のイベント位置に移動 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_GO_EV, function( args ) {
		const targetEvent = stringToEvent( this, args.eventId );
		const destinationEvent = stringToEvent( this, args.destinationId );
		const rect = stringToPoint( args.pointStr );
		goEv( targetEvent, destinationEvent, rect.x, rect.y, args.isWait );
	} );

	// [ イベントを指定座標に配置 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_LOCATE_XY, function( args ) {
		const targetEvent = stringToEvent( this, args.eventId );
		const rect = stringToPoint( args.pointStr );
		locateXY( targetEvent, rect.x, rect.y, args.patternNumber, args.d );
	} );

	// [ イベントを別のイベント位置に配置 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_LOCATE_EV, function( args ) {
		const targetEvent = stringToEvent( this, args.eventId );
		const destinationEvent = stringToEvent( this, args.destinationId );
		const rect = stringToPoint( args.pointStr );
		locateEv( targetEvent, destinationEvent, rect.x, rect.y, args.patternNumber, args.d );
	} );

	// [ 乗り物に乗る ]
	PluginManagerEx.registerCommand( document.currentScript, COM_GET_ON, function( args ) {
		const targetEvent = stringToEvent( this, args.eventId );
		if( !targetEvent ) throw Error( `${PLUGIN_NAME}: I can't find the '${args.eventId}'` );

		if( args.isVehiclePos ) {
			$gamePlayer.setPosition( targetEvent.x, targetEvent.y );
		}
		$gamePlayer._vehicleType = args.eventId;
		$gamePlayer._vehicleGettingOn = true;
	} );

	// [ 乗り物から降りる ]
	PluginManagerEx.registerCommand( document.currentScript, COM_GET_OFF, function( args ) {
		$gamePlayer._followers.synchronize( $gamePlayer.x, $gamePlayer.y, $gamePlayer.direction() );
		$gamePlayer.vehicle().getOff();
		$gamePlayer._vehicleGettingOff = true;
		$gamePlayer.setTransparent( false );
		$gamePlayer.setMoveSpeed( 4 );
		$gamePlayer.setThrough( false );
		$gamePlayer.makeEncounterCount();

		const d = args.d;
		if( d === 5 ) return;
		if( d !== 0 ) {
			$gamePlayer._direction = d;
		}
		$gamePlayer.forceMoveForward();
		$gamePlayer.gatherFollowers();
	} );

	// [ 隊列メンバーの追跡設定 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_FOLLOW, function( args ) {
		if( args.eventId === EVENT_FOLLOWER_ALL ) {
			const followers = $gamePlayer.followers();
			followers._data.forEach( follower => {
				followMode( follower, args.isFollow );
			} );
		} else {
			const targetEvent = stringToEvent( this, args.eventId );
			followMode( targetEvent, args.isFollow );
		}
	} );

	// [ アニメの指定 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_ANIME, function( args ) {
		const targetEvent = stringToEvent( this, args.eventId );
		const rect = stringToPoint( args.pointStr );
		anime( targetEvent, rect.x, rect.y, args.wait, args.characterNumber, args.patternNumber, args.d );
	} );

	// [ アニメの終了 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_END_ANIME, function( args ) {
		const targetEvent = stringToEvent( this, args.eventId );
		animeMode( targetEvent, false );
	} );


	/**
	 * 隊列メンバーに対する[移動ルートの設定]を可能にする。
	 * params[ 0 ] : Number	イベント番号
	 * params[ 1 ] : 移動ルート { repeat: 動作を繰り返す, skippable: 移動できない場合は飛ばす, wait: 完了までウェイト, list: 移動コマンドのリスト }
	 */
	const _Game_Interpreter_command205 = Game_Interpreter.prototype.command205;
	Game_Interpreter.prototype.command205 = function( params ) {
		if( FOLLOWER_OFFSET < params[ 0 ] ) return _Game_Interpreter_command205.call( this, params );

		$gameMap.refreshIfNeeded();
		this._characterId = params[ 0 ];
		const targetEvent = getEventById( this, params[ 0 ] );
		if( !targetEvent ) return true;
		targetEvent.forceMoveRoute( params[ 1 ] );
		if( params[ 1 ].wait ) this.setWaitMode( WAIT_ROUTE );
		return true;
	};

	/**
	 * ウェイトモードに移動待ちを追加。
	 * Game_Follower, Game_Vehicle に対応。
	 */
	const _Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
	Game_Interpreter.prototype.updateWaitMode = function() {
		let character;
		let waiting;
		switch( this._waitMode ) {
			case WAIT_MOVING:
				character = getEventById( this, this._characterId );
				waiting = character.isMoving();
				break;
			case WAIT_ROUTE:
				character = getEventById( this, this._characterId );
				waiting = character && character.isMoveRouteForcing();
				break;
			case WAIT_ANIMATION:
				character = getEventById( this, this._characterId );
				waiting = character && character.isAnimationPlaying();
				break;
			case WAIT_BALLOON:
				character = getEventById( this, this._characterId );
				waiting = character && character.isBalloonPlaying();
				break;
		}

		if( waiting === undefined ) return _Game_Interpreter_updateWaitMode.call( this );

		if( waiting === false ) {
			this._waitMode = "";
		}
		return waiting;
	};


	/**
	 * スクリプトコマンドの実行。
	 */
	/**
	 * setCharPattern() を呼び出す。
	 */
	Game_CharacterBase.prototype.TF_setCharPattern = function( characterNumber, patternNumber, d ) {
		setCharPattern( this, undefined, characterNumber, patternNumber, d );
	};

	/**
	 * goXY() を呼び出す。
	 */
	Game_CharacterBase.prototype.TF_goXY = function( x, y, isWait ) {
		goXY( this, x, y, isWait );
	};

	/**
	 * goEv() を呼び出す。
	 */
	Game_CharacterBase.prototype.TF_goEv = function( destinationId, dx, dy, isWait ) {
		const destinationEvent = stringToEvent( this, destinationId );
		goEv( this, destinationEvent, dx, dy, isWait );
	};


	/**
	 * [ キャラパターンを指定 ]
	 *
	 * @param {Game_Character} targetEvent イベント・プレイヤー・隊列メンバーのいずれか
	 * @param {String} fileName キャラクタファイル名( img/characters/ 以下) (規定値: targetEventの指定)
	 * @param {String} characterNumber キャラクタ番号( -1~7 )
	 * @param {String} patternNumber パターン番号( 0~2 )
	 * @param {String} d キャラの向き(テンキー対応)
	 */
	function setCharPattern( targetEvent, fileName, characterNumber, patternNumber, d ) {
		// 画像ファイル
		if( fileName === undefined || fileName === "" ) {
			fileName = targetEvent.characterName();
		}

		// キャラ番号
		if( characterNumber === -1 || isNaN( characterNumber ) ) {
			characterNumber = targetEvent.characterIndex();
		}

		targetEvent.setImage( fileName, characterNumber );

		// パターン番号
		if( patternNumber !== -1 && patternNumber !== undefined && patternNumber !== "" ) {
			targetEvent._originalPattern = patternNumber;
			targetEvent.setPattern( patternNumber );
		}

		// 向き
		if( d !== 0 && d !== undefined && d !== "" ) {
			targetEvent._direction = stringToDirection( d );
		}
	}

	/**
	 * キャラ位置とパターンの設定。
	 *
	 * @param {Game_Character} targetEvent イベント・プレイヤー・隊列メンバー・乗り物のいずれか
	 * @param {String} x x座標(タイル数)
	 * @param {String} y y座標(タイル数)
	 * @param {String} patternNo パターン番号( 0~2 )
	 * @param {String} d キャラの向き(テンキー対応)
	 */
	function locateXY( targetEvent, x, y, patternNo, d ) {
		if( patternNo ) {
			setCharPattern( targetEvent, undefined, undefined, patternNo, d );
		}
		// 位置指定には HalfMove.js 対応でparseFloatStrict()を使う
		const floatX = parseFloatStrict( x );
		const floatY = parseFloatStrict( y );
		if( targetEvent instanceof Game_Vehicle ) {
			targetEvent.setLocation( $gameMap.mapId(), floatX, floatY );	// 乗り物
		} else {
			targetEvent.setPosition( floatX, floatY );
		}
	}

	/**
	 * キャラ位置を別キャラ起点で設定しパターンも設定。
	 *
	 * @param {Game_Character} targetEvent イベント・プレイヤー・隊列メンバーのいずれか
	 * @param {Game_Character} destinationEvent 目標イベント
	 * @param {String} dx 目標イベントからの相対x座標(タイル数)
	 * @param {String} dy 目標イベントからの相対y座標(タイル数)
	 * @param {String} patternNo パターン番号( 0~2 )
	 * @param {String} d キャラの向き(テンキー対応)
	 */
	function locateEv( targetEvent, destinationEvent, dx, dy, patternNo, d ) {
		const x = $gameMap.roundX( destinationEvent.x + parseFloatStrict( dx ) );
		const y = $gameMap.roundY( destinationEvent.y + parseFloatStrict( dy ) );
		locateXY( targetEvent, x, y, patternNo, d );
	}

	/**
	 * [ イベントを指定座標に移動 ]
	 *
	 * @param {Game_Character} targetEvent イベント・プレイヤー・隊列メンバーのいずれか
	 * @param {String} x x座標(タイル数)
	 * @param {String} y y座標(タイル数)
	 * @param {Boolean} isWait ウェイトモードか
	 */
	function goXY( targetEvent, targetX, targetY, isWait ) {
		const x = parseFloatStrict( targetX );
		const y = parseFloatStrict( targetY );
		targetEvent.turnTowardCharacter( { x: x, y: y } );
		targetEvent._x = x;
		targetEvent._y = y;

		isWait = ( isWait === undefined ) ? true : parseBooleanStrict( isWait );
		if( !isWait ) return;

		const interpreter = getInterpreterFromCharacter( targetEvent );
		interpreter.setWaitMode( WAIT_MOVING );
		interpreter._characterId = targetEvent._eventId;
	}

	/**
	 * COM_GO_EV  の実行。
	 *
	 * @param {Game_Character} targetEvent イベント・プレイヤー・隊列メンバーのいずれか
	 * @param {Game_Character} destinationEvent 目標イベント
	 * @param { String; } dx 目標イベントからの相対x座標( タイル数 )
	 * @param { String; } dy 目標イベントからの相対y座標( タイル数 )
	 * @param {Boolean} isWait ウェイトモードか
	 */
	function goEv( targetEvent, destinationEvent, dx, dy, isWait ) {
		const x = $gameMap.roundX( destinationEvent.x + parseFloatStrict( dx ) );
		const y = $gameMap.roundY( destinationEvent.y + parseFloatStrict( dy ) );
		goXY( targetEvent, x, y, isWait );
	}

	const TRIGGER_PARALLEL = 4;	// 並列処理
	/**
	 * 	イベントで使われているインタプリタを取り出す。
	 * @param {Game_Character} character 
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


	const MOVE_RANDOM = [ "random", "&", "＆", "乱" ]; // [ランダムに方向転換][ランダムに移動]
	const MOVE_TWARD = [ "tward", "t", "近" ]; // [プレイヤーの方を向く][プレイヤーに近づく]
	const MOVE_AWAY = [ "away", "y", "遠" ]; // [プレイヤーの逆を向く][プレイヤーから遠ざかる]
	const MOVE_FORWARD = [ "front", "forward", "f", "前" ]; // [一歩前進]
	const MOVE_BACKWARD = [ "back", "backward", "b", "後" ]; // [180度回転][一歩後退]
	const MOVE_JUMP = [ "jump", "j", "跳" ]; // [ジャンプ…]
	const MOVE_WAIT = [ "wait", "z", "待" ]; // [ウェイト…]
	const MOVE_TURN_90D_R = [ "turnright", ">", "＞", "⤵︎" ]; // [ランダムに方向転換][右に90度回転]
	const MOVE_TURN_90D_L = [ "turnleft", "<", "＜", "⤹", "⤴" ]; // [右か左に90度回転][左に90度回転]
	const MOVE_SWITCH = [ "switch", "h", "ス" ]; // [スイッチON…][スイッチOFF…]
	const MOVE_SPEED = [ "agility", "a", "速" ]; // [移動速度の変更…]
	const MOVE_FREQ = [ "freaqency", "q", "頻" ]; // [移動頻度の変更…]
	const MOVE_WALK = [ "walk", "k", "歩" ]; // [歩行アニメON][歩行アニメOFF]
	const MOVE_STEP = [ "step", "p", "踏" ]; // [足踏みアニメON][足踏みアニメOFF]
	const MOVE_DIR_FIX = [ "fix", "x", "固" ]; // [向き固定ON][向き固定OFF]
	const MOVE_THROUGH = [ "through", "g", "抜" ]; // [すり抜けON][すり抜けOFF]
	const MOVE_INVISIBLE = [ "invisible", "i", "透" ]; // [透明化ON][透明化OFF]
	const MOVE_VISIBLE = [ "visible", "v", "示" ]; // 透明化の逆
	const MOVE_CHARA = [ "change", "c", "変" ]; // キャラパターンの変更 [画像の変更…]の代用
	const MOVE_OPACITY = [ "opacity", "o", "濁" ]; // [不透明度の変更…]
	const MOVE_BLEND_MODE = [ "blendmode", "m", "合" ]; // [合成方法の変更…]
	const MOVE_GO = [ "go", "@", "＠", "移" ]; // COM_GO_XY(COM_GO_EV)
	// ROUTE_PLAY_SE
	// ROUTE_SCRIPT

	/**
	 * [移動ルートの一括設定]
	 * 以下 param は実際は args のプロパティ
	 * @param {String} eventId イベントIDかそれに替わる識別子の文字列
	 * @param {String} routeCode 移動ルートの文字列
	 * @param {Boolean} isRepeat 繰り返すか(規定値:false)
	 * @param {Boolean} skippable 移動できない場合とばすか(規定値:true)
	 * @param {Boolean} isWait 待つか(規定値:true)
	 */
	function moveRoute( args ) {
		const eventId = stringToEventId( args.eventId );
		const targetEvent = getEventById( this, eventId );
		const routeCodeArray = args.routeCode.match( /[^0-9.,-]+[0-9.,-]+/ig );
		let movementList = [];
		let moveSpeed = targetEvent.moveSpeed();
		routeCodeArray.forEach( code => {
			const opcode = code.match( /[^0-9.,-]+/ )[ 0 ];	// コマンド部分
			const opland = code.match( /[0-9.,-]+/ )[ 0 ];	// データ部分
			const paramNo = parseInt( opland, 10 );
			const d = stringToDirection( opcode );
			if( d !== undefined ) {
				const d4 = convertD8to4( d );

				if( paramNo === 0 ) { // [下を向く][左を向く][右を向く][上を向く]
					const moveCode = [ gc.ROUTE_TURN_DOWN,
					gc.ROUTE_TURN_LEFT, gc.ROUTE_TURN_RIGHT,
					gc.ROUTE_TURN_UP ][ d4 / 2 - 1 ];
					movementList.push( { code: moveCode } );

				} else { // [左下に移動][下に移動][右下に移動][左に移動][右に移動][左上に移動][上に移動][右上に移動]
					const moveCode = [
						gc.ROUTE_MOVE_LOWER_L, gc.ROUTE_MOVE_DOWN, gc.ROUTE_MOVE_LOWER_R,
						gc.ROUTE_MOVE_LEFT, null, gc.ROUTE_MOVE_RIGHT,
						gc.ROUTE_MOVE_UPPER_L, gc.ROUTE_MOVE_UP, gc.ROUTE_MOVE_UPPER_R,
					][ d - 1 ];
					for( let i = 0; i < paramNo; i++ ) {
						movementList.push( { code: moveCode } );
					}
				}
				return;
			}

			const value = opcode.toLowerCase();
			if( MOVE_RANDOM.includes( value ) ) { // [ランダムに方向転換][ランダムに移動]
				if( paramNo === 0 ) {
					movementList.push( { code: gc.ROUTE_TURN_RANDOM } );
				} else {
					for( let i = 0; i < paramNo; i++ ) {
						movementList.push( { code: gc.ROUTE_MOVE_RANDOM } );
					}
				}

			} else if( MOVE_TWARD.includes( value ) ) { // [プレイヤーの方を向く][プレイヤーに近づく]
				if( paramNo === 0 ) {
					movementList.push( { code: gc.ROUTE_TURN_TOWARD } );
				} else {
					for( let i = 0; i < paramNo; i++ ) {
						movementList.push( { code: gc.ROUTE_MOVE_TOWARD } );
					}
				}

			} else if( MOVE_AWAY.includes( value ) ) { // [プレイヤーの逆を向く][プレイヤーから遠ざかる]
				if( paramNo === 0 ) {
					movementList.push( { code: gc.ROUTE_TURN_AWAY } );
				} else {
					for( let i = 0; i < paramNo; i++ ) {
						movementList.push( { code: gc.ROUTE_MOVE_AWAY } );
					}
				}

			} else if( MOVE_FORWARD.includes( value ) ) { // [一歩前進]
				for( let i = 0; i < paramNo; i++ ) {
					movementList.push( { code: gc.ROUTE_MOVE_FORWARD, parameters: [ paramNo ] } );
				}

			} else if( MOVE_BACKWARD.includes( value ) ) { // [180度回転][一歩後退]
				if( paramNo === 0 ) {
					movementList.push( { code: gc.ROUTE_TURN_180D } );
				} else {
					for( let i = 0; i < paramNo; i++ ) {
						movementList.push( { code: gc.ROUTE_MOVE_BACKWARD } );
					}
				}

			} else if( MOVE_JUMP.includes( value ) ) { // [ジャンプ…]
				const result = opland.match( /([0-9.-]+),([0-9.-]+)/ );
				let x, y;
				if( result === null ) {
					x = 0;
					y = 0;
				} else {
					x = Boolean( result[ 1 ] ) ? parseInt( result[ 1 ] ) : 0;
					y = Boolean( result[ 2 ] ) ? parseInt( result[ 2 ] ) : 0;
				}
				movementList.push( { code: gc.ROUTE_JUMP, parameters: [ x, y ] } );

			} else if( MOVE_WAIT.includes( value ) ) { // [ウェイト]
				movementList.push( { code: gc.ROUTE_WAIT, parameters: [ paramNo ] } );

			} else if( MOVE_TURN_90D_R.includes( value ) ) { // [ ランダムに方向転換 ][ 右に90度回転 ]
				if( paramNo === 0 ) {
					movementList.push( { code: gc.ROUTE_TURN_RANDOM } );
				} else if( paramNo === 1 ) {
					movementList.push( { code: gc.ROUTE_TURN_90D_R } );
				} else {
					const waitFrames = speedToFrames( moveSpeed );
					for( let i = 0; i < paramNo; i++ ) {
						movementList.push( { code: gc.ROUTE_TURN_90D_R } );
						movementList.push( { code: gc.ROUTE_WAIT, parameters: [ waitFrames ] } );
					}
				}

			} else if( MOVE_TURN_90D_L.includes( value ) ) { // [右か左に90度回転][左に90度回転]
				if( paramNo === 0 ) {
					movementList.push( { code: gc.ROUTE_TURN_90D_R_L } );
				} else if( paramNo === 1 ) {
					movementList.push( { code: gc.ROUTE_TURN_90D_L } );
				} else {
					const waitFrames = speedToFrames( moveSpeed );
					for( let i = 0; i < paramNo; i++ ) {
						movementList.push( { code: gc.ROUTE_TURN_90D_L } );
						movementList.push( { code: gc.ROUTE_WAIT, parameters: [ waitFrames ] } );
					}
				}

			} else if( MOVE_SWITCH.includes( value ) ) { // [スイッチON…][スイッチOFF…]
				const result = opland.match( /([0-9]+),([01])/ );
				let id, sw;
				if( result === null ) {
					id = paramNo;
					sw = 1;
				} else {
					id = Boolean( result[ 1 ] ) ? parseInt( result[ 1 ] ) : 1;
					sw = Boolean( result[ 2 ] ) ? parseInt( result[ 2 ] ) : 1;
				}
				if( sw ) {
					movementList.push( { code: gc.ROUTE_SWITCH_ON, parameters: [ id ] } );
				} else {
					movementList.push( { code: gc.ROUTE_SWITCH_OFF, parameters: [ id ] } );
				}

			} else if( MOVE_SPEED.includes( value ) ) { // [移動速度の変更…]
				movementList.push( { code: gc.ROUTE_CHANGE_SPEED, parameters: [ paramNo ] } );
				moveSpeed = paramNo;	// 回転の速度に使っているので、定義時に速度がわかっている必要がある

			} else if( MOVE_FREQ.includes( value ) ) { // [移動頻度の変更…]
				movementList.push( { code: gc.ROUTE_CHANGE_FREQ, parameters: [ paramNo ] } );

			} else if( MOVE_WALK.includes( value ) ) { // [歩行アニメON][歩行アニメOFF]
				movementList.push( { code: paramNo ? gc.ROUTE_WALK_ANIME_ON : gc.ROUTE_WALK_ANIME_OFF } );

			} else if( MOVE_STEP.includes( value ) ) { // [足踏みアニメON][足踏みアニメOFF]
				movementList.push( { code: paramNo ? gc.ROUTE_STEP_ANIME_ON : gc.ROUTE_STEP_ANIME_OFF } );

			} else if( MOVE_DIR_FIX.includes( value ) ) { // [向き固定ON][向き固定OFF]
				movementList.push( { code: paramNo ? gc.ROUTE_DIR_FIX_ON : gc.ROUTE_DIR_FIX_OFF } );

			} else if( MOVE_THROUGH.includes( value ) ) { // [すり抜けON][すり抜けOFF]
				movementList.push( { code: paramNo ? gc.ROUTE_THROUGH_ON : gc.ROUTE_THROUGH_OFF } );

			} else if( MOVE_INVISIBLE.includes( value ) ) { // [透明化ON][透明化OFF]
				movementList.push( { code: paramNo ? gc.ROUTE_TRANSPARENT_ON : gc.ROUTE_TRANSPARENT_OFF } );

			} else if( MOVE_VISIBLE.includes( value ) ) { // 透明化の逆
				movementList.push( { code: paramNo ? gc.ROUTE_TRANSPARENT_OFF : gc.ROUTE_TRANSPARENT_ON } );

			} else if( MOVE_CHARA.includes( value ) ) { // キャラパターンの変更[画像の変更…]の代わり
				const result = opland.match( /([0-7]+)(,([0-9]+)(,([2468]))?)?/ );
				if( result ) {
					movementList.push( { code: SET_CHAR, parameters: [ result[ 1 ], result[ 3 ], result[ 5 ] ] } );
				}

			} else if( MOVE_OPACITY.includes( value ) ) { // [不透明度の変更…]
				movementList.push( { code: gc.ROUTE_CHANGE_OPACITY, parameters: [ paramNo ] } );

			} else if( MOVE_BLEND_MODE.includes( value ) ) { // [合成モードの設定…]
				movementList.push( { code: gc.ROUTE_CHANGE_BLEND_MODE, parameters: [ paramNo ] } );

			} else if( MOVE_GO.includes( value ) ) { // COM_GO_XY
				const result = opland.match( /([0-9.]+),([0-9.]+)/ );
				let x, y;
				if( result === null ) {
					const destinationEvent = getEventById( this, paramNo );
					x = destinationEvent.x;
					y = destinationEvent.y;
				} else {
					x = Boolean( result[ 1 ] ) ? parseFloat( result[ 1 ] ) : 0;
					y = Boolean( result[ 2 ] ) ? parseFloat( result[ 2 ] ) : 0;
				}
				movementList.push( { code: COM_GO_XY, parameters: [ x, y ] } );
			}
		} );

		movementList.push( { code: gc.ROUTE_END } );
		this.command205( [ eventId, { repeat: args.repeat, skippable: args.skippable, wait: args.isWait, list: movementList } ] );	// SET_MOVEMENT_ROUTE
	}


	/**
	 * フォロー状態の設定。
	 *
	 * @param {Game_Follower} targetEvent 隊列メンバーのいずれか
	 * @param {String|Boolean} isFollow プレイヤーを追跡するか(規定値:true)
	 */
	function followMode( targetEvent, isFollow ) {
		isFollow = ( isFollow === undefined ) ? true : parseBooleanStrict( isFollow );
		targetEvent._isFollow = isFollow;
	}

	/**
	 * アニメモードの設定。
	 * isAnime が false の場合が COM_END_ANIME の内容。
	 *
	 * @param {Game_Character} targetEvent イベント・プレイヤー・隊列メンバーのいずれか
	 * @param {String|Boolean} isAnime アニメモードか(規定値:false)
	 */
	function animeMode( targetEvent, isAnime ) {
		isAnime = parseBooleanStrict( isAnime );
		targetEvent.setThrough( isAnime );
		targetEvent.TF_isAnime = isAnime;
		if( isAnime ) return;

		if( TF_moveUnit === 0 ) {
			targetEvent._x = targetEvent._realX;
			targetEvent._y = targetEvent._realY;
		} else if( TF_moveUnit === 1 ) {
			// タイル座標に合わせて丸める
			targetEvent._x = Math.round( targetEvent._realX );
			targetEvent._y = Math.round( targetEvent._realY );
		} else {
			// 単位座標に合わせて丸める
			targetEvent._x = Math.round( targetEvent._realX / TF_moveUnit ) * TF_moveUnit;
			targetEvent._y = Math.round( targetEvent._realY / TF_moveUnit ) * TF_moveUnit;
		}
	}

	/**
	 * COM_ANIME  の実行。
	 *
	 * @param {String} eventId イベントIDかそれに替わる識別子の文字列
	 * @param {String} mx x移動距離( 規定値: 0ピクセル )
	 * @param {String} my y移動距離( 規定値: 0ピクセル )
	 * @param {String} waitFrames 表示時間( 規定値: 3フレーム )
	 * @param {String} charaNo キャラクタ番号( 0~7 )
	 * @param {String} patternNo パターン番号( 0~2 )
	 * @param {String} d キャラの向き(テンキー対応)
	 */
	function anime( interpreter, eventId, mx, my, waitFrames, charaNo, patternNo, d ) {
		eventId = stringToEventId( eventId );
		const targetEvent = getEventById( interpreter, eventId );
		if( !targetEvent.TF_isAnime ) animeMode( targetEvent, true );
		setCharPattern( targetEvent, undefined, charaNo, patternNo, d );
		targetEvent._realX += parseIntStrict( mx ) / $gameMap.tileWidth();
		targetEvent._realY += parseIntStrict( my ) / $gameMap.tileHeight();
		if( waitFrames === undefined ) {
			waitFrames = speedToFrames( targetEvent.moveSpeed() );
		} else {
			waitFrames = parseIntStrict( waitFrames );
		}
		const commandList = [
			{ code: WAIT_FOR, parameters: [ waitFrames ] },
			{ code: COMMAND_END }
		];
		interpreter.setupChild( commandList, eventId );
	}

	const VD_1LINE = 0;	// ↓
	const VU_1LINE = 1;	// ↑
	const VD_3LINE = 2;	// ┬│↓
	const VU_3LINE = 3;	// ↑│┴

	const LEFT_PATTERN = 0;
	const CENTER_PATTERN = 1;
	const RIGHT_PATTERN = 2;

	// animePattern
	const CURRENT_PATTERN = -1; // ↓現在列 @value -1
	const LEFT_DOWN = 0; // ↓・・ 左列 @value 0
	const CENTER_DOWN = 1; // ・↓・ 中央列 @value 1
	const RIGHT_DOWN = 2; // ・・↓ 右列 @value 2
	const LEFT_UP = 3; // ↑・・ 左列 @value 3
	const CENTER_UP = 4; // ・↑・ 中央列 @value 4
	const RIGHT_UP = 5; // ・・↑ 右列 @value 5
	const ALL_DOWN = 6; // ┬│↓ 左列から順に全て @value 6
	const ALL_UP = 7; // ↑│┴ 右列から順に全て @value 7

	/**
	 * [ キャラパターン指定アニメ ]の実行。
	 *
	 * 実際は args の中身
	 * @param {String} eventId イベントIDかそれに替わる識別子の文字列
	 * @param {String} fileName キャラクタファイル名( img/characters/ 以下)
	 * @param {Number} characterNumber キャラクタ番号( 1~8 )
	 * @param {Number} animePattern アニメ再生パターン(-1〜8)
	 * @param {Number} waitFrames 待ちフレーム数
	 *
	 */
	function patternAnime( args ) {
		const eventId = stringToEventId( args.eventId );
		const targetEvent = getEventById( this, eventId );
		const waitFrames = ( args.waitFrames === undefined || args.waitFrames === 0 ) ?
			speedToFrames( targetEvent.moveSpeed() ) :
			parseInt( args.waitFrames, 10 );

		let animeType;
		let patternNumber;
		if( args.animePattern === CURRENT_PATTERN ) {
			patternNumber = undefined;
			animeType = VD_1LINE;
		} else if( args.animePattern <= RIGHT_DOWN ) {
			patternNumber = args.animePattern;
			animeType = VD_1LINE;
		} else if( args.animePattern <= RIGHT_UP ) {
			patternNumber = args.animePattern - 3;
			animeType = VU_1LINE;
		} else if( args.animePattern === ALL_DOWN ) {
			patternNumber = LEFT_PATTERN;
			animeType = VD_3LINE;
		} else if( args.animePattern === ALL_UP ) {
			patternNumber = RIGHT_PATTERN;
			animeType = VU_3LINE;
		} else {
			throw Error( `${PLUGIN_NAME}: [${args.animePattern} is illegal animation pattern.` );
		}
		setCharPattern( targetEvent, args.fileName, args.characterNumber, patternNumber );
		const tempDirectionFix = targetEvent.isDirectionFixed();
		targetEvent.setDirectionFix( false );

		// SET_MOVEMENT_ROUTE(command205)
		if( animeType === VD_1LINE ) {	//  animePattern 0〜2
			this.command205( [ eventId, {
				repeat: false, skippable: true, wait: true, list: [
					{ code: gc.ROUTE_TURN_LEFT },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: gc.ROUTE_TURN_RIGHT },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: gc.ROUTE_TURN_UP },
					{ code: tempDirectionFix ? gc.ROUTE_DIR_FIX_ON : gc.ROUTE_DIR_FIX_OFF },
					{ code: gc.ROUTE_END }
				]
			} ] );

		} else if( animeType === VU_1LINE ) {	//  animePattern 3〜5
			this.command205( [ eventId, {
				repeat: false, skippable: true, wait: true, list: [
					{ code: gc.ROUTE_TURN_RIGHT },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: gc.ROUTE_TURN_LEFT },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: gc.ROUTE_TURN_DOWN },
					{ code: tempDirectionFix ? gc.ROUTE_DIR_FIX_ON : gc.ROUTE_DIR_FIX_OFF },
					{ code: gc.ROUTE_END }
				]
			} ] );

		} else if( animeType === VD_3LINE ) {	//  animePattern 6
			this.command205( [ eventId, {
				repeat: false, skippable: true, wait: true, list: [
					{ code: SET_CHAR, parameters: [ charaNo, 1, 2 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 2, 2 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 0, 4 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 1, 4 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 2, 4 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 0, 6 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 1, 6 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 2, 6 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 0, 8 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 1, 8 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 2, 8 ] },
					{ code: tempDirectionFix ? gc.ROUTE_DIR_FIX_ON : gc.ROUTE_DIR_FIX_OFF },
					{ code: gc.ROUTE_END }
				]
			} ] );

		} else if( animeType === VU_3LINE ) {	//  animePattern 7
			this.command205( [ eventId, {
				repeat: false, skippable: true, wait: true, list: [
					{ code: SET_CHAR, parameters: [ charaNo, 1, 2 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 2, 2 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 0, 4 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 1, 4 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 2, 4 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 0, 6 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 1, 6 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 2, 6 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 0, 8 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 1, 8 ] },
					{ code: gc.ROUTE_WAIT, parameters: [ waitFrames ] },
					{ code: SET_CHAR, parameters: [ charaNo, 2, 8 ] },
					{ code: tempDirectionFix ? gc.ROUTE_DIR_FIX_ON : gc.ROUTE_DIR_FIX_OFF },
					{ code: gc.ROUTE_END }
				]
			} ] );
		}
	};



	/*---- Game_CharacterBase ----*/
	/**
	 * COM_ANIME 対応。
	 * TF_isAnime フラグが true の場合、規定の移動処理を行わない。
	 */
	const _Game_CharacterBase_isMoving = Game_CharacterBase.prototype.isMoving;
	Game_CharacterBase.prototype.isMoving = function() {
		if( this.TF_isAnime ) return false;
		return _Game_CharacterBase_isMoving.call( this );
	};


	/*---- Game_Character ----*/
	const _Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
	Game_Character.prototype.processMoveCommand = function( command ) {
		_Game_Character_processMoveCommand.apply( this, arguments );
		if( !command ) return;

		const params = command.parameters;
		switch( command.code ) {
			case SET_CHAR: setCharPattern( this, undefined, params[ 0 ], params[ 1 ], params[ 2 ] ); break;
			case COM_GO_XY: this.TF_goXY( ...params ); break;
		}
	};

	// Game_Event と同様に Game_Player・Game_Follower にオリジナルパターン( _originalPattern )の変更機能をつける。
	// これにより歩行パターンを設定後、規定(1)のオリジナルパターンに戻ることを防ぐ。

	/*---- Game_Player ----*/
	const _Game_Player_initialize = Game_Player.prototype.initialize;
	Game_Player.prototype.initialize = function() {
		_Game_Player_initialize.call( this );
		this._eventId = -1;
		this._originalPattern = 1;
	};
	Game_Player.prototype.isOriginalPattern = function() {
		return this.pattern() === this._originalPattern;
	};

	/*---- Game_Follower ----*/
	const _Game_Follower_initialize = Game_Follower.prototype.initialize;
	Game_Follower.prototype.initialize = function( memberIndex ) {
		_Game_Follower_initialize.apply( this, arguments );

		this._eventId = FOLLOWER_OFFSET - this._memberIndex + 1;
		this._originalPattern = 1;
		this._isFollow = true;
	};
	Game_Follower.prototype.isOriginalPattern = function() {
		return this.pattern() === this._originalPattern;
	};

	/**
	 * 追跡状態の時は隊列メンバーはプレイヤーのデータをコピー。
	 */
	const _Game_Follower_update = Game_Follower.prototype.update;
	Game_Follower.prototype.update = function() {
		if( this.isFollow() ) {
			_Game_Follower_update.call( this );
		} else {
			Game_Character.prototype.update.call( this );
		}
	};

	/**
	 * プレイヤーの追跡状態か。
	 * TF_isAnime フラグが true の時はプレイヤーを追わない。
	 * @returns Boolean 前のキャラを追うか
	 */
	Game_Follower.prototype.isFollow = function() {
		return ( this._isFollow || this._isFollow === undefined ) && !this.TF_isAnime;
	};


	/*---- Game_Vehicle ----*/
	const _Game_Vehicle_initialize = Game_Vehicle.prototype.initialize;
	Game_Vehicle.prototype.initialize = function( type ) {
		_Game_Vehicle_initialize.apply( this, arguments );
		this._eventId = stringToEventId( type );
		this._originalPattern = 1;
	};
	Game_Vehicle.prototype.isOriginalPattern = function() {
		return this.pattern() === this._originalPattern;
	};


	/*---- Game_Followers ----*/
	/**
	 * 追跡状態の時はプレイヤーに同期してジャンプ。
	 */
	const _Game_Followers_jumpAll = Game_Followers.prototype.jumpAll;
	Game_Followers.prototype.jumpAll = function() {
		if( !$gamePlayer.isJumping() ) return;

		for( var i = 0; i < this._data.length; i++ ) {
			const follower = this._data[ i ];
			if( !follower.isFollow() ) continue;
			const sx = $gamePlayer.deltaXFrom( follower.x );
			const sy = $gamePlayer.deltaYFrom( follower.y );
			follower.jump( sx, sy );
		}
	};

	/**
	 * 追跡状態の時だけプレイヤーを追う。
	 */
	const _Game_Followers_updateMove = Game_Followers.prototype.updateMove;
	Game_Followers.prototype.updateMove = function() {
		const currentFollowers = this._data.filter( e => e.isFollow() );
		for( let i = currentFollowers.length - 1; i >= 0; i-- ) {
			const precedingCharacter = i > 0 ? currentFollowers[ i - 1 ] : $gamePlayer;
			currentFollowers[ i ].chaseCharacter( precedingCharacter );
		}
	};

	/**
	 * 4方向を右回転90して返す。
	 * @param {Number} d 方向(テンキー対応)
	 */
	function directionTurn90D_R( d ) {
		return ( d < 5 ) ? d * 2 : d - ( 10 - d );
	}
	/**
	 * 4方向を左回転90して返す。
	 * @param {Number} d 方向(テンキー対応)
	 */
	function directionTurn90D_L( d ) {
		return ( d < 5 ) ? d * 2 : d - ( 10 - d );
	}
	/**
	 * 8方向を4方向にして返す。
	 * @param {Number} d 方向(テンキー対応)
	 */
	function convertD8to4( d ) {
		const dy = getDy( d );
		return ( dy === -1 ) ? 8 : ( dy === 1 ) ? 2 : d;
	}
	/**
	 * 指定方向のX要素を返す。
	 * @param {Number} d 方向(テンキー対応)
	 */
	function getDx( d ) {
		const sidePattern = d % 3;
		return ( sidePattern === 0 ) ? 1 : ( sidePattern === 1 ) ? -1 : 0;
	}
	/**
	 * 指定方向のY要素を返す。
	 * @param {Number} d 方向(テンキー対応)
	 */
	function getDy( d ) {
		return ( d < 4 ) ? 1 : ( 6 < d ) ? -1 : 0;
	}
	/**
	 * [移動速度]をウェイトのフレーム数に変換して返す。
	 * @param {Number} speed 
	 */
	function speedToFrames( speed ) {
		// speed 1: 1 / 8倍速, 2: 1 / 4倍速, 3: 1 / 2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
		return 128 >> speed;
	}
	/**
	 * 文字列をPointオブジェクトに変換して返す。
	 * @param {String} pointStr "x, y" 形式の文字列
	 * @returns {Point} 
	 */
	function stringToPoint( pointStr ) {
		const args = pointStr.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
		if( args === null ) throw Error( `${PLUGIN_NAME}: wrong parameter "${pointStr}"` );
		return new Point( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
	}
} )();