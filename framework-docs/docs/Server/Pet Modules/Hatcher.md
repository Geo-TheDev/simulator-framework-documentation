---
sidebar_position: 1
description: Create pet eggs
---

# Hatcher
This module manages everything to do with opening eggs.

### Setup
```lua
local Framework = require(path).GetSever()
local Hatcher = Framework.Hatcher
```

## Creating an egg
Creates an egg out of a part with int values inside of it.

:::warning
The int values MUST have valid pet names otherwise you create data issues.
:::

```lua
local Egg = Hatcher.new(Part)
```

### AutoHatch
This allows the user to autohatch an egg

```lua
Egg:AutoHatch(player)
```

### SetBuy1Function
This sets the function to buy one egg.

```lua
Egg:SetBuy1Function(function(player: Player)
    Egg:Open(player, 1)
end)
```

### SetBuy3Function
This sets the function to buy three eggs.

```lua
Egg:SetBuy3Function(function(player: Player)
    Egg:Open(player, 3)
end)
```

### Open
Force open an egg of your choice, but only if the server says so!

```lua
Egg:Open(player, 1) -- force opens 1 eggs
Egg:Open(player, 3) -- force opens 3 eggs
-- anything less than 1, or more than 3 will not be accepted.
```