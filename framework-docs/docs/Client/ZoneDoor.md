---
sidebar_position: 5
description: Automatic Zone Doors.
---

The zone door module makes anything into a door that destroys itself once the player reaches a certain zone level

This is documented in the Server Side of the Framework.

Example Code:
```lua
local Framework = require(path.to.framework).GetClient()
local ZoneDoor = Framework.ZoneDoor

local Part = workspace.Part
ZoneDoor.new(Part, 4) -- '4' is the level requirement.
```