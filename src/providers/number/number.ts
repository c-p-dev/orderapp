import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DecimalPipe } from '@angular/common';
import 'rxjs/add/operator/map';

/*
  Generated class for the NumberProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NumberProvider {

	constructor(private decimalPipe: DecimalPipe) {
		console.log('Hello NumberProvider Provider');
	}
  	
  	twoDecimals(number) {
    	return this.decimalPipe.transform(number, '1.2-2');
	}

}
