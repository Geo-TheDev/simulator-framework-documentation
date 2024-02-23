---
sidebar_position: 6
description: Favouriting the game gives rewards
---

# Favourite Chest
This is an interface for creating the function when a player favourites the game using the favourite chest.

```lua
local Framework = require(path.to.framework).GetServer()
local FavouriteChest = Framework.FavouriteChest

FavouriteChest.setReward(function(player: Player)
    print(`{player.Name} has redeemed the favourite chest`)
end)
```