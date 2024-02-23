---
sidebar_position: 2
description: Send alerts to the player
---

# Alert
:::info
This is a server side function used to send alerts to the player.
:::

To use the server side of the framework, do the following:
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Framework = require(path.to.framework).GetServer()

game.Players.PlayerAdded:connect(function(player: Player)
    Framework.Alert(player, "This is the message")
end)
```