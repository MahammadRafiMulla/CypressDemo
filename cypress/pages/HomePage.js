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
   clickTestCases() {
    cy.contains('Test Cases').click();
  }
  clickProducts() {
    cy.get('a[href="/products"]').click();
  }
  clickProductsButton() {
    cy.get('a[href="/products"]').click();
  }  
  scrollToSubscription() {
    cy.scrollTo('bottom')
  }
   verifySubscriptionSection() {
    cy.get('h2').contains('Subscription').should('be.visible')
  }
  enterEmailAndSubmit(email) {
    cy.get('#susbscribe_email').type(email)
    cy.get('#subscribe').click()
  }
   verifySubscriptionSuccess() {
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!')
  }
}

export default new HomePage();