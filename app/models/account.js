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