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

  server.registerTool(
    'get-arr',
    {
      title: 'Calculate Annual Recurring Revenue (ARR)',
      description:
        'Calculate ARR by accumulating all monthly MRR values from the dataset up to a specified date and multiplying by 12. If no date is specified, uses all available data.',
      inputSchema: {
        asOfMonth: z
          .number()
          .min(1)
          .max(12)
          .optional()
          .describe('The month to calculate ARR as of, e.g. 12 for December'),
        asOfYear: z
          .number()
          .optional()
          .describe('The year to calculate ARR as of, e.g. 2025'),
      },
      outputSchema: {
        arr: z.number().describe('The calculated Annual Recurring Revenue'),
        cumulativeMRR: z
          .number()
          .describe('The cumulative monthly recurring revenue'),
        monthsIncluded: z
          .number()
          .describe('The number of months included in the calculation'),
        explanation: z
          .string()
          .describe('A natural language explanation of the calculation'),
      },
    },
    async ({ asOfMonth, asOfYear }) => {
      // Determine the cutoff date - if not provided, use the latest available data
      let cutoffYear = asOfYear
      let cutoffMonth = asOfMonth

      if (!cutoffYear || !cutoffMonth) {
        // Find the latest year and month in the data
        const latestEntry = monthlyData.reduce((latest, current) => {
          if (
            current.year > latest.year ||
            (current.year === latest.year && current.month > latest.month)
          ) {
            return current
          }
          return latest
        }, monthlyData[0])
        cutoffYear = cutoffYear ?? latestEntry.year
        cutoffMonth = cutoffMonth ?? latestEntry.month
      }

      // Filter data to include entries up to and including the cutoff date
      const filteredData = monthlyData.filter((data) => {
        return (
          data.year < cutoffYear ||
          (data.year === cutoffYear && data.month <= cutoffMonth)
        )
      })

      // Sort chronologically (by year, then month)
      const sortedData = [...filteredData].sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year
        }
        return a.month - b.month
      })

      // Calculate cumulative MRR by summing all revenue values
      const cumulativeMRR = sortedData.reduce(
        (sum, data) => sum + data.revenue,
        0
      )

      // Calculate ARR by multiplying cumulative MRR by 12
      const arr = cumulativeMRR * 12

      // Count unique months included
      const uniqueMonths = new Set(
        sortedData.map((data) => `${data.year}-${data.month}`)
      )
      const monthsIncluded = uniqueMonths.size

      // Generate explanation
      const explanation = `Based on cumulative monthly recurring revenue of $${cumulativeMRR.toLocaleString()} across ${monthsIncluded} months, your Annual Recurring Revenue (ARR) is $${arr.toLocaleString()}.`

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              arr,
              cumulativeMRR,
              monthsIncluded,
              explanation,
            }),
          },
        ],
        structuredContent: {
          arr,
          cumulativeMRR,
          monthsIncluded,
          explanation,
        },
      }
    }
  )
}
