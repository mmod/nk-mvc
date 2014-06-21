/**
 * index.js
 * 
 * package: MMod-Node
 * version:  $id$
 * author:  Richard B. Winters <a href="mailto:rik@massivelymodified.com">rik At MassivelyModified</a>
 * copyright: 2013-2014 Richard B. Winters
 */


// Deps
var nk = require( '../nodakwaeri' ),
config = require( './config' ),
app = new nk( config );
//nodaklay = require( 'nodaklay' );


// Entry point to our application
app.init
(
	/*
	 * To use a custom router, controller, renderer, etc, you can configure such here. You can alternatively customize the built in
	 * MVC framework by specifying additional options here:
	{	
	 	routes: <routes_configuration>,							// OR
	 	router: new nk.router()
	 	controller_path: __dirname + '/app/controllers',		// OR
		controller_provider: new nk.controller( { 'controller_path': __dirname + '/app/controllers' } ),
		model_path: __dirname + '/app/models',					// OR
		model_provider: new nk.model( { 'model_path': __dirname + '/app/models' } ),
		view_path: __dirname + '/app/views',					// OR	
		view_provider: new nodaklay.pottr( { 'view_path': __dirname + '/app/views' } ),
		asset_path: __dirname + '/assets'	
	}
	*/
);