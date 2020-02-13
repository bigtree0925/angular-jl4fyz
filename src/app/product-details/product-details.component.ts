import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

import { CartService } from '../cart.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService ) {
   }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
   addToCart(product) {
    // window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
    this.router.navigate(['/']);
  }
}