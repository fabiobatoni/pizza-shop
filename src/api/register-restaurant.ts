import { api } from '@/lib/axios'

export interface registerRestaurantInBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurantIn({
  restaurantName,
  managerName,
  email,
  phone,
}: registerRestaurantInBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
