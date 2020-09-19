# Class: [RPG](RPG.md).MetaData
 多くのデータに含まれる[メモ]のデータ。
 
 note から meta への変換は[DataManager.extractMetadata](DataManager.md#static-extractmetadata-data)メソッドで行われる。<br />
 meta プロパティに記録されたデータは、プラグイン用のパラメータとして使う。


### Sub Classes

*  [RPG.Actor](RPG.Actor.md)
*  [RPG.Class](RPG.Class.md)
*  [RPG.Enemy](RPG.Enemy.md)
*  [RPG.Event](RPG.Event.md)
*  [RPG.BaseItem](RPG.BaseItem.md)
*  [RPG.Map](RPG.Map.md)
*  [RPG.State](RPG.State.md)
*  [RPG.Tileset](RPG.Tileset.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `note` | [String](String.md) | [メモ]の内容 |
| `meta` | Object | note 内の &lt;名前:値&gt;形式のデータを解析した結果 |

#### meta の形式

[メモ]の中に &lt;名前:値&gt; もしくは &lt;名前&gt; の形で書く。<br />
&lt;名前:値&gt; の場合の値は String が返ってくる。<br />
&lt;名前&gt; の場合の値は Boolean の <code>true</code> が返る。

RPG.MetaData が入った変数 e から値を取り出す場合。<br />
<coed>e.名前</code> か <coed>e[ '名前' ]</code> と書く。

各オブジェクトの初期化メソッド( initialize ) で meta の値を取り出し、オブジェクトの変数に保存しておくのが、定番の処理方法。