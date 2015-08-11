import Ember from 'ember';

var { get } = Ember;

export default Ember.Component.extend({
  classNames        : [ 'draggableItem' ],
  attributeBindings : [ 'draggable' ],
  draggable         : 'true',
  isDragging		: false,
  
  dragStart(event) {
  	this.set('isDragging', true);
  	event.dataTransfer.dropEffect = 'none';
    return event.dataTransfer.setData('text/data', get(this, 'content'));
  },

  dragEnd(event) {
  	this.set('isDragging', false);
  },

  dragOver(event) {
  	return event.dataTransfer.dropEffect = 'none';
  }
});