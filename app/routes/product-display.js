import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';
import { data } from '../configurations/listing';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import checkCookie from '../services/check-cookie';
export default Route.extend({
   

    model(){
        // let checkCookie=service('check-cookie');
        return hash({
            data:data
        })
    
    },
   

});
