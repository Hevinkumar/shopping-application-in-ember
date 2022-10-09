import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { data } from '../configurations/listing';
export default Route.extend({
    model(params) {
        const { item_id } = params;
        let item,features;
        data.forEach(items=>{
           console.log(items.id);
            if(items.id == item_id){
                // console.log(items.color,"inside item");
                item=items;
                // features=items.features;
            }
        })
        // console.log(data,"item data");
        return hash({
            item_id: item_id,
            data: data,
            item: item,
            // features:features,
        });
    },


    setupController(controller, model) {
        this._super(controller, model);
        // const colorFind=function(){
        //     for(let item of model.product){
        //         if(item.id == model.item_id){
        //             return item.color;
        //         }
        //     }
        // };
        // colorFind();
        controller.set('modelC', model);
        controller.set('id',controller.get("modelC").id);
        controller.set('product',controller.get("modelC").features);

        // let productColor = this.actions.productFind(model.model);


        // }
        // const colorFind = model.map((item)=>{
        //     if(item.id == model.item_id){
        //         return item;
        //     }
        // })
        // console.log(colorFind);
        // controller.set("id", model.item_id);
        // controller.set('product', model.data);
        // controller.set('color', productColor);
        // controller.actions.findColor(model.data);


    },
    // actions: {
    //     productFind(model) {
    //         console.log(model);
    //         // for(let item of this.model.data){
    //         //     if(this.model.item_id == item.id){
    //         //         return item.color;
    //         //     }
    //         // }
    //     }

    // }
});
