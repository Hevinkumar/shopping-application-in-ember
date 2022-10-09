import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {A} from '@ember/array';
import userData from '../services/user-data';



export default Controller.extend({
    cart: service('shopping-cart'),
    loggedInUser: service('user-data'),

    subtotal: 0,
    tax: 0,
    total: 0,
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
    userData:null,
    currentUser:null,

    // items:null,

    init() {
        console.log(this.items);
        this.set('items', this.cart.cartItems);
        // this.set('items',this.model.cart_data);
        // let subtotal= this.items.cartItems.reduce((acc,item)=>{
        //     console.log( item, "item");
        //     return acc+item.priceCurrent * item.count;
        // },0);


        // let tax=parseFloat((0.09*subtotal).toFixed(3));
        // let total=subtotal+tax;
        // this.set("subtotal",subtotal);
        // this.set('tax',tax);
        // this.set("total",total);
    },

    actions: {
        addItemsCounts(item, event) {
            let userData= JSON.parse(localStorage.getItem('userdata') || []);
            
            console.log("item", item);
            
            // let newCartData=A([]);
            // this.cart.cartItems.filter((e) =>{

            //     if(e != item){
            //         newCartData.pushObject(e);
            //     }
            // });
            // userData=JSON.parse(localStorage.getItem('userdata')) || [];
            // let newUserData = userData.filter(d => d.email !== this.loggedInUser.userId.email);
            this.cart.cartItems.filter((i) =>{
                if(i == item){
                    i.set('count',event.target.value);

                }
            });
            item.set('count', parseInt(event.target.value));
            let newUserData = null;
            if (this.loggedInUser.userId) {
                console.log("indide currentuser");
                this.set("currentUser", this.loggedInUser.userId);
                console.log(this.currentUser);
                newUserData = userData.filter(d => d.email !== this.loggedInUser.userId.email);


                if ((this.get("currentUser").cartitems != [])) {
                    console.log(this.get("currentUser").cartitems);
                    this.get("currentUser").cartitems = this.cart.cartItems;

                }
                else {
                    this.currentUser.set('cartitems', this.cart.cartItems);
                }


                this.loggedInUser.set("userId", this.currentUser)
                console.log(this.get("loggedInUser").userId);
                // this.loggedInUser.set('userId',this.this.loggedInUser.userId);
                newUserData.push(this.loggedInUser.userId);
                localStorage.setItem('userdata', JSON.stringify(newUserData));
                this.set('currentUser', this.loggedInUser.userId);

            }
            // console.log(newCartData, "newCartData");
            // newCartData.pushObject(item);
            // this.cart.set("cartItems", newCartData);
            // console.log(this.cart.cartItems);
            this.cart.set("itemCount",this.cart.cartItems.length);
            console.log(this.cart.cartItems, "cart items");
            // this.model.cart_data.addItem(item);
            // let items=this.get("items");
            // cos
            this.set("items", this.cart.cartItems);
            console.log(this.items);
            console.log(this.get('items'));
            console.log(this.cart.cartItems, "newCartItems")
            let tempSubTotal = 0;
            let temptax = 0;
            let tempTotal = 0;
            if (!(item.count <= 0)) {
                tempSubTotal = (item.count * item.priceCurrent).toFixed(2);
                temptax = parseFloat(tempSubTotal * 0.05).toFixed(2);
                tempTotal = (parseFloat(tempSubTotal) + parseFloat(temptax)).toFixed(2);
                this.set('subtotal', tempSubTotal);
                this.set('tax', temptax);
                this.set('total', tempTotal);

            }
            else {
                this.set('subtotal', tempSubTotal.toFixed(2));
                this.set('tax', temptax.toFixed(2));
                this.set('total', tempTotal.toFixed(2));
            }

            if (parseInt(item.count) <= 0) {
                console.log(item.count)
                this.model.cart_data.removeItem(item);
                alert("your item selection is less than 1..");
            }

        },
        removeItem(item) {
            console.log("removeItem", item);
            this.model.cart_data.removeItem(item);
            let tempSubTotal = 0;
            let temptax = 0;
            let tempTotal = 0;
            if ((item.count != 0)) {
                tempSubTotal = (item.count * item.priceCurrent).toFixed(2);
                console.log(tempSubTotal, "subTotal");
                temptax = (parseInt(tempSubTotal) * 0.05).toFixed(2);
                console.log(temptax, "subTotal");
                tempTotal = (parseInt(tempSubTotal) + parseInt(temptax)).toFixed(2);
                console.log(tempTotal, "subTotal");
                this.set('subtotal', (parseInt(this.get('subtotal')) - tempSubTotal).toFixed(2));
                this.set('tax', (parseInt(this.get('tax')) - parseInt(temptax)).toFixed(2));
                this.set('total', (parseInt(this.get('total')) - parseInt(tempTotal)).toFixed(2));

            }
            else {
                this.set('subtotal', tempSubTotal.toFixed(2));
                this.set('tax', temptax.toFixed(2));
                this.set('total', tempTotal.toFixed(2));
            }
        },
        checkOut() {
            if (this.model.cart_data.cartItems.length != 0) {
                alert("Your cart items checkOut successfully.....");
                this.model.cart_data.empty();
                let tempSubTotal = 0;
                let temptax = 0;
                let tempTotal = 0;

                this.set('subtotal', tempSubTotal.toFixed(2));
                this.set('tax', temptax.toFixed(2));
                this.set('total', tempTotal.toFixed(2));

            }
        }

    }
});
