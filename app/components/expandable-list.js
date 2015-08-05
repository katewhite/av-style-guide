import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		toggleExpanded() {
			this.toggleProperty('isExpanded');
		}
	},
	
	isExpanded: true
});
