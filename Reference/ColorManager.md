[クラスツリー](index.md)

# クラス: ColorManager
**@MZ** ウィンドウの色データを扱う、静的クラス。

MVで [Window_Base](Window_Base.md) にあった機能のうち色に関するものを独立させたもの。<br />
それに伴い静的メソッドに変更されている。

### メソッド
**@MZ** は、MVで [Window_Base](Window_Base.md) に無かったものにつけています。

#### (static) loadWindowskin ()
ウィンドウスキンの読み込み。


#### (static) textColor (n) → {[MV.CssColor](MV.CssColor.md)}
指定した番号に対応する色を返す。<br />
"img/system/window.png" の色で設定される。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `n` | [Number](Number.md) | カラー番号(0 〜 31) |


#### (static) normalColor () → {[MV.CssColor](MV.CssColor.md)}
通常色(カラー番号:0)を返す。



#### (static) mpColor () → {[MV.CssColor](MV.CssColor.md)}
[MP]の色を返す。


#### (static) mpCostColor () → {[MV.CssColor](MV.CssColor.md)}
[消費MP]の色(カラー番号:23)を返す。


#### (static) mpGaugeColor1 () → {[MV.CssColor](MV.CssColor.md)}
[MP]ゲージの色1(カラー番号:22)を返す。


#### (static) mpGaugeColor2 () → {[MV.CssColor](MV.CssColor.md)}
[MP]ゲージの色2(カラー番号:23)を返す。


#### (static) systemColor () → {[MV.CssColor](MV.CssColor.md)}
システム色(カラー番号:16)を返す。


#### (static) tpColor () → {[MV.CssColor](MV.CssColor.md)}
[TP]の色を返す。


#### (static) tpCostColor () → {[MV.CssColor](MV.CssColor.md)}
[消費TP]の色(カラー番号:29)を返す。


#### (static) tpGaugeColor1 () → {[MV.CssColor](MV.CssColor.md)}
[TP]ゲージの色1(カラー番号:28)を返す。


#### (static) tpGaugeColor2 () → {[MV.CssColor](MV.CssColor.md)}
[TP]ゲージの色2(カラー番号:29)を返す。


#### (static) crisisColor () → {[MV.CssColor](MV.CssColor.md)}
危険色(カラー番号:17)を返す。


#### (static) deathColor () → {[MV.CssColor](MV.CssColor.md)}
死亡色(カラー番号:18)を返す。


#### (static) dimColor1 () → {[MV.CssColor](MV.CssColor.md)}
 [暗くする]背景の色1(規定値:"rgba(0, 0, 0, 0.6)")を返す。


#### (static) dimColor2 () → {[MV.CssColor](MV.CssColor.md)}
 [暗くする]背景の色2(規定値:"rgba(0, 0, 0, 0)")を返す。


#### (static) gaugeBackColor () → {[MV.CssColor](MV.CssColor.md)}
ゲージの背景色(カラー番号:19)を返す。


#### (static) hpColor (actor) → {[MV.CssColor](MV.CssColor.md)}
指定した[アクター]の[HP]の色を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `actor` | [Game_Actor](Game_Actor.md) | 対象の[アクター] |


#### (static) hpGaugeColor1 () → {[MV.CssColor](MV.CssColor.md)}
[HP]ゲージの色1(カラー番号:20)を返す。


#### (static) hpGaugeColor2 () → {[MV.CssColor](MV.CssColor.md)}
[HP]ゲージの色2(カラー番号:21)を返す。


#### (static) paramchangeTextColor (change) → {[MV.CssColor](MV.CssColor.md)}
指定した数値に対応する色を返す。<br />
装備を変える際の能力差分の表示などに使う。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `change` | [Number](Number.md) | 負の値: powerDownColor, 0:normalColor, 正の値:powerUpColor |


#### (static) pendingColor () → {[MV.CssColor](MV.CssColor.md)}
未決定色(選択カーソルの中央の色)を返す。


#### (static) powerDownColor () → {[MV.CssColor](MV.CssColor.md)}
パワーダウン色(カラー番号:25)を返す。


#### (static) powerUpColor () → {[MV.CssColor](MV.CssColor.md)}
パワーアップ色(カラー番号:24)を返す。


#### (static) ctGaugeColor1 () → {[MV.CssColor](MV.CssColor.md)}
**@MZ** タイマーゲージ色1(カラー番号:26)を返す。


#### (static) ctGaugeColor2 () → {[MV.CssColor](MV.CssColor.md)}
**@MZ** タイマーゲージ色2(カラー番号:27)を返す。


#### (static) damageColor (colorType) → {[MV.CssColor](MV.CssColor.md)}
**@MZ** 指定タイプに応じた色を返す。

##### 引数

| 名前 | 型 | 説明 |
| --- | --- | --- |
| `colorType` | [Number](Number.md) | 0:HP↓, 1:HP↑, 2:MP↓, 2:MP↑|


#### (static) outlineColor () → {[MV.CssColor](MV.CssColor.md)}
**@MZ** 輪郭の色(規定値:"rgba(0, 0, 0, 0.6)")を返す。


#### (static) itemBackColor1 () → {[MV.CssColor](MV.CssColor.md)}
**@MZ** アイテムの背景色2(規定値:"rgba(32, 32, 32, 0.5)")を返す。


#### (static) itemBackColor2 () → {[MV.CssColor](MV.CssColor.md)}
**@MZ** アイテムの背景色2(規定値:"rgba(0, 0, 0, 0.5)")を返す。






