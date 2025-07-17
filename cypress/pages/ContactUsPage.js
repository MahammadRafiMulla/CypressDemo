class ContactUsPage {
  static verifyGetInTouchVisible() {
    cy.contains('GET IN TOUCH', { timeout: 10000 }).should('be.visible');
  }

  static fillContactForm(name, email, subject, message) {
    cy.xpath('//input[@name="name"]').type(name);
    cy.xpath('//input[@name="email"]').type(email);
    cy.xpath('//input[@name="subject"]').type(subject);
    cy.xpath('//textarea[@name="message"]').type(message);
  }

  static uploadFile(filePath) {
    cy.get('input[name="upload_file"]').selectFile(filePath, { force: true });
  }

  static clickSubmit() {
    cy.get('input[type="submit"]').click();
  }

  static verifySuccessMessage() {
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
  }

  static clickHomeButton() {
    cy.get('a.btn.btn-success').contains('Home').click();
  }
}

export default ContactUsPage;