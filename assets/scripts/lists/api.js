'use strict'
const config = require('../config')
// const store = require('../store')

const createList = function (data) {
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
