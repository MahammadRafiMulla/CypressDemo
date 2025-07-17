class HomePage {
  visit() {
    cy.visit('https://automationexercise.com');
  }

  clickSignupLogin() {
    cy.contains('Signup / Login').click();
  }

  verifyHomePage() {
    cy.get('#slider').should('be.visible');
  }

  clickContactUs() {
    cy.get('a[href="/contact_us"]').click();
  }
}

export default new HomePage();