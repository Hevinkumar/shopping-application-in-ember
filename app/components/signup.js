import Component from '@ember/component';
import {A} from '@ember/array';
import {inject as service} from '@ember/service';

export default Component.extend({
    userAuth:service("user-data"),
    shoppingCart:service('shopping-cart'),
    userdata:null,
    newUser:true,
    // classNameBindings: ['iconView:uil-eye:uil-eye-slash'],
    // :[icon1],
    icon1:"password",
    icon2:"password",
    iconView1:true,
    iconView2:true,
    user:{
        name:"",
        email:"",
        phone:"",
        // address:"",
        password:"",
        confirmPassword:"",
        cartitems:[],
        checkOutHistry:[],
    },
    init(){
        this._super(...arguments);
        this.set('userdata', JSON.parse(localStorage.getItem('userdata'))|| A([]));
        console.log(this.userdata);
    },
    actions:{
        onchange(e){
            const {name,value} = e.target;
            let tempData = {...this.user,[name]:value};
            this.set("user",tempData);
            // this.set(`${[name]}`, value);
            console.log(this.user);

        },
        onsubmit(){
            console.log(this.userdata);
            if (this.userdata!=null && this.userdata !== A([])){
                for(let item of this.userdata){
                    console.log(item.email);
                    if (item.email == this.user.email){
                        this.set("newUser",false);
                    }
                };
            }
            // console.log(this.isUserSignup);
            
            if(!(this.newUser)){
                alert(`You already have an account`);
            }
            else if(this.user.password !== this.user.confirmPassword){
                alert('please enter both password as same...');
            }
            else{
                // this.user.set("cartitems",this.shoppingCart.cartItems);
                this.user.cartitems=this.shoppingCart.cartItems;
                // let tempData = {...this.user,[cartitems]:this.shoppingCart.cartItems};
                // this.set("user",tempData);
                this.userdata.pushObject(this.user);
                localStorage.setItem("userdata",JSON.stringify(this.userdata));
                this.userAuth.set("isAuthenticated",true);
                this.userAuth.set("userId",this.user);
                this.userAuth.set('authCartItems',this.cartitems);
                // e.target.reset();
                console.log(this.userdata);
                window.alert("You registered successfully");
                this.loginFunction(true);
                this.set('user',{name:"",email:"",phone:"",address:"",password:"",confirmPassword:"",cartitems:[],checkOutHistry:[]});
                // this.set('isUserSignup',true);
                // console.log(this.isUserSignup);

                // this.userdata.remove()
            }

        },
        ondestroy(){
            this.userdata.empty() ;
            console.log(this.userdata.userData);
        },
        iconChange1(){
            
            // classNameBindings: ['isEnabled::disabled'];
            // attributeBindings:['type'];
            
            // console.log(event.element.target.type);
            if((this.iconView1)){
                this.set('icon1' , 'text');
            }else{
                this.set('icon1' ,'password')
            }
            this.set('iconView1',!this.get("iconView1"));
            
            // this.set('icon1' , !this.get('icon1'));
            console.log(this.get("iconView1"));


        },
        iconChange2(){
            // classNameBindings: ['isEnabled::disabled'];
            if((this.iconView2)){
                this.set('icon2' , 'text');
            }else{
                this.set('icon2' ,'password')
            }
            this.set('iconView2',!this.get("iconView2"));
            console.log(this.get("iconView2"));


        }
        
        

    },
    
});
