import { chromium } from "playwright";
describe('Launch Browser', () => {

    test('Open letcode', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://mkhavari01.github.io/test-cypress/')
        // await browser.close()
    })

})