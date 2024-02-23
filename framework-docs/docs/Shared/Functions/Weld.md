---
sidebar_position: 16
description: Welds two parts together.
---

# Weld
Welds two parts together

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

local A = workspace.partA
local b = workspace.partB

Functions.Weld(A, B, true) -- PartA, PartB, IsManualWeld (weld / WeldConstraint)
```