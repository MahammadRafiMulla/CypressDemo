class TestCasesPage {
  verifyTestCasesPageVisible() {
    // Confirm page contains header text
    cy.get('.title.text-center')  // This class targets "TEST CASES" heading
      .should('be.visible')
      .and('contain.text', 'Test Cases');

    // Confirm URL contains /test_cases
    cy.url().should('include', '/test_cases');
  }
}

export default new TestCasesPage();