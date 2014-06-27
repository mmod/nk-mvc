/**
 * package: MMod-Node
 * sub-package: Models
 * version:  0.0.1
 * author:  Richard B. Winters <a href="mailto:rik@massivelymodified.com">rik At MassivelyModified</a>
 * copyright: 2013-2014 Massively Modified, Inc.
 * license: Apache, Version 2.0 <http://www.apache.org/licenses/LICENSE-2.0>
 */


/**
 * Defines the context model
 *
 * @since 0.0.1
 */
var accountModel = 
{
	loginView: {
		authenticate: function( request, response, callback )
		{
			var user = request.posted.username,
			pass = request.posted.password;
			
			// Prep the database object
			var db = this.dbo();
			
			// Run our query
			var authenticated = db
			.select( 'users' )
			.where( { username: [ '=', 'text', user ], password: [ '=', 'text', pass ] } )
			.execute();
			
			// And invoke the callback, passing the result of our query
			if( this.type( callback ) === 'function' )
			{	// Asynchronous
				callback( request, response, authenticated );
			}
			else
			{	// Synchronous
				return authenticated;
			}
		},
		schema: {
			/* 
			 * Account Login View Model
			 */
			// company: [ true, 'text', 'Record Id' ],	// We can extend the user facility as we see fit ofc.
			username: [ true, 'text', 'Username' ],
			password: [ true, 'text', 'Password' ],
			rememberme: [ true, 'int', 'Remember me' ]
		}
	}
};

//Export
module.exports = accountModel;