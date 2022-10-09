import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
import {inject as service} from '@ember/service';

export default Component.extend({
    details:null,
    
    // usersData:JSON.parse(localStorage.getItem('userdata')),
    cart: computed(function() {
        return getOwner(this).lookup('service:shopping-cart');
      }),
    init(){
        this._super(...arguments);
        this.details=this.prod;
       
    },
    actions:{
        changeColor(newColor){
            this.onChangeColor(newColor);
        },
        addToCart(){
            this.cart.addItem(this.details);
        },
        removeCart(){
            this.cart.removeItem();
        }
    }
});
