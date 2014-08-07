# nk-mvc ( v0.1.2 )

The 'Hello World!' example of - and project template for - a nodakwaeri MVC Application.

<b>Notice:</b>
Please keep in mind that while the version is '0'.<anything> ( the key part being '0' in front ), this package should be considered - and used as if it were - a pre-release.  Things should work, but you may find issues.  I would encourage you to please report them [here](https://github.com/mmod/nk-mvc/issues).


## Downloading

To get started, open terminal/shell/command prompt and browse to the root of where you'll store your application.  Clone the nk-mvc repository:

```
path_to_application_root/> git clone git@github.com/mmod/nk-mvc.git
```

Alternatively, you could just download a [zip of the source](https://github.com/mmod/nk-mvc/archive/master.zip) and extract it to where you wish to keep the application. 

When finished we need to install the dependencies but before we do that we need to make sure we have some prerequisites in place. 


## Prerequisites

Whether you wish to build or not build any of the components, the [nk-mysql documentation](http://github.com/mmod/nodamysql) will guide you in ensuring you meet any and all requirements.  Once you've gone through the respective documentation, a link is provided which will redirect you back here in order to complete installation.


## The actual installation

Since we already have nk-mvc, all we need to do is install the dependencies for it and we'll be good to go.  Assuming we've ensured we meet all of the prerequisites/requirements...

```
path_to_nk-mvc-application/> npm install .
```

...will do the trick.


## Configuration

### Seed the Database

In the root of your nk-mvc application, you'll find a directory named <i>install</i> containing a file named <i>seed.sql</i>.  If you open the file you will see in 2 places exists the string: <b><ReplaceWithAHashedPassword></b>.  You will need to replace these with - you guessed it - a hashed password.

In order to do this, create a file <i>whatever.js</i> in the root of your application, and add the following code to it (replacing <YourPasswordHere> and <YourSecretHere>) with your actual password and secret, respectively:

```node
var nk = require( 'nk' ),
    nk = new nk(),
    pass = "<YourPasswordHere>",
    secret = "<YourSecretHere>";
    
console.log( nk.hash( { data: pass, salt: key } );
```


Please note, that the secret can be a 10 character or 100 character string; nodakwaeri will use it to generate a 256-bit salt. You will want to remember the string you used for the secret so as you build your user system out you have it to generate the hash again for comparison during login.

Save the file and execute it using node.js:

```node
path_to_nk-mvc_application/>node whatever.js
```  

Alternatively, you could just throw the console.log bit into the index.js file and start your server...either way:

The hash function let's you supply a secret that it then hashes; so that you can supply it either with the same string over and over, or by invoking a function that will return a secret from elsewhere, since - being realistic - the more acceptable and professionally practiced way to build a <i>secure</i> authentication system is to store secrets and/or encrypt passwords on an external device; but we're not going to do that just to play around are we?  

Take the hashed password printed on your console window / terminal as a result of the console.log (wherever it came from), and add it to the .sql file - replacing the existing <ReplaceWithHashedPassword> values where they are.

BTW, I really don't mind if you want to pretend to be me, but you could go ahead and change the other identifying info in the .sql file as well - like the username, name, etc.  And unless you want to have to make modifications to the account controller and model, and don't care to even run the example, I'd suggest you only change database names, database user names, and database passwords; leaving the table names and columns as they are until you're ready to start developing.

Run/Execute the contents of the .sql file either in MySQL Workbench, or via your favorite means (in the future nk-mysql will have additional tools which will provide features similar to Microsoft's Migrations, but until then...)

### Configure the Application

To finish configuring your application, open the config.js file in the root of your nk-mvc application.  In this file, notice the URL and SERVER members of both the development and production configuration schemas; You probably need to update at least one of them, as well as any mail config (though we can't use it yet, its there to remind me to build that in!).  If you're developing locally and not using a host entry (meaning you're typing localhost into your browser), then the URL <i>should</i> be http://localhost:XXXX 'lest you want problems.

The only other changes you may need to make, are in the database sections of the configuration file.  

You're all configured now, moving on.


## Usage

To use your new nk-mvc application:

#### On Windows:

```node
path_to_nk-mvc_application/>set NODE_ENV=development
path_to_nk-mvc_application/>node index.js
```

#### On Linux/Unix:

```node
path_to_nk-mvc_application/>NODE_ENV=development node index.js
```


Some console output should have alerted you that the application is running.  Try visiting http://localhost:7724 if you did not make any changes to the configuration...otherwise I'm guessing you know what you're doing :)


## Developing with nk-mvc

<i>At this time, all examples can be found within the app/ directory of the source.</i>

### The Gist

Like any MVC Framework, it's up to the developers to supply the Controllers, Models, and Views which make up the application.

#### Controllers 

Controllers are where we set/get session variables, they're where we invoke data queries, and they are where we place most application or business logic specific to our application. 

Properties of a controller object are considered the different 'actions' the controller provides to the application; simply adding a new action to an existing controller will yield a new usable URL:  domain/<controller>/<action>.  Adding 'Post' to the end of a controller action name will let the framework know that it should be called when a POST is made upon that URL.

Take a look at the account.js file in the /app/controllers/ directory to see some examples.


<i>Currently there are no examples for API transactions, however -> responding to API requests will take place directly in the controller.  Example coming soon.</i>

#### Models

Models are where we define data queries, and data properties.

Members of a model file's object are considered 'models'; You could essentially have numerous related models within a single model file.  From within a model, we are able to access the database object, and are typically fed a callback to make data processing implicitly asynchronous.

Take a look at the account.js file in the /app/models/ directory to see an example.

#### Views

Views are where we define what the end user is going to see when the response is set (and we are returning a content type of text/html).  This involves preparation of a layout as well as content for the layout.

Each directory under /app/views (aside from shared), denotes a set of views for each controller's various actions.  The _shared directory under /app/views allows developers to create 'layouts' or 'templates' which are available to the entire application.  

Take a look at the various files within the /app/views/ directory to see some examples.

<b>A little note</b>
<i>To change your favicon, just replace the favicon.ico that exists in the assets/ directory.  Icons cache in Windows, so after dropping your new favicon you may notice that in file explorer the old icon is still displaying (yea, until you restart).  Rest assured that once you've deleted your browsers cache, in the browser the proper favicon will show (even before restarting).</i>  


## Development

Feel free to fork the repository and submit pull requests.  As the framework develops we will move on to a CMS/XRM system built upon the MVC framework.


### Created with:

[Eclipse Luna](https://www.eclipse.org/downloads/)

[Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))

[Node.js](http://nodejs.org)
