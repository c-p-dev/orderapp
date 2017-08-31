import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { NavController, NavParams } from 'ionic/ionic';
import { CategoryInfoPage } from '../../pages/category-info/category-info';
import 'rxjs/add/operator/map';

@Injectable()
export class CartProvider {
	cart : any = [];
	constructor(public http: Http) {
		console.log('Hello CartProvider Provider');
	}

	showCartItems(){
		// this.navCtrl.push(CategoryInfoPage);
		console.log(this.cart);
	}

	addCartItem(data){
		this.cart.push(data);
		console.log(data);
	}

	removeCartItem(data){
		console.log(data);
		console.log(this.cart);
		this.cart.splice(data, 1);
	}









}
