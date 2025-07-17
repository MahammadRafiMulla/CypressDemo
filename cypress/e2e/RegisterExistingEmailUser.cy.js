import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';

describe('Test Case 5: Register User with Existing Email', () => {
  const existingEmail = 'rafimulla333@gmail.com';
  const name = 'Rafi Mulla';

  it('should display an error message when trying to register with an already registered email address', () => {
    HomePage.visit();
    HomePage.verifyHomePage();

    HomePage.clickSignupLogin();
    SignupPage.verifySignupVisible(); // ✅ Now using static method correctly

    SignupPage.fillSignup(name, existingEmail);
    SignupPage.verifyEmailExistsError();
  });
});