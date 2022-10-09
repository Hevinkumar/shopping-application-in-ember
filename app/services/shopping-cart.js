import Service from '@ember/service';
import { A } from '@ember/array';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';


const CartItem = EmberObject.extend({
    count: 0,
    init(id, name, priceCurrent, priceOriginal, image, color, count) {
        this.set('id', this.id);
        this.set('name', this.name);
        this.set("priceCurrent", this.priceCurrent);
        this.set('priceOriginal', this.priceOriginal);
        this.set('image', this.image);
        this.set('color', this.color);
        this.set('count', this.count);


    }
});
export default Service.extend({
    cartItems: null,
    itemCount: 0,
    userData: [],
    currentUser: null,
    loggedInUser: service('user-data'),


    init() {
        this._super(...arguments);
        this.set('cartItems', A([]));
        this.set("currentUser", null);

        this.set("userData", JSON.parse(localStorage.getItem('userdata')) || []);
        this.set("currentUser", this.loggedInUser.userId);
        // console.log(this.userData,"userData");
        console.log(this.loggedInUser.isAuthenticated);
        if (this.loggedInUser.isAuthenticated) {

            console.log(this.userData, "userData");
            this.userData.forEach(user => {
                // console.log('hi');
                if (user) {
                    if (user.email == this.loggedInUser.userId) {
                        console.log(this.loggedInUser.userId, "shoppingCart userId in shoppingcart.js");
                        if (user.cartitems) {
                            user.cartitems.forEach(i => {
                                this.cartItems.pushObject(i);
                            })
                            this.set('itemCount', (user.cartitems.length + this.itemCount));
                            this.set('currentUser', user);
                            console.log(this.currentUser, "currentUser");
                        }

                        this.set('itemCount', this.itemCount);
                        // this.set('currentUser', user);
                    }
                }

            });

        }

    },
    addItem(item) {
        // let existingItem;
        // if(this.cartItems.lastObject === "undefined"){
        //     existingItem=this.cartItems.find((cartItem)=>{
        //         return cartItem.id == item.id && cartItem.color == color ;
        //     })

        // }
        console.log(this.cartItems);
        let items = this.get("cartItems");
        this.set("itemCount", this.cartItems.length);
        // console.log(items, "items");
        let temp;
        console.log(items);
        let existingItem = items.find((cartItem) => {
            return cartItem.id == item.id;

        })


        if (existingItem) {
            console.log(existingItem.count, "existingItem");
            // this.cartItems.removeObject(existingItem);
            existingItem.set("count", existingItem.count += 1);
            // this.cartItems.pushObject(existingItem);
            console.log(items);
            this.set("cartItems", items);
            console.log(this.get("cartItems"), "cartItems");
            if (this.loggedInUser.userId) {
                console.log("indide currentuser");
                this.set("currentUser", this.loggedInUser.userId);
                console.log(this.currentUser);
                let newUserData = this.userData.filter(d => d.email !== this.loggedInUser.userId.email);

                if ((this.get("currentUser").cartitems != null)) {
                    console.log(this.get("currentUser").cartitems);
                    this.get("currentUser").cartitems = this.get("cartItems");

                }
                else {
                    this.currentUser.set('cartitems', this.get("cartItems"));
                }


                this.loggedInUser.set('userId', this.get("currentUser"))
                console.log(this.loggedInUser.get('userId'));
                // this.loggedInUser.set('userId',this.this.loggedInUser.userId);
                newUserData.push(this.loggedInUser.userId);
                localStorage.setItem('userdata', JSON.stringify(newUserData));
                this.set('currentUser', this.loggedInUser.userId);

            }
            else {

            }


            alert("this product already exist..");
        }
        else {
            // let colorinfo = item.color;
            let cartitem = CartItem.create({
                id: item.id,
                name: item.name,
                priceCurrent: item.priceCurrent,
                priceOriginal: item.priceOriginal,
                image: item.image,
                color: item.color,
                count: 1

            });
            // console.log(cartitem);
            items.push(cartitem);
            temp = items;
            console.log(this.loggedInUser.userId, "loggedInUser");
            let newUserData = null;
            if (this.loggedInUser.userId) {
                console.log("indide currentuser");
                this.set("currentUser", this.loggedInUser.userId);
                console.log(this.currentUser);
                newUserData = this.userData.filter(d => d.email !== this.loggedInUser.userId.email);


                if ((this.get("currentUser").cartitems != [])) {
                    console.log(this.get("currentUser").cartitems);
                    this.get("currentUser").cartitems = temp;

                }
                else {
                    this.currentUser.set('cartitems', temp);
                }


                this.loggedInUser.set("userId", this.currentUser)
                console.log(this.get("loggedInUser").userId);
                // this.loggedInUser.set('userId',this.this.loggedInUser.userId);
                newUserData.push(this.loggedInUser.userId);
                localStorage.setItem('userdata', JSON.stringify(newUserData));
                this.set('currentUser', this.loggedInUser.userId);

            }

            this.set("cartItems", temp);

            // this.set('itemCount', this.get('itemCount') + 1);
            this.set('itemCount', this.cartItems.length);
            console.log(this.cartItems.length);
        }
    },


    removeItem(item) {
        // let index= this.cartItems.indexOf(item);
        // let cardList = this.cartItems;
        // cardList.splice(index,1);
        console.log("inside service cart", item);
        // console.log(this.items, "items");
        this.cartItems.removeObject(item);
        if (this.loggedInUser.userId) {
            console.log("indide currentuser");
            this.set("currentUser", this.loggedInUser.userId);
            let newUserData = this.userData.filter(d => d.email !== this.loggedInUser.userId.email);

            if ((this.get("currentUser").cartitems != null)) {
                console.log(this.get("currentUser").cartitems);
                this.get("currentUser").cartitems = this.get('cartItems');

            }
            else {
                this.currentUser.set('cartitems', this.get("cartItems"));
            }


            this.loggedInUser.set('userId', this.get("currentUser"))
            console.log(this.loggedInUser.get('userId'));
            // this.loggedInUser.set('userId',this.this.loggedInUser.userId);
            newUserData.push(this.loggedInUser.userId);
            localStorage.setItem('userdata', JSON.stringify(newUserData));
            this.set('currentUser', this.loggedInUser.userId);

        }

        this.set('itemCount', this.cartItems.length);



        // if (this.loggedInUser.userId) {
        //     console.log("indide currentuser");
        //     console.log("inside remove item");
        //     let newUserData = this.userData.filter(d => d.email !== this.loggedInUser.userId.email);
        //     console.log(this.currentUser);
        //     this.currentUser.cartitems=this.cartItems;
        //     this.loggedInUser.set('userId',this.currentUser);
        //     newUserData.push(this.currentUser);
        //     localStorage.setItem('userdata', JSON.stringify(newUserData));

        // }




    },
    empty() {
        console.log("hi from empty");

        this.cartItems.clear()
        this.set('itemCount', this.cartItems.length);

        if (this.loggedInUser.userId) {
            console.log("indide currentuser");
            this.set("currentUser", this.loggedInUser.userId);
            let newUserData = this.userData.filter(d => d.email !== this.loggedInUser.userId.email);

            if ((this.get("currentUser").cartitems != null)) {
                console.log(this.get("currentUser").cartitems);
                this.get("currentUser").cartitems = this.get("cartItems");

            }
            else {
                this.currentUser.set('cartitems', this.get("cartItems"));
            }


            this.loggedInUser.set('userId', this.get("currentUser"))
            console.log(this.loggedInUser.get('userId'));
            // this.loggedInUser.set('userId',this.this.loggedInUser.userId);
            newUserData.push(this.loggedInUser.userId);
            localStorage.setItem('userdata', JSON.stringify(newUserData));
            this.set('currentUser', this.loggedInUser.userId);

        }
        // if(this.currentUser){
        //     let newUserData = this.userData.filter(d => d != this.currentUser);
        //     this.currentUser.set('cartitems', this.cartItems);
        //     newUserData.push(this.currentUserData);
        //     localStorage.setItem('userdata', JSON.stringify(newUserData));

        // }
    },
    getTotalItems() {
        return this.cartItems.length;
    },
    addData() {
        if (this.loggedInUser.isAuthenticated) {

            this.userData.forEach(data => {
                if (data.email == this.loggedInUser.id) {
                    this.set('cartItems', data.cartitems);
                }
            })


        }

    }

});
