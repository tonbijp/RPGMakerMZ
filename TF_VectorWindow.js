//========================================
// TF_VectorWindow.js
// Version :0.5.0.0
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
 * @default ["{\"name\":\"UI\",\"shape\":\"roundrect\",\"margin\":\"3\",\"borderWidth\":\"6\",\"borderColor\":\"#fff\",\"decorSize\":\"20\",\"padding\":\"12\",\"bgColor\":\"[\\\"#0008\\\"]\"}","{\"name\":\"talk\",\"shape\":\"roundrect\",\"margin\":\"3\",\"borderWidth\":\"6\",\"borderColor\":\"#0ee\",\"decorSize\":\"20\",\"padding\":\"14\",\"bgColor\":\"[\\\"#0008\\\",\\\"#000C\\\"]\"}","{\"name\":\"thought\",\"shape\":\"roundrect\",\"margin\":\"6\",\"borderWidth\":\"2\",\"borderColor\":\"#666\",\"decorSize\":\"100\",\"padding\":\"16\",\"bgColor\":\"[\\\"#000a\\\"]\"}","{\"name\":\"shout\",\"shape\":\"spike\",\"margin\":\"60\",\"borderWidth\":\"6\",\"borderColor\":\"#fff\",\"decorSize\":\"80\",\"padding\":\"74\",\"bgColor\":\"[\\\"#0006\\\"]\"}"]
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
 * @param messageView @text メッセージウィンドウ表示範囲
 * @desc 画面全体に対する x,y,幅,高さ の順の数値(ピクセル数)
 * @type string @default 4,4,808,616
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
 * 規定値では talk, thought, shout がある
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
 * @param margin @text 端から枠までの間隔
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
 * @param padding @text 端から内容までの間隔
 * @type number @default 18
 * @min 0
 * 
 * @param bgColor @text 背景色(CSS形式)
 * @desc 複数指定すると縦のグラデーションとして描画
 * @type string[] @default ["#0086"]
 */

