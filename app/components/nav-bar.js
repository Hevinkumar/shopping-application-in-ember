import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Component.extend({
    navlinks:"navbar-links",
    login:false,
    signup:false,
    togglebutton:true,
    userAuth:service('user-data'),
    checkcookie:service('check-cookie'),
    shoppingCart:service('shopping-cart'),
      actions:{
        logout(){
            if (confirm("are you sure you want to log out...")){
                this.userAuth.set("isAuthenticated",false);
                this.userAuth.set('id',null);
                this.userAuth.set('userId',null);
                this.checkcookie.set("auth",false);
                this.checkcookie.set('user',null);
                this.checkcookie.setCookie("username",null,0);
                this.shoppingCart.set('cartItems',A([]));
                console.log(this.shoppingCart);
                console.log(this.shoppingCart.cortItems);
                this.shoppingCart.set('itemCount',this.shoppingCart.cartItems.length);
                console.log(this.shoppingCart.itemCount);
            }

        },
        toggleButton(){
            console.log("entered");
            
            if (this.togglebutton){
                this.set('togglebutton',!this.get('togglebutton'));
                this.set('navlinks','navbar-links active')
            }
            else{
                this.set('navlinks','navbar-links')
            }
        },
        login_toggle(){
            this.set('login',!this.get("login"))
        },
        signup_toggle(){
            this.set("signup" , !this.get("signup"))
        },
      },

});
