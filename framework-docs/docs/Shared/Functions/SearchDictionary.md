---
sidebar_position: 12
description: Searches a dictionary
---

# SearchDictionary
Searches a dictionary for a specific value

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local dictionary = {
    ["first test"] = "test",
    ["second test"] = "test2",
    ["another test"] = "test3",
}

if Functions.SearchDictionary(dictionary, "test2") then
    print("Yes")
end

local test2 = Functions.SearchDictionary(dictionary, "test2")
print(test2) -- "test2"
```