---
sidebar_position: 12
description: Reward
---

# Reward

The `Reward` module handles the presentation and distribution of rewards to players in a game. It includes functionality for showing rewards, creating visual effects, and sending reward data between server and client.

## Module Structure

```
Reward
│   Event
├─── ShowReward
└─── end
```
# Types

## `RewardData`
- Represents the data structure for a reward.
  - `Reward: string`: The name or description of the reward.
  - `Icon: number`: An identifier for the reward's icon.

# Functions

## `Reward.ShowReward(Player: Player, RewardData: RewardData)`
- Shows a reward to a player and triggers visual effects.
- **Parameters:**
  - `Player`: The player to whom the reward is presented.
  - `RewardData`: The data structure representing the reward.
- **Visual Effects:**
  - Confetti is created using the `WorldFX` module.

# Events

## `Event`
- Triggered when a reward is shown on the client.
- **Parameters:**
  - `RewardData: RewardData`