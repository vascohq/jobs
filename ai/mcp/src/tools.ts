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

  server.registerTool(
    'analyze-channels',
    {
      title: 'Analyze Channel Performance',
      description:
        'Analyze channel performance metrics including total revenue, growth rates, and trends. Identifies best and worst performing channels.',
      inputSchema: {
        asOfMonth: z
          .number()
          .min(1)
          .max(12)
          .optional()
          .describe(
            'The month to analyze channels as of, e.g. 12 for December'
          ),
        asOfYear: z
          .number()
          .optional()
          .describe('The year to analyze channels as of, e.g. 2025'),
      },
      outputSchema: {
        bestChannel: z.string().describe('The best-performing channel'),
        worstChannel: z.string().describe('The least-performing channel'),
        channelMetrics: z
          .record(
            z.object({
              totalRevenue: z.number(),
              averageMonthlyRevenue: z.number(),
              growthRate: z.number(),
              trend: z.enum(['increasing', 'decreasing', 'stable']),
              earlyPeriodRevenue: z.number(),
              recentPeriodRevenue: z.number(),
            })
          )
          .describe('Detailed metrics for each channel'),
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

      // Group data by channel
      const channelData: Record<
        string,
        Array<{ year: number; month: number; revenue: number }>
      > = {}
      sortedData.forEach((data) => {
        if (!channelData[data.channel]) {
          channelData[data.channel] = []
        }
        channelData[data.channel].push({
          year: data.year,
          month: data.month,
          revenue: data.revenue,
        })
      })

      // Calculate metrics for each channel
      const channelMetrics: Record<
        string,
        {
          totalRevenue: number
          averageMonthlyRevenue: number
          growthRate: number
          trend: 'increasing' | 'decreasing' | 'stable'
          earlyPeriodRevenue: number
          recentPeriodRevenue: number
        }
      > = {}

      // Count unique months across all data
      const uniqueMonthsSet = new Set(
        sortedData.map((d) => `${d.year}-${d.month}`)
      )
      const totalMonths = uniqueMonthsSet.size
      const earlyPeriodMonths = Math.max(6, Math.floor(totalMonths / 2))
      const recentPeriodMonths = Math.max(6, Math.floor(totalMonths / 2))

      for (const [channel, data] of Object.entries(channelData)) {
        // Calculate total revenue
        const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0)

        // Calculate average monthly revenue
        const uniqueMonths = new Set(data.map((d) => `${d.year}-${d.month}`))
          .size
        const averageMonthlyRevenue = totalRevenue / uniqueMonths

        // Calculate early vs recent period revenue
        const sortedChannelData = [...data].sort((a, b) => {
          if (a.year !== b.year) {
            return a.year - b.year
          }
          return a.month - b.month
        })

        const earlyPeriodData = sortedChannelData.slice(0, earlyPeriodMonths)
        const recentPeriodData = sortedChannelData.slice(-recentPeriodMonths)

        const earlyPeriodRevenue = earlyPeriodData.reduce(
          (sum, d) => sum + d.revenue,
          0
        )
        const recentPeriodRevenue = recentPeriodData.reduce(
          (sum, d) => sum + d.revenue,
          0
        )

        // Calculate growth rate (percentage change)
        const earlyAverage = earlyPeriodRevenue / (earlyPeriodData.length || 1)
        const recentAverage =
          recentPeriodRevenue / (recentPeriodData.length || 1)
        const growthRate =
          earlyAverage > 0
            ? ((recentAverage - earlyAverage) / earlyAverage) * 100
            : 0

        // Determine trend
        let trend: 'increasing' | 'decreasing' | 'stable'
        if (growthRate > 5) {
          trend = 'increasing'
        } else if (growthRate < -5) {
          trend = 'decreasing'
        } else {
          trend = 'stable'
        }

        channelMetrics[channel] = {
          totalRevenue,
          averageMonthlyRevenue,
          growthRate,
          trend,
          earlyPeriodRevenue,
          recentPeriodRevenue,
        }
      }

      // Identify best and worst channels
      // Best: Highest total revenue OR fastest growth rate (prioritize growth if totals are close)
      const channels = Object.keys(channelMetrics)
      const maxTotalRevenue = Math.max(
        ...channels.map((c) => channelMetrics[c].totalRevenue)
      )
      const minTotalRevenue = Math.min(
        ...channels.map((c) => channelMetrics[c].totalRevenue)
      )
      const revenueRange = maxTotalRevenue - minTotalRevenue
      const revenueThreshold = maxTotalRevenue * 0.1 // 10% threshold

      let bestChannel = channels[0]
      let worstChannel = channels[0]

      if (revenueRange <= revenueThreshold) {
        // If totals are close, prioritize growth rate
        bestChannel = channels.reduce((best, current) => {
          return channelMetrics[current].growthRate >
            channelMetrics[best].growthRate
            ? current
            : best
        })
        worstChannel = channels.reduce((worst, current) => {
          return channelMetrics[current].growthRate <
            channelMetrics[worst].growthRate
            ? current
            : worst
        })
      } else {
        // Prioritize total revenue
        bestChannel = channels.reduce((best, current) => {
          return channelMetrics[current].totalRevenue >
            channelMetrics[best].totalRevenue
            ? current
            : best
        })
        worstChannel = channels.reduce((worst, current) => {
          return channelMetrics[current].totalRevenue <
            channelMetrics[worst].totalRevenue
            ? current
            : worst
        })
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              bestChannel,
              worstChannel,
              channelMetrics,
            }),
          },
        ],
        structuredContent: {
          bestChannel,
          worstChannel,
          channelMetrics,
        },
      }
    }
  )
}
