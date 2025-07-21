import homePage from '../pages/HomePage'
import productsPage from '../pages/ProductsPage'

describe('Test Case 9: Search Product', () => {
  it('should search for a product and verify results', () => {
    cy.visit('https://automationexercise.com')
    homePage.verifyHomePage()

    homePage.clickProducts()
    productsPage.verifyAllProductsPage()

    cy.searchProduct('top')

    productsPage.verifySearchedProductsVisible()
    productsPage.verifySearchResultsCount()
  })
})