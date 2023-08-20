describe('Login Page Tests', () => {
  it('Should successfully login with valid credentials', () => {
    cy.visit('http://localhost:3000/LoginPage'); 
    
    cy.get('#username').type('validUsername');
    cy.get('#password').type('validPassword');
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', 'http://localhost:3000/TransactionPage');
  });

  it('Should not login with empty username and password', () => {
    cy.visit('http://localhost:3000/LoginPage'); 
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', 'http://localhost:3000/LoginPage');
  });
  
  it('Should not login with only username entered', () => {
    cy.visit('http://localhost:3000/LoginPage'); 
    
    cy.get('#username').type('validUsername');
    
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', 'http://localhost:3000/LoginPage');
  });
  
  it('Should not login with only password entered', () => {
    cy.visit('http://localhost:3000/LoginPage'); 
    
    cy.get('#password').type('validPassword');

    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', 'http://localhost:3000/LoginPage');
  });
});
