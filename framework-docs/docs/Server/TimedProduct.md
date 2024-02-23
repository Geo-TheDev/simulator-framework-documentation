---
sidebar_position: 18
description: Products with a timer.
---

# TimedProduct

## Setup

### new
```lua
local Framework = require(path).GetServer()
local TimedProducts = Framework.TimedProducts

--Product ID, TimeStarted, TimeEnd, BoughtFunction
local Product = TimedProducts.new(32834, tick(), tick() + 10800, function(player: Player)
    print("Player has bought the pass")
end)
```

### PromptProductPurchase
Prompts the purchase for the product, fails if it goes overtime

```lua
Product:PromptProductPurchase(player, function(player: Player)
    print("Player has bought the pass")
end)
```

### GetTimeString
Returns a cool string like:

'1 Day Left'
```lua
Product:GetTimeString()
```