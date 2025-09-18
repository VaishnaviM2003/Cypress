describe('The Internet HerokuApp - Login Form Validation', () => {

  const loginURL = 'https://the-internet.herokuapp.com/login';
 
  it('should validate invalid and valid login flows', () => {

    // Step 1: Visit the Login Page

    cy.visit(loginURL);
 
    // Step 2: Verify Form Elements Exist and Are Visible

    cy.get('#username').should('be.visible');

    cy.get('#password').should('be.visible');

    cy.get('[type="submit"]').should('be.visible');
 
    // Step 3: Perform Invalid Login

    cy.get('#username').type('invalidUser');

    cy.get('#password').type('invalidPass!');

    cy.get('[type="submit"]').click();
 
    // Step 4: Check for Error Message

    cy.get('#flash')

      .should('be.visible')

      .and('include.text', 'Your username is invalid!');
 
    // Step 5: Perform Valid Login

    cy.get('#username').clear().type('tomsmith');

    cy.get('#password').clear().type('SuperSecretPassword!');

    cy.get('[type="submit"]').click();
 
    // Step 6: Check for Success Message

    cy.get('#flash')

      .should('be.visible')

      .and('include.text', 'You logged into a secure area!');

  });

});

describe('The Internet HerokuApp - Login Form Validation', () => {

  const loginURL = 'https://the-internet.herokuapp.com/login';
 
  it('should validate invalid and valid login flows', () => {

    // Step 1: Visit the Login Page

    cy.visit(loginURL);
 
    // Step 2: Verify Form Elements Exist and Are Visible

    cy.get('#username').should('be.visible');

    cy.get('#password').should('be.visible');

    cy.get('[type="submit"]').should('be.visible');
 
    // Step 3: Perform Invalid Login

    cy.get('#username').type('invalidUser');

    cy.get('#password').type('invalidPass!');

    cy.get('[type="submit"]').click();
 
    // Step 4: Check for Error Message

    cy.get('#flash')

      .should('be.visible')

      .and('include.text', 'Your username is invalid!');
 
    // Step 5: Perform Valid Login

    cy.get('#username').clear().type('tomsmith');

    cy.get('#password').clear().type('SuperSecretPassword!');

    cy.get('[type="submit"]').click();
 
    // Step 6: Check for Success Message

    cy.get('#flash')

      .should('be.visible')

      .and('include.text', 'You logged into a secure area!');

  });

});

 