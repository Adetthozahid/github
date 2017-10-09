 	$(document).ready(function() {
  $('.background-image').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });
}); 

$(document).ready(function() {
  $('.mainareavisible').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visiblecontain');
  });
}); 
