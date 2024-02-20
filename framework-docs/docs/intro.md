---
sidebar_position: 1
---

# Installation

:::warning
Using the insertion only works for games under the **Plus One Games** Group
If you are using the Source, you need to insert it from your models in the toolbox
:::

## RBXM
Download the RBXM [here](https://create.roblox.com/store/asset/16047465467/Framework)

## Manually
To manually setup the Framework, do the following:
- Add a Module Script inside of ReplicatedStorage
- Name it Framework
- Add the following code:

```lua
local insert = game:GetService("InsertService")
local id = 15972165690
local rs = game:GetService("RunService")

local fail_message = "Failed to load framework."

function kick_player(player: Player)
    player:Kick(fail_message)
end

function shutdown()
    game.Players.PlayerAdded:Connect(kick_player)
    for i, player in game.Players:GetPlayers() do
        kick_player(player)
    end
end

function await()
    return script:WaitForChild("Source")
end

function import()
    if rs:IsClient() then return await() end
    local model = insert:LoadAssetVersion(insert:GetLatestAssetVersionAsync(id))
    local module = model:GetChildren()[1]
    module.Parent = script
    model:Destroy()
    return module 
end

local framework = script:FindFirstChild("Source")
if framework then return require(framework) end

local success, response = pcall(import)
if success then
    local f = require(response)
    return f
end

shutdown()
```