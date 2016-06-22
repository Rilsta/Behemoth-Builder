import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      heads: this.store.findAll('head'),
      torsos: this.store.findAll('torso'),
      leftArms: this.store.findAll('leftArm'),
      rightArms: this.store.findAll('rightArm'),
      leftLegs: this.store.findAll('leftLeg'),
      rightLegs: this.store.findAll('rightLeg'),
    });
  },
  actions: {
    save(params) {
      var newMonster = this.store.createRecord('monster', params);
      newMonster.save();
      this.transitionTo('index');
    }
  }
});
