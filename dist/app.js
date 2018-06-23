angular.module('homepage', ['ngMaterial'])
.controller('homeCtrl', ['$scope', '$http', 'info', function($scope, $http, info){

  $scope.skills = info.skills;
  $scope.levels = info.levels;
  $scope.projects = info.projects;
  $scope.comments = info.comments;

  $scope.curProjIndex = 0;

  $scope.chooseProj = function(index){
    console.log(index)
    $scope.curProjIndex = index;
  }

  $scope.toggleSideMenu = function(){
    $('body').toggleClass('menu-open');
  }

  $scope.submitForm = function(){
    console.log($scope.contact);
    $http.post('https://formspree.io/ychen248@buffalo.edu', $scope.contact).then(function(res){
      console.log(res.data)
    })
  }

  $(function(){
    smoothScroll(300);
    backToTop(333);
    workBelt();
    fitTextInit();
    commentStuff();
    scrollAnimate();
    // $('.thumb-container a').attr('href', '#work');
    $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
  })

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

angular.module('homepage')
.factory('info', function(){

  var skills = [
    'Java',
    'Javascript/ES6',
    'NodeJS',
    'React/Redux',
    'AngularJS',
    'Bootstrap',
    'Jquery',
    'Python',
    'Swift',
    'AWS',
    'CSS/SASS/SCSS',
    'MongoDB'
  ];

  var levels = {
    'Java': 5,
    'Python': 4,
    'C#': 3,
    'Swift': 4,
    'C++': 3,
    'HTML': 5,
    'CSS/SASS/SCSS': 5,
    'Javascript/Es6': 4,
    'Jquery': 4,
    'NodeJS': 4,
    'React/Redux': 4,
    'SQL/NoSQL': 3,
    'AngularJS': 4,
    'Bootstrap': 4,
    'AWS': 3,
    'MongoDB': 3
  }

  var projects = [
    {
      img: 'plateiq-img',
      title: 'Plate IQ',
      url: '#work'
    }, {
      img: 'lilitofu-img',
      title: 'Lilitofu',
      url: '#work'
    }, {
      img: 'chat-img',
      title: 'Real-time Chat Application',
      url: 'https://yc-shawn.github.io/real-time-chat/'
    }, {
      img: 'craigslist-img',
      title: 'Craigslist',
      url: 'https://yc-shawn.github.io/craigslist-housing'
    }, {
      img: 'shoppingcart-img',
      title: 'E-commerce Shop App',
      url: 'https://yc-shawn.herokuapp.com/shoppingcart'
    }, {
      img: 'spotifyplaylist-img',
      title: 'Spotify Web Application',
      url: 'https://yc-shawn.github.io/spotify'
    }, {
      img: 'ros-img',
      title: 'Youtube Channel',
      url: '#work'
    }, {
      img: 'reco-img',
      title: 'Human In The Loop System Laboratory',
      url: '#work'
    }, {
      img: 'iosapp-img',
      title: 'Local Life Service IOS Application',
      url: '#work'
    }, {
      img: 'signature-img',
      title: 'Signature sign in system',
      url: '#work'
    }
  ];

  var comments = [
    {
      "name": "Peter Fioretti",
      "title": "Founder, Synchronyze Inc.",
      "img": "peter_avatar.jpg",
      "comment": "I met Shawn in my first trip to Silicon Valley. He immediatly impressed me for his hard work and dedication. When he talks you can hear passion flowing through your ears, not just words."
    }, {
      "name": "Geok Hui Koh",
      "title": "Founder, Lilitofu",
      "img": "geok_avatar.jpg",
      "comment": "Shawn is a strong team player and often going above and beyond to help his peers even if the issues are outside his immediate scope of responsibilities. He’s led team on-boarding session for new interns, curated good learning resources to share, and is quick to step up and guide other teams through roadblocks."
    }, {
      "name": "Yiming Hu",
      "title": "Product Manager, Laiye Inc.",
      "img": "yiminghu_avatar.jpg",
      "comment": "Shawn is one of the few people that I've ever met with strong self-learning ability and solid programming technics. I believe he could create greater value to his organization"
    }
  ];

  return {
    skills: skills,
    levels: levels,
    projects: projects,
    comments: comments
  }
})
