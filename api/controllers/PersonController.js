/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (request, response) {
		Person.find().exec(function(err, persons) {
			if(err) return res.serverError(err);
			return response.view('person/index', {
			allPersons: persons
			});
		});   
	}
};

