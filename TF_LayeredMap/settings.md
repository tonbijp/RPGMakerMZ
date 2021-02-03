## 標準

| 配置 | 配置 | 通行 |  オプション | 説明 |  状態 |
| ---: | --- | :---: | --- | --- | :---: |
| A2 | | ○ ||通行 | 標準 |
|：|| × | |■ 通行不可 | 標準 |
| A3 | 奇数<br/>(屋根) | ○ || 通行 | 標準 |
|：|：| × || ■通行不可 | 標準 |
| A3<br/>A4 | 偶数<br/>(壁) | ○ || 通行 | 標準 |
|：|：| × || ■通行不可 | 標準 |
| A4 | 奇数<br/>(上面) | ○ || 通行 | 標準 |
|：|：| × || □周囲=通行不可 <br/>⊓南=通行 | 標準 |

## TF_LayeredMap.js ON

| 配置 | 配置 | 通行 |  オプション | 説明 |  状態 |
| ---: | --- | :---: | --- | --- | :---: |
| A2 | | ○ ||通行 | 標準 |
|：|| × | **A2×内部通行不可:ON** |■ 通行不可 | 標準 |
|：|| × | A2×内部通行不可:OFF | □ 周囲=通行不可 | 済み |
| A3 | 奇数<br/>(屋根) | ○ || 通行 | 標準 |
|：|：| × | IsA3UpperOpen:ON | ⊓南=通行 | 未確認 |
|：|：| × | **IsA3UpperOpen:OFF** | □周囲=通行不可 | 未確認 |
| A3<br/>A4 | 偶数<br/>(壁) | ○ | | 通行 | 標準 |
|：|：| × | | ■通行不可 | 標準 |
| A4 | 奇数<br/>(上面) | ○ | | 通行 | 標準 |
|：|：| × | IsA4UpperOpen:ON | □周囲=通行不可 <br/>⊓南=通行 | 標準 |
|：|：| × | **IsA4UpperOpen:OFF** | □周囲=通行不可 | 未確認 |

## TF_LayeredMap.js ON + [カウンター]

| 配置 | 配置 | 通行 | オプション | 説明 |  状態 |
| ---: | --- | :---: | --- | --- | :---: |
| A2 | 右側 | ○ | | 通行 | 標準 |
|：|：| × | **A2カウンター回り込み:ON** | 北=半侵入書き割り<br/>■通行不可 | 済み |
|：|：| × | A2カウンター回り込み:OFF | ■通行不可 | 標準 |
| A3 | 奇数<br/>(屋根) | ○ | | ☆通行  | 未確認 |
|：|：| × |IsA3UpperOpen:ON | 北=書き割り<br/>⊓南=通行 | 未確認 |
|：|：| × | **IsA3UpperOpen:OFF** | 北=書き割り<br/>□周囲=通行不可 | 未確認 |
| A3<br/>A4 | 偶数<br/>(壁) | ○ | | 書き割り<br/>南=通行不可 | 未確認 |
|：|：| × | | 北=書き割り<br/>■通行不可 |未確認 |
| A4 | 奇数<br/>(上面) | ○ | | ☆通行 | 未確認 |
|：|：| × | IsA4UpperOpen:ON | 北=書き割り<br/>⊓南=通行 | 未確認 |
|：|：| × | **IsA4UpperOpen:OFF** | 北=書き割り<br/>□周囲=通行不可 | 未確認 |

## TF_LayeredMap.js ON + 立体交差[地形タグ]

| 配置 | 配置 | 通行 | オプション | 説明 |  状態 |
| ---: | --- | :---: | --- | --- | :---: |
| A3 | 奇数<br/>(屋根) | ○ || ↕︎  | 未確認 | |
|：|：| ×|| ↕︎ 立体交差 | 未確認 | |
| A3<br />A4 | 偶数<br/>(壁) | ○ || ↔︎  | 未確認 | |
|：|：| × | | ↔︎ 立体交差 | 未確認 |
| A4 | 奇数<br/>(上面) | ○ ||| 未使用 | |
|：|：| × || 北=[☆]<br/>■通行不可 | 未確認 |


##  TF_LayeredMap.js ON + [カウンター] + 立体交差[地形タグ]

| 配置 | 配置 | 通行 | オプション | 説明 |  状態 |
| ---: | --- | :---: | --- | --- | :---: |
| A3 | 奇数<br/>(屋根) | ○ || 全面立体交差<br/>□周囲=通行不可 | 未確認 | |
|：|：| × | IsA3UpperOpen:ON | 北=立体交差<br/>⊓南=通行 | 未確認 |
|：|：| × | **IsA3UpperOpen:OFF**  | 北=立体交差<br/>□周囲=通行不可 | 未確認 |
| A3<br/>A4 | 偶数<br/>(壁) | ○ || | 未使用 |
|：|：| × | | | 未使用 |
| A4 | 奇数<br/>(上面) | ○ | | 全面立体交差<br/>□周囲=通行不可 | 未確認 |
|：|：| × | IsA4UpperOpen:ON | 北=立体交差<br/>⊓南=通行 | 未確認 |
|：|：| × | **IsA4UpperOpen:OFF** | 北=立体交差<br/>□周囲=通行不可 | 未確認 |