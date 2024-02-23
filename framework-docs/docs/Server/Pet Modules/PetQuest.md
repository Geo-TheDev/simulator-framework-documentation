---
sidebar_position: 4
description: Pet Quest to redeem a pet
---

# Pet Quest
A quest that a user can complete once they meet all the requirements you set.

## Setup
```lua
local Framework = require(path).GetServer()
local PetQuest = Framework.PetQuest

PetQuest.SetReward("Zombie")

PetQuest.SetDisplay("Stay in game for 20 Seconds!")

PetQuest.SetFunction(function(player: Player)
    Framework.PetModule.GivePet(player, "Zombie")
end)

PetQuest.SetTime(20) -- in seconds

PetQuest.Finalise()
```

:::warning
PetQuest.Finalise() is vital.
:::