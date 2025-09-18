describe('OrangeHRM Data-Driven Login Tests', () => {
  const testCases = [
    {
      username: 'Admin',
      password: 'admin123',
      expected: 'success',
      description: 'Valid credentials'
    },
    {
      username: 'InvalidUser',
      password: 'wrongpassword',
      expected: 'failure',
      description: 'Invalid credentials'
    },
    {
      username: '',
      password: 'admin123',
      expected: 'failure',
      description: 'Empty username'
    },
    {
      username: 'Admin',
      password: '',
      expected: 'failure',
      description: 'Empty password'
    }
  ];

  testCases.forEach((testCase) => {
    it(`should handle login for: ${testCase.description}`, () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      // Ensure fields are visible
      cy.get('input[name="username"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');

      // Enter username if provided
      if (testCase.username) {
        cy.get('input[name="username"]').type(testCase.username);
      }

      // Enter password if provided
      if (testCase.password) {
        cy.get('input[name="password"]').type(testCase.password);
      }

      // Click login
      cy.get('button[type="submit"]').click();

      // Expected outcome
      if (testCase.expected === 'success') {
        // Should be redirected to dashboard
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
        cy.get('.oxd-userdropdown-tab').should('be.visible');
      } else {
        // Handle empty username
        if (!testCase.username) {
          cy.get('input[name="username"]')
            .parents('.oxd-input-group')
            .find('.oxd-input-group__message')
            .should('contain', 'Required');
        }
        // Handle empty password
        else if (!testCase.password) {
          cy.get('input[name="password"]')
            .parents('.oxd-input-group')
            .find('.oxd-input-group__message')
            .should('contain', 'Required');
        }
        // Handle invalid credentials
        else {
          cy.get('.oxd-alert-content-text')
            .should('be.visible')
            .and('contain', 'Invalid credentials');

          cy.url().should('include', '/auth/login');
        }
      }
    });
  });
});
