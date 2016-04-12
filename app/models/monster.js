import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  complexion: DS.attr(),
  head: DS.attr(),
  torso: DS.attr(),
  leftArm: DS.attr(),
  rightArm: DS.attr(),
  legs: DS.attr()
});
