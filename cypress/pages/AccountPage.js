class AccountPage {
  verifyAccountCreated() {
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  }

  verifyLoggedIn(username) {
    cy.contains(`Logged in as ${username}`).should('be.visible');
  }

  deleteAccount() {
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new AccountPage();
