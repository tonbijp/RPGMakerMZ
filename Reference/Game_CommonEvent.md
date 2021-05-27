[クラスツリー](index.md)

# クラス: Game_CommonEvent

| データベース| JSONデータ |
| --- | --- |
| [コモンイベント] | [RPG.CommonEvent](RPG.CommonEvent.md) |

主なパス
```js
$gameMap._commonEvents[n]
```

関連クラス: [Game_Map](Game_Map.md)

### new Game_CommonEvent ()

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `_commonEventId` | [Number](Number.md) | コモンイベントID |
| `_interpreter` | [Game_Interpreter](Game_Interpreter.md) | コマンドインタプリタ |


### メソッド

#### event () → {[RPG.CommonEvent](RPG.CommonEvent.md)}
JSONの定義データを返す。


#### initialize ()
オブジェクト生成時の初期化。


#### isActive () → {Boolean}
この[コモンイベント]がアクティブか。


#### list () → {[Array](Array.md).&lt;[RPG.EventCommand](RPG.EventCommand.md)&gt;}
[イベントコマンド]を配列で返す。


#### refresh ()
[コモンイベント]を更新。


#### update ()
フレーム毎のアップデート。


