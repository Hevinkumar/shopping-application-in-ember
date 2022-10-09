import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
import {inject as service} from '@ember/service';


export default Component.extend({
    cart:service("shopping-cart"),

    itemtotal:computed("cart.cartItems",function(){
        // console.log("inside-cart container");
        // console.log(this.get('cart'));
        return this.get('cart').cartItems.length;
    })
    // cart: computed(function() {
    //     return getOwner(this).lookup('service:shopping-cart');
    //   }),
    })
