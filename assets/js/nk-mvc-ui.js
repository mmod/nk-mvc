/**
 * package: nk-mvc
 * sub-package: assets
 * version: 0.0.5-alpha
 * author:  Richard B. Winters <a href="mailto:rik@massivelymodified.com">rik At MMOGP</a>
 * copyright: 2011-2014 Massively Modified, Inc.
 * license: Apache, Version 2.0 <http://www.apache.org/licenses/LICENSE-2.0>
 */


/**
 * This here is a script which plays with the background-size property of a jumbotron
 * when a user moves a mouse within the jumbotron area.  It's just a neat little effect.
 * 
 * In order to make it work, we need some 'static' variables...
 */
var oX = false, oY = false, nX = false, nY = false, preX = false, preY = false;
$( '.jumbotron' ).mousemove
(	// When a mouse move is detected (it means a mouse has entered the elements area)
	function(e)
	{
	    var posX, posY, hm, vm;
	    
	    // Check to see if there is a pre-existing x and y coordinate, meaning the mouse has
	    // moved since the event triggered, without leaving the area (or triggering a mouseout event)
		if( ( preX === false ) || ( preY === false ) )
		{
			// Get our original background-size property value
			var originals = $( this ).css( "background-position" ).split(" ");
			originals[0] = parseInt( originals[0].replace( "%", "" ).replace( "px", "" ) );
			originals[1] = parseInt( originals[1].replace( "%", "" ).replace( "px", "" ) );
			oX = originals[0];
			oY = originals[1];
			
			// Set the 'pre-existing' mouse coordinates to the currently captured coordinates
			preX = e.pageX;
			preY = e.pageY;
			
			// And set the new mouse coordinates to the currently captured coordinates.  This will
			// make it so that the image doesn't move before the mouse has moved beyond an edge of
			// the jumbotron area.
			posX = e.pageX;
			posY = e.pageY;
		}
		else
		{
			// If there was a pre-existing coordinate set, then we only need to store the new mouse
			// coordinates for now
			posX = e.pageX;
			posY = e.pageY;
		}
		//console.log( preX + ', ' + preY + ' - ' + posX + ', ' + posY );
		
		// Calculate our horizontal and vertical movement (0 if first trigger since last mouseout)
		// subtract the new coordinates from the old, using the difference to determine if we are
		// going to move in a positive or negative direction.
		if( ( preX - posX ) > 0 )
		{
			hm = 0.25;
		}
		else
		{
			hm = -0.25;
		}
		
		if( ( preY - posY ) > 0 )
		{
			vm = 0.25;
		}
		else
		{
			vm = -0.25;
		}
		
		// Now we calculate the new coordinates by adding the horizontal and vertical movement values
		// to the new horizontal and vertical position coordinates.  These values are 'static'.
		nX = nX + hm;
		nY = nY + vm;
		
		// Here we validate, we do not want to let the background move more than 5 pixels in any direction
		// and we want the image to be responsive according to the direction the mouse is moving in.
		if( nX > ( oX + 5 ) )
		{
			nX = oX + 5;
		}
		else if( nX < ( oX - 5 ) )
		{
			nX = oX - 5;
		}

		
		if( nY > ( oY + 5 ) )
		{
			nY = oY + 5;
		}
		else if( nY < ( oY - 5 ) )
		{
			nY = oY - 5;
		}
		
	    $( this ).css( 'background-position', nX + '% ' + nY + 'px' );
	    
	    // Don't forget to set the old values again.
	    preX = posX;
	    preY = posY;
	}
)

$( '.jumbotron' ).mouseout
(
	function( e )
	{
		$( this ).css( 'background-position', oX + ' ' + oY );
	}
);

