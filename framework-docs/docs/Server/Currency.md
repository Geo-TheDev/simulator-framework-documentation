---
sidebar_position: 5
description: Manager for currencies.
---

# Currency
This module is one of the most useful modules in the entire framework.

It allows you to create and modify currency.

## Creating a currency
To create a currency, require the framework and do the following:
```lua
local Framework = require(path.to.framework).GetServer()
local Currency = Framework.Currency

Currency.Create("Wins", "rbxassetid://14647075582", Color3.new(1, 0.73, 0))
```
There are a couple rules when creating currency:
- The name is **required**
- If you do not specify an image, it won't create **any** UI
- If you do not specify a colour, it will be created on the sidebar below the menu buttons.

When you have finished creating your currencies, you **MUST** use the Finalsie method, otherwise it will not create the currencies
```lua
Currency.Finalise()
```
:::danger
Do not use the BEFORE you finish creating all the currency, its common sense come on i don't gotta explain why.
:::

## Modifying a currency
To modify a currency, you first need to get the currency:
```lua
-- assuming you already have the player defined as 'player'

local Framework = require(path.to.framework).GetServer()
local Currency = Framework.Currency

local playerCurrency = Currency.Get(player, currencyName)
```

### BindToUpdate
:::warning
This can only be used on server side scripts / modules
:::
BindToUpdate fires a BindableEvent once the currency has been updated.
```lua
playerCurrency:BindToUpdate(function()
    -- do things here, like grabbing new values.
end)
```

### GetMultipliers
This returns the multipliers that have been applied to the currency such as:
- Pets
- Trails
- Potions
- Friend Boost

```lua
local multipliers = playerCurrency:GetMultipliers()
print(multipliers) -- e.g. 5
```

### Encode
Bignum dictionary -> readable string

```lua
local encoded = playerCurrency:Encode()
```

### GetValue
Returns the stored bignum

```lua
local Bignum = playerCurrency:GetValue()
```

### CanAfford
This method returns a boolean which tells you whether a player can afford something.

This does **NOT** remove currency

```lua
local canAfford = playerCurrency:CanAfford(500)

if canAfford then
    print("Can afford")
else
    print("Can't afford")
end
```

### AttemptPurchase
Like CanAfford, this returns a boolean if the player can afford something, however, this one **DOES** remove currency.

This acts like a shop system, for example, when a player clicks to buy something, you can check whether it goes through or not.

```lua
local hasPurchased = playerCurrency:AttemptPurchase(500)

if hasPurchased then
    print("Has Purchased")
else
    print("Hasn't Purchased")
end
```

### GetStored
Returns the stored value of the currency
```lua
print(playerCurrency:GetStored())
```

### GetRealAmount
Difficult to explain, but this method gives you a number when all multipliers have been applied.

```lua
local number = 10
local numberWithMultipliers = playerCurrency:GetRealAmount(number)
```

### Set
This sets the currency to a number, multipliers are not applied.
```lua
playerCurrency:Set(100)
```

### Multiply
This multiplies the current stored data.
```lua
playerCurrency:Multiply(10) -- 10x
```

### Divide
Does the opposite of multiply
```lua
playerCurrency:Divide(10) -- / 10
```

### Add
Adds an amount to the currency

You can specify whether you apply multipliers or not, but bare in mind, not specifying automatically denies the use of multipliers.

```lua
playerCurrency:Add(10) -- no multipliers
playerCurrency:Add(10, false) -- no multipliers
playerCurrency:Add(10, true) -- multipliers
```

### Subtract
Subtracts an amount from the currency, multipliers are not used in this method at all.

```lua
playerCurrency:Subtract(100)
```

### Raise
Exponentiates the amount with the supplied exponent

```lua
playerCurrency:Raise(10) -- amount ^= 10
```