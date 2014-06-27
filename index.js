/**
 * index.js
 * 
 * package: nk-mvc
 * version:  $id$
 * author:  Richard B. Winters <a href="mailto:rik@mmogp.com">rik At MMOGP</a>
 * copyright: 2011-2014 Massively Modified, Inc.
 */


// Deps
var nk = require( 'nk' ),
config = require( './config' ),
app = new nk( config );


// Start our App
app.init();