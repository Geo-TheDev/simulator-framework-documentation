---
sidebar_position: 7
description: Monetisation
---

# Monetisation

The `Monetisation` module provides functionality for handling game passes and in-game purchases. It manages user-owned game passes, prompts for purchases, and fires events upon successful purchases.

## Dependencies
- **Players**: `game:GetService("Players")` for player-related functionality.
- **MarketplaceService**: `game:GetService("MarketplaceService")` for handling in-game purchases.
- **ReplicatedStorage**: `game.ReplicatedStorage` for storing game passes.
- **Shared Network Module**: Networking module for communication between server and client.
- **GameAnalytics Module**: Module for game analytics (optional).

## Functions

### `module.PromptGamepass(player: Player, pass: IntValue | StringValue)`
- Prompts the player to purchase the specified game pass.
- For `IntValue` passes, it sends a prompt to the client; for `StringValue` passes, it uses pseudo passes.

### `module.PromptProduct(player: Player, id: number)`
- Prompts the player to purchase the specified product.

### `module.PlayerOwnsPass(player: Player, pass: IntValue | StringValue): boolean`
- Checks if the player owns the specified game pass or pseudo pass.

### `module.ConnectToGamepassPurchase(value: IntValue, func: (player: Player) -> void) -> RBXScriptConnection`
- Connects a function to be executed when the specified game pass is purchased.

### `module.ConnectToProductPurchase(id: number, func: (player: Player) -> void) -> RBXScriptConnection`
- Connects a function to be executed when the specified product is purchased.

## Events

### `GamepassPurchased`
- Fired when a game pass is purchased.
- Parameters: `gamepassId: number, player: Player`

### `DevProductPurchased`
- Fired when a developer product is purchased.
- Parameters: `productId: number, player: Player`