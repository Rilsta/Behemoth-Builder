import Ember from 'ember';

export default Ember.Component.extend({
actions: {
  delete(monster) {
    if (confirm('Are you sure you want to delete this Behemoth?')) {
      this.sendAction('destroyMonster', monster)
    }
  }
}
});
