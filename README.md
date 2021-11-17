# Cryptbin

`Cryptbin` is zero knowledge paste service. Encryption happens in frontend, and decryption in the backend.

* You can hint encryption password for the receiver.
* Messages are encrypted with AES-CBC encryption.
* Multiple decryption failures will destroy the paste.
* Messages stored in RAM, no databases.
* Message live only 15 minutes.
* Messages can be burned after reading.

[https://cryptbin.org]
