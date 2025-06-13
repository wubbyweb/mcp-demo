#!/usr/bin/env node

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { 
  ListToolsResult,
  CallToolResult 
} from "@modelcontextprotocol/sdk/types.js";

class MCPSSETestClient {
  private client: Client;
  private serverUrl: string;

  constructor(serverUrl: string = "http://localhost:3000") {
    this.serverUrl = serverUrl;
    this.client = new Client(
      {
        name: "test-sse-client",
        version: "1.0.0",
      },
      {
        capabilities: {},
      }
    );
  }

  async connect(): Promise<void> {
    // First check if server is healthy
    try {
      const response = await fetch(`${this.serverUrl}/health`);
      if (!response.ok) {
        throw new Error(`Server health check failed: ${response.status}`);
      }
      const health = await response.json();
      console.log("🏥 Server health:", health);
    } catch (error) {
      console.error("❌ Server health check failed:", error);
      throw error;
    }

    // Connect via SSE
    const transport = new SSEClientTransport(
      new URL(`${this.serverUrl}/sse`)
    );

    await this.client.connect(transport);
    console.log("✅ Connected to MCP SSE server");
  }

  async listTools(): Promise<void> {
    try {
      const response = await this.client.request(
        {
          method: "tools/list",
        },
        {} as any
      ) as ListToolsResult;

      console.log("📚 Available tools:");
      if (response.tools) {
        response.tools.forEach((tool) => {
          console.log(`  - ${tool.name}: ${tool.description}`);
        });
      }
    } catch (error) {
      console.error("❌ Error listing tools:", error);
    }
  }

  async testWordReversal(word: string): Promise<void> {
    try {
      console.log(`\n🔄 Testing SSE word reversal with: "${word}"`);
      
      const response = await this.client.request(
        {
          method: "tools/call",
        },
        {
          name: "reverse_word",
          arguments: { word },
        } as any
      ) as CallToolResult;

      if (response.content) {
        response.content.forEach((content) => {
          if (content.type === "text") {
            console.log(`✨ Result: ${content.text}`);
          }
        });
      }
    } catch (error) {
      console.error("❌ Error calling reverse_word tool:", error);
    }
  }

  async runTests(): Promise<void> {
    console.log("🚀 Starting MCP SSE Client Tests\n");

    try {
      await this.connect();
      await this.listTools();

      // Test cases
      const testWords = ["sse", "server", "events", "demo", "reverse"];
      
      for (const word of testWords) {
        await this.testWordReversal(word);
      }

      console.log("\n✅ All SSE tests completed!");
    } catch (error) {
      console.error("❌ SSE test failed:", error);
    }
  }
}

// Allow server URL to be passed as argument
const serverUrl = process.argv[2] || "http://localhost:3000";
const client = new MCPSSETestClient(serverUrl);
client.runTests().catch(console.error);