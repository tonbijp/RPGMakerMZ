//========================================
// TF_Undulation.js
// Version :0.1.0.0
// For : RPGツクールMZ (RPG Maker MZ)
// -----------------------------------------------
// Copyright : Tobishima-Factory 2019-2021
// Website : http://tonbi.jp
//
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//========================================
/*:
 * @target MZ
 * @plugindesc Can walk tiles of different height naturally, such as stairs.
 * @author Tonbi@Tobishima-Factory
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Undulation.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @base HalfMove
 * @orderAfter HalfMove
 * 
 * @param terrainTag
 * @desc Set condition with this number of terrain tag and 4 direction setting.
 * @type number @default 1
 * @min 0 @max 7
 * 
 * @param terrainTagSN
 * @desc This tag is subject to north-south climb resistance.
 * @type number @default 2
 * @min 0 @max 7
 * 
 * @param baseBump
 * @desc Base unit of bump.
 * @type number @default 6
 * @min 1 @max 14
 * 
 * @param climbResist
 * @desc Resistance to climb up and down.
 * @type number @default 2
 * @min 0 @max 6
 * 
 * @help
 * CAUTION : This plugin needs HalfMove.js made by Triacontane.
 * Set HalfMove.js before TF_Undulation.js.
 * If you use TF_LayeredMap.js. You must set TF_LayeredMap.js before.
 * 
 * Set movement like slope or stairs use by Terrain Tag and 4 direction setting.
 * Input only L or R (←・→) to move slope automatically.
 * If you place the same tile on the map, it will run as a unified part.
 * 
 * 1. Set a Terrain Tag (Default : 1) to A5BCDE tile.
 * 
 * 2. Set a 4 direction for details.
 *      0x0 ↑→←↓ :  |   Center Wall
 *      0x1 ↑→←・ : ⤾ R Spiral Bottom
 *      0x2 ↑→・↓ : \   63°
 *      0x3 ↑→・・ : ＼ 27° South Side
 *      0x4 ↑・←↓ :   / 63°
 *      0x5 ↑・←・ : ／ 27° South Side
 *      0x6 ↑・・↓ : N/A
 *      0x7 ↑・・・ : ⤿ L Spiral Bottom
 *      0x8 ・→←↓ : ⤾ R Spiral Top
 *      0x9 ・→←・ : ⤾ R Spiral Half
 *      0xA ・→・↓ : ＼ 27° North Side
 *      0xB ・→・・ : ＼ 45°
 *      0xC ・・←↓ : ／ 27° North Side
 *      0xD ・・←・ : ／ 45°
 *      0xE ・・・↓ : ⤿ L Spiral Top
 *      0xF ・・・・ : ⤿ L Spiral Half
 * 
 * 3. Set Ladder and Damage floor to bump level.
 *      Ladder   Damage
 *          OFF        OFF         No Bump (Apply 4 direction setting.Written in 2.)
 *          ON          OFF         Bump Level 1(Default:6px)
 *          OFF        ON           Bump Level 2(Default:12px)
 *          ON          ON           Bump Level 3(Default:18px)
 * 
 * Released under the MIT License.
 */
/*:ja
 * @target MZ
 * @plugindesc 階段など高さの違う箇所を自然に歩く
 * @author とんび@鳶嶋工房
 * @url https://github.com/tonbijp/RPGMakerMZ/blob/master/TF_Undulation.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @base HalfMove
 * @orderAfter HalfMove
 * 
 * @param terrainTag
 * @desc この地形タグ+通行設定(4方向)で詳細な段差設定を行う。
 * @type number @default 1
 * @min 0 @max 7
 * 
 * @param terrainTagSN
 * @desc この地形タグは南北方向の階段に減速効果をつける。
 * @type number @default 2
 * @min 0 @max 7
 * 
 * @param baseBump
 * @desc 段差の基本単位。
 * @type number @default 6
 * @min 1 @max 14
 * 
 * @param climbResist
 * @desc 登り降りの抵抗。
 * @type number @default 2
 * @min 0 @max 6
 * 
 * @help
 * 注意 : トリアコンタンさんの HalfMove.js の利用を前提としています。
 * 
 * 地形タグと通行設定(4方向)の組み合わせで坂・階段を指定します。
 * 左右(←・→)に入力しておくだけで、自動で上下方向にも移動します。
 * 同じ設定のタイルを敷き詰めると、それっぽく衝突判定を行います。
 * 
 * 1. A5BCDEタイルに地形タグ(規定値 : 1)を指定
 * 
 * 2. 通行設定(4方向)によって、詳細設定
 *      0x0 ↑→←↓ :  |  中央に壁
 *      0x1 ↑→←・ : ⤾ 右螺旋、下
 *      0x2 ↑→・↓ : \  63°
 *      0x3 ↑→・・ : ＼ 27° 南より
 *      0x4 ↑・←↓ :  / 63°
 *      0x5 ↑・←・ : ／ 27° 南より
 *      0x6 ↑・・↓ : ベッド(実装予定)
 *      0x7 ↑・・・ : ⤿ 左螺旋、下
 *      0x8 ・→←↓ : ⤾ 右螺旋、上
 *      0x9 ・→←・ : ⤾ 右螺旋、半回転
 *      0xA ・→・↓ : ＼ 27° 北より
 *      0xB ・→・・ : ＼ 45°
 *      0xC ・・←↓ : ／ 27° 北より
 *      0xD ・・←・ : ／ 45°
 *      0xE ・・・↓ : ⤿ 左螺旋、上
 *      0xF ・・・・ : ⤿ 左螺旋、半回転
 * 
 * 3. [梯子]と[ダメージ床] の設定で段差レベルを設定
 *      [梯子]   [ダメージ床]
 *          OFF        OFF         段差なし (2. で説明した 4方向設定が適用されます)
 *          ON          OFF         段差レベル1(規定値:6px)
 *          OFF        ON           段差レベル2(規定値:12px)
 *          ON          ON           段差レベル3(規定値:18px)
 * 
 * 利用規約 : MITライセンス
 */
