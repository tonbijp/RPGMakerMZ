[クラスツリー](index.md)

# クラス: TextConverter
**@MZ PluginCommonBase.js** 文字列の処理を行う静的クラス。<br />
ただし、このクラスは大域(グローバルスコープ)にないので直接使うことはない。<br />
[PluginManagerEx](PluginManagerEx.md)から使われる。

※公式プラグイン PluginCommonBase.js は、ほぼコアスクリプト扱いしていいと思うので、含まれるクラスのページを作った。


### メソッド

#### (static) convertEscapeCharactersBase (text, data) → {[String](String.md)}
文字列内の制御文字を変換し、適切な型に変換して返す。<br />
このメソッドは、V,N,P,Gの変換を行う。

##### 引数

| 名前 | 型 | 特性 | 説明 |
| --- | --- | --- | --- |
| `text` | [String](String.md) | | 変換対象 |
| `data` | Object | &lt;optional&gt; | (規定値:null) |


#### (static) actorName (n) → {[String](String.md)}
指定IDのアクター名を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `n` | [Number](Number.md) | アクターID |


#### (static) partyMemberName(n) → {[String](String.md)}
指定番号のメンバー名を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `n` | [Number](Number.md) | メンバー番号 |
