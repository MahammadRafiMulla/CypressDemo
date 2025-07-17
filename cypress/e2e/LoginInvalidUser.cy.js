import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

describe('Test Case 3: Invalid Login', () => {
  const email = 'rafimulla3332@gmail.com';
  const password = 'Gx5dye$9605Q';

  it('should show an error for invalid login attempt', () => {
    HomePage.visit();
    HomePage.clickSignupLogin();

    LoginPage.verifyLoginVisible();
    LoginPage.fillLogin(email, password);
    LoginPage.clickLoginButton();
    LoginPage.verifyLoginError();

    cy.screenshot('invalid-login-error');
  });
});
