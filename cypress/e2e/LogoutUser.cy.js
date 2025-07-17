import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';

describe('Test Case 4: Logout User', () => {
  const email = 'rafimulla333@gmail.com';  
  const password = 'Gx5dye$960Q';
  const username = 'Mahamad Rafi Mulla';

  it('User login with valid credentials and logout, returning to the login page', () => {

    HomePage.visit();
    HomePage.verifyHomePage();

    // Step 4–5: Navigate to Login page and verify
    HomePage.clickSignupLogin();
    LoginPage.verifyLoginVisible();

    // Step 6–7: Login with valid credentials
    LoginPage.fillLogin(email, password);
    LoginPage.clickLoginButton();

    // Step 8: Verify user is logged in
    AccountPage.verifyLoggedIn(username);

    // Step 9–10: Logout and verify
    cy.logoutUser();
  });
});