import Ember from 'ember';

export default Ember.Service.extend({
  parts: [],

  add(part) {
    this.get('parts').pushObject(part);
  }
});
