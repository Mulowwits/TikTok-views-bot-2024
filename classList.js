'use strict'
// This module represents an interface for adding, deleting , editing and viewing students fom the class list
/* Main idea is to abstract data storage from the rest of your code with an interface so that
your business logic does not become dependant on your specific database or version
*/
const list = [] // private

// public
module.exports = {
  add: function (student) {
    list.push(student)
  },
  edit: function (student, index) {
    list[index] = student
  },
  get: function (index) {
    return list[index]
  },
  delete: function (index) {
    list.splice(index, 1)
  },
  getData: function () {
    return list
  }
}
