'use strict'
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignInToggle = () => {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-up').style.display = 'none'
  document.getElementById('sign-in').style.display = 'block'
}
const onSignUpToggle = () => {
  document.getElementById('sign-in').reset()
  document.getElementById('sign-up').style.display = 'block'
  document.getElementById('sign-in').style.display = 'none'
}

const onSignUp = () => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.successfulSignUp)
    .catch(ui.signFailure)
}
const onSignIn = () => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.successfulSignIn)
    .catch(ui.signFailure)
}
const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.passFailure)
}

module.exports = {
  onSignInToggle,
  onSignUpToggle,
  onSignUp,
  onSignIn,
  onChangePassword
}
