const { test, expect } = require('@playwright/test');
const path = require('path');

const viewports = [
    { name: 'mobile', width: 375, height: 812 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1440, height: 900 }
];

test.describe('Visual Verification', () => {
    viewports.forEach(viewport => {
        test(`Screenshot at ${viewport.name} viewport`, async ({ page }) => {
            await page.setViewportSize({ width: viewport.width, height: viewport.height });

            // Go to index.html using file path
            const filePath = `file://${path.resolve(__dirname, '../index.html')}`;
            await page.goto(filePath);

            // Wait for animations (approximate)
            await page.waitForTimeout(1000);

            // Take screenshot
            await page.screenshot({
                path: `screenshots/${viewport.name}.png`,
                fullPage: true
            });

            console.log(`Captured ${viewport.name} screenshot.`);
        });
    });

    test('Mobile Menu Interaction', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        const filePath = `file://${path.resolve(__dirname, '../index.html')}`;
        await page.goto(filePath);

        const menuBtn = page.locator('#mobile-menu-btn');
        await menuBtn.click();

        await page.waitForTimeout(500); // Wait for transition

        await page.screenshot({ path: 'screenshots/mobile-menu-open.png' });
        console.log('Captured mobile menu open screenshot.');
    });

    test('Dark Mode Verification', async ({ page }) => {
        await page.setViewportSize({ width: 1440, height: 900 });
        const filePath = `file://${path.resolve(__dirname, '../index.html')}`;
        await page.goto(filePath);

        const themeToggle = page.locator('#theme-toggle');
        await themeToggle.click();

        await page.waitForTimeout(500); // Wait for transition

        await page.screenshot({ path: 'screenshots/dark-mode.png' });
        console.log('Captured dark mode screenshot.');
    });
});
