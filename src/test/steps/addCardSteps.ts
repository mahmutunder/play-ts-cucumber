import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import  {driver}  from "../utilities/Driver";
import { expect } from "@playwright/test";

setDefaultTimeout(60*1000*2);


  When('user search for a {string}', async function (books) {
    await driver.page.locator("input[type='search']").fill(books);
    await driver.page.waitForTimeout(2000);
    await driver.page.locator("mat-option[role='option'] span").click();
  });



  When('user add the book to the cart', async function () {
    await driver.page.locator("//button[@color='primary']").click();
    const toast = driver.page.locator("simple-snack-bar");
    await expect(toast).toBeVisible();
    await toast.waitFor({ state: "hidden" })
  });



  Then('the cart badge should get updated', async function () {
    const badgeCount = await driver.page.locator("#mat-badge-content-0").textContent();
    await expect(Number(badgeCount)).toBeGreaterThan(0);
  });
