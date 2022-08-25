/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('cypress/fixtures/example.html')
    cy.get('button').click()
    cy.get('h1').should('exist')
  })
})
