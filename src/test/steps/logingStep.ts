import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { driver } from "../utilities/Driver";
import { expect } from "@playwright/test";


setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {

  

   await driver.page.goto("https://bookcart.azurewebsites.net/");

    
  });

 
   

         Given('User click on the login link', async function () {
          await driver.page.locator("//span[text()='Login']").click();
         });

   
      

         Given('User enter the username as {string}', async function (username) {
          await driver.page.locator("input[formcontrolname='username']").fill(username);
         });


      

         Given('User enter the password as {string}', async function (password) {
          await driver.page.locator("input[formcontrolname='password']").fill(password);
         });

  
      

         When('User click on the login button', async function () {

          await driver.page.locator("button[color='primary']").click();
        //  await driver.page.waitForLoadState();
     
          await driver.page.waitForTimeout(2000);
          
         });


      

         Then('Login should be success', async function () {
           const user = await driver.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]");
            await expect(user).toBeVisible();
               const userName = await user.textContent();
               console.log("Username: " + userName);
         
          
         });



   

         Given('Login should fail', async function () {
          const failureMesssage = driver.page.locator("mat-error[role='alert']");
          await expect(failureMesssage).toBeVisible();
      
          
         });


      
