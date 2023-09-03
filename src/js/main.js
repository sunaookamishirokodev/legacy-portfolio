"use strict"
const introduction = document.querySelectorAll('.introduction')
const aboutMe = document.querySelectorAll('.aboutMe')
const skillPercent = document.querySelectorAll('.skillPercent')
const skillText = document.querySelectorAll('.container-box__process-text')
const learningWebsite = document.querySelectorAll('.learningWebsite')
const displayOfStatus = document.getElementById('status')

const myIntroductionSocial = {
  github: 'https://github.com/sunaookamishirokodev',
  discord: 'https://discord.com/users/962375717465763961',
  spotify: 'https://open.spotify.com/user/312qsrew377u5dombenfkfxwtbty',
  facebook: 'https://www.facebook.com/sunaookamishirokodev',
  gmail: 'mailto:sunaookamishirokodev'
}

const myAboutMe = {
  textOne: 'Hello, I\'m Shiroko - Newbie Developer. I\'ve only been learning coding for 4 weeks and this is my first product. So it still has a lot of error, so please feel free to comment.',
  textTwo: 'I use discord and messenger every day to communicate and work so you can always interact with me through them. And I hope we can become good friends through this product.',
  textThree: 'My life is full of challenges, but fortunately for me, I found her - she always comes to me when I\'m happy and tries to encourage me every day to overcome the difficulties of life. That\'s why I love her so much.'
}

const mySkillPercent = {
  HTML: 85,
  CSS: 70,
  JavaScript: 50,
  Python: 2,
}

const myLearningWebsite = {
  title: 'Learning Website',
  desc: 'Website dùng để tra tài liệu, lời giải sgk sbt,.. và là nền tảng để học online cho các bạn. Đồng thời được tích hợp trí tuệ nhân tạo và nhiều tính năng mới để hỗ trợ các bạn có thể tăng hiệu suất học tập:3 (dự tính triển khai sau tết âm lịch năm 2024)',
  status: 'pending'
}

// Khu vực thuật toán (không chỉnh sửa)
const introductionValues = Object.values(myIntroductionSocial)
const skillPercentValues = Object.values(mySkillPercent)
const learningWebsiteValues = Object.values(myLearningWebsite)

for (let i = 0; i < introductionValues.length; i++) {
  introduction[i].href = introductionValues[i]
  introduction[i].target = '_blank'
}

const aboutMeValues = Object.values(myAboutMe)
for (let i = 0; i < aboutMeValues.length; i++) {
  aboutMe[i].textContent = aboutMeValues[i]
}

for (let i = 0; i < skillPercentValues.length; i++) {
  skillPercent[i].style = `--process: ${skillPercentValues[i]}%`
  skillText[i].textContent = `${skillPercentValues[i]}%`
}

for (let i = 0; i < learningWebsiteValues.length - 1; i++) {
  learningWebsite[i].textContent = learningWebsiteValues[i]
}

displayOfStatus.className = `status-display--${myLearningWebsite['status']}`
displayOfStatus.textContent = myLearningWebsite['status']