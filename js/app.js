$(document).ready(function(){
	  $('#theme-sound')[0].load();
	    $('#theme-sound')[0].play();
	doIntro();
	
	
	$('.ryu').mouseenter(function(){
    $('.ryu-still').hide();
	$('.ryu-ready').show();
 		 })
 		 
	.mouseleave(function() {
 
	$('.ryu-ready').hide();
    $('.ryu-still').show();
    })
    
    .mousedown(function(){
    	playHadouken();
    	  $('.ryu-cool').hide();
    	$('.ryu-still').hide();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show().animate ({'left':"2000px"},600,function(){
			$(this).hide();
			$(this).css('left','250px');
		
	   });
})
	.mouseup(function(){
		 $('.ryu-throwing').hide();
    $('.ryu-ready').show();
	});
	
	
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
      playCool();
     $('.ryu-ready').hide();
      $('.ryu-still').hide();
   $('.ryu-cool').show();
    }   
  });
  	$(document).keyup(function(e) {
    if (e.keyCode == 88) {
      
      $('#cool-sound')[0].pause();
  // $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
	
});	
	
	
});

var coolSound = false;
function playCool () {
	
  coolSound = !coolSound;
  if (coolSound) {
    $('#theme-sound')[0].pause();
    // $('#cool')[0].load()
    $('#cool-sound')[0].play();
  }
}

	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
 
}
function doIntro() {
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
		
 

	

