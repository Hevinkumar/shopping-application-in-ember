import Controller from '@ember/controller';

export default Controller.extend({
  
  actions:{
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

  }
  }
});
