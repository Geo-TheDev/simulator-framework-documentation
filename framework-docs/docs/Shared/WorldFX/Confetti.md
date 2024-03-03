---
sidebar_position: 1
description: Confetti
---

# Confetti

The `Confetti` module manages the creation and display of confetti effects in the game. It utilizes the `WorldFX` module to generate visual effects, and it can be triggered both on the server and the client.

## Module Structure

```lua
Confetti
├─── create
├─── __new
├─── Init
└─── Destroy
```

# Types

## `confettiInfo`
- Represents the data structure for configuring the confetti effect.
  - `Speed: number`: Speed of the confetti particles.
  - `Rate: number`: Rate at which confetti particles are emitted.
  - `Height: number`: Vertical height at which the confetti appears.
  - `DestroyTime: number`: Time before the confetti effect is automatically destroyed.

# Functions

## `Confetti.create(Player: Player, ConfettiInfo: confettiInfo)`
- Creates and displays a confetti effect for a specific player.
- **Parameters:**
  - `Player`: The player for whom the confetti effect is generated.
  - `ConfettiInfo`: The configuration data for the confetti effect.

## `Confetti.__new(Player: Player, Speed: number, Rate: number, Height: number, DestroyTime: number)`
- Internal function for creating a new instance of the `Confetti` class.
- Called by `Confetti.create` to handle the confetti creation process.

## `Confetti:Init()`
- Initializes the confetti effect by enabling it and scheduling its destruction after a specified time.

## `Confetti:Destroy()`
- Destroys the confetti effect, disconnecting connections, removing attachments, and disabling the visual effect.

# Events

## `Network.Connect("Confetti", function(confettiInfo: confettiInfo))`
- Listens for a network event indicating the need to create a confetti effect on the client.
- Calls `Confetti.create` to initiate the confetti effect.
