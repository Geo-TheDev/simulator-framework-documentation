---
sidebar_position: 16
description: Gamepasses in the form of developer products.
---

# PsuedoPasses
Gamepasses in the form of developer products.

## Setup

### new
Makes a new "gamepass"


```lua
local Framework = require(path).GetServer()
local Passes = Framework.PsuedoPasses

local newPass = Passes.new("10x Luck", 234934) -- name, product ID
```

### UserOwns
Checks if the user owns the pass

```lua
newPass:UserOwns(player)
```

### PromptPurchase
Prompts the purchase for the pass

```lua
newPass:PromptPurchase(player)
```

### Give
Gives the player the pass

```lua
newPass:Give(player)
```

## Get
Returns the pass metatable

```lua
Passes.Get("10x Luck")
```

## PromptPass
Prompts the purchase for a pass

```lua
Passes.PromptPass(player, "10x Luck")
```

## UserOwnsPass
```lua
Passes.UserOwnsPass(player, "10x Luck")
```