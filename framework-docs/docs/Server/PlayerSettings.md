---
sidebar_position: 13
description: Player settings.
---

# Player Settings
All the settings for the player

## ToggleSettings
Toggles a setting:

```lua
local Framework = require(path).GetServer()
local Settings = Framework.PlayerSettings

Settings.ToggleSetting(player, "Music")
```

## GetSettings
Returns a table of settings

```lua
local settings = Settings.GetSettings(player)
```