import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartProvider {
	cart : any = [];
	constructor(public http: Http) {
		console.log('Hello CartProvider Provider');
	}

	showCartItems(){
		console.log(this.cart);
	}

	addCartItem(data){
		this.cart.push(data);
		console.log(data);
	}

	removeCartItem(data){
		console.log(data);
	}





}
