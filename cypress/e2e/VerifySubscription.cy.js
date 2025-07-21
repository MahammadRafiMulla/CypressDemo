
import homePage from '../pages/HomePage'

describe('Test Case 10: Verify Subscription in Home Page', () => {
  it('should verify subscription functionality', () => {
    cy.visit('https://automationexercise.com')
    homePage.verifyHomePage()

    homePage.scrollToSubscription()
    homePage.verifySubscriptionSection()

    homePage.enterEmailAndSubmit('rafimulla333@email.com');
    homePage.verifySubscriptionSuccess()
  })
})