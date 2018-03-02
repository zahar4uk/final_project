import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('portfolio');
  this.route('contact');
  this.route('about-us');
  this.route('reviews');
});

export default Router;
