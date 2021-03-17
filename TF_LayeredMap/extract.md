# TF_LayeredMap.js 概要

* ローディング後に DataMap を書き換えている。
* 重要なのは地形フラグ( flags )で、詳細は [RPG.Tileset](../Reference/RPG.Tileset.md)


### [Tilemap](../Reference/Tilemap.md) で書き換えているメソッド

* _isOverpassPosition	その位置が立体交差であるかチェック(地形タグで決定)
* _compareChildOrder	イベントの重なりのソート用関数
* _createLayers	書き割りレイヤーの生成と追加。
* _addAllSpots	描画前に書き割りの中を空にしておく。
* _addSpot	タイル描画の振り分けを行う。
* TF_addSpotTile を _addSpotTile の前に挟んでいる。
	 * getWallSideType	指定位置の壁の状態を調べる。
	 * getPriorityFloor 優先階(priorityFloor)を得る。
	 * getFloorNumber 表示階(floorNumber)を得る。
* updateTransform	(スクロールに合わせて)書き割りの表示位置を変更

### [DataManager](../Reference/DataManager.md) で書き換えているメソッド

* onLoad	読み込み直後に、タイルセットデータを書き換える。
	* isCounterTile	カウンター設定か。
	* isOverpassTile	指定タイルが立体交差地形タグを持っているか。
	* isCollisionTile	指定タイルが衝突判定を持っているか。
	* treatA2Tilesets		A2タイルの走査・変更。
	* treatA3Tilesets		A3タイルの走査・変更。
	* treatA4Tilesets		A4タイルの走査・変更。
	* replaceCollision	衝突判定を指定した設定に変換。
	* setAutoUpperPass	高層[☆] 全通行に変更。
	* setCounterPass	カウンター用に変更。
	* setEmptyLinePass		中空の地形に変更。
	* setA3UpperOverPass	屋根 : 北が立体交差、他は周囲通行不可に変更。
	* setRoofUpperPass		屋根 : 北が書き割り、他は周囲通行不可に変更。
	* setA4UpperPass	壁(上面) : 北が書き割り、他は周囲通行不可に変更。
	* setA4UpperStarPass	壁(上面) : 北が☆、他は通行不可に変更。
	* setWallSideEdgePass	壁(側面):南が書き割り、他は通行可に変更。
	* setWallSidePass	壁(側面): 北が書き割り、他は全通行不可に変更。
	* setRoofBottomPass	屋根 (地面) : 周囲通行不可に変更。
		* setSquareOpenPass	屋根 (地面) : 南以外通行不可に変更。
		* setEmptySquarePass	屋根 (地面) : 全周通行不可に変更。
	* setBridgeSNPass	南北の橋設定に変更。
	* setBridgeWEPass	東西の橋設定に変更。

### [Scene_Map](../Reference/Scene_Map.html) で書き換えているメソッド

* onMapLoaded	シーン表示前に、マップデータを書き換える。