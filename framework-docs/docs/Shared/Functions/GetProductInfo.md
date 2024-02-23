---
sidebar_position: 6
description: Get developer product information from ID
---

# GetProductInfo
Returns developer product information.

To avoid yielding, it caches the information!

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local ProductID = 4389057435 --random ass id

local info = Functions.GetProductInfo(ProductID) -- returns table of info
```