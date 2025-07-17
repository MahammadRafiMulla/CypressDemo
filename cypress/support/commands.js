// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registerUser', (name, email) => {
  cy.contains('Signup / Login').click();
  cy.contains('New User Signup!').should('be.visible');
  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();

  cy.contains('Enter Account Information').should('be.visible');

  cy.get('#id_gender1').check();
  cy.get('#password').type(password);
  cy.get('#days').select('12');
  cy.get('#months').select('June');
  cy.get('#years').select('1992');

  cy.get('#newsletter').check();
  cy.get('#optin').check();

  cy.get('#first_name').type('Mahammad Rafi');
  cy.get('#last_name').type('Mulla');
  cy.get('#company').type('CSGI');
  cy.get('#address1').type('#90,Kaveri street1');
  cy.get('#address2').type('A Nayayanapura');
  cy.get('#country').select('India');
  cy.get('#state').type('Karnataka');
  cy.get('#city').type('Benguluru');
  cy.get('#zipcode').type('560016');
  cy.get('#mobile_number').type('9493618734')
});
Cypress.Commands.add('generateRandomEmail', () => {
  const timestamp = Date.now();
  return `MahammadRafiMulla_${timestamp}@gmail.com`;
});
Cypress.Commands.add('fillSignupForm', (name, email, password) => {
  cy.get('#id_gender1').check(); // Title
  cy.get('#password').type(password);
  cy.get('#days').select('12');
  cy.get('#months').select('June');
  cy.get('#years').select('1992');
  cy.get('#newsletter').check();
  cy.get('#optin').check();
  cy.get('#first_name').type('Mahammad Rafi');
  cy.get('#last_name').type('Mulla');
  cy.get('#company').type('CSGI');
  cy.get('#address1').type('#90,Kaveri street1');
  cy.get('#address2').type('A Nayayanapura');
  cy.get('#country').select('India');
  cy.get('#state').type('Karnataka');
  cy.get('#city').type('Bengaluru');
  cy.get('#zipcode').type('560016');
  cy.get('#mobile_number').type('9493618734');
});

Cypress.Commands.add('loginUser', (email, password) => {
  cy.contains('Signup / Login').click();
  cy.contains('Login to your account').should('be.visible');
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('loginUser', (email, password) => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('logoutUser', () => {
  cy.contains('Logout').click();
  cy.url().should('include', '/login');
});