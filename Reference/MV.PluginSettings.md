[クラスツリー](index.md)

# クラス: [MV](MV.md).PluginSettings

## 型: Object

| データベース| JSファイル | 大域変数 |
| --- | --- | --- |
| プラグイン | plugins.js | [$plugins](global.md#plugins-arraymvpluginsettings) (配列) |

プラグイン管理用のパラメータ。plugins.js は dataフォルダではなく jsフォルダにある。

プラグインに書かれる設定(アノテーション)の解説もここに書く。

関連クラス: [PluginManager](PluginManager.md)

### プロパティ

| 識別子 | 型 | 説明 |
| --- | --- | --- |
| `name` | [String](String.md) | プラグインの[名前]\(拡張子を含まない) |
| `status` | [String](String.md) | ON/OFF の[状態] |
| `description` | [String](String.md) | [説明] |
| `parameters` | Object |  [[パラメータ]](MV.PluginSettings.md#パラメータ)([PluginManager.parameters()](PluginManager.md#static-parameters-name--object) の返り値になる) |

####  [パラメータ]

<code>{ "名前": "値", … }</code>のようにプラグインパラメータの[名前]と[値]を組み合わせ、パラメータの数だけ並べたオブジェクト。

値は常に <code>String</code> なので、パラメータの値として文字列以外を指定していた場合、プラグイン個々で構文解析(パース)や型変換(キャスト)をする必要がある。<br />
その際は`JSON.parse()`,`parseInt()`などのJavaScriptの解析・型変換メソッドを使うか、公式付属プラグインの PluginCommonBase.js を使うと良い。

以下でプラグインファイルのコメント文でのパラメータ設定を解説している。

# プラグインファイルの設定
プラグインファイルのコメント( /\*: \*/ )に書かれるプラグインの設定。<br />
頭の方に言語タグ( 日本語の場合 /\*:ja )を書くと、言語ごとに別の設定が用意できる。<br />
以下で説明する @ではじまる宣言は公式にはアノテーションと呼ばれる。ディレクティブと呼ばれることもある。

* @があるとアノテーションと判断されてしまうため、全ての設定値に@は使用できない。
* アノテーションは改行ではなく@で分割されているので、1行に複数の設定を書ける(もちろん1行1設定でも良い)
* @の後に続くアノテーション文字列が定義外のものだと無視されるので、コメントとして利用できる。
* なお **@MZ** とあるのは『RPGツクールMZ』になって追加されたものという意味でアノテーションではないので、悪しからず。

[公式プラグイン講座 アノテーションに関する解説](https://tkool.jp/mz/plugin/make/annotation.html) 参照。

## プラグイン全体の設定

#### @target
**@MZ** 対象となるツクール名。<br />
『RPGツクールMZ』対応のプラグインにはとにかく`MZ`と書いておく。 <br />
MV MZ両対応の場合(MV側に機能的意味はないが)例のようにスペース区切りで併記する。

##### 例
```
 * @target MV MZ
```


#### @base
**@MZ** プラグインを使うのに必要とされるプラグイン名。<br />
依存するプラグインが設定されていない場合に、[プラグイン管理]ウィンドウに警告が表示されます。


#### @orderAfter
**@MZ** [プラグイン管理]ウィンドウで、このプラグインの上に置く必要のあるプラグイン名。


#### @orderBefore
**@MZ** [プラグイン管理]ウィンドウで、このプラグインの下に置く必要のあるプラグイン名。


#### @plugindesc
[説明]に表示される文字列。


#### @author
[作者]に表示される文字列。


#### @help
[ヘルプ]に表示される文字列。直後から別のアノテーションが書かれるまで記述可能。<br />
改行は自由で行頭の * は無視される。


#### @url
**@MZ** プラグインのあるURL。プラグインファイル直接のURLを想定しているようだ。<br />
ただ、ダウンロード前に規約などを読んでもらいたい場合は、そちらのページをリンクしてもいいようだ。


## [未使用ファイルを含まない]対応
デプロイメントを実行するときに[未使用ファイルを含まない]にチェックしていた場合。<br />
削除されては困るファイルを指定するのに使うアノテーション。


#### @requiredAssets
これでファイルを指定すれば削除されない。

##### 例
```
 * @requiredAssets img/example/image_1
```

[メモ]のメタタグの値としてファイルを使う場合、そのファイルは固定されていない。<br />
その場合は以下のタグを指定すれば削除されない。


#### @noteParam
メモ欄に書かれたタグ名


#### @noteDir
ファイルがあるディレクトリ


#### @noteType
fileしかないのでfileと書く (MVで使えた animation は廃止)


#### @noteData
メモを利用するデータベースを maps, events, actors, classes, skills, items, weapons, armors, enemies, states, tilesets から指定

##### Example
アイテムのメモの内容が
```
<sampleImage:img1>
```
の場合。

```
 * @noteParam sampleImage
 * @noteDir img/sample/
 * @noteType file
 * @noteData items
```


## プラグインパラメータの設定

#### @param
パラメータ識別子。省略不可。パラメータ毎の設定の先頭に置くこと。<br />
空白文字も使えるが、プラグイン側で値を取り出す時に <code>parameters["param with space"]</code> 形式しか使えず <code>parameters.param with space</code> と書いても正しく認識されないことに注意。


#### @text
パラメータの[名前]\(規定値: `@param` の値) 大体は `@param` の日本語名。


#### @desc 
パラメータの[説明]に表示される文字列(規定値: 空文字列)で、2行書ける。<br />
`@text`と同じ説明を書く必要はないので、規定値など付加情報だけ書くと良い。


#### @default
規定値(デフォルト)(規定値: 空文字列)


#### @parent
パラメータをグループ分けする際に小パラメータから親を `@param` の識別子で指定。<br />
プラグイン側では子の `@param` 識別子のみで指定し、親の `@param` 識別子は無視される。<br />
通常、親に指定されるパラメータは値を持たないが、持たせることもできる。<br />
データに親子関係を持たせたい場合、`@type *[]` や `@type struct<*>`を検討しても良い。

##### Example
```
 * @param group
 * @text --- グループ名 ---
 *
 * @param childData
 * @parent group
```


## プラグインコマンドの設定

### @command
**@MZ** プラグインコマンド識別子。<br />
MZではプラグインコマンドの仕組みが変わり、まずプラグインを選択してコマンドを選ぶようになった。<br />
MVの時は識別子が衝突しないように`TF_`などの短い開発者ごとの接頭辞をつける作法があったが、MZではコマンドに関しては気にする必要がなくなった。<br />
この `@command` で指定するのは識別子であって、『RPGツクールMZ』のエディタで表示される名前は別に @text で設定できる。<br />
またコマンドには `@desc`は必須なので書くことがなくても空でいいので設定しておくこと。


### @arg
**@MZ** プラグインコマンド引数。<br />
プラグインパラメータと同じように値の型に応じた入力インタフェースが用意されるようになった。<br />
@arg の後に、パラメータ同様の書式で引数の型情報を記述。

##### Example
```
* @command COMMAND_IDENTIFIER @text コマンドの表示名
* @desc コマンドの説明
*
* @arg arg_identifier @text 引数の表示名
* @desc 引数の説明
```


## パラメータ・コマンド引数の型設定

#### @type
パラメータ・引数の型を指定するアノテーション。<br />
入力時のUIが型に合わせて変わるが、プラグインに渡される値は全て文字列。<br />
以下指定する型ごとに説明する。


#### @type string 
文字列。規定値なので指定する必要はないが、明示しておいた方が誤解がなくて良い。

##### Example
```
 * @param stringData @text 文字列型
 * @desc パラメータ文字列の説明(規定値: こんにちは)
 * @type string @default こんにちは
```


#### @type color
**@MZ1.6.0** カラーパレットから選択。1.5.0以前のバージョンでは `@type string` として解釈される。

##### Example
```
 * @param colorNumber @text カラー番号
 * @desc パラメータ、カラー番号の説明(規定値: 0)
 * @type color @default 0
```


#### @type icon
**@MZ1.6.0** アイコン一覧から選択。1.5.0以前のバージョンでは `@type string` として解釈される。

##### Example
```
 * @param iconNumber @text アイコン番号
 * @desc パラメータ、アイコン番号の説明(規定値: 0)
 * @type icon @default 0
```


#### @type multiline_string
**@MZ** 複数行の文字列。『RPGツクールMV』で複数行のデータには `@type note`が使われていた。<br />
`@default` は冒頭の空白や空行を無視するので、空行のみを規定値とすることはできないようだ。何か文字を書いた後は改行を認識する。

##### Example
```
 * @param multilineData @text 複数行データ
 * @desc 複数行データの説明。
 * @type multiline_string @default 一行目
 * 二行目
```


#### @type note
JSON文字列を書く。主に複数行の文字列を扱うためのもの。<br />
『RPGツクールMV』との互換で残してあるが『RPGツクールMZ』で複数行を扱う場合は `@type multiline_string` を使う。<br />
プラグインにはJSON文字列化(具体的には &quot; や \\のエスケープ、改行の \\n への変換)して渡される。<br />
改行が必要なデータ、JSON形式のデータを直接書く場合などに利用する。<br />
`@default` の指定は他と異なり、ダブルクォーテーション( &quot; )で囲う必要がある。<br />
また受け取った後に `JSON.parse()` を通して解析を行う必要がある。

##### Example
```
 * @param note @text ノート
 * @desc ノートの説明。
 * @type note @default "一行目\n二行目"
```


#### @type number
数値。数個から選ぶ場合は `@type select` を使った方が良いかもしれない。<br />
[数値]タブではコンテクストメニューに[アイコン番号の挿入…]が出ない(バージョン1.2.0で確認)<br />
タブで[テキスト]に切り替えてコンテクストメニューを開く必要がある。<br />
アイコンIDを指定する場合に `@type number` は使わない方が良いかもしれない。<br />
また[色番号の挿入…]は[数値][テキスト]どちらのタブでも出ない。
プラグイン側で受け取るのは文字列なので、<code>parseInt()</code> や <code>parseFloat()</code> を使って型変換(キャスト)を行うといい。

| Name | Description |
| --- | --- |
| `@min` | 最小値( 規定値 : 0 ) (下限 -9007199254740992 ) |
| `@max ` | 最大値 (上限 9007199254740992 ) |
| `@decimals ` | 小数点以下桁数( 規定値 : 0 ) |

##### Example
```
 * @param numberData @text 数値型
 * @desc パラメータ数値の説明(規定値: 10.0)
 * @type number @default 10.0
 * @min -100 @max 100
 * @decimals 1
```


#### @type boolean
真偽値。

| Name | Description |
| --- | --- |
| `@on` | ON の説明 |
| `@off` | OFF の説明 |

##### Example
```
 * @param booleanData @text 論理型
 * @desc パラメータ真偽値の説明
 * @type boolean @default false
 * @on 実行する @off 無視(規定)
```


#### @type \*[]
配列( \* の部分に任意のタイプを書く )  プラグイン側は `JSON.parse()` で解析する。<br />
ちなみに[プラグイン管理]上で各項目はドラッグで入れ替え可能。

##### Example
```
 * @param arrayData @text 配列型
 * @desc パラメータ配列の説明(規定値: ["甲", "乙", "丙"])
 * @type string[] @default ["甲", "乙", "丙"]
```


#### @type struct&lt;\*&gt;
データ構造( \* の部分に構造名を書く ) プラグイン側は `JSON.parse()` で解析する。<br />
構造の内容は別に以下のような記述をしておく。通常の型と同じ記述が可能。<br />
多言語対応をする場合、例えば `~struct~構造名:ja` というように言語タグを付加して使う。<br />
`@default` の値はデータ構造側より本体の値が優先される。<br />
 _ などの記号は構造名には使えない。

##### Example
```
 * @param struct @text 構造型
 * @desc パラメータ構造の説明(規定値: x:10, y:20)
 * @type struct<coordinateStruct> @default { "x":"10", "y":"20" }
```
```
/*~struct~coordinateStruct:ja
 * @param x
 * @type number @default 0
 * 
 * @param y
 * @type number @default 0
 */
```
 
 
#### @type struct&lt;\*&gt;[]
データ構造の配列。

##### Example
```
 * @param struct @text 構造型
 * @desc パラメータ配列・構造の説明。
 * @type struct<coordinateStruct>[]
 * @default [{ "x":"10", "y":"20" }, { "x":"0", "y":"0" }]
```
 
 
#### @type file
img か audio フォルダ以下のファイル(拡張子を含まない)<br />
`@default `にはフォルダだけの指定、あるいはファイルだけ、または両方を指定できる。<br />
なお指定できるフォルダは2階層まで。
**@MZ1.9.0** 参照フォルダとして'movies'の指定が追加された。

| Name | Description |
| --- | --- |
| `@dir` | 参照フォルダ( 前後の/は不要 ) 値としては返らない |

##### Example
```
 * @param file @text ファイル
 * @desc ファイルの説明(規定値: Actor2)
 * @type file @default Actor2
 * @dir img/characters
```


#### @type select
セレクトボックスの選択肢から選択。<br />
`@default` には `@value` の設定がある場合は `@value` の値を指定。ない場合は `@option` の値を指定する。

| Name | Description |
| --- | --- |
| `@option` | 選択肢(必要な数並べる) |
| `@value` | @option選択時にプラグインに渡す値(規定値 : @optionそのまま) |

##### Example
```
 * @param selectBox @text セレクトボックス
 * @desc オプションの説明(規定値: 左方向)
 * @type select @default 4
 * @option 左方向 @value 4
 * @option 右方向 @value 6
```


#### @type combo
コンボボックス。文字列の入力、または選択肢から選択。<br />
プラグイン講座には使えるように書いてあるが、どうも `@value`は動作していないようだ。

| Name | Description |
| --- | --- |
| `@option` | 選択肢(必要な数並べる) |
| `@value` | **@MZ** @option選択時にプラグインに渡す値(規定値: @optionそのまま) |

##### Example
```
 * @param combo @text コンボボックス
 * @desc 編集可能オプションの説明(規定値: red)
 * @type combo @default red
 * @option red @value #FF0000
 * @option blue @value #0000FF
```


#### @type variable
変数([Game_Variables](Game_Variables.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param variableId @text 変数ID
 * @desc 変数の説明(規定値: 1)
 * @type variable @default 1
```


#### @type switch
スイッチ([Game_Switches](Game_Switches.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param switchId @text スイッチID
 * @desc スイッチの説明(規定値: 1)
 * @type switch @default 1
```


#### @type actor
アクター([RPG.Actor](RPG.Actor.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param actorId @text アクターID
 * @desc アクターの説明(規定値: 0)
 * @type actor @default 0
```


#### @type class
職業([RPG.Class](RPG.Class.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param classId @text クラスID
 * @desc クラスの説明(規定値: 0)
 * @type class @default 0
```


#### @type skill
スキル([RPG.Skill](RPG.Skill.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param skillId @text スキルID
 * @desc スキルの説明(規定値: 0)
 * @type skill @default 0
```


#### @type item
アイテム([RPG.Item](RPG.Item.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param itemId @text アイテムID
 * @desc アイテムの説明(規定値: 0)
 * @type item @default 0
```


#### @type weapon
武器([RPG.Weapon](RPG.Weapon.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param weaponId @text 武器ID
 * @desc 武器の説明(規定値: 0)
 * @type weapon @default 0
```


#### @type armor
防具([RPG.Armor](RPG.Armor.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param armorId @text 防具ID
 * @desc 防具の説明(規定値: 0)
 * @type armor @default 0
```


#### @type enemy
敵キャラ([RPG.Enemy](RPG.Enemy.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param enemyId @text 敵キャラID
 * @desc 敵キャラの説明(規定値: 0)
 * @type enemy @default 0
```


#### @type troop
敵グループ([RPG.Troop](RPG.Troop.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param troopId @text 敵グループID
 * @desc 敵グループの説明(規定値: 0)
 * @type troop @default 0
```


#### @type state
ステート([RPG.State](RPG.State.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param stateId @text ステートID
 * @desc ステートの説明(規定値: 0)
 * @type state @default 0
```


#### @type animation
アニメーション([RPG.Animation](RPG.Animation.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param animationId @text アニメーションID
 * @desc アニメーションの説明(規定値: 0)
 * @type animation @default 0
```


#### @type tileset
タイルセット([RPG.Tileset](RPG.Tileset.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param tilesetId @text タイルセットID
 * @desc タイルセットの説明(規定値: 0)
 * @type tileset @default 0
```


#### @type common_event
コモンイベント([RPG.CommonEvent](RPG.CommonEvent.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param commonEventId @text コモンイベントID
 * @desc コモンイベントの説明(規定値: 0)
 * @type common_event @default 0
```


#### @type map
**@MZ1.9.0** マップID

##### Example
```
 * @param mapId @text マップID
 * @desc マップの説明(規定値: 1)
 * @type map @default 1
```


#### @type location
**@MZ1.9.0** マップID及び位置を持った構造型文字列。

##### Example
```
 * @param mapLocation @text マップと位置の構造型
 * @desc マップと位置の説明(規定値: {"mapId":"1","x":"0","y":"0"})
 * @type map @default {"mapId":"1","x":"0","y":"0"}
```


### 廃止MVアノテーション
`@noteRequire` 、`@require`
