---
sidebar_position: 8
description: Friend Tasks
---

# Friend Task
This gives you the option to set a task the users can complete (if they are friends) to redeem a reward.

## Setting up
To set this up, do the following:
```lua
local Framework = require(path.to.framework).GetServer()
local FriendTask = Framework.FriendTask

FriendTask.SetFunction(function(player: Player)
    print(`{player.Name} has completed the task!`)
end)

FriendTask.SetRequirements(currencyName, amountToGet)

FriendTask.SetDisplayReward("Reward", imageID)

FriendTask.Finalise()
```

:::info
Like the currency, it is vital you add the finalise method, otherwise framework go 💥
:::