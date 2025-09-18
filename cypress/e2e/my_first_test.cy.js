describe('Basic Website Navigation and Assertion', () => {
   it('should successfully load the homepage and verify its title', () => {
       // Arrange: Visit the application's base URL
       cy.visit('https://example.cypress.io');
       // Act: No specific action needed beyond visiting for this test, but you could add interactions here.
       // Assert: Verify the page title
       cy.title().should('eq', 'Cypress.io: Kitchen Sink'); //Exact string match.

       //cy.title().should('include', 'Cypress'); //Contains a substring.

       //cy.title().should('have.length', 24) //Has a specific character length.

       //cy.title().should('be.a', 'string')	//Is of a specific type.
   });
});