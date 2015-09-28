import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        timestamp: new Date().getTime()
      };
      this.sendAction('save', params);
    }
  }
});
