---
sidebar_position: 19
description: Everything Trails.
---

# Trails

## new
Gives the player a trail, physically

```lua
local Framework = require(path).GetServer()
local Trails = Framework.Trails

local MyTrail = Trails.new(player, ColorSequence, 10) -- 10x
```

### Destroy
Destroys the trail
```lua
MyTrail:Destroy()
```

## GetMultiplier
Returns the multiplier the player has

```lua
Trails.GetMultiplier(player)
```

## AddTrailToData
Adds a trail to someones data, has to be a valid trail name.

```lua
Trails.AddTrailToData(player, "Blue Trail")
```

## AttemptToEquip
Checks if the player has the trail, and equips it if they do

```lua
Trails.AttemptToEquip(player, "Blue Trail")
```