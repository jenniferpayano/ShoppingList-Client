'use strict'
const config = require('../config')
// const store = require('../store')

const createList = function (data) {
  console.log('in API')
  console.log(data)
  event.preventDefault()
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
module.exports = {
  createList,
  getLists
}
