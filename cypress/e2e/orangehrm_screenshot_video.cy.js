describe('OrangeHRM Screenshot + Video Demo', () => {
  it('captures screenshots during a recorded test run', () => {
    // Visit login page
    cy.visit('/web/index.php/auth/login');

    // Take a screenshot of the login page
    cy.screenshot('login-page');

    // Capture branding logo specifically
    cy.get('.orangehrm-login-branding').screenshot('login-logo');

    // Fill login form
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');

    // Screenshot after filling the form
    cy.screenshot('login-form-filled');

    // Submit form
    cy.get('button[type="submit"]').click();

    // Verify dashboard and capture screenshot
    cy.url().should('include', '/dashboard');
    cy.screenshot('dashboard-page');  

    // Navigate to Admin section
    cy.get('.oxd-sidepanel').contains('Admin').click();
    cy.url().should('include', '/admin/viewSystemUsers');
    cy.screenshot('admin-page');

    // Navigate to PIM section
    cy.get('.oxd-sidepanel').contains('PIM').click();
    cy.url().should('include', '/pim/viewEmployeeList');
    cy.screenshot('pim-page');
  });
});