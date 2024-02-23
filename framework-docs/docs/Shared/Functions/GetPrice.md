---
sidebar_position: 5
description: Get the price of a product
---

# GetPrice
Utilises the GetGamepassInfo / GetProductInfo and returns the price!

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local id = 3485435345 -- random id

local price = Functions.GetPrice(id) -- R$500
```