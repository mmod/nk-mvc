/**
 * home.js
 * 
 * package: MMod-Node
 * version:  $id$
 * author:  Richard B. Winters <a href="mailto:rik@massivelymodified.com">rik At MassivelyModified</a>
 * copyright: 2013-2014 Massively Modified, Inc.
 */


module.exports = exports = homeController;

function homeController()
{
};

homeController.prototype.index = function( request, response )
{
	var layout = this.config.view_provider;
	
	// We just need to display a welcome here for now
	var klay = { 
			controller: this.config.controller, 
			view: this.config.view,
			layout: 'shared/main',
			title: 'MMOD Framework',
			pagetitle: 'Hello World!'
			// Any additional data you wish to send
	};
	
	layout.construct( request, response, klay );
};