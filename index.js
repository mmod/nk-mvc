/**
 * package: nk-mvc
 * version: 0.1.1
 * author:  Richard B. Winters <a href="mailto:rik@mmogp.com">rik At Massively Modified</a>
 * copyright: 2013-2014 Massively Modified, Inc.
 * license: Apache, Version 2.0 <http://www.apache.org/licenses/LICENSE-2.0>
 */


// Deps
var nk = require( 'nk' ),
config = require( './config' ),
app = new nk( config );

//console.log( app.hash( { data: 'demo' } ) );

// Start our App
app.init();