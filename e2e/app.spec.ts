import { test, expect } from '@playwright/test'

test.describe('Urban Moto Experience - Single Page Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load home page with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Urban Moto Experience - Home/)
  })

  test('should scroll to Experience section when clicking "Experience" nav link', async ({
    page,
  }) => {
    await page.getByRole('button', { name: 'Experience' }).click()
    await page.waitForURL('**/#experience')
    const experienceSection = page.locator('#experience')
    await expect(experienceSection).toBeVisible()
    await expect(page).toHaveURL(/#experience/)
  })

  test('should scroll to Route section when clicking "Route" nav link', async ({ page }) => {
    await page.getByRole('button', { name: 'Route' }).click()
    await page.waitForURL('**/#route')
    const routeSection = page.locator('#route')
    await expect(routeSection).toBeVisible()
    await expect(page).toHaveURL(/#route/)
  })

  test('should scroll to About Us section when clicking "About Us" nav link', async ({ page }) => {
    await page.getByRole('button', { name: 'About Us' }).click()
    await page.waitForURL('**/#about')
    const aboutSection = page.locator('#about')
    await expect(aboutSection).toBeVisible()
    await expect(page).toHaveURL(/#about/)
  })

  test('should have a "BOOK A RIDE" button in the navigation', async ({ page }) => {
    const bookButton = page.getByRole('button', { name: 'BOOK A RIDE' })
    await expect(bookButton).toBeVisible()
    await expect(bookButton).toHaveClass(/v-btn--variant-elevated/) // Vuetify class for solid button
  })
})
