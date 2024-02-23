---
sidebar_position: 14
description: Larger than time small.
---

# TimeString
Does the same as `TimeSmall`, but bigger :0

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local threeDays = 259200
local newTime = Functions.TimeString(threeDays)
print(newTime) -- "3 Days"
```