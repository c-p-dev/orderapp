import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';
import { CartProvider } from '../../providers/cart/cart';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the CategoryInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  	selector: 'page-category-info',
  	templateUrl: 'category-info.html',
})
export class CategoryInfoPage {
	data : Object = [];
	asd : any ;
  	constructor(public navCtrl: NavController, public navParams: NavParams,private shareService: ShareService, public cartProvider: CartProvider, public alertCtrl: AlertController ) {
  		this.data = this.navParams.data;
  		console.log(this.data);
  	}
 
  	addItem(data){
  		let confirm = this.alertCtrl.create({
			title: 'Cart',
			message: 'Do you want to add this order?',
	      	buttons: [
		        {
					text: 'Disagree',
					handler: () => {
						console.log('Disagree clicked');
					}
		        },
		        {
		          text: 'Agree',
		          handler: () => {
		            this.cartProvider.addCartItem(data);
		          }
		        }
	      	]
	    });
  
    	confirm.present();
  		
  	}



  	

  	

}
