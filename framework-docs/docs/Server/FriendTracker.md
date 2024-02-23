---
sidebar_position: 9
description: Friend Tracker
---

# Friend Tracker
This is a utility module for seeing how many friends are in your game.

It has one function that returns a table of friends in your game.
```lua
local Framework = require(path.to.framework).GetServer()
local Friends = Framework.Friends

local Friends = Friends.GetFriends(player) --assuming player is already defined.
```