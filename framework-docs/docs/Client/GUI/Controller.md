---
sidebar_position: 6
description: Manually control the way UI works.
---
# Controller

:::danger
**ONLY** use this when dealing with custom ui you implement into the framework.
:::

Define your variables:
```lua
local Framework = require(path.to.framework).GetClient()
local GUI = Framework.GUI

local Controller = Framework.Controller
```

The 'Controller' module has 3 main functions. The rest, you do **NOT** use under any circumstance.

# ShowMainUI
This function shows all the main UI, and disables any lighting effects, such as blur.
```lua
Controller.ShowMainUI() -- Usually used when hiding a frame.
```

# HideMainUI
This function hides all the main UI, and enables any lighting effects.
It also hides all the UI currently being viewed to the user.
```lua
Controller.HideMainUI() -- Usually used when showing a frame.
```

# HideUI
This function loops through all UI defined in the first parameter and hides.
It takes in an exception as well, so you are able to hide everything BUT that one frame.
```lua
Controller.HideUI(Frame, Exception) -- Usually used when showing a frame.
```