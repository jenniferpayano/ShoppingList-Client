'use strict'

const successfulSignUp = () => {
  $('#message').removeClass()
  $('#message').text('Signed up Successfully')
  //  $('#message').addClass('success')
  document.getElementById('sign-up').reset()
  document.getElementById('sign-up').style.display = 'none'
  document.getElementById('sign-in').style.display = 'block'
}
const successfulSignIn = () => {
  console.log('signed IN bro')
  $('#message').removeClass()
  $('#message').text('Signed In Successfully')
}
const failure = (error) => {
  console.log(error)
}

module.exports = {
  successfulSignUp,
  successfulSignIn,
  failure

}
