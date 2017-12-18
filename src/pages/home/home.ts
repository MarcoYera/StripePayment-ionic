import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThankyouPage } from '../thankyou/thankyou'
declare var Stripe: any;
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
private token: string = '';
private ngForm: any = {
cc: '',
cvc: '',
month: '',
year: ''

};
constructor(public nav: NavController) {
this.nav = nav;
console.log(Stripe);
Stripe.setPublishableKey('pk_test_PDi3kHMK23z8KAujjHKLyVoB');
}
onSubmit() {
console.log(this.ngForm);
Stripe.card.createToken({
number: this.ngForm.cc, //'4242424242424242',
cvc: this.ngForm.cvc, //'123',
exp_month: this.ngForm.month, //12,
exp_year: this.ngForm.year, //2017,
}, (status, response) => this.stripeResponseHandler(status, response));
}
stripeResponseHandler(status, response) {
if (response.error) {
// Show the errors on the form
console.log('error');
console.log(response.error.message);
} else {
// response contains id and card, which contains additional card details
this.token = response.id;
// Insert the token into the form so it gets submitted to the server
console.log('success');
console.log('Sending token param:');
console.log(this.token);
this.nav.push(ThankyouPage, {token: this.token});
}
}
}
