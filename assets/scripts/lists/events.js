'use strict'
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')

const onAddList = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createList(data)
    .then(function () {
      onGetList(event)
    })
    .catch(ui.failure)
}

const onGetList = () => {
  api.getLists()
    .then(ui.getListSuccess)
    .catch(ui.failure)
}

const onDeleteList = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteList(id)
    .then(function () {
      onGetList(event)
    })
    .catch(ui.failure)
}

const onGetEditList = (event) => {
  const id = $(event.target).data('id')
  api.getEditList(id)
    .then(ui.getEditList)
    .catch(ui.failure)
}

const onUpdateList = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateList(data)
    .then(function () {
      onGetList(event)
    })
    .catch(ui.failure)
}
const onCloseList = (event) => {
  event.preventDefault()
  ui.closeForm()
}
const addHandlers = () => {
  $('#add-list').on('submit', onAddList)
  $('#get-list').on('click', onGetList)
  $('.content').on('click', '.delete-list', onDeleteList)
  $('.content').on('click', '.edit-list', onGetEditList)
  $('#update-list').on('submit', onUpdateList)
  $('#update-list').on('click', '.close-list', onCloseList)
}

module.exports = {
  addHandlers
}
