/// <reference types="cypress" />

describe('Central de Atendimento ao cliente TAT', function() {
    it('Verificar o Titulo da Aplicação', function() {
        cy.visit('./src/index.html')
        cy.title().should('contain', 'Central de Atendimento ao Cliente TAT')

    })
})