import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';

describe('Test Case 6: Contact Us Form', () => {
  before(function () {
    cy.fixture('contactFormData').as('formData');
  });

  it('should successfully submit the contact form with uploaded file and return to home page', function () {
    // Step 1–3: Visit and verify home page
    HomePage.visit();
    HomePage.verifyHomePage();

    // Step 4–5: Click Contact Us and verify
    HomePage.clickContactUs();
    ContactUsPage.verifyGetInTouchVisible();

    // Step 6: Fill contact form
    ContactUsPage.fillContactForm(
      this.formData.name,
      this.formData.email,
      this.formData.subject,
      this.formData.message
    );

    // Step 7: Upload file
    ContactUsPage.uploadFile('cypress/fixtures/test.txt');

    // Step 8–9: Submit form and handle alert
    ContactUsPage.clickSubmit();
    cy.on('window:alert', () => true); // Accept alert

    // Step 10: Verify success message
    ContactUsPage.verifySuccessMessage();

    // Step 11: Click Home and verify
    ContactUsPage.clickHomeButton();
    HomePage.verifyHomePage();
  });
});