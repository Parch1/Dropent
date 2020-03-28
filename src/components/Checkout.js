import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
require('dotenv').config();

export default class Checkout extends React.Component {
 onToken = (token, addresses) => {

 };

 render() {

   return (
    <div>

      <StripeCheckout className="stripe-button-el"
        stripeKey={process.env.STRIPE_PK_KEY}
        token={this.onToken}
      />
    </div>
   )
 }
}