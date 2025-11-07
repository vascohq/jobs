import z from 'zod'

export const channels = ['inbound', 'outbound', 'partnership'] as const

export const MonthlyDataSchema = z.object({
  month: z.number().describe('Month of the data, e.g. 1 for January'),
  year: z.number().describe('Year of the data, e.g. 2025'),
  channel: z.enum(channels).describe('The channel of the data'),
  revenue: z.number().describe('The value of the data'),
})

export type MonthlyData = z.infer<typeof MonthlyDataSchema>
