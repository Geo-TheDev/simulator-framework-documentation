---
sidebar_position: 4
description: Animate
---

# Animate
This module makes giving players animations easier. There'll be a code example after the documentation.

## Animate
Main method to animate, returns the class for the animation.

```lua
-- Framework will be assumed to have already been required.
local Shared = Framework.Shared
local Animate = Shared.Animate

local PlayerAnimation = Animate.Animate(Humanoid, 123456, true) -- Humanoid, AnimationID, Looped
```

### KeyframeReached
Runs a function when an animation keyframe has been played.

```lua
PlayerAnimation:KeyframeReached("Punch", function()
    print("Punch player NOW!")
end)
```

### Stop
Destroys and cleans up animation

```lua
PlayerAnimation:Stop()
```

## Code Example
Example for `Untitled RPG Game`
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Framework = require(ReplicatedStorage.Framework).GetClient()

local Shared = Framework.Shared
local Network = Shared.Network

local animation = nil

Network.Connect("EquippedRocketLauncher", function()
    local char = game.Players.LocalPlayer.Character
    local hum = char:WaitForChild("Humanoid") :: Humanoid
    animation = Shared.Animate.Animate(hum, 16319169265, true)
end)

Network.Connect("UnequippedRocketLauncher", function(manuallyUnequip)
    if animation ~= nil and animation["Animation"] ~= nil then
        animation:Stop()
    end
end)
```

![Example alert](../assets/AnimateExample.gif)