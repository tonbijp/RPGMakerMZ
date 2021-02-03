[クラスツリー](index.md)

# クラス: [Tilemap](Tilemap.md).Renderer

## 継承元: [PIXI.ObjectRenderer](http://pixijs.download/release/docs/PIXI.ObjectRenderer.html)

### new Tilemap.Renderer ()
レンダラ。

関連クラス: [RPG.Map](RPG.Map.md), [RPG.Tileset](RPG.Tileset.md), [Game_Map](Game_Map.md), [Spriteset_Map](Spriteset_Map.md), [Tilemap.Layer](Tilemap.Layer.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_shader` | [PIXI.Shader](http://pixijs.download/release/docs/PIXI.Shader.html) | シェーダ |
| `_images` | [Array](Array.md)&lt;[image](image.md)&gt; | 画像の配列 |
| `_internalTextures` | [Array](Array.md)&lt;[PIXI.BaseRenderTexture](http://pixijs.download/release/docs/PIXI.BaseRenderTexture.html)&gt; | テクスチャ |
| `_clearBuffer` | [Uint8Array](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | バッファ |


### 継承されたメソッド

#### [PIXI.ObjectRenderer](http://pixijs.download/release/docs/PIXI.ObjectRenderer.html)

* [flush ()](http://pixijs.download/release/docs/PIXI.ObjectRenderer.html#flush)
* [render (object)](http://pixijs.download/release/docs/PIXI.ObjectRenderer.html#render)
* [start ()](http://pixijs.download/release/docs/PIXI.ObjectRenderer.html#start)
* [stop ()](http://pixijs.download/release/docs/PIXI.ObjectRenderer.html#stop)

### メソッド

### _createVao ()
VAOの生成。


### _createShader () → {[PIXI.Shader](PIXI.Shader.md)}
シェーダの生成。


### _createInternalTextures ()
内部テクスチャの生成。


### _destroyInternalTextures()
内部テクスチャの破棄。


#### destroy ()
オーバーライド: [PIXI.ObjectRenderer](http://pixijs.download/release/docs/PIXI.ObjectRenderer.html#destroy)


#### initialize ()
オーバーライド: [PIXI.ObjectRenderer](http://pixijs.download/release/docs/PIXI.ObjectRenderer.html#initialize)


### getShader () → {[PIXI.Shader](PIXI.Shader.md)}
シェーダを得る。

### contextChange ()
コンテクストを変更。


### updateTextures (renderer, images) 
テクスチャのアップデート。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `renderer` |  [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) | レンダラ |
| `images` | [Array](Array.md)&lt;[Bitmap](Bitmap.md)&gt; |  画像の配列 |


### bindTextures (renderer)
テクスチャを結びつける。

##### 引数:

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `renderer` |  [PIXI.Renderer](http://pixijs.download/release/docs/PIXI.Renderer.html) | レンダラ |
