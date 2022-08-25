/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('cypress/fixtures/example.html')
    cy.url().should('equal', 'http://localhost:60961/cypress/fixtures/example.html')
    cy.get('button').click()
    cy.contains('h1', 'Redirected to new page')
  })
})
