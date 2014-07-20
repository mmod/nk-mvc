/**
 * package: nk-mvc
 * sub-package: controllers/home
 * author:  Richard B. Winters <a href="mailto:rik@mmogp.com">rik At Massively Modified</a>
 * copyright: 2013-2014 Massively Modified, Inc.
 * license: Apache, Version 2.0 <http://www.apache.org/licenses/LICENSE-2.0>
 */


module.exports = exports = homeController;

function homeController()
{
};

homeController.prototype.index = function( request, response )
{
	// Undoubtedly there will be session variables we will want to keep persistent.
	response.session.set( 'username', request.session.get( 'username', 'Guest' ), { secure: true } );
	response.session.set( 'email', request.session.get( 'email', '' ), { secure: true } );
	response.session.set( 'name', JSON.stringify( JSON.parse( request.session.get( 'name', JSON.stringify( { first: 'Guest' } ) ) ) ), { secure: true } );
	
	var layout = this.config.view_provider;
	
	// We just need to display a welcome here for now
	var klay = { 
			controller: this.config.controller, 
			view: this.config.view,
			layout: 'shared/main',
			viewbag: {
				title: 'MMOD Framework',
				pagetitle: 'Hello World!',
				username: request.session.get( 'username', 'Guest' ),
				testvar: 
				[
				 	{ 'a': '<b>A Powerful Combination</b>', 'b': '<p>This project comes prepared with the jQuery JavaScript Library, as well as the Bootstrap CSS - which includes their version of Normalize - and JavaScript Libraries. Their links:</p><p><a href="http://jquery.com/" target="_blank">The jQuery website.</a></p><p><a href="http://getbootstrap.com/" target="_blank">The GetBootstrap website.</a></p>.' },
				 	{ 'a': '<b>MySQL</b>', 'b': '<p>This project harnesses the power of MySQL Community Server through nodamysql (nk-mysql on npm), which uses the MySQL Connector C++ to provide efficient and secure data integration. Browse the following links for specifics:</p><p><a href="http://www.mysql.com/about/legal/licensing/foss-exception/" target="_blank">Oracle\'s Free and Open Source (\"FOSS\") License</a>.</p><p><a href="http://github.com/mmod/nodamysql" target="_blank">The nodamysql GitHub.</a></p>' },
				 	{ 'a': '<b>The SJCL</b>', 'b': '<p>This project makes use of the Stanford Javascript Crypto Library, and provides a great starting place for creating a secure and efficient user system. Here are some links to get you started:</p><p><a href="http://crypto.stanford.edu/sjcl/" target="_blank">The Stanford JavaScript Cryto Library website.<a></p><p><a href="https://jswebcrypto.azurewebsites.net/demo.html#/pbkdf2" target="_blank">Getting started with JavaScript and Web Cryptography.</a></p>', 'c': 'yea' },
				 	{ 'a': '<b>Business Friendly</b>', 'b': 'This project is created with nodakwaeri (nk on npm), which is provided under the terms of the Apache V2.0 License. You are not required to provide the source to your derived work. Find out more:</p><a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">The Apache V2.0 License.</p><a href="http://github.com/mmod/nodakwaeri" target="_blank">The nodakwaeri GitHub.</a><p>.' }
				]
				// Any additional data you wish to send
			}
	};
	
	layout.turn( request, response, klay );
};