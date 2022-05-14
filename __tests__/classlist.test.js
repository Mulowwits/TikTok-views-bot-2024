'use strict'
/* eslint-env jest */

const classList = require('../classList') // our class list array

describe('student can be added to the list', () => {
  test('add student to the list', () => {
    const newStudent = 'Nhlamulo'
    classList.add(newStudent)
    expect(classList.getData().length).toEqual(1)
  })
})

describe('student can be deleted', () => {
  test('student can be deleted by an id ', () => {
    // const studentList = ['Nhlamulo', 'Karabo', 'Themba']
    const expectedList = ['Karabo', 'Themba']
    classList.delete(0)
    expect(classList.getData().length).toEqual(0)
  })
})

describe('student array can be edited', () => {
  test('edit student by using an id', () => {
    const newStudent = 'Nhlamulo'
    const newStudent2 = 'Karabo'
    classList.add(newStudent)
    classList.edit(newStudent2, 0)
    expect(classList.get(0)).toEqual(newStudent2)
  })
})
