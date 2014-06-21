/**
 * config.js
 * 
 * package: MMod-Node
 * version:  0.0.1
 */

var path = require('path'),
    config;

config = 
{
    // Development configuration
    development: {
        // App URL
        url: 'http://dev.mmogp.com',
        /*
        mail: {
	        fromaddress: 'noreply@mmogp.com',
	        transport: 'SMTP',
	        options: {
	             service: 'Gmail',
	             auth: {
	                  user: 'rik@mmogp.com',
	                  pass: ''
	                   }
	                 }
	          },
	    */
        app: {
        	root: 'app',
        	controller_path: __dirname + '/app/controllers',
    		model_path: __dirname + '/app/models',
    		view_path: __dirname + '/app/views',
    		asset_path: __dirname + '/assets'
        },
        database: {
            client: 'mysql',
            host: 'localhost',
            port: '3306',
            database: 'mmod',
            username: 'root',
            password: '^Rkitek720$',
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '7724'
        },
        paths: {
            contentPath: path.join( __dirname, '/media/' )
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://dev.mmogp.com',
        forceAdminSSL: true,
        mail: {
            fromaddress: 'noreply@mmogp.com',
            transport: 'SMTP',
            options: {
                 service: 'Gmail',
                 auth: {
                      user: 'test@gmail.com',
                      pass: 'password'
                       }
                     }
              },
        app: {
        	root: 'app',
        	controller_path: __dirname + '/app/controllers',
    		model_path: __dirname + '/app/models',
    		view_path: __dirname + '/app/views',
    		asset_path: __dirname + '/assets'
        },
        database: {
            client: 'mysql',
            host: 'localhost',
            port: '3306',
            database: 'mmod',
            username: 'root',
            password: '^Rkitek720$',
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '7724'
        }
    },
};

// Use module.exports so that we have the direct context of the exported object, regardless of type.
module.exports = config;
