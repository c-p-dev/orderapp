import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CategoryInfoPage } from '../category-info/category-info';
import { ShareService } from '../services/ShareService';
import { CartProvider } from '../../providers/cart/cart';
import { NumberProvider } from '../../providers/number/number';
/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
    
  	banners: string[];
	items: Array<{title: string, img: string, note: string}>;
    categoryData = [
        {category_name:'Food',      img_path:'../assets/images/banner1.jpg', list_number: 5,
            list:[
               {name:'Chicken Adobo', descirption:'Chicken Adobo galing kay tita Mars', price:80.00, status:'available', img_path:'../assets/images/food/f1.jpg'},
               {name:'Mani', descirption:'Maning Peanuts', price:50.00, status:'available', img_path:'../assets/images/food/f3.jpg'},
               {name:'Chopseuy', descirption:'System of a down', price:60.00, status:'available', img_path:'../assets/images/food/f5.jpg'},
               {name:'Bagnet', descirption:'Bagnet from Mars', price:90.00, status:'available', img_path:'../assets/images/food/f4.jpg'},
               {name:'Calamares', descirption:'Calma mares', price:70.00, status:'available', img_path:'../assets/images/food/f6.jpg'},
               {name:'Lumpia', descirption:'Lumpia pi', price:40.00, status:'out of stock', img_path:'../assets/images/food/f2.jpg'},
            ]
        },
        {category_name:'Beverages', img_path:'../assets/images/banner2.jpg', list_number: 10,
            list:[
                { name:'San Miguel Pale Pilsen', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'San Mig Light', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s2.jpg'},
                { name:'San Mig Strong Ice', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s3.jpg'},
                { name:'San Miguel Super Dry', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s4.jpg'},
                { name:'San Miguel Premium All-Malt', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s5.jpg'},
                { name:'Red Horse', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s6.jpg'},
                { name:'Gold Eagle', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Cerveza Negra', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Oktoberfest Brew', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Cali', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'San Miguel Flavored Beer', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'San Miguel Zero', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'San Miguel Nab', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Valor', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Blue Ice', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Dragon', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Super Cool', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Blue Star', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'W1N Bia (Bia Hoi)', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Anker', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Kuda Putih', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},
                { name:'Sodaku', description:'fresh from San Miguel', price: 90.00, status:'available',img_path:'../assets/images/beverages/s1.jpg'},

            ]
        },
        {category_name:'Desert',    img_path:'../assets/images/banner3.jpg', list_number: 3,
            list: [
                { name:'Red Velvet', description:'red velvet from cutie', price: 70.00, status:'available'},
                { name:'Calamansi Bar', description:'Calamansi Bars', price: 60.00, status:'available'},
            ]
        }
        
    ];

  	constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public cartProvider: CartProvider) {
  	    console.log(this.categoryData);
  	}

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
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
                  }
                }
              ]
        });
        confirm.present();
    }

  	ionViewDidLoad() {
		console.log('ionViewDidLoad CategoryPage');
	}

    showCategoryInfo(data){
        this.navCtrl.push(CategoryInfoPage, data);
    }

    showCartItems(){
        this.cartProvider.showCartItems();
    }

}
