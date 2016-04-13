import Model from 'ember-data/model';

export default Model.extend({
  squareLegs: DS.attr(),
  circleLegs: DS.attr(),
  triangleLegs: DS.attr()
});
