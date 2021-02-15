[クラスツリー](index.md)

# クラス: Sprite_Battleback

## スーパークラス: [TilingSprite](TilingSprite.md)

### new Sprite_Battleback (type)
**@MZ** 戦闘背景用のスプライト。

関連クラス: [Spriteset_Battle](Spriteset_Battle.md)

#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md) | タイプ(0:battlebacks1, 1:battlebacks2) |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `bitmap` | [Bitmap](Bitmap.md) | タイル用画像 |
| `opacity` | [Number](Number.md) | 不透明度 (0 〜 255). |
| `spriteId` | [Number](Number.md) | スプライトID |
| `origin` | [Point](Point.md) | スクロールの原点 |
| `x` | [Number](Number.md) | x座標(ピクセル数) |
| `y` | [Number](Number.md) | y座標(ピクセル数) |
| `_bitmap` | [Bitmap](Bitmap.md) | タイル用画像 |
| `_width` | [Number](Number.md) | 幅 |
| `_height` | [Number](Number.md) | 高さ |
| `_frame` | [Rectangle](Rectangle.md) | 枠 |


### 廃止MVプロパティ
`visibility` 


### スーパークラスから継承されたメソッド

#### [TilingSprite](TilingSprite.md)

* [destroy ()](TilingSprite.md#destroy-)
* [initialize (bitmap)](TilingSprite.md#initialize-bitmap)
* [move (x, y, width, height)](TilingSprite.md#move-x-y-width-height)
* [setFrame (x, y, width, height)](TilingSprite.md#setframe-x-y-width-height)
* [update ()](TilingSprite.md#update-)
* [updateTransform ()](TilingSprite.md#updatetransform-)


### メソッド

#### adjustPosition ()
位置を調整。


#### autotileType (z) → {[Number](Number.md)}
現在地のオートタイルのタイプ(オートタイルでない場合は-1)を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `z` | [Number](Number.md) | 重なり(0〜3) |


#### battleback1Bitmap () → {[Bitmap](Bitmap.md)}
背景画像1を返す。


#### battleback2Bitmap () → {[Bitmap](Bitmap.md)}
背景画像2を返す。


#### battleback1Name () → {[String](String.md)}
背景画像1の名前を返す。


#### battleback2Name () → {[String](String.md)}
背景画像2の名前を返す。


#### defaultBattleback1Name () → {[String](String.md)}
背景画像1の名前の規定値("Grassland")を返す。


#### defaultBattleback2Name () → {[String](String.md)}
背景画像2の名前の規定値("Grassland")を返す。


#### initialize (type)
 オブジェクト生成時の初期化。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md) | タイプ(0:battlebacks1, 1:battlebacks2) |


#### normalBattleback1Name () → {[String](String.md)}
ワールドマップ上での通常の背景画像1の名前を返す。


#### normalBattleback2Name () → {[String](String.md)}
ワールドマップ上での通常の背景画像2の名前を返す。


#### overworldBattleback1Name () → {[String](String.md)}
ワールドマップ上での背景画像1の名前を返す。


#### overworldBattleback2Name () → {[String](String.md)}
ワールドマップ上での背景画像2の名前を返す。


#### shipBattleback1Name () → {[String](String.md)}
海上の背景画像1の名前("Ship")を返す。


#### shipBattleback2Name () → {[String](String.md)}
海上の背景画像2の名前("Ship")を返す。


#### terrainBattleback1Name (type) → {[String](String.md)}
指定タイプのワールドマップ上での通常の背景画像1の名前を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md) | 地形タイプ |

| `type` | 背景名 |
| --- | --- |
| 4,5 | "PoisonSwamp" |
| 24,25 | "Wasteland" |
| 26,27 | "DirtField" |
| 32,33 | "Desert" |
| 34 | "Lava1" |
| 35 | "Lava2" |
| 40,41 | "Snowfield" |
| 42 | "Clouds" |


#### terrainBattleback2Name (type) → {[String](String.md)}
指定タイプのワールドマップ上での通常の背景画像2の名前を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md) | 地形タイプ |

| `type` | 背景名 |
| --- | --- |
| 4,5 | "PoisonSwamp" |
| 20,21 | "Forest" |
| 22,30,38 | "Cliff" |
| 24,25,26,27 | "Wasteland" |
| 32,33 | "Desert" |
| 34,35 | "Lava" |
| 40,41 | "Snowfield" |
| 42 | "Clouds" |