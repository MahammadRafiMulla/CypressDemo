import HomePage from '../pages/HomePage';
import TestCasesPage from '../pages/TestCasesPage';

describe('Test Case 7: Verify Test Cases Page', () => {
  it('should navigate to the Test Cases page and verify it is visible', () => {
    HomePage.visit();
    HomePage.verifyHomePage();
    HomePage.clickTestCases();
    TestCasesPage.verifyTestCasesPageVisible();
  });
});
