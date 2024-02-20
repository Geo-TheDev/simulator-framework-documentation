---
sidebar_position: 4
description: Tooltips that show when you hover over buttons!
---

This allows the user to see extra information on a smooth animated Tooltip!
:::warning
This only works on button hover events, nothing else.
:::

```lua
local Framework = require(path.to.framework).GetClient()
local GUI = Framework.GUI
```

To create a Tooltip, do the following:
```lua
local Tooltip = Framework.GUI.Tooltips.new(Button, "Tooltip Text")
```

To destroy the Tooltip completely, do:
```lua
Tooltip:destroy()
```