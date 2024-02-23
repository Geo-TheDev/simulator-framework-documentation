---
sidebar_position: 3
description: Main Module for the Pet System
---

# Pet Module
Main Module for the pets.

### GetPets
Returns all the pets in the players inventory

```lua
local Framework = require(path.to.framework).GetServer()
local PetModule = Framework.PetModule

PetModule.GetPets(player)
```

### GetInventoryCapacity
Returns the max capacity

```lua
print(PetModule.GetInventoryCapacity(player))
```

### HasSpaceFor
Returns a boolean if the player has space for another pet

```lua
local hasSpace = PetModule.HasSpaceFor(player)
```

### GetMultiplier
Gets the players multiplier for all the pets combined.

```lua
local multi = PetModule.GetMultiplier(player)
```

### GetEquipped
Returns all the pets the player has equipped in a table

```lua
print(PetModule.GetEquipped(player))
```

### GetEquippedPets
Returns the number of pets equipped

```lua
print(PetModule.GetEquippedPets(player))
```

### GetMaxEquipped
Returns the maximum pet slots a player has

```lua
return PetModule.GetMaxEquipped(player)
```

### EquipBest
Equips the best pets the player has
```lua
PetModule.EquipBest(player)
```

### Equip
Equips a pet using the index.
```lua
PetModule.Equip(player, 10) -- index of the pet they want to equip.
```

### Unequip
Opposite of Equip.
```lua
PetModule.Unequip(player, 10)
```

### GivePet
Gives the player a pet

The pet must be valid, otherwise you cause data issues.
```lua
PetModule.GivePet(player, "Cat")
```

### DeletePets
Deletes a ton of pets from a table

The value taken in is NOT the pets name, but the index.
```lua
PetModule.DeletePets(player, { 1, 5, 10, 4, 9 })
```