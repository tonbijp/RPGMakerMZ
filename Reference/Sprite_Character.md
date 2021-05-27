[クラスツリー](index.md)

# クラス: Sprite_Character

## スーパークラス: [Sprite](Sprite.md)


| データベース | JSONデータ | オブジェクト |
| --- | --- | --- 
|||[Game_Character](Game_Character.md) |
| [アクター] | [RPG.Actor](RPG.Actor.md) | [Game_Actor](Game_Actor.md) |
| [プレイヤー] | 〃 | [Game_Player](Game_Player.md) |
| [フォロワー] | 〃 | [Game_Follower](Game_Follower.md) |
| [イベント] | [RPG.Event](RPG.Event.md) |[Game_Event](Game_Event.md) |
| [乗り物] | [RPG.System.Vehicle](RPG.System.Vehicle.md) | [Game_Vehicle](Game_Vehicle.md) |

マップ上のキャラクタを表示するスプライト。

MV で継承元(スーパークラス)だった Sprite_Base は廃止されている。<br />
またフキダシ関連は [Spriteset_Map](Spriteset_Map.md) で管理するように変更されている。

主なパス
```js
SceneManager._scene._spriteset._characterSprites[n]
SceneManager._scene._spriteset._tilemap.children[n]

// Sprite_Character から JSONデータを取り出す
$gameParty.leader().actor() // Game_Player
this._character.actor().actor() // Game_Follower
this._character.event(); // Game_Event
this._character.vehicle(); // Game_Vehicle
```

関連クラス: [Scene_Map](Scene_Map.md), [Sprite_Actor](Sprite_Actor.md), [Tilemap](Tilemap.md), [Spriteset_Map](Spriteset_Map.md)

