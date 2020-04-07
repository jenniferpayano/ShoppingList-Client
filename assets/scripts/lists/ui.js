'use strict'
const showlistTemplate = require('../templates/shopping-list.handlebars')
const store = require('../store')



const failure = (error) => {
  console.log(error)
}
const getListSuccess = (data) => {
  const createList = showlistTemplate({
    lists: data.lists.filter(x => x.user.id === store.user.id)
  })
  $('.content').html(createList)
  document.getElementById('add-list').display = 'block'
  document.getElementById('add-list').reset()
  document.getElementById('content').style.visibility = 'visible'
  $('#successfulUpdate').text('Successful Update!')
}

const getEditList = (data) => {
  const nameField = document.getElementById('editname')
  const idField = document.getElementById('editid')
  const budgetField = document.getElementById('editbudget')

  nameField.value = data.list.name
  idField.value = data.list.id
  budgetField.value = data.list.budget
  // Get the modal
  const modal = document.getElementById('myModal')

  // Get the button that opens the modal

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0]

  // When the user clicks the button, open the modal
  modal.style.display = 'block'

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none'
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
  $('#successfulUpdate').text('')
}

const closeForm = () => {
  document.getElementById('update-list').style.display = 'none'
  document.getElementById('content').style.position = 'relative'
}

module.exports = {
  failure,
  getListSuccess,
  getEditList,
  closeForm
}
