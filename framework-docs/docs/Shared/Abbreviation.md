---
sidebar_position: 2
description: Changes a number to an abbreviated version
---

# Abbreviation
Changes a number to an abbreviated version.

### abbreviate
```lua
local Framework = require(path).GetClient()
local Shared = Framework.Shared
local Abbreviation = Shared.Abbreviation

local number = 100000
local secondNumber = 100000000000

print(Abbreviation.abbreviate(number)) -- 100K
print(Abbreviation.abbreviate(secondNumber)) -- 100Aa
```