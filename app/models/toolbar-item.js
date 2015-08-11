import DS from 'ember-data';

var ToolbarItem = DS.Model.extend({
  name: DS.attr('string')
});

ToolbarItem.reopenClass({
  FIXTURES: [
  {
    id: "1",
    name: 'Name 1'
  }, {
    id: "2",
    name: 'Name 2'
  }, {
    id: "3",
    name: 'Name 3'
  }
]});

export default ToolbarItem;
