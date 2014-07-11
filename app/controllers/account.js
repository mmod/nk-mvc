/**
 * account.js
 * 
 * package: MMod-Node
 * version:  $id$
 * author:  Richard B. Winters <a href="mailto:rik@massivelymodified.com">rik At MassivelyModified</a>
 * copyright: 2013-2014 Massively Modified, Inc.
 */

module.exports = exports = accountController;

function accountController()
{
};

accountController.prototype.index = function( request, response )
{
	var layout = this.config.view_provider;
	
	// We just need to display fields for a login here
	var klay = { 
			controller: this.config.controller, 
			view: this.config.view, 
			layout: 'shared/main',
			viewbag: {
				title: 'MMOD Framework',
				pagetitle: 'Nothing to see here...'
			}
	};
	
	layout.turn( request, response, klay );
};

// HTTP GET /account/login
accountController.prototype.login = function( request, response )
{
	var layout = this.config.view_provider;

	for( var part in request.requrl.query )
	{
		console.log( 'Get Var: `' + part + '`, Value: `' + request.requrl.query[part] + '`.' );
	}
	// declare model here, prepare it however it is required to be prepared, and add it to the klay object
	
	// We just need to display fields for a login here
	var klay = { 
			controller: this.config.controller, 
			model: require( '../models/account' ).loginView,
			view: this.config.view, 
			layout: 'shared/main',
			viewbag: {
				title: 'MMOD Framework',
				pagetitle: 'Please log in'
			}
	};
	
	layout.turn( request, response, klay );
};

// HTTP POST /account/login
accountController.prototype.loginPost = function( request, response )
{
	var viewModel = require( '../models/account' ).loginView,
	model = this.model.set( viewModel ),
	layout = this.config.view_provider,
	klay = { 
			controller: this.config.controller, 
			model: viewModel,
			view: this.config.view, 
			layout: 'shared/main',
			viewbag: {
				title: 'MMOD Framework',
				pagetitle: 'You tried to log in.'
			}
	};
	
	// Here we define a callback for our authentication method
	var callback = function( req, res, authenticated )
	{
		if( authenticated !== false )
		{
			req.session.data.isAuthenticated = true;
			if( request.posted.rememberme !== undefined || null || false )
			{	
				request.session.data.persistence = true;
			}
			req.session.data.username = req.posted.username;
			req.session.data.password = req.posted.password;
			req.session.data.email = authenticated.email;
			req.session.data.name.first = authenticated.first;
			req.session.data.name.last = authenticated.last;
		}
		else
		{
			req.session.data.isAuthenticated = false;
			req.session.data.name.first = 'Guest';
		}
		
		layout.turn( req, res, klay );
	};
	
	// And here we asynchronously execute the model's authenticate method. I'm sure you can see the changes you would need to make
	// in this controller method to make things synchronous instead (i.e.  remove code body from callback, have it run after model executes, but have
	// model return its value to a variable within this method's scope like var authenticated = mode.authenticate... callback can be left undefined.)
	model.authenticate( request, response, callback );
};

// HTTP /account/manage
accountController.prototype.manage = function( request, response )
{
	var viewModel = require( '../models/account' ).manageView,
	layout = this.config.view_provider,
	klay = { 
			controller: this.config.controller, 
			model: this.model.set( viewModel ),
			view: this.config.view, 
			layout: 'shared/main',
			viewbag: {
				title: 'MMOD Framework',
				pagetitle: 'Please manage yourself.',
				usercompany: 'Massively Modified, Inc.',
				username: 'Rik',
				useremail: 'rik@mmogp.com',
				usertypes: { 'a': 'Guest', 'b': 'Registered', 'c': 'Moderator', 'd': 'Administrator' }
			}
	};
	
	layout.turn( request, response, klay );
};

//HTTP POST /account/manage
accountController.prototype.managePost = function( request, response )
{
	var layout = this.config.view_provider;
	
	// We just need to display fields for a login here
	var klay = { 
			controller: this.config.controller, 
			view: this.config.view, 
			layout: 'shared/main',
			title: 'MMOD Framework',
			pagetitle: 'Please manage yourself'
	};
	
	layout.turn( request, response, klay );
};