/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('cypress/fixtures/page1.html')
    cy.location('pathname').should('equal', '/cypress/fixtures/page1.html')
    cy.get('button').click()
    cy.contains('h1', 'Page 2')
    cy.location('pathname').should('equal', '/cypress/fixtures/page2.html')
  })
})
