import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | product', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.rental = {
    name: 'fakeNmae',
    // description: DS.attr(),
    originalPrice: 'fakeprice',
    currentPrice:'fakeprice',
    features: 'fakefeatures',
    image: 'fakeimage.png',
    color: 'fakecolor',
    description: 'fakedescription'
    };
  });

  test('should display rental details', async function(assert) {
    await render(hbs`<Product @product={{product}} @index={{index}} />`);

  });

  // test('should toggle wide class on click', async function(assert) {

  // });
});
