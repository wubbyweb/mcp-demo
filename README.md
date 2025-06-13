# 🌟 MCP Demo Project 🌟

```
███╗   ███╗ ██████╗██████╗     ██████╗ ███████╗███╗   ███╗ ██████╗ 
████╗ ████║██╔════╝██╔══██╗    ██╔══██╗██╔════╝████╗ ████║██╔═══██╗
██╔████╔██║██║     ██████╔╝    ██║  ██║█████╗  ██╔████╔██║██║   ██║
██║╚██╔╝██║██║     ██╔═══╝     ██║  ██║██╔══╝  ██║╚██╔╝██║██║   ██║
██║ ╚═╝ ██║╚██████╗██║         ██████╔╝███████╗██║ ╚═╝ ██║╚██████╔╝
╚═╝     ╚═╝ ╚═════╝╚═╝         ╚═════╝ ╚══════╝╚═╝     ╚═╝ ╚═════╝ 
                                                                     
🔄 Word Reversal Server with Server-Sent Events Support 🔄
```

A comprehensive demonstration of **Model Context Protocol (MCP)** server with **Server-Sent Events (SSE)** support and a **word reversal tool**.

## 🎨 Visual Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    🌟 MCP DEMO ECOSYSTEM 🌟                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📡 STDIO Mode                    🌐 SSE Mode                   │
│  ┌─────────────┐                 ┌─────────────┐               │
│  │   Client    │◄─────STDIO─────►│   Client    │               │
│  │   📱        │                 │   📱        │               │
│  └─────────────┘                 └─────────────┘               │
│         │                               │                       │
│         ▼                               ▼                       │
│  ┌─────────────┐                 ┌─────────────┐               │
│  │ MCP Server  │                 │ MCP Server  │               │
│  │    🖥️       │                 │    🖥️       │               │
│  └─────────────┘                 └─────────────┘               │
│         │                               │                       │
│         ▼                               ▼                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │            🔄 Word Reversal Tool 🔄                    │   │
│  │         "hello" ➜ "olleh"                             │   │
│  │         "world" ➜ "dlrow"                             │   │
│  │         "demo"  ➜ "omed"                              │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## 🚀 Features Showcase

```
🎯 FEATURES MATRIX
┌────────────────┬─────────────┬─────────────┐
│    Feature     │  STDIO Mode │  SSE Mode   │
├────────────────┼─────────────┼─────────────┤
│ MCP Protocol   │     ✅      │     ✅      │
│ Word Reversal  │     ✅      │     ✅      │
│ Type Safety    │     ✅      │     ✅      │
│ Error Handling │     ✅      │     ✅      │
│ Health Check   │     ❌      │     ✅      │
│ HTTP Endpoint  │     ❌      │     ✅      │
│ Real-time      │     ⚡      │     🌊      │
└────────────────┴─────────────┴─────────────┘
```

## 📦 Quick Start

```
🔧 INSTALLATION STEPS
┌─────────────────────────────────────────┐
│  1️⃣  npm install                       │
│  2️⃣  npm run build                     │
│  3️⃣  npm run demo:stdio    OR          │
│      npm run demo:sse                   │
└─────────────────────────────────────────┘
```

### 🎯 Usage Options

#### 🔌 Option 1: STDIO Mode (Traditional MCP)

```
┌─────────────────────────────────────────────────────────────┐
│                    🔌 STDIO WORKFLOW                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Terminal 1: 🖥️ Server           Terminal 2: 📱 Client     │
│  ┌─────────────────────┐          ┌─────────────────────┐   │
│  │ npm run start       │          │ npm run client      │   │
│  │                     │   ◄───►  │                     │   │
│  │ Server running...   │          │ Testing tools...    │   │
│  └─────────────────────┘          └─────────────────────┘   │
│                                                             │
│           OR use combined command:                          │
│            🚀 npm run demo:stdio                            │
└─────────────────────────────────────────────────────────────┘
```

