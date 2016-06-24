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
      monsters: this.store.findAll('monster'),
    });
  },
  actions: {
    update(monster, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          monster.set(key,params[key]);
        }
      });
      monster.save();
      this.transitionTo('monster-gallery');
    },
    destroyMonster(monster) {
      monster.destroyRecord();
      this.transitionTo('monster-gallery');
    }
  }
});
