/**
 * package: nk-mvc
 * sub-package: controllers/account
 * author:  Richard B. Winters <a href="mailto:rik@mmogp.com">rik At Massively Modified</a>
 * copyright: 2013-2014 Massively Modified, Inc.
 * license: Apache, Version 2.0 <http://www.apache.org/licenses/LICENSE-2.0>
 */

module.exports = exports = accountController;

function accountController()
{
};

accountController.prototype.index = function( request, response )
{
	// Undoubtedly there will be session variables we will want to keep persistent.
	response.session.set( 'username', request.session.get( 'username', 'Guest' ), { secure: true } );
	response.session.set( 'email', request.session.get( 'email', '' ), { secure: true } );
	response.session.set( 'name', JSON.stringify( JSON.parse( request.session.get( 'name', JSON.stringify( { first: 'Guest' } ) ) ) ), { secure: true } );
	
	var layout = this.config.view_provider;
	
	// We just need to display fields for a login here
	var klay = { 
			controller: this.config.controller, 
			view: this.config.view, 
			layout: 'shared/main',
			viewbag: {
				title: 'MMOD Framework',
				pagetitle: 'Nothing to see here...',
				username: request.session.get( 'username', 'Guest' )
			}
	};
	
	layout.turn( request, response, klay );
};

// HTTP GET /account/login
accountController.prototype.login = function( request, response )
{
	// Undoubtedly there will be session variables we will want to keep persistent.
	response.session.set( 'username', request.session.get( 'username', 'Guest' ), { secure: true } );
	response.session.set( 'email', request.session.get( 'email', '' ), { secure: true } );
	response.session.set( 'name', JSON.stringify( JSON.parse( request.session.get( 'name', JSON.stringify( { first: 'Guest' } ) ) ) ), { secure: true } );
	
	var layout = this.config.view_provider;

	// We just need to display fields for a login here
	var klay = { 
			controller: this.config.controller, 
			model: require( '../models/account' ).loginView,
			view: this.config.view, 
			layout: 'shared/main',
			viewbag: {
				title: 'MMOD Framework',
				pagetitle: 'Please log in',
				username: request.session.get( 'username', 'Guest' )
			}
	};
	
	layout.turn( request, response, klay );
};

// HTTP POST /account/login
accountController.prototype.loginPost = function( request, response )
{
	var na = this;
	
	// Here we're going to want to use our database provider, when we do so we'll define a callback to send along with our query
	// to support an implicit asynchronicity.
	var viewModel = require( '../models/account' ).loginView,
	loginModel = require( '../models/account' ).login,
	model = this.model.set( loginModel ),
	layout = this.config.view_provider,
	klay = { 
			controller: this.config.controller, 
			model: viewModel,
			view: this.config.view, 
			layout: 'shared/main',
			viewbag: {
				title: 'MMOD Framework',
				pagetitle: 'You tried to log in.',
				username: request.session.get( 'username' )
			}
	};
	
	// Here we define the callback for our authentication method
	var callback = function( req, res, authenticated, tk )
	{
		if( !authenticated )
		{
			res.session.set( 'name', { first: 'Guest' }, { secure: true } );
			res.session.set( 'username', 'Guest', { secure: true } );
			
			layout.turn( req, res, tk );
		}
		else
		{
			// Using POST variables is quite easy as well:
			if( req.posted.rememberme )
			{	
				res.session.set( 'persistence', true, { secure: true } );
			}
			
			res.session.set( 'username', authenticated[0].username, { secure: true } );
			res.session.set( 'email', authenticated[0].email, { secure: true } );
			res.session.set( 'name', JSON.stringify( { first: authenticated[0].first, last: authenticated[0].last } ), { secure: true } );
			
			// Let's redirect, but remember to set the session before we do.
			res.redirect( '/' );
		}
	};
	
	// And here we invoke the model's authenticate method. I'm sure you can see the changes you would need to make
	// in this controller method to make things synchronous instead (i.e.  remove code body from callback, have it run after model executes, but have
	// model return its value to a variable within this method's scope like var authenticated = mode.authenticate... callback can be left undefined.)
	model.authenticate( request, response, callback, klay );
};

// HTTP /account/manage
accountController.prototype.manage = function( request, response )
{
	// Undoubtedly there will be session variables we will want to keep persistent.
	response.session.set( 'username', request.session.get( 'username', 'Guest' ), { secure: true } );
	response.session.set( 'email', request.session.get( 'email', '' ), { secure: true } );
	response.session.set( 'name', JSON.stringify( JSON.parse( request.session.get( 'name', JSON.stringify( { first: 'Guest' } ) ) ) ), { secure: true } );
	
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
				username: request.session.get( 'username', 'Guest' ),
				useremail: 'rik@mmogp.com',
				usertypes: { 'a': 'Guest', 'b': 'Registered', 'c': 'Moderator', 'd': 'Administrator' }
			}
	};
	
	layout.turn( request, response, klay );
};

//HTTP POST /account/manage
accountController.prototype.managePost = function( request, response )
{
	// Undoubtedly there will be session variables we will want to keep persistent.
	response.session.set( 'username', request.session.get( 'username', 'Guest' ), { secure: true } );
	response.session.set( 'email', request.session.get( 'email', '' ), { secure: true } );
	response.session.set( 'name', JSON.stringify( JSON.parse( request.session.get( 'name', JSON.stringify( { first: 'Guest' } ) ) ) ), { secure: true } );
	
	var layout = this.config.view_provider;
	
	// We just need to display fields for a login here
	var klay = { 
			controller: this.config.controller, 
			view: this.config.view, 
			layout: 'shared/main',
			title: 'MMOD Framework',
			pagetitle: 'Please manage yourself',
			username: request.session.get( 'username', 'Guest' )
	};
	
	layout.turn( request, response, klay );
};