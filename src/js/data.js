"use strict"
const data = {
  myLinkSocial: {
    author: {
      title: 'Sunaookami Shiroko',
      link: 'a',
      icon: '<i class="fa-solid fa-user"></i>',
    },
    role: {
      title: 'Newbie Developer',
      link: 'a',
      icon: '<i class="fa-solid fa-user"></i>',
    },
    github: {
      title: 'Shiroko - Github',
      link: 'https://github.com/sunaookamishirokodev',
      icon: '<i class="fa-brands fa-github"></i>'
    },
    discord: {
      title: 'Shiroko - Discord',
      link: 'https://discord.com/users/962375717465763961',
      icon: '<i class="fa-brands fa-discord"></i>'
    },
    spotify: {
      title: 'Shiroko - Spotify',
      link: 'https://open.spotify.com/user/312qsrew377u5dombenfkfxwtbty',
      icon: '<i class="fa-brands fa-spotify"></i>'
    },
    facebook: {
      title: 'Shiroko - Facebook',
      link: 'https://www.facebook.com/sunaookamishirokodev',
      icon: '<i class="fa-brands fa-facebook"></i>'
    },
    gmail: {
      title: 'Shiroko - Email',
      link: 'mailto:sunaookamishirokodev',
      icon: '<i class="fa-solid fa-at"></i>'
    }
  },
  myAboutMe: {
    textOne: {
      text: 'Hello, I\'m Shiroko - Newbie Developer. I\'ve only been learning coding for 4 weeks and this is my first product. So it still has a lot of error, so please feel free to comment.',
      icon: '<i class="fa-solid fa-user"></i>'
    },
    textTwo: {
      text: 'I use discord and messenger every day to communicate and work so you can always interact with me through them. And I hope we can become good friends through this product.',
      icon: '<i class="fa-solid fa-phone"></i>'
    },
    textThree: {
      text: 'My life is full of challenges, but fortunately for me, I found her - she always comes to me when I\'m happy and tries to encourage me every day to overcome the difficulties of life. That\'s why I love her so much.',
      icon: '<i class="fa-solid fa-venus"></i>'
    }
  },
  mySkill: {
    HTML: {
      title: 'HTML',
      percent: 85,
      icon: '<i class="fa-brands fa-html5"></i>'
    },
    CSS: {
      title: 'CSS',
      percent: 70,
      icon: '<i class="fa-brands fa-css3"></i>'
    },
    JS: {
      title: 'JavaScript',
      percent: 50,
      icon: '<i class="fa-brands fa-square-js"></i>'
    },
    Py: {
      title: 'Python',
      percent: 2,
      icon: '<i class="fa-brands fa-python"></i>'
    },
  },
  myProject: {
    learningWebsite: {
      title: 'Learning Website',
      desc: 'Website dùng để tra tài liệu, lời giải sgk sbt,.. và là nền tảng để học online cho các bạn. Đồng thời được tích hợp trí tuệ nhân tạo và nhiều tính năng mới để hỗ trợ các bạn có thể tăng hiệu suất học tập:3 (dự tính triển khai sau tết âm lịch năm 2024)',
      status: 'pending'
    }
  }
}

const linkSocialSelector = document.getElementById('linkSocialJS')
const aboutMeSelector = document.getElementById('aboutMeJS')
const skillSelector = document.getElementById('skillJS')
const projectSelector = document.getElementById('projectJS')

const linkSocialArray = []
const aboutMeArray = []
const skillArray = []
const projectArray = []

const linkSocialValues = Object.values(data['myLinkSocial'])
const aboutMeValues = Object.values(data['myAboutMe'])
const skillValues = Object.values(data['mySkill'])
const projectValues = Object.values(data['myProject'])

for (let i = 0; i < linkSocialValues.length; i++) {
  linkSocialArray.push(`<li class="container-box__item">${linkSocialValues[i].icon}<a href="${linkSocialValues[i].link}" class="container-box__content container-box__content-link">${linkSocialValues[i].title}</a><li>`)
}
for (let i = 0; i < aboutMeValues.length; i++) {
  aboutMeArray.push(`<li class="container-box__item">${aboutMeValues[i].icon}<a class="container-box__content aboutMe">${aboutMeValues[i].text}</a></li>`)
}
for (let i = 0; i < skillValues.length; i++) {
  skillArray.push(`<li class="container-box__item container-box__item--flex-row" title="${skillValues[i].title}">${skillValues[i].icon}<div class="container-box__process-bar"><div class="container-box__process-bar--percent" style="--process: ${skillValues[i].percent}%"></div></div><span class="container-box__process-text">${skillValues[i].percent}%</span></li>`)
}
for (let i = 0; i < projectValues.length; i++) {
  projectArray.push(`<li class="container-box__item"><span class="container-box__project-title">${projectValues[i].title}</span><span class="container-box__project-desc">${projectValues[i].desc}</span><div class="status-display--${projectValues[i].status}">${projectValues[i].status}</div></li>`)
}

linkSocialSelector.innerHTML = linkSocialArray.join('')
aboutMeSelector.innerHTML = aboutMeArray.join('')
skillSelector.innerHTML = skillArray.join('')
projectSelector.innerHTML = projectArray.join('')
