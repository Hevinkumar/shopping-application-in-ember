import Component from '@ember/component';

export default Component.extend({
    // positionalParams:['Product', 'index'],
    // prod:this.product,
    // ind:this.index,
    // color:"red",
    prod_details:null,
    
    init(){
        this._super(...arguments);
        this.prod_details=this.product ;
    }
   
});
// console.log(this.product.colors);
