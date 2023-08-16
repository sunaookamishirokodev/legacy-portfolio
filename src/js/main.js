const introduction = document.querySelectorAll('.introduction')
const aboutMe = document.querySelectorAll('.aboutMe')
const skillPercent = document.querySelectorAll('.skillPercent')
const learningWebsite = document.querySelectorAll('.learningWebsite')
const displayOfStatus = document.getElementById('status')
const demoBox = document.querySelector('.container-box.container-box--demo')

const myIntroductionSocial = {
  github: 'https://github.com/sunaookamishirokodev',
  discord: 'https://discord.com/users/962375717465763961',
  spotify: 'https://open.spotify.com/user/312qsrew377u5dombenfkfxwtbty',
  facebook: 'https://www.facebook.com/sunaookamishirokodev',
  gmail: 'mailto:sunaookamishirokodev'
}

const myAboutMe = {
  textOne: 'Hello, I\'m Shiroko - Newbie Developer. I\'ve only been learning coding for 4 weeks and this is my first product. So it still has a lot of error, so please feel free to comment.',
  textTwo: 'I use discord and messenger daily for communication and work so you can always interact with me through them. And I hope we can become good friends through this product.',
  textThree: 'My life is full of challenges but fortunately for me, I have found her - she always comes to me when I am happy and tries to encourage me every day to overcome the difficulties of life. So I love her so much <3.'
}

const mySkillPercent = {
  HTML: 60,
  CSS: 40,
  JavaScript: 15,
  Python: 2
}

const myLearningWebsite = {
  title: 'Learning Website',
  desc: 'Website dùng để tra tài liệu, lời giải sgk sbt,.. và là nền tảng để học online cho các bạn. Đồng thời được tích hợp trí tuệ nhân tạo và nhiều tính năng mới để hỗ trợ các bạn có thể tăng hiệu suất học tập:3 (dự tính triển khai sau tết âm lịch năm 2024)',
  status: 'pending'
}

demoBox.innerHTML = 
'<p>Bạn có thể chỉnh kích thước ô này</p>'

// Khu vực thuật toán (không chỉnh sửa)
const introductionValues = Object.values(myIntroductionSocial)
const skillPercentValues = Object.values(mySkillPercent)
const learningWebsiteValues = Object.values(myLearningWebsite)

for (let i = 0; i < introductionValues.length; i++) {
  introduction[i].setAttribute('href', introductionValues[i])
  introduction[i].setAttribute('target', '_blank')
}

const aboutMeValues = Object.values(myAboutMe)
for (let i = 0; i < aboutMeValues.length; i++) {
  aboutMe[i].textContent = aboutMeValues[i]
}

for (let i = 0; i < skillPercentValues.length; i++) {
  skillPercent[i].setAttribute('style', `--process: ${skillPercentValues[i]}%`)
}

for (let i = 0; i < learningWebsiteValues.length - 1; i++) {
  learningWebsite[i].textContent = learningWebsiteValues[i]
}

displayOfStatus.className = `status-display--${myLearningWebsite['status']}`
displayOfStatus.textContent = myLearningWebsite['status']