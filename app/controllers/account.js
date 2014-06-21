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
			title: 'MMOD Framework',
			pagetitle: 'Nothing to see here...'
	};
	
	layout.construct( request, response, klay );
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
			title: 'MMOD Framework',
			pagetitle: 'Please log in'
	};
	
	layout.construct( request, response, klay );
};

// HTTP POST /account/login
accountController.prototype.loginPost = function( request, response )
{
	var layout = this.config.view_provider;
	
	// The user has submitted the login form, let's attempt to log them in.
	for( var part in request.posted )
	{
		console.log( 'Post Var: `' + part + '`, Value: `' + request.posted[part] + '`.' );
	}
	
	// We need to invoke the db provider and have it fetch us some datas
	var db = this.config.db_provider;
	var auth = db.user.get( request.posted.username, request.posted.password );
	
	if( auth !== false )
	{
		request.session.data.isAuthenticated = true;
		if( request.posted.rememberme !== undefined || null || false )
		{	
			request.session.data.persistence = true;
		}
		request.session.data.username = request.posted.username;
		request.session.data.password = request.posted.password;
		request.session.data.email = auth.email;
		request.session.data.name.first = auth.first;
		request.session.data.name.last = auth.last;
	}
	else
	{
		request.session.data.isAuthenticated = false;
		request.session.data.name.first = 'Guest';
	}
	
	// We just need to display fields for a login here
	var klay = { 
			controller: this.config.controller, 
			model: require( '../models/account' ).loginView,
			view: this.config.view, 
			layout: 'shared/main',
			title: 'MMOD Framework',
			pagetitle: 'You tried to log in, but... failed.'
	};
	
	layout.construct( request, response, klay );
};

// HTTP /account/manage
accountController.prototype.manage = function( request, response )
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
	
	layout.construct( request, response, klay );
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
	
	layout.construct( request, response, klay );
};