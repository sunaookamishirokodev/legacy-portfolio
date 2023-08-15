const introduction = document.querySelectorAll('.container-box__content-link')
const aboutMe = document.querySelectorAll('.aboutMe')
const skillPercent = document.querySelectorAll('.container-box__process--percent')
const learningWebsite = document.querySelectorAll('.learningWebsite')


for(let i = 1; i < introduction.length; i++) {
  introduction[i].setAttribute('target', '_blank')
}
introduction[2].setAttribute('href', 'https://github.com/sunaookamishirokodev') //Github
introduction[3].setAttribute('href', 'https://discord.com/users/962375717465763961') //discord
introduction[4].setAttribute('href', 'https://open.spotify.com/user/312qsrew377u5dombenfkfxwtbty') //spotify
introduction[5].setAttribute('href', 'https://www.facebook.com/sunaookamishirokodev') //facebook
introduction[6].setAttribute('href', 'mailto:lethanhtrung.trungle@gmail.com') //gmail

aboutMe[0].textContent = 'Hello, I\'m Shiroko - Newbie Developer. I\'ve only been learning coding for 4 weeks and this is my first product. So it still has a lot of error, so please feel free to comment.'
aboutMe[1].textContent = 'I use discord and messenger daily for communication and work so you can always interact with me through them. And I hope we can become good friends through this product.'
aboutMe[2].textContent = 'My life is full of challenges but fortunately for me, I have found her - she always comes to me when I am happy and tries to encourage me every day to overcome the difficulties of life. So I love her so much <3.'

skillPercent[0].setAttribute('style', '--process: 60%') //HTML
skillPercent[1].setAttribute('style', '--process: 40%') //CSS
skillPercent[2].setAttribute('style', '--process: 10%') //JS
skillPercent[3].setAttribute('style', '--process: 02%') //Python

learningWebsite[0].textContent = 'Learning Website'
learningWebsite[1].textContent = 'Website dùng để tra tài liệu, lời giải sgk sbt,.. và là nền tảng để học online cho các bạn. Đồng thời được tích hợp trí tuệ nhân tạo và nhiều tính năng mới để hỗ trợ các bạn có thể tăng hiệu suất học tập:3 (dự tính triển khai sau tết âm lịch năm 2024)'