---
sidebar_position: 20
description: Worlds and Zones.
---

# Worlds

## Setup
```lua
local Framework = require(path).GetServer()
local Worlds = Framework.Worlds
```

### Creating a world
Creating a world is easy.

```lua
Worlds.CreateWorld("World Name", "World Image ID")
```

### Creating a Zone
The world name parented to the zone must be VALID.

```lua
Worlds.CreateZone("Zone 1", Vector3.new(0,10,-50), "World Name")
```

### Finalise
:::danger
If you do not finalise, you risk yielding the framework.

Not even risk it you do in fact yield it, don't know why, don't care.

```lua
Worlds.Finalise()
```
:::