---
sidebar_position: 12
description: Manager for data.
---

# PlayerData
I'm only going to supply one function, as the rest are all handled for you.

## GetData
Get data returns the current players data, this is used when players join the get the last saved data they have in the game
Saving data is automatically handled for you, as the dictionary returned is mutable, not immutable.

```lua
local Framework = require(path).GetServer()
local PlayerData = Framework.PlayerData

PlayerData.Get(player)
```