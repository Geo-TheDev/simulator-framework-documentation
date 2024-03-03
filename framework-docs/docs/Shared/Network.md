---
sidebar_position: 8
description: Network
---

# Network

The `communication` module provides a framework for communication between server and client using RemoteEvents and RemoteFunctions. It allows for establishing connections, handling requests, and sending data between server and client.

## Module Structure
```
│ Connections
│ send
│ send_to
│ stream
│ stream_to
│ request
│ Receive
│ Connect
│ Endpoint
│ Connection
│ connection.new
│ handle_request
│ enqueue
│ unqueue
```

## Attributes

### `Connections: table`
- A table to store active connections.

## Functions

### `communication.Connect(name: string, func: () -> ()) -> Connection`
- Establishes a connection for handling named network events.
- Parameters:
  - `name`: The name of the network event.
  - `func`: The function to be executed when the event is received.

### `communication.Endpoint(name: string, func: (Player) -> ())`
- Registers an endpoint to handle incoming requests.
- Parameters:
  - `name`: The name of the endpoint.
  - `func`: The function to be executed when a request is received.

### `communication.Send(...)`
- Sends data using the TCP protocol to all clients or the server.
- Parameters: Variable arguments to be sent.

### `communication.SendToPlayer(player: Player, ...)`
- Sends data using the TCP protocol to a specific player on the server.
- Parameters: Variable arguments to be sent.

### `communication.Stream(...)`
- Sends data using the UDP protocol to all clients or the server.
- Parameters: Variable arguments to be sent.

### `communication.StreamToPlayer(player: Player, ...)`
- Sends data using the UDP protocol to a specific player on the server.
- Parameters: Variable arguments to be sent.

### `communication.Request(...) -> any`
- Sends a request using the Endpoint protocol to the server and waits for a response.
- Parameters: Variable arguments representing the request.

### `communication.Receive(...)`
- Receives data and triggers associated connections or endpoints.
- Parameters: Variable arguments received from the network.

## Classes

### `Connection`
- Represents a connection created using `communication.Connect`.
- Methods:
  - `Disconnect()`: Disconnects the connection.

### `connection.new(name: string, func: () -> ()) -> Connection`
- Creates a new connection instance.
- Parameters:
  - `name`: The name of the connection.
  - `func`: The function to be executed when the event is received.