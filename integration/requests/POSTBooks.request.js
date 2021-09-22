/// <reference types="cypress" />

const payloadAddBook = require('../payloads/add-book.json')

function addBook() {
    return cy.request({
        method: 'POST',
        url: '/api/v1/Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export { addBook }