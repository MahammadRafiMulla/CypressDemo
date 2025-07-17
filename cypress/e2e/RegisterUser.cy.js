
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import AccountPage from '../pages/AccountPage';

describe('Test Case 1: Register User', () => {
  const name = 'MahamadRafiMulla';
  const password = 'Gx5dye$90Q';
  let email;

  before(() => {
    cy.generateRandomEmail().then((generatedEmail) => {
      email = generatedEmail;
    });
  });

  it('should register a new user successfully', () => {
    HomePage.visit();
    HomePage.verifyHomePage();

    HomePage.clickSignupLogin();
    SignupPage.verifySignupVisible();

    SignupPage.fillSignup(name, email);

    cy.fillSignupForm(name, email, password);

    cy.get('[data-qa="create-account"]').click();

    AccountPage.verifyAccountCreated();
    AccountPage.verifyLoggedIn(name);

    AccountPage.deleteAccount();
  });
});