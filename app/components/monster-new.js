import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    chooseShape(shape) {
      debugger;
      this.set.toString(shape);
    }
  }
});
