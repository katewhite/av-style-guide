import Ember from 'ember';

var { computed, get } = Ember;

export default Ember.Controller.extend({
  assignedToolbarItems        : Ember.A([]),
  remainingToolbarItems       : computed.setDiff('model', 'assignedToolbarItems'),
  remainingToolbarItemsCount : computed.alias('remainingToolbarItems.length'),

  actions: {
    addToolbarItem(toolbarItemId) {
      var assignedToolbarItems = get(this, 'assignedToolbarItems');
      var toolbarItem          = get(this, 'model').findBy('id', toolbarItemId);

      if (!assignedToolbarItems.contains(toolbarItem)) {
        return assignedToolbarItems.pushObject(toolbarItem);
      }
    },

    // addAllUsers() {
    //   var remainingUsers = get(this, 'remainingUsers')
    //   return get(this, 'selectedUsers').pushObjects(remainingUsers);
    // },

    // removeUser(user) {
    //   return get(this, 'selectedUsers').removeObject(user);
    // },

    // removeAllUsers() {
    //   return get(this, 'selectedUsers').clear();
    // }
  }
});