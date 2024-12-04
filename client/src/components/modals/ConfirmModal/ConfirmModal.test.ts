import { test, expect } from '@playwright/test';

// TODO - should fix that failed tests. implement e2e testing with playwright.
test.describe('ConfirmModal Component', () => {
	test('should open and close the modal', async ({ page }) => {
		// navigate to the url
		await page.goto('/?path=/story/components-confirmmodal--button-with-input-image');

		// open modal
		const openButton = await page.getByRole('button', { name: 'Open Modal' });
		await expect(openButton).toBeVisible();
		await openButton.click();

		// verify that the modal is visible
		const modal = await page.getByRole('dialog', { name: /modal/i });
		await expect(modal).toBeVisible();

		// verify modal content is loaded
		const closeModalButton = await modal.getByRole('button', { name: 'Close Modal' });
		await expect(closeModalButton).toBeVisible();

		// click the "Close Modal" button
		await closeModalButton.click();

		// Verify that the modal is no longer visible
		await expect(modal).not.toBeVisible();
	});
});
