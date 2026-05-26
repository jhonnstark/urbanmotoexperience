import { test, expect } from '@playwright/test'

test.describe('Header Visual Comparison', () => {
  test('should match reference header design', async ({ page }) => {
    // Set viewport to match reference design
    await page.setViewportSize({ width: 1491, height: 1055 })
    
    // Navigate to the page
    await page.goto('http://localhost:5174/')
    
    // Wait for page to load
    await page.waitForLoadState('networkidle')
    
    // Take a screenshot of just the header
    const header = page.locator('.topbar')
    await expect(header).toBeVisible()
    
    // Take full page screenshot for comparison
    await page.screenshot({ 
      path: 'e2e/screenshots/current-header.png',
      fullPage: false 
    })
    
    // Verify all navigation elements are present
    await expect(page.getByTestId('nav-experience')).toBeVisible()
    await expect(page.getByTestId('nav-route')).toBeVisible()
    await expect(page.getByTestId('nav-about')).toBeVisible()
    await expect(page.getByTestId('nav-faq')).toBeVisible()
    await expect(page.getByTestId('nav-book-a-ride')).toBeVisible()
    
    // Verify brand elements
    await expect(page.locator('.brand-title')).toContainText('Urban Moto')
    await expect(page.locator('.brand-sub')).toContainText('Experience')
    await expect(page.locator('.brand-city')).toContainText('CDMX')
  })
})
