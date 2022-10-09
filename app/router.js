import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cart');
  this.route('item' , {path: 'item/:item_id'});
  this.route('login_page');
  this.route('signup_page');
  this.route('about_page');
  this.route('contact_page');
  this.route('product-display');
});

export default Router;
