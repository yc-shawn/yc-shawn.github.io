angular.module('homepage', [])
.controller('homeCtrl', ['$scope', 'info', function($scope, info){

  $scope.skills = info.skills;
  $scope.levels = info.levels;
  $scope.projects = info.projects;
  $scope.comments = info.comments;

  $scope.curProjIndex = 0;

  $scope.chooseProj = function(index){
    $scope.curProjIndex = index;
  }

  $scope.toggleSideMenu = function(){
    $('body').toggleClass('menu-open');
  }

  setTimeout(function(){
    smoothScroll(300);
    backToTop(333);
    workBelt();
    fitTextInit();
    commentStuff();
    scrollAnimate();
    // $('.thumb-container a').attr('href', '#work');
    $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
  }, 100)

  function backToTop(duration){
    var btt = $('.back-to-top');
    btt.click(function(event){
      event.preventDefault();
      $('html, body').animate({scrollTop: 0},duration);
    });

    $(window).scroll( function(){
      var $this = $(this),
          height = $this.height(),
          top = $this.scrollTop();
      if (top > height){
        if(!btt.is(':visible')){
          btt.fadeIn();
        }
      } else {
        btt.hide();
      }
    });
  }

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

  // work section
  function workBelt(){
    $('.thumb-unit').click(function(){
      if ($(this).attr('href') == '#work'){
        $('.work-belt').css('left','-100%');
        $('.work-container').show();
        $('.thumb-wrap').css('height','10px');
      }
    });

    $('.work-return').click(function(){
      $('.work-belt').css('left','0%');
      $('.work-container').hide(333);
      $('.thumb-wrap').css('height','auto');
      // $('.project-load div').css('display','none');
    });
  }



  function commentStuff(){
    $('.comment-unit').first().addClass('active-people');
    $('.single-logo').first().addClass('active-logo');
    $('.comment-mobile-nav span').first().addClass('active-logo');
    $('.single-logo, .comment-mobile-nav span').click(function(){
      var $this = $(this),
          $siblings = $this.parent().children(),
          position = $siblings.index($this);
      $('.comment-unit').removeClass('active-people').eq(position).addClass('active-people');
      $siblings.removeClass('active-logo');
      $this.addClass('active-logo');
    });

    $('.control-next, .control-pre').click(function(){
      var $this = $(this),
          curActiveComment = $('.comment-belt').find('.active-people'),
          position = $('.comment-belt').children().index(curActiveComment),
          commentNum = $('.comment-unit').length;
      if ($this.hasClass('control-next')){
        if (position < commentNum-1){
          $('.active-people').removeClass('active-people').next().addClass('active-people');
          $('.active-logo').removeClass('active-logo').next().addClass('active-logo');
        } else {
          $('.comment-unit').removeClass('active-people').first().addClass('active-people');
          $('.comment-mobile-nav span').removeClass('active-logo').first().addClass('active-logo');
        }
      } else {
        if (position > 0){
          $('.active-people').removeClass('active-people').prev().addClass('active-people');
          $('.active-logo').removeClass('active-logo').prev().addClass('active-logo');
        } else {
          $('.comment-unit').removeClass('active-people').last().addClass('active-people');
          $('.comment-mobile-nav span').removeClass('active-logo').last().addClass('active-logo');
        }
      }

    });
  }

  function scrollAnimate(){
    $('header .nameTag').hide().fadeIn(2000);
    window.sr = ScrollReveal();
    sr.reveal('header .logo',{
      duration: 2000,
      origin: 'left',
    });
    sr.reveal('.face-img',{
      duration: 2000,
      origin: 'top',
    });
    sr.reveal('.face-lockup .icon1, .face-lockup .icon2',{
      duration: 1500,
      origin: 'right',
      distance: '50px'
    });
    sr.reveal('.face-lockup .icon3, .face-lockup .icon4',{
      duration: 1500,
      origin: 'left',
      distance: '50px'
    });
    // sr.reveal('.skill-lockup .skill-label',{
    //   duration: 1000,
    // });
    // sr.reveal('.skill-lockup .skill-icon span',{
    //   duration: 500,
    //   origin: 'left',
    // }, 10);
    // sr.reveal('.work-belt .thumb-unit',{
    //   duration: 1500,
    //   scale: 0.6,
    // }, 50);
    sr.reveal('.section-comment .active-people',{
      duration: 1000,
    });
  }

  function fitTextInit(){
    $.fn.fitText = function( kompressor, options ) {
      // Setup options
      var compressor = kompressor || 1,
          settings = $.extend({
            'minFontSize' : Number.NEGATIVE_INFINITY,
            'maxFontSize' : Number.POSITIVE_INFINITY
          }, options);
      return this.each(function(){
        // Store the object
        var $this = $(this);
        // Resizer() resizes items based on the object width divided by the compressor * 10
        var resizer = function () {
          $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        };
        // Call once to set.
        resizer();
        // Call on resize. Opera debounces their resize by default.
        $(window).on('resize.fittext orientationchange.fittext', resizer);
      });
    };
  }

}])
