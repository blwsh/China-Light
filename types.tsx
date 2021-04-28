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
  geo?: GeoMarker
}

export interface GeoMarker {
  lat: number
  lng: number
}

export interface Basket {
  items: BasketItem[],
  subtotal: number
  clear?: () => Basket
}

export type OptionsMap = {
  [key: string]: { [key: string]: Product[] }
}

export interface BasketItem {
  exists: boolean;
  product: Product,
  options: ProductOption[],
  optionsMap?: OptionsMap,
  quantity: number,
  price: number
}

export interface DiscountPolicy {
  name: string
  value: string
  type: 'percentage'|'fixed'
  condition?: (...arg: any) => void
}

export interface DeliveryPolicy {
  name: string,
  price: number,
  isDefault: boolean,
  minRadius?: number,
  maxRadius?: number,
  minSpend?: number,
  maxSpend?: number
}
