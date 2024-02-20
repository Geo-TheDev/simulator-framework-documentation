---
sidebar_position: 4
description: Find out what platform the player is playing on.
---

This is used to find out what platform the player is playing on, to alter the user experience.

```lua
local Framework = require(path.to.framework).GetClient()
local Platform = Framework.Platform
```

This returns a dictionary of booleans:
```lua
{
    Desktop = false,
    Mobile = false,
    Console = false,
    VR = false,
    SupportsVR = false;
}
```

The values are automatically changed, so all you have to do is:
```lua
local isConsole = Platform.Console
```