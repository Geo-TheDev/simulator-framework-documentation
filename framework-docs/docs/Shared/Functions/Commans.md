---
sidebar_position: 2
description: Number seperated with commas
---

# Commas
Changes a number to a string with commas seperating the numbers.

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local number = 100000000
local newNumber = Functions.Commas(number)

print(newNumber) -- 100,000,000
```