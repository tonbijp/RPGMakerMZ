//========================================
// TF_VectorWindow.js
// Version :1.1.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2020-2024
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
 * @desc ウィンドウ設定のプリセット
 * (1:UI用、2:メッセージ用、3〜 : メッセージ変更用)
 * @type struct<WindowParam>[]
 * @default ["{\"name\":\"UI\",\"shape\":\"roundrect\",\"margin\":\"3\",\"borderWidth\":\"6\",\"borderColor\":\"#fff\",\"decorSize\":\"20\",\"padding\":\"12\",\"bgColor\":\"[\\\"#0008\\\"]\"}","{\"name\":\"talk\",\"shape\":\"roundrect\",\"margin\":\"3\",\"borderWidth\":\"6\",\"borderColor\":\"#0ee\",\"decorSize\":\"20\",\"padding\":\"14\",\"bgColor\":\"[\\\"#0008\\\",\\\"#000C\\\"]\"}","{\"name\":\"thought\",\"shape\":\"roundrect\",\"margin\":\"6\",\"borderWidth\":\"2\",\"borderColor\":\"#666\",\"decorSize\":\"100\",\"padding\":\"16\",\"bgColor\":\"[\\\"#000a\\\"]\"}","{\"name\":\"shout\",\"shape\":\"spike\",\"margin\":\"60\",\"borderWidth\":\"6\",\"borderColor\":\"#fff\",\"decorSize\":\"80\",\"padding\":\"74\",\"bgColor\":\"[\\\"#0006\\\"]\"}"]
 * 
 * @param dropShadow @text ウィンドウの影
 * @type boolean @default true
 * @on 影あり(規定値) @off 影なし
 *
 * @param lineHeightRatio @text 行高さ
 * @desc 標準文字サイズを100%とした比率
 * 規定値:140
 * @type number @default 140
 * @min 100
 *
 * @param itemHeightRatio @text 項目高さ
 * @desc 標準文字サイズを100%とした比率
 * 規定値:160
 * @type number @default 160
 *　
 * @param messageFontSize @text メッセージフォントサイズ
 * @desc 
 * 規定値:30
 * @type number @default 30
 * @min 8
 *
 * @param nameFontSize @text 名前フォントサイズ
 * @desc 
 * 規定値:20
 * @type number @default 20
 * @min 8
 * 
 * @param nameWithFace @text 顔に名前表示
 * @type boolean @default true
 * @on 顔の下に表示(規定) @off 標準
 *
 * @param messageLines @text メッセージに表示する行数
 * @desc 
 * 規定値:3
 * @type number @default 3
 * @min 1
 *
 * @param messageView @text メッセージウィンドウ表示範囲
 * @desc 画面全体に対する x,y,幅,高さ の順の数値(ピクセル数)
 * 規定値:4,4,808,616
 * @type string @default 4,4,808,616
 *
 * @param tailLength @text シッポの長さ
 * @desc フキダシのシッポの長さ(ピクセル数)
 * 規定値:36
 * @type string @default 36
 * 
 * @param tailWidth @text シッポの幅
 * @desc フキダシのシッポの幅(ピクセル数)
 * 規定値:20
 * @type string @default 20
 *
 * @================================================
 * @help
 * ウィンドウをPNG画像を使わずに描画する。
 * 背景のグラデーションや枠線の太さや形など指定が可能。
 *
 * 標準の[文章の表示]コマンドを使う前に
 * プラグインコマンド[ウィンドウの準備]を実行し、
 * ウィンドウタイプや顔グラフィックの左右位置を指定する。
 * 
 * ※ PluginCommonBase 定義によりパラメータや引数に \V[n] を使えます。
 * 
 * @================================================
 * @command setWindow @text ウィンドウの準備
 * @desc [文章の表示]コマンドの前に実行すること。
 * 一回表示されるとウィンドウタイプは規定値に戻る。
 *
 * @arg windowType @text ウィンドウタイプ
 * @desc プラグインパラメータで設定した番号か名前
 * あらかじめ UI, talk, thought, shout がある
 * @type combo @default shout
 * @option UI @option talk @option thought @option shout
 *
 * @arg faceAlign @text 顔位置
 * @desc 
 * 規定値:left
 * @type select @default left
 * @option 左外 @value beyondLeft
 * @option 左 @value left
 * @option 右 @value right
 * @option 右外 @value beyondRight
 *
 * @arg pos @text ウィンドウ位置
 * @desc 画面左上から x,y の座標
 * command は[文章の表示]に従う
 * @type combo @default command
 * @option command
 *
 * @arg continuousPos @text 表示位置継続
 * @desc [ウィンドウ位置]で指定した座標を
 * 継続した[文章の表示]に適用する。
 * @type boolean @default true
 * @on 継続(規定値) @off 単体
 * 
 * 
 * @command setSpeachBalloon @text フキダシの準備
 * @desc [文章の表示]コマンドの前に実行すること。
 * 一回表示されるとウィンドウタイプは規定値に戻る。
 *
 * @arg windowType @text ウィンドウタイプ
 * @desc プラグインパラメータで設定した番号か名前
 * あらかじめ UI, talk, thought, shout がある
 * @type combo @default talk
 * @option UI @option talk @option thought @option shout
 *
 * @arg pointerAlign @text シッポ位置
 * @desc autoは[文章の表示]の指定と[顔位置]指定から決定されます
 * 規定値:auto
 * @type select @default auto
 * @option 上の左側 @value NW
 * @option 上の中央 @value NC
 * @option 上の右側 @value NE
 * @option 下の左側 @value SW
 * @option 下の中央 @value SC
 * @option 下の右側 @value SE
 * @option 左の上側 @value WN
 * @option 左の中央 @value WC
 * @option 左の下側 @value WS
 * @option 右の上側 @value EN
 * @option 右の中央 @value EC
 * @option 右の下側 @value ES
 * 
 * @arg faceAlign @text 顔位置
 * @desc 
 * 規定値:left
 * @type select @default left
 * @option 左外 @value beyondLeft
 * @option 左 @value left
 * @option 右 @value right
 * @option 右外 @value beyondRight
 *
 * @arg pos @text フキダシ位置
 * @desc 画面左上から x,y の座標(例:"200,100")
 * 規定値の command は[文章の表示]に従う
 * @type combo @default command
 * @option command
 *
 * @arg continuousPos @text 表示位置継続
 * @desc [ウィンドウ位置]で指定した座標を
 * 継続した[文章の表示]に適用する。
 * @type boolean @default true
 * @on 継続(規定値) @off 単体
 */
