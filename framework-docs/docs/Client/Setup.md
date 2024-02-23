---
sidebar_position: 1
description: Client side setup.
---

# Setup
:::danger
**ONLY** use the **GetClient** method on client side scripts / modules, otherwise you will break the framework and it will not load correctly.
:::

To use the client side of the framework, do the following:
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Framework = require(path.to.framework).GetClient()
```

This also gives you access to the 'Shared' modules, these are also documented