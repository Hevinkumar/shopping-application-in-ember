import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
    userAuth: service("user-data"),
    shoppingCart:service("shopping-cart"),
    checkCookie:service('check-cookie'),


    userdata: null,
    // userdata:localStorage.getItem('userdata'),
    iconView: true,
    icon: 'password',
    captcha_String: '',
    login: {
        email: "",
        password: "",
        captcha: ""
    },
    didInsertElement() {
        this._super(...arguments);
        this.set("captcha_String", this.actions.create_captcha());
        this.set('userdata', JSON.parse(localStorage.getItem('userdata') || []));
    },
    actions: {
        onchange(e) {
            const { name, value } = e.target;
            let temp = { ...this.login, [name]: value };
            this.set('login', temp);
            // console.log(this.login)

        },
        onsubmit() {
            // console.log(this.userdata.userData);
            console.log(this.userdata);
            let date=new Date();
            date.setTime(date.getTime() + (24*60*60*1000));
            let expires = "expires=" + date.toUTCString();
            // console.log(this.userdata[0]);
            if (this.userdata) {
                console.log("inside");


                this.userdata.forEach(user => {
                    // console.log(user);
                    if (user) {
                        if (user.email === this.login.email) {
                            if (user.password === this.login.password) {
                                if (this.login.captcha == this.captcha_String) {
                                    // document.cookie=`username =${user.email};${expires}`;
                                    this.checkCookie.setCookie("username",user.email,1);

                                    this.userAuth.set("isAuthenticated", true);
                                    this.userAuth.set('id',user.email);
                                    this.userAuth.set('userId',user);
                                    let newData=this.userdata.filter(e => e != user);
                                    this.shoppingCart.cartItems.forEach(i=>{
                                        user.cartitems.push(i);
                                        
                                    });
                                    user.cartitems.forEach(i =>{
                                        this.shoppingCart.addItem(i);
                                    })
                                    this.shoppingCart.set("itemCount",this.shoppingCart.cartItems.length);
                                    newData.push(user);
                                    localStorage.setItem("userdata",JSON.stringify(newData));
                                    this.userAuth.set("userId", user);
                                    this.userAuth.set('authCartItems', user.cartitems);
                                    // this.shoppingCart.cartItems
                                    // console.log(this.userAuth.get("isAuthenticated"), "login user auth value");
                                    console.log(this);
                                    this.loginFunction(true);
                                    window.alert("you successfully logged in..")
                                }
                                else {
                                    window.alert('please enter valid captha');
                                    create_captcha()


                                }

                            }
                            else {
                                window.alert("your password in correct...");
                                create_captcha()
                            }

                        }
                        else {
                            window.alert("this mail id not register ,please try again / if you dont have an account please sign in.");
                            // this.signupFunction(true);
                        }
                    }
                })
            }
            else {
                alert("You dont have an account...,Please signUp");
                this.signupFunction(true);
            }

        },
        iconChange() {
            // classNameBindings: ['isEnabled::disabled'];
            if ((this.iconView)) {
                this.set('icon', 'text');
            } else {
                this.set('icon', 'password')
            }
            this.set('iconView', !this.get("iconView"));
            console.log(this.get("iconView"));


        },
        // var captcha_String;
        // didInsertElement() {
        //     this._super(...arguments);
        //     // console.log(this.element.querySelectorAll('.refresh'));
        //     this.create_captcha();
        //   },

        create_captcha() {

            let captchaString = (Math.random() + 1).toString(36).substring(2, 8);
            document.getElementById("preview-captcha").innerHTML = captchaString;
            return captchaString;

        }


    }


});
