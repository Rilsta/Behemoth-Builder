import Ember from 'ember';

export default Ember.Component.extend({
  isTraitShowing: false,
  actions: {
    traitShow: function() {
      this.set('isTraitShowing', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        head: this.get('heads.name.headSVG'),
        torso: this.get('torsos.name.torsoSVG'),
        rightArm: this.get('rightArms.name.rightArmSVG'),
        leftArm: this.get('leftArms.name.leftArmSVG'),
        legs: this.get('legs.name.legsSVG'),
      };
    },
  }
});
