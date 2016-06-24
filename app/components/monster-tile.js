import Ember from 'ember';

export default Ember.Component.extend({
actions: {
  update(monster, params) {
    this.sendAction('update', monster, params);
  },
  destroyMonster(monster) {
    this.sendAction('destroyMonster', monster);
  },
}
});
