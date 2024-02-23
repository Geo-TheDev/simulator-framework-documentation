---
sidebar_position: 4
description: Text Chat Commands
---

# Commands
:::tip
The admins are set directly in the 'Shared' part of the framework, you should edit that to your liking as you will not be able to use the codes if you
aren't a registered admin.
:::

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Framework = require(path.to.framework).GetServer()

Framework.Commands.Create("KickMe", function(player: Player)
    player:Kick("You kicked yourself!")
end)
```