#### 🌐 Option 2: SSE Mode (Server-Sent Events)

```
┌─────────────────────────────────────────────────────────────┐
│                    🌐 SSE WORKFLOW                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Terminal 1: 🌊 SSE Server       Terminal 2: 📡 SSE Client │
│  ┌─────────────────────┐          ┌─────────────────────┐   │
│  │ npm run start:sse   │          │ npm run client:sse  │   │
│  │                     │   HTTP   │                     │   │
│  │ Port 3000 active... │  ◄───►   │ Connecting via SSE  │   │
│  │ Health: ✅          │          │ Testing tools...    │   │
│  └─────────────────────┘          └─────────────────────┘   │
│                                                             │
│           OR use combined command:                          │
│             🚀 npm run demo:sse                             │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Development Arsenal

```
⚡ DEVELOPMENT COMMANDS
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  🔥 Hot Reload:                                            │
│  ├─ npm run dev        # STDIO server with auto-restart   │
│  └─ npm run dev:sse    # SSE server with auto-restart     │
│                                                            │
│  🔍 Quality Checks:                                        │
│  ├─ npm run typecheck  # TypeScript validation            │
│  ├─ npm run lint       # Code style checking              │
│  └─ npm run test       # Test suite execution             │
│                                                            │
│  🚀 Production:                                            │
│  ├─ npm run build      # Compile to JavaScript            │
│  └─ npm run start      # Production server                │
└────────────────────────────────────────────────────────────┘
```

## 📁 Project Architecture

```
📂 PROJECT STRUCTURE
├── 📁 src/
│   ├── 🖥️  server.ts        # MCP STDIO Server
│   ├── 🌐 sse-server.ts     # MCP SSE Server  
│   ├── 📱 client.ts         # STDIO Test Client
│   └── 📡 sse-client.ts     # SSE Test Client
├── 📁 dist/                # Compiled JavaScript
├── 📄 package.json         # Dependencies & Scripts
├── 📄 tsconfig.json        # TypeScript Config
├── 📄 eslint.config.js     # Code Quality Rules
└── 📖 README.md           # This beautiful file!

