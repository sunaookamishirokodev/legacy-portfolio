"use strict" //Turn on strict mode
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

fetch("/src/json/data.json")
  .then((res) => res.json())
  .then((data) => renderData(data))

function renderData(data) {
  const linkSocialSelector = $('#linkSocialJS')
  const aboutMeSelector = $('#aboutMeJS')
  const skillSelector = $('#skillJS')
  const projectSelector = $('#projectJS')

  const linkSocialArray = []
  const aboutMeArray = []
  const skillArray = []
  const projectArray = []

  const linkSocialValues = Object.values(data['myLinkSocial'])
  const aboutMeValues = Object.values(data['myAboutMe'])
  const skillValues = Object.values(data['mySkill'])
  const projectValues = Object.values(data['myProject'])

  for (let i = 0; i < linkSocialValues.length; i++) {
    linkSocialArray.push(`<li class="container-box__item">${linkSocialValues[i].icon}<a href="${linkSocialValues[i].link}" target="_blank" class="container-box__content container-box__content-link">${linkSocialValues[i].title}</a><li>`)
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
}