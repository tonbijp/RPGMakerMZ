//========================================
// TF_ScreenUtil.js
// Version :0.2.3.0
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
 * HalfMove.js の判定位置が下にずれるのを修正。
 * 固定のON/OFFするコマンド
 * 的画像位置の調整ON/OFFパラメータ
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


	/*--- Spriteset_Base ---*/
	// 左上に角を合わせる(振動などに対応する必要はある)
	const _Spriteset_Base_updatePosition = Spriteset_Base.prototype.updatePosition;
	Spriteset_Base.prototype.updatePosition = function() {
		_Spriteset_Base_updatePosition.call( this );
		this.x = 0;
		this.y = 0;

		this.x += Math.round( $gameScreen.shake() );
	};


	/*--- Spriteset_Battle ---*/
	const TYPE_STAGE = 1;	// ステージ(地面)背景
	const TYPE_SET = 2;			// セット(建物)背景
	const _Spriteset_Battle_createBattleback = Spriteset_Battle.prototype.createBattleback;
	Spriteset_Battle.prototype.createBattleback = function() {
		_Spriteset_Battle_createBattleback.call( this );
		// this._back1Sprite = new Sprite_Battleback( gameMap.battleback1Name(), TYPE_STAGE );
		// this._back2Sprite = new Sprite_Battleback( gameMap.battleback2Name(), TYPE_SET );
		// fitToScreen( this._back1Sprite );
		// fitToScreen( this._back2Sprite );
		// this._battleField.addChild( this._back1Sprite );
		// this._battleField.addChild( this._back2Sprite );
	};
	//Spriteset_Battle.prototype.updateBattleback = function() { };


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
	// const _Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
	// Sprite_Enemy.prototype.setBattler = function( battler ) {
	// 	_Sprite_Enemy_setBattler.call( this, battler );

	// 	if( !this._enemy._alteredScreenY ) {
	// 		this._homeY += Math.floor( ( Graphics.height - DEFAULT_SCREEN_HEIGHT ) / 2 );
	// 		this._enemy._screenY = this._homeY;
	// 		this._enemy._alteredScreenY = true;
	// 	}
	// 	if( $gameSystem.isSideView() || this._enemy._alteredScreenX ) return;

	// 	this._homeX += ( Graphics.width - DEFAULT_SCREEN_WIDTH ) / 2;
	// 	this._enemy._screenX = this._homeX;
	// 	this._enemy._alteredScreenX = true;
	// };
} )();
