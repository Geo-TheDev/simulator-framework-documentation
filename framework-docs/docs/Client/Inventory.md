---
sidebar_position: 3
description: Get inventory data synced from the server.
---

:::info
You cannot edit inventory data in this module, this is simply to GET inventory data.
Think of it like a RemoteFunction, without the yielding.
:::

To use the inventory module, do:
```lua
local Framework = require(path.to.framework).GetClient()
local Inventory = Framework.Inventory
```

Get Inventory Data:
```lua
local PlayerInventory = Inventory.Swords
-- returns an untyped dictionary with all the players swords
-- remember, it could be nil, so check that too!
```

The code for the module is very small, its just a dictionary that updates itself once Inventory Data on the server is updated.

```lua
local Network = require(script.Parent.Parent.Shared.Network)

local Inventory = {}

Network.Connect("InventoryUpdate", function(name, value)
    Inventory[name] = value
end)

return Inventory
```
