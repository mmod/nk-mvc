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
            database: 'dev',
            username: 'devadm',
            password: 'YourDevelopmentPassword',
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '7724'
        },
        paths: {
            contentPath: path.join( __dirname, '/media/' )
        }
    },

    // Production configuration
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
            database: 'pro',
            username: 'proadm',
            password: 'YourProductionPassword',
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '7724'
        }
    },
};

// Use module.exports so that we have the direct context of the exported object, regardless of type.
module.exports = exports = config;
