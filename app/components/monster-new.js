import Ember from 'ember';

export default Ember.Component.extend({
  isTraitShowing: false,
  actions: {
    traitShow: function() {
      this.set('isTraitShowing', true);
    }
  }
});
