import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        date_added: new Date
      };
      this.sendAction('save', params);
    }
  }
});
