/**
 * HomepagesController
 *
 * @description :: Server-side logic for managing Homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (request, response) {
		return response.view('homepage/homepage', {
			currentDate: (new Date())
		});
	}
};

