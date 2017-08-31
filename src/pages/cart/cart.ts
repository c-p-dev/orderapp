import { Component,ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

declare var google;
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
    @ViewChild('map') mapElement: ElementRef;
 	cart : any [];
    map: any;
    total: number = 0;
 	constructor(public navCtrl: NavController, public navParams: NavParams,public cartProvider: CartProvider,public alertCtrl: AlertController,public toastCtrl: ToastController){
 		this.cart =  this.cartProvider.cart;
        this.sumCart();
        console.log(this.cart.length);

 	}
 	

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad CartPage');
        this.loadMap();
 	}

 	removeItem(data){
 		
 		let confirm = this.alertCtrl.create({
            title: 'Cart',
            message: 'Do you want to remove this item?',
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
                    console.log('Agree clicked');
                    this.cartProvider.removeCartItem(data);
                    this.sumCart();
                    this.showToast('Item Removed');
                  }
                }
              ]
        });
        confirm.present();
 		
 	}

    showToast(message) {
        
        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000,
          position:"middle",
        });

        toast.present();
    }

    processOrder(){
        this.showToast('Order');
    }

    loadMap(){
 
        let latLng = new google.maps.LatLng(-34.9290, 138.6010);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
     
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
    }

    sumCart(){
        this.total = 0;
        if(this.cart.length > 0){
            for(var i in this.cart) { 
                this.total += this.cart[i].price;
                // console.log(this.cart[i].price);
            }    
        }
    }


 }
