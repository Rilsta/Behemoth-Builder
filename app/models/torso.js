import Model from 'ember-data/model';

export default Model.extend({
  squareTorso: DS.attr(),
  circleTorso: DS.attr(),
  triangleTorso: DS.attr()
});
