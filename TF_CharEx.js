//========================================
// TF_CharEx.js
// Version :0.0.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:ja
 * @target MZ
 * @plugindesc キャラのアニメや移動など強化
 * @author とんび@鳶嶋工房(tonbi.jp)
 * @url
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @param moveUnit
 * @desc 移動単位(COM_END_ANIME時の配置単位)
 * @type select
 * @option 通常(1タイル)
 * @value 1
 * @option 半歩(0.5タイル)
 * @value 0.5
 * @option なし(アナログ)
 * @value 0
 * @default 1
 * 
 * @help
 * 主な機能とイベントコマンドにない利点。規定値:現在値)
 * 
 * 1 : キャラ( イベント・プレイヤー・隊列メンバー )の位置・パターンの設定。
 * 　ピクセル単位の位置指定で、キャラの繊細なアニメーションができる。
 * 　歩行パターン別の指定で、キャラ素材を無駄なく利用できる。
 * 
 * 2 : 頻出するアニメーションの指定。
 * 　収録素材の宝箱などは、3列全て同じ素材が並んでいて無駄が多い。
 * 　歩行パターン別に指定可能なので、3パターン違う素材を置ける。
 *
 * 3 : キャラの[ルート移動]の簡易コマンドによる指定。
 * 　例えば[上に移動][上に移動][上に移動][上に移動]と指定が必要な場合、
 * 　↑4 と書けるので回数調整が容易で、全体の見通しが良い。
 *
 * 通常のイベントコマンドでは指定できない隊列メンバーを指定できる。
 *
 * 
 * 【[移動ルートの設定]で使うスクリプト】
 * ------------------------------
 * this.TF_goXY( [x], [y] );
 * 　指定座標に移動。
 * ------------------------------
 * this.TF_goEv( [目標イベントID], [dx], [dy] );
 * 　目標イベント位置に移動。
 * =========================
 * 
 * 【詳細】
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
 * 真偽値( true/false )を指定する値には、on/off も使える。
 * ------------------------------
 * [イベントID][画像ファイル名][キャラ番号][歩行パターン][向き] [キャラパターン]
 * [ウェイト][x][y][mx][my][移動指定][隊列メンバーID]の値は、
 * 全てV[n]の形式で変数を指定できる。
 *
 * 例 : TF_LOCATE_XY 0 V[1] V[2]
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
 * 　COM_GO_XY( COM_GO_EV ) : go, @, 移
 * 　　コンマ( , )で区切って [x],[y] の座標に移動。
 * 　　数字がひとつだけの場合イベントIDとみなし、その位置に移動。
 * 
 * TF_ROUTE [イベントID] [移動指定] [繰り返し] [飛ばす] [待つ]
 * 　イベントコマンドの[ルートの設定]を一行で書く。
 * 　[移動指定] 専用コマンド文字(例:←↓↑→)+数値の連続 ※下部詳細参照
 * 　[繰り返し] 指定した動作を繰り返すか(規定値:false)
 * 　[飛ばす] 移動できない場合は飛ばすか(規定値:true)
 *
 * 　例: TF_ROUTE this  OFF ON OFF
 * 
 * @command route
 * @text 移動ルートの設定
 * @desc [移動ルートの設定]コマンドの文字列指定版
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  このイベント: this,self、プレイヤー: player
 * @type string
 * @default this
 * 
 * @arg routeCode
 * @text ルート設定文字列
 * @desc
 * 例: ↑4⤵︎5→3
 * 専用コマンド文字の詳細はヘルプを参照。
 * @type string
 *
 * @arg repeat
 * @text 動作を繰り返す
 * @desc
 * ON: 繰り返し | OFF: 一回のみ(規定値:OFF)
 * @type boolean
 * @default false
 *
 * @arg skippable
 * @text 移動できない場合は飛ばす
 * @desc
 * ON: 飛ばす | OFF: 停止(規定値:ON)
 * @type boolean
 * @default true
 *
 * @arg wait
 * @text 完了までウェイト
 * @desc
 * ON: 完了まで単独実行 | OFF: 完了を待たず並列実行(規定値:ON)
 * @type boolean
 * @default true
 *
 * 
 * @command patternAnime
 * @text キャラパターン指定アニメ
 * @desc
 * 一定順のパターン表示によるアニメ
 * 宝箱・扉を開くなどに使う
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  このイベント: this, self、プレイヤー: player
 * @type string
 * @default this
 *
 * @arg filename
 * @text 画像ファイル名
 * @desc
 * .pngを除いた img/characters/ フォルダのファイル名
 * 指定なしだと、イベントに指定されている画像を使う
 * @type file
 *
 * @arg characterNumber
 * @text キャラクター番号
 * @desc
 * [1234]
 * [5678] 0は現在値
 * @type number
 * @default 0
 * @min 0
 * @max 8
 *
 * @arg animePattern
 * @text パターン
 * @desc
 *  パターンの列(規定値:現在値)
 * @type select
 * @default -1
 * @option 現在値
 * @value -1
 * @option ↓・・ 左列
 * @value 0
 * @option ・↓・ 中央列
 * @value 1
 * @option ・・↓ 右列
 * @value 2
 * @option ↑・・ 左列
 * @value 3
 * @option ・↑・ 中央列
 * @value 4
 * @option ・・↑ 右列
 * @value 5
 * @option ┬│↓ 左列から順に全て
 * @value 6
 * @option ↑│┴ 右列から順に全て
 * @value 7
 *
 * @arg waitFrames
 * @text ウエイト
 * @desc
 * 1パターンの表示時間(フレーム数)(0:[移動速度]より算出)
 * @type number
 * @min 0
 * @default 0
 * 
 *
 * @command setCharPattern
 * @text キャラパターンを指定
 * @desc 
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @default 0
 * @option this
 * @option player
 * @option follower0
 * @option follower1
 * @option follower2
 *
 * @arg fileName
 * @text 画像ファイル名
 * @desc
 * .pngを除いた img/characters/ フォルダのファイル名
 *  (規定値:そのまま)
 * @type file
 * @dir img/characters/
 *
 * @arg characterNumber
 * @text キャラクター番号
 * @desc
 * [1234]
 * [5678] (規定値:0 そのまま)
 * @type number
 * @default 0
 * @min 0
 * @max 8
 *
 * @arg patternNumber
 * @text 歩行パターン
 * @desc
 *  パターンの列(規定値:そのまま)
 * @type select
 * @default -1
 * @option そのまま
 * @value -1
 * @option ↓・・ 左列
 * @value 0
 * @option ・↓・ 中央列
 * @value 1
 * @option ・・↓ 右列
 * @value 2
 *
 * @arg d
 * @text キャラの向き
 * @desc (規定値: そのまま)
 * @type select
 * @default 0
 * @option そのまま
 * @value 0
 * @option ↑
 * @value 8
 * @option ←
 * @value 4
 * @option →
 * @value 6
 * @option ↓
 * @value 2
 *
 *
 * @command goXY
 * @text イベントを指定座標に移動
 * @desc 障害物などで移動できないこともある。
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @default 0
 * @option this
 * @option player
 * @option follower0
 * @option follower1
 * @option follower2
 *
 * @arg x
 * @text 移動先x座標
 * @desc
 * タイル数
 * @type number
 * @default 0
 *
 * @arg y
 * @text 移動先y座標
 * @desc
 * タイル数
 * @type number
 * @default 0
 *
 * @arg isWait
 * @text 完了までウェイト
 * @desc
 * true:移動終了まで待つ false:待たない (規定値:true)
 * @type boolean
 * @default true
 * 
 *
 * @command goEv
 * @text イベントを別のイベント位置に移動
 * @desc 障害物などで移動できないこともある。
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @default 0
 * @option this
 * @option player
 * @option follower0
 * @option follower1
 * @option follower2
 *
 * @arg destinationId
 * @text 目標イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @type combo
 * @default 0
 * @option このイベント
 * @value 0
 * @option プレイヤー
 * @value -1
 * @option 隊列メンバー0
 * @value -2
 * @option 隊列メンバー1
 * @value -3
 * @option 隊列メンバー2
 * @value -4
 *
 * @arg dx
 * @text 相対x座標
 * @desc
 * 目標イベントからの相対x座標(タイル数)
 * @type number
 * @default 0
 *
 * @arg dy
 * @text 相対y座標
 * @desc
 * 目標イベントからの相対y座標(タイル数)
 * @type number
 * @default 0
 *
 * @arg isWait
 * @text 完了までウェイト
 * @desc
 * true:移動終了まで待つ false:待たない (規定値:true)
 * @type boolean
 * @default true
 *
 *
 * @command locateXY
 * @text イベントを指定座標に配置
 * @desc 瞬間移動する。
 * 状況で異なる初期位置の設定などに。
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @default 0
 * @option this
 * @option player
 * @option follower0
 * @option follower1
 * @option follower2
 *
 * @arg x
 * @text 移動先x座標
 * @desc
 * タイル数
 * @type number
 * @default 0
 *
 * @arg y
 * @text 移動先y座標
 * @desc
 * タイル数
 * @type number
 * @default 0
 * 
 * @arg patternNumber
 * @text 歩行パターン
 * @desc
 *  パターンの列(規定値:そのまま)
 * @type select
 * @default -1
 * @option そのまま
 * @value -1
 * @option ↓・・ 左列
 * @value 0
 * @option ・↓・ 中央列
 * @value 1
 * @option ・・↓ 右列
 * @value 2
 *
 * @arg d
 * @text キャラの向き
 * @desc (規定値: そのまま)
 * @type select
 * @default 0
 * @option そのまま
 * @value 0
 * @option ↑
 * @value 8
 * @option ←
 * @value 4
 * @option →
 * @value 6
 * @option ↓
 * @value 2
 *
 *
 * @command locateEV
 * @text イベントを別のイベント位置に移動
 * @desc 瞬間移動する。
 * 状況で異なる初期位置の設定などに。
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @default 0
 * @option this
 * @option player
 * @option follower0
 * @option follower1
 * @option follower2
 *
 * @arg destinationId
 * @text 目標イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @default 0
 * @option このイベント
 * @value 0
 * @option プレイヤー
 * @value -1
 * @option 隊列メンバー0
 * @value -2
 * @option 隊列メンバー1
 * @value -3
 * @option 隊列メンバー2
 * @value -4
 *
 * @arg dx
 * @text 相対x座標
 * @desc
 * 目標イベントからの相対x座標(タイル数)
 * @type number
 * @default 0
 *
 * @arg dy
 * @text 相対y座標
 * @desc
 * 目標イベントからの相対y座標(タイル数)
 * @type number
 * @default 0
 *
 * @arg patternNumber
 * @text 歩行パターン
 * @desc
 *  パターンの列(規定値:そのまま)
 * @type select
 * @default -1
 * @option そのまま
 * @value -1
 * @option ↓・・ 左列
 * @value 0
 * @option ・↓・ 中央列
 * @value 1
 * @option ・・↓ 右列
 * @value 2
 *
 * @arg d
 * @text キャラの向き
 * @desc (規定値: そのまま)
 * @type select
 * @default 0
 * @option そのまま
 * @value 0
 * @option ↑
 * @value 8
 * @option ←
 * @value 4
 * @option →
 * @value 6
 * @option ↓
 * @value 2
 * 
 *
 * @command follow
 * @text 隊列メンバーの追跡設定
 *
 * @arg eventId
 * @text 隊列メンバーID
 * @desc
 * @type select
 * @default all
 * @option all
 * @option follower0
 * @option follower1
 * @option follower2
 *
 * @arg isFollow
 * @text 追跡するか
 * @desc
 * true:追跡する false:追跡しない (規定値:true)
 * @type boolean
 * @default true
 *
 *
 * @command anime
 * @text アニメの指定
 * @desc アニメモード(移動アニメ停止・[すり抜け]ON)になるので、
 * 終わったら[アニメの終了]コマンドを実行しておくこと。
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @default 0
 * @option this
 * @option player
 * @option follower0
 * @option follower1
 * @option follower2
 *
 * @arg x
 * @text x移動距離
 * @desc
 * ピクセル数
 * @type number
 * @default 0
 *
 * @arg y
 * @text y移動距離
 * @desc
 * ピクセル数
 * @type number
 * @default 0
 *
 * @arg wait
 * @text ウェイト
 * @desc
 * 待ちフレーム(1/60秒)(規定値:0)
 * @type number
 * @default 0
 *
 * @arg characterNumber
 * @text キャラクター番号
 * @desc
 * [1234]
 * [5678] (規定値:0 そのまま)
 * @type number
 * @default 0
 * @min 0
 * @max 8
 *
 * @arg patternNumber
 * @text 歩行パターン
 * @desc
 *  パターンの列(規定値:そのまま)
 * @type select
 * @default -1
 * @option そのまま
 * @value -1
 * @option ↓・・ 左列
 * @value 0
 * @option ・↓・ 中央列
 * @value 1
 * @option ・・↓ 右列
 * @value 2
 *
 * @arg d
 * @text キャラの向き
 * @desc (規定値: そのまま)
 * @type select
 * @default 0
 * @option そのまま
 * @value 0
 * @option ↑
 * @value 8
 * @option ←
 * @value 4
 * @option →
 * @value 6
 * @option ↓
 * @value 2
 *
 * @command endAnime
 * @text アニメの終了
 * @desc [アニメの指定]をするとアニメモード(移動アニメ停止・[すり抜け]ON)になるので、
 * 終わったらこのコマンドを実行しておくこと。
 *
 * @arg eventId
 * @text イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 *  または選択
 * @type combo
 * @default 0
 * @option this
 * @option player
 * @option follower0
 * @option follower1
 * @option follower2
 * 
 */

