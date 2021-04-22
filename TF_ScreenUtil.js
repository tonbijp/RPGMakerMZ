//========================================
// TF_ScreenUtil.js
// Version :0.3.0.0
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
 * TODO :
 * 固定のON/OFFするコマンド
 * 敵画像位置の調整ON/OFFパラメータ
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
		return 48 * $gameScreen.zoomScale();
	};

	// 画面表示されるタイルの大きさ(ピクセル数)
	// tileHeight() は素材のタイルサイズとして残す。
	Game_Map.prototype.displayTileHeight = function() {
		return 48 * $gameScreen.zoomScale();
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
		$gameScreen._zoomScale = 2;

		_Scene_Map_onMapLoaded.call( this );

		// マップメモ固定座標の指定メタタグの処理
		// 例: <TF_fixedMap:0.84,0.2>
		const fixedMapArgs = PluginManagerEx.findMetaValue( $dataMap, TAG_FLEXED_MAP );
		$gameMap.isMapFixed = ( fixedMapArgs !== undefined );
		if( !$gameMap.isMapFixed ) return;

		const args = fixedMapArgs.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${fixedMapArgs}"`;
		$gameMap.setDisplayPos( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
	};


	/*--- Spriteset_Base ---*/
	// 左上に角を合わせる(振動などに対応する必要はある)
	const _Spriteset_Base_updatePosition = Spriteset_Base.prototype.updatePosition;
	Spriteset_Base.prototype.updatePosition = function() {
		_Spriteset_Base_updatePosition.call( this );
		this.x = 0;
		this.y = 0;

		this.x += Math.round( $gameScreen.shake() );
	};

	const DEFAULT_SCREEN_WIDTH = 816;
	const DEFAULT_SCREEN_HEIGHT = 624;

	/*--- Sprite_Actor ---*/
	// アクター位置をスクリーンサイズに合わせて調整
	const _Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
	Sprite_Actor.prototype.setActorHome = function( index ) {
		_Sprite_Actor_setActorHome.apply( this, arguments );

		const x = 600 + ( Graphics.boxWidth - DEFAULT_SCREEN_WIDTH ) + index * 32;
		const y = 280 + ( Graphics.boxHeight - DEFAULT_SCREEN_HEIGHT ) + index * 48;
		this.setHome( x, y );
	};

	/*--- Sprite_Enemy ---*/
	// 敵位置をスクリーンサイズに合わせて調整
	const _Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
	Sprite_Enemy.prototype.setBattler = function( battler ) {
		_Sprite_Enemy_setBattler.apply( this, arguments );

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
