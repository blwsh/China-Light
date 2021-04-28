import {BasketItem as BasketItemInterface, OptionsMap, Product, ProductOption} from "../types";
import random from "../utils/random";

type Props = {product: Product, options?: ProductOption[], quantity?: number};

export default class BasketItem implements BasketItemInterface {
  private id: string;
  product: Product;
  private _quantity: number;
  options: ProductOption[];
  optionsMap?: OptionsMap;
  exists: boolean = false;
  private _price: number;

  constructor({product, options = [], quantity = 1}: Props) {
    this.id = random();
    this.options = options;
    this.product = product;
    this._quantity = quantity;
    this._price = this.calculatePrice();
  }

  get price(): number {
    return this._price = this.calculatePrice();
  }

  set price(value: number) {
    throw new Error("Attempted to set the price for a basket item directly.");
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
    this._price = this.calculatePrice();
  }

  calculatePrice(): number {
    return this._quantity * (
      this.product.price + this.options.reduce((previous, current) => previous + current.price, 0)
    );
  }
}
