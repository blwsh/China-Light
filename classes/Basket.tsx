import {Basket as BasketInterface, BasketItem} from '../types'

export default class Basket implements BasketInterface {
  private _items: BasketItem[] = [];
  private _subtotal: number = 0;

  get items(): BasketItem[] {
    return this._items;
  }

  set items(value: BasketItem[]) {
    this._items = value;
    this._subtotal = this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  get subtotal(): number {
    return this._subtotal;
  }

  clear(): this {
    this.items = [];
    return this;
  }

  set subtotal(value: number) {
    throw new Error("Attempted to set the subtotal for a basket directly.");
  }
}
