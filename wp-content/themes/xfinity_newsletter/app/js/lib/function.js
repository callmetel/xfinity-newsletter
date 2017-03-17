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
	    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	// Create isMobile Function

		var isMobile = {
            detectMobile: function() {
                return navigator.userAgent.match(/Mobi/i);
            }
        };

        if(isMobile.detectMobile()){
        	$('#remote-on').attr('src','http://xfinity-newsletter/wp-content/themes/xfinity_newsletter/app/images/mobile-new-remote-on.png');
        	$('.mobile-header').before('<div class="touch"></div>');
        	var bodyTouched = 0;
        	$('.touch').bind('touchend', function(){
    			TweenLite.to('body', .2, {scrollTo:2});
    			console.log('touched');
    			setTimeout(function(){
    				$('.touch').remove();
    			},250)
        	});
        	$('.nav-link:eq(0)').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', .5, {scrollTo:curScroll + article1Title - 40});
				TweenLite.to('body', .25, {scrollTo:curScroll + article1Title - 40, delay:.25});	
				
				setTimeout(function(){
					$('nav').removeClass('is-active');
				}, 700);
			});
			$('.nav-link:eq(1)').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', .5, {scrollTo:curScroll + article2Title - 40});
				TweenLite.to('body', .25, {scrollTo:curScroll + article2Title - 40, delay:.25});
				setTimeout(function(){
					$('nav').removeClass('is-active');
				}, 700);
			});
			$('.nav-link:eq(2)').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', .5, {scrollTo:curScroll + article3Title - 40});
				TweenLite.to('body', .25, {scrollTo:curScroll + article3Title - 40, delay:.25});
				setTimeout(function(){
					$('nav').removeClass('is-active');
				}, 700);
			});
			$('.nav-link:eq(3)').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', .25, {scrollTo:curScroll + article4Title - 40});
				TweenLite.to('body', .25, {scrollTo:curScroll + article4Title - 40, delay:.25});
				setTimeout(function(){
					$('nav').removeClass('is-active');
				}, 700);
			});

			$(window).scrollTop(0);

        } else{
        	TweenLite.to('body', .25, {scrollTo:2, delay:.25});
        	$('#remote-on').attr('src','http://xfinity-newsletter/wp-content/themes/xfinity_newsletter/app/images/new-remote-on.png');
        	$('.nav-link:eq(0)').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', .5, {scrollTo:curScroll + article1Title - 20});
				
				setTimeout(function(){
					$('nav').removeClass('is-active');
				}, 700);
			});
			$('.nav-link:eq(1)').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', .5, {scrollTo:curScroll + article2Title - 20});
				setTimeout(function(){
					$('nav').removeClass('is-active');
				}, 700);
			});
			$('.nav-link:eq(2)').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', .5, {scrollTo:curScroll + article3Title - 20});
				setTimeout(function(){
					$('nav').removeClass('is-active');
				}, 700);
			});
			$('.nav-link:eq(3)').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', .25, {scrollTo:curScroll + article4Title - 20});
				setTimeout(function(){
					$('nav').removeClass('is-active');
				}, 700);
			});

			$('.back-btn').on('click', function(e){
				e.preventDefault();
				TweenLite.to('body', 1, {scrollTo:0});
				TweenLite.to('body', 1, {scrollTo:0, delay:1});
			});

        }

        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
		    $('.firefox-clip').addClass('is-active');
		    $('body').addClass('firefox-in-use');
		} else{
			$('.firefox-clip').removeClass('is-active');
		    $('body').removeClass('firefox-in-use');
		};

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

		var introHeight = $('#intro').height();
		var headerHeight = $('header').height();
		var introPinDuration = Math.round(introHeight/2);
		var remoteDuration = Math.round($('#menu').height()/2);
		var $window = $(window);

		TweenLite.to($window, .2, {scrollTo:1});

		var curScroll, article1, article2, article3, article4, article1Title, article2Title, article3Title, article4Title;

		$(window).scroll(function(e){
			curScroll = $(this).scrollTop();
			article1 = parseInt($('#the-voice-of-research').offset().top) - curScroll;
			article2 = parseInt($('#the-talk-at-ces').offset().top) - curScroll;
			article3 = parseInt($('#our-digital-first-language').offset().top) - curScroll;
			article4 = parseInt($('#the-word-on-voice').offset().top) - curScroll;
			article1Title = parseInt($('#the-voice-of-research-title').offset().top) - curScroll;
			article2Title = parseInt($('#the-talk-at-ces-title').offset().top) - curScroll;
			article3Title = parseInt($('#our-first-digital-language-title').offset().top) - curScroll;
			article4Title = parseInt($('#the-word-on-voice-title').offset().top) - curScroll;
		});

		$('#article1-heading .read-article-btn').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 1, {scrollTo:curScroll + article1 - 20});
		});
		$('#article2-heading .read-article-btn').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 1, {scrollTo:curScroll + article2 - 20});
		});
		$('#article3-heading .read-article-btn').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 1, {scrollTo:curScroll + article3 - 20});
		});
		$('#article4-heading .read-article-btn').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 1, {scrollTo:curScroll + article4 - 20});
		});

	// Hide Pages from Aria
		
		function addAriaHiddenPages(){

		}

	// Tab Index Functions
	
		// $("body").on("keydown", function(event) {
		// 	$('*').removeClass('no-focus');
	 //    });
    var scrollTime = 1.2;
    var scrollDistance = 200;

			
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

			var tween2A = TweenMax.set('.extra-burger', {className:'+=active'});

			var scene2A = new ScrollMagic.Scene({
							duration: 0,
							offset: introPinDuration + 20 /* offset the trigger 150px below #scene's top */
						})
						.setTween(tween2A);

			// var tween2B = TweenMax.fromTo('#old-remote', 1, {y:'10%'}, {y:'-100%', alpha:0});

			// var scene2B = new ScrollMagic.Scene({
			// 				duration: remoteDuration,
			// 				offset: elementOffset /* offset the trigger 150px below #scene's top */
			// 			})
			// 			.setTween(tween2B);

			// var tween2C = TweenMax.fromTo('#new-remote', 1, {y:'0', alpha:0}, {y:'-20%', alpha:1});

			// var scene2C = new ScrollMagic.Scene({
			// 				duration: remoteDuration/2,
			// 				offset: elementOffset + 100 /* offset the trigger 150px below #scene's top */
			// 			})
			// 			.setTween(tween2C);

			// var tween2D = TweenMax.fromTo('#remote-on', 1, {alpha:0}, {alpha:1});

			// var scene2D = new ScrollMagic.Scene({
			// 				duration: 50,
			// 				offset: elementOffset + remoteDuration/1.5 /* offset the trigger 150px below #scene's top */
			// 			})
			// 			.setTween(tween2D);

			scrollMagicController.addScene([
			  scene1A,
			  scene1B,
			  scene1C,
			  scene2A
			  // scene2B,
			  // scene2C,
			  // scene2D
			]);
			

	
		$('#menu ul a:eq(0)').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:curScroll + article1Title - 20});
		});
		$('#menu ul a:eq(1)').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:curScroll + article2Title - 20});
		});
		$('#menu ul a:eq(2)').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:curScroll + article3Title - 20});
		});
		$('#menu ul a:eq(3)').on('click', function(e){
			e.preventDefault();
			TweenLite.to($window, 2, {scrollTo:curScroll + article4Title - 20});
		});

	// Mobile Nav 
		
		$('#burger, #burger > img, .extra-burger.active, .extra-burger.active > img').on('click', function(){
			$('nav').addClass('is-active');
		});

		$('#close').on('click', function(){
			$('nav').removeClass('is-active');
		});
    

});



