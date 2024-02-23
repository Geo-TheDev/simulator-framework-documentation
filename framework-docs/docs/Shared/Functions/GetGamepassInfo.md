---
sidebar_position: 4
description: Get gamepass information from ID
---

# GetGamepassInfo
Returns gamepass information.

To avoid yielding, it caches the information!

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local GamepassID = 4389057435 --random ass id

local info = Functions.GetGamepassInfo(GamepassID) -- returns table of info
```