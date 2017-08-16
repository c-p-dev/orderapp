import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  	selector: 'page-hello-ionic',
  	templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	banners: string[];
	items: Array<{title: string, img: string, note: string}>;

  	constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  		this.banners = ['food','beverages','desert'];
  		console.log(this.banners);
  		
  		this.items = [];
        for(let i = 0; i < this.banners.length ; i++) {
        	var num  = i + 1;
            this.items.push({
                title: this.banners[i],
                note: 'This is item #' + num,
                img: '../assets/images/banner'+num+'.jpg'
            });
        }

        console.log(this.items);
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

}
