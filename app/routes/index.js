import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      heads: this.store.findAll('head'),
      torsos: this.store.findAll('torso'),
      leftArms: this.store.findAll('leftArm'),
      rightArms: this.store.findAll('rightArm'),
      legs: this.store.findAll('legs'),
    });
  },
});
