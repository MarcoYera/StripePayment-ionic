import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
selector: 'thank-you',
templateUrl: 'thankyou.html'
})
export class ThankyouPage {
private token: string = '';
constructor(public nav: NavController, public params: NavParams) {
this.token = this.params.get('token');
console.log('Getting token param:');
console.log(this.token);
}
}