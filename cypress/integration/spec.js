/// <reference types="cypress" />

it('works', () => {
  cy.wrap(20).wait(10000).should('equal', 20)
})
