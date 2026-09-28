import { test } from '../../../_fixtures/fixtures';
import { allure } from 'allure-playwright';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

let testParameters = [];

for (const [key, value] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: value, price: COFFEE_PRICES[key] });
}

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    await allure.parentSuite('Customer Site');
    await allure.suite('Menu');
    await allure.subSuite('View Coffee');
    await allure.severity('normal');
    await allure.epic('Customer Site');
    await allure.feature('View Coffee');
    await allure.story(
      `As a customer, I can see the correct price for ${coffee}`,
    );

    const priceStr = priceFormatStr(price);

    await menuPage.open();

    await menuPage.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
