/**
 * config.js
 * 
 * package: nk-mvc
 * version:  0.0.1-alpha
 */

var path = require('path'),
    config;

config = 
{
    // Development configuration
    development: 
    {
        url: 'http://localhost:7724',
        forceAdminSSL: true,
        app: 
        {
        	root: 'app',
        	controller_path: __dirname + '/app/controllers',
    		model_path: __dirname + '/app/models',
    		view_path: __dirname + '/app/views',
    		asset_path: __dirname + '/assets'
        },
        database: 
        {
            client: 'mysql',
            host: 'localhost',
            port: '3306',
            db: 'nkdev',
            user: 'devadm',
            password: '^DevPass777$',
            debug: true
        },
        server: 
        {
            host: '0.0.0.0',
            port: '7724'
        }
    },
    
    // Production configuration
    production: 
    {
        url: 'http://localhost:7724',
        forceAdminSSL: true,
        mail: 
        {
			fromaddress: 'noreply@mmogp.com',
			transport: 'SMTP',
			options: 
			{
				service: 'Gmail',
				auth: 
				{
					user: 'test@gmail.com',
					pass: 'password'
				}
	        }
        },
        app: 
        {
        	root: 'app',
        	controller_path: __dirname + '/app/controllers',
        	model_path: __dirname + '/app/models',
    		view_path: __dirname + '/app/views',
    		asset_path: __dirname + '/assets'
        },
        database: 
        {
            client: 'mysql',
            host: 'localhost',
            port: '3306',
            db: 'nkpro',
            user: 'proadm',
            password: '^ProPass777$',	// Passwords should be strong like so, but this is obviously a bad one to use...
            debug: false
        },
        server: 
        {
            host: '0.0.0.0',
            port: '7724'
        }
    },
};

// Use module.exports so that we have the direct context of the exported object, regardless of type.
module.exports = exports = config;
