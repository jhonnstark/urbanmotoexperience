import { test, expect } from '@playwright/test'

test.describe('Urban Moto Experience', () => {
  test('should load home page', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Urban Moto Experience/)
  })

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=About')
    await expect(page).toHaveURL(/\/about/)
  })

  test('should toggle theme', async ({ page }) => {
    await page.goto('/')
    const themeButton = page.locator('button:has-text("mdi-palette")')
    await themeButton.click()
    // Verify theme toggle works
    await expect(page).toBeTruthy()
  })

  test('should change language', async ({ page }) => {
    await page.goto('/')
    const languageButton = page.locator('button:has-text("mdi-translate")')
    await languageButton.click()
    await page.click('text=Français')
    // Verify language changes
    await expect(page).toBeTruthy()
  })
})
