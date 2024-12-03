import { test, expect } from '@playwright/test';

test.describe('InputBtn Component', () => {
  test('should render placeholder and button label', async ({ page }) => {
    await page.goto('/iframe.html?id=components-inputbtn--default');

    const input = page.locator('input');
    const button = page.locator('button');

    await expect(input).toHaveAttribute('placeholder', 'Enter email here');
    await expect(button).toHaveText('Button');
  });

  test('should render icons when provided', async ({ page }) => {
    await page.goto('/iframe.html?id=components-inputbtn--with-icons');

    const inputIcon = page.locator('.pointer-events-none');
    const buttonIcon = page.locator('.-ml-16.z-10');

    await expect(inputIcon).toBeVisible();
    await expect(buttonIcon).toBeVisible();
  });

  test('should call onClickHandle when button is clicked', async ({ page }) => {
    const consoleMessages: string[] = [];
    page.on('console', (msg) => consoleMessages.push(msg.text()));

    await page.goto('/iframe.html?id=components-inputbtn--default');

    const button = page.locator('button');
    await button.click();

    expect(consoleMessages).toContain('Clicked!!!');
  });
});
