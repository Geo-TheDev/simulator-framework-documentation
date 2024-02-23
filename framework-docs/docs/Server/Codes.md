---
sidebar_position: 3
description: Manage redeemable codes
---

# Codes

:::info
The data for these codes is automatically set, so you do not have to manage code data when redeeming codes.
:::

The codes module has one main method

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Framework = require(path.to.framework).GetServer()

Framework.Codes.Create("TestCode", function(Player: Player)
    print(`{Player.Name} has redeemed the TestCode!`)
end)
```