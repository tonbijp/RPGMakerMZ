[クラスツリー](index.md)

# クラス: Sprite_Battleback

## スーパークラス: [TilingSprite](TilingSprite.md)

**@MZ** 戦闘[背景]用のスプライト。

* レイヤー奥の戦闘背景画像1(地面)
* レイヤー手前の戦闘背景画像2(壁)

上記2枚の画像が組み合わされて戦闘背景となる。

関連クラス: [Spriteset_Battle](Spriteset_Battle.md), [Scene_Battle](Scene_Battle.md)

### new Sprite_Battleback (type)
#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `type` | [Number](Number.md) | タイプ(0:battlebacks1, 1:battlebacks2) |


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
指定のタイル上での通常の戦闘背景画像1の名前を返す。
タイルセットのタイプに[フィールドタイプ]が設定されている場合に使われる。

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
指定のタイル上での通常の戦闘背景画像2の名前を返す。
タイルセットのタイプに[フィールドタイプ]が設定されている場合に使われる。

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
