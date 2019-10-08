$(document).ready(function() {
  // --- our code goes here ---
  
  $("textarea").on("keyup", function(event) {
    
    let counter = 140 - $(this).val().length
    $(".counter").text(counter)

    if (counter < 0) {
      $(".counter").css('color', 'red');
    } else {
      $(".counter").css('color', '#545149');
    }
  })
  
});