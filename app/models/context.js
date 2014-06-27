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
var context = 
{
	company: {
		add: function()
		{
			// Inserts record(s)
		}, 
		get: function()
		{
			// Selects record(s)
		},
		update: function()
		{
			// Updates record(s)
		},
		remove: function()
		{
			// Deletes record(s)
		},
		schema: {
			/* 
			 * Within Schema, each member is a column of the table - except for the member which defines the table - spelled exactly as it exists within the respective table.
			 * The value of each member, is an array containing the following attributes by index:
			 *
			 * 0:  Key or Boolean value, indicating whether the value is required, or if it is a key.  The first key in the array is the primary.
			 * 1:  Type specifier ( int, varchar, datetime, time, date, text )
			 * 2:  Display value of the column for html generation
			 */
			id: [ 'key', 'int', 'Record Id' ],
			type: [ true, 'int', 'Type' ],
			ts: [ true, 'datetime', 'Created' ],
			owner: [ true, 'int', 'Created by' ],
			luts: [ true, 'datetime', 'Last Updated' ],
			luby: [ true, 'int', 'Last Updated by' ],
			name: [ true, 'text', 'Company Name' ],
			description: [ false, 'text', 'Company Description' ]
		}
	},
	user: {
		add: function()
		{
			// Inserts record(s)
		}, 
		get: function()
		{
			// Selects record(s)	
		},
		update: function()
		{
			// Updates record(s)	
		},
		remove: function()
		{
			// Deletes record(s)	
		},
		schema: {
			/* 
			 * Within Schema, each member is a column of the table, spelled exactly as it exists within the respective table.
			 * The value of each member, is an array containing the following attributes by index:
			 *
			 * 0:  Key or Boolean value, indicating whether the value is required, or if it is a key.  The first key in the array is the primary.
			 * 1:  Type specifier ( int, varchar, datetime, time, date, text )
			 * 2:  Display value of the column for html generation
			 */
			id: [ 'key', 'int', 'Record Id' ],
			type: [ true, 'int', 'Type' ],
			acl: [ true, 'int', 'Access Level' ],
			ts: [ true, 'datetime', 'Created' ],
			company: [ true, 'int', 'Company Id' ],
			luts: [ true, 'datetime', 'Last Updated' ],
			luby: [ true, 'int', 'Last Update by' ],
			username: [ true, 'varchar', 'Username' ],
			password: [ true, 'text', 'Password' ],
			first: [ true, 'varchar', 'First name' ],
			middle: [ true, 'varchar', 'Middle Name/Initial' ],
			last: [ true, 'varchar', 'Last name' ],
			add1: [ false, 'text', 'Address Line 1' ],
			add2: [ false, 'text', 'Address Line 2' ],
			city: [ false, 'varchar', 'City' ],
			state: [ false, 'varchar', 'State' ],
			zip: [ false, 'varchar', 'Zip/Postal Code' ],
			email: [ true, 'text', 'Email' ],
			phone: [ false, 'varchar', 'Phone' ]
		}
	}
};

//Export
module.exports = context;