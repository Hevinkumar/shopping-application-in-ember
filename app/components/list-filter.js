import Component from '@ember/component';
import { data } from '../configurations/listing';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',
  isSwap: true,
  templist: [],
  productlist: null,
  temp: 0,
  time: 1000,
  filteredOffer: null,

  init() {
    this._super(...arguments);
    let filter = this.filter;
    this.set('productlist', data);
    let filteredOffer = data.filter(function (item) {
      return (item.offer == true)
    })
    this.set("filteredOffer", filteredOffer);
   
    let modelArray = filteredOffer;
    let model_length = filteredOffer.length;
    let tempArray = [];
    let count = 0;
    let temp=0;
    if(this.islooping){
    if (!(filteredOffer.length < 2)) {
      let timeloop=function(){
        while (temp != model_length) {
          // for (let i = this.temp; i <= this.temp + 2; i++) {
          if (count != 2) {
            if (temp + 1 == model_length) {
              tempArray.push(modelArray[temp]);
              count += 1;
              temp=0
            }
            else {
              {
                tempArray.push(modelArray[temp]);
                temp+=1
                count += 1;
              }
            }
          }
          else {
            count = 0;
            let templist=tempArray;
            tempArray=[];
            return templist;

          }
        }

      }
      this.set('results',timeloop());


      setInterval(() => {
        // console.log("inside interval");
        let data=timeloop();

        this.set("results",data);
      }, 5000);
    }
    else {
      this.set("results", filteredOffer);

    }
  }
  },

  actions: {
    handleFilterEntry() {
      // console.log(this.value,"this.value");
      this.set('filterProduct', null);

      // console.log(this.get('isSwap'));
      let filterInputValue = this.value;
      let filterAction = this.filter;
      this.set("filterProduct", (filterAction(filterInputValue)));
    },
    handleProductFilter(e) {
      let value = e.target.value;
      let data;
      if (this.get("filterProduct")) {
        data = this.get('filterProduct');
        // console.log(this.get('filterProduct'),"filterProduct in listfilter");
        this.set('filterProduct', null);

      }
      else {
        data = this.get('productlist');
      }

      let productFilterAction = this.productFilter;
      // console.log('filterAction');
      this.set("filterProduct", (productFilterAction(value, data)));
      // console.log(this.get('filterProduct'),'filterProduct');
    },
    


  }


});
