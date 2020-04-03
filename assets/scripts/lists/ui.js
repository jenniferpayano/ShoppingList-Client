'use strict'
const showlistTemplate = require('../templates/shopping-list.handlebars')

const failure = (error) => {
  console.log(error)
}
const getListSuccess = (data) => {
  console.log('in ui')
  console.log(data)
  const createList = showlistTemplate({
    lists: data.lists
  })
  $('.content').html(createList)
}

module.exports = {
  failure,
  getListSuccess
}
