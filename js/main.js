$(function(){

	//  Open Lightbox
	$( '.itens a' ).click(function(){

		var rel = parseInt( $( this ).attr( 'rel' ) );
		showLightbox(rel);

	});

	// Close Lightbox
	$( '.close, .overlay-all' ).click(function(e){
		e.preventDefault();
		$( '.overlay-item, .overlay-all' ).fadeOut(function(){
			$( '.prev, .next' ).fadeIn();
		});
	});

	// Navigation lightbox
	$( '.navigation' ).click(function(e){
		e.preventDefault();
		var $link 	= $(this);
		var rel		= parseInt( $( '.overlay-item:visible' ).attr( 'rel' ) );

		if ( $link.hasClass( 'next' ) ) {

			// Is there a less item to show
			if ( $( '.overlay-item[rel="' + (rel + 1) + '"]' ).length != 0 ) {
				$( '.prev, .next' ).fadeIn();
				$( '.overlay-item:visible' ).fadeOut();
				showLightbox( (rel + 1) );
			}
		}
		else {
			// Is there a less item to show
			if ( $( '.overlay-item[rel="' + (rel - 1) + '"]' ).length != 0 ) {
				$( '.prev, .next' ).fadeIn();
				$( '.overlay-item:visible' ).fadeOut();
				showLightbox( (rel - 1) );
			}
		}
	});
});


// Event for keypres
document.addEventListener("keydown", function(e){

    switch ( e.which ) {
        case 39 :
        	$( '.next:visible' ).click();
        break;
        case 37 :
        	$( '.prev:visible' ).click();
        break;
        case 27:
        	$( '.close' ).click();
        break;
    }

}, false);
