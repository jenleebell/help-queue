import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  question: DS.attr(),
  timestamp:DS.attr('number')
});
