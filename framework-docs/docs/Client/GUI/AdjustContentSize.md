---
sidebar_position: 7
description: Auto-Adjust frame size to fit content
---

## Overview
The `AdjustContentSize` class is designed to dynamically adjust the size of UI elements based on the content size of a UIListLayout. It utilizes the RunService to continuously update the size of specified UI elements.

## Constructor
### `AdjustContentSize.new(UIListLayout: UIListLayout, Background: Frame, ImgBlur: ImageLabel)`
- Creates a new instance of the `AdjustContentSize` class.
- Parameters:
  - `UIListLayout`: The UIListLayout whose content size will be monitored.
  - `Background`: The Frame element whose size will be adjusted based on the content size.
  - `ImgBlur`: The ImageLabel element whose size will be adjusted based on half of the content size.

## Methods
### `AdjustContentSize:Init()`
- Initializes the `AdjustContentSize` instance by connecting to the RunService's Heartbeat event.
- Updates the size of `Background` and `ImgBlur` based on the content size of the specified `UIListLayout`.

### `AdjustContentSize:Destroy()`
- Disconnects the connection to the Heartbeat event, stopping the continuous updates of element sizes.

## Example Usage
```lua
-- Example Usage:
local Framework = require(path.to.framework).GetClient()
local GUI = Framework.GUI
local AdjustContentSize = GUI.AdjustContentSize

local myListLayout = -- get or create your UIListLayout
local myBackground = -- get or create your Frame element
local myImgBlur = -- get or create your ImageLabel element

local adjuster = AdjustContentSize.new(myListLayout, myBackground, myImgBlur)

-- Optionally, you can call adjuster:Destroy() to stop updates and disconnect from the Heartbeat event.
