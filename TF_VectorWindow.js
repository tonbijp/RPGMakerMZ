//========================================
// TF_VectorWindow.js
// Version :0.3.3.0
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
 * @plugindesc ウィンドウの表示をベクトル描画
 * @author とんび﹫鳶嶋工房(tonbi.jp)
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_VectorWindow.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * 
 * @param preset @text ウィンドウ設定
 * @desc ウィンドウ設定のプリセット(1が規定)
 * @type struct<WindowParam>[]
 * @default ["{\"name\":\"talk\",\"shape\":\"roundrect\",\"margin\":\"6\",\"borderWidth\":\"6\",\"borderColor\":\"#0ee\",\"decorSize\":\"20\",\"padding\":\"14\",\"bgColor\":\"[\\\"#0008\\\"]\"}","{\"name\":\"thought\",\"shape\":\"roundrect\",\"margin\":\"6\",\"borderWidth\":\"2\",\"borderColor\":\"#666\",\"decorSize\":\"100\",\"padding\":\"16\",\"bgColor\":\"[\\\"#000a\\\"]\"}","{\"name\":\"shout\",\"shape\":\"spike\",\"margin\":\"60\",\"borderWidth\":\"6\",\"borderColor\":\"#fff\",\"decorSize\":\"80\",\"padding\":\"14\",\"bgColor\":\"[\\\"#0006\\\"]\"}"]
 * 
 * @param dropShadow @text ウィンドウの影
 * @type boolean @default true
 * @on 影あり(規定値) @off 影なし
 * 
 * @param lineHeightRatio @text 行高さ
 * @desc 標準文字サイズを100%とした比率
 * @type number @default 140
 * @min 100
 *
 * @param messageFontSize @text メッセージフォントサイズ
 * @type number @default 30
 * @min 8
 *
 * @param nameFontSize @text 名前フォントサイズ
 * @type number @default 20
 * @min 8
 * 
 * @param nameWithFace @text 顔に名前表示
 * @type boolean @default true
 * @on 顔の下に表示(規定) @off 標準
 * 
 * @param messageLines @text メッセージに表示する行数
 * @type number @default 3
 * @min 1
 * 
 * @help
 * ウィンドウをPNG画像を使わずに描画する。
 * グラデーション、ドロップシャドウ、フキダシの指定が可能。
 *
 * 標準の[文章の表示]コマンドを使う前に
 * プラグインコマンド[ウィンドウの準備]を実行し、
 * ウィンドウタイプや顔グラフィックの左右位置を指定する。
 * 
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 * 
 * @================================================
 * @command setWindow @text ウィンドウの準備
 *
 * @arg windowType @text ウィンドウタイプ
 * @desc プラグインパラメータで設定した番号か名前
 * @type string @default thought
 *
 * @arg isFaceLeft @text 顔位置が左か
 * @type boolean @default true
 * @on 左(規定値) @off 右
 */
/*~struct~WindowParam:ja
 *
 * @param name @text ウィンドウ名
 * @type string
 * 
 * @param shape @text ウィンドウの形
 * @type select @default roundrect
 * @option 角丸(decorSize:0 で長方形) @value roundrect
 * @option 破裂型(叫び) @value spike
 * @option フキダシ(シッポつき角丸) @value balloon
 * @option 8角形 @value octagon
 * @option なし @value none
 * 
 * @param margin @text 枠外の間隔
 * @type number @default 8
 * @min 0
 * 
 * @param borderWidth @text 枠の幅
 * @type number @default 6
 * @min 0
 * 
 * @param borderColor @text 枠の色(CSS形式)
 * @type color @default #FFF
 *
 * @param decorSize @text 装飾の大きさ
 * @desc 角丸・角・トゲ
 * @type number @default 10
 * @min 0
 * 
 * @param padding @text 枠と文字の間隔
 * @type number @default 18
 * @min 0
 * 
 * @param bgColor @text 背景色(CSS形式)
 * @desc 複数指定すると縦のグラデーションとして描画
 * @type string[] @default ["#0086"]
 */

