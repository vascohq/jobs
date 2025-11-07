import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import z from 'zod'
import { MonthlyDataSchema } from './schemas'
import { monthlyData } from './data'

export function registerTools(server: McpServer) {
  server.registerTool(
    'get-monthly-data',
    {
      title: 'Get Monthly Data By Channel',
      description:
        'Get the monthly data by channel for the given month and year',
      inputSchema: {
        month: z
          .number()
          .describe('The month to get the data for, e.g. 1 for January'),
        year: z.number().describe('The year to get the data for, e.g. 2025'),
      },
      outputSchema: {
        data: z.array(MonthlyDataSchema),
      },
    },
    async ({ month, year }) => {
      const matchingData = monthlyData.filter(
        (data) => data.month === month && data.year === year
      )
      return {
        content: [{ type: 'text', text: JSON.stringify(matchingData) }],
        structuredContent: { data: matchingData },
      }
    }
  )
}
