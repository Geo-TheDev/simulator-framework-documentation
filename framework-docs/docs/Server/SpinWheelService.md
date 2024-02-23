---
sidebar_position: 17
description: Everything Spin The Wheel.
---

# Spin The Wheel

# Setup
```lua
local Framework = require(path).GetServer()
local SpinTheWheel = Framework.SpinWheelSevice

-- Set interval
SpinTheWheel.SetInterval(10)

-- Set Rewards
SpinTheWheel.SetRewards({
    {
        Name = "100 Technique",
        Image = 15883723547,
        rewardFunction = function(player: Player)
            Framework.Currency.Get(player, "Technique"):Add(100)
        end,
    },
})

-- do that 7 more times :)

```