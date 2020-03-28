import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class Checkout extends React.Component {
 onToken = (token, addresses) => {
 
 };
 
 render() {
   return (
     <StripeCheckout
       stripeKey="pk_test_Holia2SIPb4TyaGCjfe5Npwe00cTjwGUOp"
       token={this.onToken}
     />
   )
 }
}
