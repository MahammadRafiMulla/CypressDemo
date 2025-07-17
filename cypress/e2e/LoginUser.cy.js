import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';

describe('Test Case 2: Login User with correct email and password', () => {
  const email = 'rafimulla333@gmail.com';
  const password = 'Gx5dye$960Q'; 
  const name = 'Mahamad Rafi Mulla'; 

  it('User login successfully', () => {
    HomePage.visit();
    HomePage.verifyHomePage();

    HomePage.clickSignupLogin();
    LoginPage.verifyLoginVisible();

    LoginPage.fillLogin(email, password);
    LoginPage.clickLoginButton();

    AccountPage.verifyLoggedIn(name);
    //AccountPage.deleteAccount();
  });
});