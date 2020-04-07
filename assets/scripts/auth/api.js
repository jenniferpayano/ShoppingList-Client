'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  event.preventDefault()
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  event.preventDefault()
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}
const changePassword = function (data) {
  event.preventDefault()
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}
const signOut = function (data) {
  event.preventDefault()
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
