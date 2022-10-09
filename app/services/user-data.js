import Service from '@ember/service';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import shoppingCart from './shopping-cart';

export default Service.extend({
  checkCookie:service('check-cookie'),

  isAuthenticated: false,
  userData: null,
  userId: null,
  id: null,
  shoppingCart: service("shopping-cart"),
  checkingCookie: true,

  init() {
    this._super(...arguments);
    this.set('userData', A([]));
    this.set("userId",null)
    // console.log(this.checkCookie.user,"inside userdarta");
    // console.log(this.checkCookie);
    // let temp =this.get("checkCookie").checkCookie();
    // console.log(temp,'temp');
    // this.checkCookie.checkCookie();
    // this.set('isAutehentcated', false);
    // let userData = JSON.parse(localStorage.getItem('userdata') || []);
    // this.demoFunction();

  },
  // didRender() {
  //   this._super(...arguments);
  //   console.log("ckklkkl");
  //   let shoppingcart = null;
    // // if(this.checkingCookie){
    // let checkCookie = function () {
    //   let user = getCookie("username");
    //   if (user != "") {
    //     // alert("Welcome again " + user);
    //     shoppingcart = true;
    //     return { auth: true, user: user };

    //   } else {
    //     return { auth: false, user: null };
    //   }
    // }
    // let getCookie = function (cname) {
    //   let name = cname + "=";
    //   let decodedCookie = decodeURIComponent(document.cookie);
    //   let ca = decodedCookie.split(';');
    //   for (let i = 0; i < ca.length; i++) {
    //     let c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //       c = c.substring(1);
    //     }
    //     if (c.indexOf(name) == 0) {
    //       return c.substring(name.length, c.length);
    //     }
    //   }
    //   return "";
    // }
    // const { auth, id } = checkCookie();
    // this.set("checkingCookie", false);
    // this.set('isAuthenticated', auth);
    // this.set('id', id);
    // // this.shoppingCart.set('cartItems', shoppingcart)

    // if (shoppingcart) {
    //   this.shoppingCart.addData();
    // }
  // },

  add(item) {
    console.log(item);
    this.userData.pushObject(item);
  },

  remove(item) {
    this.userData.removeObject(item);
  },

  empty() {
    this.userData.clear();
  },
  // isAuthenticated(){
  //   // if(this.checkingCookie){
  //     let checkCookie = function () {
  //       let user = getCookie("username");
  //       if (user != "") {
  //         // alert("Welcome again " + user);
  //         shoppingcart = true;
  //         return { auth: true, user: user };
  
  //       } else {
  //         return { auth: false, user: null };
  //       }
  //     }
  //     let getCookie = function (cname) {
  //       let name = cname + "=";
  //       let decodedCookie = decodeURIComponent(document.cookie);
  //       let ca = decodedCookie.split(';');
  //       for (let i = 0; i < ca.length; i++) {
  //         let c = ca[i];
  //         while (c.charAt(0) == ' ') {
  //           c = c.substring(1);
  //         }
  //         if (c.indexOf(name) == 0) {
  //           return c.substring(name.length, c.length);
  //         }
  //       }
  //       return "";
  //     }
  //     const { auth, id } = checkCookie();
  //     this.set("checkingCookie", false);
  //     // this.set('isAuthenticated', auth);
  //     this.set('id', id);
  //     // this.shoppingCart.set('cartItems', shoppingcart)
  
  //     // if (shoppingcart) {
  //       this.shoppingCart.addData(id);
  //     // }

  //   return auth;
  // },
  demoFunction(){

    console.log(this.shoppingCart);
  }

});
