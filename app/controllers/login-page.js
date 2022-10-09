import Controller from '@ember/controller';
import signup from '../components/signup';

export default Controller.extend({

    actions: {
        login(ifLoggedIn) {
            if (ifLoggedIn) {
                var previousTransition = this.get('previousTransition');
                if (previousTransition) {
                    this.set('previousTransition', null);
                    previousTransition.retry();
                } else {
                    // Default back to homepage
                    this.transitionToRoute('cart');
                }

            }

        },
        signup(ifLoggedIn){
            if (ifLoggedIn) {
                var previousTransition = this.get('previousTransition');
                if (previousTransition) {
                    this.set('previousTransition', null);
                    previousTransition.retry();
                    // this.transitionToRoute('signup_page');
                } else  {
                    // Default back to homepage
                    this.transitionToRoute('signup_page');
                }

            }

        }
    }
});
