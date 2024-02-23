---
sidebar_position: 11
description: Manager for inventories.
---

# Inventory
Very similar to the currency module, it's also programmed in a similar fashion.

## Creating an inventory
To create an inventory, do the following:
```lua
local Framework = require(path.to.framework).GetServer()
local Inventory = Framework.Inventory

Inventory.Create("RocketLaunchers")
Inventory.Finalise()
```

## Modifying an Inventory
To modify an inventory, you first need to get it.

```lua
-- again, assuming the player is defined.

local plrInv = Inventory.Get("RocketLaunchers", player)
```

### BindToUpdate
Fires a BindableEvent whenever the inventory is updated.

```lua
plrInv:BindToUpdate(function()
    print("Updated")
end)
```

### GetStored
Returns the players data, only use when initialising the data.
```lua
local data = plrInv:GetStored()
```

### Get
Returns the players data, also.
```lua
local data = plrInv:Get()
```

### Insert
Insert is like lua's table.insert, except its for inventories.

```lua
plrInv:Insert("AdminLauncher")
```

### Add
This adds a dictionary into the inventory.

It takes two parameters:
- Key
- Data

```lua
plrInv:Add("AdminLauncher", {
    Power = 100,
    Cooldown = 10,
})
```

### Edit
Edits an existing key in the dictionary:

```lua
plrInv:Edit("AdminLauncher", {
    Power = 500,
    Cooldown = 5,
})
```

### Remove
Removes a value from the inventory.

```lua
plrInv:Remove("AdminLauncher")
```

### HasItems
Returns a boolean if the player has/hasn't got the item

```lua
local hasItem = plrInv:HasItem("AdminLauncher")
```

### SearchItem
Searches for an item, used when searching for an item in an array instead of a dictionary.

```lua
plrInv:SearchItem("AdminLauncher")
```

### Wipe
Wipes the inventory clean

```lua
plrInv:Wipe() -- :(
```