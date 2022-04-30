import { chromium } from "playwright";

test('test', async () => {
  const browser = await chromium.launch({
    headless: false
  })
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://mkhavari01.github.io/test-cypress/');
  // Click text=Create new User
  await page.locator('text=Create new User').click();
  // Click input[type="text"] >> nth=0
  await page.locator('input[type="text"]').first().click();
  // Fill input[type="text"] >> nth=0
  await page.locator('input[type="text"]').first().fill('Test Create New User');
  // Click input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).click();
  // Fill input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).fill('09034604960');
  // Click text=make new one
  await page.locator('text=make new one').click();
  // Click text=Delete >> nth=3
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.locator('text=Delete').nth(3).click();
  // Click text=Delete >> nth=2
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.locator('text=Delete').nth(2).click();
  // Click text=Delete >> nth=1
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.locator('text=Delete').nth(1).click();
  // Click button:has-text("Create new User")
  await page.locator('button:has-text("Create new User")').click();
  // Click input[type="text"] >> nth=0
  await page.locator('input[type="text"]').first().click();
  // Fill input[type="text"] >> nth=0
  await page.locator('input[type="text"]').first().fill('Test 2');
  // Click input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).click();
  // Fill input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).fill('22222');
  // Click text=make new one
  await page.locator('text=make new one').click();
  // Click button:has-text("Create new User")
  await page.locator('button:has-text("Create new User")').click();
  // Click input[type="text"] >> nth=0
  await page.locator('input[type="text"]').first().click();
  // Fill input[type="text"] >> nth=0
  await page.locator('input[type="text"]').first().fill('Test 3');
  // Click input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).click();
  // Fill input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).fill('33333');
  // Click text=make new one
  await page.locator('text=make new one').click();
  // Click text=Edit >> nth=0
  await page.locator('text=Edit').first().click();
  // Click input[type="text"] >> nth=0
  await page.locator('input[type="text"]').first().click();
  // Fill input[type="text"] >> nth=0
  await page.locator('input[type="text"]').first().fill('Test Edit');
  // Click input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).click();
  // Fill input[type="text"] >> nth=1
  await page.locator('input[type="text"]').nth(1).fill('33999999');
  // Click text=Save changes
  await page.locator('text=Save changes').click();

  await browser.close()

});