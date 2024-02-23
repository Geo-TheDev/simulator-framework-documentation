---
sidebar_position: 4
description: Generates a Unique ID
---

# GenerateUUID
Returns a unique ID, good for keys in dictionaries.

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local UUID = Functions.GenerateUUID()
print(UUID) -- something like: 9F4C4CD108DE4665AD4E09A9A6E7B534

```