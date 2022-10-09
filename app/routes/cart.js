import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import { hash } from 'rsvp';


export default Route.extend({

    userAuth:service('user-data'),
    checkCookie:service('check-cookie'),

    beforeModel(transition){
        console.log(this.userAuth.isAuthenticated);
        // if(!(this.checkCookie.auth)){
        if (!(this.userAuth.isAuthenticated)){
            console.log("inside beforemodel in cart js");
            var loginController = this.controllerFor('login_page');
            loginController.set('previousTransition', transition);
            this.transitionTo('login_page');
        }
    // }
        // else{
        //     var productDisplayController = this.controllerFor('product-display');
        //     productDisplayController.set('previousTransition', transition);
        //     this.transitionTo('product-display');

        // }

    },

    cart:service("shopping-cart"),
    model(){
        console.log("inside model")
        
        return hash({cart_data:this.cart});
    },
    setupController(controller,model){
        this._super(controller,model);
        controller.set("items",model.cart_data.cartItems);
        console.log(controller.items);
        console.log(model.cart_data.cartItems);
        const subtotal= model.cart_data.cartItems.reduce((acc,item)=>{
            console.log( acc, "item");
            return acc+item.priceCurrent * item.count;
        },0).toFixed(2);
        

        let tax=(parseFloat(0.05*subtotal).toFixed(2));
        let total=(parseFloat(subtotal)+parseFloat(tax)).toFixed(2);

        controller.set('subtotal',subtotal);
        controller.set('tax',tax);
        controller.set('total',total);

    }
});
