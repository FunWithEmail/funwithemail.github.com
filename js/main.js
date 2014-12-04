$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function() {
  i = 0;
  $(".posts>li").each(function() {
    i++;
    $(this).attr('id', "foo" + i);
    $(this).addClass("height");
  });
  i = 0;
  $(".titles>li>a").each(function() {
    i++
    $(this).attr('href', "#foo" + i);
  });
});

$(function () {
    $('a').on('click', function (e) {
        // e.preventDefault();

        var target = this.hash,
            $target = $(target);
            console.log(target);

        $('#postCont').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {});
        
        console.log(window.location);

        return false;
    });
});

$(document).ready(function() {
  $("#postCont").scroll(function(){
    if ($(this).scrollTop() > 200) {
        $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
});

$(function () {
    $('.scrollToTop').on('click', function (e) {

        $('#postCont').stop().animate({
            'scrollTop': 0
        }, 700, 'swing', function () {});
        
        console.log(window.location);

        return false;
    });
});