#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const ReverseWordSchema = z.object({
  word: z.string().describe("The word to reverse"),
});

class MCPWordReverseServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: "word-reverse-server",
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
            description: "Reverses the characters in a given word",
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
                text: `Reversed word: "${reversedWord}"`,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
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
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("MCP Word Reverse Server running on stdio");
  }
}

const server = new MCPWordReverseServer();
server.run().catch(console.error);