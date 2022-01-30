/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    for (let i = 0; i < 1000; i++) {
      cy.visit('https://www.earlycoins.io/coin-details/61e1a57667fe074f9602f766')
      cy.get('.voting-btn').click()
      cy.clearCookies()
    }
  })

  it('cy.reload() - reload the page', () => {

  })

})
