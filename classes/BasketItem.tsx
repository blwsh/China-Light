import {BasketItem as BasketItemInterface, Product, ProductOption} from "../types";

type Props = {options: ProductOption[], product: Product, quantity: number};

export default class BasketItem implements BasketItemInterface {
  options: ProductOption[];
  product: Product;
  quantity: number;
  private _price: number;

  constructor({options, product, quantity}: Props) {
    this.options = options;
    this.product = product;
    this.quantity = quantity;
    this._price = this.calculatePrice();
  }

  get price(): number {
    return this._price = this.calculatePrice();
  }

  set price(value: number) {
    throw new Error("Attempted to set the price for a basket item directly.");
  }

  calculatePrice(): number {
    return this.quantity * (
      this.product.price + this.options.reduce((previous, current) => previous + current.price, 0)
    );
  }

}