( () => {
    "use strict";

    // パラメータを受け取る
    const pluginParams = PluginManagerEx.createParameter( document.currentScript );

    const terrainTag = pluginParams.terrainTag;    // 東西用の地形タグ規定値
    const terrainTagSN = pluginParams.terrainTagSN;   // 南用の地形タグ規定値
    const baseBump = pluginParams.baseBump;    // 段差の規定値
    const climbResist = pluginParams.climbResist;    // 昇降抵抗の規定値

    // flag用定数
    const MASK_BUMP = 0x120; // 段差用マスク(梯子とダメージ床)
    // 段差設定フラグ
    const BUMP1 = 0x20;
    const BUMP2 = 0x100;
    const BUMP3 = 0x120;

    // Wは西(左)上がり…＼ 　Eは東(右)上がり…／
    const MASK_UNDULATION = 0x001F; // 通行設定を取り出すマスク
    // 傾き設定フラグ
    const W45 = 0xB;
    const E45 = 0xD;
    const W63 = 0x2;
    const E63 = 0x4;
    const W27N = 0xA;
    const W27S = 0x3;
    const E27N = 0xC;
    const E27S = 0x5;

    // 螺旋階段(spiral staircase)
    const WSN = 0x8;
    const WSS = 0x1;
    const WSU = 0x9;
    const ESN = 0xE;
    const ESS = 0x7;
    const ESU = 0xF;

    // 中央に壁
    const CENTER_LINE = 0x00;

    // TODO : ベッド
    const BED = 0x6;

    // 横向きの階段
    const TYPE_SIDE_STAIRS = [ W45, E45, W63, E63, W27N, E27N, W27S, E27S ];
    const TYPE_SPIRAL_STAIRS = [ WSS, WSN, WSU, ESS, ESN, ESU ];

    // フラグから移動速度の調整比率を得るテーブル
    // Math.sqrt( Math.pow( ( 1 - resistA ), 2 ) + Math.pow( ( 1 - resistB ), 2) )
    const resistA = [ 0.1, 0.14, 0.2, 0.3, 0.4, 0.5, 0.6 ][ climbResist ];
    const resistB = [ 0.55, 0.57, 0.6, 0.65, 0.7, 0.75, 0.8 ][ climbResist ];
    const resistC = [ 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22 ][ climbResist ];
    const resistD = [ 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.62 ][ climbResist ];
    const FLAG2RATIO_W = { // 西(左)向き ↖ , ↙
        [ W45 ]: [ resistA, resistA ], [ E45 ]: [ resistA, -resistA ],
        [ W63 ]: [ resistB, resistA ], [ E63 ]: [ resistB, -resistA ],
        [ W27N ]: [ resistC, resistD ], [ E27N ]: [ resistC, -resistD ],
        [ W27S ]: [ resistC, resistD ], [ E27S ]: [ resistC, -resistD ],
        [ WSS ]: [ resistA, resistA ], [ WSN ]: [ resistA, -resistA ],
        [ ESS ]: [ resistA, -resistA ], [ ESN ]: [ resistA, resistA ],
    };
    const FLAG2RATIO_E = { // 東(右)向き ↘ , ↗
        [ W45 ]: [ -resistA, -resistA ], [ E45 ]: [ -resistA, resistA ],
        [ W63 ]: [ -resistB, -resistA ], [ E63 ]: [ -resistB, resistA ],
        [ W27N ]: [ -resistC, -resistD ], [ E27N ]: [ -resistC, resistD ],
        [ W27S ]: [ -resistC, -resistD ], [ E27S ]: [ -resistC, resistD ],
        [ WSS ]: [ -resistA, -resistA ], [ WSN ]: [ -resistA, resistA ],
        [ ESS ]: [ -resistA, resistA ], [ ESN ]: [ -resistA, -resistA ],
    };

    // フラグから階段(坂)の到達点の位置を得る
    const FLAG2POS_W = { // 西(左)向き ↖ , ↙
        [ W45 ]: [ 0, -0.5 ], [ E45 ]: [ 0, 0.5 ],
        [ W63 ]: [ 0, -1 ], [ E63 ]: [ 0, 1 ],
        [ W27N ]: [ -0.5, -0.5 ], [ E27N ]: [ -0.5, 0.5 ],
        [ W27S ]: [ -0.5, -0.5 ], [ E27S ]: [ -0.5, 0.5 ],
        [ WSS ]: [ 0, -0.5 ], [ WSN ]: [ 0, 0.5 ],
        [ ESS ]: [ 0, 0.5 ], [ ESN ]: [ 0, -0.5 ],
    };
    const FLAG2POS_E = { // 東(右)向き ↘ , ↗
        [ W45 ]: [ 0, 0.5 ], [ E45 ]: [ 0, -0.5 ],
        [ W63 ]: [ 0, 1 ], [ E63 ]: [ 0, -1 ],
        [ W27N ]: [ 0.5, 0.5 ], [ E27N ]: [ 0.5, -0.5 ],
        [ W27S ]: [ 0.5, 0.5 ], [ E27S ]: [ 0.5, -0.5 ],
        [ WSS ]: [ 0, 0.5 ], [ WSN ]: [ 0, -0.5 ],
        [ ESS ]: [ 0, -0.5 ], [ ESN ]: [ 0, 0.5 ],
    };

    // フラグから段差の量を得るテーブル
    const FLAG2BUMP = { [ BUMP1 ]: 1, [ BUMP2 ]: 2, [ BUMP3 ]: 3 };

    // 上下方向のレイアウト
    const LAYOUT_NONE = 0;
    const LAYOUT_SINGLE = 1;
    const LAYOUT_NORTH = 8;
    const LAYOUT_CENTER = 5;
    const LAYOUT_SOUTH = 2;


    /*---- Game_CharacterBase ----*/
    /**
     * 指定方向への移動が可能か。
     * キャラクタ半分の位置が関係するものは、ここで判定。
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} d 向き(テンキー対応)
     * @returns {Boolean} 移動可能か
     */
    const _Game_CharacterBase_isMapPassable = Game_CharacterBase.prototype.isMapPassable;
    Game_CharacterBase.prototype.isMapPassable = function( halfX, halfY, d ) {
        const x = Math.floor( halfX + 0.5 );
        const y = Math.floor( halfY + 0.5 );
        const halfPos = getHalfPos( halfX, halfY );
        const dx = getDx( d );
        const dy = getDy( d );
        const rd = this.reverseDir( d );

        /**
         * 移動先の地形を調べて配置タイプを返す。
         * @param {Number} undulation 調査する高低差
         * @param {Number} d 向き(テンキー対応)
         * @returns {Number} 配置の種類( LAYOUT_NORTH, LAYOUT_CENTER, LAYOUT_SOUTH, LAYOUT_SINGLE, LAYOUT_NONE )
         */
        const getTileLayout = ( undulation, d ) => {
            const dx = getDx( d );
            const dy = getDy( d );
            if( undulation !== getUndulation( x + dx, y + dy ) ) return LAYOUT_NONE;
            if( isSamePitch( undulation, getUndulation( x + dx, y + dy - 1 ) ) ) {
                return isSamePitch( undulation, getUndulation( x + dx, y + dy + 1 ) ) ? LAYOUT_CENTER : LAYOUT_SOUTH;
            } else {
                return isSamePitch( undulation, getUndulation( x + dx, y + dy + 1 ) ) ? LAYOUT_NORTH : LAYOUT_SINGLE;
            }
        };

        const isTileLayoutNorth = ( undulation, d ) => {
            const layout = getTileLayout( undulation, d );
            return layout === LAYOUT_NORTH || layout === LAYOUT_SINGLE;
        };
        const isTileLayoutSouth = ( undulation, d ) => {
            const layout = getTileLayout( undulation, d );
            return layout === LAYOUT_SOUTH || layout === LAYOUT_SINGLE;
        };

        const thisUndulation = getUndulation( x, y );
        const isThisUndulation = undulation => thisUndulation === undulation;
        let isItPassable = null;

        // ⤾ WSU
        const isWSUPassable = () => {
            if( halfPos === 1 || halfPos === 3 ) {
                if( d === 4 ) {
                    if( getUndulation( x - 1, y ) === WSU ) return false;
                } else if( d === 6 ) {
                    if( thisUndulation === WSU ) return false;
                }
            } else if( halfPos === 0 ) {
                if( d === 2 && isThisUndulation( WSU ) ) return false;
            } else if( halfPos === 2 ) {
                if( d === 8 && isThisUndulation( WSU ) ) return false;
            }
            return null;
        };
        isItPassable = isWSUPassable();
        if( isItPassable !== null ) return isItPassable;

        // ⤾ WSN
        const isWSNPassable = () => {
            if( halfPos === 0 ) {
                if( d === 8 && ( getUndulation( x, y - 1 ) === WSN || getUndulation( x - 1, y - 1 ) === WSN ) ) return false;
            } else if( halfPos === 1 ) {
                if( d === 6 && getUndulation( x + 1, y ) === WSN ) return false;
            } else if( halfPos === 3 ) {
                if( d === 4 && ( isThisUndulation( WSN ) || getUndulation( x - 1, y ) === WSN ) ) return false;
                if( d === 6 ) {
                    if( isThisUndulation( WSN ) ) return true;
                    if( getUndulation( x + 1, y ) === WSN ) return false;
                }
            }
            return null;
        };
        isItPassable = isWSNPassable();
        if( isItPassable !== null ) return isItPassable;

        // ⤾ WSS
        const isWSSPassable = () => {
            if( halfPos === 1 ) {
                if( d === 4 && ( isThisUndulation( WSS ) || getUndulation( x - 1, y ) === WSS ) ) return false;
                if( d === 6 ) {
                    if( isThisUndulation( WSS ) ) return true;
                    if( getUndulation( x + 1, y ) === WSS ) return false;
                }
            } else if( halfPos === 2 ) {
                if( d === 2 && ( getUndulation( x - 1, y + 1 ) === WSS || getUndulation( x, y + 1 ) === WSS ) ) return false;
            } else if( halfPos === 3 ) {
                if( d === 6 && getUndulation( x + 1, y ) === WSS ) return false;
            }
            return null;
        };
        isItPassable = isWSSPassable();
        if( isItPassable !== null ) return isItPassable;

        // ⤿ ESU
        const isESUPassable = () => {
            if( halfPos === 0 ) {
                if( d === 2 && getUndulation( x - 1, y ) === ESU ) return false;
            } else if( halfPos === 1 | halfPos === 3 ) {
                if( d === 4 ) {
                    if( getUndulation( x - 1, y ) === ESU ) return true;
                } else if( d === 6 ) {
                    if( isThisUndulation( ESU ) ) return true;
                }
            } else if( halfPos === 2 ) {
                if( d === 8 && getUndulation( x - 1, y ) === ESU ) return false;
            }
            return null;
        };
        isItPassable = isESUPassable();
        if( isItPassable !== null ) return isItPassable;

        // ⤿ ESN
        const isESNPassable = () => {
            if( halfPos === 1 ) {
                if( d === 6 && getUndulation( x + 1, y ) === ESN ) return true;
            } else if( halfPos === 3 ) {
                if( d === 4 && isThisUndulation( ESN ) ) return true;
            }
            return null;
        };
        isItPassable = isESNPassable();
        if( isItPassable !== null ) return isItPassable;

        // ⤿ ESS
        const isESSPassable = () => {
            if( halfPos === 1 ) {
                if( d === 4 && isThisUndulation( ESS ) ) return true;
            } else if( halfPos === 3 ) {
                if( d === 6 && getUndulation( x + 1, y ) === ESS ) return true;
            }
            return null;
        };
        isItPassable = isESSPassable();
        if( isItPassable !== null ) return isItPassable;


        // CENTER_LINE
        const isCenterLinePassable = () => {
            if( halfPos === 0 || halfPos === 2 ) {
                if( d === 4 ) {
                    if( getUndulation( x - 1, y ) === CENTER_LINE ) return false;
                } else if( d === 6 ) {
                    if( isThisUndulation( CENTER_LINE ) ) return false;
                }
            } else if( halfPos === 1 ) {
                if( d === 8 && getUndulation( x, y - 1 ) === CENTER_LINE ) return false;
            } else if( halfPos === 3 ) {
                if( d === 2 && getUndulation( x, y + 1 ) === CENTER_LINE ) return false;
            }
            return null;
        };
        isItPassable = isCenterLinePassable();
        if( isItPassable !== null ) return isItPassable;

        // ＼ W27S
        const isW27SPassable = () => {
            if( d === 2 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutSouth( W27S, 5 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( W27S, 1 ) || isTileLayoutNorth( W27S, 2 ) || isTileLayoutSouth( W27S, 4 ) ) return false;
                    if( isTileLayoutSouth( W27S, 2 ) ) return true;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( W27S, 2 ) ) return false;
                }
            } else if( d === 4 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutNorth( W27S, 4 ) ) return false;
                } else if( halfPos === 3 ) {
                    if( getTileLayout( W27S, 4 ) === LAYOUT_NORTH ) return false;
                }
            } else if( d === 6 ) {
                if( halfPos === 1 ) {
                    if( getTileLayout( W27S, 6 ) === LAYOUT_NORTH ) return false;
                    if( isTileLayoutSouth( W27S, 6 ) ) return true;
                }
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( W27S, 7 ) || getTileLayout( W27S, 5 ) === LAYOUT_SINGLE ) return false;
                    if( isTileLayoutSouth( W27S, 4 ) ) return true;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutSouth( W27S, 8 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( W27S, 5 ) || getTileLayout( W27S, 4 ) === LAYOUT_SINGLE ) return false;
                }
            }
            return null;
        };
        isItPassable = isW27SPassable();
        if( isItPassable !== null ) return isItPassable;

        // ＼ W27N
        const isW27NPassable = () => {
            if( d === 2 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutSouth( W27N, 4 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( getTileLayout( W27N, 1 ) === LAYOUT_SOUTH ) return true;
                    if( isTileLayoutNorth( W27N, 1 ) || isTileLayoutNorth( W27N, 2 ) ||
                        isTileLayoutSouth( W27N, 2 ) || getTileLayout( W27N, 5 ) === LAYOUT_SINGLE ) return false;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( W27N, 2 ) ) return false;
                }
            } else if( d === 4 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutNorth( W27N, 4 ) ) return false;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutSouth( W27N, 4 ) ) return false;
                }
            } else if( d === 6 ) {
                if( ( halfPos === 1 || halfPos === 3 ) && getTileLayout( W27N, 6 ) === LAYOUT_SINGLE ) return true;
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( W27N, 5 ) || isTileLayoutSouth( W27N, 7 ) ) return false;
                    if( isTileLayoutSouth( W27N, 4 ) ) return true;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutSouth( W27N, 8 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( W27N, 4 ) ) return false;
                }
            }
            return null;
        };
        isItPassable = isW27NPassable();
        if( isItPassable !== null ) return isItPassable;

        // ╱ E27S
        const isE27SPassable = () => {
            if( d === 2 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutSouth( E27S, 4 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( E27S, 1 ) || isTileLayoutNorth( E27S, 2 ) ||
                        getTileLayout( E27S, 2 ) === LAYOUT_SINGLE ) return false;
                    if( isTileLayoutSouth( E27S, 1 ) ) return true;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( E27S, 2 ) ) return false;
                }
            } else if( d === 4 ) {
                if( halfPos === 1 ) {
                    if( getTileLayout( E27S, 4 ) === LAYOUT_NORTH ) return false;
                    if( isTileLayoutSouth( E27S, 4 ) ) return true;
                }
            } else if( d === 6 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutNorth( E27S, 6 ) ) return false;
                } else if( halfPos === 3 ) {
                    if( getTileLayout( E27S, 6 ) === LAYOUT_NORTH ) return false;
                }
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( E27S, 8 ) || getTileLayout( E27S, 4 ) === LAYOUT_SINGLE ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( E27S, 4 ) || getTileLayout( E27S, 5 ) === LAYOUT_SINGLE ) return false;
                }
            }
            return null;
        };
        isItPassable = isE27SPassable();
        if( isItPassable !== null ) return isItPassable;

        // ╱ E27N
        const isE27NPassable = () => {
            if( d === 2 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutSouth( E27N, 5 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( E27N, 1 ) || isTileLayoutNorth( E27N, 2 ) ||
                        getTileLayout( E27N, 4 ) === LAYOUT_SINGLE ) return false;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( E27N, 2 ) ) return false;
                }
            } else if( d === 4 ) {
                if( ( halfPos === 1 || halfPos === 3 ) && getTileLayout( E27N, 4 ) === LAYOUT_SINGLE ) return true;
            } else if( d === 6 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutNorth( E27N, 6 ) ) return false;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutSouth( E27N, 6 ) ) return false;
                }
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( E27N, 4 ) || isTileLayoutSouth( E27N, 8 ) ) return false;
                    if( isTileLayoutSouth( E27N, 5 ) ) return true;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutSouth( E27N, 8 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( E27N, 5 ) ) return false;
                }
            }
            return null;
        };
        isItPassable = isE27NPassable();
        if( isItPassable !== null ) return isItPassable;

        // ╲ W45
        const isW45Passable = () => {
            if( d === 2 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutSouth( W45, 5 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( W45, 1 ) || isTileLayoutNorth( W45, 2 ) ) return false;
                    if( isTileLayoutSouth( W45, 1 ) ) return true;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( W45, 2 ) ) return false;
                    if( isTileLayoutSouth( W45, 2 ) ) return true;
                }
            } else if( d === 4 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutNorth( W45, 4 ) ) return false;
                    if( isTileLayoutSouth( W45, 5 ) ) return true;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( W45, 4 ) ) return false;
                }
            } else if( d === 6 ) {
                if( halfPos === 3 && isTileLayoutNorth( W45, 5 ) ) return true;
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( W45, 5 ) || isTileLayoutNorth( W45, 7 ) ) return false;
                    if( isTileLayoutSouth( W45, 4 ) ) return true;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutSouth( W45, 5 ) ) return true;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( W45, 5 ) ) return false;
                }
            }
            return null;
        };
        isItPassable = isW45Passable();
        if( isItPassable !== null ) return isItPassable;

        // ╱ E45
        const isE45Passable = () => {
            if( d === 2 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutSouth( E45, 5 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( E45, 1 ) || isTileLayoutNorth( E45, 2 ) ) return false;
                    if( isTileLayoutSouth( E45, 2 ) ) return true;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( E45, 2 ) ) return false;
                    if( isTileLayoutSouth( E45, 2 ) ) return true;
                }
            } else if( d === 4 ) {
                if( halfPos === 3 && isTileLayoutNorth( E45, 5 ) ) return true;
            } else if( d === 6 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutNorth( E45, 6 ) ) return false;
                    if( isTileLayoutSouth( E45, 5 ) ) return true;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( E45, 6 ) ) return false;
                }
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( E45, 4 ) || isTileLayoutNorth( E45, 8 ) ) return false;
                    if( isTileLayoutSouth( E45, 5 ) ) return true;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutSouth( E45, 5 ) ) return true;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( E45, 5 ) ) return false;
                }
            }
            return null;
        };
        isItPassable = isE45Passable();
        if( isItPassable !== null ) return isItPassable;

        // \  W63
        const isW63Passable = () => {
            if( d === 2 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutNorth( W63, 5 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( W63, 2 ) ) return false;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( W63, 2 ) ) return false;
                    if( isTileLayoutSouth( W63, 5 ) ) return false;
                }
            } else if( d === 4 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( W63, 4 ) ) return false;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutNorth( W63, 5 ) ) return false;
                    if( isTileLayoutSouth( W63, 5 ) ) return true;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( W63, 4 ) ) return false;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutSouth( W63, 5 ) ) return true;
                }
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( W63, 5 ) || isTileLayoutSouth( W63, 8 ) ) return false;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutNorth( W63, 8 ) || isTileLayoutSouth( W63, 8 ) ) return false;
                }
            }
            return null;
        };
        isItPassable = isW63Passable();
        if( isItPassable !== null ) return isItPassable;

        //  / E63
        const isE63Passable = () => {
            if( d === 2 ) {
                if( halfPos === 1 ) {
                    if( isTileLayoutNorth( E63, 5 ) ) return false;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( E63, 1 ) ) return false;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutNorth( E63, 2 ) ) return false;
                    if( isTileLayoutSouth( E63, 5 ) ) return false;
                }
            } else if( d === 6 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( E63, 5 ) ) return false;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutNorth( E63, 5 ) ) return false;
                    if( isTileLayoutSouth( E63, 5 ) ) return true;
                } else if( halfPos === 2 ) {
                    if( isTileLayoutNorth( E63, 5 ) ) return false;
                } else if( halfPos === 3 ) {
                    if( isTileLayoutSouth( E63, 5 ) ) return true;
                }
            } else if( d === 8 ) {
                if( halfPos === 0 ) {
                    if( isTileLayoutNorth( E63, 4 ) ) return false;
                } else if( halfPos === 1 ) {
                    if( isTileLayoutNorth( E63, 8 ) || isTileLayoutSouth( E63, 8 ) ) return false;
                }
            }
            return null;
        };
        isItPassable = isE63Passable();
        if( isItPassable !== null ) return isItPassable;

        return _Game_CharacterBase_isMapPassable.apply( this, arguments );
    };

    /**
     * 移動から停止・停止から移動に切り替わったタイミングを調べる。
     */
    const _Game_CharacterBase_updateMove = Game_CharacterBase.prototype.updateMove;
    Game_CharacterBase.prototype.updateMove = function() {
        if( this instanceof Game_Follower ) {
            // TODO: followerをスムースに動かすための処理を入れる。
        }

        const preRealX = this._realX;
        const tileX = ( preRealX + 0.5 ) % 1;
        const isW = this.x < preRealX;
        let undulation = getUndulation( Math.floor( this._realX + 0.5 ), Math.floor( this._realY + 0.5 ) );
        if( undulation === -2 || undulation === WSU || undulation === ESU ) {
            // 縦方向の階段(U字型螺旋)
            if( this._realY != this.y ) this._realY += this.distancePerFrame() * ( ( this.y < this._realY ) ? resistA : -resistA );
        } else if( ( undulation === 0 || undulation & MASK_UNDULATION ) && this._realX != this.x ) {
            // 横方向の階段
            _isStairMove = true;
            const ratioXY = isW ? FLAG2RATIO_W[ undulation ] : FLAG2RATIO_E[ undulation ];
            if( ratioXY && !( ( undulation === W63 && 0.5 < tileX ) || ( undulation === E63 && tileX < 0.5 ) ) ) {
                this._realX += this.distancePerFrame() * ratioXY[ 0 ];
                this._realY += this.distancePerFrame() * ratioXY[ 1 ];
            }
        }

        _Game_CharacterBase_updateMove.call( this );
        _isStairMove = false;

        if( preRealX === this.x || this._realX === this.x ) return;

        undulation = getUndulation( Math.floor( this._realX + 0.5 ), Math.floor( this._realY + 0.5 ) );
        if( undulation < 0 || undulation & MASK_BUMP || ( preRealX * 2 ) !== Math.floor( preRealX * 2 ) ) return;

        const targetPos = isW ? FLAG2POS_W[ undulation ] : FLAG2POS_E[ undulation ];
        if( targetPos === undefined ) return;

        // 角度63の坂は半分だけ動かす
        if( undulation === W63 ) {
            if( isW ) {
                if( tileX === 0 ) return;
            } else {
                if( tileX === 0.5 ) return;
            }
        } else if( undulation === E63 ) {
            if( isW ) {
                if( tileX === 0.5 ) return;
            } else {
                if( tileX === 0 ) return;
            }
        }

        //動き始め
        this._x = $gameMap.roundX( this._x + targetPos[ 0 ] );
        this._y = $gameMap.roundY( this._y + targetPos[ 1 ] );
        this._realY = this._y - targetPos[ 1 ];
    };


    /**
     * 縦にずらすピクセル数を返す。
     * @returns {Number} 
     */
    const _Game_CharacterBase_shiftY = Game_CharacterBase.prototype.shiftY;
    Game_CharacterBase.prototype.shiftY = function() {
        const shiftY = _Game_CharacterBase_shiftY.call( this );
        let tileX = ( this._realX + 0.5 ) % 1;
        const x = Math.floor( this._realX + 0.5 );
        const y = Math.floor( this._realY + 0.5 );
        const undulationL = ( tileX === 0 ) ? getUndulation( x - 1, y ) : -1;
        const undulationR = getUndulation( x, y );
        if( undulationL & MASK_BUMP || undulationR & MASK_BUMP ) {
            const dYL = getBump( undulationL );
            const dYR = getBump( undulationR );
            return shiftY + Math.max( dYL, dYR );
        }
        return shiftY;
    };

    /**
     * 斜め移動中か(階段の上の場合は斜め移動とみなさない)
     * @returns {Boolean} 
     */
    let _isStairMove = false;
    const _Game_CharacterBase_isMovingDiagonal = Game_CharacterBase.prototype.isMovingDiagonal;
    Game_CharacterBase.prototype.isMovingDiagonal = function() {
        return _isStairMove ? false : _Game_CharacterBase_isMovingDiagonal.apply( this, arguments );
    };


    /*---- Game_Player ----*/
    /**
     * 階段の上の場合、4方向移動に固定。
     * @param {Number} d 向き(テンキー対応)
     */
    const _Game_Player_executeMove = Game_Player.prototype.executeMove;
    Game_Player.prototype.executeMove = function( d ) {
        const tmpD = checkAloundUndulationFlag( this.x, this.y, d );
        if( tmpD === -1 ) {
            _Game_Player_executeMove.apply( this, arguments );
        } else {
            this.moveStraight( tmpD );
        }
    };

    /*---- Game_Map ----*/
    /**
     * 指定位置の指定方向が通行可か。
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} d 向き(テンキー対応)
     * @returns {Boolean} 
     */
    const _Game_Map_isPassable = Game_Map.prototype.isPassable;
    Game_Map.prototype.isPassable = function( x, y, d ) {
        if( this.terrainTag( x, y ) !== terrainTag ) return _Game_Map_isPassable.apply( this, arguments );

        const undulation = getUndulation( x, y );

        // 横向き階段の南が同じタイルで繋がっている場合は通行可
        if( TYPE_SIDE_STAIRS.includes( undulation ) && isSamePitch( undulation, getUndulation( x, y + 1 ) ) ) return true;

        return _Game_Map_isPassable.apply( this, arguments );
    };


    // 地形タグ0設定されていれば処理を無視
    const _Game_Map_isLadder = Game_Map.prototype.isLadder;
    Game_Map.prototype.isLadder = function( x, y ) {
        if( isBump( x, y ) ) return false;
        return _Game_Map_isLadder.apply( this, arguments );
    };

    const _Game_Map_isDamageFloor = Game_Map.prototype.isDamageFloor;
    Game_Map.prototype.isDamageFloor = function( x, y ) {
        if( isBump( x, y ) ) return false;
        return _Game_Map_isDamageFloor.apply( this, arguments );
    };



    /*---- Game_Follower ----*/
    /**
     * ひとつ前のキャラを追いかける。
     * @param {Game_Character} character 追いかけるキャラ
     */
    const _Game_Follower_chaseCharacter = Game_Follower.prototype.chaseCharacter;
    Game_Follower.prototype.chaseCharacter = function( character ) {
        const d = Math.sign( this.deltaYFrom( character.y ) ) * 3 - Math.sign( this.deltaXFrom( character.x ) ) + 5;
        const tmpD = checkAloundUndulationFlag( this.x, this.y, d );
        if( tmpD === -1 ) {
            _Game_Follower_chaseCharacter.apply( this, arguments );
            return;
        }
        if( tmpD !== 5 ) this.moveStraight( tmpD );
        this.setMoveSpeed( $gamePlayer.realMoveSpeed() );
    };


    /*---- ユーティリティ関数 ----*/
    /**
     * 指定位置に高低差flagがあれば返す。
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} undulation 調べるタイルのflag
     * @returns {Boolean} 見つかったflag、見つからない場合は-1、遅延タイルは-2
     */
    function getUndulation( x, y ) {
        x = Math.floor( $gameMap.roundX( x ) );
        y = Math.floor( $gameMap.roundY( y ) );
        const flags = $gameMap.tilesetFlags();
        const tiles = $gameMap.allTiles( x, y );

        for( let i = 0; i < tiles.length; i++ ) {
            const flag = flags[ tiles[ i ] ];
            const terrainTag = flag >> 12;
            if( terrainTag === 0 ) continue;
            if( terrainTag === terrainTag ) {
                const bump = ( flag & MASK_BUMP );
                if( bump ) return bump;
                return flag & MASK_UNDULATION;
            } else if( terrainTag === terrainTagSN ) {
                return -2;
            }
        }
        return -1;
    }


    /**
     * 高低差flagのあるタイル周辺か。
     * @param {Number} x タイル数
     * @param {Number} y タイル数
     * @param {Number} d 向き(テンキー対応)
     * @returns {Number} 高低差flagのあるタイル周辺だと向き、そうでないと-1を返す
     */
    function checkAloundUndulationFlag( x, y, d ) {
        const tmpD = [ 0, 4, 2, 6, 4, 5, 6, 4, 8, 6 ][ d ];
        let halfPos = getHalfPos( x, y );
        x += 0.5;
        y += 0.5;

        // 足元が高低差タイル
        const undulation = ( () => {
            const undulation = getUndulation( x, y );
            if( FLAG2RATIO_W[ undulation ] ) return undulation;

            if( halfPos === 0 || halfPos === 2 ) {
                const undulation = getUndulation( x - 1, y );
                if( FLAG2RATIO_W[ undulation ] ) {
                    halfPos += 4;
                    return undulation;
                }
            }
            return -1;
        } )();

        // 周辺が高低差タイル
        if( undulation === -1 ) {
            if( halfPos === 0 ) {
                if( FLAG2RATIO_W[ getUndulation( x, y - 1 ) ] ) return tmpD;
                if( FLAG2RATIO_W[ getUndulation( x - 1, y - 1 ) ] ) return tmpD;
            } else if( halfPos === 1 ) {
                if( FLAG2RATIO_W[ getUndulation( x - 1, y ) ] ) return tmpD;
                if( FLAG2RATIO_W[ getUndulation( x + 1, y ) ] ) return tmpD;
                if( FLAG2RATIO_W[ getUndulation( x, y - 1 ) ] ) return tmpD;
            } else if( halfPos === 2 ) {
                if( FLAG2RATIO_W[ getUndulation( x, y + 1 ) ] ) return tmpD;
            } else if( halfPos === 3 ) {
                if( FLAG2RATIO_W[ getUndulation( x - 1, y ) ] ) return tmpD;
                if( FLAG2RATIO_W[ getUndulation( x + 1, y ) ] ) return tmpD;
                if( FLAG2RATIO_W[ getUndulation( x, y + 1 ) ] ) return tmpD;
                if( FLAG2RATIO_W[ getUndulation( x - 1, y + 1 ) ] ) return tmpD;
            }
            return -1;
        }

        // 螺旋階段
        if( undulation === WSN ) {
            if( halfPos === 4 && tmpD === 2 ) return 4;
            if( halfPos === 3 && tmpD === 8 ) return 6;
        } else if( undulation === WSS ) {
            if( halfPos === 1 && tmpD === 2 ) return 6;
            if( halfPos === 6 && tmpD === 8 ) return 4;
        } else if( undulation === ESN ) {
            if( halfPos === 0 && tmpD === 2 ) return 6;
            if( halfPos === 3 && tmpD === 8 ) return 4;
        } else if( undulation === ESS ) {
            if( halfPos === 1 && tmpD === 2 ) return 4;
            if( halfPos === 2 && tmpD === 8 ) return 6;
        }
        return tmpD;
    }

    /**
     * 27°の高低差タイプを角度基準で正規化して返す。
     * @param {Nubmer} undulation 高低差タイプ
     */
    function normalizByPitch( undulation ) {
        if( undulation === W27S ) return W27N;
        if( undulation === E27S ) return E27N;
        return undulation;
    }

    /**
     * 指定したふたつの高低差タイプが同じ角度か。
     * @param {Nubmer} undulationA 高低差タイプ
     * @param {Nubmer} undulationB 高低差タイプ
     * @returns {Boolean} 同じ角度か
     */
    function isSamePitch( undulationA, undulationB ) {
        return normalizByPitch( undulationA ) === normalizByPitch( undulationB );
    };


    /**
     * 段差指定フラグに応じた段差を返す。
     * @param {Number} undulation 段差指定フラグ
     * @returns {Number} 段差(ピクセル)
     */
    function getBump( undulation ) {
        const bump = FLAG2BUMP[ undulation ];
        return bump ? ( bump * baseBump ) : 0;
    }

    /**
     * 段差タイルの範囲内か。
     * @param {Number} x x座標(小数点以下を含むタイル数)
     * @param {Number} y y座標(小数点以下を含むタイル数)
     * @returns {Boolean} 
     */
    function isBump( x, y ) {
        if( getUndulation( x, y ) !== -1 ) return true;
        const isHalfX = ( x % 1 ) !== 0;
        if( isHalfX && getUndulation( x + 1, y ) !== -1 ) return true;
        const isHalfY = ( y % 1 ) !== 0;
        if( isHalfY && getUndulation( x, y + 1 ) !== -1 ) return true;
        if( isHalfX && isHalfY && getUndulation( x + 1, y + 1 ) !== -1 ) return true;
        return false;
    }

    /**
     * タイル内の位置を返す( 0:左上, 1:上, 2:左下, 3:下 )
     * @param {Number} x x座標(タイル数)
     * @param {Number} y y座標(タイル数)
     */
    function getHalfPos( x, y ) {
        return ( ( ( x % 1 ) === 0 ) ? 1 : 0 ) + ( ( ( y % 1 ) === 0 ) ? 2 : 0 );
    }
    /**
     * 指定方向のX要素を返す。
     * @param {Number} d 方向(テンキー対応)
     */
    function getDx( d ) {
        if( d === 1 || d === 4 || d === 7 ) {
            return -1;
        } else if( d === 3 || d === 6 || d === 9 ) {
            return 1;
        }
        return 0;
    }
    /**
     * 指定方向のY要素を返す。
     * @param {Number} d 方向(テンキー対応)
     */
    function getDy( d ) {
        if( d === 7 || d === 8 || d === 9 ) {
            return -1;
        } else if( d === 1 || d === 2 || d === 3 ) {
            return 1;
        }
        return 0;
    }
} )();
