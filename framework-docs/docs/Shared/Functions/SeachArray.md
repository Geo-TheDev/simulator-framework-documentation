---
sidebar_position: 11
description: Searches an array
---

# SearchArray
Searches an array for a specific value

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local array = {
    [1] = "test",
    [2] = "test2",
    [3] = "test3",
}

if Functions.SearchArray(array, "test2") then
    print("Yes")
end
```