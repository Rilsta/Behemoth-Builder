import Ember from 'ember';

export default Ember.Component.extend({
  monsterParts: Ember.inject.service(),
  actions: {
    addHeadShape(silhouette){
      //code to stick head shape in service!
    }
  }
});
