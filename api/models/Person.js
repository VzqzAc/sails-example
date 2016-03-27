/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	firstName: {
  		type: 'string',
  		size: 40,
  		required: true
  	},

  	lastName: {
  		type: 'string',
  		size: 40,
  		required: true
  	},

  	contacts: {
  		collection: 'Contact',
  		via: 'person'
  	}
  }
};

