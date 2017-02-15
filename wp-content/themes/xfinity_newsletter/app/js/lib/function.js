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

	// Bind Page Function
	
		function bindPage(){
			scrollstart=1;
			checkClicked = false;

			setTimeout(function(){
				var status=0,
					touchReg = false,
					keypress = false;

				if( isMobile.detectMobile() ){
					var ts;
			        $('body').bind('touchstart', function (event){
			           ts = event.originalEvent.touches[0].clientY;
			        });


			        $('body').bind('touchmove', function (event){

			           var te = event.originalEvent.changedTouches[0].clientY;

			           if (touchReg == false && status === 0) {

			                $(this).on('touchend touchcancel', function(){
			                    touchReg = false;
			                });

			                if (ts > te+175){
			                	

			                    touchReg = true;
			                    status = 1;
			                    counterSlide = 1;


			                    setTimeout(function(){
			                        status=0;
			                        scrollstart=0;
			                    },850);

			                } else if (ts < te-175) {

			                  touchReg = true;
			                  status = 1;

			                  setTimeout(function(){
			                    status=0;
			                    scrollstart=0;
			                  },850);

			               }
			            
			            } else if (status > 0){
			                //do nothing
			                console.log('waiting');
			            }
			        });
	            } else{
	            	$('body').bind('mousewheel', function(e) {
						console.log('working');

	                    if (status === 0) {
	                        
	                        if(currentY < 0) {
	                            console.log(e.deltaY);
	                            status=1;
	                            
	                            setTimeout(function(){
	                                status=0;
	                            },2000);

	                        } else if(e.deltaY > 0){

	                            status = 1;
	                           
	                            setTimeout(function(){

	                                status=0;
	                            },2000);

	                        }
	                        return false;

	                    } else if (status > 0){
	                        //do nothing
	                        // console.log('waiting');
	                    }
	            	});
	            }
			}, 500);
		}

	// Hide Pages from Aria
		
		function addAriaHiddenPages(){

		}

	// Tab Index Functions
	
		// $("body").on("keydown", function(event) {
		// 	$('*').removeClass('no-focus');
	 //    });


    $(this).scrollTop(0);


    $(window).scroll(function () {
    	if($(this).scrollTop() < 5){
        	$('.xd-logo').addClass('fade-up-in');
        	$('#intro .article').removeClass('fade-up-in');
        }
        else if($(this).scrollTop() > 5 && $(this).scrollTop() < $('#intro').height() + $('header').height() ){
        	$('.xd-logo').removeClass('fade-up-in');
        	$('#intro .article').addClass('fade-up-in');
        }
    });

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



