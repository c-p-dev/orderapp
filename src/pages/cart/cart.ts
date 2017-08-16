import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-cart',
 	templateUrl: 'cart.html',
 })
 export class CartPage {
 	cart : any [];
 	constructor(public navCtrl: NavController, public navParams: NavParams,public cartProvider: CartProvider) {
 		this.cart =  this.cartProvider.cart;
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad CartPage');


 	}

 }
