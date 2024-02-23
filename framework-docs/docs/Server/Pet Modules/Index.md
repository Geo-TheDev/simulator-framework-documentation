---
sidebar_position: 2
description: Pet Index
---

# Index
Mostly utility functions for pet system, but you can use these to get index data.

```lua
local Framework = require(path).GetServer()
local Index = Framework.Index
```

### setIndexLevel
Sets the level for the player, also adds more pet equip slots depending on their level!

```lua
Index.setIndexLevel(10)
```

### getAllPets
Gets all the pets, with the default value of false in the dictionary for each pet.
```lua
local pets = Index.getAllPets()
```

### getUnlocked
Returns all the pets the player has unlocked

```lua
local unlocked = Index.getUnlocked(player)
```

### getUnlockedNum
Returns the number of pets the player has unlocked

```lua
print(Index.getUnlockedNum(player))
```

### addPetToIndex
Force adds a pet to the players index, the PetModule already does this.

It also gives you a cool notification if you reach above the level requirement!

```lua
Index.addPetToIndex(player, "Cat")
```

### getIndex
Returns the players index

```lua
Index.getIndex(player)
```