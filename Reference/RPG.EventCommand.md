[クラスツリー](index.md)

# クラス: [RPG](RPG.md).EventCommand
[実行内容]に記述される[イベントコマンド] を構成するJSONデータ。

記述された内容は [Game_Interpreter](Game_Interpreter.md) のcommandXXX メソッドで処理される。

関連クラス: [RPG.EventPage](RPG.EventPage.md), [RPG.BattleEventPage](RPG.BattleEventPage.md), [RPG.CommonEvent](RPG.CommonEvent.md)


### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `code` | [Number](Number.md) | イベント番号 |
| `indent` | [Number](Number.md) | 階層(インデント)の深さ<br />(通常は0で[条件分岐]コマンドにより1階層ずつ深くなる) |
| `parameters` | [Array](Array.md).&lt;*&gt; | [コマンドに渡される引数](#コマンドに渡される引数)の配列 |

#### コマンドに渡される引数
コマンドごとに `parameters` の内容は異なる。

その詳細はトリアコンタンさんがまとめた一覧表を参照。

[RPGツクールMZ スクリプトリファレンス](https://docs.google.com/spreadsheets/d/1aqY-xzFqT0vnZE-OkfsMYsP9Ud91vWTrBLU-uDkJ-Ls/edit#gid=2095105278) 

ただし `parameters[ 0 ]` に限ってはプラグインのパスが入っている。<br />
Ver.1.3.0 のフォルダに対応以降は、プラグイン名だけではなくフォルダ名と区切りのも含まれていることに注意。
