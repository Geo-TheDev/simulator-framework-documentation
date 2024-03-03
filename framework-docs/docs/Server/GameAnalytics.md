---
sidebar_position: 22
description: Analytics Enabler
---

# Analytics

The `GameAnalytics` module facilitates the integration of game analytics into your game. It provides a simple mechanism to enable game analytics and stores the associated module for further use.

## Functions

### `GameAnalytics.Enable(Module: ModuleScript)`
- Enables game analytics by setting the `hasGameAnalytics` flag to `true`.
- Parameters:
  - `Module`: The ModuleScript containing the game analytics functionality.

## Attributes

### `hasGameAnalytics: boolean`
- A flag indicating whether game analytics is enabled.

### `Module: ModuleScript | nil`
- The ModuleScript associated with game analytics. It is `nil` if game analytics is not enabled.