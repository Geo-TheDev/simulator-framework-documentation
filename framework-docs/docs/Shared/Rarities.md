---
sidebar_position: 11
description: Rarities
---

# Rarities Module

The `rarities` module provides a collection of rarity definitions along with functions to retrieve associated colors.

## Module Structure

```
rarities
│   Common
│   Uncommon
│   Rare
│   Epic
│   Legendary
│   Mythical
│   Limited
│   Developer
└─── end
```

## Functions

### `return_val(val: any) -> function`
Returns a function that always returns a specific value.
- **Parameters:**
  - `val`: The value to be returned by the function.

## Rarities

### `rarities.Common`
Represents common rarity.
- **GetColor:** Function returning the color associated with the common rarity.

### `rarities.Uncommon`
Represents uncommon rarity.
- **GetColor:** Function returning the color associated with the uncommon rarity.

### `rarities.Rare`
Represents rare rarity.
- **GetColor:** Function returning the color associated with the rare rarity.

### `rarities.Epic`
Represents epic rarity.
- **GetColor:** Function returning the color associated with the epic rarity.

### `rarities.Legendary`
Represents legendary rarity.
- **GetColor:** Function returning the color associated with the legendary rarity.

### `rarities.Mythical`
Represents mythical rarity.
- **GetColor:** Function returning a dynamically changing color based on time.

### `rarities.Limited`
Represents limited rarity.
- **GetColor:** Function returning a color cycling over time.

### `rarities.Developer`
Represents developer rarity.
- **GetColor:** Function returning the color associated with the developer rarity.