/*~struct~WindowParam:ja
 *
 * @param name @text ウィンドウ名
 * @type string
 * 
 * @param shape @text ウィンドウの形
 * @desc 
 * 規定値:roundrect
 * @type select @default roundrect
 * @option 角丸(decorSize:0 で長方形) @value roundrect
 * @option 破裂型(叫び) @value spike
 * @option 8角形 @value octagon
 * @option なし @value none
 * 
 * @param margin @text 端から枠までの間隔
 * @desc 
 * 規定値:8
 * @type number @default 8
 * @min 0
 * 
 * @param borderWidth @text 枠の幅
 * @desc 
 * 規定値:6
 * @type number @default 6
 * @min 0
 * 
 * @param borderColor @text 枠の色(CSS形式)
 * @desc 
 * 規定値:#FFF
 * @type string @default #FFF
 *
 * @param decorSize @text 装飾の大きさ
 * @desc 角丸・角・トゲのサイズ
 * 規定値:10
 * @type number @default 10
 * @min 0
 * 
 * @param padding @text 枠から内容までの間隔
 * @desc 
 * 規定値:18
 * @type number @default 18
 * @min 0
 * 
 * @param bgColor @text 背景色(CSS形式)
 * @desc 複数指定すると縦のグラデーションとして描画
 * 規定値:["#0086"]
 * @type string[] @default ["#0086"]
 */

