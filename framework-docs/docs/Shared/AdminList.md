---
sidebar_position: 3
description: Admins
---

# Admin List
This list is a constant, and does not yet have an interface.

The reason for this is because for `Plus One Games`, we use the insertion method, and if others use the framework outside of the group, manually editing this will work as the insertion method will not overwrite any modules.

### IsAdmin
Checks if the player passed through is an admin

```lua
local Framework = require(path).GetServer()
local Shared = Framework.Shared

if (Shared.AdminList.IsAdmin(Player)) then
    print(`{Player.Name} is an admin!`)
end
```