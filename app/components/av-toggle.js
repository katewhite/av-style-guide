import Ember from 'ember';

export default Ember.Component.extend({
	active: false,
	activeOption: 'option-1',
	watchActive: function() {
		if (this.get('active')) {
			this.set('activeOption', 'option-2'); 
		}
		else {
			this.set('activeOption', 'option-1'); 
		}
		console.log('active changed');
	}.observes('active')
});
