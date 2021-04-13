//========================================
// TF_ScreenUtil.js
// Version :0.1.0.0
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
 * マップ画面を2倍に拡大するとか。
 *
 * 【タグ】
 * [マップ]のメモにタグを書き込むと、そのマップはスクロールせず固定となります。
 * <TF_fixedMap:0 0>
 *
 * TODO :
 * 固定のON/OFFするコマンド
 * 
 * 利用規約 : MITライセンス
 * @================================================
*/
( () => {
	"use strict";
	const PLUGIN_NAME = "TF_ScreenUtil";

	// メタタグ
	const TAG_FLEXED_MAP = "TF_fixedMap";

	/**
	 * パラメータを受け取る
	 */
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );

	/*---- Game_Player ----*/
	// マップ固定
	const _Game_Player_updateScroll = Game_Player.prototype.updateScroll;
	Game_Player.prototype.updateScroll = function( lastScrolledX, lastScrolledY ) {
		if( $gameMap.isMapFixed ) return;

		_Game_Player_updateScroll.apply( this, arguments );
	};

	// 拡大時のスクロール開始x位置
	const _Game_Player_centerX = Game_Player.prototype.centerX;
	Game_Player.prototype.centerX = function() {
		return _Game_Player_centerX.call( this ) / $gameScreen.zoomScale();
	};

	// 拡大時のスクロール開始y位置
	const _Game_Player_centerY = Game_Player.prototype.centerY;
	Game_Player.prototype.centerY = function() {
		return _Game_Player_centerY.call( this ) / $gameScreen.zoomScale();
	};

	/*---- Game_Map ----*/
	// マップ拡大時の画面端の処理
	const _Game_Map_isValid = Game_Map.prototype.isValid;
	Game_Map.prototype.isValid = function( x, y ) {
		if( $gameMap.isMapFixed ) {
			// 固定マップの端を考慮
			const xLimit = Math.ceil( $gameMap.displayX() + Graphics.width / $gameMap.tileWidth() / $gameScreen.zoomScale() * 2 ) / 2;
			const yLimit = Math.ceil( $gameMap.displayY() + Graphics.height / $gameMap.tileHeight() / $gameScreen.zoomScale() * 2 ) / 2;
			return Math.floor( $gameMap.displayX() * 2 ) / 2 <= x && x < xLimit && Math.floor( $gameMap.displayY() * 2 ) / 2 <= y && y < yLimit;
		} else if( $gameScreen.zoomScale() === 1 ) {
			return _Game_Map_isValid.apply( this, arguments );
		} else {
			// 拡大時のマップはみ出し部分を考慮
			const zoomScale = $gameScreen.zoomScale();
			const outerWidth = Math.ceil( ( zoomScale - 1 ) * Graphics.width / $gameMap.tileWidth() / zoomScale );
			const outerHeight = Math.ceil( ( zoomScale - 1 ) * Graphics.height / $gameMap.tileHeight() / zoomScale );
			return 0 <= x && x < this.width() - outerWidth && 0 <= y && y < this.height() - outerHeight;
		}
	};

	/*---- Scene_Map ----*/
	//マップ拡大
	const _Scene_Map_initialize = Scene_Map.prototype.initialize;
	Scene_Map.prototype.initialize = function() {
		_Scene_Map_initialize.call( this );
		$gameScreen._zoomScale = 2;
	};

	// マップ固定位置の設定
	const _Scene_Map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		_Scene_Map_start.call( this );

		// マップメモ固定座標の指定メタタグの処理
		// 例: <TF_fixedMap:0.84,0.2>
		const fixedMapArgs = PluginManagerEx.findMetaValue( $dataMap, TAG_FLEXED_MAP );
		$gameMap.isMapFixed = ( fixedMapArgs !== undefined );
		if( !$gameMap.isMapFixed ) return;

		const args = fixedMapArgs.match( /([.0-9]+)[^.0-9]+([.0-9]+)/ );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${fixedMapArgs}"`;
		$gameMap.setDisplayPos( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
	};

	/*--- Scene_Title ---*/
	const _Scene_Title_start = Scene_Title.prototype.start;
	Scene_Title.prototype.start = function() {
		_Scene_Title_start.call( this );

		fitToScreen( this._backSprite1 );
		fitToScreen( this._backSprite2 );
	};

	/**
	* スプライトを画面いっぱいに拡大
	* @param {Sprite} sprite スプライト
	*/
	function fitToScreen( sprite ) {
		if( !sprite.bitmap ) return;
		if( !sprite.bitmap.width ) {
			return setTimeout( fitToScreen.bind( this, sprite ), 5 );	// ビットマップの読み込み確認
		}

		const scaleX = Graphics.width / sprite.bitmap.width;
		const scaleY = Graphics.height / sprite.bitmap.height;
		if( 1 < scaleX ) sprite.scale.x = scaleX;
		if( 1 < scaleY ) sprite.scale.y = scaleY;
		centerSprite( sprite );
	}
	/**
	 * スプライトを画面中央に表示
	 * @param {Sprite} sprite スプライト
	 */
	function centerSprite( sprite ) {
		sprite.x = Graphics.width / 2;
		sprite.y = Graphics.height / 2;
		sprite.anchor.x = 0.5;
		sprite.anchor.y = 0.5;
	}


	/*--- Spriteset_Battle ---*/
	const TYPE_STAGE = 1;	// ステージ(地面)背景
	const TYPE_SET = 2;			// セット(建物)背景
	Spriteset_Battle.prototype.createBattleback = function() {
		this._back1Sprite = new Sprite_Battleback( this.battleback1Name(), TYPE_STAGE );
		this._back2Sprite = new Sprite_Battleback( this.battleback2Name(), TYPE_SET );
		fitToScreen( this._back1Sprite );
		fitToScreen( this._back2Sprite );
		this._battleField.addChild( this._back1Sprite );
		this._battleField.addChild( this._back2Sprite );
	};
	Spriteset_Battle.prototype.updateBattleback = function() { };


	/*--- Sprite_Battleback ---*/
	class Sprite_Battleback extends Sprite {
		constructor( bitmapName, type ) {
			super();
			this.bitmap = this.createBitmap( bitmapName, type );
		}

		/**
		 * 背景画像の生成・読み込み
		 */
		createBitmap( bitmapName, type ) {
			if( bitmapName === "" ) {
				return new Bitmap( Graphics.width, Graphics.height );
			} else if( type === TYPE_STAGE ) {
				return ImageManager.loadBattleback1( bitmapName );
			} else {
				return ImageManager.loadBattleback2( bitmapName );
			}
		}
	}


	/*--- Sprite_Enemy ---*/
	const DEFAULT_SCREEN_WIDTH = 816;
	const DEFAULT_SCREEN_HEIGHT = 624;
	/**
	 * 敵位置をスクリーンサイズに合わせて調整
	 */
	const _Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
	Sprite_Enemy.prototype.setBattler = function( battler ) {
		_Sprite_Enemy_setBattler.call( this, battler );

		if( !this._enemy._alteredScreenY ) {
			this._homeY += Math.floor( ( Graphics.height - DEFAULT_SCREEN_HEIGHT ) / 2 );
			this._enemy._screenY = this._homeY;
			this._enemy._alteredScreenY = true;
		}
		if( $gameSystem.isSideView() || this._enemy._alteredScreenX ) return;

		this._homeX += ( Graphics.width - DEFAULT_SCREEN_WIDTH ) / 2;
		this._enemy._screenX = this._homeX;
		this._enemy._alteredScreenX = true;
	};
} )();
