---
sidebar_position: 1
description: Weighted Chance
---

# Chance
Example:

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local sword_drop = Functions.Chance(
    {"wood-sword", 500},
    {"stone-sword", 100},
    {"iron-sword", 45},
    {"gold-sword", 18},
    {"diamond-sword", 5},
    {"emerald-sword", 0.05},
)

print(sword_drop)
```