'use strict'
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')

const onAddList = (event) => {
  console.log('in events')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createList(data)
    .then(function () {
      onStealGetList(event)
    })
    .catch(ui.failure)
}

const onStealGetList = () => {
  console.log('getting list')
  api.getLists()
    .then(ui.getListSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  console.log('in handler')
  $('#add-list').on('submit', onAddList)
  //  $('#clearBooksButton').on('click', onClearBooks)
  //  $('.content').on('click', 'section button', onDeleteBook)
}

module.exports = {
  addHandlers
}
