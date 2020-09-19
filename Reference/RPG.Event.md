# Class: [RPG](RPG.md).Event

## Extends: [RPG.MetaData](RPG.MetaData.md) 

| データベース| オブジェクト | スプライト |
| --- | --- | --- | --- | --- |
| [イベント] | [Game_Event](Game_Event.md) | [Sprite_Character](Sprite_Character.md) |
 

マップ[イベント]を構成する JSON データ。

[RPG.Map](RPG.Map.md)の events プロパティに含まれ、[Game_Event.event()](Game_Event.md#event---rpgevent) メソッドでも得られる。

関連クラス: [RPG.CommonEvent](RPG.CommonEvent.md), [RPG.Troop](RPG.Troop.md)


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `id` | [Number](Number.md) | イベントID |
| `name` | [String](String.md) | イベント名 |
| `x` | [Number](Number.md) | x座標(タイル数) |
| `y` | [Number](Number.md) | y座標(タイル数) |
| `pages` | [Array](Array.md).&lt;[RPG.EventPage](RPG.EventPage.md)&gt; | [EVページ]の配列 |


