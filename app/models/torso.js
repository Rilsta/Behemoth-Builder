import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  torsoSVG: DS.attr()
});
