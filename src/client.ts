#!/usr/bin/env node

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { spawn } from "child_process";
import { 
  ListToolsResult,
  CallToolResult 
} from "@modelcontextprotocol/sdk/types.js";

class MCPTestClient {
  private client: Client;

  constructor() {
    this.client = new Client(
      {
        name: "test-client",
        version: "1.0.0",
      },
      {
        capabilities: {},
      }
    );
  }

  async connect(): Promise<void> {
    // Spawn the server process
    const serverProcess = spawn("node", ["dist/server.js"], {
      stdio: ["pipe", "pipe", "inherit"],
    });

    // Create transport using the server process
    const transport = new StdioClientTransport({
      stdin: serverProcess.stdin!,
      stdout: serverProcess.stdout!,
    } as any);

    await this.client.connect(transport);
    console.log("✅ Connected to MCP server");
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
      console.log(`\n🔄 Testing word reversal with: "${word}"`);
      
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
    console.log("🚀 Starting MCP Client Tests\n");

    try {
      await this.connect();
      await this.listTools();

      // Test cases
      const testWords = ["hello", "world", "mcp", "server", "demo"];
      
      for (const word of testWords) {
        await this.testWordReversal(word);
      }

      console.log("\n✅ All tests completed!");
    } catch (error) {
      console.error("❌ Test failed:", error);
    }
  }
}

const client = new MCPTestClient();
client.runTests().catch(console.error);