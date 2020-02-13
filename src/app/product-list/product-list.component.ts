import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  share() {
    window.alert('[Shared] The product has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/** sample class and interface **/
class Student{
  fullname : string;
  constructor(public firstname: string, public middleinitial: string, public lastname: string){
      this.fullname = firstname + " " + middleinitial + " " + lastname;
  }
}
interface Person{
  firstname: string;
  lastname: string;
}

function greeter(person:Person){
  return "Hello, " + person.firstname + " " + person.lastname;
}
function greeter2(person:Person){
//console.log(person);
  return "Hello, " + person.firstname + " " + person.middleinitial + " " + person.lastname;
}
let user = new Student("Jane", "M.", "User");
let message = greeter2(user);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/