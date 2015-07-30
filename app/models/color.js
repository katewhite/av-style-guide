import DS from 'ember-data';

var Color = DS.Model.extend({
  name: DS.attr('string'),
  hexCode: DS.attr('string'),
});


Color.reopenClass({
  	FIXTURES: [
  	{
        id: 1,
	    name: '$blue-text',
	    hexCode: '#59b4bf'
	},
	{
        id: 2,
		name: '$blue-app-panel',
		hexCode: '#417380'
	},
	{
        id: 3,
		name: '$blue-symapp-panel',
		hexCode: '#7fa1a9'
	},
	{
        id: 4,
		name: '$black-text',
		hexCode: '#333333'
	},
	{
        id: 5,
		name: '$gray-toolbar',
		hexCode: '#666666'
	},
	{
        id: 6,
		name: '$gray-inactive-text',
		hexCode: '#b7b7b7'
	},
	{
        id: 7,
		name: '$gray-inactive-bg',
		hexCode: '#e0e0e0'
	},
	{
        id: 8,
		name: '$white-container-bg',
		hexCode: '#f5f5f5'
	},
	{
        id: 9,
		name: '$blue-light-bg',
		hexCode: '#dde4e6'
	},
	{
        id: 10,
		name: '$red',
		hexCode: '#cd2c24'
	},
	{
        id: 11,
		name: '$green',
		hexCode: '#819964'
	}
]});

export default Color;
