/// <reference types="cypress" />

describe('Esperas...', () =>{
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    // == WAIT TEXT == //
    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    // == RETRYS (RETENTATIVAS) == //
    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist') //OBS: Não deixar 2 acertivas juntas conforme ex. anterior
            .type('funciona')
        
    })

    //== Usando FIND ==//
    it('Uso do find', () => {
        cy.get('#buttonListDOM').click()

        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1')

        cy.get('#lista li')
            .should('contain','Item 2')
    })

    //== TIMEOUT ==//
    it('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('exist')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', { timeout: 30000 })
            .should('have.length', 1)
            .should('have.length', 2)
    })

    //== RETRY ==//
    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .should('have.value', '1') //comandos que alteram o html não são retentados
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => { //em caso de novas buscas utilizar 'then' caso contrário 'should'
        
            expect($el).to.have.length(1)
            cy.get('#buttonList')
            
        })
    })
})

