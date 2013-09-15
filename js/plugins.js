// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
function showLightbox( rel ){

    // Find its overlay
    if ( $( '.overlay-item[rel="' + rel + '"]' ).length != 0 ) {
        
        // Show overlay
        $( '.overlay-all' ).fadeIn();
        $( '.overlay-item[rel="' + rel + '"]' ).fadeIn();

        
        // Is there a less item to show
        if ( $( '.overlay-item[rel="' + (rel - 1) + '"]' ).length == 0 ) {
            $( '.navigation.prev' ).hide();
        }
        // Is there a more item to show
        if ( $( '.overlay-item[rel="' + (rel + 1) + '"]' ).length == 0 ) {
            $( '.navigation.next' ).hide();
        }
    }
}

function changeLightbox( rel ){
    var $newImage = $( '.overlay-item[rel="' + rel + '"] img' ).attr( 'src' );
    $( '.overlay-item[rel="' + rel + '"] img' ).remove();
    $( '.overlay-item:visible img' ).remove();
    $( '.overlay-item:visible .wrap' ).append('<img src="'+ $newImage +'" />' );
}

// Show images
function showimage( object ){
    $( object ).fadeIn( 'slow' );
}