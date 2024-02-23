---
sidebar_position: 13
description: Converts seconds to "00:00"
---

# TimeSmall
Changes the amount of seconds to a string like "00:00"

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local seconds = 180
local newTime = Functions.TimeSmall(currentTime)

print(newTime) -- "03:00"

```