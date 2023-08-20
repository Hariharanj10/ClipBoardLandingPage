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

describe('Transaction Page Tests', () => {
  it('Should successfully add a new value to the selectedValues array', () => {
    cy.visit('http://localhost:3000'); 
    
    cy.get('#select-1').select('Pune');
    cy.get('#select-2').select('User');
    
    cy.get('button[type="submit"]').click();
    
    cy.get('table').should('contain', 'Pune');
    cy.get('table').should('contain', 'User');
  });
  
  it('Should successfully delete a value from the selectedValues array', () => {
    cy.visit('http://localhost:3000/TransactionPage');
    
    cy.get('svg[data-icon="delete"]').first().click();
    
    cy.get('table').should('not.contain', 'User');
  });
  
  it('Should set a value as primary', () => {
    cy.visit('http://localhost:3000/TransactionPage');
    
    cy.get('.ant-dropdown-trigger').first().click();
    cy.contains('Set as primary').click();
    
    cy.get('.custom-primary-button').should('be.visible');
  });
  
  it('Should successfully logout', () => {
    cy.visit('http://localhost:3000/TransactionPage');
    
    cy.get('button').contains('Logout').click();
    
    cy.url().should('include', '/LoginPage');
  });
  
  it('Should successfully update values', () => {
    cy.visit('http://localhost:3000/TransactionPage');
    cy.get('button').contains('open').click();
    cy.get('button').contains('Update').click();
    cy.url().should('include', '/ReviewChanges');
  });
});
