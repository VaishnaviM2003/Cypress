/// <reference types="cypress" />

describe('Lab 2: Quote Scraper Reload Test', () => {
  it('should reload the page and verify title consistency', () => {
    // Step 1: Visit the website
    cy.visit('https://quotes.toscrape.com/');

    // Step 2: Verify the title
    cy.title().should('eq', 'Quotes to Scrape');

    // Step 3: Reload the page
    cy.reload();

    // Step 4: Verify title again (should be same)
    cy.title().should('eq', 'Quotes to Scrape');
  });
});
