---
sidebar_position: 10
description: ProximityPrompt
---

Example Usage:
```lua
local function triggered(player)
    TimedProduct:PromptProductPurchase(Player, function(Player: Player) 
        print(`{Player.Name} tried to buy the product!`)
        return
    end)
end

local Framework = require(path).GetServer()
local Shared = Framework.Shared

local ProximityPrompt = Shared.ProximityPrompt("Buy!", "Timed Product", .5, script.Parent.Parent, triggered)
```