jQuery( function( $ )
{
	$( window ).load( function() {
		$( '.row-masonry' ).masonry( {
			itemSelector: '.col',
			transitionDuration: 0
		} );
	} );
} );
