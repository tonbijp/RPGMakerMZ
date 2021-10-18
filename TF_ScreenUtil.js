//========================================
// TF_ScreenUtil.js
// Version :0.6.0.1
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
 * @plugindesc 各種画面サイズ設定と画面固定
 * @author とんび@鳶嶋工房
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_ScreenUtil.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 *
 * @help
 * マップ画面を拡大するとか画面周りのプラグイン。
 * 
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 *
 * ●メタタグ
 * [マップ]のメモ欄にメタタグを書き込むと、そのマップはスクロールせず固定となります。
 * 書式: <TF_fixedMap:[画面左座標][区切り文字][画面上座標]>
 * [画面左座標] マイナスや小数点以下も含む数値。
 * [区切り文字] 数値以外の文字、複数も可(推奨: ", ") 他のプラグインで慣れてるやつでもいいです。
 * [画面上座標] マイナスや小数点以下も含む数値。
 * 
 * 例: <TF_fixedMap:-2, 0.8>
 * 
 * 利用規約 : MITライセンス
 * @================================================
 * @command locateXY @text カメラを指定座標に設定
 * @desc 瞬時に位置を変え、その位置に固定される。
 * 指定するのは画面左上の座標。
 *
 * @arg pointStr @text 移動先位置(タイル数)
 * @desc 移動先座標(小数点以下可)
 * @type string @default 0,0
 *
 * @================================================
 * @command locateEv @text カメラをイベント位置に設定
 * @desc 瞬時に位置を変え、その位置に固定される。
 * 指定するのは画面左上の座標。
 * 
 * @arg destinationId @text 目標イベントID
 * @desc
 * イベントID(数値)かイベントの名前
 * @type combo @default this
 * @option this @option player @option follower0 @option follower1 @option follower2
 * @option boat @option ship @option airship
 *
 * @arg pointStr @text 移動先位置(タイル数)
 * @desc イベントからの相対座標(小数点以下可)
 * @type string @default 0,0
 * @================================================
 * @command fixMap @text カメラを固定
 * @desc カメラをその場に固定する。
 *
 * @arg isMapFixed @text カメラ固定状態
 * @desc
 * @type boolean @default false
 * @on 固定 @off 追従(規定値)
 *
 * @================================================
