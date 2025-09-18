/// <reference types="cypress" />

describe('Lab 1: Wikipedia History Navigation & Viewport Test', () => {
  it('should navigate Wikipedia history and test mobile viewport', () => {
    // Step 1: Visit the main page
    cy.visit('https://www.wikipedia.org/');

    // Step 2: Click on English Wikipedia
    cy.get('#js-link-box-en').click();

    // Step 3 onward inside en.wikipedia.org
    cy.origin('https://en.wikipedia.org', () => {
      // Step 3: Click on Today’s featured article
      cy.get('#mp-tfa a').first().click();

      // Step 4: Go back in history
      cy.go('back');
      cy.url().should('include', 'Main_Page');

      // Step 6: Test mobile viewport before going forward
      cy.viewport('iphone-x');

      // Step 5: Go forward in history
      cy.go('forward');

      // ✅ Flexible heading assertion (works in both old & new skins)
      cy.get('h1:visible')
        .should('exist')
        .and('not.be.empty');
    });
  });
});
