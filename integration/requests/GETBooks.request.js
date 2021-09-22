/// <reference types="cypress" />

function allBooks() {
    //cy.request - client http
    return cy.request({
        method: 'GET',
        url: '/api/v1/Books',
        failOnStatusCode: false,
    })
}

export { allBooks };