( function() {
	"use strict";
	const WAIT_ROUTE = "route";
	const WAIT_MOVING = "moving";


	/*---- パラメータパース関数 ----*/
	const PARAM_TRUE = "true";
	const PARAM_ON = "on";
	const TYPE_BOOLEAN = "boolean";
	const TYPE_NUMBER = "number";
	const TYPE_STRING = "string";
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
			return $gameVariables.valueByName( result[ 1 ] );
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
		if( isNaN( result ) ) throw Error( `指定した値[${value}]が数値ではありません。` );
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
		if( isNaN( result ) ) throw Error( `指定した値[${value}]が数値ではありません。` );
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


	const EVENT_THIS = 'this';
	const EVENT_SELF = 'self';
	const EVENT_PLAYER = 'player';
	const EVENT_FOLLOWER0 = 'follower0';
	const EVENT_FOLLOWER1 = 'follower1';
	const EVENT_FOLLOWER2 = 'follower2';
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
	const pluginParams = PluginManager.parameters( "TF_CharEx" );
	const TF_moveUnit = parseFloatStrict( pluginParams.moveUnit );



	/*---- プラグインコマンド ----*/
	const COM_ROUTE = "route";
	const COM_PATTERN_ANIME = "patternAnime";
	const COM_SET_CHAR_PATTERN = "setCharPattern";
	const COM_GO_XY = "goXY";
	const COM_GO_EV = "goEv";
	const COM_LOCATE_XY = "locateXY";
	const COM_LOCATE_EV = "locateEv";
	const COM_FOLLOW = "follow";
	const COM_ANIME = "anime";
	const COM_END_ANIME = "endAnime";


	/*--- Game_Interpreter ---*/
	const _Game_Interpreter_setupChild = Game_Interpreter.prototype.setupChild;
	Game_Interpreter.prototype.setupChild = function( list, eventId ) {
		list.forEach( e => if( e.indent === undefined ) e.indent = 0 );// indent未設定なら0を設定する
		_Game_Interpreter_setupChild.apply( this, arguments );
	};

	/**
	 * プラグインコマンドの登録
	 */
	PluginManagerEx.registerCommand( document.currentScript, COM_ROUTE, moveRoute );
	PluginManagerEx.registerCommand( document.currentScript, COM_PATTERN_ANIME, patternAnime );
	PluginManagerEx.registerCommand( document.currentScript, COM_SET_CHAR_PATTERN, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		setCharPattern( targetEvent, args.fileName, args.characterNumber, args.patternNumber, args.d );
	} );
	PluginManagerEx.registerCommand( document.currentScript, COM_GO_XY, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		goXY( targetEvent, args.x, args.y, args.isWait );
	} );
	PluginManagerEx.registerCommand( document.currentScript, COM_GO_EV, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		const destinationEvent = getEventById( this, stringToEventId( args.destinationId ) );
		goEv( targetEvent, destinationEvent, args.dx, args.dy, args.isWait );
	} );
	PluginManagerEx.registerCommand( document.currentScript, COM_LOCATE_XY, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		locateXY( targetEvent, args.x, args.y, args.patternNumber, args.d );
	} );
	PluginManagerEx.registerCommand( document.currentScript, COM_LOCATE_EV, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		const destinationEvent = getEventById( this, stringToEventId( args.destinationId ) );
		locateEv( targetEvent, destinationEvent, args.dx, args.dy, args.patternNumber, args.d );
	} );
	PluginManagerEx.registerCommand( document.currentScript, COM_FOLLOW, function( args ) {
		if( args.eventId === "all" ) {
			const followers = $gamePlayer.followers();
			followers.forEach( follower => {
				followMode( follower, args.isFollow );
			} );
		} else {
			const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
			followMode( targetEvent, args.isFollow );
		}
	} );
	PluginManagerEx.registerCommand( document.currentScript, COM_ANIME, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		anime( targetEvent, args.x, args.y, args.wait, args.characterNumber, args.patternNumber, args.d );
	} );
	PluginManagerEx.registerCommand( document.currentScript, COM_END_ANIME, function( args ) {
		const targetEvent = getEventById( this, stringToEventId( args.eventId ) );
		animeMode( targetEvent, false );
	} );


	/**
	 * [移動ルートの設定]ができない隊列メンバーに対して、
	 * TF_ROUTEを可能にする。
	 * params
	 */
	const _Game_Interpreter_command205 = Game_Interpreter.prototype.command205;
	Game_Interpreter.prototype.command205 = function( params ) {
		// if( typeof params[ 0 ] === TYPE_STRING ) params[ 0 ] = stringToEventId( params[ 0 ] );

		if( -2 < params[ 0 ] ) return _Game_Interpreter_command205.call( this, params );

		$gameMap.refreshIfNeeded();
		this._character = getEventById( this, params[ 0 ] );
		if( !this._character ) return true;
		this._character.forceMoveRoute( params[ 1 ] );
		if( params[ 1 ].wait ) this.setWaitMode( WAIT_ROUTE );
		return true;
	};

	/**
	 * ウェイトモードに移動待ちを追加。
	 */
	const _Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
	Game_Interpreter.prototype.updateWaitMode = function() {
		if( this._waitMode === WAIT_MOVING ) {
			const waiting = this._character.isMoving();
			if( !waiting ) {
				this._waitMode = "";
			}
			return waiting;
		}
		return _Game_Interpreter_updateWaitMode.call( this );
	};


	/**
	 * スクリプトコマンドの実行。
	 */
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
		const destinationEvent = getEventById( this, stringToEventId( destinationId ) );
		goEv( this, destinationEvent, dx, dy, isWait );
	};


	/**
	 * TF_FILE_CHAR および SET_CHAR の実行。
	 *
	 * @param {Game_Character} targetEvent イベント・プレイヤー・隊列メンバーのいずれか
	 * @param {String} fileName キャラクタファイル名( img/characters/ 以下) (規定値: targetEventの指定)
	 * @param {String} characterNumber キャラクタ番号( 0~7 )
	 * @param {String} patternNumber パターン番号( 0~2 )
	 * @param {String} d キャラの向き(テンキー対応)
	 */
	function setCharPattern( targetEvent, fileName, characterNumber, patternNumber, d ) {
		// 画像ファイル
		if( fileName === undefined || fileName === "" ) {
			fileName = targetEvent.characterName();
		}

		// キャラ番号
		if( characterNumber === undefined || characterNumber === "" ) {
			characterNumber = targetEvent.characterIndex();
		}

		targetEvent.setImage( fileName, characterNumber );

		// パターン番号
		if( patternNumber !== undefined && patternNumber !== "" ) {
			targetEvent._originalPattern = patternNumber;
			targetEvent.setPattern( patternNumber );
		}

		// 向き
		if( d !== undefined && d !== "" ) {
			targetEvent._direction = stringToDirection( d );
		}
	}

	/**
	 * TF_LOCATE_XY  の実行。
	 *
	 * @param {Game_Character} targetEvent イベント・プレイヤー・隊列メンバーのいずれか
	 * @param {String} x x座標(タイル数)
	 * @param {String} y y座標(タイル数)
	 * @param {String} patternNo パターン番号( 0~2 )
	 * @param {String} d キャラの向き(テンキー対応)
	 */
	function locateXY( targetEvent, x, y, patternNo, d ) {
		if( patternNo ) {
			setCharPattern( targetEvent, undefined, undefined, patternNo, d );
		}
		targetEvent.setPosition( parseFloatStrict( x ), parseFloatStrict( y ) );// HalfMove.js 対応でparseFloatStrict()を使う
	}

	/**
	 * TF_LOCATE_EV  の実行。
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
	 * COM_GO_XY  の実行。
	 * 類似プラグイン
	 * 　移動ルート＋(https://w.atwiki.jp/pokotan/pages/3.html)
	 * 　移動ルート簡易記述関数プラグイン(https://ci-en.dlsite.com/creator/2449/article/122390)
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
		interpreter._character = targetEvent;
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
	const MOVE_GO = [ "go", "@", "移" ]; // COM_GO_XY(COM_GO_EV)
	// ROUTE_PLAY_SE
	// ROUTE_SCRIPT

	/**
	 * route
	 * @param {String} eventId イベントIDかそれに替わる識別子の文字列
	 * @param {String} routeCode 移動ルートの文字列
	 * @param {String} isRepeat 繰り返すか(規定値:false)
	 * @param {String} skippable 移動できない場合とばすか(規定値:true)
	 * @param {String} isWait 待つか(規定値:true)
	 */
	function moveRoute( args ) {
		const eventId = stringToEventId( args.eventId );
		const targetEvent = getEventById( this, eventId );
		const routeCodeArray = args.routeCode.match( /[^0-9.,-]+[0-9.,-]+/ig );
		const repeat = parseBooleanStrict( args.repeat );
		const skippable = ( args.skippable === undefined ) ? true : parseBooleanStrict( args.skippable );
		const wait = ( args.isWait === undefined ) ? true : parseBooleanStrict( args.wait );
		let movementList = [];
		let moveSpeed = targetEvent.moveSpeed();
		routeCodeArray.forEach( code => {
			const opcode = code.match( /[^0-9.,-]+/ )[ 0 ];
			const opland = code.match( /[0-9.,-]+/ )[ 0 ];
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
		this.command205( [ eventId, { repeat: repeat, skippable: skippable, wait: wait, list: movementList } ] );	// SET_MOVEMENT_ROUTE
	}


	/**
	 * フォロー状態の設定。
	 *
	 * @param {Game_Follower} targetEvent 隊列メンバーのいずれか
	 * @param {String|Boolean} isFollow プレイヤーを追跡するか(規定値:true)
	 */
	function followMode( targetEvent, isFollow ) {
		isFollow = ( isFollow === undefined ) ? true : parseBooleanStrict( isFollow );
		targetEvent.TF_isFollow = isFollow;
		if( isFollow ) return;
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

	/**
	 * patternAnime  の実行。
	 *
	 * @param {String} eventId イベントIDかそれに替わる識別子の文字列
	 * @param {String} fileName キャラクタファイル名( img/characters/ 以下)
	 * @param {String} characterNumber キャラクタ番号( 1~8 )
	 * @param {String} animePattern パターン番号( 0~2 )
	 * @param {String} waitFrames 待ちフレーム数
	 *  
	 */
	const VD_1LINE = 0;	// ↓
	const VU_1LINE = 1;	// ↑
	const VD_3LINE = 2;	// ┬│↓
	const VU_3LINE = 3;	// ↑│┴
	function patternAnime( args ) {
		const eventId = stringToEventId( args.eventId );
		const targetEvent = getEventById( this, eventId );
		const waitFrames = ( args.waitFrames === undefined || args.waitFrames === 0 ) ?
			speedToFrames( targetEvent.moveSpeed() ) :
			parseInt( args.waitFrames, 10 );

		let animeType;
		let animePattern;
		if( args.animePattern === 0 ) {
			animePattern = undefined;
			animeType = VD_1LINE;
		} else if( args.animePattern < 3 ) {
			animePattern = args.animePattern;
			animeType = VD_1LINE;
		} else if( args.animePattern < 6 ) {
			animePattern = args.animePattern - 3;
			animeType = VU_1LINE;
		} else if( args.animePattern === 6 ) {
			animePattern = 0;
			animeType = VD_3LINE;
		} else if( args.animePattern === 7 ) {
			animePattern = 2;
			animeType = VU_3LINE;
		} else {
			throw Error( `[${args.animePattern} is illegal animation pattern.` );
		}
		setCharPattern( targetEvent, args.fileName, args.characterNumber, animePattern );
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
	const _Game_Player_initMembers = Game_Player.prototype.initMembers;
	Game_Player.prototype.initMembers = function() {
		_Game_Player_initMembers.call( this );
		this._originalPattern = 1;
	};
	Game_Player.prototype.isOriginalPattern = function() {
		return this.pattern() === this._originalPattern;
	};

	/*---- Game_Follower ----*/
	const _Game_Follower_initMembers = Game_Follower.prototype.initMembers;
	Game_Follower.prototype.initMembers = function() {
		_Game_Follower_initMembers.call( this );
		this._originalPattern = 1;
		this.TF_isFollow = true;
	};

	Game_Follower.prototype.isOriginalPattern = function() {
		return this.pattern() === this._originalPattern;
	};

	/**
	 * TF_isFollow が false か、TF_isAnime フラグが true の時は
	 * プレイヤーを追わない。
	 */
	const _Game_Follower_chaseCharacter = Game_Follower.prototype.chaseCharacter;
	Game_Follower.prototype.chaseCharacter = function( character ) {
		if( !this.TF_isFollow || this.TF_isAnime ) return false;
		_Game_Follower_chaseCharacter.apply( this, arguments );
	};

	/**
	 * 隊列メンバーはプレイヤーのデータをコピーしているが、
	 * TF_isFollow が false の時はコピーしない。
	 */
	const _Game_Follower_update = Game_Follower.prototype.update;
	Game_Follower.prototype.update = function() {
		if( this.TF_isFollow ) {
			_Game_Follower_update.call( this );
		} else {
			Game_Character.prototype.update.call( this );
		}
	};


	/*---- Game_Followers ----*/
	/**
	 * TF_isFollow が false か、TF_isFollow フラグが true の時は
	 * プレイヤーに同期してジャンプしない。
	 */
	const _Game_Followers_jumpAll = Game_Followers.prototype.jumpAll;
	Game_Followers.prototype.jumpAll = function() {
		if( !$gamePlayer.isJumping() ) return;

		for( var i = 0; i < this._data.length; i++ ) {
			const follower = this._data[ i ];
			if( !follower.TF_isFollow || follower.TF_isAnime ) continue;
			const sx = $gamePlayer.deltaXFrom( follower.x );
			const sy = $gamePlayer.deltaYFrom( follower.y );
			follower.jump( sx, sy );
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
	 * @param {*} speed 
	 */
	function speedToFrames( speed ) {
		// speed 1: 1 / 8倍速, 2: 1 / 4倍速, 3: 1 / 2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
		return 128 >> speed;
	}
} )();