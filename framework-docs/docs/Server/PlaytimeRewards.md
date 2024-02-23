---
sidebar_position: 14
description: Playtime Rewards.
---

# Playtime Rewards
Playtime rewards. Self explanatory.

## Setup

```lua
local Framework = require(path).GetServer()
local PlaytimeRewards = Framework.PlaytimeRewards

--Setting an interval in seconds
PlaytimeRewards.SetInerval(10)

--Settings Rewards
PlaytimeRewards.setRewards({
    {
	Name = "Technique",
	Image = 15883723547,
	rewardFunction = function(player: Player)
		Framework.Currency.Get(player, "Technique"):Add(100)
	end,
    }
})

-- Do that another 14 times :)
```