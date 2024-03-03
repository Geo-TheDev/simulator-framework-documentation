---
sidebar_position: 9
description: Notifications
---

# Notifications

The `Notifications` module facilitates the display of notifications to players. It includes functions for sending messages, handling message requests, and adjusting notification settings.

## Dependencies
- **RunService**: `game:GetService("RunService")` for detecting whether the script is running on the server or client.
- **Players**: `game:GetService("Players")` for player-related functionality.
- **Shared Module**: Contains required modules like `Spr` and `Network`.

## Types

### `MessageData`
- Represents the data structure for a notification message.
  - `Message: string`: The message content.
  - `Color: Color3`: The color of the message text.
  - `DisplayTime: number`: The duration the message should be displayed.

## Module Structure

```plaintext
Notifications
│   OnSize
│   Sound
│   canSend
├─── SendMessage
├─── MessageRequested
└─── end
```

## Attributes

### `OnSize: UDim2`
Represents the target size for notification messages.

### `Sound: Sound`
Represents the sound to play when a notification is displayed.

### `canSend: boolean`
A flag indicating whether notifications can be sent.

## Functions

### `Notifications.SendMessage(Player: Player, MessageData: MessageData)`
Sends a notification message to a player.
- **Parameters:**
  - `Player`: The player to whom the message is sent.
  - `MessageData`: The data structure representing the message.

### `Notifications.MessageRequested(Gui: ScreenGui, MessageData: MessageData)`
Handles the request to display a notification message.
- **Parameters:**
  - `Gui`: The ScreenGui in which the message is displayed.
  - `MessageData`: The data structure representing the message.

## Events

### `ClientMessage`
Triggered when a notification message is received on the client.
- **Parameters:**
  - `MessageData: MessageData`

### `UpdatedSettings`
Triggered when notification settings are updated.
- **Parameters:**
  - `Settings: table`