import { test, expect } from '@playwright/test'

test.describe('Urban Moto Experience', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load home page', async ({ page }) => {
    await expect(page).toHaveTitle(/Urban Moto Experience/)
  })

  test('should navigate to about page', async ({ page }) => {
    await page.click('a[href="/about"]')
    await expect(page).toHaveURL('/about')
  })

  test('should toggle theme', async ({ page }) => {
    const themeButton = page.locator('button[aria-label*="theme"], button[aria-label*="palette"]').first()
    await themeButton.click()
    // Add assertions for theme change
  })

  test('should change language', async ({ page }) => {
    const langButton = page.locator('button[aria-label*="language"], button[aria-label*="translate"]').first()
    await langButton.click()
    await page.click('text=Français')
    // Add assertions for language change
  })
})
