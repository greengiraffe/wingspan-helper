// https://docs.cypress.io/api/introduction/api.html

describe('Scoresheet', () => {
  it('Root url shows scoresheet', () => {
    cy.visit('/')
    cy.get('#nav .router-link-active').should('have.text', 'Scoresheet')
    cy.contains('birds')
    cy.contains('bonus cards')
    cy.contains('end-of-round goals')
    cy.contains('eggs')
    cy.contains('food on cards')
    cy.contains('tucked cards')
  })
})
