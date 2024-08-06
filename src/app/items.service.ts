import { Injectable } from '@angular/core';
import { Item } from './app.component';
import { NewItem } from './itemwithout-id.service';
const API = 'https://66b0acbf6a693a95b539b996.mockapi.io';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  cartItems: any = [];
  constructor() {}
  getitems(): Promise<Item> {
    return fetch(`${API}/shop`).then((res) => res.json());
  }
  getItemById(id: string) {
    return fetch(`${API}/shop/${id}`).then((res) => res.json());
  }
  addintoCart(id: string) {
    return fetch(`${API}/shop/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.cartItems = data;
        console.log(this.cartItems);
      });
  }
  getCartItems() {
    console.log(this.cartItems);
    return this.cartItems;
  }
}
