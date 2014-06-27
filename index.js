/**
 * index.js
 * 
 * package: nk-mvc
 * version:  $id$
 * author:  Richard B. Winters <a href="mailto:rik@massivelymodified.com">rik At MassivelyModified</a>
 * copyright: 2011-2014 Massively Modified, Inc.
 */


// Deps
var nk = require( 'nk' ),
config = require( './config' ),
app = new nk( config );


// Start our App
app.init();