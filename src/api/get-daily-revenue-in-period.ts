import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDailyRevenueResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueAmount({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: { from, to },
    },
  )

  return response.data
}
