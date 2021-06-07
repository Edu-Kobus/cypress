/// <reference types="cypress" />

it('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('Should group more specific tests...', ()=> {
        it.skip('A specific test...', () => {

        })
    })

    describe('Should group more specific tests 2...', ()=> {
        it('A specific test 2...', () => {

        })
    })




    it('A internal test...', () => {
        
    })
})

//it.only (somente pega o último only, já o 'skip' pega todos)