import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contact_page', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:contact-page');
    assert.ok(route);
  });
});
