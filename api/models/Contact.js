/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	
  attributes: {
  	type: {
  		type: 'string',
  		enum: ['phone', 'email', 'alternative-phone'],
  		required: true,
  		size: 20
  	},

  	value: {
  		size: 40,
  		required: true
  	},

  	person: {
  		model: 'Person',
  		required: true
  	}
  }
};

