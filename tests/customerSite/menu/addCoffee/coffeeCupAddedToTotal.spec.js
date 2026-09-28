import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`Total cost is updated after clicking the ${coffee} cup`, async ({
    menuPage,
  }) => {
    await allure.parentSuite('Customer Site');
    await allure.suite('Menu');
    await allure.subSuite('Add Coffee');
    await allure.severity('normal');
    await allure.epic('Customer Site');
    await allure.feature('Add Coffee');
    await allure.story(
      `As a customer, I can see the total update after adding ${coffee}`,
    );

    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
