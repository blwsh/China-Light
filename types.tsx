/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

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
  items: MenuItem[],
}

export interface Product {
  name: string,
  price: number,
}

export interface MenuItem extends Product {
  description?: string,
  options?: MenuItemOption[],

}

export interface MenuItemOption extends Product {}

export interface BasketItem {
  product: Product,
  options: Product[]
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
