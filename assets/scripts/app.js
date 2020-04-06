'use strict'
const listEvents = require('./lists/events.js')
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  listEvents.addHandlers()
  $('.sign-in-toggle').on('click', authEvents.onSignInToggle)
  $('.sign-up-toggle').on('click', authEvents.onSignUpToggle)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
})
