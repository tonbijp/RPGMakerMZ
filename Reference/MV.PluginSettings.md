# Class: [MV](MV.md).PluginSettings

## Type: Object

| データベース| JSファイル | 大域変数 |
| --- | --- | --- |
| プラグイン | plugins.js | [$plugins](global.md#plugins-arraymvpluginsettings) (配列) |

プラグイン管理用のパラメータ。plugins.js は dataフォルダではなく jsフォルダにある。

プラグインに書かれるパラメータ設定の解説もここに書く。

関連クラス: [PluginManager](PluginManager.md),  [JsonEx](JsonEx.md)

### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](String.md) | プラグインの[名前]\(拡張子を含まない) |
| `status` | [String](String.md) | ON/OFF の[状態] |
| `description` | [String](String.md) | [説明] |
| `parameters` | Object |  [[パラメータ]](MV.PluginSettings.md#パラメータ)([PluginManager.parameters()](PluginManager.md) の返り値になる) |

####  [パラメータ]

<code>{ "名前": "値", … }</code>のようにプラグインパラメータの[名前]と[値]を組み合わせ、パラメータの数だけ並べたオブジェクト。

値は常に <code>String</code> なので、パラメータの値として文字列以外を指定していた場合、プラグイン個々で構文解析(パース)や型変換(キャスト)をする必要がある。<br />
その際に便利な [JsonEx.parse()](JsonEx.md#static-parse-json--object) が用意されている。

以下でプラグインファイルのコメント文でのパラメータ設定を解説している。

# プラグインファイルの設定
プラグインファイルのコメント( /\*: \*/ )に書かれるプラグインの設定。<br />
頭の方に言語コード( 日本語の場合 /\*:ja )を書くと、言語ごとに別の設定が用意できる。<br />
以下で説明する @ではじまる宣言はディレクティブとも呼ばれる。

※ @があるとディレクティブと判断されてしまうため、全ての設定値に@は使用できない。


## プラグイン全体の設定

#### @plugindesc
[説明]に表示される文字列。

#### @author
[作者]に表示される文字列。

#### @help
[ヘルプ]に表示される文字列。次の行から別のディレクティブが書かれるまで記述可能。

#### @requiredAssets
デプロイメントを実行するときに[未使用ファイルを含まない]にチェックしていた場合。<br />
これでファイルを指定すれば削除されない。

##### Example
```
 * @requiredAssets img/example/image_1
```

## パラメータ毎の設定

#### @param
パラメータ識別子。省略不可。パラメータ毎の設定の先頭に置くこと。<br />
空白文字も使えるが、プラグイン側で値を取り出す時に <code>parameters["param with space "]</code> 形式しか使えず <code>parameters.param with space</code> と書いても正しく認識されないことに注意。

#### @text
パラメータの[名前]\(規定値: `@param` の値) 大体は `@param` の日本語名。

#### @desc 
パラメータの[説明]に表示される文字列(規定値: 空文字列) 複数行書ける。規定値など書いておくと良い。

#### @default
規定値(デフォルト)(規定値: 空文字列)

#### @parent
パラメータをグループ分けする際に小パラメータから親を `@param` の識別子で指定。<br />
プラグイン側では子の `@param` 識別子のみで指定し、親の `@param` 識別子は無視される。<br />
通常、親に指定されるパラメータは値を持たないが、持たせることもできる。<br />
データに親子関係を持たせたい場合、`@type *[]` や `@type struct<*>`を検討しても良い。

##### Example
``` * @param group
 * @text --- グループ名 ---
 *
 * @param childData
 * @parent group
```
#### @type (ver1.5.0 以降)
パラメータの型(詳細は後述)<br />
入力時のUIが型に合わせて変わるが、プラグインに渡される値は全て文字列。



## @type

### @type string 
文字列。規定値なので指定する必要はないが、明示しておいた方が誤解がなくて良い。

##### Example
```
 * @param stringData
 * @text 文字列型
 * @desc パラメータ文字列の説明(規定値: こんにちは)
 * @type string
 * @default こんにちは
```

### @type number
数値。数個から選ぶ場合は `@type select` を使った方が良いかもしれない。<br />
なぜか[アイコンセットビューア]が出なくなる(バージョン1.6.2で確認)ので、タブで[テキスト]に切り替えた後、コンテクストメニューから指定する必要がある。アイコンIDを指定する場合には使わない方が良いかもしれない。<br />
プラグイン側で受け取るのは文字列なので、<code>parseInt()</code> や <code>parseFloat()</code> を使って型変換(キャスト)を行うといい。

| Name | Description |
| --- | --- |
| `@min` | 最小値( 規定値 : 0 ) (下限 -9007199254740992 ) |
| `@max ` | 最大値 (上限 9007199254740992 ) |
| `@decimals ` | 小数点以下桁数( 規定値 : 0 ) |

##### Example
```
 * @param numberData
 * @text 数値型
 * @desc パラメータ数値の説明(規定値: 10.0)
 * @type number
 * @min -100
 * @max 100
 * @decimals 1
 * @default 10.0
```

### @type boolean
真偽値。

| Name | Description |
| --- | --- |
| `@on` | ON の説明 |
| `@off` | OFF の説明 |

##### Example
```
 * @param booleanData
 * @text 論理型
 * @desc パラメータ真偽値の説明(規定値: 無視)
 * @type boolean
 * @on 実行する
 * @off 無視
 * @default false
```

### @type \*[]
配列( \* の部分に任意のタイプを書く )  プラグイン側は [JsonEx.parse()](JsonEx.md#static-parse-json--object) で解析する。<br />
ちなみに[プラグイン管理]上で各項目はドラッグで入れ替え可能。

##### Example
```
 * @param arrayData
 * @text 配列型
 * @desc パラメータ配列の説明(規定値: ["甲", "乙", "丙"])
 * @type string[]
 * @default ["甲", "乙", "丙"]
```

### @type struct&lt;\*&gt;
データ構造( \* の部分に構造名を書く ) プラグイン側は [JsonEx.parse()](JsonEx.md#static-parse-json--object) で解析する。<br />
構造の内容は別に以下のような記述をしておく。通常の型と同じ記述が可能。<br />
多言語対応をする場合、例えば `構造名_ja` というように言語ごとに異なる構造名にして、言語に合わせた構造を指定する。<br />
`@default` の値は構造体側より本体の値が優先される。<br />
構造名には _ などの記号は使えない。

##### Example
```
 * @param struct
 * @text 構造型
 * @desc パラメータ構造の説明(規定値: x:10, y:20)
 * @type struct<coordinateStruct>
 * @default { "x":"10", "y":"20" }
```
```
/*~struct~coordinateStruct:
 * @param x
 * @type number
 * @default 0
 * 
 * @param y
 * @type number
 * @default 0
 */
```
 
### @type struct&lt;\*&gt;[]
データ構造の配列。

##### Example
```
 * @param struct
 * @text 構造型
 * @desc パラメータ配列・構造の説明。
 * @type struct<coordinateStruct>[]
 * @default [{ "x":"10", "y":"20" }, { "x":"0", "y":"0" }]
```
 
### @type file
img か audio フォルダ以下のファイル(拡張子を含まない)<br />
`@default `にはフォルダだけの指定、あるいはファイルだけ、または両方を指定できる。<br />
なお指定できるフォルダは2階層まで。

| Name | Description |
| --- | --- |
| `@dir` | 参照フォルダ( 前後の/は不要 ) 値としては返らない |
| `@require` | 1 を設定するとデプロイメントの際[未使用ファイルを含まない]のチェックされた時も、選択したファイルを削除しない |

##### Example
```
 * @param file
 * @text ファイル
 * @desc ファイルの説明(規定値: Actor2)
 * @type file
 * @dir img/characters
 * @require 1
 * @default Actor2
```

### @type select
セレクトボックスの選択肢から選択。<br />
`@default` には `@value` の設定がある場合は `@value` の値を指定。ない場合は `@option` の値を指定する。

| Name | Description |
| --- | --- |
| `@option` | 選択肢(必要な数並べる) |
| `@value` | @option選択時にプラグインに渡す値(規定値 : @optionそのまま) |

##### Example
```
 * @param selectBox
 * @text セレクトボックス
 * @desc オプションの説明(規定値: 左方向)
 * @type select
 * @option 左方向
 * @value 4
 * @option 右方向
 * @value 6
 * @default 4
```

### @type combo
コンボボックス。文字列の入力、または選択肢から選択。<br />
 `@type select` と異なり `@value` の指定はできない。

| Name | Description |
| --- | --- |
| `@option` | 選択肢(必要な数並べる) |

##### Example
```
 * @param combo
 * @text コンボボックス
 * @desc 編集可能オプションの説明(規定値: red)
 * @type combo
 * @option red
 * @option blue
 * @default red
```

### @type note
複数行の文字列が記入できる形式。改行もできる。<br />
プラグインにはJSON文字列化(具体的には &quot; や \\のエスケープ、改行の \\n への変換)して渡される。<br />
改行が必要なデータ、JSON形式のデータを直接書く場合などに利用する。<br />
`@default` の指定は他と異なり、ダブルクォーテーション( &quot; )で囲う必要がある。

##### Example
```
 * @param note
 * @text ノート
 * @desc メモの説明。
 * @type note
 * @default "一行目\n二行目"
```

### @type variable
変数([Game_Variables](Game_Variables.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param variableId
 * @text 変数ID
 * @desc 変数の説明(規定値: 1)
 * @type variable
 * @default 1
```

### @type switch
スイッチ([Game_Switches](Game_Switches.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param switchId
 * @text スイッチID
 * @desc スイッチの説明(規定値: 1)
 * @type switch
 * @default 1
```

### @type actor
アクター([RPG.Actor](RPG.Actor.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param actorId
 * @text アクターID
 * @desc アクターの説明(規定値: 0)
 * @type actor
 * @default 0
```

### @type class
職業([RPG.Class](RPG.Class.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param classId
 * @text クラスID
 * @desc クラスの説明(規定値: 0)
 * @type class
 * @default 0
```

### @type skill
スキル([RPG.Skill](RPG.Skill.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param skillId
 * @text スキルID
 * @desc スキルの説明(規定値: 0)
 * @type skill
 * @default 0
```

### @type item
アイテム([RPG.Item](RPG.Item.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param itemId
 * @text アイテムID
 * @desc アイテムの説明(規定値: 0)
 * @type item
 * @default 0
```

### @type weapon
武器([RPG.Weapon](RPG.Weapon.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param weaponId
 * @text 武器 ID
 * @desc 武器の説明(規定値: 0)
 * @type weapon
 * @default 0
```

### @type armor
防具([RPG.Armor](RPG.Armor.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param armorId
 * @text 防具ID
 * @desc 防具の説明(規定値: 0)
 * @type armor
 * @default 0
```

### @type enemy
敵キャラ([RPG.Enemy](RPG.Enemy.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param enemyId
 * @text 敵キャラID
 * @desc 敵キャラの説明(規定値: 0)
 * @type enemy
 * @default 0
```

### @type troop
敵グループ([RPG.Troop](RPG.Troop.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param troopId
 * @text 敵グループID
 * @desc 敵グループの説明(規定値: 0)
 * @type troop
 * @default 0
```

### @type state
ステート([RPG.State](RPG.State.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param stateId
 * @text ステートID
 * @desc ステートの説明(規定値: 0)
 * @type state
 * @default 0
```

### @type animation
アニメーション([RPG.Animation](RPG.Animation.md))のID( なし: 0 または 空文字列 )

| Name | Description |
| --- | --- |
| `@require` | 1 を設定すると、選択したファイルを削除しない |

##### Example
```
 * @param animationId
 * @text アニメーションID
 * @desc アニメーションの説明(規定値: 0)
 * @type animation
 * @require 1
 * @default 0
```

### @type tileset
タイルセット([RPG.Tileset](RPG.Tileset.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param tilesetId
 * @text タイルセットID
 * @desc タイルセットの説明(規定値: 0)
 * @type tileset
 * @default 0
```

### @type common_event
コモンイベント([RPG.CommonEvent](RPG.CommonEvent.md))のID( なし: 0 または 空文字列 )

##### Example
```
 * @param commonEventId
 * @type common_event
 * @text コモンイベントID
 * @desc コモンイベントの説明(規定値: 0)
 * @default 0
```


## ファイルを扱うメモタグの設定
[メモ]のメタタグの値としてファイルを使う場合、そのファイルが。
デプロイメントを実行するときに[未使用ファイルを含まない]にチェックしていた場合。<br />
以下のタグを指定すれば削除されない。

| Name | Description |
| --- | --- |
| `@noteParam` | タグ名 |
| `@noteRequire` | 1 を設定するとデプロイメントの際[未使用ファイルを含まない]のチェックされた時も、選択したファイルを削除しない |
| `@noteDir` | ファイルがあるディレクトリ |
| `@noteType` | データに合わせて、file か animation を指定 |
| `@noteData` | メモを利用するオブジェクトを maps, events, actors, classes, skills, items, weapons, armors, enemies, states, tilesets から指定 |

 
##### Example
アイテムのメモの内容が
```
<sampleImage:img1>
```
の場合。

```
 * @noteParam sampleImage
 * @noteRequire 1
 * @noteDir img/sample/
 * @noteType file
 * @noteData items
```

