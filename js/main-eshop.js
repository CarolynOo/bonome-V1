/*
* === HEADER TRANSITION ===
*/

var a = $("#slideshow-container").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > 215)
    {   
       $('.navbar').css({"background":"yellow"});
       

    } else {
       $('.navbar').css({"background":"transparent"});
    }
});

  
  /*
* === MASONRY ===
*/

// $('.grid').masonry({
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 900
// });