( () => {
	"use strict";
	// プラグインコマンド
	const COM_SET_WINDOW = "setWindow";

	// ウィンドウ描画関連
	const WINDOW_TYPE_DEFAULT = 0; // ウィンドウタイプの規定値
	const SHAPE_ROUNDRECT = "roundrect";
	const SHAPE_SPIKE = "spike";
	const SHAPE_OCTAGON = "octagon";
	const SHAPE_BALLOON = "balloon";
	const SHAPE_NONE = "none";
	const workBitmap = new Bitmap( 1, 1 );
	const workCtx = workBitmap.context;

	// $gameMessage.positionType()
	const POSITION_UP = 0;
	const POSITION_MIDDLE = 1;
	const POSITION_DOWN = 2;

	const POSITION_LEFT = "left";
	const POSITION_CENTER = "center";
	const POSITION_RIGHT = "right";

	const TYPE_NUMBER = "number";
	const TYPE_STRING = "string";

	/**
	 * パラメータを受け取る
	 */
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );

	// 全体設定
	const messageFontSize = pluginParams.messageFontSize;
	const lineHeightRatio = pluginParams.lineHeightRatio / 100;
	const messageLines = pluginParams.messageLines;
	const dropShadow = pluginParams.dropShadow;
	const nameFontSize = pluginParams.nameFontSize;
	const nameWithFace = pluginParams.nameWithFace;
	/**
	 * プラグインコマンドの登録
	 */
	//  [ウィンドウの準備]
	PluginManagerEx.registerCommand( document.currentScript, COM_SET_WINDOW, args => {
		const messageWindow = SceneManager._scene._messageWindow;
		if( !messageWindow ) return;
		const newWindowType = getWindowType( args.windowType );
		const faceAlign = args.isFaceLeft ? POSITION_LEFT : POSITION_RIGHT;
		if( newWindowType === -1 ||
			(
				newWindowType === messageWindow.TF_windowType
				&& faceAlign === messageWindow.TF_faceAlign
			)
		) return;
		setWindowParam( messageWindow, newWindowType, faceAlign );
	} );

	/**
	 * ウィンドウタイプ番号を返す。
	 * @param {String|Number} windowType ウィンドウタイプの番号か名前の文字列
	 * @returns {Number} ウィンドウタイプ番号
	 */
	function getWindowType( windowType ) {
		if( typeof windowType === TYPE_STRING ) {
			return pluginParams.preset.findIndex( ( e ) => e.name === windowType );	// 名前から数値を得る
		} else {
			return windowType - 1;
		}
	};

	/*--- Window ---*/
	const _Window_initialize = Window.prototype.initialize;
	Window.prototype.initialize = function() {
		this.TF_refleshWindow = true;
		this.TF_windowType = 0;
		this.TF_faceAlign = POSITION_LEFT;
		this.TF_shape = pluginParams.preset[ this.TF_windowType ].shape;

		_Window_initialize.apply( this, arguments );

		this._margin = pluginParams.preset[ this.TF_windowType ].margin;
	};


	// _colorTone を反映させるため、_refreshBack の方で描画。
	const _Window__refreshBack = Window.prototype._refreshBack;
	Window.prototype._refreshBack = function() {
		// SceneCustomMenu.js のスキンの設定があれば、通常の描画に渡す。
		if( this._data && this._data.WindowSkin ) return _Window__refreshBack.call( this );
		if( this.TF_shape === SHAPE_NONE ) return;

		const m = this.margin;
		const r = pluginParams.preset[ this.TF_windowType ].decorSize;

		this._backSprite.bitmap = new Bitmap( this.width, this.height );
		this._backSprite.setFrame( 0, 0, this.width, this.height );

		let path2d;
		switch( this.TF_shape ) {
			case SHAPE_ROUNDRECT: path2d = drawRoundrect( m, this.width, this.height, r ); break;
			case SHAPE_OCTAGON: path2d = drawOctagon( m, this.width, this.height, r ); break;
			case SHAPE_SPIKE: path2d = drawSpike( m, this.width, this.height, r, pluginParams.preset[ this.TF_windowType ].borderWidth ); break;
		}
		drawWindow( this, this._backSprite.bitmap.context, path2d );
	};

	//_frameSprite
	// _refreshFrameは機能しない。
	const _Window__refreshFrame = Window.prototype._refreshFrame;
	Window.prototype._refreshFrame = function() {
		// SceneCustomMenu.js のスキンの設定があれば、通常の描画に渡す。
		if( this._data && this._data.WindowSkin ) _Window__refreshFrame.call( this );
	};


	/*--- Window_Base ---*/
	Window_Base.prototype.lineHeight = () => Math.ceil( $dataSystem.advanced.fontSize * lineHeightRatio );
	Window_Base.prototype.textPadding = () => ( $dataSystem.advanced.fontSize * lineHeightRatio - $dataSystem.advanced.fontSize );


	/*--- Window_Message ---*/
	// フォントサイズが異なるので、オーバーライドして別計算
	// const _Window_Message_calcTextHeight = Window_Message.prototype.calcTextHeight;
	Window_Message.prototype.calcTextHeight = function( textState ) {
		const lineSpacing = this.lineHeight() - messageFontSize;
		const lastFontSize = this.contents.fontSize;
		const lines = textState.text.slice( textState.index ).split( "\n" );
		const textHeight = this.maxFontSizeInLine( lines[ 0 ] ) + lineSpacing;
		this.contents.fontSize = lastFontSize;
		return textHeight;
	};

	// 顔描画を新規のクラスに任せる
	// const _Window_Message_drawMessageFace = Window_Message.prototype.drawMessageFace;
	Window_Message.prototype.drawMessageFace = function() {
		const facePicture = SceneManager._scene.TF_facePicture;
		facePicture.moveOnMessageWindow( this );
		facePicture.drawFace( this._faceBitmap, $gameMessage.faceIndex() );
	};

	const TF_TAIL_HEIGHT = 40;// フキダシのシッポの高さ
	const TF_TAIL_POSISION = POSITION_LEFT;// フキダシのシッポの左右位置
	// $gameMessage.positionType() で上下位置は決まる
	Window_Message.prototype.numVisibleRows = () => messageLines;
	Window_Message.prototype.textPadding = () => ( messageFontSize * lineHeightRatio - messageFontSize );
	Window_Message.prototype.lineHeight = () => Math.ceil( messageFontSize * lineHeightRatio );

	Window_Message.prototype.resetFontSettings = function() {
		Window_Base.prototype.resetFontSettings.call( this );
		this.contents.fontSize = messageFontSize;
	};

	/**
	 * メッセージウィンドウに限りフキダシ表示を可能にする
	 */
	const _Window_Message_initialize = Window_Message.prototype.initialize;
	Window_Message.prototype.initialize = function() {
		this._positionType = 2;	// 先に位置を指定しておかないと、ウィンドウ生成時に形がおかしくなる
		_Window_Message_initialize.apply( this, arguments );
	};

	// 表示前に COM_SET_WINDOW による変更があれば適用
	const _Window_Message_startMessage = Window_Message.prototype.startMessage;
	Window_Message.prototype.startMessage = function() {
		if( this.TF_refleshWindow ) {
			this.TF_refleshWindow = false;
			this._refreshAllParts();
		}
		_Window_Message_startMessage.call( this );
	};

	// 閉じるときに顔を非表示に
	const _Window_Message_newPage = Window_Message.prototype.newPage;
	Window_Message.prototype.newPage = function() {
		_Window_Message_newPage.apply( this, arguments );
		closeFacePicture();
	};
	const _Window_Message_close = Window_Message.prototype.close;
	Window_Message.prototype.close = function() {
		_Window_Message_close.call( this );
		closeFacePicture();
	};
	function closeFacePicture() {
		const facePicture = SceneManager._scene.TF_facePicture;
		facePicture.visible = false;
		facePicture.bitmap.clear();
	}

	// 終了時にウィンドウタイプを規定値(0)、顔を左に戻す。
	const _Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
	Window_Message.prototype.terminateMessage = function() {
		_Window_Message_terminateMessage.call( this );
		setWindowParam( this, WINDOW_TYPE_DEFAULT, POSITION_LEFT );
	};


	// rtl属性を利用して顔の左右の配置位置に対応
	const _Window_Message_newLineX = Window_Message.prototype.newLineX;
	Window_Message.prototype.newLineX = function( textState ) {
		if( this.TF_faceAlign === POSITION_LEFT ) {
			return _Window_Message_newLineX.apply( this, arguments );
		} else {
			return 4;
		}
	};

	/**
	 * フキダシ型(balloon)のみ、Window_Message に設定できる。
	 */
	Window_Message.prototype._refreshBack = function() {
		if( this.TF_shape !== SHAPE_BALLOON ) {
			Window.prototype._refreshBack.call( this );
			return;
		}

		const m = this.margin;
		const r = pluginParams.preset[ this.TF_windowType ].decorSize;
		const bitmap = new Bitmap( this._width, this._height + 4 );// +4 はdrop shadow用
		this._frameSprite.bitmap = bitmap;
		this._frameSprite.setFrame( 0, 0, this._width, this._height + 12 );
		const path2d = drawBalloon( m, this._width, this._height, r, this._positionType );
		drawWindow( this, bitmap.context, path2d );
	};

	const _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
	Window_Message.prototype.updatePlacement = function() {
		const isChange = ( this._positionType !== $gameMessage.positionType() );
		this._positionType = $gameMessage.positionType();

		_Window_Message_updatePlacement.call( this );

		if( !isChange ) return;
		this._refreshAllParts();
		if( this.TF_shape === SHAPE_BALLOON && this._positionType === POSITION_UP ) {
			this._pauseSignSprite.y = this._height - TF_TAIL_HEIGHT;
		}
	};

	/**
	 * コンテンツ位置を、尻尾の高さに合わせて調整。
	 */
	Window_Message.prototype._refreshContents = function() {
		if( this.TF_shape === SHAPE_BALLOON && this._positionType === POSITION_DOWN ) {
			this._contentsSprite.move( this.padding, this.padding + TF_TAIL_HEIGHT );
		} else {
			this._contentsSprite.move( this.padding, this.padding );
		}
	};


	/*--- 関数 ---*/
	/**
	 * ウィンドウの数値設定。
	 * @param {Window_Message} targetWindow 対象ウィンドウ
	 * @param {Number} windowType プリセットのウィンドウタイプ
	 * @param {Number} faceAlign 顔表示位置
	 */
	function setWindowParam( targetWindow, windowType, faceAlign ) {
		targetWindow.TF_faceAlign = faceAlign;
		targetWindow.TF_refleshWindow = true;
		targetWindow.TF_windowType = windowType;
		const preset = pluginParams.preset[ windowType ];
		targetWindow.TF_shape = preset.shape;
		// RPGツクールMVの padding は CSS と違い「box の一番外から contents までの距離」なので変換
		targetWindow._height = targetWindow.innerHeight + ( preset.padding + preset.margin ) * 2;
		targetWindow._padding = preset.padding + preset.margin;
		targetWindow._margin = preset.margin;
	}

	/**
	 * 配列からCSS color文字列を返す。
	 * @param {Array} colorList [ r, g, b, a ] の配列
	 * @returns {String} 'rgb(r,g,b)' か 'rgba(r,g,b,a)'の文字列
	 */
	function array2CssColor( colorList ) {
		if( colorList.length === 3 ) {
			return Utils.rgbToCssColor( ...colorList );
		} else {
			// Utils.rgbToCssColor( r, g, b ) は a を扱ってくれないので。
			return `rgba(${colorList[ 0 ]},${colorList[ 1 ]},${colorList[ 2 ]},${colorList[ 3 ] / 255})`;
		}
	}

	function cssColor2Array( CssColor ) {
		workCtx.clearRect( 0, 0, 1, 1 );
		workCtx.fillStyle = CssColor;
		workCtx.fillRect( 0, 0, 1, 1 );
		return workCtx.getImageData( 0, 0, 1, 1 ).data;
	}

	// ウィンドウ描画
	function drawWindow( targetWindow, ctx, path2d ) {
		let bgColor = pluginParams.preset[ targetWindow.TF_windowType ].bgColor;

		if( bgColor.length === 1 ) {
			ctx.fillStyle = tintColor( bgColor[ 0 ], targetWindow._colorTone );
		} else {
			const grad = ctx.createLinearGradient( 0, 0, 0, targetWindow._height );
			const l = bgColor.length;
			const interval = 1.0 / ( l - 1 );
			bgColor.forEach( ( e, i ) => {
				grad.addColorStop( i * interval, tintColor( e, targetWindow._colorTone ) );
			} );
			ctx.fillStyle = grad;
		}

		if( dropShadow ) setShadowParam( ctx );
		ctx.fill( path2d );// 'nonzero'  'evenodd'

		if( !dropShadow ) setShadowParam( ctx );
		setBorderParam( ctx, targetWindow.TF_windowType );
		ctx.stroke( path2d );
	}

	/**
	 * 
	 * @param {*} bgColor 
	 * @param {*} colorTone 
	 */
	function tintColor( bgColor, colorTone ) {
		const colorArray = cssColor2Array( bgColor );
		colorArray[ 0 ] += colorTone[ 0 ];
		colorArray[ 1 ] += colorTone[ 1 ];
		colorArray[ 2 ] += colorTone[ 2 ];

		return array2CssColor( colorArray );
	}
	/**
	 * ドロップシャドウの設定
	 * @param {*} ctx 
	 */
	function setShadowParam( ctx ) {
		ctx.shadowBlur = 4;
		ctx.shadowColor = 'black';
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 6;
	}

	/**
	 * 枠の設定をする
	 * @param {*} ctx 
	 */
	function setBorderParam( ctx, type ) {
		if( !pluginParams.preset[ type ].borderWidth ) return;

		ctx.lineWidth = pluginParams.preset[ type ].borderWidth;
		ctx.strokeStyle = pluginParams.preset[ type ].borderColor;
		ctx.shadowBlur = 3;
		ctx.shadowOffsetY = 0;
	}

	/**
	 * フキダシ(角丸の矩形シッポ付き)を描く
	 * @param {CanvasRenderingContext2D} ctx コンテキスト
	 * @param {Number} m 枠外のマージン
	 * @param {Number} w ウィンドウ描画領域の幅
	 * @param {Number} h ウィンドウ描画領域の高さ
	 * @param {Number} r 角丸の半径
	 */
	function drawBalloon( m, w, h, r, vPos ) {
		const hPos = TF_TAIL_POSISION;
		const dy = ( vPos === POSITION_UP ) ? TF_TAIL_HEIGHT : 0;	// 上位置表示の場合の下のシッポ高さ
		const uy = ( vPos === POSITION_DOWN ) ? TF_TAIL_HEIGHT : 0;	// 下位置表示の場合の上のシッポ高さ
		const iRect = { l: m, r: w - m, u: m + uy, d: h - m - dy };// 内側座標
		const cRect = { l: m + r, r: w - ( m + r ), u: m + r + uy, d: h - ( m + r ) - dy };// 角を除く内側座標

		const path = new Path2D();
		path.moveTo( cRect.l, iRect.u );
		if( vPos === POSITION_DOWN ) {
			if( hPos === POSITION_LEFT ) {
				// 左上にシッポ
				path.lineTo( cRect.l + 250, iRect.u );
				path.lineTo( cRect.l + 230, iRect.u - TF_TAIL_HEIGHT + m );
				path.lineTo( cRect.l + 270, iRect.u );
			} else if( hPos === POSITION_RIGHT ) {
				// 右上にシッポ
				path.lineTo( cRect.r - 270, iRect.u );
				path.lineTo( cRect.r - 230, iRect.u - TF_TAIL_HEIGHT + m );
				path.lineTo( cRect.r - 250, iRect.u );
			}
		}
		path.arcTo( iRect.r, iRect.u, iRect.r, cRect.u, r );// ─╮
		path.arcTo( iRect.r, iRect.d, cRect.r, iRect.d, r );//│ ╯
		if( vPos === POSITION_UP ) {
			if( hPos === POSITION_LEFT ) {
				// 左下にシッポ
				path.lineTo( cRect.l + 270, iRect.d );
				path.lineTo( cRect.l + 230, iRect.d + TF_TAIL_HEIGHT + m );
				path.lineTo( cRect.l + 250, iRect.d );
			} else if( hPos === POSITION_RIGHT ) {
				// 右下にシッポ
				path.lineTo( cRect.r - 250, iRect.d );
				path.lineTo( cRect.r - 230, iRect.d + TF_TAIL_HEIGHT - m );
				path.lineTo( cRect.r - 270, iRect.d );
			}
		}
		path.arcTo( iRect.l, iRect.d, iRect.l, cRect.d, r );//╰─
		path.arcTo( iRect.l, iRect.u, cRect.l, iRect.u, r );// │╭
		path.closePath();
		return path;
	}

	/**
	 * 角丸の矩形を描く
	 * @param {CanvasRenderingContext2D} ctx コンテキスト
	 * @param {Number} m 枠外のマージン
	 * @param {Number} w ウィンドウ描画領域の幅
	 * @param {Number} h ウィンドウ描画領域の高さ
	 * @param {Number} r 角丸の半径
	 */
	function drawRoundrect( m, w, h, r ) {
		const iRect = { l: m, r: w - m, u: m, d: h - m };// 内側座標
		const cRect = { l: m + r, r: w - ( m + r ), u: m + r, d: h - ( m + r ) };// 角を除く内側座標

		const path = new Path2D();
		path.moveTo( cRect.l, iRect.u );
		path.arcTo( iRect.r, iRect.u, iRect.r, cRect.u, r );// ─╮
		path.arcTo( iRect.r, iRect.d, cRect.r, iRect.d, r );//│ ╯
		path.arcTo( iRect.l, iRect.d, iRect.l, cRect.d, r );//╰─
		path.arcTo( iRect.l, iRect.u, cRect.l, iRect.u, r );// │╭
		path.closePath();
		return path;
	}

	/**
	 * 8角形を描く
	 * @param {CanvasRenderingContext2D} ctx コンテキスト
	 * @param {Number} m 枠外のマージン
	 * @param {Number} w ウィンドウ描画領域の幅
	 * @param {Number} h ウィンドウ描画領域の高さ
	 * @param {Number} r  √r*r = 角の斜め線の長さ
	 */
	function drawOctagon( m, w, h, r ) {
		const iRect = { l: m, r: w - m, u: m, d: h - m };// 内側座標
		const cRect = { l: m + r, r: w - ( m + r ), u: m + r, d: h - ( m + r ) };// 角を除く内側座標

		const path = new Path2D();
		path.moveTo( cRect.l, iRect.u );
		path.lineTo( cRect.r, iRect.u );//─
		path.lineTo( iRect.r, cRect.u );// ╲
		path.lineTo( iRect.r, cRect.d );// │ 
		path.lineTo( cRect.r, iRect.d );// ╱
		path.lineTo( cRect.l, iRect.d );// ─
		path.lineTo( iRect.l, cRect.d );// ╲
		path.lineTo( iRect.l, cRect.u );// │
		path.closePath();
		return path;
	}

	/**
	 * トゲ型装飾枠を描く
	 * @param {CanvasRenderingContext2D} ctx コンテキスト
	 * @param {Number} m トゲの長さ
	 * @param {Number} w ウィンドウ描画領域の幅
	 * @param {Number} h ウィンドウ描画領域の高さ
	 * @param {Number} r トゲの(おおよその)横幅
	 * @param {Number} bw 線の幅
	 */
	function drawSpike( m, w, h, r, bw ) {

		const iRect = { l: m, r: w - m, u: m, d: h - m };// 内側座標
		const oRect = { l: bw, r: w - bw, u: bw, d: h - bw };// 外側座標

		const rndDiff = () => ( Math.random() - 0.5 ) * r * 0.4; // 中央値からの差、辺に使う
		const rndPosi = () => Math.random() * m * 0.6; // 正の値、角に使う

		const path = new Path2D();
		// path.beginPath();
		path.moveTo( oRect.l + rndPosi(), oRect.u + rndPosi() );//┌
		const hNum = Math.floor( w / ( r * 1.2 ) );
		const hUnit = w / hNum;

		for( let i = 1; i < hNum - 2; i++ ) {
			path.lineTo( iRect.l + i * hUnit + rndDiff(), iRect.u );
			path.lineTo( iRect.l + ( i + 0.5 ) * hUnit + rndDiff(), oRect.u );// 人
		}
		path.lineTo( iRect.r - hUnit / 2 + rndDiff(), iRect.u );

		path.lineTo( oRect.r - rndPosi(), oRect.u + rndPosi() );//┐

		path.lineTo( iRect.r, ( h + rndDiff() ) / 2 - r / 3 );
		path.lineTo( iRect.r + m / 2, ( h + rndDiff() ) / 2 );// >
		path.lineTo( iRect.r, ( h + rndDiff() ) / 2 + r / 3 );

		path.lineTo( oRect.r - rndPosi(), oRect.d - rndPosi() );// ┘

		for( let i = 1; i < hNum - 2; i++ ) {
			path.lineTo( iRect.r - i * hUnit + rndDiff(), iRect.d );
			path.lineTo( iRect.r - ( i + 0.5 ) * hUnit + rndDiff(), oRect.d );// Ｙ
		}
		path.lineTo( iRect.l + hUnit / 2 + rndDiff(), iRect.d );

		path.lineTo( oRect.l + rndPosi(), oRect.d - rndPosi() );//└

		// <
		path.lineTo( iRect.l, ( h + rndDiff() ) / 2 + r / 3 );
		path.lineTo( iRect.l - m / 2, ( h + rndDiff() ) / 2 );
		path.lineTo( iRect.l, ( h + rndDiff() ) / 2 - r / 3 );

		path.closePath();
		return path;
	}


	/*-------------------- 顔表示関連 -----------------------*/


	/*--- Window_NameBox ---*/
	// const _Window_NameBox_setName = Window_NameBox.prototype.setName;
	// Window_NameBox.prototype.setName = function( name ) {
	// 	name = `\x1bFS[${nameFontSize}]` + name;
	// 	_Window_NameBox_setName.apply( this, arguments );
	// };

	const _Window_NameBox_initialize = Window_NameBox.prototype.initialize;
	Window_NameBox.prototype.initialize = function() {
		_Window_NameBox_initialize.call( this );
		this.contents.fontSize = nameFontSize;
		this.textWidthEx = 0;
		if( nameWithFace ) {
			this._isWindow = false;
		};
	};

	const _Window_NameBox_updatePlacement = Window_NameBox.prototype.updatePlacement;
	Window_NameBox.prototype.updatePlacement = function() {
		_Window_NameBox_updatePlacement.call( this );
		if( nameWithFace ) {
			// const facePicture = SceneManager._scene.TF_facePicture;
			this.y = this._messageWindow.y + this._messageWindow.height - NAME_HEIGHT - this.padding;
		};
	};

	Window_NameBox.prototype._refreshAllParts = function() {
		if( nameWithFace ) return;
		Window_Base.prototype._refreshAllParts();
	};

	const _Window_NameBox_windowWidth = Window_NameBox.prototype.windowWidth;
	Window_NameBox.prototype.windowWidth = function() {
		if( nameWithFace ) {
			if( this._name ) {
				this.textWidthEx = this.textSizeEx( this._name ).width;
				const padding = this.padding + this.itemPadding();
				return ImageManager.faceWidth + padding * 2;
			} else {
				return 0;
			}
		} else {
			return _Window_NameBox_windowWidth.call( this );
		}
	};

	// TODO 名前を指定サイズで中央表示
	const _Window_NameBox_refresh = Window_NameBox.prototype.refresh;
	Window_NameBox.prototype.refresh = function() {
		if( !nameWithFace ) return _Window_NameBox_refresh.call( this );

		// const lastFontSize = this.contents.fontSize;
		this.contents.fontSize = nameFontSize;
		const rect = this.baseTextRect();
		this.contents.clear();
		const x = rect.x + Math.floor( ( rect.width - this.textWidthEx ) / 2 );
		this.drawTextEx( this._name, x, rect.y, rect.width );
		// this.contents.fontSize = lastFontSize;
	};

	/*--- Scene_Message ---*/
	// 行数をウィンドウに反映
	// TODO 適切な高さを得る
	const _Scene_Message_messageWindowRect = Scene_Message.prototype.messageWindowRect;
	Scene_Message.prototype.messageWindowRect = function() {
		const rect = _Scene_Message_messageWindowRect.call( this );
		// rect.height = Window_Message.prototype.fittingHeight( messageLines ) + 8;

		const lineHeight = Math.ceil( messageFontSize * lineHeightRatio );
		rect.height = lineHeight * messageLines + $gameSystem.windowPadding() * 2 + 8;
		return rect;
	};

	// 顔表示スプライトを「シーンに」追加
	const _Scene_Message_createAllWindows = Scene_Message.prototype.createAllWindows;
	Scene_Message.prototype.createAllWindows = function() {
		_Scene_Message_createAllWindows.call( this );

		this.TF_facePicture = new Sprite_FacePicture( new Bitmap( 0, 0 ) );
		this.addChild( this.TF_facePicture );
	};

	/*--- Sprite_FacePicture ---*/
	// 顔画像ピクチャ
	const IMG_MARGIN = 4;
	const NAME_HEIGHT = 56;
	class Sprite_FacePicture extends Sprite {
		initialize( bitmap ) {
			super.initialize( bitmap );
			this.bitmap.resize( ImageManager.faceWidth, ImageManager.faceHeight );
		}
		moveOnMessageWindow( targetWindow ) {
			const dx = Math.floor( ( Graphics.width - Graphics.boxWidth ) / 2 );
			const dy = Math.floor( ( Graphics.height - Graphics.boxHeight ) / 2 );
			this.x = dx + targetWindow.x + targetWindow.padding + IMG_MARGIN;
			this.y = dy + targetWindow.y + targetWindow.height - ImageManager.faceHeight - NAME_HEIGHT;
		}
		drawFace( bitmap, faceIndex ) {
			const sw = ImageManager.faceWidth;
			const sh = ImageManager.faceHeight;
			const sx = ( faceIndex % 4 ) * sw;
			const sy = Math.floor( faceIndex / 4 ) * sh;
			this.bitmap.blt( bitmap, sx, sy, sw, sh, 0, 0 );
			this.setFrame( 0, 0, sw, sh );
			this.visible = true;
		};
	}

} )();