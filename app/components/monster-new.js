import Ember from 'ember';

export default Ember.Component.extend({
  part: "Square",
  parentCo: '',
  actions: {
    choosePart(part){
      this.set("part", part);
    }
  }
});