### new Sprite_Character (character)
#### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタデータ |


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_character` | [Game_Character](Game_Character.md) | キャラクタデータ |
| `_balloonDuration` | [Number](Number.md) | フキダシの継続時間(未使用) |
| `_tilesetId` | [Number](Number.md) | タイルセットID |
| `_upperBody` | [Sprite](Sprite.md) | 上半身 |
| `_lowerBody` | [Sprite](Sprite.md) | 下半身 |
| `_bushDepth` | [Number](Number.md) | 茂みの深さ(ピクセル) |

### 廃止MVプロパティ
`_balloonSprite`

### スーパークラスから継承されたメソッド

#### [PIXI.DisplayObject](PIXI.DisplayObject.md)

* [(static) mixin (source)](PIXI.DisplayObject.md#static-mixin-source)
* [\_recursivePostUpdateTransform ()](PIXI.DisplayObject.md#_recursivepostupdatetransform-)
* [displayObjectUpdateTransform ()](PIXI.DisplayObject.md#displayobjectupdatetransform-)
* [getBounds (skipUpdate, rect)](PIXI.DisplayObject.md#getbounds-skipupdate-rect--pixirectangle)
* [getGlobalPosition (point, skipUpdate)](PIXI.DisplayObject.md#getglobalposition-point-skipupdate--pixipoint)
* [setParent (container)](PIXI.DisplayObject.md#setparent-container--pixicontainer)
* [setTransform (x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY)](PIXI.DisplayObject.md#settransform-x-y-scalex-scaley-rotation-skewx-skewy-pivotx-pivoty--pixidisplayobject)
* [toGlobal (position, point, skipUpdate)](PIXI.DisplayObject.md#toglobal-position-point-skipupdate--pixipoint)
* [toLocal (position, from, point, skipUpdate)](PIXI.DisplayObject.md#tolocal-position-from-point-skipupdate--pixipoint)

#### [PIXI.Container](PIXI.Container.md)

* [addChild (child) ](PIXI.Container.md#addchild-child--pixidisplayobject)
* [addChildAt (child, index)](PIXI.Container.md#addchildat-child-index--pixidisplayobject)
* [calculateBounds ()](PIXI.Container.md#calculatebounds-)
* [getChildAt (index)](PIXI.Container.md#getchildat-index--pixidisplayobject)
* [getChildByName (name)](PIXI.Container.md#getchildbyname-name--pixidisplayobject)
* [getChildIndex (child)](PIXI.Container.md#getchildindex-child--pixidisplayobject)
* [onChildrenChange ()](PIXI.Container.md#onchildrenchange-)
* [removeChild (child)](PIXI.Container.md#removechild-child--pixidisplayobject)
* [removeChildAt (index)](PIXI.Container.md#removechildat-index--pixidisplayobject)
* [removeChildren (beginIndex, endIndex)](PIXI.Container.md#removechildren-beginindex-endindex--arraypixidisplayobject)
* [render (renderer)](PIXI.Container.md#render-renderer)
* [renderAdvanced (renderer)](PIXI.Container.md#renderadvanced-renderer)
* [_renderCanvas (renderer)](PIXI.Container.md#_rendercanvas-renderer)
* [setChildIndex (child, index)](PIXI.Container.md#setchildindex-child-index)
* [sortChildren ()](PIXI.Container.md#sortchildren-)
* [swapChildren (child, child2)](PIXI.Container.md#swapchildren-child-child2)
* [updateTransform ()](PIXI.Container.md#updatetransform-)

#### [PIXI.Sprite](PIXI.Sprite.md)

* [(static) from (source, options)](PIXI.Sprite.md#static-from-source-options--pixisprite)
* [\_calculateBounds ()](PIXI.Sprite.md#_calculatebounds-)
* [\_render (renderer)](PIXI.Sprite.md#_render-renderer)
* [calculateTrimmedVertices ()](PIXI.Sprite.md#calculatetrimmedvertices-)
* [calculateVertices ()](PIXI.Sprite.md#calculatevertices-)
* [containsPoint (point)](PIXI.Sprite.md#containspoint-point--boolean)
* [getLocalBounds (rect)](PIXI.Sprite.md#getlocalbounds-rect--pixirectangle)
* [renderCanvas (renderer)](PIXI.Sprite.md#rendercanvas-renderer)

#### [Sprite](Sprite.md)

* [destroy ()](Sprite.md#destroy-)
* [getBlendColor ()](Sprite.md#getblendcolor---mvcolor)
* [getColorTone ()](Sprite.md#getcolortone---mvcolor)
* [hide ()](Sprite.md#hide-)
* [move (x, y)](Sprite.md#Sprite.md#move-x-y)
* [setBlendColor (color)](Sprite.md#setblendcolor-color)
* [setColorTone (tone)](Sprite.md#setcolortone-tone)
* [setFrame (x, y, width, height)](Sprite.md#setframe-x-y-width-height)
* [setHue (hue)](Sprite.md#sethue-hue)
* [show ()](Sprite.md#show-)
* [updateVisibility ()](Sprite.md#updatevisibility-)



### メソッド

#### checkCharacter (character)→ {boolean}
**@MZ** 指定キャラクタが設定されているか。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタ |


#### characterBlockX () → {[Number](Number.md)}
ブロックの x座標を返す。


#### characterBlockY () → {[Number](Number.md)}
ブロックの y座標を返す。


#### characterPatternX () → {[Number](Number.md)}
キャラパターンの x座標を返す。


#### characterPatternY () → {[Number](Number.md)}
キャラパターンの y座標を返す。


#### createHalfBodySprites ()
半分のスプライトを生成。


#### initialize (character)
オーバーライド:[Sprite](Sprite.md#initialize-)

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタデータ |


#### initMembers ()
メンバ変数の初期化。


#### isEmptyCharacter () → {Boolean}
**@MZ** キャラクタ画像が未設定か


#### isImageChanged () → {Boolean}
画像が切り替わったか。


#### isObjectCharacter ()→ {boolean}
**@MZ** オブジェクトキャラクタ(characters フォルダ以下)の画像か。


#### isTile () → {boolean}
タイルの上に乗っている(0 < tileID)か。


#### patternHeight () → {[Number](Number.md)}
パターンの高さ(ピクセル)を返す。


#### patternWidth () → {[Number](Number.md)}
パターンの幅(ピクセル)を返す。


#### setCharacter (character)
キャラクタを再設定。コンストラクタに渡す値と同じ。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `character` | [Game_Character](Game_Character.md) | キャラクタ |


#### setCharacterBitmap ()
キャラクタの画像を設定。


#### setTileBitmap ()
タイル画像を設定。


#### tilesetBitmap (tileId) → {[Bitmap](Bitmap.md)}
指定タイルIDのタイルセット画像(ビットマップ)を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `tileId` | [Number](Number.md) | タイルID |


#### update ()
オーバーライド: [Sprite](Sprite.md#update-)


#### updateBitmap ()
ビットマップを更新。


#### updateCharacterFrame ()
キャラクタのフレームを更新。


#### updateFrame ()
フレームを更新。


#### updateHalfBodySprites ()
半分のスプライトを更新。


#### updateOther ()
その他の更新。


#### updatePosition ()
キャラクタの位置を更新。


#### updateTileFrame ()
タイルのフレームを更新。


#### updateVisibility ()
オーバーライド: [Sprite](Sprite.md#updateVisibility-)


### 廃止MVメソッド
endBalloon (), isBalloonPlaying (), setupAnimation (), setupBalloon (), startBalloon (), updateAnimation (), updateBalloon ()

