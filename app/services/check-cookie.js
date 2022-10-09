import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import userData from './user-data';

export default Service.extend({
    shoppingCart: service('shopping-cart'),
    userData: service('user-data'),
    
    auth: null,
    user: null,
    init(){
        // this.set("auth",checkCookie());
        // this.set("user",null);
        // this.set("auth",);
        // this.set("user",null);
        // this.set('auth',function()=> {

        // })
        let localdata=JSON.parse(localStorage.getItem('userdata'))|| [];

        function getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        };
    
        function checkCookie() {
            let user = getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
                // this.set('auth',true);
                // this.set('auth',true);
                // this.set('user',user);
                // console.log(this.user);
                return user;
            } else {
                // user = prompt("Please enter your name:", "");
                if (user != "" && user != null) {
                    setCookie("username", user);
                }
            }
        };
        function setCookie(cname,cvalue) {
            const d = new Date();
            d.setTime(d.getTime() + (60*1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires;
          };
          let User = checkCookie();
          if(User){
            

            if (localdata != null){
                this.set('user',User);
                this.set('auth',true);
                let items=null;
                // console.log(localdata);
                let user=null;

                if(localdata != null){
                    localdata.forEach(e =>{
                        if((e != null)){
                        if (e.email == User){
                            user=e;
                            // return e;}
                        }}
    
                    } );

                }
                if (user != null){
                    this.userData.set('userId',user);
                    this.userData.set('isAuthenticated',true);
                    this.userData.set("id",User);
                }
                
                
                
                let newData=localdata.filter(e =>{
                    if (e != null){
                        if (user!= null){
                            if (e != user){
                            return e
                            }
                        }
                    }
                    else{
                        return 
                    }
                    });
                newData=newData.filter(e => e != null);
                console.log(newData);

                if(user !=null){
                    user.cartitems.forEach(item =>{
                        this.shoppingCart.addItem(item);
    
                    });
                    this.userData.set('authCartItems', user.cartitems);

                }
                
                newData.push(user);
                localStorage.setItem("userdata",JSON.stringify(newData));
                this.shoppingCart.set('cartItems',this.shoppingCart.cartItems);
                this.shoppingCart.set("itemCount",this.shoppingCart.cartItems.length);
                
                console.log(this.userData.userId);
                
                // this.shoppingCart.set('cartItems',A(items));
                console.log(this.shoppingCart.cartItems,"cartItems");
            }
            console.log(this.userData.id,"userid");

            // this.shoppingCart.set('cartItems',)
          }
        //   console.log(User);
    },
        
    
    
    // getCookie(cname) {
    //     let name = cname + "=";
    //     let ca = document.cookie.split(';');
    //     for (let i = 0; i < ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // },

    // checkCookie() {
    //     let user = this.getCookie("username");
    //     if (user != "") {
    //         alert("Welcome again " + user);
    //         this.set('auth',true);
    //         this.set('user',user);
    //         console.log(this.user);
    //         return user;
    //     } else {
    //         // user = prompt("Please enter your name:", "");
    //         if (user != "" && user != null) {
    //             setCookie("username", user);
    //         }
    //     }
    // },
    setCookie(cname,cvalue,day) {
        const d = new Date();
        d.setTime(d.getTime() + (day*24*60*60*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires;
      },
    


    
    
});
