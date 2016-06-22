import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('monster');
  },
  actions: {
    destroyMonster(monster) {
      monster.destroyRecord();
      this.transitionTo('index');
    }
  }
});
