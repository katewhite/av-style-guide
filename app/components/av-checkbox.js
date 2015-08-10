import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "div",
	classNames: ["av-checkbox"],
	uniqueId: function() {
	    let s4 = function() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
 		};
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}.property()
});
