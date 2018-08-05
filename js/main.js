

$(document).ready(function(){

 //Border animation for Nav items

 $('.navbar-nav li a').addClass('border-animation');


 // Homepage Button Animation

 $('.btn-sub1').hover(

 	function() {

 		$('.fa-angle-right').css({
 			"transform" : "rotate(90deg)",
 			"margin-left" : "5px"
 		});
 	},

 	function(){

 		$('.fa-angle-right').css({"transform" : "rotate(0deg)",
 			"margin-left" : "0px"
 			});
 	}

 	);

 $('.btn-sub2').hover(
 	function(){

 		$('.fa-arrow-right').css({

 			"transform" : "rotate(90deg)",
 			"margin-right" : "5px"
 		});

 },

 function(){

 	$('.fa-arrow-right').css({

 			"transform" : "rotate(0deg)",
 			"margin-right" : "0px"
 		});

 }

 );

 // Content -1 Animation

 $('.content-1 .col-md-4 .circle').hover(
 	function(){
 		$(this).css({
 			"width" : "105px",
 			"height" : "105px",
 			"color" : "#EF233C"
 		});

 },
 	function(){
 		$(this).css({
 			"width" : "100px",
 			"height" : "100px",
 			"color" : "#70FDFF"
 		});

 	}
 );

 // Progress Bar Animation

 const x = 854;
 const y = 672;

 $(window).on("scroll", function(){

 	var scrollh = $(document).height();
 	var scrollt = $(document).scrollTop();

 	if(x < scrollt){

 		$('.pro-1').css('width', '79%');
 		$('.pro-2').css('width', '89%');
 		$('.pro-3').css('width', '85%');

 	}else if( y > scrollt){

 		$('.pro-1, .pro-2, .pro-3').css("width", "0%");

 	}

 	//$('.progress .sp-1').text(scrollh);
 	//$('.progress .sp-2').text(scrollt);


 });

 // Vision

 	$('.content-4 .nav-tabs:nth-child(1)').css({

 		"background-color" : "#ffffff",
 		"border-top" : "3px solid #BB5299"

 	});

 	$('.content-4 .nav-tabs:nth-child(1)').on('focusin', function(){


 		$(this).css({
 			"background-color" : "#ffffff",
 			"border-top" : "3px solid #bb5299"
 		})

 	});

 	$('.content-4 .nav-tabs:nth-child(1)').on('focusout', function(){

 		$(this).css({
 			"background-color" : "#EDF2F4",
 			"border-top" : "0px"
 		})



 	});

 	// second tab

 	$('.content-4 .nav-tabs:nth-child(2)').on('focusin', function(){

 		$('.content-4 .nav-tabs:nth-child(1)').css({

 			"background-color" : "#EDF2F4",
 			"border-top" : "0px"

 		});

 		$(this).css({
 			"background-color" : "#ffffff",
 			"border-top" : "3px solid #bb5299"
 		})

 	});

$('.content-4 .nav-tabs:nth-child(2)').on('focusout', function(){

 		$(this).css({
 			"background-color" : "#EDF2F4",
 			"border-top" : "0px"
 		})



 	});

// Tab 3

$('.content-4 .nav-tabs:nth-child(3)').on('focusin', function(){


 		$(this).css({
 			"background-color" : "#ffffff",
 			"border-top" : "3px solid #bb5299"
 		})

 	});

 	$('.content-4 .nav-tabs:nth-child(3)').on('focusout', function(){

 		$(this).css({
 			"background-color" : "#EDF2F4",
 			"border-top" : "0px"
 		})



 	});

// Tab 4

$('.content-4 .nav-tabs:nth-child(4)').on('focusin', function(){


 		$(this).css({
 			"background-color" : "#ffffff",
 			"border-top" : "3px solid #bb5299"
 		})

 	});

 	$('.content-4 .nav-tabs:nth-child(4)').on('focusout', function(){

 		$(this).css({
 			"background-color" : "#EDF2F4",
 			"border-top" : "0px"
 		})



 	});

 	// Form Validation

 	function validateEmail($email){

 		var emailReg =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 		return emailReg.test($email);

 	}

 	$('#email').on('focusout', function(){

 		if($(this).val() != ""){

 			if(validateEmail($(this).val())){

 				$(this).css('border', '1px solid green');
 				$('#error').text('');
 			} else {
 				$(this).css('border', '1px solid red');
 				$('#error').text('Invalid Email Address');

 			}

 		} else {

 			$(this).css('border', '1px solid red')
 			$('#error').text('Email is Required');

 		}


 	});

 	$('#comment').on('focusout', function(){

 		if($(this).val() != ""){

 			$(this).css('border', '1px solid green');
 			$('#error').text('');

 		} else {

 			$(this).css('border', '1px solid red');
 			$('#error').text('Message Required');

 		}

 	});

 	$('#name , #subject').on('focusout', function(){

 		if($(this).val() != ""){

 			$(this).css('border', '1px solid green');

 		} else {

 			$(this).css('border', '1px solid rgb(212, 212, 212)')

 		} 

 	});

 	//Scroll up

 	$('.top a').on("click", function(){

 		$('html, body').animate({

 			scrollTop : 0

 		}, 1700);


 	});

 	// Sticky Navbar

 	$(window).scroll(function(){

 		if($(document).scrollTop() > 450){

 			$('nav').addClass('fixed-top').addClass('sticky');

 		} else {

 			$('nav').removeClass('fixed-top').removeClass('sticky');

 		}

 	});

 	// Navigation Link

 	$('.nav-item #home').on('click', function (){

 		$('html, body').animate({scrollTop : 0}, 1000);

 	});

 	$('.nav-item #mission').on('click', function(){

	$('html, body').animate({scrollTop : 450 }, 1000);	

 	});

 	$('.nav-item #services').on('click', function(){

		$('html, body').animate({scrollTop : 1270 }, 1000);	

 	});

 	$('.nav-item #vision').on('click', function(){

		$('html, body').animate({scrollTop : 1755 }, 1000);	

 	});

 	$('.nav-item #contact').on('click', function(){

		$('html, body').animate({scrollTop : 2200 }, 1000);	

 	});


});