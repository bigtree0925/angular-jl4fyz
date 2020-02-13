import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
      private http: HttpClient
    ) {}
    
  addToCart(product) {
    this.items.push(product);
  }

  cancelTheItem(productsku) {
    for (var i in this.items) {
      if (this.items[i]['sku'] == productsku) {
          this.items.splice(i, 1);
        }
     }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
