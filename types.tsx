/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export interface Restaurant {
  name: string,
  type: string,
  logoImage: string,
  coverImage: string,
  address: Address,
  hours: OpeningHours[],
  categories: RestaurantCategory[],
}

export interface RestaurantCategory {
  name: string,
  items: Product[],
}

export interface Product {
  id: number,
  name: string,
  price: number,
  description?: string,
  options?: ProductOptionGroup[],
}

export interface ProductOption extends Product {
  //
}

export interface ProductOptionGroup {
  id: string,
  name: string,
  description?: string,
  limit: number,
  options: ProductOption[]
}

export interface OpeningHours {
  from: string|null,
  to: string|null,
  day: 1|2|3|4|5|6|7,
}

export interface Address {
  line_1: string,
  line_2?: string,
  town?: string,
  city: string,
  post_code: string,
  county?: string,
  country: string,
}

export interface Basket {
  items: BasketItem[],
  subtotal: number
  clear?: () => Basket
}

export interface BasketItem {
  product: Product,
  options: ProductOption[],
  quantity: number
}

export interface DiscountPolicy {
  name: string
  value: string
  type: 'percentage'|'fixed'
  condition?: (...arg: any) => void
}