🎨 COMPONENT RELATIONSHIPS
┌─────────────────────────────────────────────────────────┐
│                                                         │
│    📱 client.ts  ◄─────STDIO─────► 🖥️  server.ts       │
│                                                         │
│    📡 sse-client.ts ◄───HTTP/SSE───► 🌐 sse-server.ts  │
│                                                         │
│           Both connect to: 🔄 Word Reversal Logic      │
└─────────────────────────────────────────────────────────┘
```

## 🔧 API Documentation

### 🛠️ Available Tools

#### 🔄 `reverse_word` Tool

```
┌─────────────────────────────────────────────────────────────┐
│                   🔄 WORD REVERSAL API                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📥 INPUT:                                                  │
│  {                                                          │
│    "name": "reverse_word",                                  │
│    "arguments": {                                           │
│      "word": "hello"                                        │
│    }                                                        │
│  }                                                          │
│                                                             │
│  📤 OUTPUT:                                                 │
│  {                                                          │
│    "content": [                                             │
│      {                                                      │
│        "type": "text",                                      │
│        "text": "Reversed word: \"olleh\""                  │
│      }                                                      │
│    ]                                                        │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘
```

### 🌐 SSE Server Endpoints

```
🔗 ENDPOINT MAP
┌─────────────────────────────────────────────────────┐
│                                                     │
│  🏥 GET /health                                     │
│     └─ Returns server health status                │
│                                                     │
│  📡 GET /sse                                        │
│     └─ Server-Sent Events MCP endpoint             │
│                                                     │
│  Example: http://localhost:3000/health              │
│  Response: {"status": "healthy", "server": "..."}  │
└─────────────────────────────────────────────────────┘
```

## 🧪 Testing Showcase

```
🔬 COMPREHENSIVE TEST SUITE
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ✅ Connection Tests        ✅ Tool Discovery               │
│  ├─ STDIO transport         ├─ List available tools        │
│  └─ SSE transport           └─ Validate tool schemas       │
│                                                             │
│  ✅ Tool Execution          ✅ Error Handling               │
│  ├─ Word reversal           ├─ Invalid inputs              │
│  └─ Multiple test cases     └─ Connection failures         │
│                                                             │
│  🎯 TEST CASES:                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  "hello"  ➜  "olleh"    "server" ➜ "revres"        │   │
│  │  "world"  ➜  "dlrow"    "demo"   ➜ "omed"          │   │
│  │  "mcp"    ➜  "pcm"      "sse"    ➜ "ess"           │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🏗️ System Architecture

### 🔌 STDIO Mode Flow

```
🔄 STDIO COMMUNICATION FLOW
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  📱 Client Process                                          │
│  ┌─────────────────┐                                        │
│  │ 1. List Tools   │                                        │
│  │ 2. Call Tool    │                                        │
│  │ 3. Get Response │                                        │
│  └─────────────────┘                                        │
│          │                                                  │
│          ▼ STDIO Pipes                                      │
│  ┌─────────────────┐                                        │
│  │ 🖥️  MCP Server  │ ◄─────┐                                │
│  │ ├─ Parse JSON   │       │                                │
│  │ ├─ Route Tool   │       │                                │
│  │ └─ Send Result  │       │                                │
│  └─────────────────┘       │                                │
│          │                 │                                │
│          ▼                 │                                │
│  ┌─────────────────┐       │                                │
│  │ 🔄 Word Tool    │ ──────┘                                │
│  │ reverse("hi")   │                                        │
│  │ returns "ih"    │                                        │
│  └─────────────────┘                                        │
└─────────────────────────────────────────────────────────────┘
```

### 🌐 SSE Mode Flow

```
🌊 SERVER-SENT EVENTS FLOW
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  📡 SSE Client                                              │
│  ┌─────────────────┐                                        │
│  │ 1. HTTP Connect │                                        │
│  │ 2. SSE Stream   │                                        │
│  │ 3. JSON-RPC     │                                        │
│  └─────────────────┘                                        │
│          │                                                  │
│          ▼ HTTP/SSE                                         │
│  ┌─────────────────┐                                        │
│  │ 🌐 HTTP Server  │                                        │
│  │ ├─ Port 3000    │                                        │
│  │ ├─ /health      │ ◄─────┐                                │
│  │ └─ /sse         │       │                                │
│  └─────────────────┘       │                                │
│          │                 │                                │
│          ▼                 │                                │
│  ┌─────────────────┐       │                                │
│  │ 🔄 Word Tool    │ ──────┘                                │
│  │ reverse("mcp")  │                                        │
│  │ returns "pcm"   │                                        │
│  └─────────────────┘                                        │
└─────────────────────────────────────────────────────────────┘
```

## 🔒 Security & Quality

```
🛡️  SECURITY FEATURES
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ✅ Input Validation        ✅ Type Safety                  │
│  ├─ Zod schema validation   ├─ Full TypeScript coverage    │
│  └─ Parameter sanitization  └─ Compile-time checks         │
│                                                             │
│  ✅ Error Handling          ✅ No Secrets                   │
│  ├─ Graceful failures       ├─ Environment variables       │
│  └─ Detailed error logs     └─ Configuration files         │
│                                                             │
│  🏆 QUALITY METRICS:                                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  📏 All files < 500 lines                          │   │
│  │  🔧 Modular architecture                           │   │
│  │  📚 Comprehensive documentation                    │   │
│  │  🧪 Test coverage for all features                 │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Command Reference

```
📋 COMPLETE SCRIPT REFERENCE
┌────────────────────┬─────────────────────────────────────────┐
│      Command       │               Description               │
├────────────────────┼─────────────────────────────────────────┤
│ npm run build      │ 🔨 Compile TypeScript → JavaScript     │
│ npm run start      │ 🖥️  Start STDIO MCP server             │
│ npm run start:sse  │ 🌐 Start SSE MCP server (port 3000)    │
│ npm run dev        │ 🔥 STDIO server with hot reload        │
│ npm run dev:sse    │ 🌊 SSE server with hot reload          │
│ npm run client     │ 📱 Run STDIO test client               │
│ npm run client:sse │ 📡 Run SSE test client                 │
│ npm run demo:stdio │ 🚀 Demo STDIO (server + client)        │
│ npm run demo:sse   │ 🌟 Demo SSE (server + client)          │
│ npm run test       │ 🧪 Run test suite                      │
│ npm run lint       │ 🔍 Code quality check                  │
│ npm run typecheck  │ ✅ TypeScript validation               │
│ npm run test-demo  │ 🎯 Complete demo test                  │
└────────────────────┴─────────────────────────────────────────┘
```

## 🎨 Demo in Action

```
🎬 LIVE DEMO EXAMPLE
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  $ npm run demo:sse                                         │
│                                                             │
│  🚀 Starting MCP SSE Client Tests                           │
│                                                             │
│  🏥 Server health: { status: "healthy" }                   │
│  ✅ Connected to MCP SSE server                             │
│                                                             │
│  📚 Available tools:                                        │
│    - reverse_word: Reverses characters using SSE           │
│                                                             │
│  🔄 Testing SSE word reversal with: "sse"                  │
│  ✨ Result: [SSE] Reversed word: "ess" (original: "sse")   │
│                                                             │
│  🔄 Testing SSE word reversal with: "server"               │
│  ✨ Result: [SSE] Reversed word: "revres" (orig: "server") │
│                                                             │
│  ✅ All SSE tests completed!                                │
└─────────────────────────────────────────────────────────────┘
```

## 🌈 Technology Stack

```
🔧 TECH STACK RAINBOW
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🟦 TypeScript      ├─ Type safety & modern JS             │
│  🟩 Node.js         ├─ Runtime environment                 │
│  🟨 MCP SDK         ├─ Model Context Protocol              │
│  🟪 Zod             ├─ Schema validation                   │
│  🟧 ESLint          ├─ Code quality                        │
│  🟥 npm             ├─ Package management                  │
│                                                             │
│  📡 Transports:                                             │
│  ├─ 🔌 STDIO        # Standard input/output pipes          │
│  └─ 🌐 SSE          # Server-Sent Events over HTTP         │
└─────────────────────────────────────────────────────────────┘
```

## 📝 License & Contributing

```
📄 MIT LICENSE
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🎉 Feel free to use this demo as a foundation for your    │
│     own MCP projects!                                       │
│                                                             │
│  🤝 CONTRIBUTING:                                           │
│  ├─ This is a demo showcasing MCP capabilities             │
│  ├─ Extend it with additional tools and features           │
│  ├─ Share your improvements with the community             │
│  └─ Report issues and suggest enhancements                 │
│                                                             │
│  🌟 ENJOY BUILDING WITH MCP! 🌟                            │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 What's Next?

```
🚀 FUTURE ENHANCEMENTS
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  💡 Possible Extensions:                                    │
│  ├─ 🔤 Text processing tools (uppercase, lowercase)        │
│  ├─ 🧮 Math calculation tools                              │
│  ├─ 📅 Date/time utilities                                 │
│  ├─ 🔐 Encoding/decoding tools                             │
│  ├─ 📊 Data validation tools                               │
│  └─ 🌍 Multi-language support                              │
│                                                             │
│  🎮 Try adding your own tools and see the magic happen!    │
└─────────────────────────────────────────────────────────────┘
```

---

<div align="center">

**🌟 Built with SPARC Methodology 🌟**

*Specification → Pseudocode → Architecture → Refinement → Completion*

**Happy coding! 🚀**

</div>