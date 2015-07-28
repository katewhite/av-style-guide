import DS from 'ember-data';

var Color = DS.Model.extend({
  name: DS.attr('string'),
  hexCode: DS.attr('string'),
});


Color.reopenClass({
  	FIXTURES: [
  	{
	    name: '$blue-text',
	    hexCode: '#59b4bf'
	},
	{
		name: '$blue-app-panel',
		hexCode: '#417380'
	},
	{
		name: '$blue-symapp-panel',
		hexCode: '#7fa1a9'
	},
	{
		name: '$black-text',
		hexCode: '#333333'
	},
	{
		name: '$gray-toolbar',
		hexCode: '#666666'
	},
	{
		name: '$gray-inactive-text',
		hexCode: '#b7b7b7'
	},
	{
		name: '$gray-inactive-bg',
		hexCode: '#e0e0e0'
	},
	{
		name: '$white-container-bg',
		hexCode: '#f5f5f5'
	},
	{
		name: '$blue-light-bg',
		hexCode: '#dde4e6'
	},
	{
		name: '$red',
		hexCode: '#cd2c24'
	},
	{
		name: '$green',
		hexCode: '#819964'
	}
]});

export default Color;