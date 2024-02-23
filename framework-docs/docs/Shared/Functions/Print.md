---
sidebar_position: 9
description: Print message with prefix
---

# Print
Prints a message with a prefix

```lua
local Shared = Framework.Shared
local Functions = Shared.Functions

Functions.Print("Sucess Message", "success")--   "✅ Success Message"
Functions.Print("Fail Message", "fail")--        "❌ Fail Message"
Functions.Print("Warning Message", "warning")--  "⚠️ Warning Message"
Functions.Print("Notice Message", "notice")--    "📌 Notice Message"
Functions.Print("Debug Message", "debug")--      "🛠️ Debug Message"
```