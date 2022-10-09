import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    // description: DS.attr(),
    originalPrice: DS.attr(),
    currentPrice:DS.attr(),
    feature: DS.attr(),
    image: DS.attr(),
    color: DS.attr(),
    description: DS.attr()


});
