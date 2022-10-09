import Controller from '@ember/controller';

export default Controller.extend({
  // const:{product},
  modelC:null,
  id:null,
  product:null,
  isZoomed:false,
  addCartDisplay:true,
  actions:{
    onChangeColor(newColor){
      this.set("color",newColor);
    } ,
    getProductImage(){
      return`/images/phone-${this.color}.png`

    },
    toggleZoom(){
      this.set("isZoomed", !this.isZoomed);
      console.log(this.isZoomed);

    }
  

  },
  // init(){
  //   this._super(...arguments);
  //   this.findcolor();
  // },
  // findcolor(data){
  //   console.log(data);
    // for(let item of this.product){
    //   console.log("product controller")
    //   console.log(item);
    //       if(item.id == model.item_id){

    //            return item.color;
    //          }
    //     }
  // }

});
