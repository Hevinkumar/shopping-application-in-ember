import Controller from '@ember/controller';
import { data } from '../configurations/listing';
import { hash } from 'rsvp';
import { filter } from 'rsvp';
import {inject as service} from '@ember/service';
export default Controller.extend({
    checkcookie:service('check-cookie'),
  
    templist: [],
    productlist: null,
    temp: 0,
    modeldata: data,
    returndata:null,
    islooping:true,
    // time:1000,

    init() {
        this._super(...arguments);
        this.set('returndata',[]);
        // if(this.checkcookie.auth == null){
        //   this.checkcookie.checkCookie();
        // }
        
    },
    afterModel(){
      if(this.checkcookie.auth == null){
        this.checkcookie.checkCookie();
      }

    },
    actions: {
        swapitems(list) {
            let temparray = [];
            // console.log(list,"list");
            if (list.length != 0) {
                for (let i = 0; i < 2; i++) {
                    temparray.push(model[i]);
                }

            }
            this.set("templist", temparray);
        },
        productFilter(value,data){
            let type = value;
            console.log(value,data);
      
            // console.log(type);
            console.log(this,"inside controller");
            // console.log(this.get('results'));
            // let data=this.get('results');
      
            let newData=[];
            if (type === 'pricelow') {
              type = 'priceCurrent';
              newData = data.sort(dynamicSortAscend(type));
            //   this.set("results",newData);
            }
            else if(type === 'pricehigh'){
              type='priceCurrent';
              newData=data.sort(dynamicSortDescend(type));

            }
            else if(type === 'speed'){
              newData = data.sort(dynamicSortDescend(type));
            //   this.set("results",newData);
              
            }
            else{
              // type='offer'
              newData = data.sort(dynamicSortAscend(offer));
            //   this.set("results",newData);
            }
      
            console.log(newData)

            return newData;
      
      
            function dynamicSortAscend(property) {
              var sortOrder = 1;
              if (property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
              }
              return function (a, b) {
                /* next line works with strings and numbers, 
                 * and you may want to customize it to your needs
                 */
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
              }
            }
            function dynamicSortDescend(property) {
              var sortOrder = 1;
              if (property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
              }
              return function (a, b) {
                /* next line works with strings and numbers, 
                 * and you may want to customize it to your needs
                 */
                var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
                // console.log(result);
                return result * sortOrder;
              }
            }
        },
        filterByName(param) {
            if (param !== '') {
                console.log(param, "param")
                // console.log(this.model.data);
                let filteredResults = this.model.data.filter(function (i) {
                    // console.log(i,"i")
                    let name = i.name;
                    let temp = param;
                    // console.log(name.toLowerCase().match(temp.toLowerCase()));
                    return (name.toLowerCase()).indexOf(param.toLowerCase()) !== -1;

                })
                // console.log(filteredResults);
                return filteredResults;
                //   return this.store.query('rental', { name: param });
            } else {
                return this.data;
            }
        }
    }

});

// name: DS.attr(),
//     // description: DS.attr(),
//     price: DS.attr(),
//     features: DS.attr(),
//     image: DS.attr(),
//     color: DS.attr(),
//     description: DS.attr()
