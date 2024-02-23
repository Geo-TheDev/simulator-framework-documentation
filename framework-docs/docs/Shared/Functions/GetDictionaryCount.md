---
sidebar_position: 3
description: Returns number of entries
---

# GetDictionaryCount
Get the amount of entries in a dictionary

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local dictionary = {
    ["Value1"] = 10,
    ["Value2"] = 50,
    ["sdljkfh"] = "hehehe",
    ["walter"] = "white",
}

local numOfEntries = Functions.GetDictionaryCount(dictionary)
print(numOfEntries) -- 4
```