import Ember from 'ember';

export default Ember.Component.extend({
  updateMonsterForm: false,
  actions: {
    updateMonsterFormShow() {
      this.set('updateMonsterForm', true);
    },
    update(monster) {
      var params= {
        name: this.get('name'),
        head: this.get('heads.name.headSVG'),
        torso: this.get('torsos.name.torsoSVG'),
        rightArm: this.get('rightArms.name.rightArmSVG'),
        leftArm: this.get('leftArms.name.leftArmSVG'),
        rightLeg: this.get('rightLegs.name.rightLegSVG'),
        leftLeg: this.get('leftLegs.name.leftLegSVG'),
      };
      this.set('updateMonsterForm', false);
      this.sendAction('update', monster, params);
    },
    delete(monster) {
      if (confirm('Are you sure you want to delete this Behemoth?')) {
        this.sendAction('destroyMonster', monster);
      }
    },
  }
});
