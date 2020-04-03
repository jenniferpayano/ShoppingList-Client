'use strict'
const config = require('../config')
// const store = require('../store')

const createList = function (data) {
  console.log('in API')
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    data: data
    // data: data
  })
}

const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists'
  })
}

const deleteList = function (id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'delete'
  })
}

const getEditList = function (id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id
  })
}
const updateList = function (data) {
  console.log('ID IS: ' + data.list.id)
    console.log('NAME IS: ' + data.list.name)
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.list.id,
    method: 'PATCH',
    data
    // data: data
  })
}
module.exports = {
  createList,
  getLists,
  deleteList,
  getEditList,
  updateList
}
