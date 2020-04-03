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
      onGetList(event)
    })
    .catch(ui.failure)
}

const onGetList = () => {
  console.log('getting list')
  api.getLists()
    .then(ui.getListSuccess)
    .catch(ui.failure)
}

const onDeleteList = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(id)
  api.deleteList(id)
    .then(function () {
      onGetList(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  console.log('in handler')
  $('#add-list').on('submit', onAddList)
  $('#get-list').on('click', onGetList)
  $('.content').on('click', '.delete-book', onDeleteList)
  //  $('#clearBooksButton').on('click', onClearBooks)
  //  $('.content').on('click', 'section button', onDeleteBook)
}

module.exports = {
  addHandlers
}
