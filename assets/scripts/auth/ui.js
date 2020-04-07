'use strict'
const store = require('../store')
const successfulSignUp = () => {
  $('#message').removeClass()
  $('#message').text('Signed up Successfully')
  //  $('#message').addClass('success')
  document.getElementById('sign-up').reset()
  document.getElementById('sign-up').style.display = 'none'
  document.getElementById('sign-in').style.display = 'block'
}
const successfulSignIn = (data) => {
  $('#message').removeClass()
  $('#message').text('Signed In Successfully')
  document.getElementById('sign-in').reset()
  document.getElementById('user-auth').style.display = 'none'
  document.getElementById('shopping-list').style.display = 'block'
  document.getElementById('application1').style.display = 'block'
  store.user = data.user
}
const changePasswordSuccess = () => {
  $('#passmessage').removeClass()
  $('#passmessage').text('Password Changed Successfully')
  document.getElementById('change-password').reset()
}
const signFailure = () => {
  $('#message').removeClass()
  $('#message').text('Error Signing In/Up')
  document.getElementById('sign-in').reset()
  document.getElementById('sign-up').reset()
}

const passFailure = () => {
  $('#passmessage').removeClass()
  $('#passmessage').text('Error Changing Password')
  document.getElementById('change-password').reset()
}

module.exports = {
  successfulSignUp,
  successfulSignIn,
  changePasswordSuccess,
  signFailure,
  passFailure

}
