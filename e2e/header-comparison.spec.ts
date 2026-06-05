import { test, expect } from '@playwright/test'

test.describe('Header navigation', () => {
  test('should show desktop navigation on wide screens', async ({ page }) => {
    await page.setViewportSize({ width: 1491, height: 1055 })
    await page.goto('/')

    const header = page.locator('.topbar')
    await expect(header).toBeVisible()
    await expect(page.getByTestId('nav-about')).toBeVisible()
    await expect(page.getByTestId('nav-route')).toBeVisible()
    await expect(page.getByTestId('nav-experience')).toBeVisible()
    await expect(page.getByTestId('nav-socials')).toBeVisible()
    await expect(page.locator('.nav-cta')).toBeVisible()
    await expect(page.locator('.brand-logo')).toBeVisible()
  })

  test('should show carousel-style section navigation on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 })
    await page.goto('/')

    const mobileNav = page.locator('.mobile-section-nav')
    await expect(mobileNav).toBeVisible()
    await expect(page.locator('.mobile-brand-logo')).toBeVisible()
    await expect(page.locator('.mobile-nav-arrow').first()).toHaveCSS('opacity', '0')
    await expect(page.locator('.mobile-nav-arrow').last()).toHaveCSS('opacity', '1')

    await page.goto('/#about')
    await expect(page.locator('.mobile-section-title')).toContainText(/Acerca de|About/i)
    await expect(page.locator('.mobile-nav-arrow').first()).toHaveCSS('opacity', '1')
  })
})
