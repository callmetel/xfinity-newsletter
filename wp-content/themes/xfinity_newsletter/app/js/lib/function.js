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

        if(isMobile.detectMobile()){
        	$('#old-remote').attr('src','http://xfinity-newsletter/wp-content/themes/xfinity_newsletter/app/images/mobile-old-remote.png');
        	$('#remote-off').attr('src','http://xfinity-newsletter/wp-content/themes/xfinity_newsletter/app/images/mobile-new-remote.png');
        	$('#remote-on').attr('src','http://xfinity-newsletter/wp-content/themes/xfinity_newsletter/app/images/mobile-new-remote-on.png');
        } else{
        	$('#old-remote').attr('src','http://xfinity-newsletter/wp-content/themes/xfinity_newsletter/app/images/old-remote.png');
        	$('#remote-off').attr('src','http://xfinity-newsletter/wp-content/themes/xfinity_newsletter/app/images/new-remote.png');
        	$('#remote-on').attr('src','http://xfinity-newsletter/wp-content/themes/xfinity_newsletter/app/images/new-remote-on.png');
        }

        function printPDF()
		{
		  var pdfFrame = window.frames["pdf"];
		  pdfFrame.focus();
		  pdfFrame.print();
		}

		$('.print-pdf').on('click', function(e){
			e.preventDefault();
			console.log('clicked');
			printPDF();
		});

		// $('nav').midnight();

	
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
	 //    
	var elementOffset = Math.round($('#old-remote').offset().top *1.25);

	var $window = $(window);
    var scrollTime = 1.2;
    var scrollDistance = 200;

    TweenMax.set('#remote-on', {alpha:0});

	//Page Function after the down button on a slide is pressed

		$(window).resize(function (e) {
			if(!isMobile.detectMobile()){
				setTimeout(function(){
					location.reload();	
				}, 2000);
				
			};
		});

		var introHeight = $('#intro').height();
		var headerHeight = $('header').height();
		var introPinDuration = Math.round(introHeight/4);
		var remoteDuration = Math.round($('#menu').height()/2);

		var article1Location = Math.round($('#article1-heading').offset().top *1.25);
		var article2Location = Math.round($('#article2-heading').offset().top *1.125);
		var article3Location = Math.round($('#article3-heading').offset().top *1.09);
		var article4Location = Math.round($('#article4-heading').offset().top *1.07);

			
			
			//Begin ScrollMagic animation
			
			// Initialize ScrollMagic Controller
			var scrollMagicController = new ScrollMagic.Controller();

			var scene1A = new ScrollMagic.Scene({
							duration: introPinDuration,
							offset: 0 /* offset the trigger 150px below #scene's top */
						})
						.setPin("#intro-container");

			var tween1B = TweenMax.set('.xd-logo', {className:'xd-logo absolute-center'});

			var scene1B = new ScrollMagic.Scene({
							duration: 0,
							offset: 5 /* offset the trigger 150px below #scene's top */
						})
						.setTween(tween1B);

			var tween1C = TweenMax.set('#intro .article', {className:'article absolute-center fade-up-in-2', delay:.5});

			var scene1C = new ScrollMagic.Scene({
							duration: 0,
							offset: 5 /* offset the trigger 150px below #scene's top */
						})
						.setTween(tween1C);

			var scene2A = new ScrollMagic.Scene({
							duration: remoteDuration,
							offset: elementOffset /* offset the trigger 150px below #scene's top */
						})
						.setPin("#menu");

			var tween2B = TweenMax.fromTo('#old-remote', 1, {y:'10%'}, {y:'-100%', alpha:0});

			var scene2B = new ScrollMagic.Scene({
							duration: remoteDuration,
							offset: elementOffset /* offset the trigger 150px below #scene's top */
						})
						.setTween(tween2B);

			var tween2C = TweenMax.fromTo('#new-remote', 1, {y:'0', alpha:0}, {y:'-20%', alpha:1});

			var scene2C = new ScrollMagic.Scene({
							duration: remoteDuration/2,
							offset: elementOffset + 100 /* offset the trigger 150px below #scene's top */
						})
						.setTween(tween2C);

			var tween2D = TweenMax.fromTo('#remote-on', 1, {alpha:0}, {alpha:1});

			var scene2D = new ScrollMagic.Scene({
							duration: 50,
							offset: elementOffset + remoteDuration/1.5 /* offset the trigger 150px below #scene's top */
						})
						.setTween(tween2D);

			scrollMagicController.addScene([
			  scene1A,
			  scene1B,
			  scene1C,
			  scene2A,
			  scene2B,
			  scene2C,
			  scene2D
			]);
			

	// Nav Links

		$('.nav-link:eq(0), #menu ul a:eq(0)').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:article1Location + remoteDuration});
		});
		$('.nav-link:eq(1), #menu ul a:eq(1)').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:article2Location + remoteDuration});
		});
		$('.nav-link:eq(2), #menu ul a:eq(2)').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:article3Location + remoteDuration});
		});
		$('.nav-link:eq(3), #menu ul a:eq(3)').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:article4Location + remoteDuration});
		});
		$('.back-btn').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:0});
		});

	// Mobile Nav 
		
		$('#burger').on('click', function(){
			$('nav').addClass('is-active');
		});

		$('#close').on('click', function(){
			$('nav').removeClass('is-active');
		});

		$('.mobile-nav .nav-link').on('click', function(){
			$('nav').removeClass('is-active');
		});

    $('.show-more-btn').on('click',function(){
    	$(this).addClass('is-inactive');
    	$(this).siblings('.show-less-btn').removeClass('is-inactive');
    	$(this).siblings('.reveal').removeClass('reveal animate-reveal-back').addClass('animate-reveal');
    });

    $('.show-less-btn').on('click',function(){
    	var animRev = $(this).siblings('.animate-reveal');
    	var revHeight = $(this).siblings('.animate-reveal').height();

    	$(this).addClass('is-inactive');
    	$(this).siblings('.show-more-btn').removeClass('is-inactive');
    	animRev.addClass('animate-reveal-back').removeClass('animate-reveal');

    	// var article = $(this).closest('.article-gradient-wrap').offset().top;


	    	$('html,body').animate({
	        scrollTop: $(window).scrollTop() - revHeight},
	        'slow');

    	setTimeout(function(){
    		animRev.addClass('reveal');
    	},1200);
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

    // Change Nav link Color on Scroll
    

});



