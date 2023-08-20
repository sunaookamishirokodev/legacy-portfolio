var listLanguagesApi = 'http://localhost:3000/ListLanguages'

function start() {
  getListLanguages(renderListLanguages)
  handleCreateForm()
}

start()

function getListLanguages(callback) {
  fetch(listLanguagesApi)
    .then(response => response.json())
    .then(callback)
}

function createLanguage(data, callback) {
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(listLanguagesApi, options)
    .then(response => response.json())
    .then(callback)
}

function handleDeleteLanguage(id) {
  var options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(listLanguagesApi + '/' + id, options)
    .then(response => response.json())
    .then(function () {
      var languageItem = document.querySelector('.language-item-' + id)
      if (languageItem) {
        languageItem.remove()
      }
    })
}

function renderListLanguages(listLanguages) {
  var listLanguagesBlock = document.getElementById('list-languages')
  var HTMLs = listLanguages.map(function (language) {
    return `
      <li class="language-item-${language.id}">
        <h4>${language.name}</h4>
        <p>${language.description}</p>
        <button onclick="handleDeleteLanguage(${language.id})">Xóa</button>
      </li>
    `
  })
  listLanguagesBlock.innerHTML = HTMLs.join('')
}

function handleCreateForm() {
  var createBtn = document.getElementById('create')
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value
    var description = document.querySelector('input[name="description"]').value
    var formData = {
      name: name,
      description: description
    }
    createLanguage(formData, function () {
      getListLanguages(renderListLanguages)
    })
  }
}
