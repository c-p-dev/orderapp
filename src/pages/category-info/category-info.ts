import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../services/ShareService';

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
  	constructor(public navCtrl: NavController, public navParams: NavParams,private shareService: ShareService) {
  		this.data = this.navParams.data;
  		console.log(this.data);
  	}

  	

}
