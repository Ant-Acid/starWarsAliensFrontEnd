document.addEventListener("touchstart", function() {},false); //fixes mobile touch scrolling

$(window).scroll(function() { //scroll to top button
    var height = $(window).scrollTop(); //get the height of the window
    if (height > 100) { //if the height is greater than 100px
        $('.scroll-top a').fadeIn(); //show the scroll to top button
    } else { //otherwise
        $('.scroll-top a').fadeOut(); //hide the scroll to top button
    }
});

$(document).ready(function() { //scroll to top button
    $("#scroll-top").click(function(event) { //when the button is clicked
        event.preventDefault(); //prevent the default action
        $("html, body").animate({ scrollTop: 0 }, "slow"); //scroll to the top of the page
        return false; //prevent the default action
    });

});