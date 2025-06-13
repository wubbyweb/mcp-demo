#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { createServer } from "http";

const ReverseWordSchema = z.object({
  word: z.string().describe("The word to reverse"),
});

class MCPSSEWordReverseServer {
  private server: Server;
  private port: number;

  constructor(port: number = 3000) {
    this.port = port;
    this.server = new Server(
      {
        name: "word-reverse-sse-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
  }

  private setupHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: "reverse_word",
            description: "Reverses the characters in a given word using SSE",
            inputSchema: {
              type: "object",
              properties: {
                word: {
                  type: "string",
                  description: "The word to reverse",
                },
              },
              required: ["word"],
            },
          } as Tool,
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === "reverse_word") {
        try {
          const { word } = ReverseWordSchema.parse(args);
          const reversedWord = this.reverseWord(word);
          
          return {
            content: [
              {
                type: "text",
                text: `[SSE] Reversed word: "${reversedWord}" (original: "${word}")`,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `[SSE] Error: ${error instanceof Error ? error.message : "Unknown error"}`,
              },
            ],
            isError: true,
          };
        }
      }

      throw new Error(`Unknown tool: ${name}`);
    });
  }

  private reverseWord(word: string): string {
    return word.split("").reverse().join("");
  }

  async run(): Promise<void> {
    const httpServer = createServer();
    
    httpServer.on("request", (req, res) => {
      if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "healthy", server: "mcp-sse-word-reverse" }));
        return;
      }

      if (req.url === "/sse") {
        const transport = new SSEServerTransport("/sse", res);
        this.server.connect(transport);
        return;
      }

      res.writeHead(404);
      res.end("Not Found");
    });

    httpServer.listen(this.port, () => {
      console.error(`🚀 MCP SSE Word Reverse Server running on port ${this.port}`);
      console.error(`📡 SSE endpoint: http://localhost:${this.port}/sse`);
      console.error(`🏥 Health check: http://localhost:${this.port}/health`);
    });
  }
}

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const server = new MCPSSEWordReverseServer(port);
server.run().catch(console.error);