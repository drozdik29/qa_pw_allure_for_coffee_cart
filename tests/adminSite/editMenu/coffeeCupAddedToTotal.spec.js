import { test } from '../../_fixtures/fixtures';
import { allure } from 'allure-playwright';

test(`New coffee can be added to the  Menu`, async ({}) => {
  await allure.parentSuite('Admin Site');
  await allure.suite('Edit Menu');
  await allure.subSuite('Add Coffee');
  await allure.severity('normal');
  await allure.epic('Admin Site');
  await allure.feature('Edit Menu');
  await allure.story('As an administrator, I can add a new coffee to the menu');

  // This is a fake example test.
});
