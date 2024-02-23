---
sidebar_position: 1
description: Shared setup.
---

# Setup
:::tip
**BOTH** the **server** and **client** can use this.
:::

To use the shared modules, do the following:
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Framework = require(path.to.framework).GetServer() -- or GetClient()

local Shared = Framework.Shared
```