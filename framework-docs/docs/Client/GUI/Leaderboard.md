---
sidebar_position: 8
description: Leaderboard UI Creator
---

# Leaderboard Class

The `Leaderboard` class is designed to create and manage leaderboards in a game. It utilizes a UI template for player entries, updates rankings based on provided data, and listens for events to keep leaderboards synchronized.

## Dependencies
- **Framework**: The framework containing shared modules.
- **Shared**: Shared modules such as `BigNum`, `Functions`, `Services`, `Network`, and `Abbreviation`.
- **Assets**: Asset folder containing GUI elements.

## Constructor
### `Leaderboard.new(part: BasePart, currency: string)`
- Creates a new instance of the `Leaderboard` class.
- Parameters:
  - `part`: The BasePart to which the leaderboard UI will be attached.
  - `currency`: The currency type associated with the leaderboard.

## Methods
### `Leaderboard:Update(rankings: {})`
- Updates the leaderboard UI based on the provided rankings data.
- Clears existing entries and creates new player entries.

### `Leaderboard:CreatePlayer(rank: number, userId: number, amount: number)`
- Creates a new player entry in the leaderboard UI.
- Populates the entry with user information and ranking details.

### `Leaderboard:Clear()`
- Clears all player entries in the leaderboard UI.

### `findLeaderboards()`
- Finds and initializes leaderboards in the game environment.
- Creates instances of the `Leaderboard` class for each valid leaderboard part.

## Events
- **LeaderboardUpdated(currency: string, rankings: {})**
  - Triggered when the server sends updated leaderboard data.
  - Updates the corresponding leaderboard instance with the new rankings.

- **DataLoaded()**
  - Triggered when the game data is loaded.
  - Calls `findLeaderboards()` to initialize leaderboards.