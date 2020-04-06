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
  document.getElementById('user-auth').style.display = 'none'
  document.getElementById('shopping-list').style.display = 'block'
  store.user = data.user
}
const failure = (error) => {
  console.log(error)
}

module.exports = {
  successfulSignUp,
  successfulSignIn,
  failure

}
