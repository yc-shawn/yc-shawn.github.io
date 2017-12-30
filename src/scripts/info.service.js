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
      url: 'https://www.plateiq.com'
    }, {
      img: 'lilitofu-img',
      title: 'Lilitofu',
      url: 'https://www.lilitofu.com'
    }, {
      img: 'chat-img',
      title: 'Real-time Chat Application',
      url: '/chatapp'
    }, {
      img: 'shoppingcart-img',
      title: 'E-commerce Shop App',
      url: '/shoppingcart'
    }, {
      img: 'spotifyplaylist-img',
      title: 'Spotify Web Application',
      url: '/spotify'
    }, {
      img: 'craigslist-img',
      title: 'Craigslist',
      url: '/craigslist-home'
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
