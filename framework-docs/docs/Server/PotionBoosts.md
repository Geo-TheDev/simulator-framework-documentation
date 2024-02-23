---
sidebar_position: 15
description: Timed boosts for currencies.
---

# Potion Boosts
This basically allows you to set timed boosts for currencies.

### GetMultiplier
```lua
local Framework = require(path).GetServer()
local PotionBoosts = Framework.PotionBoosts

PotionBoosts.GetMultiplier(player, "Wins")
```

### GiveBoost
Give a boost to a player, for a currency, with a multiplier and amount of time (in seconds)

```lua
PotionBoosts.GiveBoost(player, "Wins", 10, 60) -- 10x Wins for 60 Seconds
```