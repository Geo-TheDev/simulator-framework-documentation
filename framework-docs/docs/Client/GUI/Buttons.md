---
sidebar_position: 2
description: Automatic button UX!
---

This module allows you to instantly load animations for every single button inside a GUI!

The animations utilise 'Spring Driven Motion', a module that I found on [Github](https://github.com/Fraktality/spr)

```lua
local Framework = require(path.to.framework).GetClient()
local GUI = Framework.GUI
```

There are multiple ways to load animations for buttons in a frame:
```lua
-- This loads the button specified, not multiple
GUI.Buttons.Load(ButtonObject: GuiButton, TweenObject: GuiObject)

-- This loop through the 'Frame', finds the buttons and it'll tween the parent, or just the button
-- depending on what you put for the TweenParent param
GUI.Buttons.LoadChildren(Frame: Frame, TweenParent: Boolean)

-- This relatively does the exact same as 'LoadChildren', but loops through
-- all the descendants in the frame, and finds every button, and animates it
-- by far the most useful.
GUI.Buttons.LoadDescendants(Frame: Frame, TweenParent: Boolean)
```

:::warning
This does exactly what its told to do, so if a button is animated incorrectly, you may have looped through all the buttons, tweened their parent,
and some buttons that don't have a parent Frame will be animated.
:::