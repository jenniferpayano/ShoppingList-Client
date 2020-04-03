'use strict'
const showlistTemplate = require('../templates/shopping-list.handlebars')

const failure = (error) => {
  console.log(error)
}
const getListSuccess = (data) => {
  console.log('in ui')
  console.log(data)
  const createList = showlistTemplate({
    lists: data.lists
  })
  $('.content').html(createList)
}

const getEditList = (data) => {
  console.log(data.list)
  document.getElementById('editList').style.display = 'block'
  const nameField = document.getElementById('editname')
  const idField = document.getElementById('editid')
  const budgetField = document.getElementById('editbudget')
  const userIDField = document.getElementById('edituserid')
  nameField.value = data.list.name
  idField.value = data.list.id
  budgetField.value = data.list.budget
  userIDField.value = data.list.user.id
  // textField.value(data.list.name)
  // const popupForm = showlistTemplate({
  //   lists: data.list
  // })
  // $('editList').html(popupForm)
}

module.exports = {
  failure,
  getListSuccess,
  getEditList
}
