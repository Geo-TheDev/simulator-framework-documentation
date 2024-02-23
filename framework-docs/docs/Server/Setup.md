---
sidebar_position: 1
description: Server side setup.
---

# Setup
:::danger
**ONLY** use the **GetServer** method on server side scripts / modules, otherwise you will break the framework and it will not load correctly.
:::
:::tip
It is suggested you create a ServerLoader server script inside of ServerScriptService to hold the interfacing for the modules.
:::

To use the server side of the framework, do the following:
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Framework = require(path.to.framework).GetServer()
```

This also gives you access to the 'Shared' modules, these are also documented