( () => {
	"use strict";
	const PLUGIN_NAME = "TF_VectorWindow";

	// プラグインコマンド
	const COM_SET_WINDOW = "setWindow";

	// ウィンドウ描画関連
	const ERROR_NUMBER = -1;
	const WINDOW_TYPE_DEFAULT = 0; // UIタイプの規定値
	const WINDOW_TYPE_TALK = 1; // [文章の表示]ウィンドウタイプの規定値
	const SHAPE_ROUNDRECT = "roundrect";
	const SHAPE_SPIKE = "spike";
	const SHAPE_OCTAGON = "octagon";
	const SHAPE_BALLOON = "balloon";
	const SHAPE_NONE = "none";
	const workBitmap = new Bitmap( 1, 1 );
	const workCtx = workBitmap.context;
	const BOX_MARGIN = 4;	// boxWidth,boxHeight の外にある余白

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

	//TODO:メッセージウィンドウの表示範囲を設定できるようにする
	let messageView;

	/*--- Scene_Boot ---*/
	// 全体での大きさを_windowLayer からのサイズに変換
	// Graphics のサイズがここで決まるので、その直後に処理
	const _Scene_Boot_start = Scene_Boot.prototype.start;
	Scene_Boot.prototype.start = function() {
		_Scene_Boot_start.call( this );
		messageView = ( rect => {
			rect.x = rect.x - Math.floor( ( Graphics.width - Graphics.boxWidth ) / 2 ) - BOX_MARGIN;
			rect.y = rect.y - Math.floor( ( Graphics.height - Graphics.boxHeight ) / 2 ) - BOX_MARGIN;
			return rect;
		} )( stringToRectangle( pluginParams.messageView ) );
	};

	/**
	 * プラグインコマンドの登録
	 */
	//  [ウィンドウの準備]
	PluginManagerEx.registerCommand( document.currentScript, COM_SET_WINDOW, args => {
		const messageWindow = SceneManager._scene._messageWindow;
		if( !messageWindow ) return;
		const newWindowType = getWindowType( args.windowType );
		const faceAlign = args.isFaceLeft ? POSITION_LEFT : POSITION_RIGHT;
		if( newWindowType === ERROR_NUMBER ) {
			throw new Error( `"${args.windowType}" is wrong window type.` );
		}
		if(
			newWindowType === messageWindow.TF_windowType
			&& faceAlign === messageWindow.TF_faceAlign
		) return;
		setWindowParam( messageWindow, newWindowType );
		messageWindow.TF_faceAlign = faceAlign;
		setMessageParam( messageWindow );
	} );

	/**
	 * ウィンドウタイプ番号を返す。
	 * @param {String|Number} windowType ウィンドウタイプの番号か名前の文字列
	 * @returns {Number} ウィンドウタイプ番号
	 */
	function getWindowType( windowType ) {
		if( typeof windowType === TYPE_STRING ) {
			return pluginParams.preset.findIndex( ( e ) => e.name === windowType );	// 名前から数値を得る
		} else if( 0 < windowType && windowType <= pluginParams.preset.length ) {
			return windowType - 1;
		} else {
			return ERROR_NUMBER;
		}
	};

	/*--- Window ---*/
	const _Window_initialize = Window.prototype.initialize;
	Window.prototype.initialize = function() {
		_Window_initialize.apply( this, arguments );

		// SceneCustomMenu.js のスキンの設定があれば、TF_VectorWindowの設定はしない。
		if( this._data && this._data.WindowSkin ) return;
		// TF_windowTypeが設定されていないなら、規定値を設定
		if( this.TF_windowType ) {
			setWindowParam( this, this.TF_windowType );
		} else {
			setWindowParam( this, WINDOW_TYPE_DEFAULT );
		}
	};


	// _colorTone を反映させるため、_refreshBack の方で描画。
	const _Window__refreshBack = Window.prototype._refreshBack;
	Window.prototype._refreshBack = function() {
		// SceneCustomMenu.js のスキンの設定があれば、通常の描画に渡す。
		if( this._data && this._data.WindowSkin ) return _Window__refreshBack.call( this );
		if( this.TF_shape === SHAPE_NONE ) return;

		const m = this.margin;
		const r = pluginParams.preset[ this.TF_windowType ].decorSize;
		const w = this.width;
		const h = this.height;

		this._backSprite.bitmap = new Bitmap( w, h );
		this._backSprite.setFrame( 0, 0, w, h );

		let path2d;
		switch( this.TF_shape ) {
			case SHAPE_ROUNDRECT: path2d = drawRoundrect( m, w, h, r ); break;
			case SHAPE_OCTAGON: path2d = drawOctagon( m, w, h, r ); break;
			case SHAPE_SPIKE: path2d = drawSpike( m, w, h, r, pluginParams.preset[ this.TF_windowType ].borderWidth ); break;
		}
		drawWindow( this, this._backSprite.bitmap.context, path2d );
	};

	// _refreshBack でウィンドウを描画しているので _refreshFrame は機能させない
	const _Window__refreshFrame = Window.prototype._refreshFrame;
	Window.prototype._refreshFrame = function() {
		// SceneCustomMenu.js のスキンの設定があれば通常の描画に渡す。
		if( this._data && this._data.WindowSkin ) {
			_Window__refreshFrame.call( this );
		}
	};


	/*--- Window_Base ---*/
	Window_Base.prototype.lineHeight = () => Math.ceil( $dataSystem.advanced.fontSize * lineHeightRatio );
	Window_Base.prototype.textPadding = function() {
		return this.lineHeight() - $dataSystem.advanced.fontSize;
	};

	// なぜかここで padding を上書きして設定した値が戻っているので無視
	const _Window_Base_updatePadding = Window_Base.prototype.updatePadding;
	Window_Base.prototype.updatePadding = function() {
		if( this._data && this._data.WindowSkin ) {
			_Window_Base_updatePadding.call( this );
		}
	};

	// なぜかここで backOpacity を若干薄く(192)に設定しているので無視
	const _Window_Base_updateBackOpacity = Window_Base.prototype.updateBackOpacity;
	Window_Base.prototype.updateBackOpacity = function() {
		if( this._data && this._data.WindowSkin ) {
			_Window_Base_updateBackOpacity.call( this );
		}
	};

	/*--- Window_Message ---*/
	const _Window_Message_initialize = Window_Message.prototype.initialize;
	Window_Message.prototype.initialize = function() {
		this.TF_windowType = WINDOW_TYPE_TALK;
		// this._positionType = POSITION_DOWN;	// 先に位置を指定しておかないと、ウィンドウ生成時に形がおかしくなる
		_Window_Message_initialize.apply( this, arguments );

		this.TF_faceAlign = POSITION_LEFT;
		setMessageParam( this );
	};

	const _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
	Window_Message.prototype.updatePlacement = function() {
		const goldWindow = this._goldWindow;
		this._positionType = $gameMessage.positionType();
		this.y = messageView.y + ( this._positionType * ( messageView.height - this.height ) ) / 2;
		if( goldWindow ) {
			goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - goldWindow.height;
		}
	};

	// フォントサイズが異なるので、オーバーライドして別計算
	// const _Window_Message_calcTextHeight = Window_Message.prototype.calcTextHeight;
	Window_Message.prototype.calcTextHeight = function( textState ) {
		const textPadding = this.textPadding();
		const lines = textState.text.slice( textState.index ).split( "\n" );
		const lastFontSize = this.contents.fontSize;
		const textHeight = this.maxFontSizeInLine( lines[ 0 ] ) + textPadding;
		this.contents.fontSize = lastFontSize;
		return textHeight;
	};

	/**
	 * メッセージウィンドウに限りフキダシ表示を可能にする
	 */
	const TF_TAIL_HEIGHT = 40;// フキダシのシッポの高さ
	const TF_TAIL_POSISION = POSITION_LEFT;// フキダシのシッポの左右位置
	// $gameMessage.positionType() で上下位置は決まる
	Window_Message.prototype.numVisibleRows = () => messageLines;
	Window_Message.prototype.textPadding = function() {
		return this.lineHeight() - messageFontSize;
	};
	Window_Message.prototype.lineHeight = () => Math.ceil( messageFontSize * lineHeightRatio );

	Window_Message.prototype.resetFontSettings = function() {
		Window_Base.prototype.resetFontSettings.call( this );
		this.contents.fontSize = messageFontSize;
	};

	// 顔描画を新規のクラスに任せる
	// const _Window_Message_drawMessageFace = Window_Message.prototype.drawMessageFace;
	Window_Message.prototype.drawMessageFace = function() {
		const facePicture = SceneManager._scene.TF_facePicture;
		facePicture.moveOnMessageWindow( this );
		facePicture.drawFace( this._faceBitmap, $gameMessage.faceIndex() );
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
		setWindowParam( this, WINDOW_TYPE_TALK );
		this.TF_faceAlign = POSITION_LEFT;
		setMessageParam( this );
	};


	// TODO:顔位置の細かい座標はプロパティで指定可能にする。
	// rtl にも対応したい…が
	const _Window_Message_newLineX = Window_Message.prototype.newLineX;
	Window_Message.prototype.newLineX = function( textState ) {
		const faceExists = $gameMessage.faceName() !== "";
		if( this.TF_faceAlign === POSITION_LEFT && faceExists ) {
			const faceWidth = ImageManager.faceWidth;
			return faceWidth + this.textPadding() * 2;
		} else {
			return this.textPadding();
		}
	};

	/**
	 * フキダシ型(balloon)のみ、Window_Message に設定できる。
	 */
	Window_Message.prototype._refreshBack = function() {
		if( this.TF_shape !== SHAPE_BALLOON ) {
			Window_Base.prototype._refreshBack.call( this );
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
	 * @param {Window} tw 対象ウィンドウ
	 * @param {Number} windowType プリセットのウィンドウタイプ
	 */
	function setWindowParam( tw, windowType ) {
		tw.TF_windowType = windowType;
		const preset = pluginParams.preset[ windowType ];
		tw.TF_shape = preset.shape;
		tw._padding = preset.padding;
		tw._margin = preset.margin;
	}
	/**
	 * ウィンドウの数値設定。
	 * @param {Window_Message} tw 対象ウィンドウ
	 * @param {Number} faceAlign 顔表示位置
	 */
	function setMessageParam( tw ) {
		tw.x = messageView.x;
		tw.width = messageView.width;
		tw._height = tw.lineHeight() * messageLines + tw._padding * 2;
		tw._clientArea.move( tw._padding, tw._padding );
		tw._refreshAllParts();
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

	/**
	 * ウィンドウ描画
	 * @param {Window_Message} tw 対象ウィンドウ
	 * @param {CanvasRenderingContext2D} ctx コンテクスト
	 * @param {Path2D} path2d 描画するパス
	 */
	function drawWindow( tw, ctx, path2d ) {
		let bgColor = pluginParams.preset[ tw.TF_windowType ].bgColor;

		if( bgColor.length === 1 ) {
			ctx.fillStyle = tintColor( bgColor[ 0 ], tw._colorTone );
		} else {
			const grad = ctx.createLinearGradient( 0, 0, 0, tw._height );
			const l = bgColor.length;
			const interval = 1.0 / ( l - 1 );
			bgColor.forEach( ( e, i ) => {
				grad.addColorStop( i * interval, tintColor( e, tw._colorTone ) );
			} );
			ctx.fillStyle = grad;
		}

		// if( dropShadow ) setShadowParam( ctx );
		ctx.fill( path2d );// 'nonzero'  'evenodd'

		//if( !dropShadow ) setShadowParam( ctx );
		setBorderParam( ctx, tw.TF_windowType );
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
	 * @returns {Path2D} 生成したパス
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

	/*--- ユーティリティ関数 ---*/
	/**
	 * "2, 43" 形式の文字列を配列 [2,43] に変換して返す。
	 * @param {String} rectString "x, y" 形式の文字列
	 * @returns {Array} [x,y]形式の配列
	 */
	function stringToRectangle( rectString ) {
		const args = rectString.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)[^-.0-9]+([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${rectString}"`;
		return new Rectangle( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ), parseFloat( args[ 3 ] ), parseFloat( args[ 4 ] ) );
	}


	/*-------------------- 顔表示関連 -----------------------*/


	/*--- Window_NameBox ---*/
	const NAME_HEIGHT = 40;//TODO:プロパティで設定できるように
	const _Window_NameBox_initialize = Window_NameBox.prototype.initialize;
	Window_NameBox.prototype.initialize = function() {
		_Window_NameBox_initialize.apply( this, arguments );
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
			const tw = this._messageWindow;
			this.y = tw.y + tw.height - tw.padding - NAME_HEIGHT;
		};
	};

	Window_NameBox.prototype._refreshAllParts = function() {
		if( nameWithFace ) return;
		Window_Base.prototype._refreshAllParts();
	};


	Window_NameBox.prototype.resetFontSettings = function() {
		this.contents.fontFace = $gameSystem.mainFontFace();
		this.contents.fontSize = nameFontSize;
		this.resetTextColor();
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

	const _Window_NameBox_refresh = Window_NameBox.prototype.refresh;
	Window_NameBox.prototype.refresh = function() {
		if( !nameWithFace ) return _Window_NameBox_refresh.call( this );

		const rect = this.baseTextRect();
		this.contents.clear();
		const x = rect.x + Math.floor( ( rect.width - this.textWidthEx ) / 2 );//センタリング
		this.drawTextEx( this._name, x, rect.y, rect.width );
	};

	/*--- Scene_Message ---*/

	// 顔表示スプライトを「シーンに」追加
	const _Scene_Message_createAllWindows = Scene_Message.prototype.createAllWindows;
	Scene_Message.prototype.createAllWindows = function() {
		_Scene_Message_createAllWindows.call( this );

		this.TF_facePicture = new Sprite_FacePicture( new Bitmap( 0, 0 ) );
		this.addChild( this.TF_facePicture );
	};

	/*--- Sprite_FacePicture ---*/
	// 顔画像ピクチャ
	const IMG_MARGIN = 4;	// TODO:プラグインの設定で変えられるようにする
	class Sprite_FacePicture extends Sprite {
		initialize( bitmap ) {
			super.initialize( bitmap );
			this.bitmap.resize( ImageManager.faceWidth, ImageManager.faceHeight );
		}
		moveOnMessageWindow( tw ) {
			const dx = Math.floor( ( Graphics.width - Graphics.boxWidth ) / 2 );
			const dy = Math.floor( ( Graphics.height - Graphics.boxHeight ) / 2 );
			this.x = dx + tw.x + tw.padding + IMG_MARGIN;
			this.y = dy + tw.y + tw.height - ImageManager.faceHeight - NAME_HEIGHT;
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