( () => {
	"use strict";
	const PLUGIN_NAME = "TF_VectorWindow";

	// プラグインコマンド
	const COM_SET_WINDOW = "setWindow";
	const COM_SET_SPEACHBALLOON = "setSpeachBalloon";

	// ウィンドウ描画関連
	const ERROR_NUMBER = -1;
	const WINDOW_TYPE_DEFAULT = 0; // UIタイプの規定値
	const WINDOW_TYPE_TALK = 1; // [文章の表示]ウィンドウタイプの規定値

	const SHAPE_ROUNDRECT = "roundrect";
	const SHAPE_SPIKE = "spike";
	const SHAPE_OCTAGON = "octagon";
	const SHAPE_NONE = "none";
	const workBitmap = new Bitmap( 1, 1 );	// 前処理用に使うビットマップ
	const wCtx = workBitmap.context;
	const BOX_MARGIN = 4;	// boxWidth,boxHeight の外にある余白

	// $gameMessage.positionType()
	const POSITION_UP = 0;
	const POSITION_MIDDLE = 1;
	const POSITION_DOWN = 2;
	const POSITION_FREE = 20;	// 座標指定
	const AUTO_POSITION = "auto"; // 自動配置
	const COMMAND_POSITION = "command";	// [文章の表示]-[ウィンドウ位置]

	// 顔位置
	const POSITION_BEYONDLEFT = "beyondLeft";
	const POSITION_LEFT = "left";
	const POSITION_INNERLEFT = "innerLeft";
	const POSITION_CENTER = "center";
	const POSITION_INNERRIGHT = "innerRight";
	const POSITION_RIGHT = "right";
	const POSITION_BEYONDRIGHT = "beyondRight";

	const TYPE_NUMBER = "number";
	const TYPE_STRING = "string";

	/**
	 * パラメータを受け取る
	 */
	const pluginParams = PluginManagerEx.createParameter( document.currentScript );

	// メッセージ設定
	const messageFontSize = pluginParams.messageFontSize;
	const lineHeightRatio = pluginParams.lineHeightRatio / 100;
	const messageLines = pluginParams.messageLines;

	// フキダシ(メッセージ)ウィンドウ設定
	const tailLength = pluginParams.tailLength;// シッポの長さ
	const tailWidth = Math.floor( pluginParams.tailWidth / 2 );// シッポの幅(半分)

	// 名前表示設定
	const nameFontSize = pluginParams.nameFontSize;
	const nameWithFace = pluginParams.nameWithFace;

	// 選択項目設定
	const itemHeightRatio = pluginParams.itemHeightRatio / 100;

	// const dropShadow = pluginParams.dropShadow;

	let messageView;

	/*--- Scene_Boot ---*/
	// 全体での大きさを_windowLayer からのサイズに変換
	// Graphics のサイズがここで決まるので、その直後に処理
	const _Scene_Boot_start = Scene_Boot.prototype.start;
	Scene_Boot.prototype.start = function() {
		_Scene_Boot_start.call( this );
		messageView = ( rect => {
			rect.x = rect.x - Math.floor( ( Graphics.width - Graphics.boxWidth ) / 2 );
			rect.y = rect.y - Math.floor( ( Graphics.height - Graphics.boxHeight ) / 2 );
			return rect;
		} )( stringToRectangle( pluginParams.messageView ) );
	};

	/**
	 * プラグインコマンドの登録
	 */
	const PLUGIN_PARAM = 657;// プラグインコマンドのエディタでの引数の表示用
	const SHOW_TEXT = 101;// 文章の表示…
	const TEXT_DATA = 401;// 文章の表示のメッセージ

	//  [メッセージウィンドウの準備]
	PluginManagerEx.registerCommand( document.currentScript, COM_SET_WINDOW, function( args ) {
		const mw = Graphics.app.stage._messageWindow;
		if( !mw ) return;
		mw.TF_pointerAlign = POINTER_NONE;
		setWindowType( mw, args );
		setWindowPosition( mw, this, args );
	} );

	//  [フキダシウィンドウの準備]
	PluginManagerEx.registerCommand( document.currentScript, COM_SET_SPEACHBALLOON, function( args ) {
		const mw = Graphics.app.stage._messageWindow;
		if( !mw ) return;
		mw.TF_pointerAlign = args.pointerAlign;
		setWindowType( mw, args );
		setWindowPosition( mw, this, args );
	} );
	/**
	 * メッセージウィンドウの設定
	 * @param {Window_Message} mw 対象のメッセージウィンドウ
	 * @param {Array} args プラグインコマンドのパラメータリスト
	 */
	function setWindowType( mw, args ) {
		const windowType = getWindowType( args.windowType );
		if( windowType === ERROR_NUMBER ) throw `"${args.windowType}" is wrong window type.`;

		mw.TF_windowType = windowType;
		mw.TF_faceAlign = args.faceAlign;
	}
	/**
	 * メッセージウィンドウの位置を設定
	 * @param {Window_Message} mw 対象のメッセージウィンドウ
	 * @param {Game_Interpreter} interpreter コマンドインタプリタ
	 * @param {Array} args プラグインコマンドのパラメータリスト
	 * @returns 
	 */
	function setWindowPosition( mw, interpreter, args ) {
		const pos = args.pos;
		if( pos === COMMAND_POSITION ) return;

		$gameMessage.setPositionType( POSITION_FREE );
		setFreeWindowPosition( interpreter, args.continuousPos );
		if( isPointString( pos ) ) {
			const point = stringToPoint( pos );
			[ mw.x, mw.y ] = [ point.x, point.y ];
		} else {
			const rect = stringToRectangle( pos );
			// _width、_height に代入するのは、_refreshAllParts を発生させないため
			[ mw.x, mw.y, mw._width, mw._height ] = [ rect.x, rect.y, rect.width, rect.height ];
		}
	}

	/**
	 * フキダシ位置に座標(x,y)が書かれている場合の処理
	 * @param {Game_Interpreter} interpreter コマンドインタプリタ
	 * @param {Boolean} continuousPos 表示位置継続か
	 */
	function setFreeWindowPosition( interpreter, continuousPos ) {
		const mw = Graphics.app.stage._messageWindow;
		mw._positionType = POSITION_FREE;

		let eventIndex = getNextCommandIndex( interpreter._list, interpreter._index + 1, PLUGIN_PARAM );

		// ウィンドウ位置 : parameters[ 3 ]
		if( continuousPos ) {
			// [文章を表示]コマンドが続く限り、ウィンドウ位置を自由位置指定にする
			while( interpreter._list[ eventIndex ].code === SHOW_TEXT ) {
				interpreter._list[ eventIndex ].parameters[ 3 ] = POSITION_FREE;
				eventIndex = getNextCommandIndex( interpreter._list, eventIndex + 1, TEXT_DATA );
			}
		} else if( interpreter._list[ eventIndex ].code === SHOW_TEXT ) {
			// 次の[文章を表示]コマンドのウィンドウ位置を自由位置指定にする
			interpreter._list[ eventIndex ].parameters[ 3 ] = POSITION_FREE;
		}
	}
	/**
	 * 指定のインデックスの次のコマンドのインデックスを返す
	 * コマンドが複数行に複数行にわたる事があるので、次のコマンドまで不要な行を飛ばす処理が入っている
	 * @param {Array.<RPG.EventCommand>} list イベントコマンドのリスト
	 * @param {Number} index 現在のコマンドのインデックス
	 * @param {Number} ignoredCommand 飛ばすコマンド
	 * @returns {Number} 次のコマンドのインデックス
	 */
	const getNextCommandIndex = ( list, index, ignoredCommand ) => {
		while( list[ index ] && list[ index ].code === ignoredCommand ) index++;
		return index;
	};


	/**
	 * ウィンドウタイプ番号を返す
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

	/*--- Game_Interpreter ---*/
	const _Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
	Game_Interpreter.prototype.command101 = function( params ) {
		const result = _Game_Interpreter_command101.apply( this, arguments );

		if( $gameMessage.positionType() !== POSITION_FREE ) {
			setMessageParam( Graphics.app.stage._messageWindow );
		}
		return result;
	};

	/*--- Window ---*/
	const _Window_initialize = Window.prototype.initialize;
	Window.prototype.initialize = function() {
		_Window_initialize.call( this );

		// SceneCustomMenu.js のスキンの設定があれば、TF_VectorWindowの設定はしない
		if( this._data && this._data.WindowSkin ) return;
		// TF_windowTypeが設定されていないなら、規定値を設定
		if( !this.TF_windowType ) {
			this.TF_windowType = WINDOW_TYPE_DEFAULT;
			setWindowParam( this );
		}
	};

	const _Window__refreshAllParts = Window.prototype._refreshAllParts;
	Window.prototype._refreshAllParts = function() {
		// SceneCustomMenu.js のスキンの設定がなければ、パスを先読みしておく
		if( !this._data || !this._data.WindowSkin ) {
			this.TF_path2d = setWindowPath( this );
		}
		_Window__refreshAllParts.call( this );
	};

	const _Window__refreshBack = Window.prototype._refreshBack;
	Window.prototype._refreshBack = function() {
		// SceneCustomMenu.js のスキンの設定があれば、通常の描画に渡す
		if( this._data && this._data.WindowSkin ) return _Window__refreshBack.call( this );
		if( !this.TF_path2d || this.TF_shape === SHAPE_NONE ) return;

		const sprite = this._backSprite;
		setupBitmap( sprite, this.width, this.height );
		sprite.setFrame( 0, 0, this.width, this.height );
		drawWindowBack( this );
	};

	/**
	 * ウィンドウ背景描画
	 * @param {Window} tw 対象ウィンドウ
	 */
	function drawWindowBack( tw ) {
		const ctx = tw._backSprite.bitmap.context;

		setFillColor( ctx, tw );
		// if( dropShadow ) setShadowParam( ctx );
		ctx.fill( tw.TF_path2d );
		//if( !dropShadow ) setShadowParam( ctx );
	}
	function setFillColor( ctx, tw ) {
		const bgColor = pluginParams.preset[ tw.TF_windowType ].bgColor;
		if( bgColor.length === 1 ) {
			ctx.fillStyle = tintColor( bgColor[ 0 ], tw._colorTone );
			return;
		}
		const grad = ctx.createLinearGradient( 0, 0, 0, tw._height );
		const l = bgColor.length;
		const interval = 1.0 / ( l - 1 );
		bgColor.forEach( ( e, i ) => {
			grad.addColorStop( i * interval, tintColor( e, tw._colorTone ) );
		} );
		ctx.fillStyle = grad;
	}

	const _Window__refreshFrame = Window.prototype._refreshFrame;
	Window.prototype._refreshFrame = function() {
		// SceneCustomMenu.js のスキンの設定があれば、通常の描画に渡す
		if( this._data && this._data.WindowSkin ) return _Window__refreshFrame.call( this );
		if( !this.TF_path2d || this.TF_shape === SHAPE_NONE ) return;

		setupBitmap( this._frameSprite, this.width, this.height );
		this._frameSprite.setFrame( 0, 0, this.width, this.height );

		drawWindowFrame( this );
	};
	/**
	 * ウィンドウ枠描画
	 * @param {Window} tw 対象ウィンドウ
	 */
	function drawWindowFrame( tw ) {
		const path2d = tw.TF_path2d;
		const ctx = tw._frameSprite.bitmap.context;
		setBorderParam( ctx, tw.TF_windowType );
		ctx.stroke( path2d );
	}
	/**
	 * 枠の設定をする
	 * @param {CanvasRenderingContext2D} ctx コンテキスト
	 * @param {String} type ウィンドウのタイプ
	 */
	function setBorderParam( ctx, type ) {
		if( !pluginParams.preset[ type ].borderWidth ) return;

		ctx.lineWidth = pluginParams.preset[ type ].borderWidth;
		ctx.strokeStyle = pluginParams.preset[ type ].borderColor;
		ctx.shadowBlur = 3;
		ctx.shadowOffsetY = 0;
	}

	/**
	 * スプライトに指定サイズのビットマップを設定する
	 * @param {Sprite} sprite スプライト
	 * @param {Number} width 幅
	 * @param {Number} height 高さ
	 */
	function setupBitmap( sprite, width, height ) {
		if( sprite.bitmap ) {
			sprite.bitmap.clear();
		} else {
			sprite.bitmap = new Bitmap( 1, 1 );
		}
		sprite.bitmap.resize( width, height );
	}

	/**
	 * ウィンドウのパスを得る
	 * @param {Window} tw 対象ウィンドウ
	 * @returns {Path2D} 描画するパス
	 */
	function setWindowPath( tw ) {
		const m = tw.margin;
		const r = pluginParams.preset[ tw.TF_windowType ].decorSize;
		const w = tw.width;
		const h = tw.height;

		switch( tw.TF_shape ) {
			case SHAPE_ROUNDRECT: return drawRoundrect( m, w, h, r );
			case SHAPE_OCTAGON: return drawOctagon( m, w, h, r );
			case SHAPE_SPIKE: return drawSpike( m, w, h, r, pluginParams.preset[ tw.TF_windowType ].borderWidth );
		}
	}
	/**
	 * ウィンドウの数値設定
	 * @param {Window} tw 対象ウィンドウ
	 */
	function setWindowParam( tw ) {
		const preset = pluginParams.preset[ tw.TF_windowType ];
		tw.TF_shape = preset.shape;
		const p = preset.padding;
		tw._padding = p;
		tw._margin = preset.margin;
		tw._clientArea.move( p, p );
	}
	/**
	 * メッセージウィンドウの数値設定
	 * @param {Window_Message} mw 対象ウィンドウ
	 */
	function setMessageParam( mw ) {
		mw._width = messageView.width;
		mw._height = mw.lineHeight() * messageLines + mw._padding * 2;
	}


	/*--- Window_Base ---*/
	Window_Base.prototype.lineHeight = () => Math.ceil( $dataSystem.advanced.fontSize * lineHeightRatio );
	Window_Base.prototype.textPadding = function() {
		return Math.ceil( this.lineHeight() - $dataSystem.advanced.fontSize ) + 0.5;
	};

	// なぜかここで padding を上書きして設定した値が戻っているので無視
	const _Window_Base_updatePadding = Window_Base.prototype.updatePadding;
	Window_Base.prototype.updatePadding = function() {
		if( this._data && this._data.WindowSkin ) {
			_Window_Base_updatePadding.call( this );
		}
	};

	/*--- Window_Message ---*/
	const _Window_Message_initialize = Window_Message.prototype.initialize;
	Window_Message.prototype.initialize = function() {
		this.TF_windowType = WINDOW_TYPE_TALK;

		_Window_Message_initialize.apply( this, arguments );
		this.TF_faceAlign = POSITION_LEFT;
	};

	const _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
	Window_Message.prototype.updatePlacement = function() {
		this._positionType = $gameMessage.positionType();
		if( this._positionType !== POSITION_FREE ) {
			this.x = messageView.x;
			this.y = messageView.y + ( this._positionType * ( messageView.height - this.height ) ) / 2;
		}

		const goldWindow = this._goldWindow;
		if( goldWindow ) {
			goldWindow.y = 0 < this.y ? 0 : Graphics.boxHeight - goldWindow.height;
		}
	};

	// フォントサイズが異なるので、オーバーライドして別計算
	const _Window_Message_calcTextHeight = Window_Message.prototype.calcTextHeight;
	Window_Message.prototype.calcTextHeight = function( textState ) {
		const textPadding = this.textPadding();
		const lines = textState.text.slice( textState.index ).split( "\n" );
		const lastFontSize = this.contents.fontSize;
		const textHeight = this.maxFontSizeInLine( lines[ 0 ] ) + textPadding;
		this.contents.fontSize = lastFontSize;
		return textHeight;
	};

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
		const facePicture = Graphics.app.stage.TF_facePicture;
		facePicture.moveOnMessageWindow( this );
		facePicture.drawFace( this._faceBitmap, $gameMessage.faceIndex() );
	};

	// 閉じるときに顔を非表示に
	const _Window_Message_newPage = Window_Message.prototype.newPage;
	Window_Message.prototype.newPage = function() {
		_Window_Message_newPage.apply( this, arguments );
		closeFacePicture();
		setWindowParam( this );
		this._refreshAllParts();
	};
	const _Window_Message_close = Window_Message.prototype.close;
	Window_Message.prototype.close = function() {
		_Window_Message_close.call( this );
		closeFacePicture();
	};
	function closeFacePicture() {
		Graphics.app.stage.TF_facePicture.bitmap.clear();
	}

	const _Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
	Window_Message.prototype.terminateMessage = function() {
		_Window_Message_terminateMessage.call( this );
		this.TF_windowType = WINDOW_TYPE_TALK;	// 次回は規定値を予約
	};

	// TODO:顔位置の細かい座標はプロパティで指定可能にする
	// rtl にも対応したい…が
	const _Window_Message_newLineX = Window_Message.prototype.newLineX;
	Window_Message.prototype.newLineX = function( textState ) {
		const faceExists = $gameMessage.faceName() !== "";

		// 顔が左内側の場合、文章開始位置を顔の分だけ右にずらす
		if( faceExists && this.TF_faceAlign === POSITION_LEFT ) {
			return ImageManager.faceWidth + this.textPadding() * 2;
		}
		return this.textPadding();
	};

	/**
	 * メッセージ枠の描画
	 */
	const _Window_Message__refreshFrame = Window_Message.prototype._refreshFrame;
	Window_Message.prototype._refreshFrame = function() {
		// フキダシ表示でない場合はメッセージを送る
		if( !this.TF_pointerAlign || this.TF_pointerAlign === POINTER_NONE ) {
			this._frameSprite.move( 0, 0 );
			return _Window_Message__refreshFrame.call( this );
		}

		const m = this._margin;
		const w = this.width;
		const h = this.height;

		setupBitmap( this._frameSprite, w + tailLength * 2, h + tailLength * 2 );
		this._frameSprite.setFrame( 0, 0, w, h );


		// フキダシ本体
		const pathBox = this.TF_path2d;

		// シッポ
		const pathTail = new Path2D();
		pathTail.addPath( drawTriangle(), getTailMatrix( this ) );
		const pathComposite = new Path2D( pathBox );
		pathComposite.addPath( pathTail );

		// 描画準備
		const ctx = prepareDrawBalloon( this._frameSprite, w, h );

		// フキダシのマスクの描画
		ctx.fillStyle = "#000";
		ctx.fill( pathTail );
		ctx.fill( pathBox );
		ctx.globalCompositeOperation = "source-out";// マスク以外に描画

		// 枠の描画
		setBorderParam( ctx, this.TF_windowType );
		ctx.lineWidth = pluginParams.preset[ this.TF_windowType ].borderWidth * 2;
		ctx.stroke( pathComposite );
		ctx.globalCompositeOperation = "source-over";// デフォルト状態に戻す
	};

	/**
	 * メッセージ背景の描画
	 */
	const _Window_Message__refreshBack = Window_Message.prototype._refreshBack;
	Window_Message.prototype._refreshBack = function() {
		// フキダシ表示でない場合はメッセージを送る
		if( !this.TF_pointerAlign || this.TF_pointerAlign === POINTER_NONE ) {
			this._backSprite.move( 0, 0 );
			return _Window_Message__refreshBack.call( this );
		}

		const m = this._margin;
		const w = this.width;
		const h = this.height;

		// フキダシ本体
		const pathBox = this.TF_path2d;
		// シッポ
		const pathTail = new Path2D();
		pathTail.addPath( drawTriangle(), getTailMatrix( this ) );

		// 描画準備
		const ctx = prepareDrawBalloon( this._backSprite, w, h );

		// フキダシのマスクの描画
		ctx.fillStyle = "#000";
		ctx.fill( pathTail );
		ctx.fill( pathBox );
		ctx.globalCompositeOperation = "source-in";// マスク部分に描画

		// フキダシの描画
		setFillColor( ctx, this );
		ctx.fillRect( -tailLength, -tailLength, w + tailLength * 2, h + tailLength * 2 );
		ctx.globalCompositeOperation = "source-over";// デフォルト状態に戻す
	};

	/**
	 * フキダシを描く準備
	 * @param {Sprite} sprite 対象スプライト
	 * @param {Number} w ウインドウの幅
	 * @param {Number} h ウインドウの高さ
	 * @returns {CanvasRenderingContext2D} コンテキスト
	 */
	function prepareDrawBalloon( sprite, w, h ) {
		// シッポの分、広く画像を描く
		setupBitmap( sprite, w + tailLength * 2, h + tailLength * 2 );
		sprite.move( -tailLength, -tailLength );

		// 尻尾の分だけ基準点を下に移動
		const ctx = sprite.bitmap.context;
		ctx.translate( tailLength, tailLength );
		return ctx;
	}

	const DIRECTION_NW = "NW";// 上の左側
	const DIRECTION_NC = "NC";// 上の中央
	const DIRECTION_NE = "NE";// 上の右側
	const DIRECTION_SW = "SW";// 下の左側
	const DIRECTION_SC = "SC";// 下の中央
	const DIRECTION_SE = "SE";// 下の右側
	const DIRECTION_WN = "WN";// 左の上側
	const DIRECTION_WC = "WC";// 左の中央
	const DIRECTION_WS = "WS";// 左の下側
	const DIRECTION_EN = "EN";// 右の上側
	const DIRECTION_EC = "EC";// 右の中央
	const DIRECTION_ES = "ES";// 右の下側
	const POINTER_NONE = "none";// シッポなし
	/**
	 * シッポの移動と回転用の行列を返す
	 * @param {Window_Message} mw 対象となるメッセージウィンドウ
	 * @returns {DOMMatrix} 変形用の行列
	 */
	function getTailMatrix( mw ) {
		let x, y, a;

		switch( mw.TF_pointerAlign ) {
			case DIRECTION_NW:
				x = 100;
				y = tailWidth + mw._margin;
				a = -50;
				break;
			case DIRECTION_NC:
				x = Math.floor( mw.width / 2 );
				y = tailWidth + mw._margin;
				a = 0;
				break;
			case DIRECTION_NE:
				x = mw.width - 100;
				y = tailWidth + mw._margin;
				a = 50;
				break;
			case DIRECTION_SW:
				x = 100;
				y = mw.height - tailWidth - mw._margin;
				a = -130;
				break;
			case DIRECTION_SC:
				x = Math.floor( mw.width / 2 );
				y = mw.height - tailWidth - mw._margin;
				a = 180;
				break;
			case DIRECTION_SE:
				x = mw.width - 100;
				y = mw.height - tailWidth - mw._margin;
				a = 130;
				break;
			case DIRECTION_WN:
				x = tailWidth + mw._margin;
				y = 50;
				a = -40;
				break;
			case DIRECTION_WC:
				x = tailWidth + mw._margin;
				y = Math.floor( mw.height / 2 );
				a = -90;
				break;
			case DIRECTION_WS:
				x = tailWidth + mw._margin;
				y = mw.height - 50;
				a = -140;
				break;
			case DIRECTION_EN:
				x = mw.width - tailWidth - mw._margin;
				y = 50;
				a = 40;
				break;
			case DIRECTION_EC:
				x = mw.width - tailWidth - mw._margin;
				y = Math.floor( mw.height / 2 );
				a = 90;
				break;
			case DIRECTION_ES:
				x = mw.width - tailWidth - mw._margin;
				y = mw.height - 50;
				a = 140;
				break;
			case undefined:
				x = Math.floor( mw.width / 2 );
				y = mw.height - tailWidth - mw._margin;
				a = 180;
				break;
			default:
				throw `"${pointerAlingn}" is wrong direction.`;
		}
		return new DOMMatrix().translateSelf( x, y ).rotateSelf( a );
	}

	/**
	 * スプライトに指定サイズのビットマップを設定する
	 * @param {Sprite} sprite スプライト
	 * @param {Number} width 幅
	 * @param {Number} height 高さ
	 */
	function setupBitmap( sprite, width, height ) {
		const b = sprite.bitmap;
		if( b ) {
			b.resize( width, height );
			b.clear();
			sprite.width = width;
			sprite.height = height;
		} else {
			sprite.bitmap = new Bitmap( width, height );
		}
	}

	/*--- 図形パス描画関数 ---*/
	/**
	 * 角丸の矩形を描く
	 * @param {Number} m 枠外のマージン
	 * @param {Number} w ウィンドウ描画領域の幅
	 * @param {Number} h ウィンドウ描画領域の高さ
	 * @param {Number} r 角丸の半径
	 * @returns {Path2D} 角丸の矩形パス
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
		return path;
	}

	/**
	 * 8角形を描く
	 * @param {Number} m 枠外のマージン
	 * @param {Number} w ウィンドウ描画領域の幅
	 * @param {Number} h ウィンドウ描画領域の高さ
	 * @param {Number} r  √r*r = 角の斜め線の長さ
	 * @returns {Path2D} 8角形パス
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
	 * @param {Number} m トゲの長さ
	 * @param {Number} w ウィンドウ描画領域の幅
	 * @param {Number} h ウィンドウ描画領域の高さ
	 * @param {Number} r トゲの(おおよその)横幅
	 * @param {Number} bw 線の幅
	 * @returns {Path2D} トゲ型装飾枠パス
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

	/**
	 * 三角(フキダシのシッポ)を描画(0時の方向)
	 * @returns {Path2D} 三角形状データ
	 */
	function drawTriangle() {
		const path = new Path2D();
		path.moveTo( tailWidth, 0 );
		path.lineTo( 0, -tailLength );
		path.lineTo( -tailWidth, 0 );
		path.arcTo( 0, tailWidth, tailWidth, 0, tailWidth );
		path.closePath();
		return path;
	}

	/*--- Window_Selectable ---*/
	Window_Selectable.prototype.itemHeight = () => Math.ceil( $dataSystem.advanced.fontSize * itemHeightRatio );



	/*-------------------- 顔表示関連 -----------------------*/
	/*--- Window_NameBox ---*/
	const _Window_NameBox_initialize = Window_NameBox.prototype.initialize;
	Window_NameBox.prototype.initialize = function() {
		_Window_NameBox_initialize.apply( this, arguments );
		this.contents.fontSize = nameFontSize;
		if( nameWithFace ) {
			this._isWindow = false;// 重ね合わせのくり抜きをしない
		};
	};

	const _Window_NameBox_updatePlacement = Window_NameBox.prototype.updatePlacement;
	Window_NameBox.prototype.updatePlacement = function() {
		_Window_NameBox_updatePlacement.call( this );
		if( !nameWithFace ) return;

		const mw = this._messageWindow;

		// 顔ウィンドウの下に中央揃えで配置
		const faceX = Graphics.app.stage.TF_facePicture.getPositionX( mw );
		const halfFaceWidth = Math.floor( ImageManager.faceWidth / 2 );
		const halfNameWidth = Math.floor( this.windowWidth() / 2 );
		this.x = faceX + halfFaceWidth - halfNameWidth;

		this.y = mw.y + mw.height - mw.padding - getNameHeight() - this.padding;
	};

	Window_NameBox.prototype.resetFontSettings = function() {
		this.contents.fontFace = $gameSystem.mainFontFace();
		this.contents.fontSize = nameFontSize;
		this.resetTextColor();
	};

	Window_NameBox.prototype._refreshAllParts = function() {
		if( nameWithFace ) return;// 顔の側に名前を置く場合、ウィンドウを描かない
		Window_Base.prototype._refreshAllParts.call( this );
	};

	const _Window_NameBox_windowWidth = Window_NameBox.prototype.windowWidth;
	Window_NameBox.prototype.windowWidth = function() {
		if( !nameWithFace ) return _Window_NameBox_windowWidth.call( this );

		if( this._name ) {
			this.textWidthEx = this.textSizeEx( this._name ).width;
			const padding = this.padding + this.itemPadding();
			return ImageManager.faceWidth + padding * 2;
		} else {
			return this.textWidthEx = 0;
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
	function getNameHeight() {
		return Math.ceil( nameFontSize * lineHeightRatio );
	}

	/*--- Scene_Message ---*/
	// 顔表示スプライトを「シーンに」追加
	const _Scene_Message_createAllWindows = Scene_Message.prototype.createAllWindows;
	Scene_Message.prototype.createAllWindows = function() {
		_Scene_Message_createAllWindows.call( this );

		this.TF_facePicture = new Sprite_FacePicture( new Bitmap( 1, 1 ) );
		this.addWindow( this.TF_facePicture );
	};

	/*--- Sprite_FacePicture ---*/
	// 顔画像ピクチャ
	const IMG_MARGIN = 4;	// TODO:プラグインの設定で変えられるようにする
	class Sprite_FacePicture extends Sprite {
		initialize( bitmap ) {
			super.initialize( bitmap );
			this.bitmap.resize( ImageManager.faceWidth, ImageManager.faceHeight );
		}

		/**
		 * 指定したウィンドウの指定位置に移動
		 * @param {Window_Message} mw 目標とするウィンドウ 
		 */
		moveOnMessageWindow( mw ) {
			this.x = this.getPositionX( mw );
			this.y = mw.y + mw.height - mw.padding - ImageManager.faceHeight;
			const speakerName = $gameMessage.speakerName(); //Graphics.app.stage._nameBoxWindow._name;
			if( nameWithFace && speakerName !== "" ) this.y -= getNameHeight();
		}

		// Window_NameBox から読めるように外に出しておく
		// 位置指定が前後しても問題ないよう、現在位置ではなく定義位置を取る
		getPositionX( mw ) {
			switch( mw.TF_faceAlign ) {
				case POSITION_BEYONDLEFT: return mw.x - mw.padding - IMG_MARGIN - ImageManager.faceWidth;
				case POSITION_LEFT: return mw.x + mw.padding + IMG_MARGIN;
				case POSITION_RIGHT: return mw.x + mw.width - mw.padding
					- IMG_MARGIN - ImageManager.faceWidth;
				case POSITION_BEYONDRIGHT: return mw.x + mw.width + mw.padding + IMG_MARGIN;
				default: return;
			}
		}

		/**
		 * 指定番号の顔画像を描画する
		 * @param {Bitmap} bitmap 表示する画像データ
		 * @param {Number} faceIndex 顔番号
		 */
		drawFace( bitmap, faceIndex ) {
			const sw = ImageManager.faceWidth;
			const sh = ImageManager.faceHeight;
			const sx = ( faceIndex % 4 ) * sw;
			const sy = Math.floor( faceIndex / 4 ) * sh;
			this.bitmap.blt( bitmap, sx, sy, sw, sh, 0, 0 );
			this.setFrame( 0, 0, sw, sh );
			this.visible = true;
		}
	}


	/*--- ユーティリティ関数 ---*/
	/**
	 * 配列からCSS color文字列を返す
	 * @param {Array.<Number>} colorList [ r, g, b, a ] の配列
	 * @returns {String} 'rgb(r,g,b)' か 'rgba(r,g,b,a)'の文字列
	 */
	function array2CssColor( colorList ) {
		if( colorList.length === 3 ) return Utils.rgbToCssColor( ...colorList );

		// Utils.rgbToCssColor( r, g, b ) は a を扱ってくれないので
		return `rgba(${colorList[ 0 ]},${colorList[ 1 ]},${colorList[ 2 ]},${colorList[ 3 ] / 255})`;
	}

	/**
	 * CSS形式の色をRGB配列に分解して返す
	 * @param {String} CssColor CSS形式
	 * @returns {Array.<Number>} RGBに分解した色
	 */
	function cssColor2Array( CssColor ) {
		// 一旦塗ってその色を取って返すという荒技
		wCtx.clearRect( 0, 0, 1, 1 );
		wCtx.fillStyle = CssColor;
		wCtx.fillRect( 0, 0, 1, 1 );
		return wCtx.getImageData( 0, 0, 1, 1 ).data;
	}

	/**
	 * 色に色調変更を適用して返す
	 * @param {String} bgColor 背景色(CSS形式)
	 * @param {Array.<Number>} colorTone 色調変更
	 */
	function tintColor( bgColor, colorTone ) {
		const colorArray = cssColor2Array( bgColor );
		colorArray[ 0 ] += colorTone[ 0 ];
		colorArray[ 1 ] += colorTone[ 1 ];
		colorArray[ 2 ] += colorTone[ 2 ];

		return array2CssColor( colorArray );
	}

	/**
	 * 指定した文字列が、点用(数値2つ並び)のものか
	 * @param {String} pointStr テストする文字列
	 * @returns {Boolean} 点用か
	 */
	function isPointString( pointStr ) {
		const args = pointStr.match( /\d+/g );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${pointStr}"`;
		return ( args.length === 2 );
	}

	/**
	 * 文字列をPointオブジェクトに変換して返す。
	 * @param {String} pointStr "x, y" 形式で数値を書いた文字列
	 * @returns {Point} 
	 */
	function stringToPoint( pointStr ) {
		const args = pointStr.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${pointStr}"`;
		return new Point( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ) );
	}
	/**
	 * 文字列を Rectangle に変換して返す
	 * @param {String} rectStr "x,y,w,h" 形式で数値を書いた文字列
	 * @returns {Rectangle}
	 */
	function stringToRectangle( rectStr ) {
		const args = rectStr.match( /([-.0-9]+)[^-.0-9]+([-.0-9]+)[^-.0-9]+([-.0-9]+)[^-.0-9]+([-.0-9]+)/ );
		if( args === null ) throw `${PLUGIN_NAME}: wrong parameter "${rectStr}"`;
		return new Rectangle( parseFloat( args[ 1 ] ), parseFloat( args[ 2 ] ), parseFloat( args[ 3 ] ), parseFloat( args[ 4 ] ) );
	}

	/**
	 * ドロップシャドウの設定
	 * @param {CanvasRenderingContext2D} ctx コンテキスト
	 */
	function setShadowParam( ctx ) {
		ctx.shadowBlur = 4;
		ctx.shadowColor = 'black';
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 6;
	}

} )();