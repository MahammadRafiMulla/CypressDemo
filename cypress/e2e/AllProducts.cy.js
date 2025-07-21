import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('should navigate to products page and verify product details', () => {
    HomePage.visit();
    HomePage.verifyHomePage();

    HomePage.clickProducts();
    ProductsPage.verifyAllProductsPageVisible();
    ProductsPage.verifyProductsListVisible();

    ProductsPage.clickFirstViewProduct();
    ProductsPage.verifyProductDetailsVisible();
  });
});