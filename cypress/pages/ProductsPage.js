class ProductsPage {
  verifyAllProductsPageVisible() {
    cy.get('.title.text-center').should('be.visible').and('contain.text', 'All Products');
  }
     verifyProductsListVisible() {
     cy.get('.features_items').should('be.visible');
  }

  clickFirstViewProduct() {
    cy.get('.product-image-wrapper').first().find('a[href*="/product_details/"]').click();
  }
  verifySearchedProductsTitleVisible() {
    cy.get('.title.text-center').should('contain.text', 'Searched Products');
  }

  verifySearchedProductsVisible() {
    cy.get('.title.text-center').should('contain.text', 'Searched Products')
  }
  verifySearchResultsCount() {
    cy.get('.productinfo.text-center').should('have.length.greaterThan', 0)
  }
  verifyAllProductsPage() {
    cy.url().should('include', '/products')
    cy.get('.title.text-center').should('have.text', 'All Products')
  }


  verifyProductDetailsVisible() {
      cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible'); // Product Name
      cy.contains('Category').should('be.visible');
      cy.contains('Rs.').should('be.visible'); // Price
      cy.contains('Availability').should('be.visible');
      cy.contains('Condition').should('be.visible');
      cy.contains('Brand').should('be.visible');
    });
  }
}
export default new ProductsPage();