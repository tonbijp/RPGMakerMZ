//========================================
// TF_ScreenUtil.js
// Version :0.1.1.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020-2021
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:ja
 * @plugindesc 各種画面サイズ設定と画面固定
 * @author とんび@鳶嶋工房
 *
 * @param screenWidth
 * @desc ゲーム画面全体の幅(本体設定: 816ピクセル)
 * @type number
 * @default 1280
 *
 * @param screenHeight
 * @desc ゲーム画面全体の高さ(本体設定: 624ピクセル)
 * @type number
 * @default 720
 * 
 * @param boxWidth
 * @desc ウィンドウ表示部分の幅(本体設定: 816ピクセル)
 * @type number
 * @default 1080
 *
 * @param boxHeight
 * @desc ウィンドウ表示部分の高さ(本体設定: 624ピクセル)
 * @type number
 * @default 720
 *
 * @help
 * 多分、screenWidth・screenHeight と boxWidth・boxHeight の値が違っていると
 * レイアウトが崩れる箇所が[名前入力の処理]などに残ってると思います。
 *
 * 【タグ】
 * [マップ]のメモにタグを書き込むと、そのマップはスクロールせず固定となります。
 * <TF_fixedMap:0 0>
 *
 * 【注意点】
 * 　プロジェクトフォルダの package.json の width, height のサイズを揃えておくと
 * 起動時のウィンドウのパタパタした挙動がなくなります。
 * 　また「RPGアツマール」などのサイトで公開する場合、
 * サイト側に画面サイズ設定を揃えておく必要があります。
 * 
 * TODO :
 * 固定のON/OFFするコマンド
 * 
 * 利用規約 : MITライセンス
*/
( function() {
	'use strict';
	const PLUGIN_NAME = 'TF_ScreenUtil';
	const PARAM_TRUE = 'true';
	let _isMapFixed, _FixedX, _FixedY;

	/**
	 * パラメータを受け取る
	 */
	const TF = ( () => {
		const parameters = PluginManager.parameters( PLUGIN_NAME );
		return JSON.parse( JSON.stringify(
			parameters,
			( key, value ) => {
				try { return JSON.parse( value ); } catch( e ) { }
				return value;
			}
		) );
	} )();

	/**
	 * @param {RPG.MetaData} object メタタグを持ったJSON
	 * @param {String} tagName タグ名
	 * @returns {String} タグの引数部分
	 */
	function getMetaValue( object, tagName ) {
		return object.meta.hasOwnProperty( tagName ) ? object.meta[ tagName ] : undefined;
	}

	/**
	 * 文字列の座標を数値配列にして返す。
	 * @param {String} str スペース区切りの座標
	 * @returns {Array<Number>} 座標 x, y の配列
	 */
	function string2pos( str ) {
		const args = str.split( ' ' );
		if( args.length !== 2 ) throw PLUGIN_NAME + ': no parameter';
		const x = parseFloat( args[ 0 ] );
		const y = parseFloat( args[ 1 ] );
		if( isNaN( x ) || isNaN( y ) ) throw PLUGIN_NAME + ': NaN';
		return [ x, y ];
	}


	/*---- Game_Player ----*/
	const _Game_Player_updateScroll = Game_Player.prototype.updateScroll;
	Game_Player.prototype.updateScroll = function( lastScrolledX, lastScrolledY ) {
		if( _isMapFixed ) return;

		_Game_Player_updateScroll.apply( this, arguments );
	};


	/*---- Scene_Map ----*/
	const _Scene_Map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		_Scene_Map_start.call( this );


		// マップメモ固定座標の指定メタタグの処理
		// 例: <TF_fixedMap:0.84 0.2>
		const fixedMapArgs = getMetaValue( $dataMap, 'TF_fixedMap' );
		if( fixedMapArgs === undefined ) {
			_isMapFixed = false;
		} else {
			[ _FixedX, _FixedY ] = string2pos( fixedMapArgs );
			_isMapFixed = true;
		}
		if( _isMapFixed ) {
			$gameMap.setDisplayPos( _FixedX, _FixedY );
		}
	};

	/*==== 画面設定 ====*/
	/*--- SceneManager ---*/
	const _SceneManager_initialize = SceneManager.initialize;
	SceneManager.initialize = function() {
		this._screenWidth = TF.screenWidth;
		this._screenHeight = TF.screenHeight;
		this._boxWidth = TF.boxWidth;
		this._boxHeight = TF.boxHeight;
		_SceneManager_initialize.call( this );
	};

	/*--- WindowLayer ---*/
	/**
	 * コアスクリプトのバグ対応で、メソッドごと入れ替え
	 */
	WindowLayer.prototype._maskWindow = function( window, shift ) {
		this._windowMask._currentBounds = null;
		this._windowMask.boundsDirty = true;
		var rect = this._windowRect;
		rect.x = this.x + shift.x + window.x;
		rect.y = this.y + shift.y + window.y + window.height / 2 * ( 1 - window._openness / 255 );// this.y が this.x になっていた
		rect.width = window.width;
		rect.height = window.height * window._openness / 255;
	};

	/*--- Spriteset_Base ---*/
	/**
	 * コアスクリプトのバグ対応
	 */
	const _Spriteset_Base_createPictures = Spriteset_Base.prototype.createPictures;
	Spriteset_Base.prototype.createPictures = function() {
		_Spriteset_Base_createPictures.call( this );
		this._pictureContainer.setFrame( 0, 0, TF.screenWidth, TF.screenHeight );// 表示位置を原点に戻す
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
			if( bitmapName === '' ) {
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
