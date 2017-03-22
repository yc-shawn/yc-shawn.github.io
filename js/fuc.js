$(document).ready(function(){
  mobileNav();
  smoothScroll(300);
  workBelt();
  workLoad();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
  // for any <a> tag, the href start with #
	$('a[href^="#"]').on('click', function(event) {
	    var target = $( $(this).attr('href') );
	    if( target.length ) {
	        event.preventDefault(); // don't reload the browser
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt(){
  $('.thumb-unit').click(function(){
    $('.work-belt').css('left','-100%');
    $('.work-container').show();
  });

  $('.work-return').click(function(){
    $('.work-belt').css('left','0%');
    $('.work-container').hide(333);
  });
}

function workLoad(){
  $.ajaxSetup({ cache: true }); // save to cache to make more fast
  map = {};
  map['ROS Tutorial'] = '1';
  map['MultiModal recording for activities recognition'] = '2';
  map['Signature sign in system'] = '3';
  map['iOS Application'] = '4';
  $('.thumb-unit').click(function(){
    var $this = $(this),
        newTitle = $this.find('strong').text();
        newFolder = map[newTitle];
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/work-'+ newFolder +'.html',
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}

function mobileNav(){
  $(".burger-nav").on("click", function(){
    $("#homeNav ul").toggleClass("open");
  });
}
