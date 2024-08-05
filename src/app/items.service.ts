import { Injectable } from '@angular/core';
import { Item } from './app.component';
const API = 'https://66b0acbf6a693a95b539b996.mockapi.io';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}
  getitems(): Promise<Item> {
    return fetch(`${API}/shop`).then((res) => res.json());
  }
}
