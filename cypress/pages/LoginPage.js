class LoginPage {
  static verifyLoginVisible() {
    cy.contains('Login to your account').should('be.visible');
  }

  static fillLogin(email, password) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
  }

  static clickLoginButton() {
    cy.get('[data-qa="login-button"]').click();
  }

  static verifyLoginError() {
    cy.get('p').contains('Your email or password is incorrect!').should('be.visible');
  }
}
export default LoginPage;