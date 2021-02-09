[クラスツリー](index.md)

# クラス: [RPG](RPG.md).MoveCommand
[移動コマンド]を構成する JSONデータ。

[RPG.MoveRoute](RPG.MoveRoute.md) の list に配列として含まれる。


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `code` | [Number](Number.md) | [コマンドのコード番号](#コマンドのコード番号) |
| `parameters` | [Array](Array.md).&lt;[String](String.md)&gt; | コマンド毎に必要な引数 |

#### コマンドのコード番号
[Game_Character](Game_Character.md) のプロパティに定数が定義してあるので、実際に使用する際は <code>Game_Character.ROUTE_END</code> のように記述する。

なお、**太字** や <u>下線</u> といった強調表示は「これはよく使うよなー」という個人的なメモみたいなやつで、特に文法的意味などはない。

| code | 定数 | [移動コマンド]  |
| --- | --- | --- |
| 0 | `ROUTE_END` | 終端   |
| 1 | `ROUTE_MOVE_DOWN` | <u>**下に移動**</u>   |
| 2 | `ROUTE_MOVE_LEFT` | <u>**左に移動**</u>   |
| 3 | `ROUTE_MOVE_RIGHT` | <u>**右に移動**</u>   |
| 4 | `ROUTE_MOVE_UP` | <u>**上に移動**</u>   |
| 5 | `ROUTE_MOVE_LOWER_L` | 左下に移動   |
| 6 | `ROUTE_MOVE_LOWER_R` | 右下に移動   |
| 7 | `ROUTE_MOVE_UPPER_L` | 左上に移動   |
| 8 | `ROUTE_MOVE_UPPER_R` | 右上に移動   |
| 9 | `ROUTE_MOVE_RANDOM` | ランダムに移動   |
| 10 | `ROUTE_MOVE_TOWARD` | プレイヤーに近づく   |
| 11 | `ROUTE_MOVE_AWAY` | プレイヤーから遠ざかる   |
| 12 | `ROUTE_MOVE_FORWARD` | 一歩前進   |
| 13 | `ROUTE_MOVE_BACKWARD` | 一歩後退   |
| 14 | `ROUTE_JUMP` | <u>ジャンプ…</u>   |
| 15 | `ROUTE_WAIT` | **ウェイト…**   |
| 16 | `ROUTE_TURN_DOWN` | <u>下を向く</u>( 場所移動イベントの位置設定:向き )   |
| 17 | `ROUTE_TURN_LEFT` | <u>左を向く</u>( 〃 )   |
| 18 | `ROUTE_TURN_RIGHT` | <u>右を向く</u>( 〃 )   |
| 19 | `ROUTE_TURN_UP` | <u>上を向く</u>( 〃 )   |
| 20 | `ROUTE_TURN_90D_R` | 右に90度回転   |
| 21 | `ROUTE_TURN_90D_L` | 左に90度回転   |
| 22 | `ROUTE_TURN_180D` | 180度回転   |
| 23 | `ROUTE_TURN_90D_R_L` | 右か左に90度回転   |
| 24 | `ROUTE_TURN_RANDOM` | ランダムに方向転換   |
| 25 | `ROUTE_TURN_TOWARD` | プレイヤーの方を向く   |
| 26 | `ROUTE_TURN_AWAY` | プレイヤーの逆を向く   |
| 27 | `ROUTE_SWITCH_ON` | <u>スイッチON…</u>   |
| 28 | `ROUTE_SWITCH_OFF` | <u>スイッチOFF…</u>   |
| 29 | `ROUTE_CHANGE_SPEED` | **移動速度の変更…**( EV設定:自律移動 )   |
| 30 | `ROUTE_CHANGE_FREQ` | 移動頻度の変更…( 〃 )   |
| 31 | `ROUTE_WALK_ANIME_ON` | 歩行アニメON( EV設定:オプション )   |
| 32 | `ROUTE_WALK_ANIME_OFF` | 歩行アニメOFF( 〃 )   |
| 33 | `ROUTE_STEP_ANIME_ON` | 足踏みアニメON( 〃 )   |
| 34 | `ROUTE_STEP_ANIME_OFF` | 足踏みアニメOFF( 〃 )   |
| 35 | `ROUTE_DIR_FIX_ON` | 向き固定ON( 〃 )   |
| 36 | `ROUTE_DIR_FIX_OFF` | 向き固定OFF( 〃 )   |
| 37 | `ROUTE_THROUGH_ON` | すり抜けON( 〃 )   |
| 38 | `ROUTE_THROUGH_OFF` | すり抜けOFF( 〃 )   |
| 39 | `ROUTE_TRANSPARENT_ON` | 透明化ON   |
| 40 | `ROUTE_TRANSPARENT_OFF` | 透明化OFF   |
| 41 | `ROUTE_CHANGE_IMAGE` | <u>画像の変更…</u>( EV設定:画像 \| アクターの画像変更…)   |
| 42 | `ROUTE_CHANGE_OPACITY` | 不透明度の変更…   |
| 43 | `ROUTE_CHANGE_BLEND_MODE` | 合成方法の変更…   |
| 44 | `ROUTE_PLAY_SE` | <u>SEの演奏…</u>   |
| 45 | `ROUTE_SCRIPT` | <u>スクリプト…</u>   |