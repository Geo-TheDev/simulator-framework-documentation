---
sidebar_position: 15
description: Converts UserId to Username
---

# UserIdToUsername
Changes UserId to the users username

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local userId = 213106169
local name = Functions.UserIdToUsername(userId)

print(name) -- "Geo_TheDev"
```