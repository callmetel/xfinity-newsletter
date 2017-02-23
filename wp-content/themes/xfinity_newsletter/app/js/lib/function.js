$(document).ready(function() {

	// Get IE or Edge browser version
	    var version = detectIE();

	    if (version === false) {
	      $('html').removeClass('IE');
	    } 
	    else if (version >= 12) {
	    	 console.log('You are using IE');
	      $('html').addClass('IE');
	    } 
	    else {
	      console.log('You are using IE');
	      $('html').addClass('IE');
	    };

	    function detectIE() {
	      var ua = window.navigator.userAgent;

	      var msie = ua.indexOf('MSIE ');
	      if (msie > 0) {
	        // IE 10 or older => return version number
	        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	      }

	      var trident = ua.indexOf('Trident/');
	      if (trident > 0) {
	        // IE 11 => return version number
	        var rv = ua.indexOf('rv:');
	        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	      }

	      var edge = ua.indexOf('Edge/');
	      if (edge > 0) {
	        // Edge (IE 12+) => return version number
	        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	      }

	      // other browser
	      return false;
	    };

	// Create isMobile Function

		var isMobile = {
            detectMobile: function() {
                return navigator.userAgent.match(/Mobi/i);
            }
        };
	
	// Remove Focus On Click For Tab Index 
		
		// $('*').mousedown(function(event) {
		// 	$('*').blur();
		// 	$('*').addClass('no-focus');
		// });

		// $('*').bind('keydown', function(event) {
		// 	if(event.keyCode === 9){
		// 		$('*').removeClass('no-focus');
		// 	}
		// });

	// Hide Pages from Aria
		
		function addAriaHiddenPages(){

		}

	// Tab Index Functions
	
		// $("body").on("keydown", function(event) {
		// 	$('*').removeClass('no-focus');
	 //    });

	var $window = $(window);
    var scrollTime = 1.2;
    var scrollDistance = 185;

    $window.on("mousewheel DOMMouseScroll", function(event){
        event.preventDefault(); 
        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);
        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5                          
            });
    });

	//Page Function after the down button on a slide is pressed

		$(window).resize(function (e) {
			
			var introHeight = $('#intro').height();
			var headerHeight = $('header').height();
			var introPinDuration = Math.round(introHeight/2);
			//Begin ScrollMagic animation
			
			// Initialize ScrollMagic Controller
			var scrollMagicController = new ScrollMagic.Controller();

			var scene1A = new ScrollMagic.Scene({
							duration: introPinDuration,
							offset: headerHeight /* offset the trigger 150px below #scene's top */
						})
						.setPin("#intro-container");

			var tween1B = TweenMax.set('.xd-logo', {className:'xd-logo absolute-center'});

			var scene1B = new ScrollMagic.Scene({
							duration: 0,
							offset: 5 /* offset the trigger 150px below #scene's top */
						})
						.setTween(tween1B);

			var tween1C = TweenMax.set('#intro .article', {className:'article absolute-center fade-up-in'});

			var scene1C = new ScrollMagic.Scene({
							duration: 0,
							offset: 5 /* offset the trigger 150px below #scene's top */
						})
						.setTween(tween1C);

			scrollMagicController.addScene([
			  scene1A,
			  scene1B,
			  scene1C
			]);

		}).resize();

			


    $('.show-more-btn').on('click',function(){
    	$(this).addClass('is-inactive');
    	$(this).siblings('.show-less-btn').removeClass('is-inactive');
    	$(this).siblings('.reveal').removeClass('reveal animate-reveal-back').addClass('animate-reveal');
    });

    $('.show-less-btn').on('click',function(){
    	var animRev = $(this).siblings('.animate-reveal');

    	$(this).addClass('is-inactive');
    	$(this).siblings('.show-more-btn').removeClass('is-inactive');
    	animRev.addClass('animate-reveal-back').removeClass('animate-reveal');

    	setTimeout(function(){
    		animRev.addClass('reveal');
    	},850);
    });

    $('#menu li:eq(0)').on('click', function(){
    	$('nav a:eq(0)').trigger('click');
    });
    $('#menu li:eq(1)').on('click', function(){
    	$('nav a:eq(1)').trigger('click');
    });
    $('#menu li:eq(2)').on('click', function(){
    	$('nav a:eq(2)').trigger('click');
    });
    $('#menu li:eq(3)').on('click', function(){
    	$('nav a:eq(3)').trigger('click');
    });

});



