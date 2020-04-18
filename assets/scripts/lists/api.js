'use strict'
const config = require('../config')
const store = require('../store')
// const store = require('../store')

const createList = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/lists',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data: data
    // data: data
  })
}

const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteList = function (id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'delete'
  })
}

const getEditList = function (id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + data.list.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
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
