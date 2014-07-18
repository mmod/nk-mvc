/**
 * package: nk-mvc
 * sub-package: models/account
 * author:  Richard B. Winters <a href="mailto:rik@mmogp.com">rik At Massively Modified</a>
 * copyright: 2013-2014 Massively Modified, Inc.
 * license: Apache, Version 2.0 <http://www.apache.org/licenses/LICENSE-2.0>
 */


// Deps
var nk = require( 'nk' ),
	nk = new nk();	// When we do not pass an argument to the constructor, we get only the core facilities ( .type, .extend, .each, .hash, etc )


/**
 * Defines the context model
 *
 * @since 0.0.1
 */
var accountModel = 
{
	login: {
		authenticate: function( request, response, callback, klay )
		{
			var user = request.posted.username,
			pass = request.posted.password;
			pass = nk.hash( { data: pass } );
			
			// Prep the database object
			var db = this.dbo();
			
			// Run our query.  We will not compare passwords quite yet, as we need the timestamp from the record as part of our salt. This is ok since usernames are unique.
			var authenticated = db
			.Select( 'users' )
			.Where( { username: [ '=', 'text', user ], password: [ '=', 'text', pass ] } )
			.Execute();
			
			if( !authenticated[0].username )
			{
				authenticated = false;
			}
			
			// And invoke the callback, passing the result of our query
			if( nk.type( callback ) === 'function' )
			{	// Asynchronous
				callback( request, response, authenticated, klay );
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
			type: [ true, 'int', 'Account Type'  ],
			acl: [ true, 'int', 'Access Level'  ],
			username: [ true, 'text', 'Username' ],
			password: [ true, 'text', 'Password' ],
			first: [ true, 'text', 'First Name'  ],
			last: [ true, 'text', 'Last Name'  ],
			email: [ true, 'text', 'Email'  ]
		}
	},
	loginView: {
		schema: {
			/* 
			 * Account Login View Model
			 */
			// company: [ true, 'text', 'Record Id' ],	// We can extend the user facility as we see fit ofc.
			username: [ true, 'text', 'Username' ],
			password: [ true, 'text', 'Password' ],
			rememberme: [ true, 'int', 'Remember me' ]
		}
	},
	manageView: {
		getUser: function()
		{
			// This is a placeholder
			return { username: 'Guest' };
		},
		schema: {
			/*
			 * Account/Manage View model
			 */
			company: [ false, 'int', 'Company' ],
			username: [ false, 'text', 'Username' ],
			type: [ true, 'text', 'Type' ],
			email: [ true, 'text', 'Email' ],
			first: [ true, 'text', 'First Name' ],
			last: [ true, 'text', 'Last Name' ],
			password: [ true, 'text', 'Password' ],
			retypepassword: [ true, 'text', 'Re-Type Password' ]
		}
	}
};

//Export
module.exports = accountModel;