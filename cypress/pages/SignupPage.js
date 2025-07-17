class SignupPage {
  static verifySignupVisible() {
    cy.xpath("//h2[text()='New User Signup!']").should('be.visible');
  }

  static fillSignup(name, email) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  static verifyEmailExistsError() {
    cy.contains('Email Address already exist!').should('be.visible');
  }
}

export default SignupPage;