*/
( () => {
	"use strict";
	const PLUGIN_NAME = "TF_ScreenUtil";

	// メタタグ
	const TAG_FLEXED_MAP = "TF_fixedMap";

	// 定数
	const DEFAULT_SCREEN_WIDTH = 816;
	const DEFAULT_SCREEN_HEIGHT = 624;
	const TF_zoomScale = 2;	// 自由にできそうに見えて二倍固定


	/**
	 * パラメータを受け取る
	 */
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );


	/*---- プラグインコマンド ----*/
	const COM_LOCATE_XY = "locateXY";
	const COM_LOCATE_EV = "locateEv";
	const COM_FIX_MAP = "fixMap";

	/**
	 * プラグインコマンドの登録
	 */
	// [ カメラを指定座標に配置 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_LOCATE_XY, function( args ) {
		const rect = stringToPoint( args.pointStr );
		locateCameraXY( rect.x, rect.y );
	} );

	// [ カメラをイベント位置に配置 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_LOCATE_EV, function( args ) {
		const destinationEvent = stringToEvent( this, args.destinationId );
		const rect = stringToPoint( args.pointStr );
		locateCameraEv( destinationEvent, rect.x, rect.y );
	} );

	// [ カメラを固定 ]
	PluginManagerEx.registerCommand( document.currentScript, COM_FIX_MAP, function( args ) {
		$gameMap.isMapFixed = args.isMapFixed;
	} );

	/**
	 * カメラ位置の設定。
	 *
	 * @param {Number} x x座標(タイル数)
	 * @param {Number} y y座標(タイル数)
	 */
	function locateCameraXY( x, y ) {
		$gameMap.isMapFixed = true;
		$gameMap.setDisplayPos( x, y );
	}

	/**
	 * カメラ位置をキャラ起点で設定。
	 *
	 * @param {Game_Character} destinationEvent 目標イベント
	 * @param {Number} dx 目標イベントからの相対x座標(タイル数)
	 * @param {Number} dy 目標イベントからの相対y座標(タイル数)
	 */
	function locateCameraEv( destinationEvent, dx, dy ) {
		const x = $gameMap.roundX( destinationEvent.x + dx );
		const y = $gameMap.roundY( destinationEvent.y + dy );
		locateCameraXY( x, y );
	}


	// ソフトフォーカスかけない設定
	// 個別に設定できるようにしたほうがいいと思う。
	// 少なくともプラグインパラメータに用意しておいたほうがいいね。
	const _Bitmap_initialize = Bitmap.prototype.initialize;
	Bitmap.prototype.initialize = function( width, height ) {
		_Bitmap_initialize.apply( this, arguments );
		this._smooth = false;
	};

	/*---- Game_Player ----*/
	// マップ固定
	const _Game_Player_updateScroll = Game_Player.prototype.updateScroll;
	Game_Player.prototype.updateScroll = function( lastScrolledX, lastScrolledY ) {
		if( $gameMap.isMapFixed ) return;

		_Game_Player_updateScroll.apply( this, arguments );
	};

	Game_Player.prototype.centerX = function() {
		return ( Graphics.width / $gameMap.displayTileWidth() - 1 ) / 2.0;
	};

	Game_Player.prototype.centerY = function() {
		return ( Graphics.height / $gameMap.displayTileHeight() - 1 ) / 2.0;
	};


	/*---- Game_Map ----*/
	Game_Map.prototype.parallaxOx = function() {
		if( this._parallaxZero ) {
			return this._parallaxX * this.displayTileWidth();
		} else if( this._parallaxLoopX ) {
			return ( this._parallaxX * this.displayTileWidth() ) / 2;
		} else {
			return 0;
		}
	};

	Game_Map.prototype.parallaxOy = function() {
		if( this._parallaxZero ) {
			return this._parallaxY * this.displayTileHeight();
		} else if( this._parallaxLoopY ) {
			return ( this._parallaxY * this.displayTileHeight() ) / 2;
		} else {
			return 0;
		}
	};

	Game_Map.prototype.screenTileX = function() {
		return Math.round( ( Graphics.width / this.displayTileWidth() ) * 16 ) / 16;
	};
	Game_Map.prototype.screenTileY = function() {
		return Math.round( ( Graphics.height / this.displayTileHeight() ) * 16 ) / 16;
	};

	Game_Map.prototype.canvasToMapX = function( x ) {
		const tileWidth = this.displayTileWidth();
		const originX = this._displayX * tileWidth;
		const mapX = Math.floor( ( originX + x ) / tileWidth );
		return this.roundX( mapX );
	};

	Game_Map.prototype.canvasToMapY = function( y ) {
		const tileHeight = this.displayTileHeight();
		const originY = this._displayY * tileHeight;
		const mapY = Math.floor( ( originY + y ) / tileHeight );
		return this.roundY( mapY );
	};

	Game_Map.prototype.updateParallax = function() {
		if( this._parallaxLoopX ) {
			this._parallaxX += this._parallaxSx / this.displayTileWidth() / 2;
		}
		if( this._parallaxLoopY ) {
			this._parallaxY += this._parallaxSy / this.displayTileHeight() / 2;
		}
	};

	// 画面表示されるタイルの大きさ(ピクセル数)
	// tileWidth() は素材のタイルサイズとして残す。
	Game_Map.prototype.displayTileWidth = function() {
		return this.tileWidth() * $gameScreen.zoomScale();
	};

	// 画面表示されるタイルの大きさ(ピクセル数)
	// tileHeight() は素材のタイルサイズとして残す。
	Game_Map.prototype.displayTileHeight = function() {
		return this.tileWidth() * $gameScreen.zoomScale();
	};

	Game_CharacterBase.prototype.isNearTheScreen = function() {
		const gw = Graphics.width;
		const gh = Graphics.height;
		const tw = $gameMap.displayTileWidth();
		const th = $gameMap.displayTileHeight();
		const px = this.scrolledX() * tw + tw / 2 - gw / 2;
		const py = this.scrolledY() * th + th / 2 - gh / 2;
		return px >= -gw && px <= gw && py >= -gh && py <= gh;
	};

	/*---- Scene_Map ----*/

	// startではタイミングが遅いのでこのハンドラを使う
	const _Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
	Scene_Map.prototype.onMapLoaded = function() {
		//マップ拡大
		$gameScreen._zoomScale = TF_zoomScale;

		_Scene_Map_onMapLoaded.call( this );

		if( !$dataMap.meta ) return;	// テスト時は $dataMap.meta が空なので以下処理しない

		// マップメモ固定座標の指定メタタグの処理
		// 例: <TF_fixedMap:0.84,0.2>
		const fixedMapArgs = PluginManagerEx.findMetaValue( $dataMap, TAG_FLEXED_MAP );
		$gameMap.isMapFixed = ( fixedMapArgs !== undefined );
		if( !$gameMap.isMapFixed ) return;
		const pos = stringToPoint( fixedMapArgs );
		$gameMap.setDisplayPos( pos.x, pos.y );
	};


	/*--- Sprite_Battleback ---*/
	// 背景をそのまま画面いっぱいに拡大する方式に変更
	Sprite_Battleback.prototype.adjustPosition = function() {
		this.width = Graphics.width;
		this.height = Graphics.height;
		this.x = ( Graphics.width - this.width ) / 2;
		if( $gameSystem.isSideView() ) {
			this.y = Graphics.height - this.height;
		} else {
			this.y = 0;
		}
		const ratioX = this.width / this.bitmap.width;
		const ratioY = this.height / this.bitmap.height;
		const scale = Math.max( ratioX, ratioY, 1.0 );
		this.scale.x = scale;
		this.scale.y = scale;
	};

	/*--- Sprite_Actor ---*/
	// アクター位置をスクリーンサイズに合わせて調整
	const PARTY_X = 600;
	const PARTY_Y = 250;
	const VERTICAL_DIFF = 48;
	const HORIZONTAL_DIFF = 32;

	const _Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
	Sprite_Actor.prototype.setActorHome = function( index ) {
		_Sprite_Actor_setActorHome.apply( this, arguments );

		const x = PARTY_X + ( Graphics.boxWidth - DEFAULT_SCREEN_WIDTH ) + index * HORIZONTAL_DIFF;
		const y = PARTY_Y + ( Graphics.boxHeight - DEFAULT_SCREEN_HEIGHT ) + index * VERTICAL_DIFF;
		this.setHome( x, y );
	};

	/*--- Spriteset_Base ---*/
	const _Spriteset_Base_updatePosition = Spriteset_Base.prototype.updatePosition;
	Spriteset_Base.prototype.updatePosition = function() {
		_Spriteset_Base_updatePosition.call( this );

		// 拡大分のズレを考慮
		this.x -= Math.round( $gameScreen.zoomX() * ( 1 - TF_zoomScale ) );
		this.y -= Math.round( $gameScreen.zoomY() * ( 1 - TF_zoomScale ) );
	};

	/*--- Scene_Map ---*/
	// 戦闘開始のエンカウントアニメーションを拡大に合わせて修正
	Scene_Map.prototype.updateEncounterEffect = function() {
		if( this._encounterEffectDuration <= 0 ) return;

		this._encounterEffectDuration--;
		const speed = this.encounterEffectSpeed();
		const n = speed - this._encounterEffectDuration;
		const p = n / speed;
		const q = ( ( p - 1 ) * 20 * p + 5 ) * p + 1;
		const zoomX = $gamePlayer.screenX();
		const zoomY = $gamePlayer.screenY() - $gameMap.tileHeight() / 2;

		if( n === 2 ) {
			$gameScreen.setZoom( zoomX, zoomY, TF_zoomScale );
			this.snapForBattleBackground();
			this.startFlashForEncounter( speed / 2 );
		}

		$gameScreen.setZoom( zoomX, zoomY, ( q * TF_zoomScale ) );
		if( n === Math.floor( speed / 6 ) ) {
			this.startFlashForEncounter( speed / 2 );
		}
		if( n === Math.floor( speed / 2 ) ) {
			BattleManager.playBattleBgm();
			this.startFadeOut( this.fadeSpeed() );
		}
	};


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


	/*--- ユーティリティ関数 ---*/
	/**
	 * 文字列をPointオブジェクトに変換して返す。
	 * @param {String} pointStr "x, y" 形式の文字列
	 * @returns {Point} 
	 */
	function stringToPoint( pointStr ) {
		const args = pointStr.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter '${pointStr}'`;
		return new Point( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
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
	const EVENT_FOLLOWER_ALL = "all";
	const VEHICLE_BOAT = "boat";
	const VEHICLE_SHIP = "ship";
	const VEHICLE_AIRSHIP = "airship";
	const VEHICLE_WALK = "walk";

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
	 * 指定された文字列に対応するイベントを返す
	 * @param {Game_Interpreter} interpreter インタプリタ
	 * @param {String} eventId イベントIDの番号か識別子
	 * @returns {Game_CharacterBase}
	 */
	function stringToEvent( interpreter, eventId ) {
		return getEventById( interpreter, stringToEventId( eventId ) );
	}
} )();
