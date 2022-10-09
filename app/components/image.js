import Component from '@ember/component';

export default Component.extend({
    // positionalParams:['product'],
    // color:this.product,
    productDetails:null,
    init(){
        this._super(...arguments);
        this.productDetails=this.prod;
    },
    // color:this.color,
    actions:{
        
    }
});
