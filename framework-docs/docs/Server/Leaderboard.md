---
sidebar_position: 21
description: Leaderboards.
---

# Leaderboard
Leaderboard module to create leaderboards for currencies made in the game.

## Get
This function either creates a new leaderboard, if one with the currency does not already exist, *or*, it returns the class for the already existing leaderboard.

Class being the metatable holding all methods to interact with the leaderboard.

```lua
local Framework = require(path).GetServer()
local Leaderboard = Framework.Leaderboard

local WinsLeaderboard = Leaderboard.Get("Wins") -- Takes in the currency as first parameter.
```

### GetServerLeaderboard
Returns all of the players on the leaderboard that are in the current server.

```lua
WinsLeaderboard:GetServerLeaderboard()
```

### GetStored
Returns **every** player on the leaderboard.

```lua
WinsLeaderboard:GetStored()
```

### Initialise
Initialises the update loop to update the leaderboard data.

```lua
WinsLeaderboard:Initialise()
```

### Store
Adds new data to the leaderboard from a table.

```lua
local newUsers = {
    [213106169] = 100,
    [213106169] = 100,
    [213106169] = 100,
}

WinsLeaderboard:Store(newUsers)
```

### GetRankings
:::tip
When interacting with the leaderboard, it's better to use this to get the current players on the leaderboard as it returns a cached table, avoiding the use of `GetAsync` and yielding, unless you use promises for the asynchronous operations support.
:::

Retrieves a cached table of all the current players on the leaderboard.

```lua
WinsLeaderboard:GetRankings()
```

### BindToUpdate
Asigns a function to be called once the leaderboard updates.

```lua
local WinsLeaderboard = Leaderboard:Get("Wins")

function leaderboardUpdated(rankings)
    for i, v in rankings do
        print(`{i}: {v}`)
    end
end

WinsLeaderboard:BindToUpdate(leaderboardUpdated)
```