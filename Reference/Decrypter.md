# Class: Decrypter
データの復号を行う、静的クラス。


### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `SIGNATURE` | [String](String.md) | [static] |
| `VER` | [String](String.md) | [static] |
| `REMAIN` | [String](String.md) | [static] |
| `hasEncryptedImages` | Boolean | [static] |
| `hasEncryptedAudio` | Boolean | [static] |
| `_requestImgFile` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] |
| `_headerlength` | [Number](Number.md) | [static] |
| `_xhrOk` | [Number](Number.md) | [static] |
| `_encryptionKey` | [String](String.md) | [static] |
| `_ignoreList` | [Array](Array.md).&lt;[String](String.md)&gt; | [static] |


### Methods

#### (static) checkImgIgnore (url) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) |  |


#### (static) createBlobUrl (arrayBuffer) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `arrayBuffer` | ArrayBuffer |  |


#### (static) cutArrayHeader (arrayBuffer, length) → {ArrayBuffer}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `arrayBuffer` | ArrayBuffer |  |
| `length` | [Number](Number.md) |  |


#### (static) decryptArrayBuffer (arrayBuffer)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `arrayBuffer` | ArrayBuffer |  |


#### (static) decryptHTML5Audio (url, bgm, pos opt)

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `url` | [String](String.md) |  |  |
| `bgm` | [MV.AudioParameters](MV.AudioParameters.md) |  |  |
| `pos` | [Number](Number.md) | <optional> |  |


#### (static) decryptImg (url, bitmap)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) |  |
| `bitmap` | [Bitmap](Bitmap.md) |  |


#### (static) extToEncryptExt (url) → {[String](String.md)}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `url` | [String](String.md) |  |


#### (static) readEncryptionkey ()
