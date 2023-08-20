describe('Login Page', () => {
  it('should successfully log in', () => {
    // Visit the login page
    cy.visit('http://localhost:3000/login');

    // Enter valid username and password
    cy.get('#username').type('your_username');
    cy.get('#password').type('your_password');

    // Submit the login form
    cy.get('button[type="submit"]').click();

    // Check if navigation occurred to the expected page (TransactionPage)
    cy.url().should('include', '/TransactionPage');
  });
});
